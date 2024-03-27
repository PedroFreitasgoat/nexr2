import type { Metadata } from "next";
import "./globals.css";
import Menu from "@/components/menu";


export const metadata: Metadata = {
  title: "Origamid Next",
  description: "Criado por Pedrão brabao",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Menu/>
        {children}
        </body>
    </html>
  );
}
