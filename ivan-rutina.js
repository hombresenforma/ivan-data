// Contenido de app_datos.js

// =================================================================================
// DATOS DE LA RUTINA (1 DÍAS)
// =================================================================================
const workoutData = {
    "dia1": {
        name: "DÍA 1: Tracción Completa",
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
    "Remo en Barra T": [
        { name: "Remo con Mancuerna Unilateral", videoUrl: "https://youtu.be/EPXL9QIasLMRemo" }
    ]
};
// =================================================================================
// FIN DE DATOS DE LA RUTINA Y ALTERNATIVAS
// =================================================================================
console.log("Datos de rutina cargados desde el creador. Alternativas actualizadas con videos.");
