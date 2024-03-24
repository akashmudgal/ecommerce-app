import { createContext,useState,useEffect } from "react";
import { onAuthStateChangedListener,createUserProfileDoc } from "../utils/firebase/firebase.utils";

export const UserContext=createContext({
    currentUser: null,
    setCurrentUser: ()=> null
})

// Provider for UserContext
// Accepts the child component as children prop
export const UserProvider= ({children}) =>{

    const [currentUser,setCurrentUser] = useState(null);

    useEffect(()=>{

        const unsubscribe=onAuthStateChangedListener(async (user)=>{
            console.log(user)
            if(user){
                await createUserProfileDoc(user);
            }
            setCurrentUser(user);
        });
        return unsubscribe;
    },[])

    const value = {currentUser,setCurrentUser};
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}