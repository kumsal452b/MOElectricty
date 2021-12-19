import React,{createContext,useReducer} from "react";
import authStates from "./initialsStates/authStates";
import contactsStates from "./initialsStates/contactsStates";
import auth from "./reduces/auth";
import contacts from "./reduces/contacts";
export const GlobalContext=createContext()

const GlobalProvider=({children})=>{
    const [authState,authDispatch]=useReducer(auth,authStates);
    const [contactsState,contactsDispatch]=useReducer(contacts,contactsStates);

    return(
        <GlobalContext.Provider value={{authState,contactsState,authDispatch,contactsDispatch}}> 
            {children}
        </GlobalContext.Provider>
    )
}
export default GlobalProvider