"use client";
import { footerLinks } from "@/constant";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative z-10 mt-8 w-full overflow-hidden pt-16 pb-8">
      <style jsx global>{`
        .glass {
          backdrop-filter: blur(3px) saturate(180%);
          background: radial-gradient(circle, #fff9 0%, #ffdce64d 60%, #f9f2f4 100%);
          border: 1px solid #ff96b41a;
          justify-content: center;
          align-items: center;
          transition: all .3s;
          display: flex;
        }
        .glass:where(.dark, .dark *) {
          display: flex
          backdrop-filter: blur(2px) !important;
          background: radial-gradient(circle, #ffffff1a 0%, #1e00001a 60%, #2a0e0e 100%) !important;
          border: 1px solid #ffffff0d !important;
          border-radius: 16px !important;
          justify-content: center !important;
          align-items: center !important;
        }
      `}</style>
      <div className="pointer-events-none absolute top-0 left-1/2 z-0 h-full w-full -translate-x-1/2 select-none">
        <div className="absolute -top-32 left-1/4 h-72 w-72 rounded-full bg-rose-600/20 blur-3xl"></div>
        <div className="absolute right-1/4 -bottom-24 h-80 w-80 rounded-full bg-rose-600/20 blur-3xl"></div>
      </div>
      <div className="flex flex-col items-center justify-center gap-3">
        {/* icon row */}
        <div className="flex flex-row items-center gap-4">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center"
            >
              <Image
                src={link.icons}
                alt={link.alt}
                width={28}
                height={28}
                className="dark:invert"
                loading="lazy"
              />
            </Link>
          ))}
        </div>

        {/* text */}
        <span className="text-sm text-muted-foreground">
          Follow us on social media
        </span>
      </div>

      <div className="text-foreground relative z-10 mt-10 text-center text-xs">
        <span>&copy; 2025 OneSkill. All rights reserved.</span>
      </div>
    </footer>
  );
}
