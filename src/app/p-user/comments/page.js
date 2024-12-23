import DataTable from "@/components/templates/p-user/comments/DataTable";
import React from "react";
import styles from "@/components/templates/p-admin/comments/table.module.css";

import connectToDB from "@/configs/db";
import Commentmodel from "@/models/Comment";
import { authUser } from "@/utils/AuthHelper";
import ClientLayout from "@/components/layouts/ClientLayout";
const page = async () => {
  connectToDB();
  const user = await authUser();
  
  const comments = await Commentmodel.find(
      { email:user.email},
      "-__v"
    ).populate("artWorkID", "name");
    


  return (
    <ClientLayout>
      <main>
        <DataTable
          comments={JSON.parse(JSON.stringify(comments))}
          title="Comment lists"
        />

        {comments.length===0&&(
        <p className={styles.empty}>
         there is no comment
        </p>  


        )}
      </main>
    </ClientLayout>
  );
};

export default page;
