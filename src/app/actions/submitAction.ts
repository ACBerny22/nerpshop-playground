"use server";

export async function submitAction(prevState: unknown, formData: FormData) {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const submittedData = Object.fromEntries(formData.entries());

    return {
        status: "success",
        data: {
            message: "Datos guardados correctamente",
        },
        fieldData: submittedData,
    };
}