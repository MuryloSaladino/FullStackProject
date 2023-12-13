import { Loading } from "../../components/Loading";
import { Modal } from "./DashboardComponents/ModalContact";
import { ModalEdit } from "./DashboardComponents/ModalEditContact";
import { Header } from "./DashboardComponents/Header";
import { SubHeader } from "./DashboardComponents/SubHeader";
import { ContactList } from "./DashboardComponents/ContactList";

import { useContext } from "react";
import { ContactContext } from "../../providers/ContactsContext";

export function Dashboard() {

    const { loading } = useContext(ContactContext)

    return(
        loading ?
        <>
            <Header/>
            <Loading/>
        </> :

        <>
            <Modal/>
            <ModalEdit/>

            <Header/>
            <SubHeader/>
            <ContactList/>
        </>
    )
}

