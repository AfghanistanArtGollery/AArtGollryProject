import connectToDB from "@/configs/db"
import modelUser from "@/models/User"
import modelWishlist from "@/models/Wishlist"
export async function POST(req) {


    try {
        connectToDB()
        const body = await req.json()
        const { user, product } = body

        const wish= await modelWishlist.findOne({user,product})
        if(!wish){
            
            await modelWishlist.create({ user, product })

        }

        return Response.json({ message: "User and product added successfully to wishlist"}, { status: 201 })
    } catch (err) {
        return Response.json({ message: err }, { status: 500 })
    }





}

