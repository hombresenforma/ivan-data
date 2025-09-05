// Contenido de app_datos.js

// =================================================================================
// DATOS DE LA RUTINA (3 DÍAS)
// =================================================================================
const workoutData = {
    "dia1": {
        name: "Cadena Posterior Completa",
        exercises: [
            {
                order: 1,
                name: "Peso Muerto Rumano con Barra",
                sets: 4,
                reps: "6, 6, 12, 12",
                rest: "150s",
                notes: "Salimos desde una ligera altura (steps o discos de 20kg)",
                videoUrl: "https://youtu.be/R7FKam5GyNw",
                imageUrl: "https://i.ytimg.com/vi/R7FKam5GyNw/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Jalón al Pecho en Polea",
                sets: 3,
                reps: "8, 8, 20",
                rest: "120s",
                notes: "Mismo peso en la última serie. Hacemos 8 reps + Clusters (3 a 5 reps con descansos de 10-15 segundos hasta llegar a las 20 reps)",
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
                name: "Curl con Mancuernas Sentado en Banco Inclinado",
                isSuperset: true,
                items: [
                    {
                        name: "Curl con Mancuernas Sentado en Banco Inclinado",
                        subOrder: 1,
                        sets: 3,
                        reps: "12",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/S32a3nYiWko",
                        imageUrl: "https://i.ytimg.com/vi/S32a3nYiWko/mqdefault.jpg"
                    },
                    {
                        name: "Face Pull con Kettlebell",
                        subOrder: 2,
                        sets: 3,
                        reps: "15",
                        videoUrl: "",
                        imageUrl: ""
                    },
                    {
                        name: "Sit Up Unilateral con KTB",
                        subOrder: 3,
                        sets: 3,
                        reps: "6",
                        rest: "90s",
                        videoUrl: "https://youtu.be/INcd--4kK5k",
                        imageUrl: "https://i.ytimg.com/vi/INcd--4kK5k/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/S32a3nYiWko",
                imageUrl: "https://i.ytimg.com/vi/S32a3nYiWko/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Remo Seal con Mancuernas",
                isSuperset: true,
                items: [
                    {
                        name: "Remo Seal con Mancuernas",
                        subOrder: 1,
                        sets: 2,
                        reps: "12",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/shorts/6tLfn99dO8o",
                        imageUrl: "https://i.ytimg.com/vi/6tLfn99dO8o/mqdefault.jpg"
                    },
                    {
                        name: "High Pull con KTB",
                        subOrder: 2,
                        sets: 2,
                        reps: "15",
                        videoUrl: "https://www.youtube.com/shorts/rjAV_JCo7g0",
                        imageUrl: "https://i.ytimg.com/vi/rjAV_JCo7g0/mqdefault.jpg"
                    },
                    {
                        name: "Funcional - Mountain Climber",
                        subOrder: 3,
                        sets: 2,
                        reps: "30",
                        rest: "90s",
                        videoUrl: "https://youtu.be/GZWmYzClS3s",
                        imageUrl: "https://i.ytimg.com/vi/GZWmYzClS3s/mqdefault.jpg"
                    }
                ],
                notes: "Trata de despegar el pecho al final del movimiento",
                videoUrl: "https://www.youtube.com/shorts/6tLfn99dO8o",
                imageUrl: "https://i.ytimg.com/vi/6tLfn99dO8o/mqdefault.jpg"
            },
            {
                order: 6,
                name: "HIIT",
                isSuperset: true,
                circuitDetails: {
                    totalRounds: 4,
                    restBetweenExercisesSeconds: 3,
                    restBetweenRoundsSeconds: 3
                },
                items: [
                    {
                        name: "CARDIO - Bicicleta (Ritmo Fuerte)",
                        subOrder: 1,
                        sets: 1,
                        reps: "45s",
                        isCircuitItem: true,
                        videoUrl: "https://www.youtube.com/watch?v=T4xdxoA4UzY",
                        imageUrl: "https://i.ytimg.com/vi/T4xdxoA4UzY/mqdefault.jpg"
                    },
                    {
                        name: "CARDIO - Bicicleta (Ritmo Suave)",
                        subOrder: 2,
                        sets: 1,
                        reps: "45s",
                        isCircuitItem: true,
                        videoUrl: "https://www.youtube.com/watch?v=r6iTJGOftHY",
                        imageUrl: "https://i.ytimg.com/vi/r6iTJGOftHY/mqdefault.jpg"
                    }
                ],
                notes: "Liberación.",
                videoUrl: "https://www.youtube.com/watch?v=T4xdxoA4UzY",
                imageUrl: "https://i.ytimg.com/vi/T4xdxoA4UzY/mqdefault.jpg"
            }
        ]
    },
    "dia2": {
        name: "Cadena Anterior Completa",
        exercises: [
            {
                order: 1,
                name: "Press Banca con Mancuernas",
                sets: 4,
                reps: "6, 6, 12, 12",
                rest: "150s",
                notes: "",
                videoUrl: "https://youtu.be/hXCJC2Apcdg",
                imageUrl: "https://i.ytimg.com/vi/hXCJC2Apcdg/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Hack Squat / Prensa Hack",
                sets: 3,
                reps: "8, 8, 20",
                rest: "120s",
                notes: "Mismo peso en la última serie. Hacemos 8 reps + Clusters (3 a 5 reps con descansos de 10-15 segundos hasta llegar a las 20 reps)",
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
                        name: "Zancada Dinámica",
                        subOrder: 2,
                        sets: 3,
                        reps: "16",
                        notes: "Sin descanso. ",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/watch?v=eSAN1E5usJI",
                        imageUrl: "https://i.ytimg.com/vi/eSAN1E5usJI/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=k1Nn0cJOMng",
                imageUrl: "https://i.ytimg.com/vi/k1Nn0cJOMng/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Snatch + Thruster Unilat Alterno con Mancuerna",
                isSuperset: true,
                items: [
                    {
                        name: "Snatch + Thruster Unilat Alterno con Mancuerna",
                        subOrder: 1,
                        sets: 2,
                        reps: "8",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/shorts/jNbG4xt8zCs",
                        imageUrl: "https://i.ytimg.com/vi/jNbG4xt8zCs/mqdefault.jpg"
                    },
                    {
                        name: "Fondos en Banco",
                        subOrder: 2,
                        sets: 2,
                        reps: "12",
                        videoUrl: "https://youtu.be/NSB_HrDwd6I",
                        imageUrl: "https://i.ytimg.com/vi/NSB_HrDwd6I/mqdefault.jpg"
                    },
                    {
                        name: "Hollow - Nivel 4",
                        subOrder: 3,
                        sets: 2,
                        reps: "30s",
                        rest: "90s",
                        videoUrl: "https://youtu.be/RxFdlQ4oelM",
                        imageUrl: "https://i.ytimg.com/vi/RxFdlQ4oelM/mqdefault.jpg"
                    }
                ],
                notes: "Movimiento compuesto, controla la técnica.",
                videoUrl: "https://www.youtube.com/shorts/jNbG4xt8zCs",
                imageUrl: "https://i.ytimg.com/vi/jNbG4xt8zCs/mqdefault.jpg"
            },
            {
                order: 6,
                name: "HIIT",
                isSuperset: true,
                circuitDetails: {
                    totalRounds: 4,
                    restBetweenExercisesSeconds: 3,
                    restBetweenRoundsSeconds: 3
                },
                items: [
                    {
                        name: "CARDIO - Correr (Sprint)",
                        subOrder: 1,
                        sets: 1,
                        reps: "45s",
                        isCircuitItem: true,
                        videoUrl: "https://youtu.be/KKvRtNn904g",
                        imageUrl: "https://i.ytimg.com/vi/KKvRtNn904g/mqdefault.jpg"
                    },
                    {
                        name: "CARDIO - Correr (Suave)",
                        subOrder: 2,
                        sets: 1,
                        reps: "45s",
                        isCircuitItem: true,
                        videoUrl: "https://youtu.be/KKvRtNn904g",
                        imageUrl: "https://i.ytimg.com/vi/KKvRtNn904g/mqdefault.jpg"
                    }
                ],
                notes: "Puedes hacerlo al aire libre si lo prefieres.",
                videoUrl: "https://youtu.be/KKvRtNn904g",
                imageUrl: "https://i.ytimg.com/vi/KKvRtNn904g/mqdefault.jpg"
            }
        ]
    },
    "dia3": {
        name: "Torso Completo",
        exercises: [
            {
                order: 1,
                name: "Dominadas con Peso Corporal",
                isSuperset: true,
                items: [
                    {
                        name: "Dominadas con Peso Corporal",
                        subOrder: 1,
                        sets: 3,
                        reps: "6, 6, 15",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/shorts/pb-14sP_R4M",
                        imageUrl: "https://i.ytimg.com/vi/pb-14sP_R4M/mqdefault.jpg"
                    },
                    {
                        name: "Fondos en Paralelas Lastrados",
                        subOrder: 2,
                        sets: 3,
                        reps: "6, 6, 15",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/shorts/xsnhvnyl70I",
                        imageUrl: "https://i.ytimg.com/vi/xsnhvnyl70I/mqdefault.jpg"
                    }
                ],
                notes: "Últimas series de los 2 ejercicios: Hacemos 6 reps + Clusters (2 a 4 reps con descansos de 10-15 segundos hasta llegar a las 15 reps)",
                videoUrl: "https://www.youtube.com/shorts/pb-14sP_R4M",
                imageUrl: "https://i.ytimg.com/vi/pb-14sP_R4M/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Press Militar Unilat de Pie con Mancuerna/KTB",
                isSuperset: true,
                items: [
                    {
                        name: "Press Militar Unilat de Pie con Mancuerna/KTB",
                        subOrder: 1,
                        sets: 3,
                        reps: "8, 8, 12",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/shorts/vIK0qkXP_f0",
                        imageUrl: "https://i.ytimg.com/vi/vIK0qkXP_f0/mqdefault.jpg"
                    },
                    {
                        name: "Kettlebell - Remo Inclinado Unilateral",
                        subOrder: 2,
                        sets: 3,
                        reps: "8, 8, 12",
                        rest: "90s",
                        videoUrl: "https://youtube.com/shorts/JQYZ3sz3rko",
                        imageUrl: "https://i.ytimg.com/vi/JQYZ3sz3rko/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/vIK0qkXP_f0",
                imageUrl: "https://i.ytimg.com/vi/vIK0qkXP_f0/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Press Cerrado en Banco Inclinado con Mancuernas",
                isSuperset: true,
                items: [
                    {
                        name: "Press Cerrado en Banco Inclinado con Mancuernas",
                        subOrder: 1,
                        sets: 3,
                        reps: "12, 10, 8",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/tdh7LSxUj1s",
                        imageUrl: "https://i.ytimg.com/vi/tdh7LSxUj1s/mqdefault.jpg"
                    },
                    {
                        name: "Flexiones / Push Ups al Banco",
                        subOrder: 2,
                        sets: 3,
                        reps: "15",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/watch?v=_mby7bboEUw",
                        imageUrl: "https://i.ytimg.com/vi/_mby7bboEUw/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/tdh7LSxUj1s",
                imageUrl: "https://i.ytimg.com/vi/tdh7LSxUj1s/mqdefault.jpg"
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
                        name: "Curl en Polea Baja con Cuerda",
                        subOrder: 2,
                        sets: 3,
                        reps: "15",
                        notes: "Sin descanso. ",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/watch?v=2BFzjygU1Ic",
                        imageUrl: "https://i.ytimg.com/vi/2BFzjygU1Ic/mqdefault.jpg"
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
    "Curl con Mancuernas Sentado en Banco Inclinado": [
        { name: "Curl con Mancuernas de Pie", videoUrl: "https://youtu.be/8STuQuoDMR0", imageUrl: "https://i.ytimg.com/vi/8STuQuoDMR0/mqdefault.jpg" }
    ],
    "Press Banca con Mancuernas": [
        { name: "Press Banca en Multipower", videoUrl: "https://youtu.be/w-5ovE5O5iU", imageUrl: "https://i.ytimg.com/vi/w-5ovE5O5iU/mqdefault.jpg" }
    ],
    "Hack Squat / Prensa Hack": [
        { name: "Sentadilla Trasera en Multipower", videoUrl: "https://youtu.be/la-dqygoIuk", imageUrl: "https://i.ytimg.com/vi/la-dqygoIuk/mqdefault.jpg" }
    ],
    "Cruces en Polea Alta": [
        { name: "Curl Scott con Barra Z", videoUrl: "https://www.youtube.com/watch?v=-Rzppjmt6ag", imageUrl: "https://i.ytimg.com/vi/-Rzppjmt6ag/mqdefault.jpg" }
    ],
    "Curl Scott con Barra Z": [
        { name: "Curl con Barra Z", videoUrl: "https://youtu.be/4gYLTjNaTmw", imageUrl: "https://i.ytimg.com/vi/4gYLTjNaTmw/mqdefault.jpg" }
    ],
    "Curl en Polea Baja con Cuerda": [
        { name: "Curl Martillo con Mancuernas", videoUrl: "https://youtu.be/fcFsPoJY9lg", imageUrl: "https://i.ytimg.com/vi/fcFsPoJY9lg/mqdefault.jpg" }
    ]
};

console.log("Datos de rutina cargados desde el creador.");
// Export if using modules in the target app, or remove if it's a simple script include
// export { workoutData, exerciseAlternatives };
