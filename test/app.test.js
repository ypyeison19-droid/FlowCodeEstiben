import { saludar, despedir, estadoSistema } from "../src/app.js"

function ejecutarPruebas() {
    let pasadas = 0;
    let fallidas = 0;

    const r1 = saludar("Estiben")
    if (r1.includes("Estiben")) {
        console.log("Test 1 Pasado: funcion saludar en Estiben es correcta")
        pasadas++;
    } else {
        console.log("Test 1 Fallido:", r1);
        fallidas++;
    }

    const actualEstado = estadoSistema();
    if (actualEstado.estado === "activo") {
        console.log("Test 2 :Pasado: estadoSistema() funciona en Estiben");
        pasadas++;
    } else {
        console.log("Test 2 fallido:", estado, "en Estiben");
        fallidas++;
    }
    console.log("\nResultados: " + pasadas + " pasadas, ", + fallidas + "fallidas");
    if (fallidas > 0) process.exit(1); "fallidas"
}
ejecutarPruebas(); 