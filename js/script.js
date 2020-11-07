$( document ).ready(function() {
// inizio del codie

/*
      variabili globali
*/
var sonoSulBottone = "none";
var gameOver = false;
var contaRound = 0;

var domande = [];

// gioco va avanti fino al game over
// while (!gameOver) {
for (var j = 0; j < 5; j++) {
  contaRound++;
  console.log("round: ",contaRound);

  // genera un numero casuale tra 1 e 4 e lo aggiunge al vettori domande
  domande.push(randomNumber(4));

  // per ogni elemento in vettori domande:
  i = 0;
  for (var i = 0; i < domande.length; i++) {
    // attende il click e dice cosa hai cliccato
    //Risposta utente

    async function rispostaUtente() {
      let myPromise = new Promise(function (myResolve, myReject) {
        $("#game-container").click(function() {
          if (sonoSulBottone === "1") {
            myResolve("Hai cliccato 1");
          } else if (sonoSulBottone === "2") {
            myResolve("Hai cliccato 2");
          } else if (sonoSulBottone === "3") {
            myResolve("Hai cliccato 3");
          } else if (sonoSulBottone === "4") {
            myResolve("Hai cliccato 4");
          }
        });
      });
      var risposta = await myPromise;
      console.log(risposta);
    }

    rispostaUtente();


  }

  console.log("giri ciclo", i);
  console.log("numero domande",domande.length);

  gameOver = true;
  console.log("exit");
}




/*
async function myDisplay() {
  let myPromise = new Promise(function(myResolve, myReject) {
    myResolve("I love You !!");
  });
  testo = await myPromise;
  console.log(testo);
}

myDisplay();
*/





  //se risposta corretta va avanti altimenti game over

// controllate tutte le risposte ricomincia da capo


/*
                EVENT LISTENERS
*/
// controlla su quale bottone sono
$("#game-container .button").mouseover(function(){
  if ($(this).hasClass("b-1")) {
    sonoSulBottone = "1";
  } else if ($(this).hasClass("b-2")) {
    sonoSulBottone = "2";
  } else if ($(this).hasClass("b-3")) {
    sonoSulBottone = "3";
  } else if ($(this).hasClass("b-4")) {
    sonoSulBottone = "4";
  }
});

//Se esco dal bottone resetto la variabile sonoSulBottone
$("#game-container .button").mouseleave(function(){
  sonoSulBottone = "none";
});


/*
                  UTILITIES
*/
// Ritorna un numero casuale da 1 a max
function randomNumber(max){
  return Math.floor(Math.random() * max) + 1;
}

//Ridimensiona in modo automatico gli oggetti che hanno classe js-resize.
// Lo fa solo al ridimenisonamento, quindi lo devo fare anche al caricamento della pagina.
$( document ).ready(function() {
  var finalWidth;
  var finalHeight;

  // Prende le dimensioni dello schermo
  var pageWidth = $(window).width();
  var pageHeight = $(window).height();

  // Controlla quale sia la dimensione minore
  if (pageWidth <= pageHeight) {
    // nel dom cerca tutti gli oggetti con classe js-resize e ridimensionali
    finalWidth = pageWidth * 0.80; //valore arbitrario
    // Proporzione variabile
    $(".js-resize").width(finalWidth);
    $(".js-resize").height(finalWidth);

  } else {
    finalHeight = pageHeight * 0.80; //valore arbitrario
    // Proporzione variabile
    $(".js-resize").height(finalHeight);
    $(".js-resize").width(finalHeight);
  }

});

$(window).resize(function(){
  var finalWidth;
  var finalHeight;

  // Prende le dimensioni dello schermo
  var pageWidth = $(window).width();
  var pageHeight = $(window).height();

  // Controlla quale sia la dimensione minore
  if (pageWidth <= pageHeight) {
    // nel dom cerca tutti gli oggetti con classe js-resize e ridimensionali
    finalWidth = pageWidth * 0.80; //valore arbitrario
    // Proporzione variabile
    $(".js-resize").width(finalWidth);
    $(".js-resize").height(finalWidth);

  } else {
    finalHeight = pageHeight * 0.80; //valore arbitrario
    // Proporzione variabile
    $(".js-resize").height(finalHeight);
    $(".js-resize").width(finalHeight);
  }

});

// fine document ready
});
