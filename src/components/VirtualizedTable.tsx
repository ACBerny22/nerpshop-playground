/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useVirtualizer } from "@tanstack/react-virtual";
import { useRef } from "react";
import { useMemo, useState } from "react";

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
    onSelectionChange,
}: {
    data: any[];
    columns: any[];
    rowHeight: number;
    control: boolean;
    onSelectionChange: (selectedRows: any[]) => void;
}) {
    const parentRef = useRef(null);
    const [selectedRows, setSelectedRows] = useState<Set<number>>(new Set());

    const rowVirtualizer = useVirtualizer({
        count: data?.length ?? 0,
        getScrollElement: () => parentRef.current,
        estimateSize: () => rowHeight,
        overscan: 5,
    });

    const toggleRowSelection = (index: number) => {
        if (!data) return;
        const newSelectedRows = new Set(selectedRows);
        if (newSelectedRows.has(index)) {
            newSelectedRows.delete(index);
        } else {
            newSelectedRows.add(index);
        }
        setSelectedRows(newSelectedRows);
        onSelectionChange(Array.from(newSelectedRows).map((idx) => data[idx]));
    };

    const renderedColumns = useMemo(() => {
        return [
            // Add a header for the checkbox column
            <div key="checkbox">
                <input
                    type="checkbox"
                    onChange={(e) => {
                        const allSelected = e.target.checked;
                        const newSelectedRows = allSelected
                            ? new Set(data.map((_, index) => index))
                            : new Set();
                        setSelectedRows(newSelectedRows as Set<number>);
                        onSelectionChange(allSelected ? data : []);
                    }}
                    checked={selectedRows.size === data.length}
                />
            </div>,
            ...columns.map((column, index) => (
                <div key={index} className="text-left flex gap-1 items-center">
                    <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g clipPath="url(#clip0_1721_1642)">
                            <rect width="14" height="14" fill="white" />
                            <path
                                d="M13.998 14L13.998 0L0.00376225 -6.1171e-07L0.00376163 14L13.998 14Z"
                                fill="#172BDE"
                            />
                            <path
                                d="M13.9943 14L13.94 14C10.1037 14 6.99572 10.8697 6.99 7.00863L6.99 6.99712C6.99286 3.13029 10.1065 -1.7019e-07 13.9457 -2.37242e-09L14 0L13.9943 13.9971L13.9943 14Z"
                                fill="#6CD331"
                            />
                            <path
                                d="M-0.000698225 14L-0.000698075 10.5705L3.59 6.98849L-0.000697762 3.42088L-0.000697613 -3.07291e-07L7.0293 6.98849L-0.000698225 14Z"
                                fill="white"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_1721_1642">
                                <rect width="14" height="14" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    {column.name}
                </div>
            )),
        ];
    }, [columns, data, selectedRows, onSelectionChange]);

    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <div className="w-fit lg:w-full overflow-x-auto" id="container-table">
            <div
                role="table"
                className="bg-stone-100/80 rounded-xl px-2 max-h-full flex flex-col"
            >
                <div
                    className="grid gap-4 w-full px-4 py-3 text-black font-bold sticky top-0 z-10 text-sm"
                    style={{
                        gridTemplateColumns: `20px repeat(${columns.length}, 1fr)`, // Checkbox column gets 20px
                    }}
                >
                    {renderedColumns}
                </div>
                <div
                    ref={parentRef}
                    className="max-h-full poem bg-white"
                    style={{
                        width: "100%",
                        minWidth: `${columns.length}px`, // Ensure a minimum width for the table
                    }}
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
                                        gridTemplateColumns: `20px repeat(${columns.length}, 1fr)`, // Checkbox column gets 20px
                                    }}
                                    className="grid px-4 py-3 hover:bg-stone-200 cursor-pointer bg-white rounded-xl text-sm transition-all duration-200 ease-in-out"
                                >
                                    <div key="checkbox">
                                        <input
                                            type="checkbox"
                                            onChange={() =>
                                                toggleRowSelection(
                                                    virtualRow.index
                                                )
                                            }
                                            checked={selectedRows.has(
                                                virtualRow.index
                                            )}
                                        />
                                    </div>
                                    {columns.map((column, index) => (
                                        <div
                                            key={index}
                                            role="cell"
                                            className="text-left truncate overflow-hidden text-ellipsis"
                                        >
                                            {getNestedValue(row, column.key)}
                                        </div>
                                    ))}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
