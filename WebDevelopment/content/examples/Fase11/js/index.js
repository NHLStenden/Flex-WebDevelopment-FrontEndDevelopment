"use strict";

import { MyHttp } from "./MyHttpClass.js";

$(document).ready(initPage);

function SetupViewUsingIMDBData(data){
    console.log(">>SetupViewUsingIMDBData");
    console.log(data.data[0]);

    // the api returns data in two parts: metadata and data. the data-field contains the records.
    var person = data.data[0];

    $("#person_name").text(person.roepnaam + " " + person.familieNaam);
    $("#person_sexe").text(person.geslacht);
    $("#person_beroep").text(person.beroep);

    console.log("<<SetupViewUsingIMDBData");
}//SetupViewUsingIMDBData()

function initPage(){
    console.log(">>initPage");
    var http = new MyHttp();

    // get the promise from the newly created http-class
    var prom = http.getDataFromIMDB('http://restapi.local/api/v1/stamboom/personen/1?apikey=1234');

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