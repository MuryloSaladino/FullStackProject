import { z } from "zod";

export const registerSchema = z.object({
    name: z.string().min(1, "*Favor preencher o campo de Nome*").trim(),
    email: z.string()
        .min(1, "*Favor preencher o campo de Email*")
        .email("*Favor preencher o campo de Email corretamente*"),
    password: z.string()
        .min(8, "*A senha deve conter no mínimo 8 caractéres*")
        .regex(/(?=.*?[A-Z])/, "*A senha deve conter pelo menos uma letra maiúscula*")
        .regex(/(?=.*?[a-z])/, "*A senha deve conter pelo menos uma letra minúscula*")
        .regex(/(?=.*?[0-9])/, "*A senha deve conter pelo menos um número*")
        .regex(/^(?=.*[!@#$%^&*()\-=_+[\]{};':"\\|,.<>/?]).*$/, "*A senha deve conter pelo menos um caractere especial*"),
    confirmation: z.string()
        .min(1, "*Favor preencher o campo de confirmação*"),
    bio: z.string().min(1, "*Favor preencher o campo de Bio*").trim(),
    contact: z.string().min(1, "*Favor preencher o campo de Contato*"),
    courseLevel: z.string().min(1)
}).refine(({password, confirmation}) => password === confirmation, {
    message: "*As senhas precisam ser iguais*",
    path: ["confirmation"]
})