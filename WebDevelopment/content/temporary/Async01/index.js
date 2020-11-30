function showTitle() {
    //callback 1
    console.log("URL information retrieved");
    console.log(this.response);
    const responseObject = JSON.parse( this.response );
    const title = responseObject.Title;

    console.log(`Naam van de film : ${title}`);
    const h1 = document.getElementById('title');
    h1.innerText = title;

    document.getElementById('year').innerText = responseObject.Year;
    document.getElementById('runtime').innerText = responseObject.Runtime;
    document.getElementById('genre').innerText = responseObject.Genre

}// showTitle()

function handleError() {
    console.log("ooops, error : " + this.response + "/" + this.status);
    document.getElementById('title').innerText = '!#fout';
}// handleError()


window.onload = function(){

// create an object to call a REST API
    var xhr = new XMLHttpRequest();

    const url = 'http://www.omdbapi.com/?i=tt3896198&apikey=89f91ba6';

    // set the URL to be opened
    xhr.open('GET', url);

    // set a function that is called when the API call is completed without errors
    xhr.onload = showTitle;

    // set a function that is called when the API call cannot be completed.
    xhr.onerror = handleError;

    // do the actual call to the REST API
    xhr.send();

    console.log("thank you");

    // DIT onderstaande werkt dus niet. de code is al uitgevoerd voordat de informatie van het internet is opgehaald.
    console.log(`Opgehaalde data: ${xhr.response}`);
}