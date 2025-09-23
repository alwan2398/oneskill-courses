"use client";
import ButtonCreate from "@/components/shared/ButtonCreate";
import { DashboardList } from "@/components/shared/DashboardList";
import { DashboardMenu } from "@/components/shared/DashboardMenu";
import { stats } from "@/constant";
import React from "react";

export default function CoursesPage() {
  return (
    <section className="flex flex-col w-full px-5 py-6 mx-auto max-w-7xl">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <DashboardMenu key={stat.title} stat={stat} index={index} />
        ))}
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2 col-span-1">
          <ButtonCreate />
        </div>
        <div className="col-span-1">
          <DashboardList />
        </div>
      </div>
    </section>
  );
}
