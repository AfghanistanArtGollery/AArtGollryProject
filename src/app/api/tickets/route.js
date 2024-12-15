import connectToDB from "@/configs/db";
import TicketModel from "@/models/Ticket";
import { authUser } from "@/utils/AuthHelper";
export async function POST(req) {
 
  const user = await authUser()
  console.log('userfrom-ticket',user)

  try {
     connectToDB();
    const reqBody = await req.json();
    const { title, body, department, subDepartment, priority } = reqBody;

    // Validation (You)
    if (!title || !body || !department || !subDepartment) {
      throw new Error('Missing required fields');
    }

    // Create ticket
    const ticket = await TicketModel.create({
      title,
      body,
      department,
      subDepartment,
      priority,
      user:user._id
    });

    return new Response(
      JSON.stringify({ message: "Ticket saved successfully :))", ticket }),
      { status: 201 }
    );
  } catch (err) {
    console.error("Error during ticket creation:", err); // Log the error
    return new Response(
      JSON.stringify({ message: "Error in server", error: err.message }),
      { status: 500 }
    );
  }
}
