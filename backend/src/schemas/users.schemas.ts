import { z } from "zod";

export const postUserSchema = z.object({
    name: z.string().max(45),
    email: z.string().email().max(45),
    password: z.string().max(120),
    phone: z.string().max(20),
    admin: z.boolean().optional()
})

export const patchUserSchema = z.object({
    name: z.string().max(45).optional(),
    email: z.string().email().max(45).optional(),
    password: z.string().max(120).optional(),
    phone: z.string().max(20).optional(),
    admin: z.boolean().optional()
})