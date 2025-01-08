"use client";
import Input from "@/components/Forms/Input";
import { useForm, FormProvider } from "@conform-to/react";
import { z } from "zod";
import { parseWithZod } from "@conform-to/zod";
import useTitleStore from "@/stores/titleStore";
import { useActionState, useEffect } from "react";
import FormCardBasic from "@/components/Forms/FormCardBasic";

function submitAction(prevState: unknown, formData: FormData) {
    console.log(formData.get("name"));
    const submission = parseWithZod(formData, { schema });
    if (submission.status !== "success") {
        return submission.reply();
    }
}

export const schema = z.object({
    name: z
        .string({ message: "El campo es obligatorio" })
        .min(1, { message: "El campo es obligatorio" }),
    lastName: z
        .string({ message: "El campo es obligatorio" })
        .min(1, { message: "El campo es obligatorio" }),
    email: z
        .string({ message: "El campo es obligatorio" })
        .min(1, { message: "El campo es obligatorio" }),
});

export default function Page() {
    const [lastResult, formAction] = useActionState(submitAction, undefined);

    const [form, fields] = useForm({
        lastResult,
        onValidate({ formData }) {
            return parseWithZod(formData, { schema });
        },
        shouldValidate: "onBlur",
        shouldRevalidate: "onInput",
    });

    useEffect(() => {
        useTitleStore.setState({ title: "Agregar Usuario" });
    }, []);

    return (
        <FormProvider context={form.context}>
            <div>
                <form
                    action={formAction}
                    className="flex flex-col gap-4 p-4"
                    onSubmit={form.onSubmit}
                    id={form.id}
                >
                    <Bar />
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
                    </div>
                </form>
            </div>
        </FormProvider>
    );
}

function Bar() {
    return (
        <div className="flex justify-end w-full">
            <button
                type="submit"
                className="bg-[#172bde] text-white px-4 py-1 rounded-full text-sm"
            >
                Guardar
            </button>
        </div>
    );
}
