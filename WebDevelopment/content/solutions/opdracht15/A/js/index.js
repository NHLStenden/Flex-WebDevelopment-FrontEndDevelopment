window.onload=initPage;

function resolveFunction(data){
    console.log("resolved: " + data);
    return 100+data;
}//resolveFunction

function rejectFunction(errormessage){
    console.log("error:" + errormessage);
    return "~error="  + errormessage;
}//rejectFunction

function myPromiseHandler(resolve, reject){
    var getal = Math.random() * 10;
    var success = (getal > 5);
    if (success)
        resolve(getal.toString())
    else
        reject(getal.toString());
}//myPromiseHandler

function initPage(){
  var myPromise = new Promise(myPromiseHandler);

  myPromise.then(
      function(data)        { return resolveFunction(data)       } ,
      function(errormessage){ return rejectFunction(errormessage)}
   ).then(
        data         => console.log("then 2 :: resolve ==> " + data       ) ,
        errormessage => console.log("then 2 :: reject ==> " + errormessage)
    );

  console.log(myPromise);

}//initPage
