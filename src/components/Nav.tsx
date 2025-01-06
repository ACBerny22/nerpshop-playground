"use client";
import useTitleStore from "@/stores/titleStore";
import RoundedButton from "./RoundedButtont";
import { ReactNode as React } from "react";

export default function Nav() {
    const title = useTitleStore((state) => state.title);

    return (
        <nav className="flex justify-between py-4 px-2 bg-white rounded-tr-3xl max-w-full">
            <div>
                <h1 className="font-extrabold text-xl">
                    {title.toUpperCase()}
                </h1>
            </div>
            <div>
                <RoundedButton
                    onClick={() => window.location.reload()}
                >s</RoundedButton>
            </div>
        </nav>
    );
}
