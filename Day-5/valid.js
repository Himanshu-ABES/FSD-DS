function validated() {
    let username = document.getElementById("un").value;
    let pass = document.getElementById("pass").value;
    let p1 = document.getElementById("result");

    if (username.trim() === "") {
        p1.innerText = "Username cannot be empty.";
        return false;
    }

    if (pass.trim() === "") {
        p1.innerText = "Password cannot be empty.";
        return false; // Prevent form submission
    }

    if (pass.length < 10) {
        p1.innerText = "Password must have at least 10 characters.";
        return false; 
    }

    p1.innerText = "Validated";
    return true; 
}
