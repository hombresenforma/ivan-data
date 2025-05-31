// Contenido de app_datos.js

// =================================================================================
// DATOS DE LA RUTINA (1 DÍAS)
// =================================================================================
const workoutData = {
    "dia1": {
        name: "DÍA 1: Prueba EMOMS 3",
        exercises: [
            {
                order: 1,
                type: "normal",
                name: "Press Banca en Multipower",
                sets: 3,
                reps: "12",
                notes: "",
                videoUrl: "https://youtu.be/w-5ovE5O5iUPress"
            },
            {
                order: 2,
                type: "superset",
                name: "Remo con Mancuerna Unilateral",
                sets: 3,
                reps: "12",
                customRestText: "Sin descanso (Pasa al siguiente sub-ejercicio)",
                items: [
                    {
                        subOrder: 2,
                        name: "Remo Inclinado en Landmine",
                        sets: 3,
                        reps: "12",
                        notes: "",
                        videoUrl: "https://youtu.be/5gakUsid-LgRemo"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/EPXL9QIasLMRemo"
            },
            {
                order: 3,
                type: "emom",
                name: "EMOM DE PRUEBA",
                isSuperset: true,
                isEMOM: true,
                emomDetails: {
                    totalDurationMinutes: 8
                },
                items: [
                    {
                        subOrder: 1,
                        name: "Swing Ruso Alterno con Kettlebell",
                        sets: 1,
                        reps: "15",
                        isEMOMItem: true,
                        videoUrl: "https://youtu.be/rHgKkGjmHNISwing"
                    },
                    {
                        subOrder: 2,
                        name: "Pullover con Kettlebell",
                        sets: 1,
                        reps: "10",
                        isEMOMItem: true,
                        videoUrl: "https://www.youtube.com/watch?v=aGiAvWpeyAIESPALDADominadas"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/rHgKkGjmHNISwing"
            },
            {
                order: 4,
                type: "circuit",
                name: "Circuito 3 ejercicios",
                circuitRounds: 4,
                circuitWorkTime: "40",
                circuitRestBetweenExercises: "20",
                circuitRestBetweenRounds: "30",
                items: [
                    { subOrder: 1, name: "Sentadilla Frontal con Mancuernas/Kettlebells", reps: "40", videoUrl: "https://youtu.be/lfb6neUpfP8Sentadilla" },
                    { subOrder: 2, name: "Gorilla Row con Kettlebells/Mancuernas", reps: "40", videoUrl: "https://youtu.be/4hKPsdWsXl8Máquina" },
                    { subOrder: 3, name: "Sentadilla Sumo con Mancuerna/Kettlebell", reps: "40", videoUrl: "https://youtu.be/ifBHyfgLe8kSentadilla" }
                ],
                notes: "",
                videoUrl: "https://youtu.be/lfb6neUpfP8Sentadilla"
            }
        ]
    }
};

const exerciseAlternatives = {
    "Press Banca en Multipower": [
        { name: "Movilidad - Bradford Press", videoUrl: "https://www.youtube.com/watch?v=YlGlSX50DL0Control" }
    ]
};
// =================================================================================
// FIN DE DATOS DE LA RUTINA Y ALTERNATIVAS
// =================================================================================
console.log("Datos de rutina cargados desde el creador. Alternativas actualizadas con videos.");
