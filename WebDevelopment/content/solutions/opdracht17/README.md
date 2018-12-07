# Uitwerking opdracht 16

Het leren van tekenen op het `<canvas>`-element gaat het beste door naar voorbeelden te kijken en op MDN te kijken.
Je moet een beetje leren wat het jargon is. Hieronder de uitwerking.

```javascript
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

```

Het komt er in de basis op neer dat je kunt werken met voorgebakken vormen (zoals Rect en Arc) of zelf een pad moet 
tekenen. Een pad moet je uiteindelijk zichtbaar maken met `stroke`. Daarmee wordt eigenlijk bedoeld dat je 
daadwerkelijk je pen op het papier zet en in een bepaalde kleur de lijn tekent. Je kunt ook nog kiezen voor de
dikte van de lijn (`width`) en hoe een dikke lijn afgerond wordt (`lineCap`).

Kleuren kun je opgeven in Hex-codes of HTML kleurnamen. Handig!

Het assenstelsel begint linksboven en wordt geteld in pixels. Je hoeft bij waarden geen "px" op te geven zoals in CSS!
Let op dat bij de functie `lineTo` en `moveTo` je in absolute coordinaten moet werken. Je kunt dus niet zeggen "ga 50 pixels"
naar links.

## Referenties

[Canvas W3 Schools](https://www.w3schools.com/graphics/canvas_drawing.asp)
[Canvas MDN](https://developer.mozilla.org/nl/docs/Web/API/Canvas_API/Tutorial)
