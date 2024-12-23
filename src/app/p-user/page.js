import Layout from "@/components/layouts/UserPanelLayout";
import styles from "@/styles/p-user/index.module.css";
import Box from "@/components/templates/p-user/index/Box";
import Tickets from "@/components/templates/p-user/index/Tickets";
import Orders from "@/components/templates/p-user/index/Orders";
import { authUser } from "@/utils/AuthHelper";

import TicketModel from "@/models/Ticket";
import modelWish from "@/models/Wishlist";
import modelComment from "@/models/Comment";
import modelOrder from "@/models/Order";
import { redirect } from "next/navigation";
import ClientLayout from "@/components/layouts/ClientLayout";

const page = async () => {

  const user = await authUser();
  if (user === null) {
    redirect("/login-register");
  }

  const ticket = await TicketModel.find({ user: user._id }).populate('department', 'title').sort({ _id: -1 }).lean();
  const comments = await modelComment.find({ user: String(user._id) });
  const AllTickets = await TicketModel.find({ user: user._id });
  const Wishlist = await modelWish.find(({ user: user._id }));


  const orders = await modelOrder.find({ user_id: user._id }).populate('user_id', 'name').populate('artwork_id', 'name price images').lean()



  return (
    <ClientLayout>
      <main>
        
        <section className={styles.boxes}>
          <Box title="Total Tickets" value={AllTickets.length} />
          <Box title="Total Comments" value={comments.length} />
          <Box title="Total Orders" value="2" />
          <Box title="Total Wishlist Items" value={Wishlist.length} />
        </section>


        <div className="row d-flex alig-items-center mt-2">

          {/* Tickets Section */}
          <div className="col-12  col-md-6 col-sm-12 mb-4">
            <Tickets tickets={JSON.parse(JSON.stringify(ticket))} />
          </div>

          {/* Orders Section */}
          <div className="col-12  col-md-6 col-sm-12  mb-4">
            <Orders customerOrder={JSON.parse(JSON.stringify(orders))}  />
          </div>

        </div>


      </main>
    </ClientLayout>
  );
};

export default page;
