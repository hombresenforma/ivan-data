// Titulo: P11_3+1_TorPierTor_TWS_CLUTERS_1
// Notas: Trabajo por CLUSTERS y SERIES AL FALLO.
// For Time 21,15,9 + Trabajo de abdomen POLEA
// Contenido de app_datos.js
// =================================================================================
// DATOS DE LA RUTINA (4 DÍAS)
// =================================================================================

const workoutData = {
    "dia1": {
        name: "Torso Empuje",
        exercises: [
            {
                order: 1,
                name: "Press Banca Inclinado en Multipower",
                setTechniques: {"3":"CLUSTER"},
                sets: 3,
                reps: "6, 6, 25",
                rest: "120s",
                notes: "",
                videoUrl: "https://youtu.be/3GS7EjN7KSk",
                imageUrl: "https://i.ytimg.com/vi/3GS7EjN7KSk/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Jalón al Pecho en Polea",
                sets: 3,
                reps: "10",
                rest: "90s",
                notes: "",
                videoUrl: "https://youtu.be/GYIhmy1P4vY",
                imageUrl: "https://i.ytimg.com/vi/GYIhmy1P4vY/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Press Militar Sentado con Mancuernas",
                sets: 3,
                reps: "10",
                rest: "90s",
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=_IMpMCr87Cg",
                imageUrl: "https://i.ytimg.com/vi/_IMpMCr87Cg/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Flexiones + Mountain Climbers",
                sets: 3,
                reps: "FALLO",
                rest: "90s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/1wdJ5RSUCBE",
                imageUrl: "https://i.ytimg.com/vi/1wdJ5RSUCBE/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Circuito Metabólico",
                isSuperset: true,
                isEMOM: true,
                emomDetails: {
                    totalIntervals: 4,
                    workIntervalSeconds: 60
                },
                items: [
                    {
                        name: "Fondos de Tríceps con Pies Elevados",
                        subOrder: 1,
                        sets: 1,
                        reps: "10",
                        isEMOMItem: true,
                        videoUrl: "https://youtube.com/shorts/FBttBh-aiVs",
                        imageUrl: "https://i.ytimg.com/vi/FBttBh-aiVs/mqdefault.jpg"
                    },
                    {
                        name: "Worm + Flexión",
                        subOrder: 2,
                        sets: 1,
                        reps: "5",
                        isEMOMItem: true,
                        videoUrl: "https://www.youtube.com/watch?v=FhJAsfzBj50",
                        imageUrl: "https://i.ytimg.com/vi/FhJAsfzBj50/mqdefault.jpg"
                    },
                    {
                        name: "Muscle Clean-Jerk Unilat Alterno con Mancuerna",
                        subOrder: 3,
                        sets: 1,
                        reps: "10",
                        isEMOMItem: true,
                        videoUrl: "https://www.youtube.com/shorts/2sOV3aayUCI",
                        imageUrl: "https://i.ytimg.com/vi/2sOV3aayUCI/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtube.com/shorts/FBttBh-aiVs",
                imageUrl: "https://i.ytimg.com/vi/FBttBh-aiVs/mqdefault.jpg"
            }
        ]
    },
    "dia2": {
        name: "Piernas",
        exercises: [
            {
                order: 1,
                name: "Aducción de Piernas en Máquina",
                sets: 2,
                reps: "12-15",
                rest: "60s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/7TPklhKZRrc",
                imageUrl: "https://i.ytimg.com/vi/7TPklhKZRrc/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Sentadilla Anterior en Máquina Jaca",
                setTechniques: {"3":"CLUSTER"},
                sets: 3,
                reps: "6, 6, 25",
                rest: "120s",
                notes: "",
                videoUrl: "https://youtube.com/shorts/saLWdiUe5eE",
                imageUrl: "https://i.ytimg.com/vi/saLWdiUe5eE/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Prensa Inclinada en Máquina de Discos",
                sets: 3,
                reps: "10",
                rest: "90s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/je1QdJdvAN0",
                imageUrl: "https://i.ytimg.com/vi/je1QdJdvAN0/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Extensión de Cuádriceps en Máquina",
                sets: 2,
                reps: "FALLO",
                rest: "90s",
                notes: "2 series AL FALLO (Con peso para hacer entre 12 y 15 reps teóricas). Anota las repeticiones. ",
                videoUrl: "https://www.youtube.com/watch?v=k1Nn0cJOMng",
                imageUrl: "https://i.ytimg.com/vi/k1Nn0cJOMng/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Curl Femoral Tumbado en Máquina",
                sets: 2,
                reps: "FALLO",
                rest: "90s",
                notes: "2 series AL FALLO (Con peso para hacer entre 12 y 15 reps teóricas). Anota las repeticiones. ",
                videoUrl: "https://www.youtube.com/shorts/-VfGwgG23OM",
                imageUrl: "https://i.ytimg.com/vi/-VfGwgG23OM/mqdefault.jpg"
            },
            {
                order: 6,
                name: "Circuito Metabólico",
                isSuperset: true,
                isEMOM: true,
                emomDetails: {
                    totalIntervals: 4,
                    workIntervalSeconds: 60
                },
                items: [
                    {
                        name: "Zancadas Caminando con Mancuernas/KTB",
                        subOrder: 1,
                        sets: 1,
                        reps: "12",
                        isEMOMItem: true,
                        notes: "Zancadas cortas como en el vídeo para priorizar trabajo de cuádriceps. Talón del pie delantero a la altura de la rodilla trasera.",
                        videoUrl: "https://youtu.be/7tRy9X0ibnk",
                        imageUrl: "https://i.ytimg.com/vi/7tRy9X0ibnk/mqdefault.jpg"
                    },
                    {
                        name: "Kettlebell - Swing con Sentadilla",
                        subOrder: 2,
                        sets: 1,
                        reps: "12",
                        isEMOMItem: true,
                        videoUrl: "https://youtube.com/shorts/MUJ2UiP5gjc",
                        imageUrl: "https://i.ytimg.com/vi/MUJ2UiP5gjc/mqdefault.jpg"
                    },
                    {
                        name: "Plancha - Normal",
                        subOrder: 3,
                        sets: 1,
                        reps: "30s",
                        isEMOMItem: true,
                        videoUrl: "https://youtu.be/DQ4wYExQRJo",
                        imageUrl: "https://i.ytimg.com/vi/DQ4wYExQRJo/mqdefault.jpg"
                    }
                ],
                notes: "Zancadas cortas como en el vídeo para priorizar trabajo de cuádriceps. Talón del pie delantero a la altura de la rodilla trasera.",
                videoUrl: "https://youtu.be/7tRy9X0ibnk",
                imageUrl: "https://i.ytimg.com/vi/7tRy9X0ibnk/mqdefault.jpg"
            }
        ]
    },
    "dia3": {
        name: "Torso Tracción",
        exercises: [
            {
                order: 1,
                name: "Remo en Máquina T Agarre Estrecho",
                setTechniques: {"3":"CLUSTER"},
                sets: 3,
                reps: "6, 6, 25",
                rest: "120s",
                notes: "",
                videoUrl: "https://youtube.com/shorts/_XOaMY5NumY",
                imageUrl: "https://i.ytimg.com/vi/_XOaMY5NumY/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Press Banca con Mancuernas",
                sets: 3,
                reps: "10",
                rest: "90s",
                notes: "",
                videoUrl: "https://youtu.be/hXCJC2Apcdg",
                imageUrl: "https://i.ytimg.com/vi/hXCJC2Apcdg/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Dominadas Supinas Asistidas en Máquina",
                sets: 3,
                reps: "10",
                rest: "90s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/E9DT2pv7Rp0",
                imageUrl: "https://i.ytimg.com/vi/E9DT2pv7Rp0/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Dominadas Australianas con Pies en el Suelo",
                sets: 3,
                reps: "FALLO",
                rest: "90s",
                notes: "Intenta que la espalda esté lo más vertical posible (Sin avanzar la cadera).",
                videoUrl: "https://www.youtube.com/watch?v=-GFyrw9BJVk",
                imageUrl: "https://i.ytimg.com/vi/-GFyrw9BJVk/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Circuito Metabólico",
                isSuperset: true,
                isEMOM: true,
                emomDetails: {
                    totalIntervals: 4,
                    workIntervalSeconds: 60
                },
                items: [
                    {
                        name: "Curl Martillo con Mancuernas",
                        subOrder: 1,
                        sets: 1,
                        reps: "12",
                        isEMOMItem: true,
                        videoUrl: "https://youtu.be/fcFsPoJY9lg",
                        imageUrl: "https://i.ytimg.com/vi/fcFsPoJY9lg/mqdefault.jpg"
                    },
                    {
                        name: "Face Pull con TRX",
                        subOrder: 2,
                        sets: 1,
                        reps: "10",
                        isEMOMItem: true,
                        videoUrl: "https://www.youtube.com/shorts/bxzpphpaGSg",
                        imageUrl: "https://i.ytimg.com/vi/bxzpphpaGSg/mqdefault.jpg"
                    },
                    {
                        name: "Remo Renegade Alterno + Peso Muerto con Mancuernas",
                        subOrder: 3,
                        sets: 1,
                        reps: "8",
                        isEMOMItem: true,
                        videoUrl: "https://www.youtube.com/shorts/HH8uoLbhWSw",
                        imageUrl: "https://i.ytimg.com/vi/HH8uoLbhWSw/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/fcFsPoJY9lg",
                imageUrl: "https://i.ytimg.com/vi/fcFsPoJY9lg/mqdefault.jpg"
            }
        ]
    },
    "dia4": {
        name: "FOR TIME (TWS) - ABS CARGA",
        exercises: [
            {
                order: 1,
                name: "FOR TIME (Thruster+Worm+SitUp)",
                isSuperset: true,
                isForTime: true,
                forTimeDetails: {
                    totalRounds: 3
                },
                items: [
                    {
                        name: "Thruster con Mancuernas",
                        subOrder: 1,
                        reps: "21, 15, 9",
                        isForTimeItem: true,
                        notes: "Objetivo: Mejorar el tiempo en cada entreno. ",
                        videoUrl: "https://www.youtube.com/watch?v=5mTjKFubavs",
                        imageUrl: "https://i.ytimg.com/vi/5mTjKFubavs/mqdefault.jpg"
                    },
                    {
                        name: "Worm + Burpee",
                        subOrder: 2,
                        reps: "21, 15, 9",
                        isForTimeItem: true,
                        videoUrl: "https://www.youtube.com/watch?v=qTLp4wcAAtQ",
                        imageUrl: "https://i.ytimg.com/vi/qTLp4wcAAtQ/mqdefault.jpg"
                    },
                    {
                        name: "Sit Up Abdominal con Disco",
                        subOrder: 3,
                        reps: "21, 15, 9",
                        isForTimeItem: true,
                        videoUrl: "https://www.youtube.com/shorts/GHLO76YCyHE",
                        imageUrl: "https://i.ytimg.com/vi/GHLO76YCyHE/mqdefault.jpg"
                    }
                ],
                notes: "Objetivo: Mejorar el tiempo en cada entreno. ",
                videoUrl: "https://www.youtube.com/watch?v=5mTjKFubavs",
                imageUrl: "https://i.ytimg.com/vi/5mTjKFubavs/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Crunch en Polea Alta",
                isSuperset: true,
                items: [
                    {
                        name: "Crunch en Polea Alta",
                        subOrder: 1,
                        sets: 3,
                        reps: "10",
                        isSupersetStart: true,
                        videoUrl: "https://youtube.com/shorts/H9QSO6XBRkA",
                        imageUrl: "https://i.ytimg.com/vi/H9QSO6XBRkA/mqdefault.jpg"
                    },
                    {
                        name: "Press Pallof Excéntrico Unilat en Polea",
                        subOrder: 2,
                        sets: 3,
                        reps: "8",
                        rest: "90s",
                        videoUrl: "https://youtube.com/shorts/r89c9qr-CB0",
                        imageUrl: "https://i.ytimg.com/vi/r89c9qr-CB0/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtube.com/shorts/H9QSO6XBRkA",
                imageUrl: "https://i.ytimg.com/vi/H9QSO6XBRkA/mqdefault.jpg"
            }
        ]
    }
};

const exerciseAlternatives = {
    "Press Banca Inclinado en Multipower": [
        { name: "Press Banca Inclinado con Barra", videoUrl: "https://www.youtube.com/watch?v=4tPP-4K5kMQ", imageUrl: "https://i.ytimg.com/vi/4tPP-4K5kMQ/mqdefault.jpg" }
    ],
    "Sentadilla Anterior en Máquina Jaca": [
        { name: "Sentadilla Trasera en Multipower", videoUrl: "https://youtu.be/la-dqygoIuk", imageUrl: "https://i.ytimg.com/vi/la-dqygoIuk/mqdefault.jpg" }
    ],
    "Prensa Inclinada en Máquina de Discos": [
        { name: "Sentadilla Trasera en Multipower", videoUrl: "https://youtu.be/la-dqygoIuk", imageUrl: "https://i.ytimg.com/vi/la-dqygoIuk/mqdefault.jpg" }
    ],
    "Curl Femoral Tumbado en Máquina": [
        { name: "Curl Femoral Tumbado en Máquina", videoUrl: "https://www.youtube.com/shorts/-VfGwgG23OM", imageUrl: "https://i.ytimg.com/vi/-VfGwgG23OM/mqdefault.jpg" }
    ],
    "Remo en Máquina T Agarre Estrecho": [
        { name: "Remo Gironda Sentado en Polea", videoUrl: "", imageUrl: "" }
    ],
    "Press Banca con Mancuernas": [
        { name: "Press Banca con Barra", videoUrl: "https://youtu.be/PKpsrFS2uac", imageUrl: "https://i.ytimg.com/vi/PKpsrFS2uac/mqdefault.jpg" }
    ]
};
