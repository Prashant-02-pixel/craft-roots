import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout = ({ children, transparentHeader = false }: { children: ReactNode; transparentHeader?: boolean }) => (
  <div className="min-h-screen flex flex-col bg-background">
    <Header />
    <main className={`flex-1 ${transparentHeader ? "" : "pt-16 md:pt-20"}`}>{children}</main>
    <Footer />
  </div>
);
