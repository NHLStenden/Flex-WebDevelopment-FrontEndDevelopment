"use strict";
/**
 * Module included by index.html
 * @Author: Martin Molema
 */

import { MyHttp } from "./MyHttp.js";
import { MyOSMMap } from './MyOSMMap.js';

$(document).ready(initPage);

function CreateOSMView(data){
    console.log(">>CreateOSMView");
    let mymap = new MyOSMMap(data.parkeerlocaties, "osm");

    mymap.AddMarkersToMap();

    console.log("<<CreateOSMView");
}//SetupViewUsingIMDBData()

function initPage(){
    console.log(">>initPage");
    var http = new MyHttp();

    // get the promise from the newly created http-class
    var prom = http.getDataFromURL('https://open.data.amsterdam.nl/ivv/parkeren/locaties.json');

    // now setup the resolve and reject functions (using fat-arrow notation)
    // first parameter of the THEN()-function is the RESOLVE
    // second parameter of the THEN()-function is the ERROR function
    prom.then(
        strJSON => {
            console.log("Data received: ");
            var objData = JSON.parse(strJSON);

            // draw the maps
            CreateOSMView(objData);
        },
        error => {
            console.log(error)
            alert("Foutmelding bij benaderen URL :: " + error);
        }
    )
    console.log("<<initPage");
}//initPage()
