"use client";

export default function RoundedButton({
    children,
    onClick,
    className,
}: {
    children: React.ReactNode;
    onClick: () => void;
    className?: string;
}) {
    return (
        <button
            onClick={onClick}
            className={`bg-[#172bde] rounded-full px-4 py-1 text-white ${className}`}
        >
            {children}
        </button>
    );
}
