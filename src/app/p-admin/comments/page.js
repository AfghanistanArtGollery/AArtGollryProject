import React from "react";
import styles from "@/components/templates/p-admin/comments/table.module.css";
import Table from "@/components/templates/p-admin/comments/Table";
import connectToDB from "@/configs/db";
import CommentModel from "@/models/Comment";
import AdminChildLayout from "@/components/layouts/AdminChildLayout";
import { authAdmin } from "@/utils/AuthHelper";
import { redirect } from "next/navigation";
const page = async () => {
  const admin=await authAdmin()
  
  if(!admin){
    
    return redirect('/login-register')
  }

  connectToDB();
  const comments = await CommentModel.find({})
    .sort({ _id: -1 })
    // .populate("user")
    .populate("artWorkID")
    .lean();
    

  return (
    <AdminChildLayout>
      <main>
        {comments.length === 0 ? (
          <p className={styles.empty}>There is no comment</p>
        ) : (
          <Table
            comments={JSON.parse(JSON.stringify(comments))}
            title="Comment lists"
          />
        )}
      </main>
    </AdminChildLayout>
  );
};

export default page;
