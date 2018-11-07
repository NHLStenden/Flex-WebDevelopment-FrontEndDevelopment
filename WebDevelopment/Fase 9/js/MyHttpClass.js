export class MyHttp {
    getDataFromIMDB(url){
        console.log(">>getDataFromIMDB");

        // create a promise that will be returned as the function's result
        // the calling function can supply the resolve and reject function.

        var prom = new Promise(function(resolve, reject) {
            console.log("getDataFromIMDB::Promise body");

            // create an object to call a REST API
            var xhr = new XMLHttpRequest();

            // set the URL to be opened
            xhr.open('GET', url);

            // set a function that is called when the API call is completed without errors
            xhr.onload = function () {
                console.log("Data retrieved; now calling resolve function");
                resolve(xhr.response);
            };

            // set a function that is called when the API call cannot be completed.
            xhr.onerror = function () {
                console.log("#ERROR reaching URL " + url);
                console.log("#ERROR response" + xhr.response);
                console.log("#ERROR now calling REJECT function");
                reject(xhr.response);
            };

            // do the actual call to the REST API
            xhr.send();

        });
        console.log("<<getDataFromIMDB");
        return prom;
    }//getDataFromIMDB

}//class MyHttpClass