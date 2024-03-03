document.addEventListener("DOMContentLoaded", function () {
    const tablaBitacora = document.getElementById("tabla-bitacora");
    const filtro = document.getElementById("filtro");

    const eventos = [
        {
            Codigo: "OCT01",
            Fecha: "07/10/2023",
            "Numero Catastral": "C12345",
            Ubicacion: "Calle Principal",
            "Nombre Contribuyente": "Juan Pérez",
            "Numero Identidad": "1234567890",
            "Tipo de Trabajo": "Mantenimiento",
            Responsables: "Equipo A",
            "Resolucion de Trabajo": "RT123",
            Observaciones: "Sin observaciones"
        },
        {
            Codigo: "OCT02",
            Fecha: "07/10/2023",
            "Numero Catastral": "C12388",
            Ubicacion: "Calle Principal",
            "Nombre Contribuyente": "Milo Magallanes",
            "Numero Identidad": "12345123456",
            "Tipo de Trabajo": "Mantenimiento",
            Responsables: "Equipo B",
            "Resolucion de Trabajo": "RT13",
            Observaciones: "Sin observaciones"
        },
        {
            Codigo: "OCT03",
            Fecha: "2023-10-07",
            "Numero Catastral": "C12389",
            Ubicacion: "Calle Principal",
            "Nombre Contribuyente": "Canela Magallanes",
            "Numero Identidad": "12345123456",
            "Tipo de Trabajo": "Mantenimiento",
            Responsables: "Equipo B",
            "Resolucion de Trabajo": "RT13",
            Observaciones: "Sin observaciones"
        },
        {
            Codigo: "OCT04",
            Fecha: "2023-10-07",
            "Numero Catastral": "C12389",
            Ubicacion: "Calle Principal",
            "Nombre Contribuyente": "Canela Magallanes",
            "Numero Identidad": "12345123456",
            "Tipo de Trabajo": "Mantenimiento",
            Responsables: "Equipo B",
            "Resolucion de Trabajo": "RT13",
            Observaciones: "Sin observaciones"
        },
        {
            Codigo: "OCT05",
            Fecha: "08/10/2023",
            "Numero Catastral": "C12345",
            Ubicacion: "Calle Principal",
            "Nombre Contribuyente": "Juan Pérez",
            "Numero Identidad": "1234567890",
            "Tipo de Trabajo": "Mantenimiento",
            Responsables: "Equipo A",
            "Resolucion de Trabajo": "RT123",
            Observaciones: "Sin observaciones"
        },
        // Agrega más eventos aquí
    ];

    function actualizarTabla() {
        const filtroValor = filtro.value.toLowerCase();
        const tbody = tablaBitacora.querySelector("tbody");
    
        // Limpia la tabla antes de insertar datos nuevos
        tbody.innerHTML = "";
    
        for (const evento of eventos) {
            for (const campo in evento) {
                const valorCampo = String(evento[campo]); // Convierte el valor a una cadena
                if (valorCampo.toLowerCase().includes(filtroValor)) {
                    const row = document.createElement("tr");
                    for (const campoEvento in evento) {
                        const cell = document.createElement("td");
                        cell.textContent = evento[campoEvento];
                        row.appendChild(cell);
                    }
                    tbody.appendChild(row);
                    break; // Detiene la búsqueda después de encontrar la primera coincidencia en cualquier campo
                }
            }
        }
    }
    
    

    filtro.addEventListener("input", actualizarTabla); // Usa "input" para buscar en tiempo real mientras se escribe
    actualizarTabla(); // Llena la tabla al cargar la página
});




