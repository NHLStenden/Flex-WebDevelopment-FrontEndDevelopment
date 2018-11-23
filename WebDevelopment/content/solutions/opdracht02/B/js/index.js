window.onload = initPage;

function initPage(){
  var items = [
    "Martin",
    "Bas",
    "Stefan",
    "Piet",
    "Klaas",
    "Jan",
    "Aswien",
    "Karel",
    "Bert",
    "Mark",
    "Arjan",
    "x",
    "y",
    "z",
  ];
  document.write("<ul>");
  for (var i in items){
      document.write("<li>" + items[i] + "</li>");
  }
  document.write("</ul>");
}