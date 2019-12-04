(function() {
            emailjs.init("user_cAhgSczcxi8hSCfeCwkQf");
        })();

function sendMail(contactForm) {
    emailjs.send("outlook", "tie_the_knot", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "enquiry_message": contactForm.message.value,
    })
    .then(
        function (response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        });
}
