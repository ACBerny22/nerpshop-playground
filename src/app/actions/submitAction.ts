"use server";

export async function submitAction(prevState: unknown, formData: FormData) {
    "use server";
    // wait 2 seconds
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return {
        status: "success",
        data: {
            name: formData.get("name") as string,
            lastName: formData.get("lastName") as string,
            email: formData.get("email") as string,
        },
    };
}