import connectToDB from "@/configs/db";
import ContactModel from "@/models/Contact";
import nodemailer from "nodemailer"; // Import directly, no need to use require

export async function POST(req) {
  try {
  
    await connectToDB();

    const body = await req.json();
    const { email, bodyMassage, contactID } = body;

    // Find the contact using the contact ID
    const updateAnswerContact = await ContactModel.findOneAndUpdate(
      { _id: contactID },
      { new: true } // To return the updated document
    );

    // If no contact is found, return 404
    if (!updateAnswerContact) {
      return new Response(
        JSON.stringify({ message: "Contact not found" }),
        { status: 404 }
      );
    }

    // Create the transporter object using SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER, 
        pass: process.env.GMAIL_PASS,
      },
    });

    // Email message configuration
    const message = {
      from: process.env.GMAIL_USER, // from .env file
      to: email,
      subject: "AFG Art Gallery",
      text: bodyMassage,
    };

    // Send the email
    await transporter.sendMail(message);

    // After email is sent, update the contact's answer field
    await ContactModel.findOneAndUpdate(
      { _id: contactID },
      { answer: 1 } // Assuming 1 indicates an answer has been sent
    );

    // Return a success response
    return new Response(
      JSON.stringify({ message: "Email sent successfully!" }),
      { status: 200 }
    );
  } catch (err) {
    console.error("Error:", err);
    // Return error response
    return new Response(
      JSON.stringify({ message: err.message }),
      { status: 500 }
    );
  }
}
