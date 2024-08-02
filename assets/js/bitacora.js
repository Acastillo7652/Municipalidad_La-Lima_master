document.addEventListener("DOMContentLoaded", function () {
    const tablaBitacora = document.getElementById("tabla-bitacora");
    const filtro1 = document.getElementById("filtro1");
    const filtro2 = document.getElementById("filtro2");
    const totalRegistros = document.getElementById("total-registros");

    const registros = [
        { CodFamilia: "GIM001", Nombre: "Juan Aramendia Arraizola", DNI: "0000000000000", TelefonoMovil: "600123456", FechaNac: "01/01/1980", Edad: 44, Etapa: "Adulto", Comunidad: "La Lima", Albergue: "Gimnasio M.", Observaciones: "Ninguna" },
            { CodFamilia: "GIM001", Nombre: "María García", DNI: "87654321B", TelefonoMovil: "600654321", FechaNac: "05/03/1990", Edad: 34, Etapa: "Adulto", Comunidad: "La Lima", Albergue: "Gimnasio M.", Observaciones: "Ninguna" },
            { CodFamilia: "GIM001", Nombre: "Nombre3", DNI: "DNI00000003X", TelefonoMovil: "600000003", FechaNac: "", Edad: 12, Etapa: "Niño", Comunidad: "La Lima", Albergue: "Gimnasio M.", Observaciones: "Ninguna" },
            { CodFamilia: "GIM002", Nombre: "Nombre4", DNI: "DNI00000004X", TelefonoMovil: "600000004", FechaNac: "01/01/1984", Edad: 40, Etapa: "Adulto", Comunidad: "La Lima", Albergue: "Gimnasio M.", Observaciones: "Ninguna" },
            { CodFamilia: "GIM002", Nombre: "Nombre5", DNI: "DNI00000005X", TelefonoMovil: "600000005", FechaNac: "01/01/1985", Edad: 39, Etapa: "Adulto", Comunidad: "La Lima", Albergue: "Gimnasio M.", Observaciones: "Ninguna" },
            { CodFamilia: "GIM002", Nombre: "Nombre6", DNI: "DNI00000006X", TelefonoMovil: "600000006", FechaNac: "", Edad: 5, Etapa: "Niño", Comunidad: "La Lima", Albergue: "Gimnasio M.", Observaciones: "Ninguna" },
            { CodFamilia: "GIM002", Nombre: "Nombre7", DNI: "DNI00000007X", TelefonoMovil: "600000007", FechaNac: "", Edad: 8, Etapa: "Niño", Comunidad: "La Lima", Albergue: "Gimnasio M.", Observaciones: "Ninguna" },
            { CodFamilia: "GIM003", Nombre: "Nombre8", DNI: "DNI00000008X", TelefonoMovil: "600000008", FechaNac: "01/01/1988", Edad: 36, Etapa: "Adulto", Comunidad: "La Lima", Albergue: "Gimnasio M.", Observaciones: "Ninguna" },
            { CodFamilia: "GIM003", Nombre: "Nombre9", DNI: "DNI00000009X", TelefonoMovil: "600000009", FechaNac: "01/01/1989", Edad: 35, Etapa: "Adulto", Comunidad: "La Lima", Albergue: "Gimnasio M.", Observaciones: "Ninguna" },
            { CodFamilia: "GIM003", Nombre: "Nombre10", DNI: "DNI00000010X", TelefonoMovil: "600000010", FechaNac: "", Edad: 1, Etapa: "Niño", Comunidad: "La Lima", Albergue: "Gimnasio M.", Observaciones: "Ninguna" },
            { CodFamilia: "GIM003", Nombre: "Nombre11", DNI: "DNI00000011X", TelefonoMovil: "600000011", FechaNac: "01/01/1991", Edad: 11, Etapa: "Niño", Comunidad: "La Lima", Albergue: "Gimnasio M.", Observaciones: "Ninguna" },
            { CodFamilia: "GIM004", Nombre: "Nombre12", DNI: "DNI00000012X", TelefonoMovil: "600000012", FechaNac: "01/01/1992", Edad: 32, Etapa: "Adulto",Comunidad: "La Lima", Albergue: "Gimnasio M.", Observaciones: "Ninguna" },
            { CodFamilia: "GIM004", Nombre: "Nombre13", DNI: "DNI00000013X", TelefonoMovil: "600000013", FechaNac: "01/01/1993", Edad: 31, Etapa: "Adulto", Comunidad: "La Lima", Albergue: "Gimnasio M.", Observaciones: "Ninguna" },
            { CodFamilia: "GIM004", Nombre: "Nombre14", DNI: "DNI00000014X", TelefonoMovil: "600000014", FechaNac: "01/01/1994", Edad: 30, Etapa: "Adulto", Comunidad: "La Lima", Albergue: "Gimnasio M.", Observaciones: "Ninguna" },
            { CodFamilia: "GIM004", Nombre: "Nombre15", DNI: "DNI00000015X", TelefonoMovil: "600000015", FechaNac: "", Edad: 7, Etapa: "Niño", Comunidad: "La Lima", Albergue: "Gimnasio M.", Observaciones: "Ninguna" },
            { CodFamilia: "GIM004", Nombre: "Nombre16", DNI: "DNI00000016X", TelefonoMovil: "600000016", FechaNac: "01/01/1996", Edad: 15, Etapa: "Adolecente", Comunidad: "La Lima", Albergue: "Gimnasio M.", Observaciones: "Ninguna" },
            { CodFamilia: "GIM005", Nombre: "Nombre17", DNI: "DNI00000017X", TelefonoMovil: "600000017", FechaNac: "01/01/1997", Edad: 27, Etapa: "Adulto", Comunidad: "La Lima", Albergue: "Gimnasio M.", Observaciones: "Ninguna" },
            { CodFamilia: "GIM005", Nombre: "Nombre18", DNI: "DNI00000018X", TelefonoMovil: "600000018", FechaNac: "01/01/1998", Edad: 26, Etapa: "Adulto", Comunidad: "La Lima", Albergue: "Gimnasio M.", Observaciones: "Ninguna" },
            { CodFamilia: "GIM005", Nombre: "Nombre19", DNI: "DNI00000019X", TelefonoMovil: "600000019", FechaNac: "", Edad: 2, Etapa: "Niño", Comunidad: "La Lima", Albergue: "Gimnasio M.", Observaciones: "Ninguna" },
            { CodFamilia: "GIM005", Nombre: "Nombre19", DNI: "DNI00000019X", TelefonoMovil: "600000019", FechaNac: "", Edad: 2, Etapa: "Niño", Comunidad: "La Lima", Albergue: "Gimnasio M.", Observaciones: "Ninguna" },            
            { CodFamilia: "GIM005", Nombre: "María García", DNI: "87654321B", TelefonoMovil: "600654321", FechaNac: "05/03/1990", Edad: 34, Etapa: "Adulto", Comunidad: "La Lima", Albergue: "Gimnasio M.", Observaciones: "Ninguna" },
            
            { CodFamilia: "BON001", Nombre: "Leslie Rocha Trochez", DNI: "0512 2003 01969", TelefonoMovil: "", FechaNac: "", Edad: "21", Etapa: "Adulto", Comunidad: "", Albergue: "CEB. Manuel Bonilla", Observaciones: "" },
            { CodFamilia: "BON001", Nombre: "Oscar A. Larios", DNI: "0000 0000 00000", TelefonoMovil: "", FechaNac: "", Edad: "56", Etapa: "Adulto", Comunidad: "", Albergue: "CEB. Manuel Bonilla", Observaciones: "" },
            { CodFamilia: "BON001", Nombre: "Diego Armando Larios", DNI: "", TelefonoMovil: "", FechaNac: "", Edad: "1 mes", Etapa: "Infante", Comunidad: "", Albergue: "CEB. Manuel Bonilla", Observaciones: "" },
            { CodFamilia: "BON001", Nombre: "Oscar Yael Larios Trochez", DNI: "", TelefonoMovil: "", FechaNac: "", Edad: "4", Etapa: "Niño", Comunidad: "", Albergue: "CEB. Manuel Bonilla", Observaciones: "" },
            { CodFamilia: "BON002", Nombre: "Oscar Armando Larios Mata", DNI: "0000 0000 00000", TelefonoMovil: "", FechaNac: "", Edad: "52", Etapa: "Adulto", Comunidad: "", Albergue: "CEB. Manuel Bonilla", Observaciones: "" },
            { CodFamilia: "BON002", Nombre: "María Luisa Madrid Romero", DNI: "0506 1964 00036", TelefonoMovil: "", FechaNac: "", Edad: "44", Etapa: "Adulto", Comunidad: "", Albergue: "CEB. Manuel Bonilla", Observaciones: "" },
            { CodFamilia: "BON003", Nombre: "Angela Ortiz", DNI: "0505 1982 00041", TelefonoMovil: "", FechaNac: "", Edad: "35", Etapa: "Adulto", Comunidad: "", Albergue: "CEB. Manuel Bonilla", Observaciones: "" },
            { CodFamilia: "BON003", Nombre: "Carlos Hernandez", DNI: "0510 1981 00419", TelefonoMovil: "", FechaNac: "", Edad: "46", Etapa: "Adulto", Comunidad: "", Albergue: "CEB. Manuel Bonilla", Observaciones: "" },
            { CodFamilia: "BON004", Nombre: "Karina Lizeth Ramos", DNI: "0503 2005 01327", TelefonoMovil: "", FechaNac: "", Edad: "33", Etapa: "Adulto", Comunidad: "", Albergue: "CEB. Manuel Bonilla", Observaciones: "" },
            { CodFamilia: "BON004", Nombre: "Daniel Antonio Ramos O.", DNI: "0503 2005 00647", TelefonoMovil: "", FechaNac: "", Edad: "25", Etapa: "Adulto", Comunidad: "", Albergue: "CEB. Manuel Bonilla", Observaciones: "" },
            { CodFamilia: "BON004", Nombre: "Yensi Nohemi Orellana", DNI: "1614 2004 00294", TelefonoMovil: "", FechaNac: "", Edad: "36", Etapa: "Adulto", Comunidad: "", Albergue: "CEB. Manuel Bonilla", Observaciones: "" },
            { CodFamilia: "BON004", Nombre: "Daniela Lisbeth Ramos", DNI: "", TelefonoMovil: "", FechaNac: "", Edad: "2", Etapa: "Infante", Comunidad: "", Albergue: "CEB. Manuel Bonilla", Observaciones: "" },
            { CodFamilia: "BON005", Nombre: "Karen Leticia Hernandez", DNI: "0501 1991 03485", TelefonoMovil: "", FechaNac: "", Edad: "", Etapa: "Adulto", Comunidad: "", Albergue: "CEB. Manuel Bonilla", Observaciones: "" },
            { CodFamilia: "BON005", Nombre: "Mario Rodolfo López", DNI: "1620 1984 00252", TelefonoMovil: "", FechaNac: "", Edad: "", Etapa: "Adulto", Comunidad: "", Albergue: "CEB. Manuel Bonilla", Observaciones: "" },
            { CodFamilia: "BON005", Nombre: "Sherly Nicol López", DNI: "", TelefonoMovil: "", FechaNac: "", Edad: "13", Etapa: "Adolecente", Comunidad: "", Albergue: "CEB. Manuel Bonilla", Observaciones: "" },
            { CodFamilia: "BON005", Nombre: "Jonathan David López", DNI: "", TelefonoMovil: "", FechaNac: "", Edad: "8", Etapa: "Niño", Comunidad: "", Albergue: "CEB. Manuel Bonilla", Observaciones: "" },
            { CodFamilia: "BON005", Nombre: "Jairo Moisés López", DNI: "", TelefonoMovil: "", FechaNac: "", Edad: "3", Etapa: "Niño", Comunidad: "", Albergue: "CEB. Manuel Bonilla", Observaciones: "" },
            { CodFamilia: "BON006", Nombre: "Miguel Angel Ramos Ortiz", DNI: "0503 1999 01199", TelefonoMovil: "", FechaNac: "", Edad: "", Etapa: "Adulto", Comunidad: "", Albergue: "CEB. Manuel Bonilla", Observaciones: "" },
            { CodFamilia: "BON006", Nombre: "Norma Lidia Ramos Ortiz", DNI: "0503 2002 00426", TelefonoMovil: "", FechaNac: "", Edad: "", Etapa: "Adulto", Comunidad: "", Albergue: "CEB. Manuel Bonilla", Observaciones: "" },
            { CodFamilia: "BON006", Nombre: "Carlos Colindres", DNI: "", TelefonoMovil: "", FechaNac: "", Edad: "12", Etapa: "Niño", Comunidad: "", Albergue: "CEB. Manuel Bonilla", Observaciones: "" },
            { CodFamilia: "BON006", Nombre: "Danza Montserrat Colindres", DNI: "", TelefonoMovil: "", FechaNac: "", Edad: "2", Etapa: "Infante", Comunidad: "", Albergue: "CEB. Manuel Bonilla", Observaciones: "" },
            { CodFamilia: "BON007", Nombre: "Evelin Paola Cárdenas", DNI: "0501 1989 04995", TelefonoMovil: "", FechaNac: "", Edad: "", Etapa: "Adulto", Comunidad: "", Albergue: "CEB. Manuel Bonilla", Observaciones: "" },
            { CodFamilia: "BON007", Nombre: "Jesser Jafet Gonzalez", DNI: "", TelefonoMovil: "", FechaNac: "", Edad: "15", Etapa: "Adolecente", Comunidad: "", Albergue: "CEB. Manuel Bonilla", Observaciones: "" },
            { CodFamilia: "BON007", Nombre: "Samir Ariel Hernandez", DNI: "", TelefonoMovil: "", FechaNac: "", Edad: "10", Etapa: "Niño", Comunidad: "", Albergue: "CEB. Manuel Bonilla", Observaciones: "" },
            { CodFamilia: "BON007", Nombre: "Emely Daneysi Hernandez", DNI: "", TelefonoMovil: "", FechaNac: "", Edad: "1", Etapa: "Infante", Comunidad: "", Albergue: "CEB. Manuel Bonilla", Observaciones: "" },
            { CodFamilia: "BON008", Nombre: "Jessenia Carolina Cárdenas", DNI: "0501 1986 06006", TelefonoMovil: "", FechaNac: "", Edad: "", Etapa: "Adulto", Comunidad: "", Albergue: "CEB. Manuel Bonilla", Observaciones: "" },
            { CodFamilia: "BON008", Nombre: "Dayri Loany Alvarado", DNI: "", TelefonoMovil: "", FechaNac: "", Edad: "15", Etapa: "Adolecente", Comunidad: "", Albergue: "CEB. Manuel Bonilla", Observaciones: "" },
            { CodFamilia: "BON008", Nombre: "Jeyson Alvarado", DNI: "", TelefonoMovil: "", FechaNac: "", Edad: "13", Etapa: "Adolecente", Comunidad: "", Albergue: "CEB. Manuel Bonilla", Observaciones: "" },
            { CodFamilia: "BON008", Nombre: "Jeriel Eduardo Alvarado", DNI: "", TelefonoMovil: "", FechaNac: "", Edad: "11", Etapa: "Niño", Comunidad: "", Albergue: "CEB. Manuel Bonilla", Observaciones: "" },
            { CodFamilia: "BON009", Nombre: "Alma Eviyn Soriano", DNI: "0501 1966 06654", TelefonoMovil: "", FechaNac: "", Edad: "", Etapa: "Adulto", Comunidad: "", Albergue: "CEB. Manuel Bonilla", Observaciones: "" },
            { CodFamilia: "BON009", Nombre: "Concepción Quintanilla Diaz", DNI: "0107 1968 02493", TelefonoMovil: "", FechaNac: "", Edad: "", Etapa: "Adulto", Comunidad: "", Albergue: "CEB. Manuel Bonilla", Observaciones: "" },
            
            
            { CodFamilia: "GAB001", Nombre: "Juan Pérez", DNI: "12345678A", TelefonoMovil: "600123456", FechaNac: "01/01/1980", Edad: 44, Etapa: "Adulto",Comunidad: "La Lima", Albergue: "CEB. Gabriela M.", Observaciones: "Ninguna" },
            { CodFamilia: "GAB002", Nombre: "Nombre3", DNI: "DNI00000003X", TelefonoMovil: "600000003", FechaNac: "01/01/1983", Edad: 41, Etapa: "Adulto",Comunidad: "La Lima", Albergue: "CEB. Gabriela M.", Observaciones: "Ninguna" },
            { CodFamilia: "GAB003", Nombre: "Nombre4", DNI: "DNI00000004X", TelefonoMovil: "600000004", FechaNac: "01/01/1984", Edad: 40, Etapa: "Adulto", Comunidad: "La Lima", Albergue: "CEB. Gabriela M.", Observaciones: "Ninguna" },
            { CodFamilia: "GAB005", Nombre: "Nombre5", DNI: "DNI00000005X", TelefonoMovil: "600000005", FechaNac: "01/01/1985", Edad: 39, Etapa: "Adulto", Comunidad: "La Lima", Albergue: "CEB. Gabriela M.", Observaciones: "Ninguna" },
            { CodFamilia: "GAB006", Nombre: "Nombre6", DNI: "DNI00000006X", TelefonoMovil: "600000006", FechaNac: "01/01/1986", Edad: 38, Etapa: "Adulto", Comunidad: "La Lima", Albergue: "CEB. Gabriela M.", Observaciones: "Ninguna" },
            { CodFamilia: "GAB007", Nombre: "Nombre7", DNI: "DNI00000007X", TelefonoMovil: "600000007", FechaNac: "01/01/1987", Edad: 37, Etapa: "Adulto", Comunidad: "La Lima", Albergue: "CEB. Gabriela M.", Observaciones: "Ninguna" },
            { CodFamilia: "GAB008", Nombre: "Nombre8", DNI: "DNI00000008X", TelefonoMovil: "600000008", FechaNac: "01/01/1988", Edad: 36, Etapa: "Adulto", Comunidad: "La Lima", Albergue: "CEB. Gabriela M.", Observaciones: "Ninguna" },
            { CodFamilia: "GAB009", Nombre: "Nombre9", DNI: "DNI00000009X", TelefonoMovil: "600000009", FechaNac: "01/01/1989", Edad: 35, Etapa: "Adulto", Comunidad: "La Lima", Albergue: "CEB. Gabriela M.", Observaciones: "Ninguna" },
            { CodFamilia: "GAB010", Nombre: "Nombre10", DNI: "DNI00000010X", TelefonoMovil: "600000010", FechaNac: "01/01/1990", Edad: 34, Etapa: "Adulto", Comunidad: "La Lima", Albergue: "CEB. Gabriela M.", Observaciones: "Ninguna" },
            { CodFamilia: "GAB011", Nombre: "Nombre11", DNI: "DNI00000011X", TelefonoMovil: "600000011", FechaNac: "01/01/1991", Edad: 33, Etapa: "Adulto", Comunidad: "La Lima", Albergue: "CEB. Gabriela M.", Observaciones: "Ninguna" },
            { CodFamilia: "GAB012", Nombre: "Nombre12", DNI: "DNI00000012X", TelefonoMovil: "600000012", FechaNac: "01/01/1992", Edad: 32, Etapa: "Adulto", Comunidad: "La Lima", Albergue: "CEB. Gabriela M.", Observaciones: "Ninguna" },
            { CodFamilia: "GAB013", Nombre: "Nombre13", DNI: "DNI00000013X", TelefonoMovil: "600000013", FechaNac: "01/01/1993", Edad: 31, Etapa: "Adulto", Comunidad: "La Lima", Albergue: "CEB. Gabriela M.", Observaciones: "Ninguna" },
            { CodFamilia: "GAB014", Nombre: "Nombre14", DNI: "DNI00000014X", TelefonoMovil: "600000014", FechaNac: "01/01/1994", Edad: 30, Etapa: "Adulto", Comunidad: "La Lima", Albergue: "CEB. Gabriela M.", Observaciones: "Ninguna" },
            { CodFamilia: "GAB015", Nombre: "Nombre15", DNI: "DNI00000015X", TelefonoMovil: "600000015", FechaNac: "01/01/1995", Edad: 29, Etapa: "Adulto", Comunidad: "La Lima", Albergue: "CEB. Gabriela M.", Observaciones: "Ninguna" },
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

    // Código para el botón flotante
    const scrollToTopBtn = document.createElement("button");
    scrollToTopBtn.id = "scroll-to-top";
scrollToTopBtn.textContent = " ↑ ";

    // Agregar el botón al final de la sección
    const mainSection = document.getElementById("bitacora");
    mainSection.appendChild(scrollToTopBtn);

    // Estilos del botón flotante
    scrollToTopBtn.style.fontSize = "23px";
    scrollToTopBtn.style.fontFamily = "Arial Black, Arial, sans-serif";
    scrollToTopBtn.style.fontWeight = "bold";
    scrollToTopBtn.style.opacity = "0.8";
    scrollToTopBtn.style.position = "fixed";
    scrollToTopBtn.style.bottom = "20px";
    scrollToTopBtn.style.left = "50%";
    scrollToTopBtn.style.transform = "translateX(-50%)";
    scrollToTopBtn.style.padding = "10px 20px";
    scrollToTopBtn.style.backgroundColor = "#40e0d0";
    scrollToTopBtn.style.color = "#FF6600";
    scrollToTopBtn.style.border = "none";
    scrollToTopBtn.style.borderRadius = "40px";
    scrollToTopBtn.style.cursor = "pointer";
    scrollToTopBtn.style.display = "none"; // Inicialmente oculto

    scrollToTopBtn.addEventListener("click", function() {
        mainSection.scrollIntoView({ behavior: "smooth" });
    });

    window.addEventListener("scroll", function() {
        const sectionRect = mainSection.getBoundingClientRect();
        const footer = document.querySelector("footer"); // Cambiar esto si el footer tiene un ID diferente
        const footerRect = footer.getBoundingClientRect();

        if (window.scrollY > 600 && sectionRect.bottom > window.innerHeight) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }

        // Asegurarse de que el botón no se desplace más allá del final de la sección
        if (sectionRect.bottom <= window.innerHeight) {
            scrollToTopBtn.style.position = "absolute";
            scrollToTopBtn.style.bottom = "20px";
        } else {
            scrollToTopBtn.style.position = "fixed";
            scrollToTopBtn.style.bottom = "20px";
        }
    });
});
