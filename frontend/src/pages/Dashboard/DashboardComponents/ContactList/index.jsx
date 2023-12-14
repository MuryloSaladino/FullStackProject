import { Button } from "../../../../components/Button";
import { Title2, Title3 } from "../../../../styles/typography";

import plus from "../../../../assets/plus.svg"

import { ContactCard } from "./ContactCard";
import { StyledContactContainer, StyledContactList } from "./styles";

import { ContactContext } from "../../../../providers/ContactsContext";
import { useContext } from "react";

import { v4 as uuidv4 } from "uuid";

export function ContactList() {

    const { userData, modalRef } = useContext(ContactContext)

    return(
        <StyledContactContainer>
            <div>
                <Title2>Contatos</Title2>
                <Button small onClick={() => {modalRef.current.showModal()}} >
                    <img src={plus} />
                </Button>
            </div>

            <StyledContactList>
                {
                    userData.contacts.length > 0 ?
                    userData.contacts.map(contact => 
                        <ContactCard key={uuidv4()} contact={contact} />
                    ) :
                    <li><Title3>Você ainda não adiconou nenhum contato</Title3></li>
                }
            </StyledContactList>
        </StyledContactContainer>
    )
}