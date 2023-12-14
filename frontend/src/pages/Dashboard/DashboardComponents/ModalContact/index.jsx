import { StyledDialog, StyledModalInterior } from "./styles";
import { Text, Title2, Title3 } from "../../../../styles/typography";
import { Form } from "../../../../components/Form";
import { Input } from "../../../../components/Input";
import { Select } from "../../../../components/Select";
import { Button } from "../../../../components/Button";

import { newContactSchema } from "./newContactSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";

import { useForm } from "react-hook-form";
import { useContext } from "react";
import { ContactContext } from "../../../../providers/ContactsContext";

import { api } from "../../../../service/api";

export function Modal() {

    const {
        updateContacts,
        setUpdateContacts,
        modalRef,
    } = useContext(ContactContext)

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(newContactSchema),
    })

    const submit = async (formData) => {
        try {
            await api.post(`users/contacts/${localStorage.getItem("@USERID")}`, formData, {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("@TOKEN")}`
                }
            })
            toast.success("Contato cadastrado", {theme: "dark"})
        }catch (err) {
            toast.error("Ops! Algo deu errado", {theme: "dark"})
        }
        finally{
            setUpdateContacts((updateContacts ? false : true))
            modalRef.current.close()
        }
    }

    
    return(
        <StyledDialog ref={modalRef} onClick={() => modalRef.current.close()}>
            <StyledModalInterior onClick={(e) => e.stopPropagation()}>
                <header>
                    <Title3>Cadastrar Contato</Title3>
                </header>

                <Title2 color="var(--grey-1)" onClick={() => ref.current.close()} >X</Title2>

                <Form onSubmit={handleSubmit(submit)} >
                    <Input type="text" label="Nome" placeholder="Digite aqui o nome" register={register("name")} />
                    {errors.name ? <Text color="var(--grey-1)">{errors.name.message}</Text> : null}
                    <Input type="text" label="Email" placeholder="Digite aqui o email" register={register("email")} />
                    {errors.email ? <Text color="var(--grey-1)">{errors.email.message}</Text> : null}
                    <Input type="text" label="Phone" placeholder="Digite aqui o phone" register={register("phone")} />
                    {errors.phone ? <Text color="var(--grey-1)">{errors.phone.message}</Text> : null}
                    <Button type="submit">Cadastrar Contato</Button>
                </Form>
            </StyledModalInterior>
        </StyledDialog>
    )
}