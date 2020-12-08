let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

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