// Login Form
const loginForm = document.querySelector('#login');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const auth = firebase.auth();
    const email = loginForm['email'].value;
    const password = loginForm['password'].value;

    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      //Redirect to dashboard page after successful login
      window.location.href = "dashboard/dashboard.html";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      //Display error message to user
      alert(errorMessage);
    });
});

