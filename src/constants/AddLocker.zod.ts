import {z} from "zod";


export const AddLockerSchema = z.object({
    lockersize: z
    .string()
    .min(1, "Select size")
    .refine((val) => val !== undefined && val !== "", "Select size of locker"),

    price: z
    .string()
    .min(1, "Price is required")
    .regex(/^[0-9]+$/, "Price can only contain digits"),

}) 