window.onload=initPage;

function resolveFunction(data){
    console.log("resolved: " + data);
}//resolveFunction

function rejectFunction(errormessage){
    console.log("error:" + errormessage);
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
      function(data){resolveFunction(data)},
      function(errormessage){rejectFunction(errormessage)}
   );

  console.log("myPromise.then finished");
  console.log(myPromise);

  myPromise.then(
        data => resolveFunction(data),
        errormessage => rejectFunction(errormessage)
    );
  console.log("myPromise.then 2 finished");
  console.log(myPromise);

}//initPage
