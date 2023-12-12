import { z } from "zod";

export const editTechSchema = z.object({
    status: z.string().min(1)
})