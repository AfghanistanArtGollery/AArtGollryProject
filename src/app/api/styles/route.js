import connectToDB from "@/configs/db";
import modelStyle from '@/models/Style'

export async function POST(req, res) {
    connectToDB()

    try {

        const body = await req.json()
        const { title } = body;

        await   modelStyle.create({ title })
        return Response.json({ message: "styles addedd successfully" }, { status: 201 })
    } catch (err) {
        return Response.json({ message: err.message }, { status: 500 })
    }


}

export async function GET() {
    
    connectToDB();

    const getStyle= await modelStyle.find({})

    return Response.json(getStyle)
}