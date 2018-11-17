window.onload = initPage;

function initPage(){
    console.log(">> initPage ");
    var myPromise = new Promise(function(resolveFunc, rejectFunc){
        console.log(">> promiseBody ");

        var rnd = Math.random() *10;
        var rndString = rnd.toString();

        if (rnd < 5) resolveFunc(rndString);
        else rejectFunc("Random 5 or higher : "  + rndString);

        console.log("<< promiseBody ");

    });

    myPromise.then(
        data      => myResolveFunction(data),
        errorInfo => myRejectFunc(errorInfo)
    );
    console.log("<< initPage ");
}//initPage

function myResolveFunction(data){
    console.log(">> myResolveFunction ");
    var div = document.getElementById("container");
    div.innerText = "New data: " + data;
    console.log("Data retrieved : " + data);
    console.log(">> myResolveFunction ");
}//myResolveFunction


function myRejectFunc(errorInfo){
    console.log(">> myRejectFunc ");
    var div = document.getElementById("container");
    div.innerText = "Error ! : " + errorInfo;
    console.log(errorInfo);
    console.log("<< myRejectFunc ");
}//myRejectFunc