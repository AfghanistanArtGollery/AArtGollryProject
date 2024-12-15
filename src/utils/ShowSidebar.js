"use client";

import { useState } from "react";

let toggleSidebar;

export const useSidebarState = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  // Define the toggle function
  toggleSidebar = () => setSidebarVisible((prev) => !prev);

  return { isSidebarVisible };
};

// Export the toggle function for external usage
export const getToggleSidebar = () => toggleSidebar;
