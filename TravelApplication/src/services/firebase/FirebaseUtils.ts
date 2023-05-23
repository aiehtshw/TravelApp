import auth from "@react-native-firebase/auth";

export class FirebaseUtils{
  static signUp = (mail: string, password:string) => {
    auth()
      .createUserWithEmailAndPassword(mail, password)
      .then(() => {
        console.log('User account created & signed in!');
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
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
    });
  }
}
