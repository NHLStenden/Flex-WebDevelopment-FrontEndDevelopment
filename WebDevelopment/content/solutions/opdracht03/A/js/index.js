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
    "ABCDE",
    "x",
    "y",
    "z",
  ];
  var objOrderedList = document.getElementById("mijnlijstje");
  for (var i in items){
      objOrderedList.innerHTML += "<li>" + items[i] ;
  }

}//initPage()