import React from 'react'
import Topbar from '../modules/p-admin/Topbar'
import Sidebar from '../modules/p-user/Sidebar'
import styles from './adminPanelLayout.module.css'

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
      <section className={styles.section}>

        <div className={styles.contents}>
          <Topbar />
          {children}
        </div>

        <Sidebar />
      </section>
    </div>
  )
}
