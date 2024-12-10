// JavaScript for Form Validation
document.getElementById("eventBookingForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission for validation

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const eventSelection = document.getElementById("event");
    const date = document.getElementById("date");

    let valid = true;

    // Validate Name
    if (name.value.trim() === "") {
        alert("Please enter your name.");
        valid = false;
    }

    // Validate Email
    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!emailPattern.test(email.value)) {
        alert("Please enter a valid email address.");
        valid = false;
    }

    // Validate Event Selection
    if (eventSelection.value === "") {
        alert("Please select an event.");
        valid = false;
    }

    // Validate Date
    if (date.value === "") {
        alert("Please select a preferred date.");
        valid = false;
    }

    if (valid) {
        alert("Form submitted successfully!");
        this.submit(); // Submit the form if all validations pass
    }

});
$(document).ready(function () {
    $(".imagess").hide().each(function (index) {
        $(this).delay(index * 200).fadeIn(500); // Staggered fade-in
     });
    });

    $(document).ready(function () {
        $(".imagess").on("click", function () {
            const src = $(this).attr("src");
            $("body").append(`
                <div id="lightbox">
                    <img src="${src}" alt="Image Preview">
                    <span id="close">×</span>
                </div>
            `);
            $("#lightbox").fadeIn(500);
    
            // Close Lightbox
            $("#lightbox, #close").on("click", function () {
                $("#lightbox").fadeOut(500, function () {
                    $(this).remove();
                });
            });
        });
    });