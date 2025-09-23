import React from "react";
import CoursesProvider from "./provider";

export default function CoursesLayout({ children }) {
  return <CoursesProvider>{children}</CoursesProvider>;
}
