import { z } from "zod";

export const LoginFormSchema = z.object({
  phoneNumber: z
    .string()
    .min(10, "Phone number must be min 10 digits")
    .nonempty({message:"Phone number is required"}),
    
  password: z
    .string()
    .nonempty({message:"Password is required"}),
    
  
  checkbox: z
    .boolean().refine(val => val === true, {
    message: "You must accept the terms",
    }),
});