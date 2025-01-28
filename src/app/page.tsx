"use client";
import { useQuery } from "@tanstack/react-query";
import { useVirtualizer } from "@tanstack/react-virtual";
import { useEffect, useRef } from "react";
import useTitleStore from "@/stores/titleStore";

function PostModal({ post, style }: { post: any; style: any }) {
    return (
        <div
            className="bg-white rounded-xl p-4 shadow-lg border m-1"
            style={style}
        >
            <h2 className="text-xl font-bold">{post.title}</h2>
            <p className="text-sm">{post.body}</p>
        </div>
    );
}

export default function Home() {
    const { data, isError, isLoading } = useQuery({
        queryKey: ["home"],
        queryFn: async () => {
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/posts"
            );
            const data = await response.json();
            console.log(data);
            return data;
        },
    });

    useEffect(() => {
        useTitleStore.setState({ title: "Home" });
    }, []);

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
                className="p-3"
            >
                {rowVirtualizer.getVirtualItems().map((virtualRow, index) => {
                    const post = data[virtualRow.index];
                    return (
                        <PostModal
                            key={virtualRow.key}
                            post={post}
                            style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                transform: `translateY(${virtualRow.start}px)`,
                            }}
                        ></PostModal>
                    );
                })}
            </div>
        </div>
    );
}
