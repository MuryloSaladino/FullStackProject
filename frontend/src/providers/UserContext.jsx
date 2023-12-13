import { createContext, useState, useEffect } from "react";
import { api } from "../service/api";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext({})

export function UserProvider({children}) {
    
    const [user, setUser] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        async function autoLogin() {
            const token = localStorage.getItem("@TOKEN")
            const userID = localStorage.getItem("@USERID")

            if(token && userID) {
                const {data} = await api.get(`users/${userID}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                setUser(data.id)
                navigate("/dashboard")
            }
        }
        autoLogin()
    }, [])

    function endSession() {
        localStorage.removeItem("@TOKEN")
        localStorage.removeItem("@USERID")
        setUser(null)
        navigate("/")
    }

    return(
        <UserContext.Provider value={{user, setUser, endSession}} >
            {children}
        </UserContext.Provider>
    )
}