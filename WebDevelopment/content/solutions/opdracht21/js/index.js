"use strict";

import { MyHttp } from "./classes/MyHttpClass.js";

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

    var http = new MyHttp();
    var promise = http.getDataFromIMDB(omdbQuery);

    promise.then(
        data => {
            const items = JSON.parse(data).Search;
            fillTableFromTemplate(
                "omdbdata",
                "ombdrow",
                items
            );
        },
        error => Alert("Er ging iets mis!\n" + error)
    );

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