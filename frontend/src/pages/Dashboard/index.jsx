import { Loading } from "../../components/Loading";
import { Modal } from "./DashboardComponents/ModalTech";
import { ModalEdit } from "./DashboardComponents/ModalEditTech";
import { Header } from "./DashboardComponents/Header";
import { SubHeader } from "./DashboardComponents/SubHeader";
import { TechList } from "./DashboardComponents/TechList";

import { useContext } from "react";
import { TechContext } from "../../providers/TechContext";

export function Dashboard() {

    const { loading } = useContext(TechContext)

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
            <TechList/>
        </>
    )
}

