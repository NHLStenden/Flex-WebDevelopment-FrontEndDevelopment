$(document).ready(function(){
    var container = $("#container");
    $(container).text("Hello JQuery!");

    $("#clickable").click(function(evt){
        // notice that the variable 'this' points to the clicked element. this is an automatic thing

        var clicked = this;
        var text = clicked.innerHTML;
        alert("(2) U heeft geklikt op de tekst '" + text + "'");
    });
});

