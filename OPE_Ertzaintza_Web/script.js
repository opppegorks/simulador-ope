<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GORKA OPE ERTZAINTZA - ACCESO DIRECTO</title>
    <style>
        /* ESTILOS GENERALES */
        body, html { margin: 0; padding: 0; height: 100%; font-family: 'Segoe UI', Arial, sans-serif; background: #f4f4f4; color: #333; }
        
        header { 
            background: #1a1a1a; 
            color: white; 
            padding: 20px; 
            text-align: center; 
            border-bottom: 5px solid #c11b2b; 
        }

        .container-principal { display: flex; min-height: calc(100vh - 85px); }

        /* MENÚ LATERAL */
        .sidebar { 
            width: 260px; 
            background: #2c2c2c; 
            padding: 25px 15px; 
            display: flex; 
            flex-direction: column; 
            gap: 12px; 
        }
        
        .sidebar button { 
            padding: 15px; 
            background: #3d3d3d; 
            color: white; 
            border: none; 
            border-radius: 8px; 
            cursor: pointer; 
            text-align: left; 
            font-size: 15px; 
            font-weight: 500;
            transition: all 0.3s ease;
        }
        
        .sidebar button:hover { 
            background: #c11b2b; 
            padding-left: 25px; 
        }

        .sidebar hr { border: 0.5px solid #444; margin: 10px 0; }

        /* ZONA DE CONTENIDO */
        .zona-trabajo { flex: 1; padding: 30px; overflow-y: auto; }
        
        .tarjeta { 
            background: white; 
            padding: 30px; 
            border-radius: 15px; 
            box-shadow: 0 4px 15px rgba(0,0,0,0.1); 
            margin-bottom: 25px;
        }

        /* CUADRÍCULA DE TEMAS */
        .grid-temas { 
            display: grid; 
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); 
            gap: 20px; 
            margin-top: 20px; 
        }
        
        .tema-card { 
            background: #f8f9fa; 
            border: 1px solid #ddd; 
            border-radius: 12px; 
            padding: 20px; 
            transition: transform 0.2s;
        }
        
        .tema-card:hover { transform: translateY(-3px); border-color: #c11b2b; }
        
        .tema-card h4 { margin: 0 0 15px 0; color: #1a1a1a; font-size: 16px; height: 40px; }

        .btn-test-tema { 
            width: 100%; 
            padding: 10px; 
            background: #fee2e2; 
            color: #c11b2b; 
            border: 1px solid #fecaca; 
            border-radius: 6px; 
            font-weight: bold; 
            cursor: pointer; 
        }

        .btn-test-tema:hover { background: #c11b2b; color: white; }

        /* MOTOR DE EXAMEN */
        #visor-examen { 
            display: none; 
            margin-top: 20px; 
            padding: 25px; 
            background: #fff; 
            border-top: 6px solid #c11b2b; 
            border-radius: 10px; 
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }

        .pregunta-texto { font-size: 19px; font-weight: bold; margin-bottom: 20px; line-height: 1.4; }

        .opcion { 
            display: block; 
            padding: 15px; 
            margin: 10px 0; 
            background: #f1f5f9; 
            border: 1px solid #cbd5e1; 
            border-radius: 8px; 
            cursor: pointer; 
            transition: 0.2s;
        }
        
        .opcion:hover { background: #e2e8f0; border-color: #c11b2b; }
        
        .opcion.marcada { 
            background: #c11b2b !important; 
            color: white; 
            border-color: #991b1b; 
        }

        .btn-siguiente { 
            background: #1a1a1a; 
            color: white; 
            padding: 12px 40px; 
            border: none; 
            border-radius: 8px; 
            font-weight: bold; 
            cursor: pointer; 
            margin-top: 20px; 
        }
    </style>
</head>
<body>

    <header>
        <h1>GORKA OPE ERTZAINTZA</h1>
        <p style="margin: 5px 0 0 0; opacity: 0.8;">Preparación Integral de Exámenes</p>
    </header>

    <div class="container-principal">
        <nav class="sidebar">
            <button onclick="mostrarSeccion('home')">🏠 Inicio / Temas</button>
            <button onclick="mostrarSeccion('psicos')">🧩 Psicotécnicos</button>
            <hr>
            <button onclick="iniciarTest('general', 45)" style="background: #c11b2b;">🚀 SIMULACRO 45 Preg.</button>
        </nav>

        <main class="zona-trabajo">
            <section id="sec-home">
                <div class="tarjeta">
                    <h2>Tests Específicos por Tema</h2>
                    <p>Selecciona un tema para generar un test aleatorio de 20 preguntas.</p>
                    
                    <div class="grid-temas" id="contenedor-temas">
                        </div>

                    <div id="visor-examen">
                        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px;">
                            <h3 id="test-titulo" style="margin:0; color:#c11b2b;"></h3>
                            <span id="test-contador" style="font-weight:bold; background:#eee; padding:5px 15px; border-radius:20px;"></span>
                        </div>
                        <div id="contenido-pregunta">
                            <p class="pregunta-texto" id="p-texto"></p>
                            <div id="p-opciones"></div>
                            <button class="btn-siguiente" onclick="siguientePregunta()">Siguiente Pregunta</button>
                        </div>
                    </div>
                </div>
            </section>

            <section id="sec-psicos" style="display:none;">
                <div class="tarjeta">
                    <h2>Entrenamiento Psicotécnico</h2>
                    <p>Práctica de series de figuras y lógica visual.</p>
                    <div style="height:300px; background:#f9f9f9; border:2px dashed #ccc; border-radius:10px; display:flex; align-items:center; justify-content:center; color:#999;">
                        [Módulo de Imágenes Cargando...]
                    </div>
                </div>
            </section>
        </main>
    </div>

    <script>
        // TU BASE DE DATOS DE PREGUNTAS
        const bancoPreguntas = [
            { 
                tema: 1, 
                q: "¿En qué fecha se firmó el Convenio Europeo de Derechos Humanos en Roma?", 
                opciones: ["5 de mayo de 1949", "4 de noviembre de 1950", "6 de diciembre de 1978", "1 de enero de 1952"], 
                correcta: 1 
            },
            { 
                tema: 40, 
                q: "¿Qué general falleció en el sitio de Bilbao en mayo de 1874?", 
                opciones: ["General Espartero", "General Concha", "General Zumalacárregui", "General Prim"], 
                correcta: 1 
            },
            { 
                tema: 44, 
                q: "¿Cuál es el máximo responsable de la Ertzaintza según la Ley de Policía?", 
                opciones: ["El Lehendakari", "El Consejero de Seguridad", "El Director de la Policía", "El Jefe de División"], 
                correcta: 1 
            },
            { 
                tema: 1, 
                q: "¿Cuál es el número de artículos que contiene la Declaración Universal de DDHH?", 
                opciones: ["25 artículos", "30 artículos", "45 artículos", "10 artículos"], 
                correcta: 1 
            }
            // Puedes añadir aquí todas las que necesites siguiendo el formato
        ];

        const listaTemas = [
            {id: 0, n: "Puntos Tráfico"},
            {id: 1, n: "Derechos Humanos"},
            {id: 15, n: "Régimen Jurídico"},
            {id: 19, n: "Ley 39/2015"},
            {id: 28, n: "Conceptos Básicos Seg.Vial"},
            {id: 36, n: "Gestión de Emergencias"},
            {id: 39, n: "Primeros Auxilios"},
            {id: 40, n: "Siglo XIX"},
            {id: 41, n: "Siglo XX"},
            {id: 44, n: "Ley de Policía del País Vasco"},
            {id: 45, n: "Ley de Seguridad Pública de Euskadi"},
            {id: 49, n: "Comisiones de coordinación policial"}
        ];

        let preguntasActuales = [];
        let indiceActual = 0;

        // Cargar los temas en la cuadrícula al iniciar
        const grid = document.getElementById('contenedor-temas');
        listaTemas.forEach(t => {
            grid.innerHTML += `
                <div class="tema-card">
                    <h4>Tema ${t.id}: ${t.nombre}</h4>
                    <button class="btn-test-tema" onclick="iniciarTest(${t.id}, 20)">Hacer Test (20p)</button>
                </div>
            `;
        });

        function mostrarSeccion(id) {
            document.getElementById('sec-home').style.display = id === 'home' ? 'block' : 'none';
            document.getElementById('sec-psicos').style.display = id === 'psicos' ? 'block' : 'none';
            document.getElementById('visor-examen').style.display = 'none';
        }

        function iniciarTest(temaId, cantidad) {
            // Filtrar por tema o coger todas si es general
            let pool = (temaId === 'general') ? [...bancoPreguntas] : bancoPreguntas.filter(p => p.tema === temaId);
            
            if(pool.length === 0) {
                alert("Todavía no hay preguntas cargadas para este tema.");
                return;
            }

            // Mezclar aleatoriamente
            pool.sort(() => Math.random() - 0.5);
            preguntasActuales = pool.slice(0, cantidad);
            indiceActual = 0;

            document.getElementById('test-titulo').innerText = (temaId === 'general') ? "Simulacro General" : "Test Tema " + temaId;
            document.getElementById('visor-examen').style.display = 'block';
            
            renderizarPregunta();
            document.getElementById('visor-examen').scrollIntoView({ behavior: 'smooth' });
        }

        function renderizarPregunta() {
            const p = preguntasActuales[indiceActual];
            document.getElementById('test-contador').innerText = `Pregunta ${indiceActual + 1} de ${preguntasActuales.length}`;
            document.getElementById('p-texto').innerText = p.q;
            
            let opcionesHtml = "";
            p.opciones.forEach((opt, i) => {
                opcionesHtml += `<div class="opcion" id="opt-${i}" onclick="marcarOpcion(${i})">${opt}</div>`;
            });
            document.getElementById('p-opciones').innerHTML = opcionesHtml;
        }

        function marcarOpcion(i) {
            document.querySelectorAll('.opcion').forEach(el => el.classList.remove('marcada'));
            document.getElementById('opt-' + i).classList.add('marcada');
        }

        function siguientePregunta() {
            if(indiceActual < preguntasActuales.length - 1) {
                indiceActual++;
                renderizarPregunta();
            } else {
                alert("¡Has terminado el test!");
                document.getElementById('visor-examen').style.display = 'none';
            }
        }
    </script>
</body>
</html>