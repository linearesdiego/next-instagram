import { Inter } from "next/font/google";
//styles
import "./globals.css";
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
      <body className={inter.className}>{children}</body>
      <Toaster />
    </html>
  );
}
