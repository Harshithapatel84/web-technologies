function validation() {

    let submitform=true;
    let form = document.forms["RegistrationForm"];

    let name = form["fullName"].value.trim();
    let email = form["email"].value.trim();
    let phone = form["phone"].value.trim();
    let days = form["days"].value;
    let room = form["roomType"].value;

    // Name validation
    if (name.length>4) {
        alert("Name must be at least 4 characters");
        submitform = false;
    }

    // Email validation
    if (!email.includes("@") || !email.includes(".")) {
        alert("Enter valid email");
        submitform = false;
    }

    // Phone validation
    if (!/^[0-9]{10}$/.test(phone)) {
        alert("Enter valid 10-digit phone number");
        submitform = false;
    }

    // Days validation
    if (days !== "" && days <= 0) {
        alert("Days must be greater than 0");
        submitform = false;
    }

    // Room validation
    if (room === "") {
        alert("Please select a room type");
        submitform = false;
    }

    return true;
}