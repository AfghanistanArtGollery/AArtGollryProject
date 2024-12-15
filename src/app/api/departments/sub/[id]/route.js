import mongoose from "mongoose";
import connectToDB from "@/configs/db";
import modelSub from "@/models/SubDepartment";

export async function GET(req, { params }) {
  await connectToDB();

  const subID = params.id;

  // Check if subID is a valid ObjectId
  if (!mongoose.Types.ObjectId.isValid(subID)) {
    return new Response(
      JSON.stringify({ message: "Invalid ObjectId" }),
      { status: 400 }
    );
  }

  const data = await modelSub.find({ department: subID });

  return new Response(JSON.stringify({ message: "subdepartment", data }), {
    status: 200,
  });
}
