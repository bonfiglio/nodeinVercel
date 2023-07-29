const myRobot = require('./esercizio1');
console.log("Ciao sono il primo node server ");

/*Node.js introduce un proprio stile per esportare/importare 
oggetti (inclusi funzioni e classi) fra diversi file .js 
(o da librerie, come in questo caso la 
    libreia  http  con il comando module.exports =  objDaEsportare  ) 
detto commonjs diverso da javascript abasato su require ed export
*/
const http = require('http');

//console.log(myStuff(2,5));
myRobot.speak("I'm alive.");
myRobot.speakIt("Sò parlare Italiano.");
const { r1, x2, s } = require("./esercizio2");
s.call(myRobot, "Brum Brum!");
console.log(r1);
console.log(x2);
console.log(s);
s.call(r1,"ho ho");

let x1 = {type: "1° Serie Modello X", s};
s.call(x1,"hai hai ");
const hostname = "127.0.0.1";
const port = 8613;
/*La libreria http crea un server come una funzione di callback.
La funzione prende come argomenti due oggetti che rappresentano la Request e la
Response. Il primo oggetto può essere usato per ottenere informazioni sulla richiesta
ricevuta. Il secondo viene usato per inviare al client una opportuna risposta.*/
const server = http.createServer((req, res) => { 
    /*INVIO DI UNA RISPOSTA 
    impostiamo gli elementi di base di una HttpResponse e la inviamo.
statusCode comunica al client se la richiesta è andata a buon fine. 
Ci sono tantissimi statusCode, i più comuni sono 200 “OK” e 404 “Page Not Found”.
*/
res.statusCode = 200;
/* setHeader permette di impostare uno dei vari header delle HttpResponse che forniscono
meta-informazioni al client. 
L’header più comune è Content-Type che identifica il tipo di
contenuto con un MIME type: in questo caso text/html (altri valori comuni: text/plain,
image/jpeg, image/png, application/json, video/mp4...). Questo header viene usato dal
client per sapere cosa fare con ciò che riceve.
 */
res.setHeader('Content-Type', 'text/html'); 
 /*end invia quanto specificato al client tramite HttpResponse, e chiude il flusso di output.
Importante: res è un write stream: significa che, finché non lo chiudiamo, possiamo
inviare dati su di esso. È però fondamentale chiuderlo, o il client resterà in attesa di
informazioni. Con end facciamo entrambe le cose (invio e chiusura) in un colpo solo. */
res.end(`<h1>Eccomi k!</h1>
<p>Ho appena spedito un file html dal server al client!
sito in costruziome</p>`);
});

server.listen(port, hostname, () => { // se server si ativa questa callback viene invocata 
    console.log("Server running at http://" + hostname + ":" + port);
    });
/* Il server viene attivato ponendolo in ascolto su un dato indirizzo ip e una
data porta.

La callback precedentemente definita con createServer viene associata ad ogni arrivo di
una HttpRequest all’host indicato sulla porta specificata 
   */ 