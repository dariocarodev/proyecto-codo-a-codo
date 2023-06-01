

function resumen() {
    var cantidadInput = document.getElementById("cantidad");
    var totalInput = document.getElementById("total");

    var cantidad = parseFloat(cantidadInput.value);
    var selectedCard = document.querySelector(".card-selected");

    if (selectedCard) {
        var value = parseFloat(selectedCard.getAttribute("data-value"));
        var total = cantidad * 200 * value;
        totalInput.value = "Total a Pagar: $" + total.toFixed(2);
    } else {
        totalInput.value = "Total a Pagar: $0.00";
    }
}

function selectCard(card) {
    // Obtener todos los elementos card
    var cards = document.querySelectorAll(".card");

    cards.forEach(function(card) {
        card.classList.remove("card-selected");
    });

    card.classList.add("card-selected");
}

function selectCard(card) {
    var cards = document.querySelectorAll(".card");
    var categoriaInput = document.getElementById("categoria");

    cards.forEach(function(card) {
        card.classList.remove("card-selected");
    });

    card.classList.add("card-selected");
    categoriaInput.value = card.id;
}


