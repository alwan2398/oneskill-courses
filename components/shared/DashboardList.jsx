"use client";
import React from "react";
import { ListMenu } from "../ui/list-menu";
import { AnimatedList } from "../ui/animated-list";
import { cn } from "@/lib/utils";
import { featuredAnimate } from "@/constant";

export function DashboardList({ className }) {
  return (
    <div
      className={cn(
        "relative flex h-[370px] w-full flex-col overflow-hidden",
        className
      )}
    >
      <AnimatedList>
        {featuredAnimate.map((item, idx) => (
          <ListMenu {...item} key={idx} />
        ))}
      </AnimatedList>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
    </div>
  );
}
