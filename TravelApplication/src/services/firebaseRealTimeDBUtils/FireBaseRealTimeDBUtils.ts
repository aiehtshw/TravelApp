import database, { firebase } from "@react-native-firebase/database";
import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";
export class FireBaseRealTimeDBUtils {
  static signUp = (user: FirebaseAuthTypes.User,userName:string,profilePhoto:string, city:string) => {
    console.log('RTDB',user)
    console.log("userName")
    console.log(userName)
    const databaseRef = firebase.database().ref('UsersList/' + user.uid);
    databaseRef.set({
      email: user.email,
      name: userName,
      profilePhoto:profilePhoto,
      uid: user.uid,
      city: city
    })
      .then(() => {
        console.log('Data added to Realtime Database successfully!');
      })
      .catch((error) => {
        console.error('Error adding data to Realtime Database:', error);
      });


  }
  static uploadProfilePhoto = (uid:any,photoUri:any,callback:any) =>{
    try {
      const database = firebase.database();

      // Update profile photo
      database.ref(`UsersList/${uid}/profilePhoto`).set(photoUri)
        .then(() => {
          callback(true);
        })
        .catch((error) => {
          console.error(error);
          callback(false);
        });
    } catch (error) {
      console.error(error);
      callback(false);
    }
  }

  static me = (user:any,callback:any) =>{
    console.log(user)
    try {
      const database = firebase.database();
      // Retrieve user information
      database.ref(`UsersList/${user}`).once('value')
        .then((snapshot) => {
          const userMe = snapshot.val();
          console.log("Firebase user")
          console.log(userMe)
          callback(userMe);
        })
        .catch((error) => {
          console.error(error);
          callback(null);
        });
    } catch (error) {
      console.error(error);
      callback(null);
    }

  }
  static decodeBase64 = (base64String) => {
    try {
      const decodedString = atob(base64String);
      console.log('Decoded String:', decodedString);
      return decodedString
    } catch (error) {
      console.log('Error decoding base64:', error);
      // Handle the error
    }
  };
}
