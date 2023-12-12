import { StyledBottomForm, StyledDialog, StyledModalInterior } from "./styles";
import { Text, Title2, Title3 } from "../../../../styles/typography";
import { Form } from "../../../../components/Form";
import { Input } from "../../../../components/Input";
import { Select } from "../../../../components/Select";
import { Button } from "../../../../components/Button";

import { useForm } from "react-hook-form";

import { editTechSchema } from "./editTechSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";

import { kenzieHub } from "../../../../service/api";

import { useContext } from "react";
import { TechContext } from "../../../../providers/TechContext";

export function ModalEdit () {

    const {
        updateTechs,
        setUpdateTechs,
        currentTech,
        modalEditRef,
    } = useContext(TechContext)

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(editTechSchema),
    })

    const submit = async (formData) => {
        try {
            await kenzieHub.put("users/techs/" + currentTech.id, formData, {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("@TOKEN")}`
                }
            })
            toast.success("Tecnologia alterada", {theme: "dark"})
        } catch (err) {
            toast.error("Ops! Algo deu errado", {theme: "dark"})
        }
        finally{
            setUpdateTechs((updateTechs ? false : true))
            modalEditRef.current.close()
        }
    }

    async function deleteTech() {
        try {
            await kenzieHub.delete("users/techs/" + currentTech.id, {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("@TOKEN")}`
                }
            })
            toast.success("Tecnologia deletada", {theme: "dark"})
        } catch (error) {
            toast.error("Ops! Algo deu errado", {theme: "dark"})
        }
        finally{
            setUpdateTechs((updateTechs ? false : true))
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
                    <Input type="text" label="Nome do projeto" value={currentTech.title} readonly />
                    {errors.title ? <Text color="var(--grey-1)">{errors.title.message}</Text> : null}
                    <Select options={["Iniciante", "Intermediário", "Avançado"]} label="Status" register={register("status")} />
                    <StyledBottomForm>
                        <Button type="submit">Salvar alterações</Button>
                        <Button grey type="button" onClick={deleteTech} >Excluir</Button>
                    </StyledBottomForm>
                </Form>
            </StyledModalInterior>
        </StyledDialog>
    )
}