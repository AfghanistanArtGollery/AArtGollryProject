import connectToDB from "@/configs/db";
import modelSubject from '@/models/Subject'

export async function POST(req, res) {
    connectToDB()

    try {

        const body = await req.json()
        const { title } = body;

        await   modelSubject.create({ title })
        return Response.json({ message: "Subject saved successfully" }, { status: 201 })
    } catch (err) {
        return Response.json({ message: err.message }, { status: 500 })
    }


}

export async function GET() {
    
    connectToDB();

    const getSubject= await modelSubject.find({})

    return Response.json(getSubject)
}