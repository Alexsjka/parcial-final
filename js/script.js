const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function (e) {

    e.preventDefault();

    const nombre =
        document.getElementById("nombre").value.trim();

    const correo =
        document.getElementById("correo").value.trim();

    const telefono =
        document.getElementById("telefono").value.trim();

    const sabor =
        document.getElementById("sabor").value;



    const regexNombre =
        /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]{3,40}$/;

    const regexCorreo =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const regexTelefono =
        /^[0-9]{10}$/;

    if (!regexNombre.test(nombre)) {

        alert("Ingrese un nombre válido");
        return;
    }

    if (!regexCorreo.test(correo)) {

        alert("Ingrese un correo válido");
        return;
    }

    if (!regexTelefono.test(telefono)) {

        alert("El teléfono debe tener 10 dígitos");
        return;
    }

    if (sabor === "") {

        alert("Seleccione un sabor");
        return;
    }

    

    localStorage.setItem("nombre", nombre);
    localStorage.setItem("correo", correo);
    localStorage.setItem("telefono", telefono);
    localStorage.setItem("sabor", sabor);



    window.location.href = "usuarios.html";

});