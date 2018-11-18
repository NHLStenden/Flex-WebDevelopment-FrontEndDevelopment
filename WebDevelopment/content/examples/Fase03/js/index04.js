$(document).ready(function(){
    var container = $("#container");
    $(container).text("Hello JQuery!");

    $("#clickable").click(function(evt){
        console.log(evt);
        var clicked = evt.currentTarget;
        var text = clicked.innerHTML;
        alert("(3) U heeft geklikt op de tekst '" + text + "'");
    });
});

