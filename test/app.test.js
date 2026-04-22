import { saludar, despedir, estadoSistema, sumar, restar, healthCheck } from "../src/app.js";

function ejecutarPruebas() {
    let pasadas = 0;
    let fallidas = 0;

    // Test 1: Saludar
    const r1 = saludar("Estiben");
    if (r1.includes("Estiben")) {
        console.log("Test 1 Pasado: función saludar correcta");
        pasadas++;
    } else {
        console.log("Test 1 Fallido:", r1);
        fallidas++;
    }

    // Test 2: estadoSistema
    const actualEstado = estadoSistema();
    if (actualEstado.estado === "activo") {
        console.log("Test 2 Pasado: estadoSistema() funciona");
        pasadas++;
    } else {
        console.log("Test 2 Fallido:", actualEstado);
        fallidas++;
    }

    // Test 3: Sumar
    const resultadoSuma = sumar(5, 10);
    if (resultadoSuma === 15) {
        console.log("Test 3 Pasado: sumar(5,10) = 15");
        pasadas++;
    } else {
        console.log("Test 3 Fallido:", resultadoSuma);
        fallidas++;
    }

    // Test 4: Restar
    const resultadoResta = restar(439, 76);
    if (resultadoResta === 363) {
        console.log("Test 4 Pasado: restar(439,76) = 363");
        pasadas++;
    } else {
        console.log("Test 4 Fallido:", resultadoResta);
        fallidas++;
    }

    // Test 5: healthCheck
    const health = healthCheck();
    if (health.status === "ok") {
        console.log("Test 5 Pasado: healthCheck correcto");
        pasadas++;
    } else {
        console.log("Test 5 Fallido:", health);
        fallidas++;
    }

    console.log(`\nResultados: ${pasadas} pasadas, ${fallidas} fallidas`);

    if (fallidas > 0) process.exit(1);
}

ejecutarPruebas();