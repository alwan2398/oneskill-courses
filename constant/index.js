import { Globe, Pencil, Lightbulb, Sparkles } from "lucide-react";

// nav menu
export const navItems = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Pricing", href: "#pricing" },
  { name: "Features", href: "#features" },
  { name: "Contact", href: "#contact" },
];

// mobile responsive
export const mobileMenuVariants = {
  closed: { opacity: 0, height: 0 },
  open: { opacity: 1, height: "auto" },
};

// about icons
export const iconComponents = {
  Pencil: Pencil,
  Lightbulb: Lightbulb,
  Globe: Globe,
  Sparkles: Sparkles,
};

// about values card
export const aboutValues = [
  {
    title: "Innovation",
    description:
      "Kami percaya belajar itu nggak harus ribet. Dengan AI, kami bikin cara baru biar bikin kursus bisa secepat bikin catatan.",
    icon: "Lightbulb",
  },
  {
    title: "Creativity",
    description:
      "Cukup masukkan ide, biarkan AI bantu wujudkan jadi materi belajar yang fresh dan sesuai dengan cara belajar yang kamu inginkan.",
    icon: "Pencil",
  },
  {
    title: "Excellence",
    description:
      "Bukan sekadar kursus cepat jadi. Kami pastikan hasilnya rapi, terstruktur, dan enak dipakai buat belajar maupun mengajar.",
    icon: "Sparkles",
  },
  {
    title: "Impact",
    description:
      "Tujuan kami simpel: bikin orang lebih mudah belajar, dan bikin knowledge bisa tersebar lebih luas tanpa batas.",
    icon: "Globe",
  },
];

// pricing plan
export const plan = {
  name: "Early Access",
  price: "Gratis",
  description: "Cobain LMS Generator dengan AI secara free — lagi tahap demo",
  features: [
    "Generate kursus instan pakai AI",
    "Materi terstruktur: modul, kuis, dan tugas",
    "Akses penuh ke semua fitur demo",
    "Update otomatis selama pengembangan",
  ],
  includes:
    "Tidak ada biaya, tidak ada batasan — semua orang bisa coba gratis di fase demo ini",
};

// features faqs
export const faqsItems = [
  {
    id: "1",
    title: "Apa sih OneSkill itu?",
    content:
      "OneSkill adalah platform AI yang bisa bikin kursus instan dari ide kamu. Cukup tulis topik, dan AI bakal generate materi, modul, sampai kuis secara otomatis.",
  },
  {
    id: "2",
    title: "Beneran gratis?",
    content:
      "Yes! Selama masih tahap demo, semua orang bisa pakai OneSkill secara gratis tanpa batas. Jadi kamu bebas coba semua fiturnya.",
  },
  {
    id: "3",
    title: "Kursusnya bisa di-custom?",
    content:
      "Tentu aja. Kamu bisa masukin ide, pilih gaya, lalu AI bantu bikin materi sesuai kebutuhanmu. Jadi nggak template kaku, tapi fleksibel banget.",
  },
  {
    id: "4",
    title: "Harus install atau download dulu?",
    content:
      "Nggak perlu. OneSkill full online, jadi kamu tinggal buka lewat browser dan langsung bikin kursus. Simple banget.",
  },
  {
    id: "5",
    title: "Gimana cara mulai?",
    content:
      "Klik tombol 'Coba Gratis', masukin ide kursusmu, dan lihat AI bekerja. Dalam hitungan menit, kursusmu siap dipakai 🚀",
  },
];

// animation faqs
export const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 10,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
      duration: 0.4,
    },
  }),
};

// footer links
export const footerLinks = [
  {
    href: "https://www.instagram.com/alwan.balweel/",
    icons: "/instagram.svg",
    alt: "Instagram",
  },
  {
    href: "https://www.tiktok.com/@alwan.balweel",
    icons: "/tiktok.svg",
    alt: "Tiktok",
  },
  {
    href: "https://github.com/alwan2398",
    icons: "/github.svg",
    alt: "Github",
  },
];
