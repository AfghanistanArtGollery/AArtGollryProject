import React from "react";
import Layout from "@/components/layouts/AdminPanelLayout";
import styles from "@/components/templates/p-admin/products/table.module.css";
import Table from "@/components/templates/p-admin/products/Table";
import connectToDB from "@/configs/db";
import modelCategory from "@/models/Category";
import AddProduct from "@/components/templates/p-admin/products/AddProduct";

const page = async () => {
  connectToDB();
  const Categories = await modelCategory.find({}).sort({ _id: -1 }).lean();

  return (
    <Layout>
      <main>
        <AddProduct Categories={JSON.parse(JSON.stringify(Categories))}  />

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
    </Layout>
  );
};

export default page;
