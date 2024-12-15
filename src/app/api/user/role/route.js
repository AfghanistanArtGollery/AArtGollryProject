import connectToDB from "@/configs/db"
import userModel from '@/models/User'

export async function PUT(req) {
console.log('deleted ok')

    try {
        connectToDB()
        const body = await req.json();
        const { id } = body

        // find user
        const user = await userModel.findOne({ _id: id }).lean();

        await userModel.findOneAndUpdate({ _id: id }, {
            $set: {
                role: user.role === "USER" ? "ADMIN" : "USER"
            }
        })



        return Response({ message: 'user succsfully upadated' },{status:200})

    } catch (err) {
        return Response.json({ message: err }, { status: 500 })
    }
}