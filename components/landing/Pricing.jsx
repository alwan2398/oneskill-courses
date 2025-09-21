import { Button } from "@/components/ui/button";
import { plan } from "@/constant";
import { Check } from "lucide-react";
import Link from "next/link";

export default function Pricing() {
  return (
    <div
      className="relative w-full bg-gradient-to-br py-16 md:py-30 from-zinc-900 via-zinc-950 to-black"
      id="pricing"
    >
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="bg-primary/10 absolute -top-[10%] left-[50%] h-[40%] w-[60%] -translate-x-1/2 rounded-full blur-3xl" />
        <div className="bg-primary/5 absolute -right-[10%] -bottom-[10%] h-[40%] w-[40%] rounded-full blur-3xl" />
        <div className="bg-primary/5 absolute -bottom-[10%] -left-[10%] h-[40%] w-[40%] rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-balance md:text-4xl lg:text-5xl">
            Generate materi belajar simple & gratis
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">
            Cukup masukin ide, biarkan AI di OneSkill ubah jadi kursus lengkap
            dengan modul, kuis, dan tugas. Gratis, cepat, dan simple cocok buat
            kreator, mahasiswa, atau siapa aja yang mau belajar dan ngajar lebih
            efisien
          </p>
        </div>
        <div className="mt-10 md:mt-20">
          <div className="relative rounded-3xl border shadow-xl shadow-zinc-950/5 backdrop-blur-sm border-zinc-700/50 bg-zinc-900/70">
            <div className="grid items-center gap-12 divide-y d p-12 md:grid-cols-2 md:gap-x-2 md:divide-x-0 md:divide-y-0 divide-zinc-700">
              {/* Sebelah Kiri */}
              <div className="pb-12 text-center md:pr-12 md:pb-0">
                <h3 className="text-2xl font-semibold">{plan.name}</h3>
                <p className="mt-2 text-lg">{plan.description}</p>
                <span className="text-primary mt-12 mb-6 inline-block text-6xl font-extrabold">
                  {plan.price}
                </span>
                <div className="flex justify-center">
                  <Button asChild size="lg" className="shadow-md">
                    <Link
                      prefetch={false}
                      href="/courses"
                      className="text-white"
                    >
                      Get started
                    </Link>
                  </Button>
                </div>
                <p className="text-muted-foreground mt-12 text-sm">
                  Includes: {plan.includes}
                </p>
              </div>

              {/* Sebelah Kanan */}
              <div className="relative m-3">
                <div className="text-left">
                  <h4 className="mb-4 text-lg font-medium">What’s included:</h4>
                  <ul role="list" className="space-y-4">
                    {plan.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-sm"
                      >
                        <Check className="text-primary mt-1 size-4" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-muted-foreground mt-6 text-sm">
                  Buat kursus sesuai ide kamu. Gratis. Simple. Powered by AI.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
