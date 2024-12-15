import connectToDB from "@/configs/db";
import userModel from "@/models/User";
import { authUser } from "@/utils/AuthHelper";


export async function POST(req) {

  try {
    connectToDB();
    const user = await authUser();
    const body = await req.json();
    const { name, email, phone } = body;

    // Validation (You)

    await userModel.findOneAndUpdate({ _id: user.user_id }, {
      $set: {
        name,
        email,
        phone,
      },
    })




    return Response.json(
      { message: "User updated successfully :))" },
      { status: 200 }
    );
  } catch (err) {
    return Response.json({ message: err }, { status: 500 });
  }
}


export async function DELETE(req) {
  console.log('helo from delete route')
  try {
    connectToDB();
    const body = await req.json()

    const { id } = body;

    const user = await userModel.findOneAndDelete({ _id: id })

    return Response.json({ message: "user successfully delted" }, { status: 200 })

  } catch (err) {
    return Response.json({ message: 'internal server erroe', err })
  }


}