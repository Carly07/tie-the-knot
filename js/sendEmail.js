function sendMail(contactForm) {
    emailjs.send("gmail", "tie_the_knot", {
            "from_name": contactForm.name.value,
            "from_email": contactForm.email.value,
            "enquiry_subject": contactForm.subject.value,
            "enquiry_message": contactForm.message.value
        })
        .then(
            function(response) {
                console.log("SUCCESS", response);
            },
            function(error) {
                console.log("FAILED", error);
            });
    return false;
}

function clickAlert(event) {
    if (document.getElementById("contactForm").reportValidity()) {
        alert("Thank you for contacting Tie the Knot");
        document.getElementById("contactform").reset();
    }
    return false;
}
document.getElementById("submit").onclick = clickAlert;
