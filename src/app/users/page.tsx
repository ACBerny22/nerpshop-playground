"use client";
import { useQuery } from "@tanstack/react-query";
import VirtualizedTable from "@/components/VirtualizedTable";
import useTitleStore from "@/stores/titleStore";
import { useEffect, useState } from "react";
import ModalForm from "@/components/ModalForm";
import Input from "@/components/Forms/Input";

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
    const [open, setOpen] = useState(false);

    const { data, isError, isLoading } = useQuery({
        queryKey: ["home"],
        queryFn: async () => {
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/users"
            );
            const data = await response.json();
            //return [...data, ...data, ...data, ...data, ...data];
            return data;
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
        return (
            <div className="h-screen flex justify-center items-center">
                <div role="status">
                    <svg
                        aria-hidden="true"
                        className="w-12 h-12 text-gray-200 animate-spin dark:text-gray-600 fill-[#172bde]"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="currentColor"
                        />
                        <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentFill"
                        />
                    </svg>
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        );
    }

    if (isError) {
        return <div>Error</div>;
    }

    return (
        <main className="flex flex-col gap-4 h-[90vh]">
            <ModalForm
                openModal={open}
                closeModal={() => setOpen(false)}
                onSubmit={()=> {

                }}
            >
                <Input name="lastName" label="Last Name" type="text" />
                <Input name="email" label="Email" type="text" />
            </ModalForm>
            <div className="flex justify-between items-center mx-5">
                <h1 className="tex font-semibold">Acciones</h1>
                <button
                    onClick={() => setOpen(true)}
                    className="bg-[#172bde] rounded-full px-4 py-1 text-white text-sm font-semibold"
                >
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
                    // { name: "Zip Code", key: "address.zipcode", minWidth: 200 },
                    // { name: "Street", key: "address.street", minWidth: 200 },
                ]}
                rowHeight={50}
            />
        </main>
    );
}
