"use client";
import React from "react";
import { motion } from "framer-motion";
import { BrainCircuit, Sparkle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ButtonCreate() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      whileHover={{ transition: { duration: 0.2 } }}
      className="group relative"
    >
      <div className="p-6 border-border bg-card/40 rounded-xl border transition-all duration-300 hover:shadow-lg h-[370px] flex items-center justify-center">
        <div className="to-primary/5 absolute inset-0 rounded-xl bg-gradient-to-br from-transparent via-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="relative">
          <article className="flex flex-col items-center justify-center gap-3">
            <div className="bg-primary flex h-12 w-12 items-center justify-center rounded-lg">
              <BrainCircuit className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-center">
              Mulai Membuat Materi Belajar
            </h3>
            <p className="md:text-sm text-xs text-gray-300 leading-6 text-center max-w-2xl">
              Dengan dukungan Artificial Intelligence, kamu bisa membuat course
              belajar lebih cepat, lebih rapi, dan tanpa ribet. Fokus pada ide
              dan kontenmu biarkan AI yang membantu menyusun struktur dan
              detailnya.
            </p>
            <Link href="/courses/create" prefetch={true}>
              <Button className="text-white cursor-pointer">
                Buat Sekarang
                <Sparkle className="h-4 w-4" />
              </Button>
            </Link>
          </article>
        </div>
      </div>
    </motion.div>
  );
}
