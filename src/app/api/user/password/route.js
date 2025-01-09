import modeluser from "@/models/User";
import connectToDB from "@/configs/db";
import { hashPassword, valiadtePassword } from "@/utils/auth";
import { authUser } from "@/utils/AuthHelper";
import { verifyPassword } from "@/utils/auth";

export async function PUT(req, res) {
    try {

        connectToDB()
        // get authinticated user
        const user = await authUser();

        // get request body
        const body = await req.json()
        const { currentPassword, newPassword } = body
  
        
        // verify previes password
        const isValidPasswid = await verifyPassword(currentPassword, user.password)
        
        console.log('isValidPasswid',isValidPasswid)
        if (!isValidPasswid) {
            return Response.json({ message: 'invalid currend password' }, { status: 401 })
        }


        // check like * number upper case 
        const isValidPasswordRegex=valiadtePassword(newPassword)

        if(!isValidPasswordRegex){

            return Response.json({message:'your password is not valid as regex'},{status:404})

        }
        // hash password
        const hashedPassword = await hashPassword(newPassword)
        const updataPassword = await modeluser.findOneAndUpdate({ _id: user._id }, {
            password: hashedPassword
        })

        if (updataPassword) {
            return Response.json({ message: 'password succsesfully changed' }, { status: 200 })
        }

    } catch (error) {
        return Response.json({ message: 'internal server error' })
    }

}