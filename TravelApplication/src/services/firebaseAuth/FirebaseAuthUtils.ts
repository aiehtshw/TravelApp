import auth from "@react-native-firebase/auth";
import { FireBaseRealTimeDBUtils } from "../firebaseRealTimeDBUtils/FireBaseRealTimeDBUtils";


export class FirebaseAuthUtils {
  static logOut = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  }

  static login = (mail:string, password:string) => {
    auth()
      .signInWithEmailAndPassword(mail, password)
      .catch(function(error) {
      // Handle Errors here.
      let errorCode = error.code;
      let errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
    });
  }

  static signUp = (mail: string, password:string, username:string) => {
    auth()
      .createUserWithEmailAndPassword(mail, password)
      .then(() => {
        console.log('User account created & signed in!');
        const user = auth().currentUser;
        if(user){
          console.log('signUp',user)
          FirebaseAuthUtils.updateUserProfile(username,'')
          console.log(username)
        }

        else console.log("user yok baba")
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  }

  //After Creation user call this
  static updateUserProfile = (name:string,photoURL:string) => {
    const user = auth().currentUser;
    if(user){
      user.updateProfile({
        photoURL: user.photoURL,
        displayName: name,
      }).then(() => {
        console.log('update',user)
        FireBaseRealTimeDBUtils.signUp(user,name,photoURL);
      }).catch((error) => {
        console.error('Error updating display name:', error);
      });
    }
  }

}
