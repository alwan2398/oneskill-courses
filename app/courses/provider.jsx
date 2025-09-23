"use client";
import React from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/shared/AppSidebar";
import { AppNavbar } from "@/components/shared/AppNavbar";

export default function CoursesProvider({ children }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full mx-auto overflow-hidden">
        <AppNavbar />
        {children}
      </main>
    </SidebarProvider>
  );
}
