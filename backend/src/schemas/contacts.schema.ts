import { z } from "zod";

export const postContactSchema = z.object({
    name: z.string().max(45),
    email: z.string().email().max(45),
    phone: z.string().max(20)
})

export const patchContactSchema = z.object({
    name: z.string().max(45).optional(),
    email: z.string().email().max(45).optional(),
    phone: z.string().max(20).optional()
})