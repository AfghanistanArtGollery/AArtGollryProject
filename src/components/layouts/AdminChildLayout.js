"use client";

import React, { useState } from "react";
import styles from "./userPanelLayout.module.css";
import Sidebar from "@/components/modules/p-admin/Sidebar";
import Topbar from "@/components/modules/p-admin/Topbar";

const AdminChildLayout = ({ children }) => {
    const [isSidebarVisible, setSidebarVisible] = useState(false); // Sidebar hidden initially

    const toggleSidebar = () => {
        setSidebarVisible((prev) => !prev);
    };

    return (
        <div className={styles.layout}>
            {/* Topbar - contains the toggle button */}
          

            <div className={styles.section}>
                {/* Mobile Sidebar */}
                <div
                    className={`${styles.mobile_sidebar} ${isSidebarVisible ? styles.open : ""
                        }`}
                >
                    <Sidebar />
                </div>

                {/* Backdrop for closing sidebar */}
                {isSidebarVisible && (
                    <div
                        className={styles.backdrop}
                        onClick={() => setSidebarVisible(false)}
                    ></div>
                )}

                {/* Desktop Sidebar */}
                <div className={styles.side_bar}>
                    <Sidebar />
                </div>

                {/* Main content area */}

                <div className={styles.contents}>
                    {/* Pass toggleSidebar to Topbar */}
                    <Topbar onToggleSidebar={toggleSidebar} />
                    {children}
                </div>
            </div>
        </div>
    );
};

export default AdminChildLayout;

