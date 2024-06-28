document.addEventListener("DOMContentLoaded", function () {
    const tablaBitacora = document.getElementById("tabla-bitacora");
    const filtro1 = document.getElementById("filtro1");
    const filtro2 = document.getElementById("filtro2");
    const totalRegistros = document.getElementById("total-registros");

    const registros = [
        { CodFamilia: "GIM001", Nombre: "Juan Pérez", DNI: "12345678A", TelefonoMovil: "600123456", FechaNac: "01/01/1980", Edad: 44, Etapa: "Adulto", Observaciones: "Ninguna" },
            { CodFamilia: "GIM001", Nombre: "María García", DNI: "87654321B", TelefonoMovil: "600654321", FechaNac: "05/03/1990", Edad: 34, Etapa: "Adulto", Observaciones: "Ninguna" },
            { CodFamilia: "GIM001", Nombre: "Nombre3", DNI: "DNI00000003X", TelefonoMovil: "600000003", FechaNac: "", Edad: 12, Etapa: "Niño", Observaciones: "Ninguna" },
            { CodFamilia: "GIM002", Nombre: "Nombre4", DNI: "DNI00000004X", TelefonoMovil: "600000004", FechaNac: "01/01/1984", Edad: 40, Etapa: "Adulto", Observaciones: "Ninguna" },
            { CodFamilia: "GIM002", Nombre: "Nombre5", DNI: "DNI00000005X", TelefonoMovil: "600000005", FechaNac: "01/01/1985", Edad: 39, Etapa: "Adulto", Observaciones: "Ninguna" },
            { CodFamilia: "GIM002", Nombre: "Nombre6", DNI: "DNI00000006X", TelefonoMovil: "600000006", FechaNac: "", Edad: 5, Etapa: "Niño", Observaciones: "Ninguna" },
            { CodFamilia: "GIM002", Nombre: "Nombre7", DNI: "DNI00000007X", TelefonoMovil: "600000007", FechaNac: "", Edad: 8, Etapa: "Niño", Observaciones: "Ninguna" },
            { CodFamilia: "GIM003", Nombre: "Nombre8", DNI: "DNI00000008X", TelefonoMovil: "600000008", FechaNac: "01/01/1988", Edad: 36, Etapa: "Adulto", Observaciones: "Ninguna" },
            { CodFamilia: "GIM003", Nombre: "Nombre9", DNI: "DNI00000009X", TelefonoMovil: "600000009", FechaNac: "01/01/1989", Edad: 35, Etapa: "Adulto", Observaciones: "Ninguna" },
            { CodFamilia: "GIM003", Nombre: "Nombre10", DNI: "DNI00000010X", TelefonoMovil: "600000010", FechaNac: "", Edad: 1, Etapa: "Niño", Observaciones: "Ninguna" },
            { CodFamilia: "GIM003", Nombre: "Nombre11", DNI: "DNI00000011X", TelefonoMovil: "600000011", FechaNac: "01/01/1991", Edad: 11, Etapa: "Niño", Observaciones: "Ninguna" },
            { CodFamilia: "GIM004", Nombre: "Nombre12", DNI: "DNI00000012X", TelefonoMovil: "600000012", FechaNac: "01/01/1992", Edad: 32, Etapa: "Adulto", Observaciones: "Ninguna" },
            { CodFamilia: "GIM004", Nombre: "Nombre13", DNI: "DNI00000013X", TelefonoMovil: "600000013", FechaNac: "01/01/1993", Edad: 31, Etapa: "Adulto", Observaciones: "Ninguna" },
            { CodFamilia: "GIM004", Nombre: "Nombre14", DNI: "DNI00000014X", TelefonoMovil: "600000014", FechaNac: "01/01/1994", Edad: 30, Etapa: "Adulto", Observaciones: "Ninguna" },
            { CodFamilia: "GIM004", Nombre: "Nombre15", DNI: "DNI00000015X", TelefonoMovil: "600000015", FechaNac: "", Edad: 7, Etapa: "Niño", Observaciones: "Ninguna" },
            { CodFamilia: "GIM004", Nombre: "Nombre16", DNI: "DNI00000016X", TelefonoMovil: "600000016", FechaNac: "01/01/1996", Edad: 15, Etapa: "Adolecente", Observaciones: "Ninguna" },
            { CodFamilia: "GIM005", Nombre: "Nombre17", DNI: "DNI00000017X", TelefonoMovil: "600000017", FechaNac: "01/01/1997", Edad: 27, Etapa: "Adulto", Observaciones: "Ninguna" },
            { CodFamilia: "GIM005", Nombre: "Nombre18", DNI: "DNI00000018X", TelefonoMovil: "600000018", FechaNac: "01/01/1998", Edad: 26, Etapa: "Adulto", Observaciones: "Ninguna" },
            { CodFamilia: "GIM005", Nombre: "Nombre19", DNI: "DNI00000019X", TelefonoMovil: "600000019", FechaNac: "", Edad: 2, Etapa: "Niño", Observaciones: "Ninguna" },
            { CodFamilia: "GIM005", Nombre: "Nombre19", DNI: "DNI00000019X", TelefonoMovil: "600000019", FechaNac: "", Edad: 2, Etapa: "Niño", Observaciones: "Ninguna" },            
            { CodFamilia: "GIM005", Nombre: "María García", DNI: "87654321B", TelefonoMovil: "600654321", FechaNac: "05/03/1990", Edad: 34, Etapa: "Adulto", Observaciones: "Ninguna" },
            { CodFamilia: "BON001", Nombre: "Juan Pérez", DNI: "12345678A", TelefonoMovil: "600123456", FechaNac: "01/01/1980", Edad: 44, Etapa: "Adulto", Observaciones: "Ninguna" },
            { CodFamilia: "BON002", Nombre: "Nombre3", DNI: "DNI00000003X", TelefonoMovil: "600000003", FechaNac: "01/01/1983", Edad: 41, Etapa: "Adulto", Observaciones: "Ninguna" },
            { CodFamilia: "BON003", Nombre: "Nombre4", DNI: "DNI00000004X", TelefonoMovil: "600000004", FechaNac: "01/01/1984", Edad: 40, Etapa: "Adulto", Observaciones: "Ninguna" },
            { CodFamilia: "BON005", Nombre: "Nombre5", DNI: "DNI00000005X", TelefonoMovil: "600000005", FechaNac: "01/01/1985", Edad: 39, Etapa: "Adulto", Observaciones: "Ninguna" },
            { CodFamilia: "BON006", Nombre: "Nombre6", DNI: "DNI00000006X", TelefonoMovil: "600000006", FechaNac: "01/01/1986", Edad: 38, Etapa: "Adulto", Observaciones: "Ninguna" },
            { CodFamilia: "BON007", Nombre: "Nombre7", DNI: "DNI00000007X", TelefonoMovil: "600000007", FechaNac: "01/01/1987", Edad: 37, Etapa: "Adulto", Observaciones: "Ninguna" },
            { CodFamilia: "BON008", Nombre: "Nombre8", DNI: "DNI00000008X", TelefonoMovil: "600000008", FechaNac: "01/01/1988", Edad: 36, Etapa: "Adulto", Observaciones: "Ninguna" },
            { CodFamilia: "BON009", Nombre: "Nombre9", DNI: "DNI00000009X", TelefonoMovil: "600000009", FechaNac: "01/01/1989", Edad: 35, Etapa: "Adulto", Observaciones: "Ninguna" },
            { CodFamilia: "BON010", Nombre: "Nombre10", DNI: "DNI00000010X", TelefonoMovil: "600000010", FechaNac: "01/01/1990", Edad: 34, Etapa: "Adulto", Observaciones: "Ninguna" },
            { CodFamilia: "BON011", Nombre: "Nombre11", DNI: "DNI00000011X", TelefonoMovil: "600000011", FechaNac: "01/01/1991", Edad: 33, Etapa: "Adulto", Observaciones: "Ninguna" },
            { CodFamilia: "BON012", Nombre: "Nombre12", DNI: "DNI00000012X", TelefonoMovil: "600000012", FechaNac: "01/01/1992", Edad: 32, Etapa: "Adulto", Observaciones: "Ninguna" },
            { CodFamilia: "BON013", Nombre: "Nombre13", DNI: "DNI00000013X", TelefonoMovil: "600000013", FechaNac: "01/01/1993", Edad: 31, Etapa: "Adulto", Observaciones: "Ninguna" },
            { CodFamilia: "BON014", Nombre: "Nombre14", DNI: "DNI00000014X", TelefonoMovil: "600000014", FechaNac: "01/01/1994", Edad: 30, Etapa: "Adulto", Observaciones: "Ninguna" },
            { CodFamilia: "BON015", Nombre: "Nombre15", DNI: "DNI00000015X", TelefonoMovil: "600000015", FechaNac: "01/01/1995", Edad: 29, Etapa: "Adulto", Observaciones: "Ninguna" },
        // Agrega más registros aquí
    ];

    function actualizarTabla() {
        const filtro1Valor = filtro1.value.toLowerCase();
        const filtro2Valor = filtro2.value.toLowerCase();
        const tbody = tablaBitacora.querySelector("tbody");

        // Limpia la tabla antes de insertar datos nuevos
        tbody.innerHTML = "";

        let totalFiltrados = 0;

        for (const registro of registros) {
            const coincideFiltro1 = Object.values(registro).some(valor =>
                String(valor).toLowerCase().includes(filtro1Valor)
            );
            const coincideFiltro2 = Object.values(registro).some(valor =>
                String(valor).toLowerCase().includes(filtro2Valor)
            );

            if (coincideFiltro1 && coincideFiltro2) {
                const row = document.createElement("tr");
                for (const campo in registro) {
                    const cell = document.createElement("td");
                    cell.textContent = registro[campo];
                    row.appendChild(cell);
                }
                tbody.appendChild(row);
                totalFiltrados++;
            }
        }

        // Actualiza el total de registros filtrados
        totalRegistros.textContent = totalFiltrados;
    }

    filtro1.addEventListener("input", actualizarTabla);
    filtro2.addEventListener("input", actualizarTabla);
    actualizarTabla(); // Llena la tabla al cargar la página
});
