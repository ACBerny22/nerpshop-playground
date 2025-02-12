"use client";
/* eslint-disable  @typescript-eslint/no-explicit-any */

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
import parseResponse from "@/lib/responseParser";
import Select from "@/components/Forms/Select";

const schema = z.object({
    name: z.string().min(4),
    lastName: z.string().min(4),
    email: z.string().email(),
    role: z.number().min(1),
});

async function getData() {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return {
        name: "Aaron",
        lastName: "Conley",
        email: "conley@harmony.com",
        role: 2,
    };
}

export default function Page() {
    const [resetId, setResetId] = useState("user-form");
    const [isDirty, setIsDirty] = useState(false);

    const [lastResult, formAction, isPending] = useActionState(
        submitAction.bind(null, {
            setIsDirty,
            schema: schema,
        }),
        null
    );

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
                dirtySetter={setIsDirty}
                defaultValues={lastResult?.fieldData || data}
            >
                <DetailBar
                    setResetId={setResetId}
                    isPending={isPending}
                    isDirty={isDirty}
                    setIsDirty={setIsDirty}
                />
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-zinc-100 rounded-xl p-4 w-full flex flex-col gap-4">
                        <FormCardBasic
                            title="Datos del Usuario"
                            containerClassName="flex flex-col gap-4 p-4"
                        >
                            <Input name="name" label="Name" type="text" />
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
                            <Input name="email" label="Email" type="text" />
                            <Select
                                name="role"
                                label="Role"
                                type="number"
                                options={[
                                    { label: "Admin", value: 1 },
                                    { label: "Usuario", value: 2 },
                                ]}
                            ></Select>
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

export async function submitAction(
    params: { setIsDirty: any; schema: any },
    prevState: unknown,
    formData: FormData
) {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Simulate a response
    const res = {
        status: "success",
        data: {
            message: "Registro actualizado.",
        },
    };

    return parseResponse(res, formData, params.setIsDirty, schema);
}
