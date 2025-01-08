"use client";
import Input from "@/components/Forms/Input";
import { useForm, FormProvider } from "@conform-to/react";
import { z } from "zod";
import { parseWithZod } from "@conform-to/zod";
import useTitleStore from "@/stores/titleStore";
import { useActionState, useEffect } from "react";

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
        <div>
            Crear
            <FormProvider context={form.context}>
                <form
                    action={formAction}
                    className="flex flex-col gap-4 p-4"
                    onSubmit={form.onSubmit}
                    id={form.id}
                >
                    <Input
                        name="name"
                        label="Name"
                        type="text"
                        fields={fields}
                    />
                    <button type="submit">Submit</button>
                </form>
            </FormProvider>
        </div>
    );
}
