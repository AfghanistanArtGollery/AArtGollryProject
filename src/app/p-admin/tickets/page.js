import React from "react";
import Layout from "@/components/layouts/AdminPanelLayout";
import styles from "@/components/templates/p-admin/ticketes/table.module.css";
import Table from "@/components/templates/p-admin/ticketes/Table";

import connectToDB from "@/configs/db";
import TicketModel from "@/models/Ticket";

const page = async () => {
  connectToDB();

    const tickets = await TicketModel.find({ isAnswer: false })
    .sort({ _id: -1 })
    .populate("user")
    .populate("department")
    .lean();



  return (
    <Layout>
      <h1>hello</h1>
      <main>
        {tickets.length === 0 ? (
          <p className={styles.empty}>Ther is no tickets</p>
        ) : (
          <Table
            tickets={JSON.parse(JSON.stringify(tickets))}
            title="user lists"
          />
        )}
      </main> 
    </Layout>
  );
};

export default page;
