import { Text, Title1 } from "../../../../styles/typography";
import { StyledWelcome } from "./styles";

import { useContext } from "react";
import { ContactContext } from "../../../../providers/ContactsContext";

export function SubHeader() {

    const { userData } = useContext(ContactContext)

    return(
        <StyledWelcome>
            <div>
                <Title1>Olá, {userData.name}</Title1>
                <Text color="var(--grey-1)">{userData.email}</Text>
            </div>
        </StyledWelcome>
    )
}