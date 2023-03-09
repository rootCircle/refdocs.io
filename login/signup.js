// Signup Form
const signupForm = document.querySelector('#register');
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  // Get user info
  const email = signupForm['regemail'].value;
  const password = signupForm['regpswd'].value;
  const username = signupForm['regname'].value;
  // Signup the user
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Update displayName of the registered user
    userCredential.user.updateProfile({
        displayName: username
    }).then(() => {
        // Display success message and redirect to home page
        alert("Registration successful!");
        window.location.href = "index.html";
    }).catch((error) => {
        alert(error);
    });
  })
  .catch((error) => {
    alert(error);
  });
});
