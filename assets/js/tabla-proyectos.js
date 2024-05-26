document.addEventListener("DOMContentLoaded", function () {
    const tablaBitacora = document.getElementById("tabla");
    const filtro = document.getElementById("filtro");

    const eventos = [
            {
              id: "001",
              nombre: "Construcción de Escuela",
              descripcion: "Proyecto para construir una nueva escuela primaria en la comunidad.",
              departamento: "Educación",
              fechaInicio: "2023-01-10",
              fechaFin: "2023-12-20",
              estado: "En progreso",
              presupuesto: "$500,000",
              gastoReal: "$200,000",
              financiacion: "Presupuesto Estatal",
              ubicacion: "Ciudad Capital",
              beneficiarios: "Niños en edad escolar",
              indicadores: "Progreso de construcción, matrícula escolar",
              contratistas: "Constructora ABC",
              impacto: "Mejora en la educación",
              riesgos: "Retrasos en suministro",
              mitigacion: "Contratos de proveedores alternativos",
              comentarios: "N/A"
            },
            {
              id: "002",
              nombre: "Rehabilitación de Carretera",
              descripcion: "Reparación y mantenimiento de la carretera principal que conecta dos ciudades.",
              departamento: "Infraestructura",
              fechaInicio: "2022-06-15",
              fechaFin: "2023-05-30",
              estado: "Completado",
              presupuesto: "$1,200,000",
              gastoReal: "$1,180,000",
              financiacion: "Préstamo del Banco Mundial",
              ubicacion: "Ruta Nacional 45",
              beneficiarios: "Conductores y transportistas",
              indicadores: "Reducción de accidentes, tiempo de viaje",
              contratistas: "Constructora XYZ",
              impacto: "Mejora en el transporte y comercio",
              riesgos: "Condiciones climáticas adversas",
              mitigacion: "Planificación de contingencias climáticas",
              comentarios: "Proyecto finalizado exitosamente"
            },
            {
              id: "003",
              nombre: "Instalación de Paneles Solares",
              descripcion: "Iniciativa para instalar paneles solares en edificios gubernamentales.",
              departamento: "Energía",
              fechaInicio: "2023-03-01",
              fechaFin: "2024-02-28",
              estado: "En progreso",
              presupuesto: "$800,000",
              gastoReal: "$350,000",
              financiacion: "Fondos de la Unión Europea",
              ubicacion: "Varios edificios en la ciudad",
              beneficiarios: "Empleados gubernamentales, reducción de costos",
              indicadores: "Generación de energía, reducción de CO2",
              contratistas: "Proveedor SolarTech",
              impacto: "Reducción de costos energéticos y huella de carbono",
              riesgos: "Problemas técnicos iniciales",
              mitigacion: "Capacitación técnica adicional",
              comentarios: "N/A"
            },
            {
              id: "004",
              nombre: "Centro de Salud Comunitario",
              descripcion: "Construcción de un nuevo centro de salud para mejorar los servicios médicos locales.",
              departamento: "Salud",
              fechaInicio: "2023-05-10",
              fechaFin: "2024-06-15",
              estado: "Planeado",
              presupuesto: "$900,000",
              gastoReal: "$50,000",
              financiacion: "Donaciones privadas",
              ubicacion: "Comunidad Rural",
              beneficiarios: "Residentes locales",
              indicadores: "Número de consultas médicas, satisfacción de pacientes",
              contratistas: "Constructora Salud",
              impacto: "Mejora en la salud pública",
              riesgos: "Falta de financiamiento completo",
              mitigacion: "Campañas de recaudación de fondos",
              comentarios: "Inicio pendiente de financiamiento"
            },
            {
              id: "005",
              nombre: "Parque Ecológico",
              descripcion: "Creación de un nuevo parque ecológico para promover el turismo y la conservación.",
              departamento: "Medio Ambiente",
              fechaInicio: "2022-09-20",
              fechaFin: "2023-11-30",
              estado: "En progreso",
              presupuesto: "$1,500,000",
              gastoReal: "$1,200,000",
              financiacion: "Fondos Nacionales",
              ubicacion: "Región Forestal",
              beneficiarios: "Turistas, residentes locales",
              indicadores: "Visitantes al parque, conservación de especies",
              contratistas: "Constructora Verde",
              impacto: "Preservación del medio ambiente, aumento del turismo",
              riesgos: "Conflictos con comunidades locales",
              mitigacion: "Diálogo y acuerdos con comunidades",
              comentarios: "Se espera finalizar según lo planeado"
            },
            {
              id: "006",
              nombre: "Modernización del Hospital",
              descripcion: "Actualización de las instalaciones y equipos médicos del hospital central.",
              departamento: "Salud",
              fechaInicio: "2023-02-01",
              fechaFin: "2024-01-31",
              estado: "Planeado",
              presupuesto: "$2,000,000",
              gastoReal: "$500,000",
              financiacion: "Fondo Nacional de Salud",
              ubicacion: "Ciudad Central",
              beneficiarios: "Pacientes del hospital",
              indicadores: "Número de pacientes atendidos, calidad de atención",
              contratistas: "SaludTech",
              impacto: "Mejora en los servicios de salud",
              riesgos: "Fallas técnicas",
              mitigacion: "Mantenimiento preventivo",
              comentarios: "N/A"
            },
            {
              id: "007",
              nombre: "Mejora del Sistema de Agua",
              descripcion: "Proyecto para mejorar el sistema de suministro de agua potable en la región.",
              departamento: "Infraestructura",
              fechaInicio: "2022-05-15",
              fechaFin: "2023-10-15",
              estado: "Completado",
              presupuesto: "$750,000",
              gastoReal: "$700,000",
              financiacion: "Fondo de Agua Potable",
              ubicacion: "Región Norte",
              beneficiarios: "Residentes locales",
              indicadores: "Calidad del agua, acceso al agua potable",
              contratistas: "Aqua Solutions",
              impacto: "Mejora en la calidad de vida",
              riesgos: "Escasez de materiales",
              mitigacion: "Compra anticipada de materiales",
              comentarios: "Proyecto finalizado con éxito"
            },
            {
              id: "008",
              nombre: "Desarrollo de Viviendas Sociales",
              descripcion: "Construcción de viviendas asequibles para familias de bajos ingresos.",
              departamento: "Vivienda",
              fechaInicio: "2023-04-01",
              fechaFin: "2024-03-31",
              estado: "En progreso",
              presupuesto: "$3,500,000",
              gastoReal: "$1,000,000",
              financiacion: "Subsidio Gubernamental",
              ubicacion: "Barrio Nuevo",
              beneficiarios: "Familias de bajos ingresos",
              indicadores: "Número de viviendas construidas, calidad de vida",
              contratistas: "Construcciones Familiares",
              impacto: "Reducción del déficit habitacional",
              riesgos: "Inflación de costos",
              mitigacion: "Ajustes presupuestarios",
              comentarios: "N/A"
            },
            {
              id: "009",
              nombre: "Renovación de Parque Central",
              descripcion: "Renovación y mejora del parque central de la ciudad para uso público.",
              departamento: "Medio Ambiente",
              fechaInicio: "2022-08-01",
              fechaFin: "2023-07-31",
              estado: "Completado",
              presupuesto: "$400,000",
              gastoReal: "$380,000",
              financiacion: "Fondos Municipales",
              ubicacion: "Parque Central",
              beneficiarios: "Residentes locales",
              indicadores: "Número de visitantes, satisfacción de usuarios",
              contratistas: "EcoParques",
              impacto: "Mejora en espacios públicos",
              riesgos: "Problemas de diseño",
              mitigacion: "Revisiones constantes de diseño",
              comentarios: "Parque renovado y operativo"
            },
            {
              id: "010",
              nombre: "Implementación de Red de Internet",
              descripcion: "Instalación de una red de internet de alta velocidad en áreas rurales.",
              departamento: "Tecnología",
              fechaInicio: "2023-01-15",
              fechaFin: "2023-12-15",
              estado: "En progreso",
              presupuesto: "$600,000",
              gastoReal: "$250,000",
              financiacion: "Fondo de Innovación Tecnológica",
              ubicacion: "Zonas Rurales",
              beneficiarios: "Residentes rurales",
              indicadores: "Acceso a internet, velocidad de conexión",
              contratistas: "TechConnect",
              impacto: "Reducción de la brecha digital",
              riesgos: "Fallas técnicas",
              mitigacion: "Soporte técnico continuo",
              comentarios: "N/A"
            },          
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




