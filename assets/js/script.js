function calculate(){
    //Obtenemos elementos del DOM de la seccion notebook
    const quantity = document.querySelector("#quantity");
    const color = document.querySelector("#color");
    //console.log(color);

    //Obtenemos elementos del DOM de la seccion resumen
    const total = document.querySelector("#total");
    const quantitySummary = document.querySelector("#quantity-summary");
    const colorSummary = document.querySelector("#color-summary");

    //Manipulamos elementos del DOM con los valores y colores correspondientes
    total.innerText = '$' + (quantity.value * 1299000);
    quantitySummary.innerText = quantity.value;
    colorSummary.style.backgroundColor = color.value;
}