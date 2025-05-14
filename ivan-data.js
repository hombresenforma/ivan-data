// Contenido de app_datos.js

// =================================================================================
// DATOS DE LA RUTINA Y ALTERNATIVAS
// =================================================================================
const workoutData = {
    "dia1": {
        name: "DÍA 1: EMPUJES A",
        exercises: [
            { order: 1, name: "Press de Banca con Barra", sets: 4, reps: "6-10", rest: "90-120s", rpe: "RPE 8", notes: "Agarre medio. Codos a 45º, pies en el suelo, retracción escapular.", videoUrl: "https://www.youtube.com/embed/examplevideo2" },
            { order: 2, name: "Press Inclinado con Mancuernas", sets: 3, reps: "8-12", rest: "75s", rpe: "RIR 2", notes: "Ajustar inclinación a 30-45 grados. Rango completo.", videoUrl: "https://www.youtube.com/embed/examplevideo3" },
            {
                order: 3, isSuperset: true,
                items: [
                    { subOrder: 1, name: "Fondos en Paralelas", sets: 3, reps: "Al fallo", rpe: "RPE 9-10", notes: "Inclinar torso para enfocar pecho. Bajar controlado.", videoUrl: "https://www.youtube.com/embed/examplevideo4", isSupersetStart: true, customRestText: "Sin descanso (Pasa al 3.2)" },
                    { subOrder: 2, name: "Extensiones Tríceps Polea Alta con Cuerda", sets: 3, reps: "10-15", rest: "75s", rpe: "RIR 1-2", notes: "Codos pegados al cuerpo, extensión completa.", videoUrl: "youtube.com/embed/" }
                ]
            },
            { order: 4, name: "Elevaciones Laterales con Mancuerna", sets: 3, reps: "12-15", rest: "60s", rpe: "RIR 1", videoUrl: "https://www.youtube.com/embed/SCVAc0p9000", notes: "Controlar el movimiento, sin balanceo." }
        ]
    },
    "dia2": { 
        name: "DÍA 2: TRACCIONES (FUERZA + HIPERTROFIA)",
        exercises: [
            { 
                order: 1, 
                name: "Remo en Barra T con Apoyo en Pecho", 
                sets: 3, 
                reps: ["5-6", "5-6", "10-12"], 
                rest: "120-180s", 
                rpe: "RPE 8-9", 
                notes: "Bloque principal de fuerza. Mantener técnica estricta.", 
                videoUrl: "https://youtube.com/shorts/9Mrjy280xgI?feature=share" 
            },
            { 
                order: 2, 
                name: "Curl de Bíceps con Barra Z", 
                sets: 3, 
                reps: "10-12", 
                rest: "60-75s", 
                rpe: "RIR 1-2", 
                notes: "Evitar balanceo excesivo.", 
                videoUrl: "https://www.youtube.com/embed/SCVAc0p9003" 
            },
            { 
                order: 3, 
                name: "Jalón al Pecho en Polea Alta (Agarre Ancho Prono)", 
                sets: 3, 
                reps: "10-12", 
                rest: "60-75s", 
                rpe: "RIR 1-2", 
                notes: "Llevar la barra al pecho, retracción escapular.", 
                videoUrl: "https://www.youtube.com/embed/SCVAc0p9001" 
            },
            { 
                order: 4, 
                name: "Curl Concentrado con Mancuerna (en banco Scott si es posible)", 
                sets: 3, 
                reps: "10-12", 
                rest: "60s", 
                rpe: "RIR 1", 
                notes: "Aislar bien el bíceps, evitar mover el hombro.", 
                videoUrl: "youtube.com/embed" 
            },
            { 
                order: 5, 
                name: "Elevaciones Laterales con Mancuernas", 
                sets: 3, 
                reps: "10-12", 
                rest: "60s", 
                rpe: "RIR 1", 
                notes: "Movimiento controlado, sin impulso.", 
                videoUrl: "https://www.youtube.com/embed/SCVAc0p9000" 
            },
             { 
                order: 6, 
                name: "Curl Femoral Sentado en Máquina", 
                sets: 3, 
                reps: "10-12", 
                rest: "60s", 
                rpe: "RIR 1-2", 
                notes: "Foco en la contracción del isquio.", 
                videoUrl: "https://www.youtube.com/embed/examplevideo20" 
            },
            { 
                order: 7, 
                isSuperset: true,
                isEMOM: true,
                emomDetails: {
                    totalDurationMinutes: 6, 
                    roundsPerExercise: 3    
                },
                items: [
                    { subOrder: 1, name: "Remo Gorila con Mancuernas o KTB", sets: 3, reps: "8-10 por lado", rpe: "RPE 8", notes: "Mantener espalda recta, core activo.", isEMOMItem: true, videoUrl: "https://www.youtube.com/embed/SCVAc0p9002" },
                    { subOrder: 2, name: "Face Pull con Cuerda en Polea", sets: 3, reps: "12-15", rpe: "RIR 1", notes: "Tirar hacia la cara, codos altos, rotación externa.", isEMOMItem: true, customRestText: "EMOM", videoUrl: "https://www.youtube.com/embed/examplevideo21" }
                ]
            }
        ]
    },
    "dia3": {
        name: "DÍA 3: FULL BODY (MIXTO)",
        exercises: [
            { 
                order: 1, 
                name: "Sentadilla Trasera con Barra", 
                sets: 3, 
                reps: ["12", "10", "8"], 
                rest: "90s", 
                rpe: "RPE 7-8", 
                notes: "Profundidad completa (romper paralela si es posible), espalda recta.", 
                videoUrl: "https://www.youtube.com/embed/examplevideo22"
            },
            {
                order: 2, isSuperset: true,
                items: [
                    { 
                        subOrder: 1, 
                        name: "Press Inclinado con Mancuernas", 
                        sets: 3, 
                        reps: "10", 
                        rpe: "RIR 2", 
                        notes: "Banco a 30-45 grados. Controlar la bajada.", 
                        videoUrl: "https://www.youtube.com/embed/examplevideo3", 
                        isSupersetStart: true, 
                        customRestText: "Sin descanso (Pasa al 2.2)" 
                    },
                    { 
                        subOrder: 2, 
                        name: "Remo con Barra (Agarre Prono)", 
                        sets: 3, 
                        reps: "8", 
                        rest: "120s", 
                        rpe: "RPE 8", 
                        notes: "Inclinar torso a 45º. Tirar la barra hacia el abdomen bajo.", 
                        videoUrl: "https://www.youtube.com/embed/examplevideo23" 
                    }
                ]
            },
            {
                order: 3, isSuperset: true, 
                items: [
                    { 
                        subOrder: 1, 
                        name: "Encogimientos Abdominales (Crunches)", 
                        sets: 3, 
                        reps: "15", 
                        rpe: "RIR 1-2", 
                        notes: "Elevar solo la parte superior de la espalda, sin tirar del cuello.", 
                        videoUrl: "https://www.youtube.com/embed/examplevideo24", 
                        isSupersetStart: true, 
                        customRestText: "Sin descanso (Pasa al 3.2)" 
                    },
                    { 
                        subOrder: 2, 
                        name: "Plancha Abdominal (Plank)", 
                        sets: 3, 
                        reps: "30-60seg", 
                        rpe: "Al fallo técnico", 
                        notes: "Cuerpo recto desde cabeza a talones, abdomen contraído.", 
                        videoUrl: "googleusercontent.com/youtube.com/14", 
                        customRestText: "Sin descanso (Pasa al 3.3)"
                    },
                    { 
                        subOrder: 3, 
                        name: "Elevaciones de Piernas Tumbado", 
                        sets: 3, 
                        reps: "15", 
                        rest: "60s", 
                        rpe: "RIR 1-2", 
                        notes: "Mantener espalda baja pegada al suelo. Bajar piernas controlado.", 
                        videoUrl: "https://www.youtube.com/embed/examplevideo26" 
                    }
                ]
            }
        ]
    },
    "dia4": {
        name: "DÍA 4: EMPUJES B",
        exercises: [
            { order: 1, name: "Press Militar con Barra (de pie)", sets: 4, reps: "6-10", rest: "90-120s", rpe: "RPE 8", notes: "Core apretado.", videoUrl: "https://www.youtube.com/embed/examplevideo27" },
            { order: 2, name: "Press de Banca Inclinado con Barra", sets: 3, reps: "8-10", rest: "75s", rpe: "RIR 2", notes: "Enfoque en pectoral superior.", videoUrl: null },
            {
                order: 3, isSuperset: true,
                items: [
                    { subOrder: 1, name: "Aperturas Planas con Mancuernas", sets: 3, reps: "12-15", rpe: "RIR 1", notes: "Estiramiento controlado.", videoUrl: "https://www.youtube.com/embed/examplevideo29", isSupersetStart: true, customRestText: "Sin descanso (Pasa al 3.2)" },
                    { subOrder: 2, name: "Flexiones (Pies elevados si es posible)", sets: 3, reps: "Al fallo", rest: "75s", rpe: "RPE 9-10", notes: "Mantener cuerpo recto.", videoUrl: "https://www.youtube.com/embed/examplevideo30" }
                ]
            },
            { order: 4, name: "Press Francés con Barra Z", sets: 3, reps: "10-12", rest: "60s", rpe: "RIR 1", notes: "Codos cerrados.", videoUrl: "youtu.be" }
        ]
    },
    "dia5": {
        name: "DÍA 5: TRACCIONES B",
        exercises: [
            { order: 1, name: "Peso Muerto Convencional", sets: 1, reps: "5 (pesado)", rest: "180s", rpe: "RPE 9", notes:"Técnica primero, espalda recta.", videoUrl: "youtu.be/" },
             { order: 2, name: "Remo Pendlay", sets: 4, reps: "6-8", rest: "90s", rpe: "RPE 8", notes: "Explosivo desde el suelo.", videoUrl: "https://www.youtube.com/embed/$" },
            { order: 3, name: "Jalón al Pecho Agarre Supino (Chin-up Grip)", sets: 3, reps: "8-12", rest: "75s", rpe: "RIR 1-2", notes: "Enfocar en dorsales y bíceps.", videoUrl: "youtube.com/watch?v=" },
            { order: 4, name: "Curl Martillo con Mancuernas", sets: 3, reps: "10-12 por lado", rest: "60s", rpe: "RIR 1", notes: "Trabaja braquial.", videoUrl: "https://www.youtube.com/embed/examplevideo31" },
            { order: 5, name: "Encogimientos con Barra (para Trapecios)", sets: 3, reps: "12-15", rest: "60s", rpe: "RIR 1", notes: "Contracción máxima del trapecio.", videoUrl: "https://www.youtube.com/embed/SCVCLChgT5A" }
        ]
    },
    "dia6": {
        name: "DÍA 6: PIERNA B (Énfasis Cuádriceps)",
        exercises: [
            { order: 1, name: "Sentadilla Frontal", sets: 4, reps: "8-10", rest: "120s", rpe: "RPE 8", notes: "Mantener torso erguido.", videoUrl: "https://www.youtube.com/embed/pwenGg9A7aA" },
            { order: 2, name: "Zancadas con Mancuernas", sets: 3, reps: "10-12 por lado", rest: "75s", rpe: "RPE 8", notes: "Paso largo y controlado.", videoUrl: "https://www.youtube.com/embed/MORo1n24MUI" }, 
            { order: 3, name: "Sentadilla Búlgara con Mancuerna", sets: 3, reps: "10-12 por lado", rest: "60s", rpe: "RIR 1-2", notes: "Equilibrio y profundidad.", videoUrl: "https://www.youtube.com/embed/LegE4f_4_6A" }, 
            { order: 4, name: "Prensa Horizontal (pies bajos)", sets: 3, reps: "15-20", rest: "75s", rpe: "RIR 0-1", notes: "Enfoque en cuádriceps.", videoUrl: "https://www.youtube.com/embed/examplevideo40" },
            { order: 5, name: "Elevación de Talones de Pie (en máquina o con peso)", sets: 4, reps: "15-20", rest: "45s", rpe: "RIR 0-1", notes: "Rango completo de movimiento.", videoUrl: "https://www.youtube.com/embed/examplevideo41" }
        ]
    }
};

