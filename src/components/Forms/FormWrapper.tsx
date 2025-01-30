"use client";

import Input from "@/components/Forms/Input";
import { useForm } from "@conform-to/react";
import z from "@/lib/validation";
import { parseWithZod } from "@conform-to/zod";
import useTitleStore from "@/stores/titleStore";
import { JSX, useActionState, useEffect } from "react";
import FormCardBasic from "@/components/Forms/FormCardBasic";
import { useState } from "react";

export default function FormWrapper({
    id,
    schema,
    submitAction,
    data,
    children,
}: {
    id: string;
    schema: any;
    submitAction: any;
    data: any;
    children: (
        form: any,
        fields: any,
        formAction: any,
        isPending: boolean,
        lastResult: any
    ) => JSX.Element;
}) {
    const [lastResult, formAction, isPending] = useActionState<any>(
        submitAction,
        null
    );

    const [form, fields] = useForm({
        lastResult: lastResult?.fieldData,
        onValidate({ formData }) {
            return parseWithZod(formData, { schema });
        },
        shouldValidate: "onBlur",
        shouldRevalidate: "onInput",
        ...(id && { id: id }),
        defaultValue: data || {},
    });

    return <>{children(form, fields, formAction, isPending, lastResult)}</>;
}
