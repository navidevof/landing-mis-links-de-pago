import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mis Links de Pago - Centraliza tus métodos de pago en un solo enlace",
  description:
    "Facilita la gestión de métodos de pago para tu negocio con Mis Links de Pago. Carga tus datos de pago, genera enlaces personalizados y permite que tus clientes consulten tu información para realizar transferencias de forma sencilla.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
