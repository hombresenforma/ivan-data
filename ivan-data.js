// Contenido de app_datos.js

// =================================================================================
// DATOS DE LA RUTINA (2 DÍAS: TORSO / PIERNA)
// =================================================================================
const workoutData = {
    "dia1": {
        name: "DÍA 1: TORSO",
        exercises: [
            { 
                order: 1, 
                name: "Press de Banca con Barra", 
                sets: 4, 
                reps: "10-12", 
                rest: "90s", 
                rpe: "RPE 8", 
                notes: "Agarre medio, codos a 45º, retracción escapular.", 
                videoUrl: "https://www.youtube.com/embed/examplevideo2" 
            },
            { 
                order: 2, 
                name: "Remo con Barra (Agarre Prono)", 
                sets: 4, 
                reps: "10-12", 
                rest: "90s", 
                rpe: "RPE 8", 
                notes: "Inclinar torso a 45º, barra hacia el abdomen bajo.", 
                videoUrl: "https://www.youtube.com/embed/examplevideo23" 
            },
            {
                order: 3, 
                isSuperset: true,
                items: [
                    { 
                        subOrder: 1, 
                        name: "Press Inclinado con Mancuernas", 
                        sets: 3, 
                        reps: "10-12", 
                        rpe: "RIR 2", 
                        notes: "Banco a 30-45 grados, control en la bajada.", 
                        videoUrl: "https://www.youtube.com/embed/examplevideo3", 
                        isSupersetStart: true, 
                        customRestText: "Sin descanso (Pasa al 3.2)" 
                    },
                    { 
                        subOrder: 2, 
                        name: "Jalón al Pecho en Polea Alta (Agarre Ancho Prono)", 
                        sets: 3, 
                        reps: "10-12", 
                        rest: "120s", // Descanso después de la superserie completa
                        rpe: "RIR 1-2", 
                        notes: "Llevar la barra al pecho, retracción escapular.", 
                        videoUrl: "https://www.youtube.com/embed/SCVAc0p9001" 
                    }
                ]
            },
            {
                order: 4, 
                isSuperset: true,
                items: [
                    { 
                        subOrder: 1, 
                        name: "Curl de Bíceps con Barra Z", 
                        sets: 3, 
                        reps: "10-12", 
                        rpe: "RIR 1", 
                        notes: "Evitar balanceo excesivo.", 
                        videoUrl: "https://www.youtube.com/embed/SCVAc0p9003", 
                        isSupersetStart: true, 
                        customRestText: "Sin descanso (Pasa al 4.2)" 
                    },
                    { 
                        subOrder: 2, 
                        name: "Extensiones Tríceps Polea Alta con Cuerda", 
                        sets: 3, 
                        reps: "10-15", 
                        rest: "75s", 
                        rpe: "RIR 1-2", 
                        notes: "Codos pegados al cuerpo, extensión completa.", 
                        videoUrl: "youtube.com/embed/" 
                    }
                ]
            }
        ]
    },
    "dia2": { 
        name: "DÍA 2: PIERNA",
        exercises: [
            { 
                order: 1, 
                name: "Sentadilla Trasera con Barra", 
                sets: 4, 
                reps: "10-12", 
                rest: "120s", 
                rpe: "RPE 8", 
                notes: "Profundidad completa, espalda recta.", 
                videoUrl: "https://www.youtube.com/embed/examplevideo22" 
            },
            { 
                order: 2, 
                name: "Peso Muerto Rumano con Mancuernas", 
                sets: 4, 
                reps: "10-12", 
                rest: "90s", 
                rpe: "RPE 8", 
                notes: "Sentir el estiramiento en isquiotibiales, espalda neutra.", 
                videoUrl: "https://www.youtube.com/embed/examplevideo42" // Asumiendo que este es el ID para PMR con mancuernas
            },
            {
                order: 3, 
                isSuperset: true,
                items: [
                    { 
                        subOrder: 1, 
                        name: "Prensa Inclinada", 
                        sets: 3, 
                        reps: "10-12", 
                        rpe: "RIR 1-2", 
                        notes: "Enfoque en cuádriceps, rango completo.", 
                        videoUrl: "youtube.com/embed/...9", 
                        isSupersetStart: true, 
                        customRestText: "Sin descanso (Pasa al 3.2)" 
                    },
                    { 
                        subOrder: 2, 
                        name: "Curl Femoral Sentado en Máquina", 
                        sets: 3, 
                        reps: "12-15", 
                        rest: "90s", 
                        rpe: "RIR 1", 
                        notes: "Foco en la contracción del isquio.", 
                        videoUrl: "https://www.youtube.com/embed/examplevideo20" 
                    }
                ]
            },
            {
                order: 4, 
                isSuperset: true,
                items: [
                    { 
                        subOrder: 1, 
                        name: "Elevación de Talones de Pie (en máquina o con peso)", 
                        sets: 4, 
                        reps: "15-20", 
                        rpe: "RIR 0-1", 
                        notes: "Rango completo para gemelos.", 
                        videoUrl: "https://www.youtube.com/embed/examplevideo41", 
                        isSupersetStart: true, 
                        customRestText: "Sin descanso (Pasa al 4.2)" 
                    },
                    { 
                        subOrder: 2, 
                        name: "Plancha Abdominal (Plank)", 
                        sets: 4, 
                        reps: "30-60seg", // Objetivo de tiempo
                        rest: "60s", 
                        rpe: "Al fallo técnico", 
                        notes: "Cuerpo recto, abdomen contraído.", 
                        videoUrl: "googleusercontent.com/youtube.com/14" 
                    }
                ]
            }
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
    "Peso Muerto Rumano con Mancuernas": [{ name: "Peso Muerto Rumano con Barra", muscleGroup: "Isquiotibiales, Glúteos" }, { name: "Good Mornings con Barra", muscleGroup: "Isquiotibiales, Glúteos, Espalda Baja" }],
    "Prensa Inclinada": [{ name: "Sentadilla Hack", muscleGroup: "Cuádriceps, Glúteos" }, { name: "Zancadas con Barra o Mancuernas", muscleGroup: "Cuádriceps, Glúteos" }],
    "Elevación de Talones de Pie (en máquina o con peso)": [{ name: "Elevación de Talones Sentado (para sóleo)", muscleGroup: "Sóleo" }, { name: "Elevación de Talones en Prensa", muscleGroup: "Gemelos" }]
};
// =================================================================================
// FIN DE DATOS DE LA RUTINA Y ALTERNATIVAS
// =================================================================================
console.log("Datos de entrenamiento (2 días) y alternativas definidos en app_datos.js");
