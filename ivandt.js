// Contenido de app_datos.js

// =================================================================================
// DATOS DE LA RUTINA (3 DÍAS)
// =================================================================================
const datosCliente = {
    activeWeeks: "none"
};
// Opciones posibles: "odd", "even", "none", "all"
const workoutData = {
    "dia1": {
        name: "Cadena Posterior Completa",
        exercises: [
            {
                order: 1,
                name: "Peso Muerto Rumano con Barra",
                sets: 3,
                reps: "6, 6, 10",
                rest: "150s",
                notes: "Salimos desde una ligera altura (steps o discos de 20kg)",
                videoUrl: "https://youtu.be/R7FKam5GyNw",
                imageUrl: "https://i.ytimg.com/vi/R7FKam5GyNw/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Jalón al Pecho en Polea",
                sets: 3,
                reps: "8, 8, 12",
                rest: "120s",
                notes: "",
                videoUrl: "https://youtu.be/GYIhmy1P4vY",
                imageUrl: "https://i.ytimg.com/vi/GYIhmy1P4vY/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Curl con Barra Recta",
                sets: 3,
                reps: "12, 10, 8",
                rest: "90s",
                notes: "",
                videoUrl: "https://youtu.be/0TjnWWqQfUw",
                imageUrl: "https://i.ytimg.com/vi/0TjnWWqQfUw/mqdefault.jpg"
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
                        videoUrl: "https://www.youtube.com/watch?v=AgxCPp37waQ",
                        imageUrl: "https://i.ytimg.com/vi/AgxCPp37waQ/mqdefault.jpg"
                    },
                    {
                        name: "Curl Martillo con Mancuernas",
                        subOrder: 2,
                        sets: 3,
                        reps: "12",
                        notes: "Sin descanso. ",
                        rest: "90s",
                        videoUrl: "https://youtu.be/fcFsPoJY9lg",
                        imageUrl: "https://i.ytimg.com/vi/fcFsPoJY9lg/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=AgxCPp37waQ",
                imageUrl: "https://i.ytimg.com/vi/AgxCPp37waQ/mqdefault.jpg"
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
                        videoUrl: "https://youtu.be/S32a3nYiWko",
                        imageUrl: "https://i.ytimg.com/vi/S32a3nYiWko/mqdefault.jpg"
                    },
                    {
                        name: "Pájaros con Mancuernas",
                        subOrder: 2,
                        sets: 3,
                        reps: "12-15",
                        rest: "90s",
                        videoUrl: "https://youtu.be/EMrOS6P90lM",
                        imageUrl: "https://i.ytimg.com/vi/EMrOS6P90lM/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/S32a3nYiWko",
                imageUrl: "https://i.ytimg.com/vi/S32a3nYiWko/mqdefault.jpg"
            }
        ]
    },
    "dia2": {
        name: "Cadena Anterior Completa",
        exercises: [
            {
                order: 1,
                name: "Press Banca con Barra",
                sets: 3,
                reps: "6, 6, 10",
                rest: "150s",
                notes: "Salimos desde una ligera altura (steps o discos de 20kg)",
                videoUrl: "https://youtu.be/PKpsrFS2uac",
                imageUrl: "https://i.ytimg.com/vi/PKpsrFS2uac/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Hack Squat / Prensa Hack",
                sets: 3,
                reps: "8, 8, 12",
                rest: "120s",
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=6teL-OyXuQs",
                imageUrl: "https://i.ytimg.com/vi/6teL-OyXuQs/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Cruces en Polea Alta",
                sets: 3,
                reps: "12, 10, 8",
                rest: "90s",
                notes: "",
                videoUrl: "https://youtu.be/Ht9awbF2fBA",
                imageUrl: "https://i.ytimg.com/vi/Ht9awbF2fBA/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Extensión de Cuádriceps en Máquina",
                isSuperset: true,
                items: [
                    {
                        name: "Extensión de Cuádriceps en Máquina",
                        subOrder: 1,
                        sets: 3,
                        reps: "12, 10, 8",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/watch?v=k1Nn0cJOMng",
                        imageUrl: "https://i.ytimg.com/vi/k1Nn0cJOMng/mqdefault.jpg"
                    },
                    {
                        name: "Flexiones / Deficit Push Ups con Discos al lado",
                        subOrder: 2,
                        sets: 3,
                        reps: "12",
                        notes: "Sin descanso. ",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/watch?v=nLnrNuQFlao",
                        imageUrl: "https://i.ytimg.com/vi/nLnrNuQFlao/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=k1Nn0cJOMng",
                imageUrl: "https://i.ytimg.com/vi/k1Nn0cJOMng/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Extensión de Codo en Polea Alta",
                sets: 3,
                reps: "10-12",
                rest: "60s",
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=z7gqbcjkzU0",
                imageUrl: "https://i.ytimg.com/vi/z7gqbcjkzU0/mqdefault.jpg"
            }
        ]
    },
    "dia3": {
        name: "Torso Completo",
        exercises: [
            {
                order: 1,
                name: "Dominadas / Pull Ups",
                isSuperset: true,
                items: [
                    {
                        name: "Dominadas / Pull Ups",
                        subOrder: 1,
                        sets: 3,
                        reps: "6, 6, 10",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/watch?v=7ht8tmdAyqw",
                        imageUrl: "https://i.ytimg.com/vi/7ht8tmdAyqw/mqdefault.jpg"
                    },
                    {
                        name: "Fondos en Paralelas para Pecho",
                        subOrder: 2,
                        sets: 3,
                        reps: "6, 6, 10",
                        rest: "90s",
                        videoUrl: "https://youtu.be/W9TfhUAvteE",
                        imageUrl: "https://i.ytimg.com/vi/W9TfhUAvteE/mqdefault.jpg"
                    }
                ],
                notes: "Salimos desde una ligera altura (steps o discos de 20kg)",
                videoUrl: "https://www.youtube.com/watch?v=7ht8tmdAyqw",
                imageUrl: "https://i.ytimg.com/vi/7ht8tmdAyqw/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Press Inclinado con Mancuernas",
                isSuperset: true,
                items: [
                    {
                        name: "Press Inclinado con Mancuernas",
                        subOrder: 1,
                        sets: 3,
                        reps: "8, 8, 12",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/ZE4M73kXB5A",
                        imageUrl: "https://i.ytimg.com/vi/ZE4M73kXB5A/mqdefault.jpg"
                    },
                    {
                        name: "Curl con Mancuernas Sentado en Banco Inclinado",
                        subOrder: 2,
                        sets: 3,
                        reps: "10",
                        rest: "90s",
                        videoUrl: "https://youtu.be/S32a3nYiWko",
                        imageUrl: "https://i.ytimg.com/vi/S32a3nYiWko/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/ZE4M73kXB5A",
                imageUrl: "https://i.ytimg.com/vi/ZE4M73kXB5A/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Press Militar Sentado con Mancuernas",
                sets: 3,
                reps: "12, 10, 8",
                rest: "90s",
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=_IMpMCr87Cg",
                imageUrl: "https://i.ytimg.com/vi/_IMpMCr87Cg/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Curl Scott con Barra Z",
                isSuperset: true,
                items: [
                    {
                        name: "Curl Scott con Barra Z",
                        subOrder: 1,
                        sets: 3,
                        reps: "12, 10, 8",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/watch?v=-Rzppjmt6ag",
                        imageUrl: "https://i.ytimg.com/vi/-Rzppjmt6ag/mqdefault.jpg"
                    },
                    {
                        name: "Press Francés con Barra Z en Banco Inclinado",
                        subOrder: 2,
                        sets: 3,
                        reps: "12",
                        notes: "Sin descanso. ",
                        rest: "90s",
                        videoUrl: "https://youtu.be/hFk6xzt1DWM",
                        imageUrl: "https://i.ytimg.com/vi/hFk6xzt1DWM/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=-Rzppjmt6ag",
                imageUrl: "https://i.ytimg.com/vi/-Rzppjmt6ag/mqdefault.jpg"
            }
        ]
    }
};

const exerciseAlternatives = {
    "Peso Muerto Rumano con Barra": [
        { name: "Peso Muerto Rumano con Barra", videoUrl: "https://youtu.be/R7FKam5GyNw", imageUrl: "https://i.ytimg.com/vi/R7FKam5GyNw/mqdefault.jpg" }
    ],
    "Jalón al Pecho en Polea": [
        { name: "Dominadas / Pull Ups", videoUrl: "https://www.youtube.com/watch?v=7ht8tmdAyqw", imageUrl: "https://i.ytimg.com/vi/7ht8tmdAyqw/mqdefault.jpg" }
    ],
    "Curl con Barra Recta": [
        { name: "Curl Scott con Barra Z", videoUrl: "https://www.youtube.com/watch?v=-Rzppjmt6ag", imageUrl: "https://i.ytimg.com/vi/-Rzppjmt6ag/mqdefault.jpg" }
    ],
    "Press Banca con Barra": [
        { name: "Peso Muerto Rumano con Barra", videoUrl: "https://youtu.be/R7FKam5GyNw", imageUrl: "https://i.ytimg.com/vi/R7FKam5GyNw/mqdefault.jpg" }
    ],
    "Hack Squat / Prensa Hack": [
        { name: "Dominadas / Pull Ups", videoUrl: "https://www.youtube.com/watch?v=7ht8tmdAyqw", imageUrl: "https://i.ytimg.com/vi/7ht8tmdAyqw/mqdefault.jpg" },
        { name: "Sentadilla Trasera con Barra", videoUrl: "https://youtu.be/FK5XU_gaxAE", imageUrl: "https://i.ytimg.com/vi/FK5XU_gaxAE/mqdefault.jpg" }
    ],
    "Cruces en Polea Alta": [
        { name: "Curl Scott con Barra Z", videoUrl: "https://www.youtube.com/watch?v=-Rzppjmt6ag", imageUrl: "https://i.ytimg.com/vi/-Rzppjmt6ag/mqdefault.jpg" }
    ],
    "Press Militar Sentado con Mancuernas": [
        { name: "Curl Scott con Barra Z", videoUrl: "https://www.youtube.com/watch?v=-Rzppjmt6ag", imageUrl: "https://i.ytimg.com/vi/-Rzppjmt6ag/mqdefault.jpg" }
    ]
};

console.log("Datos de rutina cargados desde el creador.");
// Export if using modules in the target app, or remove if it's a simple script include
// export { workoutData, exerciseAlternatives };
