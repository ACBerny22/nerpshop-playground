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
                <div key={index} className="text-left">
                    {column.name}
                </div>
            )),
        ];
    }, [columns, data, selectedRows, onSelectionChange]);

    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <div
            role="table"
            className="bg-stone-100/80 rounded-xl px-2 max-h-full flex flex-col"
        >
            <div
                className="grid gap-4 w-full px-4 py-3 text-black font-bold sticky top-0 z-10 "
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
                    minWidth: `${columns.length * 100}px`, // Ensure a minimum width for the table
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
                                            toggleRowSelection(virtualRow.index)
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
    );
}
