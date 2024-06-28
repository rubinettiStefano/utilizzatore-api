let axios = require("axios");

let oggettoStefano;

axios
.get('http://localhost:8080/persons/1')
.then(
    response => 
    {
        oggettoStefano = response.data;
        
        console.log("La persona si chiama "+oggettoStefano.name + " "+oggettoStefano.surname);
        console.log("La persona ha "+oggettoStefano.age+" anni");
    }
);//response.data prendiamo il JSON body della response

//Creare letturaPers3.js
//deve leggere TUTTE le persone e stampare solo le prime 4

//Creare letturaPers4.js
//deve leggere TUTTE le persone e stampare la media delle età


//Creare letturaPers5.js
//deve leggere TUTTE le persone e stampare solo la più vecchia


//Creare distruzionePers6.js
//CERCARE axios DELETE su google
//deve leggere TUTTE le persone e stampare solo la più vecchia, CANCELLARLA DAL DB (TRAMITE API)