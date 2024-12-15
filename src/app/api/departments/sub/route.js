import connectToDB from "@/configs/db"
import modelSubDepartment from "@/models/SubDepartment";

export async function POST(req){
    try{
        connectToDB();
        const body=await req.json();

        const {title,department}=body

        await modelSubDepartment.create({
            title,department
        })

        
        return Response.json({ message: "sub department saved successfully" }, { status: 201 })
        }catch(err){
            return Response.json(err)
        }
    
}






