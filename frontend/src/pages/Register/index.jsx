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

import { api } from "../../service/api";
import { useNavigate } from "react-router-dom";

export function RegisterPage() {

    const navigate = useNavigate()

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(registerSchema),
    })

    const submit = async ({contact, email, name, password}) => {
        const newUser = {
            email: email,
            password: password,
            name: name,
            contact: contact,
            admin: false
        }

        try {
            await api.post("/users", newUser)
            toast.success("Conta criada com sucesso!", {theme: "dark"})
            navigate("/")
        } catch (err) {
            toast.error("Ops! Algo deu errado", {theme: "dark"})
        }
    }

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
                    {errors.name ? <Text color="red">{errors.name.message}</Text> : null}
                    <Input
                        type="email"
                        placeholder="Digite aqui seu email"
                        label="Email"
                        register={register("email")}
                    />
                    {errors.email ? <Text color="red">{errors.email.message}</Text> : null}
                    <Input
                        type="password"
                        placeholder="Digite aqui sua senha"
                        label="Senha"
                        register={register("password")}
                    />
                    {errors.password ? <Text color="red">{errors.password.message}</Text> : null}
                    <Input
                        type="password"
                        placeholder="Digite novamente sua senha"
                        label="Confirmar Senha"
                        register={register("confirmation")}
                    />
                    {errors.confirmation ? <Text color="red">{errors.confirmation.message}</Text> : null}
                    <Input
                        type="text"
                        placeholder="Telefone"
                        label="Contato"
                        register={register("contact")}
                    />
                    {errors.contact ? <Text color="red">{errors.contact.message}</Text> : null}
                    <Button
                        type="submit"
                        disabled={errors.name || errors.email || errors.password || errors.confirmation || errors.bio || errors.contact ? true : false}
                    >Cadastrar</Button>
                </Form>
            </StyledMainRegister>
        </>
    )
}