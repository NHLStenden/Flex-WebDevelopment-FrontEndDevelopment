$(document).ready(function(){
    var container = $("#container");
    $(container).text("Hello JQuery!");

    $("#clickable").click(function(evt){
        // simple click message
        alert("(1) U heeft geklikt");
    });
});

