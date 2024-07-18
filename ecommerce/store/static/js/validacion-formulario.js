document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("miFormulario");
    form.addEventListener("submit", e => {
        e.preventDefault(); 

        let textoNombre = document.getElementById("nombre").value;
        let textoCorreo = document.getElementById("correo").value;
        let textoContraseña = document.getElementById("contraseña").value;

        let verificarFormatoCORREO = /@gmail.com$/;
        let verificandoCO = verificarFormatoCORREO.test(textoCorreo);

        let nombreTrim = textoNombre.trim();
        document.getElementById("nombre").value = nombreTrim;

        let trimContraseña = textoContraseña.trim();
        document.getElementById("contraseña").value = trimContraseña;

        let LongitudContraseña = trimContraseña.length;

        if (nombreTrim === '') {
            let advertencia = "Ingrese su nombre.";
            document.getElementById('validar').textContent = advertencia;
            document.getElementById("nombre").focus();
        } else if (!verificandoCO) {
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