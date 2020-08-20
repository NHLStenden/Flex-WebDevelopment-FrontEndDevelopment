window.onload = initPage;

function initPage(){
  console.log(">> initPage ");
  var myPromise = new Promise(function(resolveFunc,rejectFunc){
      console.log(">> promiseBody ");

      var rnd = Math.random() *10;
      var rndString = rnd.toString();

      if (rnd < 5) resolveFunc(rndString);
      else rejectFunc("Random 5 or higher : "  + rndString);

      console.log("<< promiseBody ");

  });//end of Promise object creation

  myPromise.then(
      data =>    console.log("RESOLVE: Data retrieved : " + data)
      ,
      errorInfo =>  console.log("REJECT: Error : "+ errorInfo)
  );//myPromise.then
  console.log("<< initPage ");
}
