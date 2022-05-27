import { auth, db } from "configs/firebaseConfigs";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";

const signUp = async (username, email, password) => {
    try{
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const userRef = doc(db, "users", res.user.uid);
        setDoc(userRef, {
            username: username,
            email: email,
            bio: '',
            profilePicture: '',
            githubUrl: '',
            facebookUrl: '',
            instagramUrl: '',
            timeStamp: serverTimestamp()
        })
    }catch(err){
        console.log(err);
    }
}

export default signUp;