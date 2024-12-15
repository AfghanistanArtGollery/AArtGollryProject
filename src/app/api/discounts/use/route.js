import connectToDB from "@/configs/db";
import modelDis from "@/models/Discount";

export async function PUT(req) {
   try {
      // Ensure that the database connection is established before continuing
      await connectToDB();

      // Parse the incoming request body
      const body = await req.json();
      const { code } = body;
      
      // Find the discount by the provided code
      const discount = await modelDis.findOne({ code });
      // Otherwise, increment the 'uses' field by 1
      const updatedDiscount = await modelDis.findOneAndUpdate(
         { code },
         { $inc: { uses: 1 } },
         { new: true }  // Return the updated document
      );

      // If discount is not found, return a 404 response
      if (!discount) {
         return new Response(
            JSON.stringify({ message: 'This code is not valid' }),
            { status: 404, headers: { 'Content-Type': 'application/json' } }
         );
      }

      // If the discount's maxUse limit has been reached, return a 422 response
      if (discount.maxUse === discount.uses) {
         return new Response(
            JSON.stringify({ message: 'This code has expired' }),
            { status: 422, headers: { 'Content-Type': 'application/json' } }
         );
      }else{

         // Return the updated discount data as a successful response
         return Response.json(discount)
      }


      

   } catch (error) {
      // Handle unexpected errors and return a 500 response
      console.error(error);
      return new Response(
         JSON.stringify({ message: 'Server error', error: error.message }),
         { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
   }
}
