"use client";
import useTitleStore from "@/stores/titleStore";

export default function Nav() {
    const title = useTitleStore((state) => state.title);

    return (
        <nav className="flex justify-between py-2 px-2 bg-slate-300 rounded-tr-3xl">
            <div>
                <h1 className="font-bold text-xl">{title.toUpperCase()}</h1>
            </div>
            <div>sss</div>
        </nav>
    );
}
