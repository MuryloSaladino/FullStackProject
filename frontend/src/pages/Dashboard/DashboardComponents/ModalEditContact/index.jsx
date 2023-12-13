import { StyledBottomForm, StyledDialog, StyledModalInterior } from "./styles";
import { Text, Title2, Title3 } from "../../../../styles/typography";
import { Form } from "../../../../components/Form";
import { Input } from "../../../../components/Input";
import { Select } from "../../../../components/Select";
import { Button } from "../../../../components/Button";

import { useForm } from "react-hook-form";

import { editContactSchema } from "./editContactSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";

import { api } from "../../../../service/api";

import { useContext } from "react";
import { ContactContext } from "../../../../providers/ContactsContext";

export function ModalEdit () {

    const {
        updateContacts,
        setUpdateContacts,
        currentContact,
        modalEditRef,
    } = useContext(ContactContext)

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(editContactSchema),
    })

    const submit = async (formData) => {
        try {
            await api.patch("users/contacts/" + currentContact.id, formData, {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("@TOKEN")}`
                }
            })
            toast.success("Contato alterado", {theme: "dark"})
        } catch (err) {
            toast.error("Ops! Algo deu errado", {theme: "dark"})
        }
        finally{
            setUpdateContacts((updateContacts ? false : true))
            modalEditRef.current.close()
        }
    }

    async function deleteContact() {
        try {
            await api.delete("users/contacts/" + currentContact.id, {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("@TOKEN")}`
                }
            })
            toast.success("Contato deletado", {theme: "dark"})
        } catch (error) {
            toast.error("Ops! Algo deu errado", {theme: "dark"})
        }
        finally{
            setUpdateContacts((updateContacts ? false : true))
            modalEditRef.current.close()
        }
    }

    
    return(
        <StyledDialog ref={modalEditRef} onClick={() => modalEditRef.current.close()}>
            <StyledModalInterior onClick={(e) => e.stopPropagation()}>
                <header>
                    <Title3>Tecnologia Detalhes</Title3>
                </header>

                <Title2 color="var(--grey-1)" onClick={() => modalEditRef.current.close()} >X</Title2>

                <Form onSubmit={handleSubmit(submit)} >
                    <Input type="text" label="Nome" placeholder="Digite aqui o nome" register={register("name")} />
                    {errors.name ? <Text color="var(--grey-1)">{errors.name.message}</Text> : null}
                    <Input type="text" label="Nome" placeholder="Digite aqui o email" register={register("email")} />
                    {errors.email ? <Text color="var(--grey-1)">{errors.email.message}</Text> : null}
                    <Input type="text" label="Nome" placeholder="Digite aqui o phone" register={register("phone")} />
                    {errors.phone ? <Text color="var(--grey-1)">{errors.phone.message}</Text> : null}
                    <Button type="submit">Cadastrar Contato</Button>
                    <StyledBottomForm>
                        <Button type="submit">Salvar alterações</Button>
                        <Button grey type="button" onClick={deleteContact}>Excluir</Button>
                    </StyledBottomForm>
                </Form>
            </StyledModalInterior>
        </StyledDialog>
    )
}