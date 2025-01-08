/* eslint-disable @next/next/no-img-element */

import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import QueryClientLocal from "@/providers/QueryClientLocal";
import Link from "next/link";
import "./globals.css";
import Nav from "@/components/Nav";

const openSans = Open_Sans({
    variable: "--font-open-sans",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

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
                            <aside className="sticky w-auto h-full flex flex-col justify-between items-center py-3 px-1 bg-white rounded-l-3xl">
                                <img
                                    src="/images/logo.png"
                                    alt="Logo"
                                    className="w-12 h-12"
                                />
                                <div className="flex flex-col gap-5 p-2 rounded-full bg-stone-100/80">
                                    <Link href="/">
                                        <svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 16 16"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M8.66667 5.33333V2.66667C8.66667 2.47778 8.73056 2.31944 8.85833 2.19167C8.98611 2.06389 9.14444 2 9.33333 2H13.3333C13.5222 2 13.6806 2.06389 13.8083 2.19167C13.9361 2.31944 14 2.47778 14 2.66667V5.33333C14 5.52222 13.9361 5.68056 13.8083 5.80833C13.6806 5.93611 13.5222 6 13.3333 6H9.33333C9.14444 6 8.98611 5.93611 8.85833 5.80833C8.73056 5.68056 8.66667 5.52222 8.66667 5.33333ZM2 8V2.66667C2 2.47778 2.06389 2.31944 2.19167 2.19167C2.31944 2.06389 2.47778 2 2.66667 2H6.66667C6.85556 2 7.01389 2.06389 7.14167 2.19167C7.26944 2.31944 7.33333 2.47778 7.33333 2.66667V8C7.33333 8.18889 7.26944 8.34722 7.14167 8.475C7.01389 8.60278 6.85556 8.66667 6.66667 8.66667H2.66667C2.47778 8.66667 2.31944 8.60278 2.19167 8.475C2.06389 8.34722 2 8.18889 2 8ZM8.66667 13.3333V8C8.66667 7.81111 8.73056 7.65278 8.85833 7.525C8.98611 7.39722 9.14444 7.33333 9.33333 7.33333H13.3333C13.5222 7.33333 13.6806 7.39722 13.8083 7.525C13.9361 7.65278 14 7.81111 14 8V13.3333C14 13.5222 13.9361 13.6806 13.8083 13.8083C13.6806 13.9361 13.5222 14 13.3333 14H9.33333C9.14444 14 8.98611 13.9361 8.85833 13.8083C8.73056 13.6806 8.66667 13.5222 8.66667 13.3333ZM2 13.3333V10.6667C2 10.4778 2.06389 10.3194 2.19167 10.1917C2.31944 10.0639 2.47778 10 2.66667 10H6.66667C6.85556 10 7.01389 10.0639 7.14167 10.1917C7.26944 10.3194 7.33333 10.4778 7.33333 10.6667V13.3333C7.33333 13.5222 7.26944 13.6806 7.14167 13.8083C7.01389 13.9361 6.85556 14 6.66667 14H2.66667C2.47778 14 2.31944 13.9361 2.19167 13.8083C2.06389 13.6806 2 13.5222 2 13.3333ZM3.33333 7.33333H6V3.33333H3.33333V7.33333ZM10 12.6667H12.6667V8.66667H10V12.6667ZM10 4.66667H12.6667V3.33333H10V4.66667ZM3.33333 12.6667H6V11.3333H3.33333V12.6667Z"
                                                fill="#1E1E1E"
                                            />
                                        </svg>
                                    </Link>
                                    <Link href="/auth/sign-in">
                                        <svg
                                            width="22"
                                            height="22"
                                            viewBox="0 0 14 14"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M2.33398 13.6668C1.96732 13.6668 1.65343 13.5363 1.39232 13.2752C1.13121 13.0141 1.00065 12.7002 1.00065 12.3335V4.81683C0.800651 4.69461 0.63954 4.53627 0.517318 4.34183C0.395095 4.14739 0.333984 3.92239 0.333984 3.66683V1.66683C0.333984 1.30016 0.46454 0.986274 0.725651 0.725163C0.986762 0.464052 1.30065 0.333496 1.66732 0.333496H12.334C12.7007 0.333496 13.0145 0.464052 13.2757 0.725163C13.5368 0.986274 13.6673 1.30016 13.6673 1.66683V3.66683C13.6673 3.92239 13.6062 4.14739 13.484 4.34183C13.3618 4.53627 13.2007 4.69461 13.0007 4.81683V12.3335C13.0007 12.7002 12.8701 13.0141 12.609 13.2752C12.3479 13.5363 12.034 13.6668 11.6673 13.6668H2.33398ZM2.33398 5.00016V12.3335H11.6673V5.00016H2.33398ZM1.66732 3.66683H12.334V1.66683H1.66732V3.66683ZM5.66732 8.3335H8.33398C8.52287 8.3335 8.68121 8.26961 8.80898 8.14183C8.93676 8.01405 9.00065 7.85572 9.00065 7.66683C9.00065 7.47794 8.93676 7.31961 8.80898 7.19183C8.68121 7.06405 8.52287 7.00016 8.33398 7.00016H5.66732C5.47843 7.00016 5.3201 7.06405 5.19232 7.19183C5.06454 7.31961 5.00065 7.47794 5.00065 7.66683C5.00065 7.85572 5.06454 8.01405 5.19232 8.14183C5.3201 8.26961 5.47843 8.3335 5.66732 8.3335Z"
                                                fill="#1E1E1E"
                                            />
                                        </svg>
                                    </Link>
                                    <Link href="/auth/sign-in">
                                        <svg
                                            width="22"
                                            height="22"
                                            viewBox="0 0 14 14"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M7.00065 13.6668C6.07843 13.6668 5.21176 13.4918 4.40065 13.1418C3.58954 12.7918 2.88398 12.3168 2.28398 11.7168C1.68398 11.1168 1.20898 10.4113 0.858984 9.60016C0.508984 8.78905 0.333984 7.92239 0.333984 7.00016C0.333984 6.07794 0.508984 5.21127 0.858984 4.40016C1.20898 3.58905 1.68398 2.8835 2.28398 2.2835C2.88398 1.6835 3.58954 1.2085 4.40065 0.858496C5.21176 0.508496 6.07843 0.333496 7.00065 0.333496C7.92287 0.333496 8.78954 0.508496 9.60065 0.858496C10.4118 1.2085 11.1173 1.6835 11.7173 2.2835C12.3173 2.8835 12.7923 3.58905 13.1423 4.40016C13.4923 5.21127 13.6673 6.07794 13.6673 7.00016C13.6673 7.92239 13.4923 8.78905 13.1423 9.60016C12.7923 10.4113 12.3173 11.1168 11.7173 11.7168C11.1173 12.3168 10.4118 12.7918 9.60065 13.1418C8.78954 13.4918 7.92287 13.6668 7.00065 13.6668ZM7.00065 12.3335C8.48954 12.3335 9.75065 11.8168 10.784 10.7835C11.8173 9.75016 12.334 8.48905 12.334 7.00016C12.334 5.51127 11.8173 4.25016 10.784 3.21683C9.75065 2.1835 8.48954 1.66683 7.00065 1.66683C5.51176 1.66683 4.25065 2.1835 3.21732 3.21683C2.18398 4.25016 1.66732 5.51127 1.66732 7.00016C1.66732 8.48905 2.18398 9.75016 3.21732 10.7835C4.25065 11.8168 5.51176 12.3335 7.00065 12.3335ZM7.00065 11.0002C5.88954 11.0002 4.9451 10.6113 4.16732 9.8335C3.38954 9.05572 3.00065 8.11127 3.00065 7.00016C3.00065 5.88905 3.38954 4.94461 4.16732 4.16683C4.9451 3.38905 5.88954 3.00016 7.00065 3.00016C8.11176 3.00016 9.05621 3.38905 9.83399 4.16683C10.6118 4.94461 11.0007 5.88905 11.0007 7.00016C11.0007 8.11127 10.6118 9.05572 9.83399 9.8335C9.05621 10.6113 8.11176 11.0002 7.00065 11.0002ZM7.00065 9.66683C7.73398 9.66683 8.36176 9.40572 8.88398 8.8835C9.40621 8.36127 9.66732 7.7335 9.66732 7.00016C9.66732 6.26683 9.40621 5.63905 8.88398 5.11683C8.36176 4.59461 7.73398 4.3335 7.00065 4.3335C6.26732 4.3335 5.63954 4.59461 5.11732 5.11683C4.5951 5.63905 4.33398 6.26683 4.33398 7.00016C4.33398 7.7335 4.5951 8.36127 5.11732 8.8835C5.63954 9.40572 6.26732 9.66683 7.00065 9.66683ZM7.00065 8.3335C6.63398 8.3335 6.3201 8.20294 6.05898 7.94183C5.79787 7.68072 5.66732 7.36683 5.66732 7.00016C5.66732 6.6335 5.79787 6.31961 6.05898 6.0585C6.3201 5.79739 6.63398 5.66683 7.00065 5.66683C7.36732 5.66683 7.68121 5.79739 7.94232 6.0585C8.20343 6.31961 8.33398 6.6335 8.33398 7.00016C8.33398 7.36683 8.20343 7.68072 7.94232 7.94183C7.68121 8.20294 7.36732 8.3335 7.00065 8.3335Z"
                                                fill="#1E1E1E"
                                            />
                                        </svg>
                                    </Link>
                                </div>
                                <div>ss</div>
                            </aside>
                            <section className="w-full h-full ">
                                <Nav></Nav>
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
