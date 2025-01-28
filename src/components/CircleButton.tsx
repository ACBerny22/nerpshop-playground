import Link from "next/link";

export default function CircleButton({
    children,
    href,
    active,
}: {
    children: React.ReactNode;
    href: string;
    active: boolean;
}) {
    return (
        <Link
            className={`p-1 ${
                active ? "background-gradient" : " "
            } rounded-full`}
            href={href}
        >
            <div className="bg-stone-100 rounded-full p-2">{children}</div>
        </Link>
    );
}
