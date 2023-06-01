
function resumen() {
    var cantidadInput = document.getElementById("cantidad");
    var totalInput = document.getElementById("total");

    var cantidad = parseFloat(cantidadInput.value);
    var selectedCard = document.querySelector(".card-selected");

    if (cantidad <= 0 || isNaN(cantidad)) {
        alert("Debe seleccionar una cantidad válida");
        cantidadInput.focus();
    }

    if (selectedCard) {
        var value = parseFloat(selectedCard.getAttribute("data-value"));
        var total = cantidad * 200 * value;
        totalInput.value = "Total a Pagar: $" + total.toFixed(2);
    } else {
        var total = cantidad * 200;
        totalInput.value = "Total a Pagar: $" + total.toFixed(2);
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


function validarCantidad() {
    var cantidadInput = document.getElementById("cantidad");
    var cantidad = cantidadInput.value.trim();

    // Eliminar caracteres no numéricos
    cantidad = cantidad.replace(/\D/g, '');

    // Asignar el nuevo valor al input
    cantidadInput.value = cantidad;
}



function redireccionar() {
    // Redirige a otro archivo HTML dentro del sitio web
    window.location.href = 'compra.html';
}

function redireccionarOrador() {
    // Redirige a otro archivo HTML dentro del sitio web
    window.location.href = '#convierteEnOrador';
}
