import React from "react";
import styles from "@/components/templates/p-admin/users/table.module.css";
import Table from "@/components/templates/p-admin/users/Table";
import connectToDB from "@/configs/db";
import UserModel from "@/models/User";
import AdminChildLayout from "@/components/layouts/AdminChildLayout";

const page = async () => {
  connectToDB();
  const users = await UserModel.find({}).lean();

  return (
    <AdminChildLayout>
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
    </AdminChildLayout>
  );
};

export default page;
