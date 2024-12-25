import React from "react";
import Table from "@/components/templates/p-admin/artworks/Table";
import connectToDB from "@/configs/db";
import modelCategory from "@/models/Category";
import AddArtWork from "@/components/templates/p-user/postart/addArt";
import ClientLayout from "@/components/layouts/ClientLayout";
import { authUser } from "@/utils/AuthHelper";
import { redirect } from "next/navigation";

const page = async () => {

  const user=await authUser()
  
  if(!user){
    
    return redirect('/login-register')
  }
  connectToDB();
  const Categories = await modelCategory.find({}).sort({ _id: -1 }).lean();

  return (
    <ClientLayout>
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
    </ClientLayout>
  );
};

export default page;
