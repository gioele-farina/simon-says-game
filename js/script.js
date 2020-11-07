$( document ).ready(function() {
// inizio del codie

/*
      variabili globali
*/
var sonoSulBottone = "none";
var gameOver = false;
var contaRound = 0;

var domande = [];
var risposta = false;

/*
                GAME
*/
var generaDomande = true;
var domandaPronta = false;
var clickAbilitato = false;
i = 0;

var game = setInterval(function(){
  // Genera la domanda nuova solo se generaDomande = true.
  // all'inizio a prescindere, dopo solo se tutte le risposte sono state date.
  if (generaDomande) {
    domande.push(randomNumber(4));
    console.log(domande);
    generaDomande = false;
    clickAbilitato = true;

    //animazione domande

    // fine animazione
    domandaPronta = true;
  }

  //controlla la risposta solo se l'animazione delle domande ha finito,
  // e solo dopo aver aspettato che l'utente da la risposposta ad ogni iterazione di i.
  if (domandaPronta && risposta != false) {
    if (risposta == domande[i]) {
      risposta = false;
      i++;
    } else {
      console.log("Game over");
      clearInterval(game);
    }
  }

  // Se tutte le risposte sono esatte allora genera una nuova domanda
  if (i > domande.length) {
    generaDomande = true;
    clickAbilitato = false;
    i = 0;
  }

}, 500);

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

// Riposte utente
$("#game-container").click(function() {
  if (sonoSulBottone === "1" && clickAbilitato === true) {
    console.log("Hai cliccato 1");
    risposta = "1";
  } else if (sonoSulBottone === "2" && clickAbilitato === true) {
    console.log("Hai cliccato 2");
    risposta = "2";
  } else if (sonoSulBottone === "3" && clickAbilitato === true) {
    console.log("Hai cliccato 3");
    risposta = "3";
  } else if (sonoSulBottone === "4" && clickAbilitato === true) {
    console.log("Hai cliccato 4");
    risposta = "4";
  }
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
