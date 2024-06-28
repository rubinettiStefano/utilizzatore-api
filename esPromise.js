function generaPromise()
{
    //una Promise è un oggetto che prende come parametri 2 CALLBACK
    //prende come parametri 2 funzioni
    let promessa = new Promise(
        (funzioneSuccesso,funzioneFallimento) =>
        {
            let d20 = parseInt(Math.random()*20)+1;//numero randomico tra 1 e 20
            //decido che il mio TIRO ha successo quando è più alto di 12
            console.log("Il dado sta girando, aspetta che si fermi, prevedo ci vorrano 4 secondi");
            //se ho successo infliggo danni pari al tiro - 12
            //se fallisco mi esce una scritta che mi prende in giro per il tiro basso
            //a entrambe le callback passo il valore del dado

            //esegui ciò che è tra graffe dopo 4000 ms
            setTimeout(
               function()
                {
                    if(d20>12)
                        funzioneSuccesso(d20);
                    else
                        funzioneFallimento(d20);
                },4000
            );
           
        }
    );

    return promessa;
}

function generaPromiseSemplice()
{
    //una Promise è un oggetto che prende come parametri 2 CALLBACK
    //prende come parametri 2 funzioni
    console.log("Richiamata genera promise semplice")
    return new Promise(
        (funzioneSuccesso,funzioneFallimento) =>
        {
            let d20 = parseInt(Math.random()*20)+1;//numero randomico tra 1 e 20
            setTimeout(
               function()
                {
                    if(d20>12)
                        funzioneSuccesso();
                    else
                        funzioneFallimento();
                },1000
            );
           
        }
    );

    
}


generaPromise()
.then( valoreDado => console.log("È uscito "+valoreDado+" e quindi ha inflitto "+(valoreDado-12)+" danni"))//.then vuole come PARAMETRO una funzione, che ASSEGNERÀ alla prima callback (funzione successo)
.catch(function(valoreDado){
    console.log("XOXOXOOXOXO, hai perso, è uscito "+valoreDado)
});//.catch vuole come PARAMETRO una funzione, che ASSEGNERÀ alla seconda callback (funzione fallimento)

generaPromiseSemplice()
.then(()=>console.log("Callback successo promise semplice"))
.catch(()=>console.log("Callback fallimento promise semplice"))

console.log("SPERIAMO BENE, NON VEDO L'ORA DI VEDERE IL RISULTATO")