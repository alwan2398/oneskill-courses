import { Poppins, Unbounded } from "next/font/google";
import "./globals.css";
import HomeProvider from "./provider";

const fontPrimary = Poppins({
  variable: "--font-primary",
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

const fontSecondary = Unbounded({
  variable: "--font-secondary",
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata = {
  title: "One Skill App",
  description: "Website Saas Application LMS Generator by One Skill",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${fontPrimary.variable} ${fontSecondary.variable} antialiased dark`}
      >
        <HomeProvider>{children}</HomeProvider>
      </body>
    </html>
  );
}
