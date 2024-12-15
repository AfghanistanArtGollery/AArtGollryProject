import { authUser } from "@/utils/AuthHelper"
export async function GET(req) {
     

const user= await authUser()
console.log('user test=>',user)
    
    return Response.json({message:'for test'})
    
}