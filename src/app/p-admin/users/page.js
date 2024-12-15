import React from "react";
import Layout from "@/components/layouts/AdminPanelLayout";
import styles from "@/components/templates/p-admin/users/table.module.css";
import Table from "@/components/templates/p-admin/users/Table";
import connectToDB from "@/configs/db";
import UserModel from "@/models/User";

const page = async () => {
  connectToDB();
  const users = await UserModel.find({}).lean();

  return (
    <Layout>
      <main>
        {users.length === 0 ? (
          <p className={styles.empty}>User not exsit</p>
        ) : (
          <Table
            users={JSON.parse(JSON.stringify(users))}
            title="User lists"
          />
        )}
      </main>
    </Layout>
  );
};

export default page;
