import { StyledHeader } from "./styles";
import { Logo } from "../../../../components/Logo";
import { Button } from "../../../../components/Button";

import { UserContext } from "../../../../providers/UserContext";
import { useContext } from "react";


export function Header() {

    const { endSession } = useContext(UserContext)

    return(
        <StyledHeader>
            <div>
                <Logo/>
                <Button small onClick={endSession} >Sair</Button>
            </div>
        </StyledHeader>
    )
}