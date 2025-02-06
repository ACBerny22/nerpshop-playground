"use client";
import Input from "@/components/Forms/Input";
import z from "@/lib/validation";
import useTitleStore from "@/stores/titleStore";
import { useActionState, useEffect } from "react";
import FormCardBasic from "@/components/Forms/FormCardBasic";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import FormWrapper from "@/components/Forms/FormWrapper";
import DetailBar from "@/components/DetailBar";
import Spinner from "@/components/Spinner";
import { submitAction } from "@/app/actions/submitAction";

const schema = z.object({
    name: z.string().min(4),
    lastName: z.string().min(4),
    email: z.string().email(),
});

async function getData() {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return {
        name: "Aaron",
        lastName: "Conley",
        email: "conley@harmony.com",
    };
}

export default function Page() {
    const [lastResult, formAction, isPending] = useActionState(
        submitAction,
        undefined
    );
    const [resetId, setResetId] = useState("user-form");

    const { data, isLoading } = useQuery({
        queryKey: ["user"],
        queryFn: getData,
    });

    useEffect(() => {
        useTitleStore.setState({ title: "Agregar Usuario" });
    }, []);

    if (isLoading) {
        return (
            <div className="h-screen flex justify-center items-center">
                <Spinner className="w-12 h-12"></Spinner>
            </div>
        );
    }

    return (
        <div>
            <FormWrapper
                formAction={formAction}
                className="flex flex-col gap-4 p-4"
                resetId={resetId}
                schema={schema}
                lastResult={lastResult}
                defaultValues={lastResult?.fieldData || data}
            >
                <DetailBar
                    setResetId={setResetId}
                    isPending={isPending}
                />
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-zinc-100 rounded-xl p-4 w-full flex flex-col gap-4">
                        <FormCardBasic
                            title="Datos del Usuario"
                            containerClassName="flex flex-col gap-4 p-4"
                        >
                            <Input
                                name="name"
                                label="Name"
                                type="text"
                            />
                        </FormCardBasic>
                        <FormCardBasic
                            title="Datos del Usuario"
                            containerClassName="flex flex-col gap-4 p-4"
                        >
                            <Input
                                name="lastName"
                                label="Last Name"
                                type="text"
                            />
                            <Input
                                name="email"
                                label="Email"
                                type="text"
                            />
                        </FormCardBasic>
                    </div>
                    <div className="bg-zinc-100 rounded-xl p-4 w-full flex flex-col gap-4">
                        <div>
                            <pre>{JSON.stringify(lastResult, null, 2)}</pre>
                        </div>
                    </div>
                </div>
            </FormWrapper>
        </div>
    );
}
