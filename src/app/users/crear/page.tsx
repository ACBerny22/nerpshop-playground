"use client";
import Input from "@/components/Forms/Input";
import { useForm } from "@conform-to/react";
import z from "@/lib/validation";
import { parseWithZod } from "@conform-to/zod";
import useTitleStore from "@/stores/titleStore";
import { useActionState, useEffect } from "react";
import FormCardBasic from "@/components/Forms/FormCardBasic";
import { useState } from "react";

export async function submitAction(prevState: unknown, formData: FormData) {
    // wait 2 seconds
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const submittedData = Object.fromEntries(formData.entries());

    return {
        status: "failure",
        error: {
            message: "Error al enviar el formulario",
        },
        fieldData: submittedData,
    };
}

const schema = z.object({
    name: z.string().min(4),
    lastName: z.string().min(4),
    email: z.string().email(),
});

export default function Page() {
    const [lastResult, formAction, isPending] = useActionState(
        submitAction,
        null
    );
    const [resetId, setResetId] = useState("user-form");
    const [formData, setFormData] = useState<any>({
        name: "AaronDev",
        lastName: "Conley",
        email: "ssss@sss.com",
    });

    const [form, fields] = useForm({
        lastResult: lastResult?.fieldData as any,
        onValidate({ formData }) {
            return parseWithZod(formData, { schema });
        },
        shouldValidate: "onBlur",
        shouldRevalidate: "onInput",
        id: resetId,
        defaultValue: lastResult?.fieldData || formData,
    });

    useEffect(() => {
        useTitleStore.setState({ title: "Agregar Usuario" });
    }, []);

    return (
        <div>
            <form
                action={formAction}
                className="flex flex-col gap-4 p-4"
                onSubmit={form.onSubmit}
                id={form.id}
            >
                <Bar
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
                                fields={fields}
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
                                fields={fields}
                            />
                            <Input
                                name="email"
                                label="Email"
                                type="text"
                                fields={fields}
                            />
                        </FormCardBasic>
                    </div>
                    <div className="bg-zinc-100 rounded-xl p-4 w-full flex flex-col gap-4">
                        <div>
                            <pre>{JSON.stringify(lastResult, null, 2)}</pre>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

function Bar({
    setResetId,
    isPending,
}: {
    setResetId: (id: string) => void;
    isPending: boolean;
}) {
    return (
        <div className="flex justify-end w-full gap-2">
            <button
                type="button"
                onClick={() => setResetId("user-form-" + Math.random())}
                className="bg-zinc-100 text-black px-4 py-1 rounded-full text-sm"
            >
                Limpiar
            </button>
            <button
                type="submit"
                className="bg-[#172bde] text-white px-4 py-1 rounded-full text-sm"
            >
                {isPending ? "Guardando..." : "Guardar"}
            </button>
        </div>
    );
}
