import connectToDB from "@/configs/db";
import DiscountModel from "@/models/Discount";

export async function POST(req) {
  try {
    connectToDB();
    const body = await req.json();
    const { code, percent, maxUse,artWorkID } = body;

    // Validation (You) ✅

    await DiscountModel.create({
      code,
      percent,
      maxUse,
      artWorkID

    });

    return Response.json(
      { message: "Discount code created successfully :))" },
      { status: 201 }
    );
  } catch (err) {
    return Response.json({ message: err }, { status: 500 });
  }
}
export async function GET(req,res) {

  connectToDB();

  
  try {
    const data= await DiscountModel.find({})
    return Response.json({data})
  } catch (error) {
    return Response.json({message:error.message},{status:500})
  }
  
}