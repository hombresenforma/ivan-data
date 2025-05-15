// Contenido de app_datos.js

// =================================================================================
// DATOS DE LA RUTINA (2 DÍAS: EMPUJE / TRACCIÓN)
// =================================================================================
const workoutData = {
    "dia1": {
        name: "DÍA 1: EMPUJE",
        exercises: [
            {
                order: 1,
                name: "Press Banca con Barra",
                sets: 3,
                reps: "6,6,10", // Tres series: dos de 6 reps, una de 10 reps
                rest: "120s",
                rpe: "RPE 8-9",
                notes: "Agarre medio, codos a 45º, retracción escapular. Enfocarse en la técnica.",
                videoUrl: "https://youtu.be/PKpsrFS2uacPress"
            },
            {
                order: 2,
                name: "Hack Squat", // Sentadilla Jaca
                sets: 3,
                reps: "10",
                rest: "120s",
                rpe: "RPE 8",
                notes: "Mantener espalda apoyada, bajar profundo controlando el movimiento.",
                videoUrl: "https://www.youtube.com/watch?v=6teL-OyXuQsThruster"
            },
            {
                order: 3,
                name: "Press Inclinado con Mancuernas",
                sets: 3,
                reps: "10",
                rest: "90s",
                rpe: "RPE 7-8",
                notes: "Banco a 30-45 grados, control en la bajada y subida.",
                videoUrl: "https://youtu.be/ZE4M73kXB5APress"
            },
            {
                order: 4,
                isSuperset: true,
                items: [
                    {
                        subOrder: 1,
                        name: "Cruces en Polea Alta",
                        sets: 3,
                        reps: "10",
                        rpe: "RIR 1-2",
                        notes: "Apertura amplia, sentir la contracción del pectoral.",
                        videoUrl: "https://youtu.be/Ht9awbF2fBAFitball",
                        isSupersetStart: true,
                        customRestText: "Sin descanso (Pasa al 4.2)"
                    },
                    {
                        subOrder: 2,
                        name: "Extensión de rodilla en Máquina", // Extensión de Cuádriceps
                        sets: 3,
                        reps: "10",
                        rest: "90s", // Descanso después de la superserie completa
                        rpe: "RIR 1-2",
                        notes: "Extensión completa, apretar cuádriceps en la parte alta.",
                        videoUrl: "https://www.youtube.com/watch?v=5j5nnaRpslkPrensa"
                    }
                ]
            },
            {
                order: 5,
                name: "Triceps Trasnuca con Mancuernas/Kettlebell", // Extensión de Triceps Trasnuca
                sets: 3,
                reps: "12",
                rest: "90s",
                rpe: "RIR 1",
                notes: "Codos relativamente cerrados, extensión completa del tríceps por encima de la cabeza.",
                videoUrl: "https://youtu.be/1MgU2PO4_rIExtensión"
            }
        ]
    },
    "dia2": {
        name: "DÍA 2: TRACCIÓN",
        exercises: [
            {
                order: 1,
                name: "Remo con Barra",
                sets: 3,
                reps: "6,6,10",
                rest: "120s",
                rpe: "RPE 8-9",
                notes: "Inclinar torso a 45º, barra hacia el abdomen bajo, retracción escapular.",
                videoUrl: "https://youtu.be/MjnZ52mZgT0Remo"
            },
            {
                order: 2,
                name: "Peso Muerto Rumano con Barra / Deadlift Romanian Barbell",
                sets: 3,
                reps: "10",
                rest: "120s",
                rpe: "RPE 8",
                notes: "Bajar hasta donde permita la movilidad manteniendo la espalda recta. Sentir isquios y glúteos.",
                videoUrl: "https://youtu.be/R7FKam5GyNwBaja"
            },
            {
                order: 3,
                name: "Jalón al Pecho en Polea",
                sets: 3,
                reps: "10",
                rest: "90s",
                rpe: "RPE 7-8",
                notes: "Llevar la barra al pecho, retracción escapular, controlar la negativa.",
                videoUrl: "https://youtu.be/GYIhmy1P4vYJalón"
            },
            {
                order: 4,
                isSuperset: true,
                items: [
                    {
                        subOrder: 1,
                        name: "Pull Over en Polea alta / Cross over Pull Down",
                        sets: 3,
                        reps: "10",
                        rpe: "RIR 1-2",
                        notes: "Estirar bien los dorsales, recorrido controlado.",
                        videoUrl: "https://www.youtube.com/watch?v=Fe8Wuy9QQfIRemo",
                        isSupersetStart: true,
                        customRestText: "Sin descanso (Pasa al 4.2)"
                    },
                    {
                        subOrder: 2,
                        name: "Curl Femoral en Máquina",
                        sets: 3,
                        reps: "10",
                        rest: "90s", // Descanso después de la superserie completa
                        rpe: "RIR 1-2",
                        notes: "Foco en la contracción del isquiotibial, movimiento completo.",
                        videoUrl: "https://www.youtube.com/watch?v=Zhnhz1r_u-YCurl"
                    }
                ]
            },
            {
                order: 5,
                name: "Curl con Barra Z",
                sets: 3,
                reps: "12",
                rest: "90s",
                rpe: "RIR 1",
                notes: "Evitar balanceo excesivo, codos fijos, contracción completa del bíceps.",
                videoUrl: "https://youtu.be/4gYLTjNaTmwCurl"
            }
        ]
    }
};

