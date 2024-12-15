import connectToDB from "@/configs/db";
import modelMaterial from '@/models/Material'

export async function POST(req, res) {
    connectToDB()

    try {

        const body = await req.json()
        const { title } = body;

        await   modelMaterial.create({ title })
        return Response.json({ message: "materils saved addedd successfully" }, { status: 201 })
    } catch (err) {
        return Response.json({ message: err.message }, { status: 500 })
    }


}



export async function GET() {
    
    connectToDB();

    const getMetrial= await modelMaterial.find({})

    return Response.json(getMetrial)
}