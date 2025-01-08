/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";
import { getInputProps } from "@conform-to/react";

export default function Input({ name, label, fields, type, className }: any) {
    const { key, ...rest } = getInputProps(fields[name], { type: type });
    return (
        <div className="flex flex-col gap-1">
            <span className="font-semibold ml-2">{label}</span>
            <input
                key={key}
                {...rest}
                className={
                    className ||
                    "border p-2 rounded-xl dark:bg-zinc-800 dark:border-zinc-600"
                }
            />
            <p className="text-red-400 text-sm">{fields[name].errors}</p>
        </div>
    );
}
