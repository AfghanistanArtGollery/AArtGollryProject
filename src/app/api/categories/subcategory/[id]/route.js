import connectToDB from "@/configs/db";
import modelSubCategory from "@/models/SubCategory";
import mongoose from "mongoose";
export async function GET(req, { params }) {
    connectToDB();

    try {
        const categoryID = params.id;  // Access the dynamic parameter 'id' from the URL

        if (!mongoose.Types.ObjectId.isValid(categoryID)) {
            return Response.json({ message: "this is not valid object ID" })
        }
        const data = await modelSubCategory.find({ categoryID: categoryID })

        return Response.json({ message:"subgategoories...", data:data }, { status: 200 })


    } catch (err) {
        return Response.json({ message: err.message }, { status: 500 })
    }
}