import React from "react";

import styles from "@/styles/p-admin/index.module.css";
import Box from "@/components/modules/infoBox/InfoBox";
// import SaleChart from "@/components/templates/p-admin/index/SaleChart";
// import GrowthChart from "@/components/templates/p-admin/index/GrowthChart";
import { authAdmin } from "@/utils/AuthHelper";
import TicketModel from "@/models/Ticket";
import CommentModel from "@/models/Comment";
import UserModel from "@/models/User";
import modelArtwork from "@/models/ArtWork";
import modelOrders from '@/models/Order'
import connectToDB from "@/configs/db";
import AdminChildLayout from "@/components/layouts/AdminChildLayout";
import SaleChart from "@/components/templates/p-admin/index/SaleChart";
import GrowthChart from "@/components/templates/p-admin/index/GrowthChart";

import { redirect } from "next/navigation";
async function AdminHomePage() {

  // if the user is not admin he or she can access the admin panel
  const admin=await authAdmin()
  
  if(!admin){
    
    return redirect('/login-register')
  }

  connectToDB();
  const tickets = await TicketModel.find({}).lean();
  const users = await UserModel.find({}).lean();
  const artworks = await modelArtwork.find({}).lean();
  const orders= await modelOrders.find({}).lean()
  return (
    <AdminChildLayout>
      <main>
        <section className={styles.dashboard_contents}>
          <Box title="Total Received Tickets" value={tickets.length} />
          <Box title="Total Artworks on Site" value={artworks.length} />
          <Box title="Total Orders" value={orders.length} />
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
    </AdminChildLayout>
  );
}

export default AdminHomePage;
