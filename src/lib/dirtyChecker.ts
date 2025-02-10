export default function dirtyChecker(formData: any, defaultValues: any, schema: any) {
    const submittedData = Object.fromEntries(formData.entries());

    const fields = Object.keys(schema.shape);
    for (const field of fields) {
        if (submittedData[field] !== defaultValues[field]) {
            return true;
        }
    }
    return false;
}