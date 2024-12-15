import React from "react";
import AdminPanelLayout from "@/components/layouts/AdminPanelLayout";

import styles from "@/styles/p-admin/index.module.css";
import Box from "@/components/modules/infoBox/InfoBox";
// import SaleChart from "@/components/templates/p-admin/index/SaleChart";
// import GrowthChart from "@/components/templates/p-admin/index/GrowthChart";

import TicketModel from "@/models/Ticket";
import CommentModel from "@/models/Comment";
import UserModel from "@/models/User";
import modelArtwork from "@/models/ArtWork";
import connectToDB from "@/configs/db";

async function AdminHomePage() {
  connectToDB();
  const tickets = await TicketModel.find({}).lean();
  const users = await UserModel.find({}).lean();
  const artworks = await modelArtwork.find({}).lean();

  return (
    <AdminPanelLayout>
      <main>
        <section className={styles.dashboard_contents}>
          <Box title="Total Received Tickets" value={tickets.length} />
          <Box title="Total Artworks on Site" value={artworks.length} />
          <Box title="Total Orders" value="333" />
          <Box title="Total Users on Site" value={users.length} />
        </section>{" "}
        <div className={styles.dashboard_charts}>
          <section>
            <p>Sales Statistics</p>
            {/* <SaleChart /> */}
          </section>
          <section>
            <p>Growth Rate</p>
            {/* <GrowthChart /> */}
          </section>
        </div>
      </main>
    </AdminPanelLayout>
  );
}

export default AdminHomePage;
