import { Bai_Jamjuree as BaiJamjuree, Roboto_Flex as Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({ subsets: ["latin"], variable: "--font-roboto" });

const baiJamjuree = BaiJamjuree({ subsets: ["latin"], variable: "--font-bai-jamjuree", weight: "700" });

export const metadata = {
  title: "NLW Spacetime",
  description: "Uma capsula do tempo construida com react, next, typescript e tailwindcss",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${baiJamjuree.variable} bg-gray-900 font-sans text-gray-100`}>
        {children}
      </body>
    </html>
  );
}
