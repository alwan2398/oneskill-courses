import About from "@/components/landing/About";
import Contact from "@/components/landing/Contact";
import Features from "@/components/landing/Features";
import Footer from "@/components/landing/Footer";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Pricing from "@/components/landing/Pricing";
import React from "react";

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <About />
      <Pricing />
      <Features />
      <Contact />
      <Footer />
    </main>
  );
}
