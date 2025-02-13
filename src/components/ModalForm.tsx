"use client";
/* eslint-disable  @typescript-eslint/no-explicit-any */

import React from "react";
import FormWrapper from "./Forms/FormWrapper";
import { useActionState } from "react";
import z from "@/lib/validation";
import parseResponse from "@/lib/responseParser";

const schema = z.object({
    name: z.string().min(4),
    lastName: z.string().min(4),
    email: z.string().email(),
    role: z.number().min(1),
});

export async function submitAction(
    params: { schema: any; onSubmit: any },
    prevState: unknown,
    formData: FormData
) {
    const res = params.onSubmit(formData);

    return parseResponse(res, formData, schema);
}

export default function Modal({
    openModal,
    closeModal,
    children,
    onSubmit,
}: {
    openModal: boolean;
    closeModal: () => void;
    children: React.ReactNode;
    onSubmit: any;
}) {
    const [lastResult, formAction, isPending] = useActionState(
        submitAction.bind(null, {
            schema: schema,
            onSubmit: onSubmit,
        }),
        null
    );

    if (!openModal) return null;
    return (
        <div className="fixed bottom-4 right-4 z-50 min-w-[50%]">
            <div className="bg-white p-4 shadow-lg rounded-2xl">
                <FormWrapper
                    formAction={formAction}
                    className="flex flex-col gap-4 p-4"
                    resetId="modal-form"
                    schema={schema}
                    lastResult={lastResult}
                >
                    {children}
                    <div className="flex justify-end gap-3">
                        <button
                            onClick={closeModal}
                            className="mt-2 px-4 py-2 bg-red-500 text-white rounded"
                        >
                            Close
                        </button>
                        <button
                            type="submit"
                            disabled={isPending}
                            className="mt-2 px-4 py-2 bg-[#172bde] text-white rounded"
                        >
                            Guardar
                        </button>
                    </div>
                </FormWrapper>
            </div>
        </div>
    );
}
