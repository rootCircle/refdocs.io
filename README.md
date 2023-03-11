# refdocs.io
## Submission for WDAD 2023


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
	  


## These beautiful helped us with the project


| Name | Username | Role | Key Contributions
| --- | --- | --- | --- |
| Lab Rat | @rootCircle | Development, API & Merging Codes | Search functionality, ChatGPT integration, Dashboard Page |
| Krishna Sumit | @krishnasumit155 | Development & API | Template for Docs page, Gallery Page, API, HTML Docs in Docs Page |
| Manish Rawat | @manishiiitl1261 | Development & Docs | AI/ML Page, About Us Page, Revamping Gallery Page, 'CSS & JS' Docs in Docs Page |
| N. Karthik Akshaj | NA | Team Lead, Development | Clutter control, Contact Us Page, Header and Footer in each site |
| Dev Chandna | NA | Developement, Bug Fixing & Logo Design | Page Optimization(reduced loading time by 98%), Logo, Site Integration and Controls, Bug Squashing, Contact Us Page content,About Us Page |
| Nimesh Dutt | NA | Design & Content | Indexing in search, Contents in the Docs, Contact Us Page Design |