const exerciseAlternatives = { 
    "Press de Banca con Barra": [{ name: "Press de Banca con Mancuernas", muscleGroup: "Pecho, Tríceps, Hombro", notes: "Mayor rango de movimiento." }, { name: "Flexiones con Lastre", muscleGroup: "Pecho, Tríceps", notes: "Peso corporal + lastre."}],
    "Press Inclinado con Mancuernas": [{ name: "Press Inclinado con Barra", muscleGroup: "Pecho Sup, Hombro" }, { name: "Flexiones Inclinadas (manos elevadas)", muscleGroup: "Pecho Sup, Hombro" }],
    "Fondos en Paralelas": [{ name: "Press Declinado con Barra", muscleGroup: "Pecho Inf, Tríceps" }, { name: "Fondos entre Bancos (Tríceps)", muscleGroup: "Tríceps, Pecho" }],
    "Extensiones Tríceps Polea Alta con Cuerda": [{ name: "Press Francés con Barra Z", muscleGroup: "Tríceps" }, { name: "Extensiones sobre Cabeza con Mancuerna", muscleGroup: "Tríceps" }],
    "Elevaciones Laterales con Mancuerna": [{ name: "Elevaciones Laterales en Polea", muscleGroup: "Hombro Lateral" }, { name: "Upright Row con Barra (agarre ancho)", muscleGroup: "Hombro Lateral, Trapecio" }],
    "Remo en Barra T con Apoyo en Pecho": [{ name: "Remo con Mancuerna a un Brazo (con apoyo)", muscleGroup: "Espalda Alta, Dorsales" }, { name: "Remo en Máquina con Apoyo al Pecho", muscleGroup: "Espalda Alta, Dorsales" }],
    "Curl de Bíceps con Barra Z": [{ name: "Curl de Bíceps con Barra Recta", muscleGroup: "Bíceps"}, { name: "Curl de Bíceps con Mancuernas (simultáneo o alterno)", muscleGroup: "Bíceps"}],
    "Jalón al Pecho en Polea Alta (Agarre Ancho Prono)": [{ name: "Dominadas (asistidas o libres)", muscleGroup: "Dorsales, Bíceps"}, {name: "Remo con Barra", muscleGroup: "Espalda, Bíceps"}],
    "Curl Concentrado con Mancuerna (en banco Scott si es posible)": [{ name: "Curl Concentrado con Mancuerna (sentado)", muscleGroup: "Bíceps (pico)"}, {name: "Curl Araña con Mancuernas", muscleGroup: "Bíceps (pico)"}],
    "Curl Femoral Sentado en Máquina": [{ name: "Curl Femoral Tumbado", muscleGroup: "Isquiotibiales"}, {name: "Peso Muerto Rumano con Mancuernas", muscleGroup: "Isquiotibiales, Glúteos"}],
    "Remo Gorila con Mancuernas o KTB": [{ name: "Remo con Mancuerna a un Brazo (sin apoyo)", muscleGroup: "Espalda Completa, Core"}, {name: "Renegade Row (Remo Renegado)", muscleGroup: "Espalda, Core, Pecho"}],
    "Face Pull con Cuerda en Polea": [{ name: "Band Pull-Aparts", muscleGroup: "Hombro Posterior, Trapecio" }, { name: "Pájaros con Mancuernas (Peck Deck Inverso)", muscleGroup: "Hombro Posterior" }],
    "Sentadilla Trasera con Barra": [{ name: "Prensa Inclinada", muscleGroup: "Cuádriceps, Glúteos" }, { name: "Sentadilla Goblet", muscleGroup: "Cuádriceps, Glúteos, Core" }],
    "Remo con Barra (Agarre Prono)": [{ name: "Remo con Mancuernas (ambos brazos)", muscleGroup: "Espalda Alta, Dorsales" }, { name: "Remo en Punta con Barra T", muscleGroup: "Espalda Media, Dorsales" }],
    "Encogimientos Abdominales (Crunches)": [{ name: "Encogimientos en Polea Alta", muscleGroup: "Abdomen Superior" }, { name: "Rueda Abdominal (Ab Wheel Rollout)", muscleGroup: "Core Completo" }],
    "Plancha Abdominal (Plank)": [{ name: "Plancha Lateral", muscleGroup: "Core, Oblicuos" }, { name: "Plancha con Elevación de Brazo/Pierna", muscleGroup: "Core (Anti-rotación)" }],
    "Elevaciones de Piernas Tumbado": [{ name: "Elevaciones de Piernas Colgado (Hanging Leg Raises)", muscleGroup: "Abdomen Inferior, Flexores Cadera" }, { name: "Encogimientos Inversos (Reverse Crunches)", muscleGroup: "Abdomen Inferior" }],
    "Press Militar con Barra (de pie)": [{ name: "Press de Hombro con Mancuernas (sentado o de pie)", muscleGroup: "Hombro, Tríceps" }, { name: "Push Press con Barra", muscleGroup: "Hombro, Tríceps (con impulso de piernas)" }],
    "Press de Banca Inclinado con Barra": [{ name: "Press Inclinado en Máquina Smith", muscleGroup: "Pecho Sup, Hombro" }, { name: "Press Inclinado con Mancuernas", muscleGroup: "Pecho Sup, Hombro" }],
    "Aperturas Planas con Mancuernas": [{ name: "Aperturas en Máquina Peck Deck", muscleGroup: "Pecho" }, { name: "Cruce de Poleas (de abajo a arriba)", muscleGroup: "Pecho (énfasis superior)" }],
    "Flexiones (Pies elevados si es posible)": [{ name: "Flexiones Planas", muscleGroup: "Pecho, Tríceps" }, { name: "Press de Banca con Agarre Cerrado", muscleGroup: "Tríceps, Pecho" }],
    "Press Francés con Barra Z": [{ name: "Extensiones de Tríceps sobre Cabeza con Mancuerna (a dos manos)", muscleGroup: "Tríceps" }, { name: "Patada de Tríceps con Mancuerna", muscleGroup: "Tríceps" }],
    "Peso Muerto Convencional": [{ name: "Peso Muerto Sumo", muscleGroup: "Piernas, Glúteos, Espalda" }, { name: "Hip Thrust con Barra", muscleGroup: "Glúteos, Isquiotibiales" }],
    "Remo Pendlay": [{ name: "Remo con Barra (tradicional, inclinado)", muscleGroup: "Espalda Alta, Dorsal" }, { name: "Seal Row (Remo en banco prono)", muscleGroup: "Espalda Alta" }],
    "Jalón al Pecho Agarre Supino (Chin-up Grip)": [{ name: "Dominadas Agarre Supino (Chin-ups)", muscleGroup: "Dorsal, Bíceps" }, { name: "Remo Invertido Agarre Supino", muscleGroup: "Dorsal, Bíceps" }],
    "Curl Martillo con Mancuernas": [{ name: "Curl de Bíceps Inverso con Barra", muscleGroup: "Braquial, Antebrazo" }, { name: "Curl Zottman", muscleGroup: "Bíceps, Braquial, Antebrazo" }],
    "Encogimientos con Barra (para Trapecios)": [{ name: "Encogimientos con Mancuernas", muscleGroup: "Trapecio" }, { name: "Farmer's Walk (Paseo del Granjero)", muscleGroup: "Trapecio, Agarre, Core" }],
    "Sentadilla Frontal": [{ name: "Sentadilla Zercher", muscleGroup: "Cuádriceps, Core, Espalda Alta" }, { name: "Sentadilla Goblet (profunda)", muscleGroup: "Cuádriceps, Glúteos" }],
    "Zancadas con Mancuernas": [{ name: "Zancadas con Barra", muscleGroup: "Cuádriceps, Glúteos" }, { name: "Prensa a una Pierna", muscleGroup: "Cuádriceps, Glúteos" }],
    "Sentadilla Búlgara con Mancuerna": [{ name: "Sentadilla Búlgara con Barra", muscleGroup: "Cuádriceps, Glúteos" }, { name: "Zancadas Inversas", muscleGroup: "Glúteos, Cuádriceps" }],
    "Prensa Horizontal (pies bajos)": [{ name: "Extensiones de Cuádriceps (con pausa)", muscleGroup: "Cuádriceps" }, { name: "Sentadilla Hack (pies bajos)", muscleGroup: "Cuádriceps" }],
    "Elevación de Talones de Pie (en máquina o con peso)": [{ name: "Elevación de Talones Sentado (para sóleo)", muscleGroup: "Sóleo" }, { name: "Elevación de Talones en Prensa", muscleGroup: "Gemelos" }]
};
// =================================================================================
// FIN DE DATOS DE LA RUTINA Y ALTERNATIVAS
// =================================================================================
console.log("Datos de entrenamiento y alternativas definidos en app_datos.js");
