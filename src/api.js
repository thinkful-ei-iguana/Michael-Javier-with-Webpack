const BASE_URL = 'https://thinkful-list-api.herokuapp.com/javier/bookmarks';

function listApiFetch(...args) {
  let error;
  return fetch(...args)
    .then(res => {
      if (!res.ok) {
        // Valid HTTP response but non-2xx status - let's create an error!
        error = { code: res.status };
      }

      // In either case, parse the JSON stream:
      return res.json();
    })
    .then(data => {
      // If error was flagged, reject the Promise with the error object
      if (error) {
        error.message = data.message;
        return Promise.reject(error);
      }

      // Otherwise give back the data as resolved Promise
      return data;
    });
}

const getItems = function () {
  return fetch(`${BASE_URL}/items`);
  //return Promise.resolve('A successful response!');
};

export default{
  getItems,
}