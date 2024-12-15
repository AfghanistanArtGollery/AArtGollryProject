import connectToDB from "@/configs/db";
import modelDepartment from "@/models/Department";

export async function POST(req) {
   
    try {
        connectToDB()
        const body = await req.json()
        const { title } = body
        await modelDepartment.create({ title })


        return Response.json({ message: "department saved successfully" }, { status: 201 })
    } catch (err) {
        return Response.json(err,{status:500})
    }
}

export async function GET() {
    
    connectToDB();

    const getDepartment= await modelDepartment.find({})

    return Response.json(getDepartment)
}