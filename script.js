// Select the form and listen for submit event
document.getElementById("form").addEventListener("submit", function(e) {

    // Prevent page from reloading on form submit
    e.preventDefault();

    // Get values entered by the user
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    // Select message display area
    let message = document.getElementById("message");

    // Check if any field is empty
    if (name === "" || email === "" || password === "") {
        message.style.color = "red";
        message.textContent = "All fields are required!";
        return; // stop further execution
    }

    // Check if passwords match
    if (password !== confirmPassword) {
        message.style.color = "red";
        message.textContent = "Passwords do not match!";
        return;
    }

    // If all validations pass
    message.style.color = "green";
    message.textContent = "Registration Successful!";
});
