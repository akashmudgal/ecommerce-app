import { initializeApp } from "firebase/app";
import {
        getAuth,
        GoogleAuthProvider,
        signInWithPopup,
        signInWithRedirect,
        createUserWithEmailAndPassword,
        signInWithEmailAndPassword
    } from "firebase/auth";
import  {
    getFirestore,
    doc,
    getDoc,
    setDoc}
    from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVAFtSAOPPCCX5RljmEivWAxwiJYBEcWI",
  authDomain: "crwn-clothing-c08cc.firebaseapp.com",
  projectId: "crwn-clothing-c08cc",
  storageBucket: "crwn-clothing-c08cc.appspot.com",
  messagingSenderId: "285825547325",
  appId: "1:285825547325:web:a0cccc700999735c2bfe54"
};

// Initialize firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider=new GoogleAuthProvider();
googleProvider.setCustomParameters({prompt:'select_account'});

export const auth=getAuth(firebaseApp);
export const signInWithGooglePopup=()=>signInWithPopup(auth,googleProvider);
export const signInWithGoogleRedirect=()=>signInWithRedirect(auth,googleProvider);

export const db=getFirestore();

export const createUserProfileDoc=async (userAuth,additionalInformation={})=>{
    if(!userAuth) return;

    //get doc reference
    const userDocRef=doc(db,'users',userAuth.uid);

    const userSnapShot=await getDoc(userDocRef);

    if(!userSnapShot.exists()){
        const {displayName, email}=userAuth;
        setDoc(userDocRef,{displayName,email,createdAt:new Date(),...additionalInformation});
    }

    return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email,password)=>{
    if(!email || !password) return;

    return await createUserWithEmailAndPassword(auth,email,password)
}

export const signInUserwithCredential = async (email,password)=>{
    if(!email || !password) return;
    return signInWithEmailAndPassword(auth,email,password);
}