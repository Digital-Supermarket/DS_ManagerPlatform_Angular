// import * as firebase from 'firebase/app';

let inMemoryToken = null;

export class AuthToken {
  static async get() {
    // if (
    //   firebase.apps.length &&
    //   firebase.auth().currentUser
    // ) {
    //   return await firebase
    //     .auth()
    //     .currentUser.getIdToken(true);
    // }

    return (
      inMemoryToken || localStorage.getItem('jwt') || null
    );
  }

  static async set(token, rememberMe) {
    if (rememberMe) {
      localStorage.setItem('jwt', token || '');
    } else {
      inMemoryToken = token;
      localStorage.setItem('jwt', '');
    }
  }
}
