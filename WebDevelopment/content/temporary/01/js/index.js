$(document).ready(function () {
    //var spans = document.querySelectorAll("P span");

    var spans = $("P span");

    var div = $("div.container");

    $("span", div)
        .addClass("selectable")
        .toggleClass("aanuit")
        .on("click", function(evt){
            alert(this.textContent);
        });

    $("span", div).not(this).removeClass("aanuit");

    console.log($("span" , div)[0]);

    $("span" ,div).each(function(index, item){
        console.log(item);
        console.log(index);
    });
})

