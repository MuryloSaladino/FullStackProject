import { z } from "zod";

export const newTechSchema = z.object({
    title: z.string().min(1, "Favor inserir o título da tecnologia"),
    status: z.string().min(1)
})