    let nombre = prompt("Ingrese su nombre"); 
    console.log("El nombre ingresado es: " + nombre );
    let apellido = prompt("el apellido dell usuario es:")
    console.log("el apellido del usuario es:");
alert("El nombre ingresado es: " + nombre );
alert("¡Hola, " + nombre + " " + apellido + "!");
function calcularInteres() {
    let monto = parseFloat(document.getElementById("monto").value);
    let meses = parseInt(document.getElementById("meses").value);

    if (isNaN(monto) || isNaN(meses) || monto <= 0 || meses <= 0) {
        console.error("Por favor, ingrese valores válidos para monto y meses.");
        return;
    }

    console.log(`Monto ingresado: ${monto}`);
    console.log(`Número de meses: ${meses}`);

    try {
        let resultado = calcularInteresCondicional(monto);
        mostrarResultado(resultado);
    } catch (error) {
        console.error(error.message);
    }
}

function calcularInteresCondicional(monto) {
    let tasaInteres = 0.1;  // Tasa de interés del 10%

    if (monto <= 0) {
        throw new Error("El monto ingresado no es válido");
    } else if (monto <= 1000) {
        console.log("Aplicando tasa de interés estándar");
        return monto * (1 + tasaInteres);
    } else {
        console.log("Aplicando tasa de interés aumentada");
        return monto * (1 + 2 * tasaInteres);
    }
}

function mostrarResultado(resultado) {
    console.log(`Mostrando resultado en la página: ${resultado}`);
    document.getElementById("resultado").innerText = `El monto total a devolverme es de: ${resultado}`;
}
