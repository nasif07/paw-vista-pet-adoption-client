
import { createContext } from "react";
import auth from "../firebase/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import useAxiosPublic from "../Hook/useAxiosPublic";
export const AuthContext = createContext(null);

const provider = new GoogleAuthProvider();


// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);
    const axiosPublic = useAxiosPublic();



    const emailPasswordSignIn = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const emailPasswordLogIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    const handleUpdateProfile = (name, profileURL) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: profileURL
        })
    }



    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }


    useEffect(() => {
        const unsubsCribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            if (currentUser) {
                // get token and store client
                const userInfo = { email: currentUser.email };
                axiosPublic.post('/jwt', userInfo)
                    .then(res => {
                        if (res.data.token) {
                            localStorage.setItem('access-token', res.data.token);
                        }
                    })
            }
            else {
                // TODO: remove token (if token stored in the client side Local storage, catching, in memory)
                // do something
                localStorage.removeItem('access-token');
            }
            setLoading(false);
        });
        return (() => {
            return unsubsCribe();
        })
    }, [axiosPublic])




    const AuthInfo = {
        user,
        emailPasswordSignIn,
        googleSignIn,
        emailPasswordLogIn,
        logOut,
        handleUpdateProfile,
        loading
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;