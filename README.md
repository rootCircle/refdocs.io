# refdocs.io
Submission for WDAD 2023


To run this project you need some extra files


1)
	Generate api key from platform.openai.com and insert in the following file

	chatgpt/chatgpt_config.js

	const apiKey = 'OPEN-AI-KEY-HERE'

2)

	Generate firebase config from Firebase console (create new project then add app for web and then copy the firebaseConfig to firebaseConfig variable). Code will look something like this.
	
	Save this to login/config.js
	
		// Your web app's Firebase configuration
		var firebaseConfig = {
		    apiKey: "API-KEY",
		    authDomain: "DOMAIN",
		    projectId: "ID",
		    storageBucket: "SOMETHING HERE",
		    messagingSenderId: "SOMETHING HERE",
		    appId: "SOMETHING HERE"
		  };
		  // Initialize Firebase
		  firebase.initializeApp(firebaseConfig);
	  
