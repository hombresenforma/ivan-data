// Titulo: P9_4D_TPVARIADO_1

// Contenido de app_datos.js

// =================================================================================
// DATOS DE LA RUTINA (4 DÍAS)
// =================================================================================
const workoutData = {
    "dia1": {
        name: "TORSO (ESPALDA)",
        exercises: [
            {
                order: 1,
                name: "Remo Seal con Mancuernas",
                sets: 4,
                reps: "15, 12, 10, 10",
                rest: "90s",
                notes: "Trata de despegar el pecho al final del movimiento",
                videoUrl: "https://www.youtube.com/shorts/6tLfn99dO8o",
                imageUrl: "https://i.ytimg.com/vi/6tLfn99dO8o/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Press Banca en Multipower",
                sets: 3,
                reps: "15, 12, 10",
                rest: "90s",
                notes: "",
                videoUrl: "https://youtu.be/w-5ovE5O5iU",
                imageUrl: "https://i.ytimg.com/vi/w-5ovE5O5iU/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Máquina de Remo (Gironda)",
                isSuperset: true,
                items: [
                    {
                        name: "Máquina de Remo (Gironda)",
                        subOrder: 1,
                        sets: 3,
                        reps: "12",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/watch?v=3wcaZqSfP0A",
                        imageUrl: "https://i.ytimg.com/vi/3wcaZqSfP0A/mqdefault.jpg"
                    },
                    {
                        name: "Remo Renegade + Flexión con Mancuernas",
                        subOrder: 2,
                        sets: 3,
                        reps: "10",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/shorts/hLPJik1MaaY",
                        imageUrl: "https://i.ytimg.com/vi/hLPJik1MaaY/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=3wcaZqSfP0A",
                imageUrl: "https://i.ytimg.com/vi/3wcaZqSfP0A/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Curl con Barra Z",
                isSuperset: true,
                items: [
                    {
                        name: "Curl con Barra Z",
                        subOrder: 1,
                        sets: 3,
                        reps: "10",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/4gYLTjNaTmw",
                        imageUrl: "https://i.ytimg.com/vi/4gYLTjNaTmw/mqdefault.jpg"
                    },
                    {
                        name: "Gorilla Row con Kettlebells/Mancuernas",
                        subOrder: 2,
                        sets: 3,
                        reps: "16",
                        videoUrl: "https://youtu.be/4hKPsdWsXl8",
                        imageUrl: "https://i.ytimg.com/vi/4hKPsdWsXl8/mqdefault.jpg"
                    },
                    {
                        name: "Thruster con Mancuernas",
                        subOrder: 3,
                        sets: 3,
                        reps: "12",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/watch?v=5mTjKFubavs",
                        imageUrl: "https://i.ytimg.com/vi/5mTjKFubavs/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/4gYLTjNaTmw",
                imageUrl: "https://i.ytimg.com/vi/4gYLTjNaTmw/mqdefault.jpg"
            }
        ]
    },
    "dia2": {
        name: "PIERNA PESO MUERTO",
        exercises: [
            {
                order: 1,
                name: "Peso Muerto Rumano con Barra",
                sets: 4,
                reps: "15, 12, 10, 10",
                rest: "90s",
                notes: "Baja lo que te permita tu movilidad de cadera (Espalda completamente recta).",
                videoUrl: "https://youtu.be/R7FKam5GyNw",
                imageUrl: "https://i.ytimg.com/vi/R7FKam5GyNw/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Prensa Inclinada 45º",
                sets: 3,
                reps: "15, 12, 10",
                rest: "90s",
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=IqjbBRNqJps",
                imageUrl: "https://i.ytimg.com/vi/IqjbBRNqJps/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Zancadas Caminando con Mancuernas/Kettlebells",
                isSuperset: true,
                items: [
                    {
                        name: "Zancadas Caminando con Mancuernas/Kettlebells",
                        subOrder: 1,
                        sets: 3,
                        reps: "24",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/7tRy9X0ibnk",
                        imageUrl: "https://i.ytimg.com/vi/7tRy9X0ibnk/mqdefault.jpg"
                    },
                    {
                        name: "CARDIO - Bicicleta (Ritmo Fuerte)",
                        subOrder: 2,
                        sets: 3,
                        reps: "90s",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/watch?v=T4xdxoA4UzY",
                        imageUrl: "https://i.ytimg.com/vi/T4xdxoA4UzY/mqdefault.jpg"
                    }
                ],
                notes: "Zancadas cortas como en el vídeo para priorizar trabajo de cuádriceps. Talón del pie delantero a la altura de la rodilla trasera.",
                videoUrl: "https://youtu.be/7tRy9X0ibnk",
                imageUrl: "https://i.ytimg.com/vi/7tRy9X0ibnk/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Extensión de Cuádriceps en Máquina",
                isSuperset: true,
                items: [
                    {
                        name: "Extensión de Cuádriceps en Máquina",
                        subOrder: 1,
                        sets: 3,
                        reps: "10",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/watch?v=k1Nn0cJOMng",
                        imageUrl: "https://i.ytimg.com/vi/k1Nn0cJOMng/mqdefault.jpg"
                    },
                    {
                        name: "Cuerpo Libre - Cardio - Sentadilla con Salto en Step",
                        subOrder: 2,
                        sets: 3,
                        reps: "10",
                        videoUrl: "https://youtu.be/7ckSQy2BtWw",
                        imageUrl: "https://i.ytimg.com/vi/7ckSQy2BtWw/mqdefault.jpg"
                    },
                    {
                        name: "Hollow - Nivel 4",
                        subOrder: 3,
                        sets: 3,
                        reps: "30s",
                        rest: "90s",
                        videoUrl: "https://youtu.be/RxFdlQ4oelM",
                        imageUrl: "https://i.ytimg.com/vi/RxFdlQ4oelM/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=k1Nn0cJOMng",
                imageUrl: "https://i.ytimg.com/vi/k1Nn0cJOMng/mqdefault.jpg"
            }
        ]
    },
    "dia3": {
        name: "TORSO (EMPUJE)",
        exercises: [
            {
                order: 1,
                name: "Press Inclinado con Mancuernas",
                sets: 4,
                reps: "15, 12, 10, 10",
                rest: "90s",
                notes: "",
                videoUrl: "https://youtu.be/ZE4M73kXB5A",
                imageUrl: "https://i.ytimg.com/vi/ZE4M73kXB5A/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Dominadas con Peso Corporal",
                sets: 3,
                reps: "15, 12, 10",
                rest: "90s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/pb-14sP_R4M",
                imageUrl: "https://i.ytimg.com/vi/pb-14sP_R4M/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Press Militar Sentado con Mancuernas",
                isSuperset: true,
                items: [
                    {
                        name: "Press Militar Sentado con Mancuernas",
                        subOrder: 1,
                        sets: 3,
                        reps: "15",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/watch?v=_IMpMCr87Cg",
                        imageUrl: "https://i.ytimg.com/vi/_IMpMCr87Cg/mqdefault.jpg"
                    },
                    {
                        name: "Kettlebell - Swing Americano",
                        subOrder: 2,
                        sets: 3,
                        reps: "15",
                        rest: "90s",
                        videoUrl: "https://youtu.be/_kVSgpKXc_k",
                        imageUrl: "https://i.ytimg.com/vi/_kVSgpKXc_k/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=_IMpMCr87Cg",
                imageUrl: "https://i.ytimg.com/vi/_IMpMCr87Cg/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Press Cerrado con Barra",
                isSuperset: true,
                items: [
                    {
                        name: "Press Cerrado con Barra",
                        subOrder: 1,
                        sets: 3,
                        reps: "10",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/_062fQmtry8",
                        imageUrl: "https://i.ytimg.com/vi/_062fQmtry8/mqdefault.jpg"
                    },
                    {
                        name: "Flexiones + Mountain Climbers",
                        subOrder: 2,
                        sets: 3,
                        reps: "10",
                        videoUrl: "https://www.youtube.com/shorts/1wdJ5RSUCBE",
                        imageUrl: "https://i.ytimg.com/vi/1wdJ5RSUCBE/mqdefault.jpg"
                    },
                    {
                        name: "Remo Horizontal en TRX",
                        subOrder: 3,
                        sets: 3,
                        reps: "10",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/watch?v=uTA2s5FuRUM",
                        imageUrl: "https://i.ytimg.com/vi/uTA2s5FuRUM/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/_062fQmtry8",
                imageUrl: "https://i.ytimg.com/vi/_062fQmtry8/mqdefault.jpg"
            }
        ]
    },
    "dia4": {
        name: "PIERNA SENTADILLA",
        exercises: [
            {
                order: 1,
                name: "Sentadilla Trasera con Barra",
                sets: 4,
                reps: "15, 12, 10, 10",
                rest: "90s",
                notes: "",
                videoUrl: "https://youtu.be/FK5XU_gaxAE",
                imageUrl: "https://i.ytimg.com/vi/FK5XU_gaxAE/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Hip Thrust con Barra",
                sets: 3,
                reps: "15, 12, 10",
                rest: "90s",
                notes: "",
                videoUrl: "https://youtu.be/sbl1qYdkzUc",
                imageUrl: "https://i.ytimg.com/vi/sbl1qYdkzUc/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Sentadilla Goblet con Pies Elevados",
                isSuperset: true,
                items: [
                    {
                        name: "Sentadilla Goblet con Pies Elevados",
                        subOrder: 1,
                        sets: 3,
                        reps: "15",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/E2n7V0o8B5A",
                        imageUrl: "https://i.ytimg.com/vi/E2n7V0o8B5A/mqdefault.jpg"
                    },
                    {
                        name: "CARDIO - Bicicleta (Ritmo Fuerte)",
                        subOrder: 2,
                        sets: 3,
                        reps: "90s",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/watch?v=T4xdxoA4UzY",
                        imageUrl: "https://i.ytimg.com/vi/T4xdxoA4UzY/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/E2n7V0o8B5A",
                imageUrl: "https://i.ytimg.com/vi/E2n7V0o8B5A/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Curl Femoral en Máquina",
                isSuperset: true,
                items: [
                    {
                        name: "Curl Femoral en Máquina",
                        subOrder: 1,
                        sets: 3,
                        reps: "10",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/watch?v=Zhnhz1r_u-Y",
                        imageUrl: "https://i.ytimg.com/vi/Zhnhz1r_u-Y/mqdefault.jpg"
                    },
                    {
                        name: "Kettlebell - Soft Swing",
                        subOrder: 2,
                        sets: 3,
                        reps: "15",
                        videoUrl: "https://youtube.com/shorts/-i4ReGBb26g",
                        imageUrl: "https://i.ytimg.com/vi/-i4ReGBb26g/mqdefault.jpg"
                    },
                    {
                        name: "Plancha - Avanzada",
                        subOrder: 3,
                        sets: 3,
                        reps: "30s",
                        rest: "90s",
                        videoUrl: "https://youtu.be/nH9AQFIJ1rY",
                        imageUrl: "https://i.ytimg.com/vi/nH9AQFIJ1rY/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=Zhnhz1r_u-Y",
                imageUrl: "https://i.ytimg.com/vi/Zhnhz1r_u-Y/mqdefault.jpg"
            }
        ]
    }
};

const exerciseAlternatives = {
    "Remo Seal con Mancuernas": [
        { name: "Remo Inclinado en Landmine", videoUrl: "https://youtu.be/5gakUsid-Lg", imageUrl: "https://i.ytimg.com/vi/5gakUsid-Lg/mqdefault.jpg" }
    ],
    "Press Banca en Multipower": [
        { name: "Press Banca con Barra", videoUrl: "https://youtu.be/PKpsrFS2uac", imageUrl: "https://i.ytimg.com/vi/PKpsrFS2uac/mqdefault.jpg" }
    ],
    "Peso Muerto Rumano con Barra": [
        { name: "Peso Muerto Rumano con Mancuernas", videoUrl: "https://www.youtube.com/shorts/SMll4DOYvEs", imageUrl: "https://i.ytimg.com/vi/SMll4DOYvEs/mqdefault.jpg" }
    ],
    "Press Inclinado con Mancuernas": [
        { name: "Press Banca Inclinado en Multipower", videoUrl: "https://youtu.be/3GS7EjN7KSk", imageUrl: "https://i.ytimg.com/vi/3GS7EjN7KSk/mqdefault.jpg" }
    ],
    "Dominadas con Peso Corporal": [
        { name: "Press Banca Inclinado en Multipower", videoUrl: "https://youtu.be/3GS7EjN7KSk", imageUrl: "https://i.ytimg.com/vi/3GS7EjN7KSk/mqdefault.jpg" }
    ],
    "Sentadilla Trasera con Barra": [
        { name: "Peso Muerto Rumano con Mancuernas", videoUrl: "https://www.youtube.com/shorts/SMll4DOYvEs", imageUrl: "https://i.ytimg.com/vi/SMll4DOYvEs/mqdefault.jpg" }
    ],
    "Hip Thrust con Barra": [
        { name: "Press Banca Inclinado en Multipower", videoUrl: "https://youtu.be/3GS7EjN7KSk", imageUrl: "https://i.ytimg.com/vi/3GS7EjN7KSk/mqdefault.jpg" }
    ]
};

console.log("Datos de rutina cargados desde el creador.");
// Export if using modules in the target app, or remove if it's a simple script include
// export { workoutData, exerciseAlternatives };
