// XMLHttpRequest methods & working with text

/* readyState values:
   * 0: request not initialized
   * 1: server connection established
   * 2: request received
   * 3: processing request
   * 4: request finished & response is ready
*/

/* Some HTTP statuses:
   * 200: OK
   * 403: FORBIDDEN
   * 404: NOT FOUND
*/

// create an event listener for the button
const button = document.querySelector('#button');

const output = document.querySelector('#output');

button.addEventListener('click', loadData);

function loadData() {
    const xhr = new XMLHttpRequest(); // create an XHR object

    console.log('readyState (before xhr.open()):', xhr.readyState);

    // the xhr object's open() method specifies the type of request (1st param: GET only reads the file or url), 
    // the url or file name the request is sent to (2nd param) & 
    // a boolean value (3rd param: true -> asynchronous | false -> synchronous)
    /*
    - More about the 3rd param: Setting it to true means you are making an asynchronous request. 
      
    - That means the code does not pause until the http request is complete. 
      
    - A synchronous call locks up the browser so nothing else runs. 
    
    - That can cause problems, so people prefer asynchronous
    */
    xhr.open('GET', 'datas.txt', true); // correct: data.txt

    // access & log the readyState value
    console.log('readyState (after xhr.open()):', xhr.readyState);

    // onprogress is used for spinners/loaders (something is displayed while it's loading or fetching data)
    // this -> the xhr object
    xhr.onprogress = function() {console.log('readyState (xhr.onprogress()):', this.readyState);};
    
    // readyState #4
    xhr.onload = function() {
        console.log('readyState (xhr.onload()):', this.readyState);

        if (this.status === 200) {
            console.log('onload:', this.responseText); // responseText is the data/content in data.txt

            output.innerHTML = `<h1>${this.responseText}</h1>`;
        } else {
            this.onerror();
        }
    };

    // before onload (new), onreadystatechange (deprecated) was used to check whether readyState is 4
    // xhr.onreadystatechange = function() {
    //     console.log('readyState:', this.readyState);

    //     if (this.status === 200 && this.readyState === 4) console.log('onreadystatechange:', this.responseText);
    // };   

    // this will run if something goes wrong
    xhr.onerror = function() {
        output.innerHTML = `<h4 style='color: crimson'>Request Error | HTTP status: ${xhr.status}</h4>`;
    };
    
    xhr.send(); // the xhr object's send() method finalizes the request
};