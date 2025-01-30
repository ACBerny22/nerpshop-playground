"use client";
import Input from "@/components/Forms/Input";
import { useForm } from "@conform-to/react";
import z from "@/lib/validation";
import { parseWithZod } from "@conform-to/zod";
import useTitleStore from "@/stores/titleStore";
import { useActionState, useEffect } from "react";
import FormCardBasic from "@/components/Forms/FormCardBasic";
import { useState } from "react";
import FormWrapper from "@/components/Forms/FormWrapper";

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
    const [resetId, setResetId] = useState("user-form");
    const [formData, setFormData] = useState<any>({
        name: "AaronDev",
        lastName: "Conley",
        email: "ssss@sss.com",
    });

    useEffect(() => {
        useTitleStore.setState({ title: "Agregar Usuario" });
    }, []);

    return (
        <div>
            <FormWrapper
                id={resetId}
                schema={schema}
                submitAction={submitAction}
                data={formData}
            >
                {(form, fields, action, isPending, lastResult) => (
                    <form
                        action={action}
                        onSubmit={form.onSubmit}
                        className="flex flex-col gap-4 p-4"
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
                                    <pre>
                                        {JSON.stringify(lastResult, null, 2)}
                                    </pre>
                                </div>
                            </div>
                        </div>
                    </form>
                )}
            </FormWrapper>
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
        <div className="flex justify-end w-full gap-2 font-semibold">
            <button
                type="button"
                onClick={() => setResetId("user-form-" + Math.random())}
                className="bg-zinc-100 text-black px-4 py-1 rounded-full text-sm"
            >
                Descartar
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
