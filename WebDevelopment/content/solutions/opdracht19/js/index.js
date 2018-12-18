"use strict";

$(document).ready(initPage);

//http://www.omdbapi.com/?apikey=89f91ba6&type=movie&r=json&s=Martin&page=1

function initPage(){
    const strUrl = 'http://www.omdbapi.com/';
    const strAPIKey = '89f91ba6';
    const strType   = 'movie';
    const strResult = 'json';
    const strPage   = '1';
    const strTitle  = 'Martin';

    const URLQuery = $.param({
        type   : strType,
        apikey : strAPIKey,
        r      : strResult,
        s      : strTitle,
        page   : strPage
    });

    const omdbQuery = strUrl + "?" + URLQuery;

    const xhr = new XMLHttpRequest();

    xhr.open('GET', omdbQuery);
    xhr.onload = function () {
        const data = JSON.parse(xhr.response);
        console.log(data);
        if (data.Response == "True") {
            fillTableFromTemplate(
                "omdbdata",
                "ombdrow",
                data.Search
            );
        }// data is valid
    };
    xhr.onerror = function () {
        alert("Er ging iets mis : " + xhr.response);
    };
    xhr.send();
}//initPage

function fillTableFromTemplate(idTable, idTemplate, arrData){
    // zoek de template en de tabel op in geladen HTML
  var template = document.getElementById(idTemplate);
  var table    = document.getElementById(idTable);

  // doorloop alle data (arrData is een array, dus gebruik de Array.forEach functie)
  arrData.forEach((item)=>{
      const clone = document.importNode(template.content, true);

      const tdTitle = clone.querySelector(".title");
      const tdYear = clone.querySelector(".year");
      const imgPoster = clone.querySelector(".poster img");

      imgPoster.src       = item.Poster;
      tdTitle.textContent = item.Title;
      tdYear.textContent  = item.Year;

      table.appendChild(clone);
  });
}//fillTableFromTemplate