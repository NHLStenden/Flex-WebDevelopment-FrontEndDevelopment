"use strict";

import { MyHttp } from "./MyHttpClass.js";

$(document).ready(initPage);

function SetupViewUsingIMDBData(data){
    console.log(">>SetupViewUsingIMDBData");
    console.log(data);

    $("#imdb_title").text(data.Title);
    $("#imdb_awards").text(data.Awards);
    $("#imdb_poster").attr("src",data.Poster);
    $("#imdb_url a").attr("href",data.Website);
    console.log("<<SetupViewUsingIMDBData");
}

function initPage(){
    console.log(">>initPage");
    var http = new MyHttp();

    // get the promise from the newly created http-class
    var prom = http.getDataFromIMDB('http://www.omdbapi.com/?i=tt3896198&apikey=89f91ba6');

    // now setup the resolve and reject functions (using fat-arrow notation)
    // first parameter of the THEN()-function is the RESOLVE
    // second parameter of the THEN()-function is the ERROR function
    prom.then(
        strJSON => {
            console.log("Data received: ");
            console.log(strJSON);
            var objData = JSON.parse(strJSON);

            SetupViewUsingIMDBData(objData);
        },
        error => {
            console.log(error)
            alert("Foutmelding bij benaderen URL :: " + error);
        }
    )
    console.log("<<initPage");
}//initPage()