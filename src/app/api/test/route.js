import { authUser } from "@/utils/AuthHelper"
export async function GET(req) {
     

const user= await authUser()
    
    return Response.json({message:'for test'})
    
}