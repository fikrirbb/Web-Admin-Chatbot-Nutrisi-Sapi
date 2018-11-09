/*================================================================================
	Item Name: Materialize - Material Design Admin Template
	Version: 4.0
	Author: PIXINVENT
	Author URL: https://themeforest.net/user/pixinvent/portfolio
================================================================================

NOTE:
------
PLACE HERE YOUR OWN JS CODES AND IF NEEDED.
WE WILL RELEASE FUTURE UPDATES SO IN ORDER TO NOT OVERWRITE YOUR CUSTOM SCRIPT IT'S BETTER LIKE THIS. */

// Initialize Firebase
var config = {
    apiKey: "AIzaSyC0K66xDTgIQ-dp5tttjsNgD1YGTfKloEg",
    authDomain: "paknutrisisapi2.firebaseapp.com",
    databaseURL: "https://paknutrisisapi2.firebaseio.com",
    projectId: "paknutrisisapi2",
    storageBucket: "paknutrisisapi2.appspot.com",
    messagingSenderId: "452244835820"
  };
  firebase.initializeApp(config);


  firebase.auth().onAuthStateChanged(function(user) {
		if (user) {
			window.location = 'index.html';
		} else {
			// No user is signed in.
		}
	});

	function doLogin() {
		$("#respon").html("<div class='progress'> <div class='indeterminate'></div> </div>");
		var email = $('#email').val();
		var password = $('#password').val();
		 console.log(email+", "+password);
		 firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
			// Handle Errors here.
			var errorCode = error.code;
			var errorMessage = error.message;
			console.log(errorCode+", "+errorMessage);
			$("#respon").html("<blockquote>"+errorCode+" - "+errorMessage+"</blockquote>");
			// ...
	});
	}