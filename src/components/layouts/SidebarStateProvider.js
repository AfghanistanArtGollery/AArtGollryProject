"use client";

import React, { useState, createContext, useContext } from "react";

const SidebarContext = createContext();

export const SidebarStateProvider = ({ children }) => {
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible((prev) => !prev);
  };

  return (
    <SidebarContext.Provider value={{ isSidebarVisible, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};

// Custom hook to access the Sidebar state
export const useSidebarContext = () => useContext(SidebarContext);
