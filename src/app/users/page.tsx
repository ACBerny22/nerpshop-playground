"use client";
import { useQuery } from "@tanstack/react-query";
import VirtualizedTable from "@/components/VirtualizedTable";
import useTitleStore from "@/stores/titleStore";
import { useEffect, useState } from "react";

interface User {
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
    address: { city: string; zipcode: string; street: string };
}

export default function Home() {
    const [rows, setRows] = useState<User[]>([]);
    const { data, isError, isLoading } = useQuery({
        queryKey: ["home"],
        queryFn: async () => {
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/users"
            );
            const data = await response.json();
            console.log(data);
            return [...data, ...data, ...data, ...data, ...data];
            //return data;
        },
    });

    useEffect(() => {
        if (isLoading) return;
        setRows(data!);
    }, [data, isLoading]);

    useEffect(() => {
        useTitleStore.setState({ title: "Users" });
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error</div>;
    }

    return (
        <main className="flex flex-col gap-4 h-[90vh]">
            <div className="flex justify-between items-center mx-5">
                <h1 className="tex font-semibold">Acciones</h1>
                <button className="bg-[#172bde] rounded-full px-4 py-1 text-white">
                    {" "}
                    Nuevo Producto
                </button>
            </div>
            <VirtualizedTable
                onSelectionChange={(selectedRows) => {
                    console.log(selectedRows);
                }}
                data={rows}
                control={true}
                columns={[
                    { name: "Name", key: "name", minWidth: 200 },
                    { name: "Username", key: "username", minWidth: 200 },
                    { name: "Email", key: "email", minWidth: 200 },
                    { name: "Phone", key: "phone", minWidth: 200 },
                    { name: "Website", key: "website", minWidth: 200 },
                    { name: "City", key: "address.city", minWidth: 200 },
                    { name: "Zip Code", key: "address.zipcode", minWidth: 200 },
                    { name: "Street", key: "address.street", minWidth: 200 },
                ]}
                rowHeight={50}
            />
        </main>
    );
}
