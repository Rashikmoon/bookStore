import React, { createContext, useContext, useState } from 'react'
export const Authcontext=createContext()
export default function AuthProvieder({children}) {
 const initialAuthUser = localStorage.getItem("users")
 const [authUser,setAuthUser] = useState(
    initialAuthUser? JSON.parse(initialAuthUser):undefined
 )
 return (
    <Authcontext.Provider value={[authUser,setAuthUser]}>
        {children}
    </Authcontext.Provider>
 )
}
export const useAuth=() =>useContext(Authcontext);