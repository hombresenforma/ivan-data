// Contenido de app_datos.js

// =================================================================================
// DATOS DE LA RUTINA (1 DÍAS)
// =================================================================================
const workoutData = {
    "dia1": {
        name: "DÍA 1: Prueba EMOMS 5",
        exercises: [
            {
                order: 1,
                name: "Press Banca con Barra",
                notes: "",
                videoUrl: "https://youtu.be/PKpsrFS2uacPress"
            },
            {
                order: 2,
                name: "Cruces en Polea Alta",
                isSuperset: true,
                notes: "",
                videoUrl: "https://youtu.be/Ht9awbF2fBAFitball"
            },
            {
                order: 3,
                name: "Press Inclinado con Mancuernas",
                notes: "",
                videoUrl: "https://youtu.be/ZE4M73kXB5APress"
            },
            {
                order: 4,
                name: "EMOM 8 min",
                isSuperset: true,
                isEMOM: true,
                emomDetails: {
                    totalDurationMinutes: 8
                },
                items: [
                    {
                        subOrder: 1,
                        name: "Press Militar Sentado con Mancuernas",
                        sets: 1,
                        reps: "10",
                        isEMOMItem: true,
                        videoUrl: "https://www.youtube.com/watch?v=_IMpMCr87Cg&list=PLDmmv3PadX2NuaxMhWe4DMVBnkUuHymCK&index=187Press"
                    },
                    {
                        subOrder: 2,
                        name: "Elevaciones Laterales con Mancuernas",
                        sets: 1,
                        reps: "10",
                        isEMOMItem: true,
                        videoUrl: "https://youtu.be/rhmW_fhB4csElevaciones"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=_IMpMCr87Cg&list=PLDmmv3PadX2NuaxMhWe4DMVBnkUuHymCK&index=187Press"
            },
            {
                order: 5,
                name: "Circuito EMPUJE",
                isSuperset: true,
                circuitDetails: {
                    totalRounds: 3,
                    restBetweenExercisesSeconds: 10,
                    restBetweenRoundsSeconds: 60
                },
                notes: "",
                videoUrl: "https://youtu.be/hFk6xzt1DWMPress"
            }
        ]
    }
};

const exerciseAlternatives = {
    "Press Banca con Barra": [
        { name: "Press Banca en Multipower", videoUrl: "https://youtu.be/w-5ovE5O5iUPress" }
    ]
};
// =================================================================================
// FIN DE DATOS DE LA RUTINA Y ALTERNATIVAS
// =================================================================================
console.log("Datos de rutina cargados desde el creador. Alternativas actualizadas con videos.");
