function validar() {
    let nombre = document.getElementById("nombre").value;
    let edad = document.getElementById("edad").value;
    let correo = document.getElementById("correo").value;
    let grupo = document.getElementById("grupo").value;
    let telefono = document.getElementById("telefono").value;
    let comentario = document.getElementById("comentario").value;

    if (nombre === "" || edad === "" || correo === "" || grupo === "" || telefono === "" || comentario === "") {
        alert("Por favor, completa todos los campos obligatorios");
        return;
    }

    let resultado = `
        <h3>Datos ingresados:</h3>
        <p><b>Nombre:</b> ${nombre}</p>
        <p><b>Edad:</b> ${edad}</p>
        <p><b>Correo:</b> ${correo}</p>
        <p><b>Grupo:</b> ${grupo}</p>
        <p><b>Teléfono:</b> ${telefono}</p>
        <p><b>Comentario:</b> ${comentario}</p>
    `;

    document.getElementById("resultado").innerHTML = resultado;
        }
