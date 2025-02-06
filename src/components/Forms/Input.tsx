/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";
import { getInputProps } from "@conform-to/react";
import React from "react";
import { FieldsContext } from "./FormWrapper";


export default function Input({ name, label, fields, type, className }: any) {
    const contextFields = React.useContext(FieldsContext);
    const { key, defaultValue, ...rest } = getInputProps(contextFields[name], { type: type });
    return (
        <div className="flex flex-col gap-1">
            <span className="font-semibold ml-2">{label}</span>
            <input
                key={key}
                defaultValue={defaultValue}
                placeholder="Escribe aqui"
                {...rest}
                className={className || "border p-1 rounded border-zinc-600"}
            />
            <p className="text-red-400 text-sm">{contextFields[name].errors}</p>
        </div>
    );
}
