import { StyledDialog, StyledModalInterior } from "./styles";
import { Text, Title2, Title3 } from "../../../../styles/typography";
import { Form } from "../../../../components/Form";
import { Input } from "../../../../components/Input";
import { Select } from "../../../../components/Select";
import { Button } from "../../../../components/Button";

import { newTechSchema } from "./newTechSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";

import { useForm } from "react-hook-form";
import { useContext } from "react";
import { TechContext } from "../../../../providers/TechContext";

import { kenzieHub } from "../../../../service/api";

export function Modal() {

    const {
        updateTechs,
        setUpdateTechs,
        modalRef,
    } = useContext(TechContext)

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(newTechSchema),
    })

    const submit = async (formData) => {
        try {
            await kenzieHub.post("users/techs", formData, {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("@TOKEN")}`
                }
            })
            toast.success("Tecnologia cadastrada", {theme: "dark"})
        }catch (err) {
            toast.error("Ops! Algo deu errado", {theme: "dark"})
        }
        finally{
            setUpdateTechs((updateTechs ? false : true))
            modalRef.current.close()
        }
    }

    
    return(
        <StyledDialog ref={modalRef} onClick={() => ref.current.close()}>
            <StyledModalInterior onClick={(e) => e.stopPropagation()}>
                <header>
                    <Title3>Cadastrar Tecnologia</Title3>
                </header>

                <Title2 color="var(--grey-1)" onClick={() => ref.current.close()} >X</Title2>

                <Form onSubmit={handleSubmit(submit)} >
                    <Input type="text" label="Nome" placeholder="Digite aqui o nome" register={register("title")} />
                    {errors.title ? <Text color="var(--grey-1)">{errors.title.message}</Text> : null}
                    <Select options={["Iniciante", "Intermediário", "Avançado"]} label="Selecionar Status" register={register("status")} />
                    <Button type="submit">Cadastrar Tecnologia</Button>
                </Form>
            </StyledModalInterior>
        </StyledDialog>
    )
}