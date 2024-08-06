import { Inter } from "next/font/google";
//styles
import "./globals.css";
//components
import { Sidebar, TopNavbar } from "@/components";
//toast
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next- Instagram",
  description: "Pagina de inicio de Next-Instagram",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster />
        <div className="flex h-screen overflow-hidden">
          <Sidebar />
          <div className="flex lg:hidden">
            <TopNavbar />
          </div>
          <div className="bg-blackOscuro p-10 w-full h-full overflow-y-scroll">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
