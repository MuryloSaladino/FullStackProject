import { Button } from "../../../../components/Button";
import { Title2, Title3 } from "../../../../styles/typography";

import plus from "../../../../assets/plus.svg"

import { TechCard } from "./TechCard";
import { StyledTechContainer, StyledTechList } from "./styles";

import { TechContext } from "../../../../providers/TechContext";
import { useContext } from "react";

import { v4 as uuidv4 } from "uuid";

export function TechList() {

    const { userData, modalRef } = useContext(TechContext)

    return(
        <StyledTechContainer>
            <div>
                <Title2>Tecnologias</Title2>
                <Button small onClick={() => {modalRef.current.showModal()}} >
                    <img src={plus} />
                </Button>
            </div>

            <StyledTechList>
                {
                    userData.techs.length > 0 ?
                    userData.techs.map(tech => 
                        <TechCard key={uuidv4()} tech={tech} />
                    ) :
                    <li><Title3>Você ainda não adiconou nenhuma tecnologia</Title3></li>
                }
            </StyledTechList>
        </StyledTechContainer>
    )
}