import { StyledMainRegister, StyledTop } from "./styles";
import { Form } from "../../components/Form";
import { Logo } from "../../components/Logo";
import { Input } from "../../components/Input";
import { Select } from "../../components/Select";
import { Button } from "../../components/Button";
import { Text } from "../../styles/typography";
import { toast } from "react-toastify";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { registerSchema } from "./registerSchema";

import { kenzieHub } from "../../service/api";
import { useNavigate } from "react-router-dom";

export function RegisterPage() {

    const navigate = useNavigate()

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(registerSchema),
    })

    const submit = async ({bio, contact, courseLevel, email, name, password}) => {
        const newUser = {
            email: email,
            password: password,
            name: name,
            bio: bio,
            contact: contact,
            course_module: courseLevel
        }

        try {
            await kenzieHub.post("/users", newUser)
            toast.success("Conta criada com sucesso!", {theme: "dark"})
            navigate("/")
        } catch (err) {
            toast.error("Ops! Algo deu errado", {theme: "dark"})
        }
    }

    const selectOptions = ["Primeiro Módulo", "Segundo Módulo", "Terceiro Módulo", "Quarto Módulo", "Quinto Módulo", "Sexto Módulo"]

    return(
        <>
            <StyledMainRegister>
                <StyledTop>
                    <Logo/>
                    <Button small link={"/"}>Voltar</Button>
                </StyledTop>                

                <Form onSubmit={handleSubmit(submit)} formName="Crie sua conta" formDescription="Rapido e grátis, vamos nessa">
                    <Input
                        type="text"
                        placeholder="Digite aqui seu nome"
                        label="Nome"
                        register={register("name")}
                    />
                    {errors.name ? <Text color="var(--grey-1)">{errors.name.message}</Text> : null}
                    <Input
                        type="email"
                        placeholder="Digite aqui seu email"
                        label="Email"
                        register={register("email")}
                    />
                    {errors.email ? <Text color="var(--grey-1)">{errors.email.message}</Text> : null}
                    <Input
                        type="password"
                        placeholder="Digite aqui sua senha"
                        label="Senha"
                        register={register("password")}
                    />
                    {errors.password ? <Text color="var(--grey-1)">{errors.password.message}</Text> : null}
                    <Input
                        type="password"
                        placeholder="Digite novamente sua senha"
                        label="Confirmar Senha"
                        register={register("confirmation")}
                    />
                    {errors.confirmation ? <Text color="var(--grey-1)">{errors.confirmation.message}</Text> : null}
                    <Input
                        type="text"
                        placeholder="Fale sobre você"
                        label="Bio"
                        register={register("bio")}
                    />
                    {errors.bio ? <Text color="var(--grey-1)">{errors.bio.message}</Text> : null}
                    <Input
                        type="text"
                        placeholder="Opção de contato"
                        label="Contato"
                        register={register("contact")}
                    />
                    {errors.contact ? <Text color="var(--grey-1)">{errors.contact.message}</Text> : null}
                    <Select
                        options={selectOptions}
                        label="Selecionar módulo"
                        register={register("courseLevel")}
                    />
                    <Button
                        type="submit"
                        disabled={errors.name || errors.email || errors.password || errors.confirmation || errors.bio || errors.contact ? true : false}
                    >Cadastrar</Button>
                </Form>
            </StyledMainRegister>
        </>
    )
}