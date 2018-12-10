window.onload = initPage();

function initPage(){
    // create an object to call a REST API
    var xhr = new XMLHttpRequest();

    // set the URL to be opened
    //xhr.open('GET', "http://www.omdbapi.com/?i=tt3896198&apikey=89f91ba6");
    xhr.open('GET', "http://api.molema.org/api/v1/stamboom/personen?apikey=1");

    // set a function that is called when the API call is completed without errors
    xhr.onload = function () {
        //callback 1
        console.log("URL information retrieved");
        console.log(xhr.response);

        var objData = JSON.parse(xhr.response);
        console.log(objData);
        console.log(objData.Ratings[0].Source);
    };

    // set a function that is called when the API call cannot be completed.
    xhr.onerror = function () {
        // callback 2
        console.log("ooops, error : " + xhr.response + "/" + xhr.status);
    };

    // do the actual call to the REST API
    xhr.send();

    console.log("thank you");

}