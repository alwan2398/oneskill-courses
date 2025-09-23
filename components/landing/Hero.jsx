"use client";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight, Check, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="min-h-screen py-6 sm:py-14 mb-30 md:mb-0">
      <div className="pointer-events-none absolute inset-0 top-0 z-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-primary/30 via-primary/20 to-transparent opacity-50 blur-[100px]" />
        <div className="absolute -top-40 -right-20 h-[500px] w-[500px] rounded-full bg-gradient-to-bl from-primary/30 via-primary/20 to-transparent opacity-50 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-primary/20 via-primary/10 to-transparent opacity-30 blur-[80px]" />
      </div>
      <main className="relative container mt-4 max-w-[1100px] px-2 py-4 lg:py-8 mx-auto">
        <div className="relative sm:overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="border-primary/20 bg-background/50 shadow-primary/10 relative flex flex-col items-start justify-start rounded-xl border px-4 pt-12 shadow-xl backdrop-blur-md max-md:text-center md:px-12 md:pt-16"
          >
            <div
              className="animate-gradient-x absolute inset-0 top-32 z-0 hidden blur-2xl dark:block"
              style={{
                maskImage:
                  "linear-gradient(to bottom, transparent, white, transparent)",
                background:
                  "repeating-linear-gradient(65deg, hsl(var(--primary)), hsl(var(--primary)/0.8) 12px, color-mix(in oklab, hsl(var(--primary)) 30%, transparent) 20px, transparent 200px)",
                backgroundSize: "200% 100%",
              }}
            />
            <div
              className="animate-gradient-x absolute inset-0 top-32 z-0 text-left blur-2xl dark:hidden"
              style={{
                maskImage:
                  "linear-gradient(to bottom, transparent, white, transparent)",
                background:
                  "repeating-linear-gradient(65deg, hsl(var(--primary)/0.9), hsl(var(--primary)/0.7) 12px, color-mix(in oklab, hsl(var(--primary)) 30%, transparent) 20px, transparent 200px)",
                backgroundSize: "200% 100%",
              }}
            />
            <h1 className="mb-4 flex flex-wrap gap-2 text-3xl leading-tight font-medium md:text-5xl">
              Ciptakan kursus untuk belajar lebih cepat dan meningkatkan
              produktivitas dengan AI.
            </h1>
            <p className="text-muted-foreground mb-8 text-left md:max-w-[80%] md:text-xl">
              Kursus mini yang sangat cocok untuk digunakan sebagai magnet utama
              edukatif, aset pengayaan, materi pembelajaran mikro untuk
              mengedukasi dan meningkatkan efisensi belajar.
            </p>
            <div className="mb-6 flex flex-wrap gap-4 md:flex-row">
              <div className="flex items-center gap-2">
                <Check className="text-primary h-5 w-5" />
                <span>Kursus instan dengan AI</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="text-primary h-5 w-5" />
                <span>Materi yang akurat</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="text-primary h-5 w-5" />
                <span>fleksibel dalam penggunaan</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="text-primary h-5 w-5" />
                <span>Works anywhere, anytime</span>
              </div>
            </div>
            <div className="z-10 mt-2 inline-flex items-center justify-start gap-3">
              <Link
                href="/courses"
                prefetch={false}
                className={cn(
                  buttonVariants({
                    size: "lg",
                    className:
                      "from-primary to-primary/80 text-white rounded-full bg-gradient-to-b",
                  })
                )}
              >
                Start For Free <ArrowRight className="size-4" />
              </Link>
              <Link
                href="https://github.com/alwan2398/oneskill-courses"
                target="_blank"
                rel="noreferrer noopener"
                className={cn(
                  buttonVariants({
                    size: "lg",
                    variant: "outline",
                    className: "bg-background rounded-full",
                  })
                )}
              >
                GitHub <Github className="size-4" />
              </Link>
            </div>
            <div className="relative z-10 mt-16 w-full">
              <Image
                src="/images/dashboard.webp"
                alt="Dashboard Preview"
                priority
                width={1000}
                height={600}
                className="animate-in fade-in slide-in-from-bottom-12 z-10 mx-auto -mb-60 w-full rounded-lg border-6 border-neutral-100 object-cover shadow-2xl duration-1000 select-none lg:-mb-40 dark:border-neutral-600"
              />
              <div className="hidden md:block animate-in fade-in slide-in-from-left-4 absolute -top-6 -right-6 rotate-6 transform rounded-lg bg-white p-3 shadow-lg dark:bg-neutral-900">
                <div className="flex items-center gap-2">
                  <svg
                    className="h-5 w-5 text-primary"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="font-medium">Preview Workspace</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
