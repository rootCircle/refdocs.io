// Signup Form
const signupForm = document.querySelector('#register');
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  // Get user info
  const email = signupForm['regemail'].value;
  const password = signupForm['regpswd'].value;
  const repass = signupForm['regrepswd'].value;
  const name = signupForm['regname'].value;

  if (email === "" || password === "" || repass === "" || name === "")
  {
    alert("Empty fields!");
  }
  else if (repass !== password) {
    alert("Passwords not match!");
  }
  else {
    postData("http://localhost:8080/", { name, email, password }).then((data) => {
      console.log(data);
        alert("Registration successful!");
        window.location.href = "index.html";
      }).catch((error) => {
          alert(error);
      });;
  }

  // // Signup the user
  // firebase.auth().createUserWithEmailAndPassword(email, password)
  // .then((userCredential) => {
  //   // Update displayName of the registered user
  //   userCredential.user.updateProfile({
  //       displayName: username
  //   }).then(() => {
  //       // Display success message and redirect to home page
        
  //   }).catch((error) => {
  //       alert(error);
  //   });
  // })
  // .catch((error) => {
  //   alert(error);
  // });
});


async function postData(url = "", data = {}) {

  console.log(data)
  // Default options are marked with *
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}
