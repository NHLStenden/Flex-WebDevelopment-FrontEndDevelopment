window.onload = initPage;

function resolveFunction(data) {
    console.log("resolved: " + data);
}//resolveFunction

function rejectFunction(errormessage) {
    console.log("error:" + errormessage);
}//rejectFunction

function myPromiseHandler(resolve, reject) {
    //function body
    console.log("Now in myPromiseHandler body ");

    var getal = Math.random() * 10;

    var success = (getal > 5);

    if (success)
        resolve(getal.toString())
    else
        reject(getal.toString());
    console.log("Exiting myPromiseHandler body");
}//myPromiseHandler

function initPage() {
    console.log("initPage()");
    var myPromise = new Promise(myPromiseHandler);


    window.setTimeout(function () {
        console.log("klaar")
    }, 10000);

    console.log("Promise aangemaakt");
    console.log(myPromise);

    //myPromise.then(resolveFunction, rejectFunction);

    myPromise.then(data => {
        console.log( `Gelukt: ${data}`);
    }, error => {
        console.log( `Fout!: ${error}`);
    });

    console.log(myPromise);
}//initPage
