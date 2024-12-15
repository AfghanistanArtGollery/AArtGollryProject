import connectToDB from "@/configs/db";
import modelSubCategory from '@/models/SubCategory'

export async function POST(req, res) {


    connectToDB();

    try {
        const body = await req.json()
        const { title, categoryID } = body;
        const sub = await modelSubCategory.create({ title, categoryID })
        console.log(sub)
        return Response.json({ message: "successfully addedd subcateory",sub }, { status: 201 })
    } catch (err) {
        return Response.json({ message: err.message }, { status: 500 })
    }

}