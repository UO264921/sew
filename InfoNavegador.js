// Objeto para manejar la informacion
var informacion = new Object()

// Se carga el nombre del navegador
informacion.nombre = navigator.appName;
informacion.idioma = navigator.language;
informacion.version = navigator.appVersion;
informacion.plataforma = navigator.platform;
informacion.vendedor = navigator.vendor;
informacion.agente = navigator.userAgent;
informacion.javaActivo = navigator.javaEnabled();