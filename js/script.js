$( document ).ready(function() {
// inizio del codie

/*
      variabili globali
*/
var sonoSulBottone = "none";



// gioco va avanti fino al game over

// genera un numero casuale tra 1 e 4 e lo aggiunge al vettori domande

// per ogni elemento in vettori domande:
  // ascolta il click

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
  console.log("Sono sul bottone: ", sonoSulBottone);
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
