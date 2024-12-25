import Table from "@/components/templates/p-admin/discounts/Table";
import styles from "@/components/templates/p-admin/discounts/table.module.css";
import connectToDB from "@/configs/db";
import DiscountModel from "@/models/Discount";
import AddDiscount from "@/components/templates/p-admin/discounts/AddDiscount";
import AdminChildLayout from "@/components/layouts/AdminChildLayout";
import { authAdmin } from "@/utils/AuthHelper";
import { redirect } from "next/navigation";

const Discounts = async () => {
  const admin=await authAdmin()
  
  if(!admin){
    
    return redirect('/login-register')
  }
  connectToDB();
  const discounts = await DiscountModel.find({}).lean();

  return (
    <AdminChildLayout>
      <main>
      <AddDiscount/>

        {discounts.length === 0 ? (
          <p className={styles.empty}>Discount does not exist...</p>
        ) : (
          <Table
            discounts={JSON.parse(JSON.stringify(discounts))}
            title="Discounts lists"
          />
        )}
      </main>
    </AdminChildLayout>
  );
};

export default Discounts;
