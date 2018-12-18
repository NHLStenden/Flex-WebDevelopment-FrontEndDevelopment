$(document).ready(initPage);

function initPage(){
    $("#circle1").on("click", circleClickHandler);
}//initPage

function circleClickHandler(evt){
  $(this).css("stroke-width","10").css("fill","grey");
}//circleClickHandler

