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
                reps: "6-10", // Tres series: dos de 6 reps, una de 10 reps
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
    "Press Banca con Barra": [
        { name: "Press Banca con Mancuernas", videoUrl: "https://youtu.be/hXCJC2ApcdgPress" },
        { name: "Flexiones / Push Ups", videoUrl: "https://www.youtube.com/watch?v=GFUw7S0wDxkFlexiones" }
    ],
    "Hack Squat": [
        { name: "Prensa Inclinada 45", videoUrl: "https://www.youtube.com/watch?v=IqjbBRNqJpsPrensa" },
        { name: "Sentadilla Frontal con Barra", videoUrl: "https://youtu.be/ErXO1WKVlPISentadilla" }
    ],
    "Press Inclinado con Mancuernas": [
        { name: "Press Banca Inclinado", videoUrl: "https://www.youtube.com/watch?v=4tPP-4K5kMQPress" },
        { name: "Press en Máquina inclinado", videoUrl: "https://www.youtube.com/watch?v=nna4gQD-v9YAperturas" }
    ],
    "Cruces en Polea Alta": [
        { name: "Aperturas en Banco con Mancuernas", videoUrl: "https://www.youtube.com/watch?v=dfmq1UOuUXoAperturas" },
        { name: "Aperturas en Máquina Contractora / Mariposa", videoUrl: "https://www.youtube.com/watch?v=gMzwVArofx0Aperturas" }
    ],
    "Extensión de rodilla en Máquina": [
        { name: "Zancadas Caminando con Mancuernas/Kettlebells - Cuádriceps", videoUrl: "https://youtu.be/7tRy9X0ibnkZancadas" },
        { name: "Sentadilla Goblet con Mancuerna/Kettlebell", videoUrl: "https://youtu.be/xPVfWX_9ytkSentadilla" }
    ],
    "Triceps Trasnuca con Mancuernas/Kettlebell": [
        { name: "Press Francés con Barra Z", videoUrl: "https://www.youtube.com/watch?v=k8KH84637RwPress" },
        { name: "Extensión de Codo en Polea Alta", videoUrl: "https://www.youtube.com/watch?v=z7gqbcjkzU0Extensión" }
    ],
    "Remo con Barra": [
        { name: "Remo con Mancuerna Unilateral", videoUrl: "https://youtu.be/EPXL9QIasLMRemo" },
        { name: "Remo en Barra T", videoUrl: "https://www.youtube.com/watch?v=AgxCPp37waQRemo" }
    ],
    "Peso Muerto Rumano con Barra / Deadlift Romanian Barbell": [
        { name: "Peso Muerto Rumano con Mancuernas / Deadlift Romanian DBs", videoUrl: "https://www.youtube.com/watch?v=mpg_qmBdmxcPeso" },
        { name: "Buenos Días con Barra", videoUrl: "https://youtu.be/IKNPwb8BSmMThruster" }
    ],
    "Jalón al Pecho en Polea": [
        { name: "Dominadas / Pull Ups", videoUrl: "https://www.youtube.com/watch?v=7ht8tmdAyqwDominadas" },
        { name: "Jalón al Pecho Supino en Polea", videoUrl: "https://youtu.be/rimdRzyIJkAJalón" }
    ],
    "Pull Over en Polea alta / Cross over Pull Down": [
        { name: "Pullover con Kettlebell", videoUrl: "https://www.youtube.com/watch?v=aGiAvWpeyAIESPALDADominadas" },
        { name: "Face Pull en Polea Alta", videoUrl: "https://www.youtube.com/watch?v=tZN8KYDSCRoFace" }
    ],
    "Curl Femoral en Máquina": [
        { name: "Nordic Curl", videoUrl: "https://www.youtube.com/watch?v=N_jZzObyGxECurl" },
        { name: "Curl Femoral desde Puente (Con Sliders / Toalla)", videoUrl: "https://www.youtube.com/watch?v=HI3Bb1SAru8Adductores" }
    ],
    "Curl con Barra Z": [
        { name: "Curl con Mancuernas de Pie", videoUrl: "https://youtu.be/8STuQuoDMR0Curl" },
        { name: "Curl Martillo con Mancuernas", videoUrl: "https://youtu.be/fcFsPoJY9lgCurl" }
    ]
};
// =================================================================================
// FIN DE DATOS DE LA RUTINA Y ALTERNATIVAS
// =================================================================================
console.log("Datos de rutina para Ivan cargados desde ivan-rutina.js. Alternativas actualizadas con videos.");

