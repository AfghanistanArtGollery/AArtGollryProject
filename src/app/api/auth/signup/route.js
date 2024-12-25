import connectToDB from "@/configs/db";
import UserModel from "@/models/User";
import { generateAccessToken, hashPassword } from "@/utils/auth";
import { roles } from "@/utils/constants";
import {
  valiadteEmail,
  valiadtePassword,
} from "@/utils/auth";

export async function POST(req) {
  connectToDB();
  const body = await req.json();
  const { name, phone, email, password } = body;

  const isValidPassword = valiadtePassword(password);
  if ( !isValidPassword) {
    return Response.json(
      { message: "Password is Not follow from rolle " },
      { status: 419 }
    );
  }

  const isUserExist = await UserModel.findOne({
    $or: [{ name }, { email }, { phone }],
  });

  if (isUserExist) {
    return Response.json(
      {
        message: "The username or email or phone exist already !!",
      },
      {
        status: 422,
      }
    );
  }

  const hashedPassword = await hashPassword(password);
  const accessToken = generateAccessToken({ email });

  const users = await UserModel.find({});

  await UserModel.create({
    name,
    email,
    phone,
    password: hashedPassword,
    role: users.length > 0 ? roles.USER : roles.ADMIN,
  });

  return Response.json(
    { message: "User signed up successfully :))" },
    {
      status: 201,

      headers: { "Set-Cookie": `token=${accessToken};path=/;httpOnly=true;secure=true;SameSite=Strict` },
    }
  );
}
