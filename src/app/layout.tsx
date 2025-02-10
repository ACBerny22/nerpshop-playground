/* eslint-disable @next/next/no-img-element */

import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import QueryClientLocal from "@/providers/QueryClientLocal";
import "./globals.css";
import Nav from "@/components/Nav";
import "@/lib/validation";
import Aside from "@/components/Aside";

const openSans = Open_Sans({
    variable: "--font-open-sans",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

const session = true;

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${openSans.className} antialiased bg-gray-100`}>
                <QueryClientLocal>
                    <div className="background-gradient h-screen w-screen flex justify-center items-center p-2">
                        <main className="rounded-3xl flex w-full h-full bg-white shadow-md overflow-hidden">
                            {session && <Aside></Aside>}
                            <section className="w-full h-full ">
                                {session && <Nav></Nav>}
                                <div
                                    className="overflow-auto"
                                    id="container-main"
                                >
                                    {children}
                                </div>
                            </section>
                        </main>
                    </div>
                </QueryClientLocal>
            </body>
        </html>
    );
}
