import { useRef, useState, useEffect, createContext } from "react";
import { toast } from "react-toastify";
import { kenzieHub } from "../service/api";
import { useNavigate } from "react-router-dom";

export const TechContext = createContext({})

export function TechProvider({children}) {

    const [userData, setUserData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [updateTechs, setUpdateTechs] = useState(false)
    const [currentTech, setCurrentTech] = useState({title: "", status: ""})
    const modalRef = useRef(null)
    const modalEditRef = useRef(null)
    const navigate = useNavigate()

    useEffect(() => {
        async function checkAuth() {
            try {
                const {data} = await kenzieHub.get("profile", {
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
    }, [updateTechs])

    return(
        <TechContext.Provider value={{userData, loading, updateTechs, setUpdateTechs, currentTech, setCurrentTech, modalRef, modalEditRef}}>
            {children}
        </TechContext.Provider>
    )
}