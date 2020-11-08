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
      SUONI
*/
var play1 = new Audio ('audio/1-new.wav');
var play2 = new Audio ('audio/2-new.wav');
var play3 = new Audio ('audio/3-new.wav');
var play4 = new Audio ('audio/4-new.wav');
var playFail = new Audio ('audio/fail.wav');

/*
                GAME
*/
var generaDomande = true;
var domandaPronta = false;
var clickAbilitato = false;
var animazioneAttiva = false;
var controlloAnimazione;
i = 0;
j = 0;

/*
                stati iniziali visibili/invisibili
*/
$(".circle .testo").hide();
$(".circle .wrong").hide();
$("#game-container").removeClass("invisible");

// al click il gioco parte
$(".circle .play").click(function() {
  $(".circle .play").hide();
  $(".circle .testo").show();
  var game = setInterval(function(){
    // Genera la domanda nuova solo se generaDomande = true.
    // all'inizio a prescindere, dopo solo se tutte le risposte sono state date.
    if (generaDomande) {
      setTimeout(function(){$(".button").removeClass("clickable");}, 1000);
      domande.push(randomNumber(4));
      console.log(domande);
      generaDomande = false;


    //animazione domande solo se l'animazione non è già in corso
      if (animazioneAttiva === false) {
        j = 0;
        animazioneAttiva = true;
        controlloAnimazione = setInterval(function(){
           animazione();
        }, 1000);
      }
    }
      // Dentro la funzione animazoine queste variabili sono settate così
      // clickAbilitato = true;
      // domandaPronta = true;


    //controlla la risposta solo se l'animazione delle domande ha finito,
    // e solo dopo aver aspettato che l'utente da la risposposta ad ogni iterazione di i.
    if (domandaPronta && risposta != false) {
      if (risposta == domande[i]) {
        risposta = false;
        i++;
      } else {
        console.log("Game over");
        playFail.play();
        clickAbilitato = false;
        $(".circle .testo").hide();
        $(".circle .wrong").show();
        clearInterval(game);
      }
    }

    // Se tutte le risposte sono esatte allora genera una nuova domanda
    if (i === domande.length) {
      generaDomande = true;
      domandaPronta = false;
      clickAbilitato = false;
      animazioneAttiva = false;
      i = 0;
      contaRound++;
      $(".circle .testo").text(contaRound);
    }

  }, 100);
});

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

//piccola animazione al click
$("#game-container .button").click(function(){
  if (clickAbilitato === true) {
    $(this).addClass("userclick");
    $(this).animate({
      left: 0 //mi serve solo come timer
    }, 150, function() {
      // Animation complete.
      $(this).removeClass("userclick");
    });
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

function animazione(){

  clickAbilitato = false;
  if (domande[j] === 1) {

    play1.play();
    $(".button.b-1").animate({
      left: 0 //mi serve solo come timer
    }, 0, function() {
      // Animation complete.
      console.log("aggiunta classe");
      $(".button.b-1").addClass("playing");
    });

    $(".button.b-1").animate({
      left: 0 //mi serve solo come timer
    }, 500, function() {
      // Animation complete.
      $(".button.b-1").removeClass("playing");
    });

    $(".button.b-1").animate({
      left: 0 //mi serve solo come timer
    }, 0, function() {
      console.log("finito");
      j++;
    });

  }

  if (domande[j] === 2) {

    play2.play();
    $(".button.b-2").animate({
      left: 0 //mi serve solo come timer
    }, 0, function() {
      // Animation complete.
      console.log("aggiunta classe");
      $(".button.b-2").addClass("playing");
    });

    $(".button.b-2").animate({
      left: 0 //mi serve solo come timer
    }, 500, function() {
      // Animation complete.
      $(".button.b-2").removeClass("playing");
    });

    $(".button.b-2").animate({
      left: 0 //mi serve solo come timer
    }, 0, function() {
      console.log("finito");
      j++;
    });

  }

  if (domande[j] === 3) {

    play3.play();
    $(".button.b-3").animate({
      left: 0 //mi serve solo come timer
    }, 0, function() {
      // Animation complete.
      console.log("aggiunta classe");
      $(".button.b-3").addClass("playing");
    });

    $(".button.b-3").animate({
      left: 0 //mi serve solo come timer
    }, 500, function() {
        // Animation complete.
      $(".button.b-3").removeClass("playing");
    });

    $(".button.b-3").animate({
      left: 0 //mi serve solo come timer
    }, 0, function() {
      console.log("finito");
      j++;
    });

  }

  if (domande[j] === 4) {

    play4.play();
    $(".button.b-4").animate({
      left: 0 //mi serve solo come timer
    }, 0, function() {
      // Animation complete.
      console.log("aggiunta classe");
      $(".button.b-4").addClass("playing");
    });

    $(".button.b-4").animate({
      left: 0 //mi serve solo come timer
    }, 500, function() {
      // Animation complete.
      $(".button.b-4").removeClass("playing");
    });
    $(".button.b-4").animate({
      left: 0 //mi serve solo come timer
    }, 0, function() {
      console.log("finito");
      j++;
    });

  }

  if (j == domande.length) {
    clickAbilitato = true;
    domandaPronta = true;
    console.log("animazione finita");
    // aggiungo la classe clickable ai bottoni per attivare l'hover
    $(".button").addClass("clickable");
    clearInterval(controlloAnimazione);
  }
}

// fine document ready
});
