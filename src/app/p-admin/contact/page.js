import React from 'react'
import AdminChildLayout from "@/components/layouts/AdminChildLayout";
import Table from "@/components/templates/p-admin/contact/Table";

import connectToDB from "@/configs/db";
import contactModel from "@/models/Contact";
import { authAdmin } from '@/utils/AuthHelper';
import { redirect } from 'next/navigation';
export default async function page() {
    const admin=await authAdmin()
  
    if(!admin){
      
      return redirect('/login-register')
    }
    connectToDB();

    const contactLists = await contactModel.find({})
        .sort({ _id: -1 }).lean();

    return (
        <AdminChildLayout>
            <main>
                {contactLists.length === 0 ? (
                    <p className={styles.empty}>Ther is no tickets</p>
                ) : (
                    <Table
                        contacts={JSON.parse(JSON.stringify(contactLists))}
                        title="Contact lists"
                    />
                )}
            </main>
        </AdminChildLayout>
    )
}




