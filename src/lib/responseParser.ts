import toast from "react-hot-toast";

export default function parseResponse(response: any, fieldData: any, setIsDirty: any) {
   if (response.status === "success") {
        if(setIsDirty){ 
            setIsDirty(false);
        }
        toast.success(response.data.message);
        return {
            ...response,
            fieldData: fieldData,
        };
    }
    if (response.status === "error") {
        toast.error(response.data.message);
        return {
            ...response,
        };
    }
}