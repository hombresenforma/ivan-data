// Contenido de app_datos.js

// =================================================================================
// DATOS DE LA RUTINA (3 DÍAS)
// =================================================================================
const workoutData = {
    "dia1": {
        name: "Empuje Completo (Ant)",
        exercises: [
            {
                order: 1,
                name: "Press Banca con Barra",
                sets: 4,
                reps: "6, 6, 10, 10",
                rest: "120s",
                rpe: "N/A",
                notes: "",
                videoUrl: "https://youtu.be/PKpsrFS2uacPress"
            },
            {
                order: 2,
                name: "Hack Squat",
                sets: 3,
                reps: "12, 10, 8",
                rest: "90s",
                rpe: "N/A",
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=6teL-OyXuQsThruster"
            },
            {
                order: 3,
                name: "Press Inclinado con Mancuernas",
                sets: 3,
                reps: "10",
                rest: "90s",
                rpe: "N/A",
                notes: "Excéntrica controlada y pausa abajo",
                videoUrl: "https://youtu.be/ZE4M73kXB5APress"
            },
            {
                order: 4,
                name: "Press Militar Sentado con Mancuernas",
                sets: 3,
                isSuperset: true,
                customRestText: "Sin descanso (Pasa al siguiente sub-ejercicio)",
                rpe: "N/A",
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=_IMpMCr87Cg&list=PLDmmv3PadX2NuaxMhWe4DMVBnkUuHymCK&index=187Press",
                items: [
                    {
                        subOrder: 1,
                        name: "Sentadilla Goblet con Mancuerna/Kettlebell",
                        sets: 3,
                        reps: "12",
                        isSupersetStart: true,
                        rest: "90s",
                        rpe: "N/A",
                        notes: "",
                        videoUrl: "https://youtu.be/xPVfWX_9ytkSentadilla"
                    }
                ]
            },
            {
                order: 5,
                name: "Press Francés con Barra Z en Banco Inclinado",
                sets: 3,
                reps: "10",
                rest: "90S",
                rpe: "N/A",
                notes: "",
                videoUrl: "https://youtu.be/hFk6xzt1DWMPress"
            }
        ]
    },
    "dia2": {
        name: "Tracción Completa (Post)",
        exercises: [
            {
                order: 1,
                name: "Remo en Barra T",
                sets: 4,
                reps: "6, 6, 10, 10",
                rest: "120s",
                rpe: "N/A",
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=AgxCPp37waQRemo"
            },
            {
                order: 2,
                name: "Peso Muerto Rumano con Barra / Deadlift Romanian Barbell",
                sets: 3,
                reps: "12, 10, 8",
                rest: "90s",
                rpe: "N/A",
                notes: "",
                videoUrl: "https://youtu.be/R7FKam5GyNwBaja"
            },
            {
                order: 3,
                name: "Curl Scott Barra Z",
                sets: 3,
                reps: "10",
                rest: "90s",
                rpe: "N/A",
                notes: "Excéntrica controlada y pausa abajo",
                videoUrl: "https://www.youtube.com/watch?v=-Rzppjmt6agCurl"
            },
            {
                order: 4,
                name: "Jalón al Pecho en Polea",
                sets: 3,
                isSuperset: true,
                customRestText: "Sin descanso (Pasa al siguiente sub-ejercicio)",
                rpe: "N/A",
                notes: "",
                videoUrl: "https://youtu.be/GYIhmy1P4vYJalón",
                items: [
                    {
                        subOrder: 1,
                        name: "Elevaciones Laterales con Mancuernas",
                        sets: 3,
                        reps: "12",
                        isSupersetStart: true,
                        rest: "90s",
                        rpe: "N/A",
                        notes: "",
                        videoUrl: "https://youtu.be/rhmW_fhB4csElevaciones"
                    }
                ]
            },
            {
                order: 5,
                name: "Curl con Mancuernas Sentado en Banco Inclinado",
                sets: 3,
                reps: "10",
                rest: "90S",
                rpe: "N/A",
                notes: "",
                videoUrl: "https://youtu.be/S32a3nYiWkoCurl"
            }
        ]
    },
    "dia3": {
        name: "Torso Completo",
        exercises: [
            {
                order: 1,
                name: "Dominadas Supinas / Chin Ups",
                sets: 4,
                isSuperset: true,
                customRestText: "Sin descanso (Pasa al siguiente sub-ejercicio)",
                rpe: "N/A",
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=dN5DqMhO18sDominadas",
                items: [
                    {
                        subOrder: 1,
                        name: "Fondos en Paralelas / Anillas",
                        sets: 4,
                        reps: "10",
                        isSupersetStart: true,
                        rest: "60s",
                        rpe: "N/A",
                        notes: "",
                        videoUrl: "https://youtu.be/_wzZ7UiGVbYNo"
                    }
                ]
            },
            {
                order: 2,
                name: "Remo Invertido",
                sets: 4,
                isSuperset: true,
                customRestText: "Sin descanso (Pasa al siguiente sub-ejercicio)",
                rpe: "N/A",
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=hdEpF62-Jb8Face",
                items: [
                    {
                        subOrder: 1,
                        name: "Flexiones / Push Ups Inclinadas",
                        sets: 4,
                        reps: "12",
                        isSupersetStart: true,
                        rest: "60s",
                        rpe: "N/A",
                        notes: "",
                        videoUrl: "https://www.youtube.com/watch?v=6sG0u2WNMY4Flexiones"
                    }
                ]
            }
        ]
    }
};

const exerciseAlternatives = {
    "Hack Squat": [
        { name: "Prensa Inclinada 45", videoUrl: "https://www.youtube.com/watch?v=IqjbBRNqJpsPrensa" }
    ],
    "Peso Muerto Rumano con Barra / Deadlift Romanian Barbell": [
        { name: "Prensa Inclinada 45", videoUrl: "https://www.youtube.com/watch?v=IqjbBRNqJpsPrensa" }
    ]
};
// =================================================================================
// FIN DE DATOS DE LA RUTINA Y ALTERNATIVAS
// =================================================================================
console.log("Datos de rutina cargados desde el creador. Alternativas actualizadas con videos.");
