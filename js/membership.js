$(document).ready(function () {
    $(".tab-btn").click(function () {
        const target = $(this).data("tab");

        // Switch active tab button
        $(".tab-btn").removeClass("active");
        $(this).addClass("active");

        // Switch active content
        $(".tab-content").removeClass("active");
        $(`#${target}`).addClass("active");
    });
});
// JavaScript for age confirmation during signup

document.getElementById("signupForm").addEventListener("submit", function(event) {
    var age = parseInt(document.getElementById("signup-age").value);
    
    // Check if age is less than 18
    if (isNaN(age) || age < 18) {
        event.preventDefault();  // Prevent the form from submitting
        alert("You must be 18 years or older to sign up.");
        return false;
    }
    
    // If age is valid, form will be submitted
    alert("Welcome to LIFE!!!.");
});
