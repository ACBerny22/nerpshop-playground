export default function FormCardBasic({
    children,
    title,
}: {
    children: React.ReactNode;
    title: string;
    containerClassName: string;
}) {
    return (
        <div className="flex flex-col gap-4 p-4  bg-white rounded-xl w-full">
            <h1 className="text-lg font-bold">{title}</h1>
            <div>{children}</div>
        </div>
    );
}
