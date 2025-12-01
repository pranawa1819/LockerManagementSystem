import { z } from "zod";

export const DocumentDetailsSchema = z.object({
    dateOfBirth:z
    .string()
    .min(1,"Enter your date of birth"),

    occupation:z
    .string()
    .min(1,"Occupation is required"),

    annualSalary:z
    .string()
    .min(1,"Annual Salary is required")
    .regex(/^[0-9]+$/, "Annual Salary can only contain digits"),
    
    citizenshipFront: z
    .any()
    .refine((file) => file?.length === 1, "Front side is required"),

  citizenshipBack: z
    .any()
    .refine((file) => file?.length === 1, "Back side is required"),

})