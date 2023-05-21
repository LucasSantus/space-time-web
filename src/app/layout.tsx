import { Blur } from "@/components/Blur";
import { Hero } from "@/components/Hero";
import { Profile } from "@/components/Profile";
import { SignIn } from "@/components/SignIn";
import { Stripes } from "@/components/Stripes";

import { Copyright } from "@/components/Copyright";
import { Bai_Jamjuree as BaiJamjuree, Roboto_Flex as Roboto } from "next/font/google";
import { cookies } from "next/headers";
import "./globals.css";

const roboto = Roboto({ subsets: ["latin"], variable: "--font-roboto" });

const baiJamjuree = BaiJamjuree({ subsets: ["latin"], variable: "--font-bai-jamjuree", weight: "700" });

export const metadata = {
  title: "NLW Spacetime",
  description: "Uma capsula do tempo construida com react, next, typescript e tailwindcss",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const isAuthenticated = cookies().has("token");

  return (
    <html lang="en">
      <body className={`${roboto.variable} ${baiJamjuree.variable} bg-gray-900 font-sans text-gray-100`}>
        <main className="grid min-h-screen grid-cols-2 bg-[url(../assets/bg-stars.svg)] bg-cover">
          <div className="relative flex flex-col items-start justify-between overflow-hidden border-r border-white/10 px-28 py-16">
            <Blur />

            <Stripes />

            {isAuthenticated ? <Profile /> : <SignIn />}

            <Hero />

            <Copyright />
          </div>

          <div className="flex flex-col p-16">{children}</div>
        </main>
      </body>
    </html>
  );
}
