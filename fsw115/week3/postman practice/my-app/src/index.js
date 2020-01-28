let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest
const vhr = new XMLHttpRequest()

Xhr.open("GET", "https://swapi.co/api/people/1", true);
xhr.send();

xhr.onreadystatechange = function() {
    if(xhr.readystate === 4 && xhr.status === 200){
        const JSONdata = xhr.responseText
        const data = JSON.parse(JSONdata)
        showdata(data.results)
    }
}

function showdata(arr){
    for(let i = 0; i < arr.length; i++){
        const h1 = document.createElement("h1")
        h1.textContent = arr[i]
        document.body.appendChild
    }
}