let axios = require("axios");//prendendo la libreria axios e la mettiamo in una variabile


axios
.get('https://jsonplaceholder.typicode.com/users/1')//fa REQUEST con VERBO GET all'url tra parentesi
.then(resp=>console.log(resp.data))
.catch(err=> console.log("problemi nella response"));//stampa la response

axios
.get('https://jsonplaceholder.typicode.com/users/2')//fa REQUEST con VERBO GET all'url tra parentesi
.then(resp=>console.log(resp.data))
.catch(err=> console.log("problemi nella response"));//stampa la response

axios
.get('https://jsonplaceholder.typicode.com/users/3')//fa REQUEST con VERBO GET all'url tra parentesi
.then(resp=>console.log(resp.data))
.catch(err=> console.log("problemi nella response"));//stampa la response

console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB");