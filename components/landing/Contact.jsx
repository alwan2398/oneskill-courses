import { Mail } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

export default function Contact() {
  return (
    <div className="w-full" id="contact">
      <section className="mx-auto max-w-6xl px-4 py-6 lg:px-8 lg:py-20">
        <div className="relative isolate w-full overflow-hidden rounded-2xl bg-cta">
          <div className="relative isolate overflow-hidden px-4 py-12 sm:px-24">
            <p className="w-fit rounded-xl bg-white px-4 py-1 text-center text-base leading-7 font-semibold text-black uppercase lg:text-left">
              Get in touch
            </p>
            <h2 className="mt-3 max-w-lg text-4xl font-semibold text-white md:text-6xl">
              Ada ide, pertanyaan, atau Feedback?
            </h2>
            <p className="my-auto mt-3 max-w-2xl text-base text-gray-300 md:text-lg">
              Saya sangat suka feedback anda yang membuat project ini berkembang
              dan makin keren.
            </p>
            <div className="mt-8 flex items-center justify-center">
              <Link href="https://wa.link/srqagc" target="_blank">
                <Button
                  size={"lg"}
                  className={
                    "bg-white text-rose-600 font-bold font-secondary hover:text-white hover:bg-red-800 transition-colors duration-500 cursor-pointer"
                  }
                >
                  Hubungi Saya{" "}
                  <Mail className="text-primary hover:text-white" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
