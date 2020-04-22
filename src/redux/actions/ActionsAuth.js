import database from '@react-native-firebase/database';
// import firebase from 'firebase';
// import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-community/async-storage';
import {ToastAndroid} from 'react-native';

// export const isLogin = (email, password) => async dispatch => {
//   try {
//     const login = await database().ref('users/').set({email, password})
//     if(login) {
//       dispatch({
//         type: 'IS_LOGIN',
//         payload:
//       })
//     } else {
//       ToastAndroid.show('Wrong Username or Password'), ToastAndroid.SHORT
//     }
//   } catch (error) {
//     console.log(error)
//   }
// }

// export const Register = (data) => {
//   firebase
//     .auth()
//     .createUserWithEmailAndPassword(data.email, data.password)
//     .then((userCredentials) => {
//       database()
//         .ref('users/')
//         .set(data)
//         .then(() => {
//           return {
//             type: 'IS_REGISTER',
//             payload: '',
//           };
//         });
//     });
// };
