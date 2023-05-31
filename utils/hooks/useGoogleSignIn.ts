import { GoogleAuthProvider, OAuthCredential, User, getAuth, signInWithPopup } from "firebase/auth";

type SignInError = {
  errorCode: any,
  errorMessage: any,
  email: any,
  credential: OAuthCredential,
}

type Result = {
  user: User, 
  token: string, 
  error: SignInError
}

const auth = getAuth();

const provider = new GoogleAuthProvider();

auth.useDeviceLanguage();

export const useGoogleSignIn = async ():Promise<Result> => {

  const result = await signInWithPopup(auth, provider)
    .then((res) => {
      const credential = GoogleAuthProvider.credentialFromResult(res); 
      // This gives you a Google Access Token. You can use it to access the Google API.
      const token = credential.accessToken;
      const user = res.user;
      return { user, token, error: null };
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);

      return { user: null, token: null, error: {errorCode, errorMessage, email, credential}}
    });

  return result;
}
