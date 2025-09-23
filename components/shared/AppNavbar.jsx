import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { UserButton } from "@clerk/nextjs";
import { motion } from "framer-motion";
import { Bell } from "lucide-react";

export function AppNavbar() {
  return (
    <header className="bg-background/95 sticky top-0 z-50 flex h-16 w-full mx-auto shrink-0 items-center border-b backdrop-blur transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
      <nav className="flex w-full items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <SidebarTrigger className="-ml-1 md:hidden" />
          <Separator orientation="vertical" className="h-4" />
          <h1 className="text-lg font-semibold hidden md:block">
            Welcome Back
          </h1>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-4"
        >
          <Button variant="outline" size="sm" className="relative">
            <Bell className="h-4 w-4" />
            <span className="absolute -top-0.5 -right-1  h-2 w-2 rounded-full bg-red-500"></span>
          </Button>
          <UserButton afterSignOutUrl="/" />
        </motion.div>
      </nav>
    </header>
  );
}
