// Contenido de app_datos.js

// =================================================================================
// DATOS DE LA RUTINA (1 DÍAS)
// =================================================================================
const workoutData = {
    "dia1": {
        name: "DÍA 1: Cadena Posterior Completa",
        exercises: [
            {
                order: 1,
                name: "Peso Muerto Convencional con Barra",
                sets: 3,
                reps: "6, 6, 10",
                rest: "150s",
                notes: "Salimos desde una ligera altura (steps o discos de 20kg)",
                videoUrl: "https://youtu.be/wgq70sy0c_xA"
            },
            {
                order: 2,
                name: "Jalón al Pecho en Polea",
                sets: 3,
                reps: "8, 8, 12",
                rest: "120s",
                notes: "",
                videoUrl: "https://youtu.be/GYIhmy1P4vY"
            },
            {
                order: 3,
                name: "Curl con Barra Recta",
                sets: 3,
                reps: "12, 10, 8",
                rest: "90s",
                notes: "",
                videoUrl: "https://youtu.be/0TjnWWqQfUw"
            },
            {
                order: 4,
                name: "Remo en Barra T",
                isSuperset: true,
                items: [
                    {
                        name: "Remo en Barra T",
                        subOrder: 1,
                        sets: 3,
                        reps: "12, 10, 8",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/watch?v=AgxCPp37waQ"
                    },
                    {
                        name: "Curl Martillo con Mancuernas",
                        subOrder: 2,
                        sets: 3,
                        reps: "12",
                        notes: "Sin descanso. ",
                        rest: "90s",
                        videoUrl: "https://youtu.be/fcFsPoJY9lg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=AgxCPp37waQ"
            },
            {
                order: 5,
                name: "Curl con Mancuernas Sentado en Banco Inclinado",
                isSuperset: true,
                items: [
                    {
                        name: "Curl con Mancuernas Sentado en Banco Inclinado",
                        subOrder: 1,
                        sets: 3,
                        reps: "8-10",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/S32a3nYiWko"
                    },
                    {
                        name: "Pájaros con Mancuernas",
                        subOrder: 2,
                        sets: 3,
                        reps: "12-15",
                        rest: "90s",
                        videoUrl: "https://youtu.be/EMrOS6P90lM"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/S32a3nYiWko"
            }
        ]
    }
};

const exerciseAlternatives = {
    "Peso Muerto Convencional con Barra": [
        { name: "Peso Muerto Rumano con Barra", videoUrl: "https://youtu.be/R7FKam5GyNw" }
    ],
    "Jalón al Pecho en Polea": [
        { name: "Dominadas / Pull Ups", videoUrl: "https://www.youtube.com/watch?v=7ht8tmdAyqw" }
    ],
    "Curl con Barra Recta": [
        { name: "Curl Scott con Barra Z", videoUrl: "https://www.youtube.com/watch?v=-Rzppjmt6ag" }
    ]
};

console.log("Datos de rutina cargados desde el creador.");
// Export if using modules in the target app, or remove if it's a simple script include
// export { workoutData, exerciseAlternatives };
