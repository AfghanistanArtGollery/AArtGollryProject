import connectToDB from "@/configs/db";
import { authUser } from "@/utils/AuthHelper";
import modelOrder from '@/models/Order'

export async function POST(req, res){

    connectToDB();
    const user= await authUser()

    try {
        const body = await req.json()

        const { artwork_id, status, payment_details, country, city, street_address, postal_code,
            mobile_number, email, order_notes
        } = body

        const billDetails = {
            user_id:user._id,
            artwork_id,
            status,
            payment_details,
            order_date:Date.now(),
            country,
            city,
            street_address,
            postal_code,
            mobile_number,
            email,
            order_notes
        }

        await modelOrder.create(billDetails)

        return Response.json({ message: 'bill details successfully saved' }, { status: 201 })

    } catch (err) {
        return Response.json({ message:err.message }, { status: 500 })
    }




}



export async function GET(req, res) {
    connectToDB()
    try {
        const data = await modelOrder.find({})
        return Response.json({ data }, { status: 200 })

    } catch (error) {
        return Response.json({ message: err.message }, { status: 500 });

    }
}