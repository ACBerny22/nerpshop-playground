"use client";
import { useQuery } from "@tanstack/react-query";
import VirtualizedTable from "@/components/VirtualizedTable";

export default function Home() {
    const { data, isError, isLoading } = useQuery({
        queryKey: ["home"],
        queryFn: async () => {
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/users"
            );
            const data = await response.json();
            console.log(data);
            //return [...data, ...data, ...data, ...data, ...data];
            return data;
        },
    });

    console.log(data);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error</div>;
    }

    return (
        <main className="flex flex-col gap-4 p-10 h-screen">
            <h1 className="text-3xl font-bold">Users</h1>
            <VirtualizedTable
                data={data}
                columns={[
                    { name: "Name", key: "name", minWidth: 200 },
                    { name: "Username", key: "username", minWidth: 200 },
                    { name: "Email", key: "email", minWidth: 200 },
                    { name: "Phone", key: "phone", minWidth: 200 },
                    { name: "Website", key: "website", minWidth: 200 },
                    { name: "City", key: "address.city", minWidth: 200 },
                ]}
                rowHeight={50}
            />
        </main>
    );
}
