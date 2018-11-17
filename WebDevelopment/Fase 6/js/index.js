"use strict";

$(document).ready(initPage);

function getDataFromIMDB(url){
    var prom = new Promise(function(resolve, reject) {
        console.log("Promise body");

        // create an object to call a REST API
        var xhr = new XMLHttpRequest();

        // set the URL to be opened
        xhr.open('GET', url);

        // set a function that is called when the API call is completed without errors
        xhr.onload = function () {
            resolve(xhr.response);
        };

        // set a function that is called when the API call cannot be completed.
        xhr.onerror = function () {
            reject(xhr.response);
        };

        // do the actual call to the REST API
        xhr.send();

    });
    return prom;
}//getDataFromIMDB

function ShowDataFromIMDB(url){
    var prom = getDataFromIMDB(url);

    prom.then(
        strJsonData => {
            console.log("Ready 1: raw JSON data ");
            console.log(strJsonData);
            return strJsonData;
        },
        reason => console.log("#ERROR : " + reason)
    ).then(
        strJsonData => {
            console.log("Ready 2 : convert from JSON to Object");
            return JSON.parse(strJsonData);
        }
    ).then(
        jsObject => { SetupViewUsingIMDBData(jsObject); }
    );

}//ShowDataFromIMDB

function SetupViewUsingIMDBData(data){
  console.log(data);
    $("#imdb_title").text(data.Title);
    $("#imdb_awards").text(data.Awards);
    $("#imdb_poster").attr("src",data.Poster);
    $("#imdb_url a").attr("href",data.Website);
}

function initPage(){
    ShowDataFromIMDB('http://www.omdbapi.com/?i=tt3896198&apikey=89f91ba6');
}//initPage()



