
export function saludar (nombre){
return "Hola " + nombre + ", bienvenido a aplicacion de Estiben Flow!" ;
}

export function despedir (nombre) {
return "Hatsa pronto," + nombre + "¡Estiben Flow!";
}
export function sumar(a, b) {
  return a + b;
}
export function estadoSistema() {
    return {
        message: "Sistema funcionando correctamente"
    };
}

export function sumar(a, b) {
    return a + b;
}

export function restar(a, b) {
    return a - b;
}

export function healthCheck() {
    return {
        status: 'ok',
        timestamp: new Date().toISOString(),
        servicio: 'StreamFlow API',
        version: '1.0.0'
    };
}