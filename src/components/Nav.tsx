"use client";
import useTitleStore from "@/stores/titleStore";
import RoundedButton from "./RoundedButtont";
import { ReactNode as React } from "react";
export default function Nav() {
    const title = useTitleStore((state) => state.title);

    return (
        <nav className="flex justify-between py-4 px-2 bg-white rounded-tr-3xl max-w-full">
            <div className="flex items-center gap-4">
                <h1 className="font-extrabold text-xl">
                    {title.toUpperCase() || (
                        <div className="flex space-x-2 justify-center items-center bg-white dark:invert">
                            <span className="sr-only">Loading...</span>
                            <div className="h-2 w-2 bg-[#172bde] rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                            <div className="h-2 w-2 bg-[#172bde] rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                            <div className="h-2 w-2 bg-[#172bde] rounded-full animate-bounce"></div>
                        </div>
                    )}
                </h1>
            </div>
            <div>
                <RoundedButton onClick={() => window.location.reload()}>
                    s
                </RoundedButton>
            </div>
        </nav>
    );
}
