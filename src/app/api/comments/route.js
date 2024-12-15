import connectToDB from "@/configs/db";
import Productmodel from "@/models/Product";
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
            productID
        }=reqBody


        const comments={
            username,
            body,
            email,
            score,
            productID 
        }


        // create in database table in comment table
        const comment= await modelComment.create(comments)

        // const updatedProduct=await Productmodel.findOneAndUpdate({_id:productID},
        //     {
        //         $push:{
        //             // push comments in comments column in product table
        //          comments:comment._id
        //         }

        //     }
        // )

        const updatedProduct = await Productmodel.findOneAndUpdate(
            { _id: productID }, // find the product by productID
            {
              $push: { comments: comment._id }, // push the comment's _id to the comments array
            },
            { new: true } // return the updated product
          );








        // const updatedProduct = await Productmodel.findOneAndUpdate(
        //     {
        //       _id: comment.productID,
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