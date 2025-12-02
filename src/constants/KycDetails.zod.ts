import { z } from "zod";

const today = new Date();
today.setHours(0, 0, 0, 0);

const eighteenYearsAgo = new Date();
eighteenYearsAgo.setFullYear(eighteenYearsAgo.getFullYear() - 18);

export const KycDetailsSchema = z.object({
  //locker details
  reversedDate: z
    .string()
    .min(1, "Date is required")
    .refine((value) => {
      const date = new Date(value);
      return date > today;
    }, "Please select a future date"),

  size: z.string().min(1, "Size is required"),

  accountNumber: z.string().min(1, "Account number is required"),

  bankName: z.string().min(1, "Bank name is required"),

  branch: z
    .string()
    .min(1, "Select your bank branch")
    .refine((val) => val !== undefined && val !== "", "Select branch"),

  //personal details
  fullName: z.string().min(1, {message: "Name is required"}),

  email: z
    .string()
    .min(1, "Email is required")
    .regex(/^[^\s]+@[^\s]+\.[^\s]+$/, "Invalid email address"),

  phoneNumber: z
    .string()
    .min(10, {message:"Phone number must be atleast 10 digit"})
    .regex(/^[0-9]+$/, "Phone number can only contain digits"),

  maritalStatus: z.enum(["single", "married"], {
    errorMap: () => ({ message: "Please select your marital status" }),
  }),

  nationality: z.string().min(1, "Nationaloity is required"),

  // address details
  province: z
    .string()
    .min(1, "Select province")
    .refine((val) => val !== undefined && val !== "", "Select province"),

  district: z
    .string()
    .min(1, "Select district")
    .refine((val) => val !== undefined && val !== "", "Select district"),

  municipality: z.string().min(1, "Municipality is required"),

  tole: z.string().min(1, "Tole is required"),

  ward: z
    .string()
    .min(1, "Ward number is required")
    .regex(/^[0-9]+$/, "Ward number can only contain digits"),

  // document details
  dateOfBirth: z
    .string()
    .min(1, "Enter your date of birth")
    .refine((value) => new Date(value) <= eighteenYearsAgo, {
      message: "You must be at least 18 years old",
    }),

  occupation: z.string().min(1, "Occupation is required"),

  annualSalary: z
    .string()
    .min(1, "Annual Salary is required")
    .regex(/^[0-9]+$/, "Annual Salary can only contain digits"),

  citizenshipFront: z.any()
    .transform((val) => (val instanceof FileList ? val[0] : val))
    .refine((file) => file instanceof File, "Front side is required"),

  citizenshipBack: z.any()
    .transform((val) => (val instanceof FileList ? val[0] : val))
    .refine((file) => file instanceof File, "Back side is required"),

  photo: z.any()
    .transform((val) => (val instanceof FileList ? val[0] : val))
    .refine((file) => file instanceof File, "Photo is required"),
});

export type FormValues = z.infer<typeof KycDetailsSchema>;