import connectToDB from "@/configs/db"
import modelWishlist from "@/models/Wishlist"
export async function POST(req) {
  

    try {
        connectToDB()
        const body = await req.json()
        console.log('body=>',body)

        const { user, artWorkID } = body

        const wish= await modelWishlist.findOne({user,artWorkID})
        if(!wish){
            
            await modelWishlist.create({ user, artWorkID })

        }

        return Response.json({ message: "Artwork  added successfully to wishlist"}, { status: 201 })
    } catch (err) {
        return Response.json({ message: err.message }, { status: 500 })
    }





}

