# refdocs.io
An educational website for developers to learn. Integrated with docs and lectures and CHATGPT with login/signup support using Firebase.<br><br>
Based upon [LearnEd_E-learning_Website](https://github.com/roshan9419/LearnEd_E-learning_Website) by [Roshan Kumar](https://github.com/roshan9419).

## Submission for WDAD 2023


To run this project you need some extra files [Firebase won't be required].


1) Generate api key from platform.openai.com and insert in the following file

	chatgpt/chatgpt_config.js

		const apiKey = 'OPEN-AI-KEY-HERE'

2) Generate firebase config from Firebase console (create new project then add app for web and then copy the firebaseConfig to firebaseConfig variable). Code will look something like this.
	
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
	  
## Cool Features
1) ChatGPT integration
2) Login/ Signup support using FirebaseDB
3) Search functionality (based on pregenerated index)
4) Documentation for certain HTML, CSS and JS topics
5) Topics ranging from Web Development to AI/ML.

## These fine people helped us with the project


| Name | Username | Role | Key Contributions
| --- | --- | --- | --- |
| N. Karthik Akshaj | @KarthikAkshaj | Team Lead, Development | Clutter control, Home Page, Contact Us Page, Header and Footer in each site, Computer Courses Page |
| Lab Rat | @rootCircle | Development, API & Merging Codes | Search functionality, ChatGPT integration, Dashboard Page |
| Krishna Sumit | @krishnasumit155 | Development & API | Template for Docs page, Gallery Page, API, HTML Docs in Docs Page |
| Manish Rawat | @manishiiitl1261 | Development & Docs | AI/ML Page, About Us Page, Revamping Gallery Page, 'CSS & JS' Docs in Docs Page, Login Page UI |
| Dev Chandna | @devchandna | Developement, Bug Fixing & Logo Design | Page Optimization(reduced loading time by 98%), Logo, Site Integration and Controls, Bug Squashing, Contact Us Page content,About Us Page |
| Nimesh Dutt | @Nimeshdutt | Design & Content | Indexing in search, Contents in the Docs, Contact Us Page Design |

<br>For more info refer commit history
