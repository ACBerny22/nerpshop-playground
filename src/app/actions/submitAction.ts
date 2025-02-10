"use server";
import parseResponse from "@/lib/responseParser";

export async function submitAction(prevState: unknown, formData: FormData) {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const submittedData = Object.fromEntries(formData.entries());

    // Simulate a response
    let response = {
        status: "success",
        data: {
            message: "Registro actualizado.",
        },
    };
    let response2 = {
        status: "error",
        data: {
            message: "Error al guardar el registro.",
        },
    };

    return parseResponse(response2, submittedData);
}