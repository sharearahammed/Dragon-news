/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [ user , setUser ] = useState(null);
    const [news , setNews] = useState([]);
    const [ loading , setLoading ] = useState(true);

    useEffect(()=>{
        fetch('/news.json')
        .then(res => res.json())
        .then(data => setNews(data))
    },[])

    const creatUser = (email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const loginUser = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }

    useEffect(()=>{

        const unSubscribe = onAuthStateChanged(auth, currentuser =>{
            setUser(currentuser);
            setLoading(false);
        })
        return () =>{
            unSubscribe()
        }
    },[])

    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }

  const authInfo = { loading , news, user , creatUser,loginUser,logOut};
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
auth