import { createContext, useState } from "react";

export const AuthContext = createContext(null);
export const AuthenticationProvider = ({ children }) => {
    const [signedIn, setSignedIn] = useState(true);

    const handleSign = () => {
        setSignedIn(!signedIn);
    }
    const value = {
        signedIn,
        setSignedIn,
        handleSign
       
    }

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    )

}