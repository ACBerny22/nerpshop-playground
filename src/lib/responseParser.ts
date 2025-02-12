import toast from "react-hot-toast";
import { parseWithZod } from "@conform-to/zod";
/* eslint-disable  @typescript-eslint/no-explicit-any */

export default function parseResponse(
    response: any,
    fieldData: FormData,
    setIsDirty: (state: boolean) => void,
    schema: any
) {
    const validation = parseWithZod(fieldData, { schema });
    let fields;
    if (validation.status === "success") {
        fields = validation.value;
    }
    if (response.status === "success") {
        if (setIsDirty) {
            setIsDirty(false);
        }
        toast.success(response.data.message);
        return {
            ...response,
            fieldData: fields,
        };
    }
    if (response.status === "error") {
        toast.error(response.data.message);
        return {
            ...response,
        };
    }
}
