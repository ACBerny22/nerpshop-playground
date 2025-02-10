"use client";

import React from "react";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";

export const FieldsContext = React.createContext<any>({});

export default function FormWrapper({
    children,
    schema,
    resetId,
    formAction,
    defaultValues,
    lastResult,
    className,
}: {
    children: React.ReactNode;
    schema: any;
    resetId?: string;
    formAction: any;
    defaultValues?: any;
    className: string;
    lastResult: any;
}) {
    const [form, fields] = useForm({
        lastResult: lastResult?.fieldData as any,
        onValidate({ formData }) {
            return parseWithZod(formData, { schema });
        },
        shouldValidate: "onBlur",
        shouldRevalidate: "onInput",
        ...(resetId && { id: resetId }),
        ...(defaultValues && { defaultValue: defaultValues }),
    });

    return (
        <form
            action={formAction}
            className={className}
            id={form.id}
            onSubmit={form.onSubmit}
        >
            <FieldsContext.Provider value={fields}>
                {children}
            </FieldsContext.Provider>
        </form>
    );
}
