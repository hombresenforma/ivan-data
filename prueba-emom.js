// Contenido de app_datos.js

// =================================================================================
// DATOS DE LA RUTINA (1 DÍAS)
// =================================================================================
const workoutData = {
    "dia1": {
        name: "DÍA 1: EMOM 7",
        exercises: [
            {
                order: 1,
                name: "Press Banca Inclinado",
                sets: 4,
                reps: "6, 6, 10",
                rest: "120s",
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=4tPP-4K5kMQPress"
            },
            {
                order: 2,
                name: "Hack Squat",
                isSuperset: true,
                items: [
                    {
                        name: "Hack Squat",
                        subOrder: 1,
                        sets: 3,
                        reps: "12, 10, 8",
                        isSupersetStart: true,
                        notes: "undefined",
                        videoUrl: "https://www.youtube.com/watch?v=6teL-OyXuQsThruster"

                    },
                    {
                        name: "Plancha - de Rodillas",
                        subOrder: 2,
                        sets: 3,
                        reps: "30s",
                        notes: "",
                        videoUrl: "https://youtu.be/yMo5ppT6bgYPlancha"
                        ,rest: "90s"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=6teL-OyXuQsThruster"
            },
            {
                order: 3,
                name: "EMOM (",
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
                        reps: "12",
                        isEMOMItem: true,
                        videoUrl: "https://www.youtube.com/watch?v=_IMpMCr87Cg&list=PLDmmv3PadX2NuaxMhWe4DMVBnkUuHymCK&index=187Press"
                    },
                    {
                        subOrder: 2,
                        name: "Elevaciones Laterales con Mancuernas",
                        sets: 1,
                        reps: "12",
                        isEMOMItem: true,
                        videoUrl: "https://youtu.be/rhmW_fhB4csElevaciones"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=_IMpMCr87Cg&list=PLDmmv3PadX2NuaxMhWe4DMVBnkUuHymCK&index=187Press"
            }
        ]
    }
};

const exerciseAlternatives = {
    "Press Banca Inclinado": [
        { name: "Press Inclinado con Mancuernas", videoUrl: "https://youtu.be/ZE4M73kXB5APress" }
    ]
};
// =================================================================================
// FIN DE DATOS DE LA RUTINA Y ALTERNATIVAS
// =================================================================================
console.log("Datos de rutina cargados desde el creador. Alternativas actualizadas con videos.");
