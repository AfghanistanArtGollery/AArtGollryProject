import Layout from "@/components/layouts/UserPanelLayout";
import styles from "@/styles/p-user/index.module.css";
import Box from "@/components/templates/p-user/index/Box";
import Tickets from "@/components/templates/p-user/index/Tickets";
import Orders from "@/components/templates/p-user/index/Orders";
import { authUser } from "@/utils/AuthHelper";

import TicketModel from "@/models/Ticket";
import modelWish from "@/models/Wishlist";
import modelComment from "@/models/Comment";
import { redirect } from "next/navigation";

const page = async () => {

  const user = await authUser();
  if (user === null) {
    redirect("/login-register");
  }

  const ticket = await TicketModel.find({ user: user._id }).populate('department', 'title').sort({ _id: -1 }).lean();
  const comments = await modelComment.find({ user: String(user._id) });
  const AllTickets = await TicketModel.find({ user: user._id });
  const Wishlist = await modelWish.find(({ user: user._id }));


  return (
    <Layout>
      <main>
        <section className={styles.boxes}>
          <Box title="Total Tickets" value={AllTickets.length} />
          <Box title="Total Comments" value={comments.length} />
          <Box title="Total Orders" value="2" />
          <Box title="Total Wishlist Items" value={Wishlist.length} />
        </section>


        <div className="row d-flex alig-items-center mt-2">

          {/* Tickets Section */}
          <div className="col-6  col-md-5 col-sm-12 mb-4">
            <Tickets tickets={JSON.parse(JSON.stringify(ticket))} />
          </div>

          {/* Orders Section */}
          <div className="col-6 col-md-5 col-sm-12  mb-4">
            <Orders  />
          </div>

        </div>


      </main>
    </Layout>
  );
};

export default page;
