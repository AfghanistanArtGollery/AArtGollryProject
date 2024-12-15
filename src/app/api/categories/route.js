import connectToDB from "@/configs/db";
import modelCategory from '@/models/Category'

export async function POST(req, res) {
    connectToDB()

    try {

        const body = await req.json()
        const { title } = body;

        await modelCategory.create({ title })
        return Response.json({ message: "category addedd successfully" }, { status: 201 })
    } catch (err) {
        return Response.json({ message: err.message }, { status: 500 })
    }


}

export async function GET() {
    
    connectToDB();

    const getCategory= await modelCategory.find({})

    return Response.json(getCategory)
}