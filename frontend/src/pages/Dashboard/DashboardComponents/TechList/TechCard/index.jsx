import { Text, Title2 } from "../../../../../styles/typography";

import { TechContext } from "../../../../../providers/TechContext";
import { useContext } from "react";

export function TechCard({tech}) {

    const { setCurrentTech, modalEditRef } = useContext(TechContext)

    return(
        <li onClick={() => {setCurrentTech(tech); modalEditRef.current.showModal()}}>
            <Title2>{tech.title}</Title2>
            <Text color="var(--grey-1)">{tech.status}</Text>
        </li>
    )
}