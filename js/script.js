// Consegna:
// Dato un array di oggetti letterali con:
//  - url dell’immagine
//  - titolo
//  - descrizione
// Creare un carosello come nella foto allegata.
// Milestone 0:
// Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.
// Milestone 1:
// Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
// Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
// Milestone 2:
// Aggiungere il **ciclo infinito** del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso sinistra.
// BONUS 1:
// Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.
// BONUS 2:
// Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.
// BONUS 3:
// Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.


const arrayImages = ["img/01.webp", "img/02.webp", "img/03.webp", "img/04.webp", "img/05.webp"];
const itemsContainer = document.querySelector (".slider-items");


for (let i = 0;  i < arrayImages.length; i++) {
    const currentImage = arrayImages [i];      
    console.log(currentImage);
// Concateno con un template literal assegnato a una variabile
    const sliderItems = `<div class="item"> <img src="${currentImage}"> </div>`;
    itemsContainer.innerHTML += sliderItems;
}

// Immagine di partenza
const arrayItems = document.getElementsByClassName("item");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let activeItemIndex = 0;
arrayItems[activeItemIndex].classList.add("active");


// Gestisco bottone next (basso) e gli assegno EventListener per il click
nextBtn.addEventListener("click", function () {
    clearInterval(interval);
    // rimuovo la classe "active" per passare alla slide successiva 
    arrayItems[activeItemIndex].classList.remove("active");

    if(activeItemIndex === arrayItems.length-1) {
        activeItemIndex = 0;
    } else {
    // passo alla slide successiva
        activeItemIndex++;
    }
    
    // una volta passato alla slide successivo, gli assegno classe "active"
    arrayItems[activeItemIndex].classList.add("active");
    console.log(arrayItems);
    setInterval(autoPlay, 3000);
});

// Gestisco bottone prev (alto) e gli assegno EventListener per il click
prevBtn.addEventListener("click", function () {
    clearInterval(interval);
    // rimuovo la classe "hidden" per passare alla slide successiva 
    nextBtn.classList.remove("hidden");

    arrayItems[activeItemIndex].classList.remove("active");

    if(activeItemIndex === 0) {
        activeItemIndex = arrayItems.length-1;
    } else {
    // passo alla slide precedente
        activeItemIndex--;
    }
    
    // una volta passato alla slide precedente, gli assegno classe "active"
    arrayItems[activeItemIndex].classList.add("active");
    setInterval(autoPlay, 3000);    
});

// COMANDI DI START E STOP ALL'HOVER
document.querySelector(".slider-items").addEventListener("mouseover", stopCarousel);
document.querySelector(".slider-items").addEventListener("mouseout", restartCarousel);



// FUNZIONI TIMING

let interval = setInterval(autoPlay, 3000)

function autoPlay() {
    
    prevBtn.classList.remove("hidden");
    // rimuovo la classe "active" per passare alla slide successiva 
    arrayItems[activeItemIndex].classList.remove("active");

    if(activeItemIndex === arrayItems.length-1) {
        activeItemIndex = 0;
    } else {
        activeItemIndex++;
    }
    // una volta passato alla slide successivo, gli assegno classe "active"
    arrayItems[activeItemIndex].classList.add("active");
    console.log(arrayItems);


console.log(arrayItems[activeItemIndex]);
}

function stopCarousel() {
    clearInterval(interval);
}

function restartCarousel() {
    setInterval(autoPlay, 3000);
}

