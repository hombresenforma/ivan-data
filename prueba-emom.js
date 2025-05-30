// Contenido de app_datos.js

// =================================================================================
// DATOS DE LA RUTINA (1 DÍAS)
// =================================================================================
const workoutData = {
    "dia1": {
        name: "DÍA 1: Prueba EMOM 2",
        exercises: [
            {
                order: 1,
                type: "normal",
                name: "Press Banca con Barra",
                sets: 3,
                reps: "10",
                rest: "90s",
                rpe: "",
                notes: "",
                videoUrl: "https://youtu.be/PKpsrFS2uacPress"
            },
            {
                order: 2,
                type: "normal",
                name: "Remo con Barra",
                sets: 3,
                reps: "30s",
                rest: "90s",
                rpe: "",
                notes: "",
                videoUrl: "https://youtu.be/MjnZ52mZgT0Remo"
            },
            {
                order: 3,
                type: "superset",
                name: "",
                sets: 3,
                reps: "10",
                customRestText: "Sin descanso (Pasa al siguiente sub-ejercicio)",
                items: [
                    {
                        subOrder: 1,
                        name: "Snatch con Kettlebell",
                        sets: 3,
                        reps: "10",
                        rpe: "",
                        notes: "",
                        videoUrl: "https://youtu.be/KlzSHIMdPTcAb"

                    },
                    {
                        subOrder: 2,
                        name: "Swing Ruso Alterno con Kettlebell",
                        sets: 3,
                        reps: "10",
                        rpe: "",
                        notes: "",
                        videoUrl: "https://youtu.be/rHgKkGjmHNISwing"

                    }
                ],
                rest: "90s",
                rpe: "",
                notes: "",
                videoUrl: ""
            },
            {
                order: 4,
                type: "emom",
                name: "Remo con Mancuerna Unilateral",
                isSuperset: true,
                isEMOM: true,
                emomDetails: {
                    totalDurationMinutes: 10
                },
                sets: 10,
                items: [
                    {
                        subOrder: 1,
                        name: "Pullover con Kettlebell",
                        sets: 1,
                        reps: "10",
                        isEMOMItem: true,
                        videoUrl: "https://www.youtube.com/watch?v=aGiAvWpeyAIESPALDADominadas"

                    },
                    {
                        subOrder: 2,
                        name: "Gorilla Row con Kettlebells/Mancuernas",
                        sets: 1,
                        reps: "20",
                        isEMOMItem: true,
                        videoUrl: "https://youtu.be/4hKPsdWsXl8Máquina"

                    }
                ],
                rest: "",
                rpe: "",
                notes: "",
                videoUrl: "https://youtu.be/EPXL9QIasLMRemo"
            },
            {
                order: 5,
                type: "emom",
                name: "EMOM 5 rondas",
                isSuperset: true,
                isEMOM: true,
                emomDetails: {
                    totalDurationMinutes: 10
                },
                sets: 10,
                items: [
                    {
                        subOrder: 1,
                        name: "Pullover con Kettlebell",
                        sets: 1,
                        reps: "10",
                        isEMOMItem: true,
                        videoUrl: "https://www.youtube.com/watch?v=aGiAvWpeyAIESPALDADominadas"

                    },
                    {
                        subOrder: 2,
                        name: "Gorilla Row con Kettlebells/Mancuernas",
                        sets: 1,
                        reps: "20",
                        isEMOMItem: true,
                        videoUrl: "https://youtu.be/4hKPsdWsXl8Máquina"

                    }
                ],
                rest: "",
                rpe: "",
                notes: "",
                videoUrl: ""
            },
            {
                order: 6,
                type: "circuit",
                name: "",
                circuitRounds: 3,
                circuitWorkTime: "45",
                circuitRestBetweenExercises: "10",
                circuitRestBetweenRounds: "75s",
                items: [
                    { subOrder: 1, name: "Press Militar Sentado con Mancuernas", reps: "45", videoUrl: "https://www.youtube.com/watch?v=_IMpMCr87Cg&list=PLDmmv3PadX2NuaxMhWe4DMVBnkUuHymCK&index=187Press" },
                    { subOrder: 2, name: "Press Banca con Mancuernas", reps: "45", videoUrl: "https://youtu.be/hXCJC2ApcdgPress" }
                ],
                rest: "",
                rpe: "",
                notes: "",
                videoUrl: ""
            }
        ]
    }
};

const exerciseAlternatives = {
};
// =================================================================================
// FIN DE DATOS DE LA RUTINA Y ALTERNATIVAS
// =================================================================================
console.log("Datos de rutina cargados desde el creador. Alternativas actualizadas con videos.");
