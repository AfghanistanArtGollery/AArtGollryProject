import connectToDB from "@/configs/db";
import modelArtwork from "@/models/ArtWork";
import mongoose from "mongoose";
import { NextResponse } from "next/server"; // Correct import for response handling

export async function GET(req, { params }) {
    try {
        // Establish DB connection
        await connectToDB();
        console.log('hello from artwork');

        const artWorkId = params.id;
        console.log('artWorkId =>', artWorkId);

        // Validate ObjectId
        if (!mongoose.Types.ObjectId.isValid(artWorkId)) {
            return NextResponse.json({ message: "This is not a valid ObjectID" }, { status: 404 });
        }

        // Query the artwork by the correct ID
        const data = await modelArtwork.findOne({ _id: artWorkId });
        
        if (!data) {
            return NextResponse.json({ message: 'No artwork found' }, { status: 404 });
        }

        return NextResponse.json({ data }, { status: 200 });

    } catch (error) {
        console.error('Error occurred:', error);
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}
