
import Layout from "@/components/layouts/UserPanelLayout";
import Tickets from "@/components/templates/p-user/tickets/Tickets";
import connectToDB from "@/configs/db";

import { authUser } from "@/utils/AuthHelper";
import TicketModel from "@/models/Ticket";
import ClientLayout from "@/components/layouts/ClientLayout";

const page = async () => {
  connectToDB();
  const user = await authUser();
  const tickets = await TicketModel.find({ user: user._id, isAnswer: false })
    .populate("department", "title")
    .sort({ _id: -1 });

  return (
    <ClientLayout>
      <Tickets tickets={JSON.parse(JSON.stringify(tickets))} />
    </ClientLayout>
  );
};

export default page;
