"use client";
import React, { useState, useEffect, Fragment } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, GraduationCapIcon } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { mobileMenuVariants, navItems } from "@/constant";
import { Button } from "../ui/button";
import { useUser } from "@clerk/nextjs";

export default function Header() {
  const { isSignedIn } = useUser();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/70 shadow-md backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link
              prefetch={false}
              href="/"
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

          {/* Navigation */}
          <nav className="hidden items-center space-x-8 lg:flex">
            {navItems.map((item) => (
              <div className="relative" key={item.name}>
                <Link
                  href={item.href}
                  className="text-foreground flex items-center space-x-1 font-medium transition-colors duration-200 hover:text-rose-500"
                >
                  <span>{item.name}</span>
                </Link>
              </div>
            ))}
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden items-center space-x-4 lg:flex">
            {isSignedIn ? (
              <Link
                prefetch={true}
                href="/courses"
                className="text-foreground font-medium transition-colors duration-200 hover:text-rose-500"
              >
                <Button className={"text-white cursor-pointer"}>
                  Dashboard
                </Button>
              </Link>
            ) : (
              <Fragment>
                <Link
                  prefetch={false}
                  href="/sign-in"
                  className="text-foreground font-medium transition-colors duration-200 hover:text-rose-500"
                >
                  Sign In
                </Link>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    prefetch={false}
                    href="/sign-up"
                    className="inline-flex items-center space-x-2 rounded-full bg-gradient-to-r from-rose-500 to-rose-700 px-5 py-2 font-medium text-white transition-all duration-200 hover:shadow-lg"
                  >
                    <span>Get Started</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </motion.div>
              </Fragment>
            )}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="hover:bg-muted rounded-lg p-2 transition-colors duration-200 lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="overflow-hidden lg:hidden"
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="border-border bg-background/95 mt-4 space-y-2 rounded-xl border py-4 shadow-xl backdrop-blur-lg">
                {navItems.map((item) => (
                  <Link
                    prefetch={false}
                    key={item.name}
                    href={item.href}
                    className="text-foreground hover:bg-muted block px-4 py-3 font-medium transition-colors duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="space-y-2 px-4 py-2">
                  {isSignedIn ? (
                    <Link
                      prefetch={true}
                      href="/courses"
                      className="text-foreground font-medium transition-colors duration-200 hover:text-rose-500"
                    >
                      <Button className="text-white cursor-pointer">
                        Dashboard
                      </Button>
                    </Link>
                  ) : (
                    <Fragment>
                      <Link
                        prefetch={true}
                        href="/sign-in"
                        className="text-foreground font-medium transition-colors duration-200 hover:text-rose-500"
                      >
                        Sign In
                      </Link>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Link
                          prefetch={true}
                          href="/sign-up"
                          className="inline-flex items-center space-x-2 rounded-full bg-gradient-to-r from-rose-500 to-rose-700 px-6 py-2.5 font-medium text-white transition-all duration-200 hover:shadow-lg"
                        >
                          <span>Get Started</span>
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </motion.div>
                    </Fragment>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
