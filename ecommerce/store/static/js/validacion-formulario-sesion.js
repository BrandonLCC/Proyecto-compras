document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("miFormulario");
    form.addEventListener("submit", e => {
        e.preventDefault(); 

        let textoCorreo = document.getElementById("correo").value;
        let textoContraseña = document.getElementById("contraseña").value;

        let verificarFormatoCORREO = /@gmail.com$/;
        let verificandoCO = verificarFormatoCORREO.test(textoCorreo);

        let trimContraseña = textoContraseña.trim();
        document.getElementById("contraseña").value = trimContraseña;

        let LongitudContraseña = trimContraseña.length;

        if (!verificandoCO) {
            let advertencia = "El Correo " + textoCorreo + " no es válido.";
            document.getElementById('validar').textContent = advertencia;
            document.getElementById("correo").focus();
        }

        else if (trimContraseña === '' || LongitudContraseña < 6 ) {
            let advertencia = "La Contraseña no es válida. debe tener un largo de 6 digitos. Tiene:" + LongitudContraseña;
            document.getElementById('validar').textContent = advertencia;
            document.getElementById("contraseña").focus(); 
        }

        else {
            let advertencia = "¡Cuenta creada exitosamente!";
            document.getElementById('validar').textContent = advertencia;
            alert("Datos del formulario enviados");
            form.submit();

        }
    });
});