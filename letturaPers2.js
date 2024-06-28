let axios = require("axios");

let oggettoStefano;

axios
.get('http://localhost:8080/persons/1')
.then(response => gestioneResponse(response));//response.data prendiamo il JSON body della response



function gestioneResponse(response) 
{
    oggettoStefano = response.data;
    console.log("La persona si chiama "+oggettoStefano.name + " "+oggettoStefano.surname);
    console.log("La persona ha "+oggettoStefano.age+" anni");
}