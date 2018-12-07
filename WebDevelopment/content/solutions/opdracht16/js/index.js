window.onload=initPage;

function initPage(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(10,10,75,75);

    ctx.arc(50,20, 50, 0, 2*Math.PI);
    ctx.strokeStyle="blue";
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(100,100);
    ctx.lineTo(100,150);
    ctx.lineTo(150,150);
    ctx.lineTo(100,100);    // this line if optional for ctx.fill but mandatory for stroke().
    ctx.strokeStyle="grey";
    ctx.lineWidth=10;
    ctx.lineCap="round";
    ctx.stroke();

    ctx.fillStyle = "green";
    ctx.fill();

}//initPage