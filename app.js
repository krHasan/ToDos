/*=========================================================================
* Initializing Firebase
*=========================================================================*/
// Initialize Firebase
var config = {
   apiKey: "AIzaSyDfC4t9fxFJZbbE1rLfk9u8waGW-Jwhl_0",
   authDomain: "todos-4552a.firebaseapp.com",
   databaseURL: "https://todos-4552a.firebaseio.com",
   projectId: "todos-4552a",
   storageBucket: "todos-4552a.appspot.com",
   messagingSenderId: "67337430506"
};
firebase.initializeApp(config);
// const firestore = firebase.firestore();
// const settings = {
//    timestampsInSnapshots: true
// };
// firestore.settings(settings);


/*=========================================================================
* Authentication Methods
*=========================================================================*/
//google authentication
// FirebaseUI config.
var uiConfig = {
   signInSuccessUrl: 'home.html',
   signInOptions: [
      // Leave the lines as is for the providers you want to offer your users.
      // firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      {
         provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
         scopes: [
            'https://www.googleapis.com/auth/plus.login'
         ],
         customParameters: {
            // Forces account selection even when one account
            // is available.
            prompt: 'select_account'
         }
      },
      // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      {
         provider: firebase.auth.FacebookAuthProvider.PROVIDER_ID,
         scopes: [
            'public_profile',
            'email',
            'user_likes',
            'user_friends'
         ],
         customParameters: {
            // Forces password re-entry.
            auth_type: 'reauthenticate'
         }
      },
      // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      // firebase.auth.GithubAuthProvider.PROVIDER_ID,
      // firebase.auth.EmailAuthProvider.PROVIDER_ID,
      {
         provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
         requireDisplayName: false
      }
      // firebase.auth.PhoneAuthProvider.PROVIDER_ID
   ],
   // Terms of service url.
   tosUrl: '<your-tos-url>'
};

// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());
// The start method will wait until the DOM is loaded.
ui.start('#firebaseui-auth-container', uiConfig);


/*=========================================================================
* Authentication State
*=========================================================================*/
firebase.auth().onAuthStateChanged(function (user) {
   if (user) {
      // User is signed in.
      // var displayName = user.displayName;
      // var email = user.email;
      // var emailVerified = user.emailVerified;
      // var photoURL = user.photoURL;
      // var isAnonymous = user.isAnonymous;
      // var uid = user.uid;
      // var providerData = user.providerData;
      // document.body.innerHTML("successfully logged in.");
      // ...
   } else {
      // User is signed out.
      // document.body.innerHTML("no user signed in");
      // ...
   }
});