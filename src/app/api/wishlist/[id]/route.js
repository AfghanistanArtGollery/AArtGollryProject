import modelWishlist from "@/models/Wishlist";
import connectToDB from "@/configs/db";
import { authUser } from "@/utils/AuthHelper";
export async function DELETE(req,{params}){
    
    console.log('hello ')
    try{
        connectToDB()

         const productID=params.id

        // find user
        const user= await authUser()
        if(!user){
            return Response.json({message:"you are not login"},{status:401})
        }


         await modelWishlist.findOneAndDelete({user:user._id,product:productID})
        


        return Response.json({message:"this product successfully deleted from your product"},{status:200})

    }catch(err){

        return Response.json({message:err},{status:500})
    }

    
}