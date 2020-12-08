let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const API = 'https://rickandmortyapi.com/api/character/'

function fetchData(apiUrl, callback){
  let xhttp = new XMLHttpRequest();
  xhttp.open('GET', apiUrl, true);
  xhttp.onreadystatechange = (event) => {
    if (xhttp.readyState === 4){
      if (xhttp.status === 200){
        callback(null, JSON.parse(xhttp.responseText));
      } else {
        const error = new Error('Error '+apiUrl);
        callback(error, null);
      }
    }
  }
  xhttp.send();
}

fetchData(API, (error, response1) => {
  if (error){
    return console.error(error);
  } else {
    fetchData(API + response1.results[0].id, (error, response2) => {
      if (error){
        return console.error(error);
      } else {
        fetchData(response2.origin.url, (error, response3) => {
          if (error) {
            return console.error(error);
          } else {
            console.log(response1.info.count);
            console.log(response2.name);
            console.log(response3.dimension);
          }
        });
      }
    });
  }
});