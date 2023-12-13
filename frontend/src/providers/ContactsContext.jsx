import { useRef, useState, useEffect, createContext } from "react";
import { toast } from "react-toastify";
import { api } from "../service/api";

export const ContactContext = createContext({})

export function ContactProvider({children}) {

    const [userData, setUserData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [updateContacts, setUpdateContacts] = useState(false)
    const [currentContact, setCurrentContact] = useState({title: "", status: ""})
    const modalRef = useRef(null)
    const modalEditRef = useRef(null)

    useEffect(() => {
        async function checkAuth() {
            try {
                const {data} = await api.get(`users/${localStorage.getItem("@USERID")}`, {
                    headers: {
                        "Authorization": `Bearer ${localStorage.getItem("@TOKEN")}`
                    }
                })
                setUserData(data)
            } catch (error) {
                toast.error("Ops! Algo deu errado", {theme: "dark"})
            }
            finally{
                setLoading(false)
            }
        }
        checkAuth()
    }, [updateContacts])

    return(
        <ContactContext.Provider value={{userData, loading, updateContacts, setUpdateContacts, currentContact, setCurrentContact, modalRef, modalEditRef}}>
            {children}
        </ContactContext.Provider>
    )
}