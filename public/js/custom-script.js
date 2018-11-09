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

  initApp = function() {
	firebase.auth().onAuthStateChanged(function(user) {
	  if (user) {
		// User is signed in.
		var displayName = user.displayName;
		var email = user.email;
		var emailVerified = user.emailVerified;
		var photoURL = user.photoURL;
		var uid = user.uid;
		var phoneNumber = user.phoneNumber;
		var providerData = user.providerData;
		user.getIdToken().then(function(accessToken) {
		  // document.getElementById('sign-in-status').textContent = 'Signed in';
		  // document.getElementById('sign-in').textContent = 'Sign out';
		  // document.getElementById('account-details').textContent = JSON.stringify({
		  //   displayName: displayName,
		  //   email: email,
		  //   emailVerified: emailVerified,
		  //   phoneNumber: phoneNumber,
		  //   photoURL: photoURL,
		  //   uid: uid,
		  //   accessToken: accessToken,
		  //   providerData: providerData
		  // }, null, '  ');
		});

		const db = firebase.firestore();
    db.settings({ timestampsInSnapshots: true });

	  } else {
		// User is signed out.
		// document.getElementById('sign-in-status').textContent = 'Signed out';
		// document.getElementById('sign-in').textContent = 'Sign in';
		// document.getElementById('account-details').textContent = 'null';
		window.location = 'authv2.html';
	  }
	}, function(error) {
	  console.log(error);
	});
  };

  window.addEventListener('load', function() {
	initApp()
  });


  function keluar() {
	firebase.auth().signOut().then(function() {
	  window.location = 'authv2.html';
	}).catch(function(error) {
	  // An error happened.
	});
  }

  $(document).ready(function() {
    $('#content').load('/home.html');

    $('#left-sidebar-nav a').click(function(e) {
      e.preventDefault();
      $("#content").load(e.target.href);
	})
	});

	console.log("done");

	const db = firebase.firestore();

	function addSapi() {
		db.collection("JenisSapi").add({
			jnNama: $("#nSapi").val(),
			jnDeskripsi: $("#dSapi").val()
		})
		.then(function(docRef) {
				console.log("Document written with ID: ", docRef.id);
		})
		.catch(function(error) {
				console.error("Error adding document: ", error);
		});
	}