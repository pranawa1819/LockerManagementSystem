import { z } from "zod";

export const LoginFormSchema = z.object({
  phoneNumber: z
    .string()
    .min(10, "Phone number is required")
    .refine((data) => data === "9841903340", {
      message: "Incorrect Name",
    }),
  password: z
    .string()
    .min(6, "Password is required")
    .refine((data) => data === "pranawa123", {
      message: "Incorrect Password",
    }),
  
  checkbox: z
    .boolean().refine(val => val === true, {
    message: "You must accept the terms",
    }),
});