/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useVirtualizer } from "@tanstack/react-virtual";
import { useRef } from "react";
import { useMemo } from "react";

function getNestedValue(obj: any, path: string): any {
    return path
        .split(".")
        .reduce(
            (acc, key) => (acc && acc[key] !== undefined ? acc[key] : null),
            obj
        );
}

export default function VirtualizedTable({
    data,
    columns,
    rowHeight,
}: {
    data: any[] | undefined;
    columns: any[];
    rowHeight: number;
}) {
    const parentRef = useRef(null);

    const rowVirtualizer = useVirtualizer({
        count: data?.length ?? 0,
        getScrollElement: () => parentRef.current,
        estimateSize: () => rowHeight,
        overscan: 5,
    });

    const renderedColumns = useMemo(
        () =>
            columns.map((column, index) => (
                <div key={index} className="">
                    {column.name}
                </div>
            )),
        [columns]
    );

    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <div
            role="table"
            style={{
                maxHeight: "100%", // Ensures it doesn't exceed the parent's height
                display: "flex",
                flexDirection: "column",
            }}
            className="bg-stone-100/80 rounded-xl px-2"
        >
            <div
                className="grid gap-4 w-full px-5 py-3 text-black font-bold sticky top-0 z-10 "
                style={{
                    gridTemplateColumns: `repeat(${columns.length}, 1fr)`,
                }}
            >
                {renderedColumns}
            </div>
            <div
                ref={parentRef}
                className="overflow-auto h-full poem bg-white"
                style={{ width: "100%" }}
            >
                <div
                    style={{
                        height: `${rowVirtualizer.getTotalSize()}px`,
                        position: "relative",
                    }}
                    className="bg-stone-100/80"
                >
                    {rowVirtualizer.getVirtualItems().map((virtualRow) => {
                        const row = data[virtualRow.index];
                        return (
                            <div
                                key={virtualRow.key}
                                role="row"
                                style={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    width: "100%",
                                    transform: `translateY(${virtualRow.start}px)`,
                                    gridTemplateColumns: `repeat(${columns.length}, 1fr)`,
                                }}
                                className="grid px-4 py-3 hover:bg-stone-200 cursor-pointer bg-white rounded-xl text-sm transition-all duration-200 ease-in-out"
                            >
                                {columns.map((column, index) => (
                                    <div key={index} role="cell">
                                        {getNestedValue(row, column.key)}
                                    </div>
                                ))}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
