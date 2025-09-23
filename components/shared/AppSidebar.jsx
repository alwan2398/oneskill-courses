"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { sidebarLinks } from "@/constant";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { GraduationCapIcon } from "lucide-react";

export function AppSidebar() {
  const pathname = usePathname();
  return (
    <Sidebar>
      <SidebarHeader className="p-5">
        <motion.div
          className="flex items-center space-x-2"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Link
            prefetch={false}
            href="/course"
            className="flex items-center space-x-2"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-rose-500 to-rose-700">
              <GraduationCapIcon className="h-5 w-5 text-white" />
            </div>
            <span className="bg-gradient-to-r from-rose-500 to-rose-700 bg-clip-text text-xl font-bold text-transparent font-secondary">
              OneSkill
            </span>
          </Link>
        </motion.div>
      </SidebarHeader>
      <SidebarContent>
        {sidebarLinks.map((link) => (
          <SidebarGroup key={link.name} className={"space-y-1"}>
            <Link
              href={link.href}
              className={cn(
                "flex items-center text-sm group p-3 w-full justify-start font-medium cursor-pointer hover:bg-muted/70 hover:text-white rounded-md transition",
                pathname === link.href &&
                  "bg-muted/70 text-white border-r-4 border-primary"
              )}
            >
              <link.icon className="mr-2 h-5 w-5" />
              {link.name}
            </Link>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarFooter className="mb-5"></SidebarFooter>
    </Sidebar>
  );
}
