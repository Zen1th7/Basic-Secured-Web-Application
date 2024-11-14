function focusPassword(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Prevent form submission
        document.getElementById("password").focus(); // Move focus to password field
    }
}