const exerciseAlternatives = {
    "Press de Banca con Barra": [{ name: "Press de Banca con Mancuernas", muscleGroup: "Pecho, Tríceps, Hombro", notes: "Mayor rango de movimiento." }, { name: "Flexiones con Lastre", muscleGroup: "Pecho, Tríceps", notes: "Peso corporal + lastre."}],
    "Press Banca con Barra": [{ name: "Press de Banca con Mancuernas", muscleGroup: "Pecho, Tríceps, Hombro", notes: "Mayor rango de movimiento." }, { name: "Flexiones con Lastre", muscleGroup: "Pecho, Tríceps", notes: "Peso corporal + lastre."}],
    "Press Inclinado con Mancuernas": [{ name: "Press Inclinado con Barra", muscleGroup: "Pecho Sup, Hombro" }, { name: "Flexiones Inclinadas (manos elevadas)", muscleGroup: "Pecho Sup, Hombro" }],
    "Fondos en Paralelas": [{ name: "Press Declinado con Barra", muscleGroup: "Pecho Inf, Tríceps" }, { name: "Fondos entre Bancos (Tríceps)", muscleGroup: "Tríceps, Pecho" }],
    "Extensiones Tríceps Polea Alta con Cuerda": [{ name: "Press Francés con Barra Z", muscleGroup: "Tríceps" }, { name: "Extensiones sobre Cabeza con Mancuerna", muscleGroup: "Tríceps" }],
    "Triceps Trasnuca con Mancuernas/Kettlebell": [{ name: "Press Francés con Barra Z", muscleGroup: "Tríceps" }, { name: "Extensiones Tríceps Polea Alta con Cuerda", muscleGroup: "Tríceps" }],
    "Elevaciones Laterales con Mancuerna": [{ name: "Elevaciones Laterales en Polea", muscleGroup: "Hombro Lateral" }, { name: "Upright Row con Barra (agarre ancho)", muscleGroup: "Hombro Lateral, Trapecio" }],
    "Remo en Barra T con Apoyo en Pecho": [{ name: "Remo con Mancuerna a un Brazo (con apoyo)", muscleGroup: "Espalda Alta, Dorsales" }, { name: "Remo en Máquina con Apoyo al Pecho", muscleGroup: "Espalda Alta, Dorsales" }],
    "Curl de Bíceps con Barra Z": [{ name: "Curl de Bíceps con Barra Recta", muscleGroup: "Bíceps"}, { name: "Curl de Bíceps con Mancuernas (simultáneo o alterno)", muscleGroup: "Bíceps"}],
    "Curl con Barra Z": [{ name: "Curl con Barra Recta", muscleGroup: "Bíceps"}, { name: "Curl con Mancuernas (simultáneo o alterno)", muscleGroup: "Bíceps"}],
    "Jalón al Pecho en Polea Alta (Agarre Ancho Prono)": [{ name: "Dominadas (asistidas o libres)", muscleGroup: "Dorsales, Bíceps"}, {name: "Remo con Barra", muscleGroup: "Espalda, Bíceps"}],
    "Jalón al Pecho en Polea": [{ name: "Dominadas (asistidas o libres)", muscleGroup: "Dorsales, Bíceps"}, {name: "Jalón al Pecho con Agarre Estrecho", muscleGroup: "Dorsales, Bíceps"}],
    "Curl Concentrado con Mancuerna (en banco Scott si es posible)": [{ name: "Curl Concentrado con Mancuerna (sentado)", muscleGroup: "Bíceps (pico)"}, {name: "Curl Araña con Mancuernas", muscleGroup: "Bíceps (pico)"}],
    "Curl Femoral Sentado en Máquina": [{ name: "Curl Femoral Tumbado", muscleGroup: "Isquiotibiales"}, {name: "Peso Muerto Rumano con Mancuernas", muscleGroup: "Isquiotibiales, Glúteos"}],
    "Curl Femoral en Máquina": [{ name: "Curl Femoral Tumbado en Máquina", muscleGroup: "Isquiotibiales"}, {name: "Nordic Curl", muscleGroup: "Isquiotibiales"}],
    "Remo Gorila con Mancuernas o KTB": [{ name: "Remo con Mancuerna a un Brazo (sin apoyo)", muscleGroup: "Espalda Completa, Core"}, {name: "Renegade Row (Remo Renegado)", muscleGroup: "Espalda, Core, Pecho"}],
    "Face Pull con Cuerda en Polea": [{ name: "Band Pull-Aparts", muscleGroup: "Hombro Posterior, Trapecio" }, { name: "Pájaros con Mancuernas (Peck Deck Inverso)", muscleGroup: "Hombro Posterior" }],
    "Sentadilla Trasera con Barra": [{ name: "Prensa Inclinada", muscleGroup: "Cuádriceps, Glúteos" }, { name: "Sentadilla Goblet", muscleGroup: "Cuádriceps, Glúteos, Core" }],
    "Hack Squat": [{ name: "Prensa Inclinada", muscleGroup: "Cuádriceps, Glúteos" }, { name: "Sentadilla Frontal con Barra", muscleGroup: "Cuádriceps, Glúteos, Core" }],
    "Remo con Barra (Agarre Prono)": [{ name: "Remo con Mancuernas (ambos brazos)", muscleGroup: "Espalda Alta, Dorsales" }, { name: "Remo en Punta con Barra T", muscleGroup: "Espalda Media, Dorsales" }],
    "Remo con Barra": [{ name: "Remo con Mancuernas (ambos brazos)", muscleGroup: "Espalda Alta, Dorsales" }, { name: "Remo Pendlay", muscleGroup: "Espalda Completa" }],
    "Encogimientos Abdominales (Crunches)": [{ name: "Encogimientos en Polea Alta", muscleGroup: "Abdomen Superior" }, { name: "Rueda Abdominal (Ab Wheel Rollout)", muscleGroup: "Core Completo" }],
    "Plancha Abdominal (Plank)": [{ name: "Plancha Lateral", muscleGroup: "Core, Oblicuos" }, { name: "Plancha con Elevación de Brazo/Pierna", muscleGroup: "Core (Anti-rotación)" }],
    "Elevaciones de Piernas Tumbado": [{ name: "Elevaciones de Piernas Colgado (Hanging Leg Raises)", muscleGroup: "Abdomen Inferior, Flexores Cadera" }, { name: "Encogimientos Inversos (Reverse Crunches)", muscleGroup: "Abdomen Inferior" }],
    "Peso Muerto Rumano con Mancuernas": [{ name: "Peso Muerto Rumano con Barra", muscleGroup: "Isquiotibiales, Glúteos" }, { name: "Good Mornings con Barra", muscleGroup: "Isquiotibiales, Glúteos, Espalda Baja" }],
    "Peso Muerto Rumano con Barra / Deadlift Romanian Barbell": [{ name: "Peso Muerto Rumano con Mancuernas", muscleGroup: "Isquiotibiales, Glúteos" }, { name: "Good Mornings con Barra", muscleGroup: "Isquiotibiales, Glúteos, Espalda Baja" }],
    "Prensa Inclinada": [{ name: "Sentadilla Hack", muscleGroup: "Cuádriceps, Glúteos" }, { name: "Zancadas con Barra o Mancuernas", muscleGroup: "Cuádriceps, Glúteos" }],
    "Cruces en Polea Alta": [{ name: "Aperturas con Mancuernas en Banco Plano", muscleGroup: "Pecho" }, { name: "Aperturas en Máquina Contractora (Pec Deck)", muscleGroup: "Pecho" }],
    "Extensión de rodilla en Máquina": [{ name: "Sentadilla Sissy (con o sin peso)", muscleGroup: "Cuádriceps" }, { name: "Zancadas Cortas", muscleGroup: "Cuádriceps" }],
    "Pull Over en Polea alta / Cross over Pull Down": [{ name: "Pullover con Mancuerna", muscleGroup: "Dorsal, Pecho, Serrato" }, { name: "Pull Over en Máquina", muscleGroup: "Dorsal, Serrato" }],
    "Elevación de Talones de Pie (en máquina o con peso)": [{ name: "Elevación de Talones Sentado (para sóleo)", muscleGroup: "Sóleo" }, { name: "Elevación de Talones en Prensa", muscleGroup: "Gemelos" }]
};
// =================================================================================
// FIN DE DATOS DE LA RUTINA Y ALTERNATIVAS
// =================================================================================
console.log("Datos de entrenamiento (2 días: Empuje/Tracción) y alternativas definidos en app_datos.js");

