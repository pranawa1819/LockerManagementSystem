import { z } from "zod";

export const PersonalDetailsSchema = z.object({
  fullName: z.string().min(1, "Name is required"),

  email: z
    .string()
    .min(1, "Email is required")
    .regex(/^[^\s]+@[^\s]+\.[^\s]+$/, "Invalid email address"),

  phoneNumber: z
    .string()
    .min(10, "Phone number must be atleast 10 digit")
    .regex(/^[0-9]+$/, "Phone number can only contain digits"),

  maritalStatus: z.enum(["single", "married"], {
    errorMap: () => ({ message: "Please select your marital status" }),
  }),

  nationality: z.string().min(1, "Nationaloity is required"),
});
