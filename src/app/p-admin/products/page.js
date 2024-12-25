import React from "react";

import connectToDB from "@/configs/db";
import modelCategory from "@/models/Category";
import AddArtWork from "@/components/templates/p-admin/artworks/AddArtWork";
import AdminChildLayout from "@/components/layouts/AdminChildLayout";
import { authAdmin } from "@/utils/AuthHelper";
import { redirect } from "next/navigation";
const page = async () => {
  const admin=await authAdmin()
  
  if(!admin){
    
    return redirect('/login-register')
  }
  connectToDB();
  const Categories = await modelCategory.find({}).sort({ _id: -1 }).lean();

  return (
    <AdminChildLayout>
      <main>
        <AddArtWork Categories={JSON.parse(JSON.stringify(Categories))}  />

        {/* {Categories.length === 0 ? (
          <p className={styles.empty}>ther is no arts work</p>
        ) : (
          <></>
          // <Table
          //   products={JSON.parse(JSON.stringify(products))}
          //   title="Arts lists"
          // />
        )} */}
      </main>
    </AdminChildLayout>
  );
};

export default page;
