function validateCredentials(email, password) {
    const validEmail = "patrickssekitooleko@gmail.com";
    const validPassword = "22/U/6920";

    if (email.toLowerCase() === validEmail && password === validPassword) {
        console.log("User email is " + validEmail + ". Login successful!");
    } else {
        console.log("Incorrect user credentials");
    }
}

// functiontest
validateCredentials("patrickssekitooleko@gmail.com", "22/U/6920");  

