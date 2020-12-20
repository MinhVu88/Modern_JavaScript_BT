/** EasyHttp lib for making http requests
 * 
 * @version 2.0.0
 * @author Albert Ritter
 * @license MIT
 */

class EasyHttp {
    // HTTP GET request
    get(url) {
        return fetch(url).then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error(response.error);
            }
        }).then(data => data).catch(error => error);
    };

    // HTTP POST request
    post(url, data) {
        return fetch(url, {method: 'POST', 
                           headers: {'content-type': 'application/json'}, 
                           body: JSON.stringify(data)
                          })
               .then(response => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        throw new Error(response.error);
                    }
               }).then(data => data)
                 .catch(error => error);
    };

    // HTTP PUT request
    put(url, data) {
        return fetch(url, {method: 'PUT', 
                           headers: {'content-type': 'application/json'}, 
                           body: JSON.stringify(data)
                          })
               .then(response => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        throw new Error(response.error);
                    }
               }).then(data => data)
                 .catch(error => error);
    };

    // HTTP DELETE request
    delete(url) {
        return fetch(url, {method: 'DELETE', headers: {'content-type': 'application/json'}})
               .then(response => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        throw new Error(response.error);
                    }
               }).then(() => 'Resource Removed')
                 .catch(error => error);
    };
};