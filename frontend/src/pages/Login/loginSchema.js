import { z } from "zod";

export const loginSchema = z.object({
    email: z.string().email("*Favor preencher o campo de Email corretamente*"),
    password: z.string().min(1, "*Favor inserir a senha*")
})