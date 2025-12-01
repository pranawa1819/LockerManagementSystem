import { z } from "zod";

export const SignInFormSchema = z
  .object({
    firstName: z
     .string()
     .min(1, "First Name is required"),

    lastName: z
     .string()
     .min(1, "Last Name is required"),

    email: z
      .string()
      .min(1, "Email is required")
      .regex(/^[^\s]+@[^\s]+\.[^\s]+$/, "Invalid email address"),

    password: z
     .string()
     .min(6, "Password must be atleast 6 character long"),

    confirmPassword: z
     .string()
     .min(6, "ConfirmPassword is required"),

    branch: z
     .string()
     .min(1, "Select your bank branch"),

    checkbox: z
      .boolean().refine(val => val === true, {
      message: "You must accept the terms",
  }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
