import { Text, Title1 } from "../../../../styles/typography";
import { StyledWelcome } from "./styles";

import { useContext } from "react";
import { TechContext } from "../../../../providers/TechContext";

export function SubHeader() {

    const { userData } = useContext(TechContext)

    return(
        <StyledWelcome>
            <div>
                <Title1>Olá, {userData.name}</Title1>
                <Text color="var(--grey-1)">{userData.course_module}</Text>
            </div>
        </StyledWelcome>
    )
}