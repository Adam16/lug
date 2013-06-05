define([
    "jquery"
], function ($) {
    $(function () {

        console.info("app/main loaded");

        //$(document).foundation();

        $("h2").bind("click", function (e) {
            console.debug($(this));
            return e;
        });

        // Hide address bar on mobile devices (except if #hash present, so we don't mess up deep linking).
        if (Modernizr.touch && !window.location.hash) {
            // At load, if user hasn't scrolled more than 20px or so...
            if ($(window).scrollTop() < 20) {
                window.scrollTo(0, 1);
            }
        }

    });
});

