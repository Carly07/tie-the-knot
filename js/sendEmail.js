function sendMail(contactForm) {
    emailjs.send("gmail", "tie_the_knot", {
            "from_name": "from_name_value",
            "from_email": "from_email_value",
            "enquiry_subject": "enquiry_subject_value",
            "enquiry_message": "enquiry_message_value",
        })
        .then(
            function(response) {
                console.log("SUCCESS", response);
            },
            function(error) {
                console.log("FAILED", error);
            });
}
