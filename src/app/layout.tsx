import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import PermaComponents from "@/components/PermaComponents";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};


export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {

    return (
        <html lang="en">
        <head>
        </head>
        <body className={inter.className}>
            <PermaComponents/>
            {children}
        </body>
        </html>
    );
}
