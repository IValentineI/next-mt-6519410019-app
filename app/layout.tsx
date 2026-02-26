import "./globals.css";
import { Libre_Franklin } from "next/font/google";
import MyCard from "@/components/MyCard";
import SideMenu from "@/components/SideMenu";

const libre = Libre_Franklin({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${libre.className} bg-[#1D1C1D] text-white`}>
        
        <main className="relative min-h-screen flex items-center">
          {/* Container หลัก */}
          <div className="w-full max-w-7xl mx-auto flex items-center gap-16 px-10">
            {/* ซ้าย */}
            <div>
              <MyCard />
            </div>

            {/* ขวา */}
            <section>{children}</section>
          </div>
          <div className="fixed right-10 top-1/2 -translate-y-1/2 bg-[#1D1C1D]">
            <SideMenu />
          </div>
          
        </main>
      </body>
    </html>
  );
}
