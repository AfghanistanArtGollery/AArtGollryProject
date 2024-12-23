import connectToDB from "@/configs/db";
import artWorkModel from "@/models/ArtWork";
import modelComment from "@/models/Comment";
export async function  POST(req){
    connectToDB();
    try{


        const reqBody=await req.json()
        const{
            username,
            body,
            email,
            score,
            artWorkID
        }=reqBody


        const comments={
            username,
            body,
            email,
            score,
            artWorkID 
        }


        // create in database table in comment table
        const comment= await modelComment.create(comments)

        // const updatedProduct=await artWorkModel.findOneAndUpdate({_id:artWorkID},
        //     {
        //         $push:{
        //             // push comments in comments column in product table
        //          comments:comment._id
        //         }

        //     }
        // )

        const updatedProduct = await artWorkModel.findOneAndUpdate(
            { _id: artWorkID }, // find the product by artWorkID
            {
              $push: { comments: comment._id }, // push the comment's _id to the comments array
            },
            { new: true } // return the updated product
          );








        // const updatedProduct = await artWorkModel.findOneAndUpdate(
        //     {
        //       _id: comment.artWorkID,
        //     },
        //     {
        //       $push: { comments: comment._id },
        //     }
           
        //   );

        return Response.json({message:"successfully created comment",comment},{status:201})



    }catch(err){

    }
    }

    export async function GET(req){

        connectToDB();

        const data= await modelComment.find({},'-__v')
        return Response.json({message:"comments",data})
    }