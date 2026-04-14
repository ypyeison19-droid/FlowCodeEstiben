<<<<<<< HEAD
import { saludar, despedir, estadoSistema , sumar , restar } from "../src/app.js"
=======
import { saludar, despedir, estadoSistema , sumar , healthCheck } from "../src/app.js"
>>>>>>> 4e279c8 (chore(api): funcion healtchCheck corregida)

function ejecutarPruebas() {
    let pasadas = 0;
    let fallidas = 0;

    //Test 1 : Saludar
    const r1 = saludar("Estiben")
    if (r1.includes("Estiben")) {
        console.log("Test 1 Pasado: funcion saludar en Estiben es correcta")
        pasadas++;
    } else {
        console.log("Test 1 Fallido:", r1);
        fallidas++;
    }

    //Test 2 : estadoSistema
    const actualEstado = estadoSistema();
    if (actualEstado.estado === "activo") {
        console.log("Test 2 :Pasado: estadoSistema() funciona en Estiben");
        pasadas++;
    } else {
        console.log("Test 2 fallido:", estado, "en Estiben");
        fallidas++;
    }
    // Test 3: Sumar
  const resultadoSuma = sumar(5, 10);
  if (resultadoSuma === 15) {
    console.log("Test 3 Pasado: funcion sumar(5, 10) es 15");
    pasadas++;
  } else {
    console.log("Test 3 Fallido: se esperaba 15 pero dio", resultadoSuma);
    fallidas++;
  }
<<<<<<< HEAD
    // Test 4 : Restar 
const resultadoResta = restar(439 , 76) ;
if (resultadoResta === 363) {
    console.log("Test 4 Pasado: funcion restar(439, 76) es 363");
    pasadas++;
  } else {
    console.log("Test 4 Fallido: se esperaba 15 pero dio", resultadoResta);
    fallidas++;
  }


=======
  //Test 4 : 
  const health = healthCheck();
  if (health.status === 'ok'){
    console.log('Test healthCheck pasado');
    pasadas++; 
  } else {
    console.log('Test healtCheck fallido', health);
    fallidas++;
  }

>>>>>>> 4e279c8 (chore(api): funcion healtchCheck corregida)
    console.log("\nResultados: " + pasadas + " pasadas, ", + fallidas + "fallidas");
    if (fallidas > 0) process.exit(1); "fallidas"
}
ejecutarPruebas(); 
