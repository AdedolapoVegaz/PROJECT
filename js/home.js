$(document).ready(function () {
    // Smooth Scroll for Navigation Links
    $("nav a").on("click", function (e) {
        e.preventDefault();
        const target = $(this).attr("href");
        $("html, body").animate(
            {
                scrollTop: $(target).offset().top,
            },
            1000
        );
    });

    // Highlight on Click
    $(".imagess").on("click", function () {
        $(".imagess").removeClass("highlight");
        $(this).addClass("highlight");
    });
});

// Custom CSS for Highlighting
$('<style>')
    .prop('type', 'text/css')
    .html(
        `.highlight {
            outline: 5px solid #ffa500;
            transition: outline 0.3s ease;
        }`
    )
    .appendTo('head');
