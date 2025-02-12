// "use server";
// import parseResponse from "@/lib/responseParser";

// export async function submitAction(prevState: unknown, formData: FormData) {
//     await new Promise((resolve) => setTimeout(resolve, 2000));
//     const submittedData = Object.fromEntries(formData.entries());

//     // Simulate a response
//     const response = {
//         status: "success",
//         data: {
//             message: "Registro actualizado.",
//         },
//     };
//     const response2 = {
//         status: "error",
//         data: {
//             message: "Error al guardar el registro.",
//         },
//     };

//     return parseResponse(response2, submittedData, );
// }