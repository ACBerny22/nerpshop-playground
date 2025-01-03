"use client";
import { useQuery } from "@tanstack/react-query";
import { useVirtualizer } from "@tanstack/react-virtual";
import { useRef } from "react";

export default function Home() {
    const { data, isError, isLoading } = useQuery({
        queryKey: ["home"],
        queryFn: async () => {
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/posts"
            );
            const data = await response.json();
            return data;
        },
    });

    const parentRef = useRef(null);

    const rowVirtualizer = useVirtualizer({
        count: data?.length ?? 0,
        getScrollElement: () => parentRef.current,
        estimateSize: () => 100, // Adjust the height of each row as needed
        overscan: 5, // Render additional rows outside the viewport for smoother scrolling
    });

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error</div>;
    }

    return (
        <div
            ref={parentRef}
            className="overflow-auto h-screen" // Set the container height
            style={{ width: "100%" }}
        >
            <div
                style={{
                    height: `${rowVirtualizer.getTotalSize()}px`,
                    position: "relative",
                }}
            >
                {rowVirtualizer.getVirtualItems().map((virtualRow) => {
                    const post = data[virtualRow.index];
                    return (
                        <div
                            key={virtualRow.key}
                            style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                transform: `translateY(${virtualRow.start}px)`,
                            }}
                            className="flex flex-col gap-4 px-4 py-2"
                        >
                            <div className="text-xl">{post.title}</div>
                            <div className="text-sm">{post.body}</div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
