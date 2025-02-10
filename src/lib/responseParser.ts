export default function parseResponse(response: any, fieldData: any) {
   if (response.status === "success") {
        return {
            ...response,
            fieldData: fieldData,
        };
    }
    if (response.status === "error") {
        return {
            ...response,
        };
    }
}