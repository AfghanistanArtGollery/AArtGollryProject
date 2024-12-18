import connectToDB from "@/configs/db";
import userModel from "@/models/User";

import { authUser } from "@/utils/AuthHelper";
import { writeFile } from "fs/promises"; // To save files to the server
import path from "path";


export async function POST(req) {
  const user = await authUser();
  console.log('user=>auth',user)
  try {
    connectToDB();

    const formData = await req.formData(); // Handle multipart form data

    // Extract form fields
    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const file = formData.get("avatar");

    let imagePath

    if (file) {
      const buffer = await file.arrayBuffer();
      const filename = `profile_${user._id}_${Date.now()}_${file.name}`;
      const filePath = path.join(process.cwd(), "public/uploads", filename);

      await writeFile(filePath, Buffer.from(buffer));
     
      imagePath = `http://localhost:3000/uploads/${filename}`; // Set image path
    }

  

    // Update user data in DB
    const updatedUser = await userModel.findOneAndUpdate(
      { _id: user._id },
      {
        $set: {
          name,
          email,
          phone,
          avatar: imagePath || undefined, // Only update avatar if provided
        },
      },
      { new: true }
    );
  
    return Response.json(
      { message: "User updated successfully", user: updatedUser },
      { status: 200 }
    );
  } catch (err) {
    console.error(err);
    return Response.json(
      { message: "Internal server error", error: err.message },
      { status: 500 }
    );
  }
}






export async function DELETE(req) {
  console.log('helo from delete route')
  try {
    connectToDB();
    const body = await req.json()

    const { id } = body;

    const user = await userModel.findOneAndDelete({ _id: id })

    return Response.json({ message: "user successfully delted" }, { status: 200 })

  } catch (err) {
    return Response.json({ message: 'internal server erroe', err })
  }


}