window.onload=initPage;

function resolveFunction(data){
    console.log("resolved: " + data);
}//resolveFunction

function rejectFunction(errormessage){
    console.log("error:" + errormessage);
}//rejectFunction

function myPromiseHandler(resolve, reject){
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

function initPage(){
  var myPromise = new Promise(myPromiseHandler);

  // dit levert een foutmelding in geval van de **Reject**
    console.log(myPromise);
}//initPage
