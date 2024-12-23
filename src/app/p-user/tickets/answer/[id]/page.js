import styles from "@/styles/p-user/answerTicket.module.css";
import Link from "next/link";
import Answer from "@/components/templates/p-user/tickets/Answer";
import connectToDB from "@/configs/db";

import TicketModel from "@/models/Ticket";
import ClientLayout from "@/components/layouts/ClientLayout";

const page = async ({ params }) => {
  const ticketID = params.id;

  connectToDB();

  const ticket = await TicketModel.findOne({ _id: ticketID }).populate('user', 'name').lean();

  // const answerTicket=null
  const answerTicket = await TicketModel.findOne({
    mainTicket: ticket._id,
  }).populate("user", "name");




  return (
    <ClientLayout>
      <main className={styles.container}>

        <h1 className={styles.title}>
          <span> My tickets</span>
          <Link className={styles.title_mobile} href="/p-user/tickets/sendTicket">Send new ticket</Link>
        </h1>

        <div>


         {  <Answer type="user"  answerTicket={JSON.parse(JSON.stringify(ticket))}  /> }       

          {answerTicket &&
            <Answer type="admin"  answerTicket={JSON.parse(JSON.stringify(answerTicket))} />
          }

          {
            !answerTicket &&
            <div className={styles.empty}>
              <p>There is no answred to ticket</p>

            </div>
          }
        </div>
      </main>
    </ClientLayout>
  );
};

export default page;
