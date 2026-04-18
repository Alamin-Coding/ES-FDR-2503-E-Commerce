import { createContext, useEffect, useState } from "react";
import {
	createUserWithEmailAndPassword,
	GoogleAuthProvider,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
} from "firebase/auth";
import auth from "../firebase.config";

export const AuthContext = createContext({
	user: {},
	setUser: () => {},
	signUP: () => {},
	signUpWithGoogle: () => {},

	logOutUser: () => {},
});

const AuthProvider = ({ children }) => {
	const [loading, setLoading] = useState(false);
	const [user, setUser] = useState(null);
	const signUP = (email, password) => {
		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed up
				const user = userCredential.user;
				setLoading(false);
				console.log(user);
			})
			.catch((error) => {
				const errorMessage = error.message;
				console.error(errorMessage);
			})
			.finally(() => setLoading(false));
	};

	const signUpWithGoogle = () => {
		console.log("Sign up with google");
		const provider = new GoogleAuthProvider();
		signInWithPopup(auth, provider)
			.then((result) => {
				// This gives you a Google Access Token. You can use it to access the Google API.
				const credential = GoogleAuthProvider.credentialFromResult(result);
				const token = credential.accessToken;
				// The signed-in user info.
				const user = result.user;
				console.log(user);
			})
			.catch((error) => {
				// Handle Errors here.
				const errorCode = error.code;
				const errorMessage = error.message;
				// The email of the user's account used.
				const email = error.customData.email;
				// The AuthCredential type that was used.
				const credential = GoogleAuthProvider.credentialFromError(error);
				console.log(credential);
				console.log(email);
				console.log(errorMessage);
				// ...
			});
	};

	const loginUser = (email, password) => {
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed in
				const user = userCredential.user;
				auth.onAuthStateChanged((currentUser) => {
					setUser(currentUser);
				});
				console.log(user);
			})
			.catch((error) => {
				const errorMessage = error.message;
				console.error(errorMessage);
			});
	};

	const logOutUser = () => {
		signOut(auth)
			.then(() => {
				alert("Sign out successfully");
				auth.onAuthStateChanged((currentUser) => {
					setUser(currentUser);
				});
			})
			.catch((error) => {
				console.error("Sign out error:", error.message);
			});
	};

	return (
		<AuthContext
			value={{
				user,
				loading,
				setUser,
				signUP,
				signUpWithGoogle,
				logOutUser,
				loginUser,
			}}
		>
			{children}
		</AuthContext>
	);
};

export default AuthProvider;
