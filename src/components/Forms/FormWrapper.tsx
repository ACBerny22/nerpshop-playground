"use client";
/* eslint-disable  @typescript-eslint/no-explicit-any */

import React from "react";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import dirtyChecker from "@/lib/dirtyChecker";

export const FieldsContext = React.createContext<any>({});

export default function FormWrapper({
    children,
    schema,
    resetId,
    formAction,
    defaultValues,
    lastResult,
    className,
    dirtySetter,
}: {
    children: React.ReactNode;
    schema: any;
    resetId?: string;
    formAction: any;
    defaultValues?: any;
    className: string;
    lastResult: any;
    dirtySetter?: any;
}) {
    const [form, fields] = useForm({
        lastResult: lastResult?.fieldData as any,
        onValidate({ formData }) {
            if (defaultValues) {
                dirtySetter(dirtyChecker(formData, defaultValues, schema));
            }
            return parseWithZod(formData, { schema });
        },
        shouldValidate: "onInput",
        shouldDirtyConsider: true,
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
