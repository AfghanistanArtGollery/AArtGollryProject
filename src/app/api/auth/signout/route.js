import { cookies } from "next/headers";

export function POST(){

   cookies().delete('token')

    return Response.json({message:"succsessfulyy logout"},{status:200})
}