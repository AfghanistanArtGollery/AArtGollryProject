import connectToDB from "@/configs/db";
import BlogModel from "@/models/Blog";
import { authUser } from "@/utils/AuthHelper";
import { writeFile } from "fs/promises"; // To save files to the server
import path from "path";


export async function POST(req) {
    const user = await authUser();

    try {
        connectToDB();

        const formData = await req.formData(); // Handle multipart form data

        // Extract form fields
        const title = formData.get("title");
        const excerpt = formData.get("excerpt");
        const content = formData.get("content");
        const categoryID = formData.get("categoryID");

        const file = formData.get("img");
          let imagePath
          
          if (file) {
              const buffer = await file.arrayBuffer();
              const filename = `${Date.now()}_${file.name}`;
              const filePath = path.join(process.cwd(), "public/uploads", filename);
              
              await writeFile(filePath, Buffer.from(buffer));
              
              imagePath = `http://localhost:3000/uploads/${filename}`; // Set image path
            }
            
           

        const blogPost = {
            title,
            excerpt,
            content,
            categoryID,
            userID:user._id,
            img:imagePath
        }
        
        await BlogModel.create(blogPost)


        // // Update blog data in DB
        // const updatedUser = await userModel.findOneAndUpdate(
        //     { _id: user._id },
        //     {
        //         $set: {
        //             published:true
        //         },
        //     },
        //     { new: true }
        // );

        return Response.json(
            { message: "blog posted successfully" },
            { status: 201 }
        );
    } catch (err) {
        console.error(err);
        return Response.json(
            { message: "Internal server error", error: err.message },
            { status: 500 }
        );
    }
}






// export async function DELETE(req) {
//     console.log('helo from delete route')
//     try {
//         connectToDB();
//         const body = await req.json()

//         const { id } = body;

//         const user = await userModel.findOneAndDelete({ _id: id })

//         return Response.json({ message: "user successfully delted" }, { status: 200 })

//     } catch (err) {
//         return Response.json({ message: 'internal server erroe', err })
//     }


// }