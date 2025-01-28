import { z } from "zod";

z.setErrorMap((issue, ctx) => {
    if (issue.code === z.ZodIssueCode.too_small && issue.type === 'string') {
      return { message: "No contiene los caracteres requeridos" };
    }
    if (issue.code === z.ZodIssueCode.invalid_type) {
      return { message: "El campo es obligatorio" };
    }
    //email.
    if(issue.code === z.ZodIssueCode.invalid_string && issue.validation === 'email'){
        return { message: "El campo no es un correo válido" };
    }
    
    return { message: ctx.defaultError };
  });

export default z;