// Cambiar entre las diferentes secciones

function mostrarSeccion(nombre) {

    const secciones = document.querySelectorAll(".seccion");

    secciones.forEach(function(seccion) {
        seccion.classList.remove("activa");
    });

    const seleccionada = document.getElementById(nombre);

    if (seleccionada) {
        seleccionada.classList.add("activa");
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
}


// Llamada de emergencia

function llamarEmergencia() {

    const confirmar = confirm(
        "¿Quieres llamar al 911?"
    );

    if (confirmar) {
        window.location.href = "tel:911";
    }
}


// Buscar centros de apoyo mediante Google Maps

function buscarCentros() {

    const busqueda =
        "centros de atención violencia de género";

    const url =
        "https://www.google.com/maps/search/" +
        encodeURIComponent(busqueda);

    window.open(url, "_blank");
}


// Evaluar cuestionario

function evaluarTest() {

    let respuestas = 0;

    const preguntas = ["p1", "p2", "p3", "p4"];

    preguntas.forEach(function(pregunta) {

        const respuesta =
            document.querySelector(
                'input[name="' + pregunta + '"]:checked'
            );

        if (respuesta && respuesta.value === "si") {
            respuestas++;
        }

    });


    const resultado =
        document.getElementById("resultado");

    resultado.style.display = "block";


    if (respuestas === 0) {

        resultado.innerHTML = `
            <strong>Resultado:</strong><br>
            No seleccionaste situaciones de violencia en este cuestionario.
            Recuerda que cada situación es diferente y siempre puedes
            buscar información o apoyo si algo te preocupa.
        `;

    } else if (respuestas <= 2) {

        resultado.innerHTML = `
            <strong>Resultado:</strong><br>
            Algunas de tus respuestas pueden relacionarse con
            comportamientos de violencia o control. Considera hablar
            con una persona de confianza y buscar orientación.
        `;

    } else {

        resultado.innerHTML = `
            <strong>Resultado:</strong><br>
            Varias respuestas indican situaciones que pueden ser
            señales de violencia. Busca apoyo de una persona de
            confianza o de un servicio especializado.
            
            <br><br>

            Si existe peligro inmediato, utiliza el servicio de
            emergencias correspondiente.
        `;
    }

}


// Mensaje de bienvenida en consola

console.log(
    "Red de Apoyo - Aplicación educativa"
);