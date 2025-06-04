// Contenido de app_datos.js

// =================================================================================
// DATOS DE LA RUTINA (2 DÍAS)
// =================================================================================
const workoutData = {
    "dia1": {
        name: "Empuje Completo",
        exercises: [
            {
                order: 1,
                name: "Press Banca con Barra",
                sets: 3,
                reps: "6, 6, 10",
                rest: "120s",
                notes: "",
                videoUrl: "https://youtu.be/PKpsrFS2uacPress"
            },
            {
                order: 2,
                name: "Hack Squat",
                sets: 3,
                reps: "12, 10, 8",
                rest: "90s",
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=6teL-OyXuQsThruster"
            },
            {
                order: 3,
                name: "Press Banca con Mancuernas",
                sets: 3,
                reps: "10",
                rest: "90s",
                notes: "",
                videoUrl: "https://youtu.be/hXCJC2ApcdgPress"
            },
            {
                order: 4,
                name: "Cruces en Polea Alta",
                isSuperset: true,
                items: [
                    {
                        name: "Cruces en Polea Alta",
                        subOrder: 1,
                        sets: 3,
                        reps: "10",
                        isSupersetStart: true,
                        notes: "undefined",
                        videoUrl: "https://youtu.be/Ht9awbF2fBAFitball"

                    },
                    {
                        name: "Press Francés con Barra Z",
                        subOrder: 2,
                        sets: 3,
                        reps: "12",
                        notes: "",
                        videoUrl: "https://www.youtube.com/watch?v=k8KH84637RwPress"
                        ,rest: "90s"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/Ht9awbF2fBAFitball"
            },
            {
                order: 5,
                name: "Sentadilla Goblet con Mancuerna/Kettlebell",
                sets: 2,
                reps: "16",
                notes: "",
                videoUrl: "https://youtu.be/xPVfWX_9ytkSentadilla"
            }
        ]
    },
    "dia2": {
        name: "Tracción Completa",
        exercises: [
            {
                order: 1,
                name: "Remo en Barra T",
                sets: 3,
                reps: "6, 6, 10",
                rest: "120s",
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=AgxCPp37waQRemo"
            },
            {
                order: 2,
                name: "Peso Muerto Rumano con Barra / Deadlift Romanian Barbell",
                sets: 3,
                reps: "12, 10, 8",
                rest: "90s",
                notes: "",
                videoUrl: "https://youtu.be/R7FKam5GyNwBaja"
            },
            {
                order: 3,
                name: "Jalón al Pecho en Polea",
                sets: 3,
                reps: "10",
                rest: "90s",
                notes: "",
                videoUrl: "https://youtu.be/GYIhmy1P4vYJalón"
            },
            {
                order: 4,
                name: "Curl con Barra Z",
                isSuperset: true,
                items: [
                    {
                        name: "Curl con Barra Z",
                        subOrder: 1,
                        sets: 3,
                        reps: "10",
                        isSupersetStart: true,
                        notes: "undefined",
                        videoUrl: "https://youtu.be/4gYLTjNaTmwCurl"

                    },
                    {
                        name: "Face Pull en Polea Alta",
                        subOrder: 2,
                        sets: 3,
                        reps: "12",
                        notes: "",
                        videoUrl: "https://www.youtube.com/watch?v=tZN8KYDSCRoFace"
                        ,rest: "90s"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/4gYLTjNaTmwCurl"
            },
            {
                order: 5,
                name: "Curl Martillo con Mancuernas",
                sets: 2,
                reps: "16",
                notes: "",
                videoUrl: "https://youtu.be/fcFsPoJY9lgCurl"
            }
        ]
    }
};

const exerciseAlternatives = {
    "Press Banca con Barra": [
        { name: "Press Banca Inclinado", videoUrl: "https://www.youtube.com/watch?v=4tPP-4K5kMQPress" }
    ],
    "Press Banca con Mancuernas": [
        { name: "Press Inclinado con Mancuernas", videoUrl: "https://youtu.be/ZE4M73kXB5APress" }
    ]
};
// =================================================================================
// FIN DE DATOS DE LA RUTINA Y ALTERNATIVAS
// =================================================================================
console.log("Datos de rutina cargados desde el creador. Alternativas actualizadas con videos.");
