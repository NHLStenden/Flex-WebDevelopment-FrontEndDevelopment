window.onload=initPage;

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
      data =>         {return 100 + data},
      errormessage => {return "~error=" + errormessage }
   ).then(
      data =>         console.log("then 2 :: resolve ==> " + data),
      errormessage => console.log("then 2 :: reject ==> " + errormessage)
    );

    console.log(myPromise);

}//initPage
