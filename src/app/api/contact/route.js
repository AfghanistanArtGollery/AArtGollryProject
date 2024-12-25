import connectToDB from "@/configs/db";
import ContactModel from "@/models/Contact";
import DOMPurify from 'dompurify'
import {JSDOM} from 'jsdom'
import { valiadteEmail,valiadtePhone } from "@/utils/auth";
import { validate } from "@/models/SubCategory";
const window = new JSDOM('').window
const purify= DOMPurify(window)

export async function POST(req) {


  try {
    connectToDB();
    const body = await req.json();
    const { name, email, phone, company, message } = body;

    // Validation (You)
    const isValiadteEmail= valiadteEmail(email)
    const isValiadtePhone=valiadtePhone(phone)
    
    if (!isValiadteEmail || !isValiadtePhone) {
      return Response.json(
        { message: "email or phone is not valid" },
        { status: 419 }
      );
    }
   

    // prevent from none html tags or elemenet
   const sanitizedMessage = purify.sanitize(message);


    await ContactModel.create({ name, email, phone, company, message:sanitizedMessage });

    return Response.json(
      { message: "Message saved successfully :))" },
      { status: 201 }
    );
  } catch (err) {
    return Response.json(
      { message: err.message },
      {
        status: 500,
      }
    );
  }
}
