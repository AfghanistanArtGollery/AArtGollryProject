import connectToDB from "@/configs/db";
import artWorkModel from "@/models/ArtWork";
import modelComment from "@/models/Comment";
import DOMPurify from "dompurify";
import { JSDOM } from 'jsdom'





// Create a new JSDOM instance
const window = new JSDOM('').window
// Pass the window object to DOMPurify
const purify = DOMPurify(window)



// POST route to create a comment
export async function POST(req) {
    try {
        // Connect to DB
        await connectToDB();

        // Get the request body
        const reqBody = await req.json();
        const { username, body, email, score, artWorkID } = reqBody;

        // Validation checks
        if (!username || !body || !email || !score || !artWorkID) {
            return new Response(
                JSON.stringify({ message: "Missing required fields" }),
                { status: 400 }
            );
        }

        if (body.length > 500) {
            return new Response(
                JSON.stringify({ message: "Comment body is more than 500 characters" }),
                { status: 400 }
            );
        }

        // Sanitize the body to prevent XSS attack
        const sanitizedBody = purify.sanitize(body);


        // Create the comment object
        const comments = {
            username,
            body: sanitizedBody,
            email,
            score,
            artWorkID,
        };

        // Create the comment in the database
        const comment = await modelComment.create(comments);

        // Push the comment's ID into the artwork's comments array
        const updatedProduct = await artWorkModel.findOneAndUpdate(
            { _id: artWorkID },
            {
                $push: { comments: comment._id },
            },
            { new: true }
        );

        // Return success response with the comment details
        return new Response(
            JSON.stringify({ message: "Successfully created comment", comment }),
            { status: 201 }
        );
    } catch (err) {
        // Handle any errors and return an error response
        console.error(err);
        return new Response(
            JSON.stringify({ message: "Internal server error" }),
            { status: 500 }
        );
    }
}

// GET route to fetch all comments
export async function GET(req) {
    try {
        // Connect to DB
        await connectToDB();

        // Fetch all comments
        const data = await modelComment.find({}, "-__v");

        // Return success response with comments
        return new Response(
            JSON.stringify({ message: "Comments fetched successfully", data }),
            { status: 200 }
        );
    } catch (err) {
        // Handle any errors and return an error response
        console.error(err);
        return new Response(
            JSON.stringify({ message: "Internal server error" }),
            { status: 500 }
        );
    }
}
