import connectToDB from "@/configs/db";
import modelComment from "@/models/Comment";
import mongoose from "mongoose";

export async function PUT(req,{params}){
    connectToDB();
   const commentID=params.id
 // Find the comment by its ID
 const comment = await modelComment.findById(commentID);
    try {
        
             await modelComment.findOneAndUpdate(
            { _id: commentID }, // find the commner by comment ID
            {
              $set: { isAccept:comment.isAccept==false?true:false}, 
            },
            { new: true } // return the updated 
          );

          
          return Response.json({message:"Comment successfully approve and update"},{status:200})



    } catch (error) {
        return Response.json({message:error.message},{status:500})
        
    }





}


export async function DELETE(req,{params}){
    connectToDB();
   const commentID=params.id
 
    try {
        
             await modelComment.findByIdAndDelete( commentID )// find the commner by comment ID);

          
          return Response.json({message:"Comment successfully Deleted "},{status:200})



    } catch (error) {
        return Response.json({message:error.message},{status:500})
        
    }





}