import React from "react";
import styles from "./userPanelLayout.module.css";
import ClientLayout from "./ClientLayout"; // Import the client component
import { authUser } from "@/utils/AuthHelper";
import { redirect } from "next/navigation";

const Layout = async ({ children }) => {
  const user = await authUser();
    console.log('name=>',user)
  // Uncomment this if authentication is required
  if (!user) {
    redirect("/login-register");
  }

  return (
    <div className={styles.layout}>
      <ClientLayout user={user}>{children}</ClientLayout> {/* Use the client wrapper */}
    </div>
  );
};

export default Layout;
