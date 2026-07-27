// Titulo: 2D_KTBYBANDAS_VERANO
// Notas: KTB y BANDAS

const workoutData = {
    "dia1": {
        name: "Entreno A",
        exercises: [
            {
                order: 1,
                name: "Kettlebell - Press Militar",
                isSuperset: true,
                items: [
                    {
                        name: "Kettlebell - Press Militar",
                        subOrder: 1,
                        sets: 3,
                        reps: "12-15",
                        isSupersetStart: true,
                        videoUrl: "https://youtube.com/shorts/CCgU8PLMcdI",
                        imageUrl: "https://i.ytimg.com/vi/CCgU8PLMcdI/mqdefault.jpg"
                    },
                    {
                        name: "Flexiones con Lastre",
                        subOrder: 2,
                        sets: 3,
                        reps: "12-15",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/shorts/gLBrKowP2eo",
                        imageUrl: "https://i.ytimg.com/vi/gLBrKowP2eo/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtube.com/shorts/CCgU8PLMcdI",
                imageUrl: "https://i.ytimg.com/vi/CCgU8PLMcdI/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Kettlebell - Zancada Alterna con Rotación",
                isSuperset: true,
                items: [
                    {
                        name: "Kettlebell - Zancada Alterna con Rotación",
                        subOrder: 1,
                        sets: 3,
                        reps: "10-12",
                        isSupersetStart: true,
                        videoUrl: "https://youtube.com/shorts/8EjXf0rK3Lg",
                        imageUrl: "https://i.ytimg.com/vi/8EjXf0rK3Lg/mqdefault.jpg"
                    },
                    {
                        name: "Gomas - Extensión de Tríceps en Columna",
                        subOrder: 2,
                        sets: 3,
                        reps: "15",
                        videoUrl: "https://youtu.be/MtGdJQ-Q0hs",
                        imageUrl: "https://i.ytimg.com/vi/MtGdJQ-Q0hs/mqdefault.jpg"
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
                videoUrl: "https://youtube.com/shorts/8EjXf0rK3Lg",
                imageUrl: "https://i.ytimg.com/vi/8EjXf0rK3Lg/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Circuito Final",
                isSuperset: true,
                circuitDetails: {
                    totalRounds: 4,
                    restBetweenExercisesSeconds: 15,
                    restBetweenRoundsSeconds: 60
                },
                items: [
                    {
                        name: "Kettlebell - Snatch Cruzado",
                        subOrder: 1,
                        sets: 1,
                        reps: "45s",
                        isCircuitItem: true,
                        videoUrl: "https://youtube.com/shorts/l8v8vjHoTjs",
                        imageUrl: "https://i.ytimg.com/vi/l8v8vjHoTjs/mqdefault.jpg"
                    },
                    {
                        name: "Kettlebell - Clean Alterno",
                        subOrder: 2,
                        sets: 1,
                        reps: "45s",
                        isCircuitItem: true,
                        videoUrl: "https://youtu.be/xBOoNSv9LlY",
                        imageUrl: "https://i.ytimg.com/vi/xBOoNSv9LlY/mqdefault.jpg"
                    },
                    {
                        name: "Sentadilla Goblet con Mancuerna/KTB (ExPLICADO)",
                        subOrder: 3,
                        sets: 1,
                        reps: "45s",
                        isCircuitItem: true,
                        videoUrl: "https://www.youtube.com/shorts/tNu9bm3geqY",
                        imageUrl: "https://i.ytimg.com/vi/tNu9bm3geqY/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtube.com/shorts/l8v8vjHoTjs",
                imageUrl: "https://i.ytimg.com/vi/l8v8vjHoTjs/mqdefault.jpg"
            }
        ]
    },
    "dia2": {
        name: "Entreno B",
        exercises: [
            {
                order: 1,
                name: "Kettlebell - Remo Inclinado Unilateral",
                isSuperset: true,
                items: [
                    {
                        name: "Kettlebell - Remo Inclinado Unilateral",
                        subOrder: 1,
                        sets: 3,
                        reps: "12-15",
                        isSupersetStart: true,
                        videoUrl: "https://youtube.com/shorts/JQYZ3sz3rko",
                        imageUrl: "https://i.ytimg.com/vi/JQYZ3sz3rko/mqdefault.jpg"
                    },
                    {
                        name: "Face Pull con KTB",
                        subOrder: 2,
                        sets: 3,
                        reps: "12-15",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/shorts/RIS2s-UkKOk",
                        imageUrl: "https://i.ytimg.com/vi/RIS2s-UkKOk/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtube.com/shorts/JQYZ3sz3rko",
                imageUrl: "https://i.ytimg.com/vi/JQYZ3sz3rko/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Remo + Swing Ruso con KTB",
                isSuperset: true,
                items: [
                    {
                        name: "Remo + Swing Ruso con KTB",
                        subOrder: 1,
                        sets: 3,
                        reps: "10-12",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/shorts/BTL9Ydr9Pv8",
                        imageUrl: "https://i.ytimg.com/vi/BTL9Ydr9Pv8/mqdefault.jpg"
                    },
                    {
                        name: "Gomas - Curl de Bíceps de Pie",
                        subOrder: 2,
                        sets: 3,
                        reps: "12-15",
                        videoUrl: "https://youtu.be/w4AydDM5bjU",
                        imageUrl: "https://i.ytimg.com/vi/w4AydDM5bjU/mqdefault.jpg"
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
                videoUrl: "https://www.youtube.com/shorts/BTL9Ydr9Pv8",
                imageUrl: "https://i.ytimg.com/vi/BTL9Ydr9Pv8/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Circuito Final",
                isSuperset: true,
                circuitDetails: {
                    totalRounds: 4,
                    restBetweenExercisesSeconds: 15,
                    restBetweenRoundsSeconds: 60
                },
                items: [
                    {
                        name: "Kettlebell - Swing High Pull",
                        subOrder: 1,
                        sets: 1,
                        reps: "45s",
                        isCircuitItem: true,
                        videoUrl: "https://youtube.com/shorts/nOCmFFwoqqY",
                        imageUrl: "https://i.ytimg.com/vi/nOCmFFwoqqY/mqdefault.jpg"
                    },
                    {
                        name: "Kettlebell - Swing High Pull",
                        subOrder: 2,
                        sets: 1,
                        reps: "45s",
                        isCircuitItem: true,
                        videoUrl: "https://youtube.com/shorts/nOCmFFwoqqY",
                        imageUrl: "https://i.ytimg.com/vi/nOCmFFwoqqY/mqdefault.jpg"
                    },
                    {
                        name: "High Pull con KTB",
                        subOrder: 3,
                        sets: 1,
                        reps: "45s",
                        isCircuitItem: true,
                        videoUrl: "https://www.youtube.com/shorts/rjAV_JCo7g0",
                        imageUrl: "https://i.ytimg.com/vi/rjAV_JCo7g0/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtube.com/shorts/nOCmFFwoqqY",
                imageUrl: "https://i.ytimg.com/vi/nOCmFFwoqqY/mqdefault.jpg"
            }
        ]
    },
    "dia3": {
        name: "Superseries 1",
        exercises: [
            {
                order: 1,
                name: "Sentadilla Trasera con Barra",
                isSuperset: true,
                items: [
                    {
                        name: "Sentadilla Trasera con Barra",
                        subOrder: 1,
                        sets: 3,
                        reps: "10",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/FK5XU_gaxAE",
                        imageUrl: "https://i.ytimg.com/vi/FK5XU_gaxAE/mqdefault.jpg"
                    },
                    {
                        name: "Press Militar Unilat de Pie con Mancuerna/KTB",
                        subOrder: 2,
                        sets: 3,
                        reps: "10",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/shorts/vIK0qkXP_f0",
                        imageUrl: "https://i.ytimg.com/vi/vIK0qkXP_f0/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/FK5XU_gaxAE",
                imageUrl: "https://i.ytimg.com/vi/FK5XU_gaxAE/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Circuito",
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
                        reps: "30s",
                        isCircuitItem: true,
                        notes: "Puedes hacerlo al aire libre si lo prefieres.",
                        videoUrl: "https://youtu.be/KKvRtNn904g",
                        imageUrl: "https://i.ytimg.com/vi/KKvRtNn904g/mqdefault.jpg"
                    },
                    {
                        name: "CARDIO - Correr (Suave)",
                        subOrder: 2,
                        sets: 1,
                        reps: "30s",
                        isCircuitItem: true,
                        videoUrl: "https://youtu.be/KKvRtNn904g",
                        imageUrl: "https://i.ytimg.com/vi/KKvRtNn904g/mqdefault.jpg"
                    }
                ],
                notes: "Puedes hacerlo al aire libre si lo prefieres.",
                videoUrl: "https://youtu.be/KKvRtNn904g",
                imageUrl: "https://i.ytimg.com/vi/KKvRtNn904g/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Press Banca con Mancuernas",
                isSuperset: true,
                items: [
                    {
                        name: "Press Banca con Mancuernas",
                        subOrder: 1,
                        sets: 3,
                        reps: "8",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/hXCJC2Apcdg",
                        imageUrl: "https://i.ytimg.com/vi/hXCJC2Apcdg/mqdefault.jpg"
                    },
                    {
                        name: "Remo Unilat con Mancuerna/KTB (Explicado)",
                        subOrder: 2,
                        sets: 3,
                        reps: "10",
                        rest: "60s",
                        videoUrl: "https://youtu.be/uH9Hg4nWOG8",
                        imageUrl: "https://i.ytimg.com/vi/uH9Hg4nWOG8/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/hXCJC2Apcdg",
                imageUrl: "https://i.ytimg.com/vi/hXCJC2Apcdg/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Circuito",
                isSuperset: true,
                circuitDetails: {
                    totalRounds: 3,
                    restBetweenExercisesSeconds: 3,
                    restBetweenRoundsSeconds: 3
                },
                items: [
                    {
                        name: "CARDIO - Correr (Sprint)",
                        subOrder: 1,
                        sets: 1,
                        reps: "30s",
                        isCircuitItem: true,
                        notes: "Puedes hacerlo al aire libre si lo prefieres.",
                        videoUrl: "https://youtu.be/KKvRtNn904g",
                        imageUrl: "https://i.ytimg.com/vi/KKvRtNn904g/mqdefault.jpg"
                    },
                    {
                        name: "CARDIO - Correr (Suave)",
                        subOrder: 2,
                        sets: 1,
                        reps: "30s",
                        isCircuitItem: true,
                        videoUrl: "https://youtu.be/KKvRtNn904g",
                        imageUrl: "https://i.ytimg.com/vi/KKvRtNn904g/mqdefault.jpg"
                    }
                ],
                notes: "Puedes hacerlo al aire libre si lo prefieres.",
                videoUrl: "https://youtu.be/KKvRtNn904g",
                imageUrl: "https://i.ytimg.com/vi/KKvRtNn904g/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Press Inclinado con Mancuernas",
                isSuperset: true,
                items: [
                    {
                        name: "Press Inclinado con Mancuernas",
                        subOrder: 1,
                        sets: 3,
                        reps: "8",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/ZE4M73kXB5A",
                        imageUrl: "https://i.ytimg.com/vi/ZE4M73kXB5A/mqdefault.jpg"
                    },
                    {
                        name: "Remo Seal con Mancuernas",
                        subOrder: 2,
                        sets: 3,
                        reps: "8",
                        videoUrl: "https://www.youtube.com/shorts/6tLfn99dO8o",
                        imageUrl: "https://i.ytimg.com/vi/6tLfn99dO8o/mqdefault.jpg"
                    },
                    {
                        name: "Sit Up Abdominal con Disco",
                        subOrder: 3,
                        sets: 3,
                        reps: "15",
                        rest: "60s",
                        videoUrl: "https://www.youtube.com/shorts/GHLO76YCyHE",
                        imageUrl: "https://i.ytimg.com/vi/GHLO76YCyHE/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/ZE4M73kXB5A",
                imageUrl: "https://i.ytimg.com/vi/ZE4M73kXB5A/mqdefault.jpg"
            },
            {
                order: 6,
                name: "Circuito",
                isSuperset: true,
                circuitDetails: {
                    totalRounds: 2,
                    restBetweenExercisesSeconds: 3,
                    restBetweenRoundsSeconds: 3
                },
                items: [
                    {
                        name: "CARDIO - Correr (Sprint)",
                        subOrder: 1,
                        sets: 1,
                        reps: "30s",
                        isCircuitItem: true,
                        notes: "Puedes hacerlo al aire libre si lo prefieres.",
                        videoUrl: "https://youtu.be/KKvRtNn904g",
                        imageUrl: "https://i.ytimg.com/vi/KKvRtNn904g/mqdefault.jpg"
                    },
                    {
                        name: "CARDIO - Correr (Suave)",
                        subOrder: 2,
                        sets: 1,
                        reps: "30s",
                        isCircuitItem: true,
                        videoUrl: "https://youtu.be/KKvRtNn904g",
                        imageUrl: "https://i.ytimg.com/vi/KKvRtNn904g/mqdefault.jpg"
                    }
                ],
                notes: "Puedes hacerlo al aire libre si lo prefieres.",
                videoUrl: "https://youtu.be/KKvRtNn904g",
                imageUrl: "https://i.ytimg.com/vi/KKvRtNn904g/mqdefault.jpg"
            },
            {
                order: 7,
                name: "Zancada Cruzada Alterna con KTB",
                isSuperset: true,
                items: [
                    {
                        name: "Zancada Cruzada Alterna con KTB",
                        subOrder: 1,
                        sets: 2,
                        reps: "20",
                        isSupersetStart: true,
                        notes: "Puedes usar una mancuerna",
                        videoUrl: "https://youtu.be/tDxEIukiV38",
                        imageUrl: "https://i.ytimg.com/vi/tDxEIukiV38/mqdefault.jpg"
                    }
                ],
                notes: "Puedes usar una mancuerna",
                videoUrl: "https://youtu.be/tDxEIukiV38",
                imageUrl: "https://i.ytimg.com/vi/tDxEIukiV38/mqdefault.jpg"
            }
        ]
    },
    "dia4": {
        name: "Superseries 2",
        exercises: [
            {
                order: 1,
                name: "Curl + Press con Mancuernas",
                isSuperset: true,
                items: [
                    {
                        name: "Curl + Press con Mancuernas",
                        subOrder: 1,
                        sets: 3,
                        reps: "10",
                        isSupersetStart: true,
                        notes: "Alterna entre brazos",
                        videoUrl: "https://youtu.be/siOTRSu2ORY",
                        imageUrl: "https://i.ytimg.com/vi/siOTRSu2ORY/mqdefault.jpg"
                    },
                    {
                        name: "Zancada Trasera Alterna con Mancuernas/KTB",
                        subOrder: 2,
                        sets: 3,
                        reps: "16",
                        rest: "30s",
                        videoUrl: "https://www.youtube.com/watch?v=Kzv73cEkTq4",
                        imageUrl: "https://i.ytimg.com/vi/Kzv73cEkTq4/mqdefault.jpg"
                    }
                ],
                notes: "Alterna entre brazos",
                videoUrl: "https://youtu.be/siOTRSu2ORY",
                imageUrl: "https://i.ytimg.com/vi/siOTRSu2ORY/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Circuito",
                isSuperset: true,
                circuitDetails: {
                    totalRounds: 4,
                    restBetweenExercisesSeconds: 3,
                    restBetweenRoundsSeconds: 3
                },
                items: [
                    {
                        name: "Cardio - Remo en Máquina",
                        subOrder: 1,
                        sets: 1,
                        reps: "30s",
                        isCircuitItem: true,
                        notes: "Ritmo FUERTE",
                        videoUrl: "https://www.youtube.com/watch?v=kX7ccUa7Nwc",
                        imageUrl: "https://i.ytimg.com/vi/kX7ccUa7Nwc/mqdefault.jpg"
                    },
                    {
                        name: "Cardio - Remo en Máquina",
                        subOrder: 2,
                        sets: 1,
                        reps: "30s",
                        isCircuitItem: true,
                        notes: "Ritmo SUAVE",
                        videoUrl: "https://www.youtube.com/watch?v=kX7ccUa7Nwc",
                        imageUrl: "https://i.ytimg.com/vi/kX7ccUa7Nwc/mqdefault.jpg"
                    }
                ],
                notes: "Ritmo FUERTE",
                videoUrl: "https://www.youtube.com/watch?v=kX7ccUa7Nwc",
                imageUrl: "https://i.ytimg.com/vi/kX7ccUa7Nwc/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Curl con Barra Z",
                isSuperset: true,
                items: [
                    {
                        name: "Curl con Barra Z",
                        subOrder: 1,
                        sets: 3,
                        reps: "12",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/4gYLTjNaTmw",
                        imageUrl: "https://i.ytimg.com/vi/4gYLTjNaTmw/mqdefault.jpg"
                    },
                    {
                        name: "Shoulder Taps con Salto Adelante",
                        subOrder: 2,
                        sets: 3,
                        reps: "12",
                        rest: "60s",
                        videoUrl: "https://www.youtube.com/shorts/xWUxD4rzmfQ",
                        imageUrl: "https://i.ytimg.com/vi/xWUxD4rzmfQ/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/4gYLTjNaTmw",
                imageUrl: "https://i.ytimg.com/vi/4gYLTjNaTmw/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Circuito",
                isSuperset: true,
                circuitDetails: {
                    totalRounds: 3,
                    restBetweenExercisesSeconds: 3,
                    restBetweenRoundsSeconds: 3
                },
                items: [
                    {
                        name: "Cardio - Remo en Máquina",
                        subOrder: 1,
                        sets: 1,
                        reps: "30s",
                        isCircuitItem: true,
                        notes: "Ritmo FUERTE",
                        videoUrl: "https://www.youtube.com/watch?v=kX7ccUa7Nwc",
                        imageUrl: "https://i.ytimg.com/vi/kX7ccUa7Nwc/mqdefault.jpg"
                    },
                    {
                        name: "Cardio - Remo en Máquina",
                        subOrder: 2,
                        sets: 1,
                        reps: "30s",
                        isCircuitItem: true,
                        notes: "Ritmo SUAVE",
                        videoUrl: "https://www.youtube.com/watch?v=kX7ccUa7Nwc",
                        imageUrl: "https://i.ytimg.com/vi/kX7ccUa7Nwc/mqdefault.jpg"
                    }
                ],
                notes: "Ritmo FUERTE",
                videoUrl: "https://www.youtube.com/watch?v=kX7ccUa7Nwc",
                imageUrl: "https://i.ytimg.com/vi/kX7ccUa7Nwc/mqdefault.jpg"
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
                        reps: "20",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/watch?v=k1Nn0cJOMng",
                        imageUrl: "https://i.ytimg.com/vi/k1Nn0cJOMng/mqdefault.jpg"
                    },
                    {
                        name: "Zancada Dinámica",
                        subOrder: 2,
                        sets: 3,
                        reps: "20",
                        rest: "60s",
                        videoUrl: "https://www.youtube.com/watch?v=eSAN1E5usJI",
                        imageUrl: "https://i.ytimg.com/vi/eSAN1E5usJI/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=k1Nn0cJOMng",
                imageUrl: "https://i.ytimg.com/vi/k1Nn0cJOMng/mqdefault.jpg"
            },
            {
                order: 6,
                name: "Circuito",
                isSuperset: true,
                circuitDetails: {
                    totalRounds: 2,
                    restBetweenExercisesSeconds: 3,
                    restBetweenRoundsSeconds: 3
                },
                items: [
                    {
                        name: "Cardio - Remo en Máquina",
                        subOrder: 1,
                        sets: 1,
                        reps: "30s",
                        isCircuitItem: true,
                        notes: "Ritmo FUERTE",
                        videoUrl: "https://www.youtube.com/watch?v=kX7ccUa7Nwc",
                        imageUrl: "https://i.ytimg.com/vi/kX7ccUa7Nwc/mqdefault.jpg"
                    },
                    {
                        name: "Cardio - Remo en Máquina",
                        subOrder: 2,
                        sets: 1,
                        reps: "30s",
                        isCircuitItem: true,
                        notes: "Ritmo SUAVE",
                        videoUrl: "https://www.youtube.com/watch?v=kX7ccUa7Nwc",
                        imageUrl: "https://i.ytimg.com/vi/kX7ccUa7Nwc/mqdefault.jpg"
                    }
                ],
                notes: "Ritmo FUERTE",
                videoUrl: "https://www.youtube.com/watch?v=kX7ccUa7Nwc",
                imageUrl: "https://i.ytimg.com/vi/kX7ccUa7Nwc/mqdefault.jpg"
            },
            {
                order: 7,
                name: "Devil Press Unilateral Alterno con Mancuerna",
                sets: 2,
                reps: "10",
                rest: "60s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/uAICrzDbN0o",
                imageUrl: "https://i.ytimg.com/vi/uAICrzDbN0o/mqdefault.jpg"
            }
        ]
    },
    "dia5": {
        name: "Superseries 3",
        exercises: [
            {
                order: 1,
                name: "Remo Inclinado en Landmine",
                isSuperset: true,
                items: [
                    {
                        name: "Remo Inclinado en Landmine",
                        subOrder: 1,
                        sets: 3,
                        reps: "10",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/5gakUsid-Lg",
                        imageUrl: "https://i.ytimg.com/vi/5gakUsid-Lg/mqdefault.jpg"
                    },
                    {
                        name: "Remo Renegade Alterno con Mancuernas",
                        subOrder: 2,
                        sets: 3,
                        reps: "20",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/watch?v=FjwFzYXSK70",
                        imageUrl: "https://i.ytimg.com/vi/FjwFzYXSK70/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/5gakUsid-Lg",
                imageUrl: "https://i.ytimg.com/vi/5gakUsid-Lg/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Circuito",
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
                        reps: "30s",
                        isCircuitItem: true,
                        videoUrl: "https://www.youtube.com/watch?v=T4xdxoA4UzY",
                        imageUrl: "https://i.ytimg.com/vi/T4xdxoA4UzY/mqdefault.jpg"
                    },
                    {
                        name: "CARDIO - Bicicleta (Ritmo Suave)",
                        subOrder: 2,
                        sets: 1,
                        reps: "30s",
                        isCircuitItem: true,
                        videoUrl: "https://www.youtube.com/watch?v=r6iTJGOftHY",
                        imageUrl: "https://i.ytimg.com/vi/r6iTJGOftHY/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=T4xdxoA4UzY",
                imageUrl: "https://i.ytimg.com/vi/T4xdxoA4UzY/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Remo Horizontal en TRX",
                isSuperset: true,
                items: [
                    {
                        name: "Remo Horizontal en TRX",
                        subOrder: 1,
                        sets: 3,
                        reps: "15",
                        isSupersetStart: true,
                        notes: "Mantén una inclinación paralela al suelo.",
                        videoUrl: "https://www.youtube.com/watch?v=uTA2s5FuRUM",
                        imageUrl: "https://i.ytimg.com/vi/uTA2s5FuRUM/mqdefault.jpg"
                    },
                    {
                        name: "Crunch - V",
                        subOrder: 2,
                        sets: 3,
                        reps: "20",
                        rest: "60s",
                        videoUrl: "https://youtu.be/_SCqc7BCW9A",
                        imageUrl: "https://i.ytimg.com/vi/_SCqc7BCW9A/mqdefault.jpg"
                    }
                ],
                notes: "Mantén una inclinación paralela al suelo.",
                videoUrl: "https://www.youtube.com/watch?v=uTA2s5FuRUM",
                imageUrl: "https://i.ytimg.com/vi/uTA2s5FuRUM/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Circuito",
                isSuperset: true,
                circuitDetails: {
                    totalRounds: 3,
                    restBetweenExercisesSeconds: 3,
                    restBetweenRoundsSeconds: 3
                },
                items: [
                    {
                        name: "CARDIO - Bicicleta (Ritmo Fuerte)",
                        subOrder: 1,
                        sets: 1,
                        reps: "30s",
                        isCircuitItem: true,
                        videoUrl: "https://www.youtube.com/watch?v=T4xdxoA4UzY",
                        imageUrl: "https://i.ytimg.com/vi/T4xdxoA4UzY/mqdefault.jpg"
                    },
                    {
                        name: "CARDIO - Bicicleta (Ritmo Suave)",
                        subOrder: 2,
                        sets: 1,
                        reps: "30s",
                        isCircuitItem: true,
                        videoUrl: "https://www.youtube.com/watch?v=r6iTJGOftHY",
                        imageUrl: "https://i.ytimg.com/vi/r6iTJGOftHY/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=T4xdxoA4UzY",
                imageUrl: "https://i.ytimg.com/vi/T4xdxoA4UzY/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Jalón al Pecho Supino en Polea",
                isSuperset: true,
                items: [
                    {
                        name: "Jalón al Pecho Supino en Polea",
                        subOrder: 1,
                        sets: 3,
                        reps: "10",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/rimdRzyIJkA",
                        imageUrl: "https://i.ytimg.com/vi/rimdRzyIJkA/mqdefault.jpg"
                    },
                    {
                        name: "Flexiones + Mountain Climbers",
                        subOrder: 2,
                        sets: 3,
                        reps: "10",
                        rest: "60s",
                        videoUrl: "https://www.youtube.com/shorts/1wdJ5RSUCBE",
                        imageUrl: "https://i.ytimg.com/vi/1wdJ5RSUCBE/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/rimdRzyIJkA",
                imageUrl: "https://i.ytimg.com/vi/rimdRzyIJkA/mqdefault.jpg"
            },
            {
                order: 6,
                name: "Circuito",
                isSuperset: true,
                circuitDetails: {
                    totalRounds: 2,
                    restBetweenExercisesSeconds: 3,
                    restBetweenRoundsSeconds: 3
                },
                items: [
                    {
                        name: "CARDIO - Bicicleta (Ritmo Fuerte)",
                        subOrder: 1,
                        sets: 1,
                        reps: "30s",
                        isCircuitItem: true,
                        videoUrl: "https://www.youtube.com/watch?v=T4xdxoA4UzY",
                        imageUrl: "https://i.ytimg.com/vi/T4xdxoA4UzY/mqdefault.jpg"
                    },
                    {
                        name: "CARDIO - Bicicleta (Ritmo Suave)",
                        subOrder: 2,
                        sets: 1,
                        reps: "30s",
                        isCircuitItem: true,
                        videoUrl: "https://www.youtube.com/watch?v=r6iTJGOftHY",
                        imageUrl: "https://i.ytimg.com/vi/r6iTJGOftHY/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=T4xdxoA4UzY",
                imageUrl: "https://i.ytimg.com/vi/T4xdxoA4UzY/mqdefault.jpg"
            },
            {
                order: 7,
                name: "Thruster con Mancuernas",
                sets: 2,
                reps: "15",
                rest: "60s",
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=5mTjKFubavs",
                imageUrl: "https://i.ytimg.com/vi/5mTjKFubavs/mqdefault.jpg"
            }
        ]
    }
};

const exerciseAlternatives = {
};
