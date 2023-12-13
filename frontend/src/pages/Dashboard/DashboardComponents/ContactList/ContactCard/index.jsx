import { Text, Title2 } from "../../../../../styles/typography";

import { ContactContext } from "../../../../../providers/ContactsContext";
import { useContext } from "react";

export function ContactCard({contact}) {

    const { setCurrentContact, modalEditRef } = useContext(ContactContext)

    return(
        <li onClick={() => {setCurrentContact(contact); modalEditRef.current.showModal()}}>
            <Title2>{contact.name}</Title2>
            <Text color="var(--grey-1)">{contact.phone}  |  {contact.email}</Text>
        </li>
    )
}