window.onload=initPage;

function resolveFunction(data){
    console.log( "resolveFunction()");
    console.log("resolved: " + data);
    return 100+data;
}//resolveFunction

function rejectFunction(errormessage){
    console.log( "rejectFunction()");
    console.log("error:" + errormessage);

    return "Errormelding : " + errormessage;
}//rejectFunction

function myPromiseHandler(resolve, reject){
    //function body
    console.log(">>myPromiseHandler");

    var getal = Math.random() * 10;

    var success = (getal > 5);

    if (success) resolve(getal.toString());
    else reject("This is an error");

    console.log("<<myPromiseHandler");
}//myPromiseHandler

function initPage(){
    console.log("initPage()");
    var myPromise = new Promise(myPromiseHandler);
    console.log('myPromise aangemaakt');

    myPromise.then(
        resolveFunction,
        rejectFunction
    );

    console.log("myPromise.then finished");
    console.log(myPromise);
}//initPage
