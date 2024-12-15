import DataTable from "@/components/templates/p-user/comments/DataTable";
import Layout from "@/components/layouts/UserPanelLayout";
import React from "react";
import connectToDB from "@/configs/db";
import Commentmodel from "@/models/Comment";
import { authUser } from "@/utils/AuthHelper";
const page = async () => {
  connectToDB();
  const user = await authUser();
  
  const comments = await Commentmodel.find(
      { user: String(user._id) },
      "-__v"
    ).populate("productID", "name");
    
    console.log('comments=>',comments)


  return (
    <Layout>
      <main>
        <DataTable
          comments={JSON.parse(JSON.stringify(comments))}
          title="Comment lists"
        />
        {/* <p className={styles.empty}>
         there is no comment
        </p>  */}
      </main>
    </Layout>
  );
};

export default page;
