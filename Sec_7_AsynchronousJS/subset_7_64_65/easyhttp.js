/** EasyHttp lib for making http requests
 * 
 * @version 1.0.0
 * @author Albert Ritter
 * @license MIT
 */

// create the EasyHTTP() constructor
function EasyHTTP() {this.http = new XMLHttpRequest();};

// create 4 prototype methods that represent 4 HTTP request types
// HTTP GET REQUEST
EasyHTTP.prototype.get = function(url, callback) {
    this.http.open('GET', url, true);

    /*
    - When 'this' (an Easyhttp() instance) is used inside an anon function, that's assigned to this.http.onload
    
    - 'this' no longer refers to an Easyhttp() instance, instead it then refers to the anon function, which's an object itself
    
    - That's why 'this.http.status' & 'this.http.responseText' return null 
      as the anon function has no properties such as http or status or responseText
      
    - One of the solutions to this problem is assign 'this' to the 'EasyHTTP_object' variable

    - That way, 'EasyHTTP_object' now represents an Easyhttp() instance, which can be used inside the anon function
      without being mistaken with the function's 'this'

    - Another solution is to use an arrow function (will be covered in subset_7_69)
    */ 
    let EasyHTTP_object = this;

    console.log(EasyHTTP_object);

    this.http.onload = function() {
        if (EasyHTTP_object.http.status === 200) {
            //console.log(this.http.responseText) // wrong

            // console.log(EasyHTTP_object.http.responseText); // correct

            /*
            - We can't return EasyHTTP_object.http.responseText here, 
              then retrieve the response & deal with it by calling the get() method in app.js

            - To understand why, we have to grasp the concepts of event loop, callstack & callback queue in JS

            -> https://dev.to/lydiahallie/javascript-visualized-event-loop-3dif

            -> https://dev.to/thebabscraig/the-javascript-execution-context-call-stack-event-loop-1if1 

            -> https://levelup.gitconnected.com/asynchronous-javascript-part-1-b87f263a353a 

            -> https://stackoverflow.com/questions/14220321/how-do-i-return-the-response-from-an-asynchronous-call 
            */
            // return EasyHTTP_object.http.responseText; 

            callback(null, EasyHTTP_object.http.responseText);
        } else {
            console.log('Erorr:',EasyHTTP_object.http.status);
        }
    };

    this.http.send();
};

// HTTP POST REQUEST
EasyHTTP.prototype.post = function(url, data, callback) {
    this.http.open('POST', url, true);

    this.http.setRequestHeader('Content-type', 'application/json');

    let EasyHTTP_object = this;

    this.http.onload = function() {
        callback(null, EasyHTTP_object.http.responseText);
    };
    
    this.http.send(JSON.stringify(data));
};

// HTTP PUT REQUEST
EasyHTTP.prototype.put = function(url, data, callback) {
    this.http.open('PUT', url, true);

    this.http.setRequestHeader('Content-type', 'application/json');

    let EasyHTTP_object = this;

    this.http.onload = function() {
        callback(null, EasyHTTP_object.http.responseText);
    };
    
    this.http.send(JSON.stringify(data));
};

// HTTP DELETE REQUEST
EasyHTTP.prototype.remove = function(url, callback) {
    this.http.open('DELETE', url, true);

    let EasyHTTP_object = this;

    this.http.onload = function() {
        if (EasyHTTP_object.http.status === 200) {
            callback(null, 'Post Removed');
        } else {
            console.log('Erorr:',EasyHTTP_object.http.status);
        }
    };
    
    this.http.send();
};