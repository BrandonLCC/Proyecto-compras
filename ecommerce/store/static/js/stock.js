document.addEventListener("DOMContentLoaded", function() { 
    let contador = 1;
    
    // Obtener el elemento de texto donde se mostrará el contador
    let ValorContador = document.getElementById("cantidad-producto");

    let btnSuma = document.getElementById("btn-suma");
    let btnResta = document.getElementById("btn-resta");
    let botonAgregarCarro = document.getElementById("id-agregar-al-carro");


        btnSuma.addEventListener('click', () => {
            if (contador >= 5) {
                contador=5;
            } else {
                contador++;
            }
            ValorContador.textContent = contador;
        });
        

        btnResta.addEventListener('click', () => {
            if (contador > 1) {
                contador--;
            } else {
                contador = 1;
            }
            ValorContador.textContent = contador;
        });

        botonAgregarCarro.addEventListener('click', () => {
            document.getElementById("cantidad-producto-final").textContent = contador;

        });

        
});
