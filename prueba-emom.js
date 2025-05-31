// Contenido de app_datos.js

// =================================================================================
// DATOS DE LA RUTINA (1 DÍAS)
// =================================================================================
const workoutData = {
    "dia1": {
        name: "DÍA 1:  EMOM 6",
        exercises: [
            {
                order: 1,
                name: "Press Banca Inclinado",
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=4tPP-4K5kMQPress"
            },
            {
                order: 2,
                name: "Remo con Barra",
                isSuperset: true,
                items: [
                    {
                        name: "Remo con Barra",
                        subOrder: 1,
                        sets: 3,
                        reps: "10",
                        isSupersetStart: true,
                        notes: "undefined",
                        videoUrl: "https://youtu.be/MjnZ52mZgT0Remo"

                    },
                    {
                        name: "Swing Ruso Alterno con Kettlebell",
                        subOrder: 2,
                        sets: 3,
                        reps: "12",
                        notes: "",
                        videoUrl: "https://youtu.be/rHgKkGjmHNISwing"
                        ,rest: "90s"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/MjnZ52mZgT0Remo"
            },
            {
                order: 3,
                name: "EMOM 8 MIN",
                isSuperset: true,
                isEMOM: true,
                emomDetails: {
                    totalDurationMinutes: 8
                },
                items: [
                    {
                        subOrder: 1,
                        name: "Snatch con Kettlebell",
                        sets: 1,
                        reps: "10",
                        isEMOMItem: true,
                        videoUrl: "https://youtu.be/KlzSHIMdPTcAb"
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
                notes: "",
                videoUrl: "https://youtu.be/KlzSHIMdPTcAb"
            },
            {
                order: 4,
                name: "Circuito FULL",
                isSuperset: true,
                circuitDetails: {
                    totalRounds: 3,
                    restBetweenExercisesSeconds: 15,
                    restBetweenRoundsSeconds: 60
                },
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=GFUw7S0wDxkFlexiones"
            }
        ]
    }
};

const exerciseAlternatives = {
    "Press Banca Inclinado": [
        { name: "Press Banca con Barra", videoUrl: "https://youtu.be/PKpsrFS2uacPress" }
    ]
};
// =================================================================================
// FIN DE DATOS DE LA RUTINA Y ALTERNATIVAS
// =================================================================================
console.log("Datos de rutina cargados desde el creador. Alternativas actualizadas con videos.");
