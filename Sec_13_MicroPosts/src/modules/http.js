/** EasyHttp lib for making http requests
 * 
 * @version 3.0.0
 * @author Albert Ritter
 * @license MIT
 */

 class EasyHttp {
  // HTTP GET request
  async get(url) {
      const response = await fetch(url);

      return await response.json();
  };

  // HTTP POST request
  async post(url, data) {
      const response = await fetch(
        url, 
        {
          method: 'POST', 
          headers: {'content-type': 'application/json'}, 
          body: JSON.stringify(data)
        }
      );
      
      return await response.json();
  };

  // HTTP PUT request
  async put(url, data) {
      const response = await fetch(
        url, 
        {
          method: 'PUT', 
          headers: {'content-type': 'application/json'}, 
          body: JSON.stringify(data)
        }
      );
      
      return await response.json();
  };

  // HTTP DELETE request
  async delete(url) {
      const response = await fetch(
        url, 
        {
          method: 'DELETE', 
          headers: {'content-type': 'application/json'}
        }
      );
      
      return await response.json();
  };
};

export const http = new EasyHttp();