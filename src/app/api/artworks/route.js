import connectToDB from "@/configs/db";
import ArtWorkModel from "@/models/ArtWork";

import { Buffer } from "buffer";
import { writeFile } from 'fs/promises'
import { authUser } from "@/utils/AuthHelper";
import path from 'path'


export async function POST(req) {
  const user = await authUser()



  try {
    connectToDB();

    const formData = await req.formData();
    const name = formData.get('name');
    const subject = formData.get('subject');
    const material = formData.get('material');
    const style = formData.get('style');
    const framed = formData.get('framed');
    const shortDescription = formData.get('shortDescription');
    const longDescription = formData.get('longDescription');
    const price = formData.get('price');
    const width = formData.get('dimensions[width]');
    const height = formData.get('dimensions[height]');
    const dimensions = { width, height };
    const categoryID = formData.get('categoryID')
    const subjectID = formData.get('subjectID')
    const materialID = formData.get('materialID')
    const styleID = formData.get('styleID')
    const subCategoryID = formData.get('subCategoryID') || null

    const images = formData.getAll('images');
    const tags = formData.get('tags');

    // Check if image is present
    if (images.lenght == 0) {
      return Response.json({ message: 'atleast one image required' }, { status: 400 });
    }

    let imageURLS = []

    for (let image of images) {

      const buffer = Buffer.from(await image.arrayBuffer());  // Convert image to buffer
      const fileName = Date.now() + image.name;  // Unique filename

      // Save the file path
      const filePath = path.join(process.cwd(), 'public', 'uploads', fileName);

      // Write the image to the file system
      await writeFile(filePath, buffer);
      imageURLS.push(`http://localhost:3000/uploads/${fileName}`)
    }

    // Create the artwork object
    const artwork = {
      name,
      subject,
      material,
      style,
      framed,
      price,
      shortDescription,
      longDescription,
      dimensions,
      artist_id: user._id,  // Use the authenticated user's _id
      categoryID,
      subjectID,
      materialID,
      styleID,
      subCategoryID,
      tags,
      images: imageURLS,
    };

    // Save the artwork to the database
    const newArtwork = await ArtWorkModel.create(artwork);

    return Response.json({ message: "Successfully created artwork", newArtwork }, { status: 201 });
  } catch (err) {
    console.log('Error:', err);  // Debugging the error
    return Response.json({ message: err.message }, { status: 500 });
  }
}
