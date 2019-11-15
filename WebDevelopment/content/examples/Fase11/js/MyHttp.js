/**
 * @module MyHttp
 * @author MArtin Molema
 */

/**
 * @class MyHttp
 * A class to request information from the internet using a HTTP-call and a Promise.
 */
export class MyHttp {

    /**
     * An empty constructor
     * @constructor
     */
    constructor (){

    }

    /**
     * This function will get the data through the URL using a Promise. No assumptions on the type of data
     * returned are made
     * @param {String} url - The URL that will return the data
     * @returns {Promise<unknown>} a Promise object that can be handled using the Promise Resolve (.then) function
     */
    getDataFromURL(url){
        console.log(">>getDataFromURL");

        // create a promise that will be returned as the function's result
        // the calling function can supply the resolve and reject function.

        var prom = new Promise(function(resolve, reject) {
            console.log("getDataFromURL::Promise body");

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
        console.log("<<getDataFromURL");
        return prom;
    }//getDataFromURL

}//class MyHttpClass
