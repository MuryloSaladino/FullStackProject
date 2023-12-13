import { z } from "zod";

export const editContactSchema = z.object({
    name: z.string().min(1),
    phone: z.string().min(1),
    email: z.string().email()
})