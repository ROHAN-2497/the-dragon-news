import React, { createContext } from 'react';
import { getAuth } from "firebase/auth";
import app from '../../firebase/firebase.config';
export const AuthContext  = createContext(null); 

const auth = getAuth(app);
const AuthProviders = ({children}) => {
 const user = null
    const auhtInfo  = {
         user
    }
    return (
        <AuthContext.Provider value={auhtInfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProviders;