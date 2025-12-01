import { z } from "zod";

export const AddressDetailsSchema = z.object({
  province: z
    .string()
    .min(1, "Select province"),
    
  district: z
    .string()
    .min(1, "Select district"),
    
  municipality: z
  .string()
  .min(1,"Municipality is required"),

  tole:z
  .string()
  .min(1,"Tole is required"),

  ward:z
  .string()
  .min(1,"Ward number is required")
  .regex(/^[0-9]+$/, "Ward number can only contain digits"),

});