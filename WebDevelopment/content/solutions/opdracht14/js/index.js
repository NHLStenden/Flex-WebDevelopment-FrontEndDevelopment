window.onload=initPage;

function resolveFunction(data){
    console.log("resolved: " + data);
}//resolveFunction

function rejectFunction(errormessage){
    console.log("error:" + errormessage);
}//rejectFunction

function myPromiseHandler(resolve, reject){
    //function body

    var getal = Math.random() * 10;

    var success = (getal > 5);

    if (success) resolve(getal.toString());
    else reject(getal.toString());
}//myPromiseHandler

function initPage(){
  var myPromise = new Promise(myPromiseHandler);

  myPromise.then(
      function(data){resolveFunction(data)},
      function(errormessage){rejectFunction(errormessage)}
   );

  console.log(myPromise);

  myPromise.then(
        data => resolveFunction(data),
        errormessage => rejectFunction(errormessage)
    );
  console.log(myPromise);

}//initPage
