import React from 'react'
import Topbar from '../modules/p-admin/Topbar'
import Sidebar from '../modules/p-admin/Sidebar'
import styles from './adminPanelLayout.module.css'
import AdminChildLayout from './AdminChildLayout'
import { authUser } from '@/utils/AuthHelper'
import { redirect } from 'next/navigation'

export default async function AdminPanelLayout({ children }) {

  const user = await authUser();

  if (user) {
    if (user.role !== "ADMIN") {
      return redirect("/login-register");
    }
  } else {
    return redirect("/login-register");
  }


  return (
    <div className={styles.layout}>
    <AdminChildLayout>{children}</AdminChildLayout> {/* Use the client wrapper */}
  </div>
  )
}
