// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"

// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("header").style.fontSize = "0px";
        document.getElementById("header").style.visibility = "hidden";
    } else {
        document.getElementById("header").style.fontSize = "90px";
        document.getElementById("header").style.visibility = "visible";
    }
}