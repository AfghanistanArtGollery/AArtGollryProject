"use client";

import React, { useState } from "react";
import styles from "./SidebarToggle.module.css";

const SidebarToggle = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    const sidebar = document.querySelector("#sidebar");
    sidebar.classList.toggle(styles.sidebarOpen);
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <button className={styles.toggleButton} onClick={toggleSidebar}>
      {isSidebarOpen ? "Close Menu" : "Open Menu"}
    </button>
  );
};

export default SidebarToggle;
