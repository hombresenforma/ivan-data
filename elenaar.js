// Titulo: P16_4D_TORPIER_FUERZATOP_1_ FEM 1

const workoutData = {
    "dia1": {
        name: "Posterior",
        exercises: [
            {
                order: 1,
                name: "Sentadilla Posterior en Máquina Jaca",
                setTechniques: {"1":"REST-PAUSE","2":"REST-PAUSE","3":"REST-PAUSE"},
                sets: 3,
                reps: "8",
                rest: "120s",
                notes: "",
                videoUrl: "https://youtube.com/shorts/KII1KHKgr8o",
                imageUrl: "https://i.ytimg.com/vi/KII1KHKgr8o/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Máquina de Remo (Gironda)",
                setTechniques: {"3":"DROPSET"},
                sets: 3,
                reps: "8",
                rest: "90s",
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=3wcaZqSfP0A",
                imageUrl: "https://i.ytimg.com/vi/3wcaZqSfP0A/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Jalón al Pecho Supino en Polea",
                isSuperset: true,
                items: [
                    {
                        name: "Jalón al Pecho Supino en Polea",
                        subOrder: 1,
                        sets: 3,
                        reps: "8",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/rimdRzyIJkA",
                        imageUrl: "https://i.ytimg.com/vi/rimdRzyIJkA/mqdefault.jpg"
                    },
                    {
                        name: "Elevaciones Laterales con Mancuernas",
                        subOrder: 2,
                        sets: 3,
                        reps: "12",
                        rest: "90s",
                        videoUrl: "https://youtu.be/rhmW_fhB4cs",
                        imageUrl: "https://i.ytimg.com/vi/rhmW_fhB4cs/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/rimdRzyIJkA",
                imageUrl: "https://i.ytimg.com/vi/rimdRzyIJkA/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Peso Muerto Rumano con Mancuernas/KTB",
                sets: 3,
                reps: "10-12",
                rest: "90s",
                notes: "Espalda recta en todo momento",
                videoUrl: "https://www.youtube.com/shorts/SMll4DOYvEs",
                imageUrl: "https://i.ytimg.com/vi/SMll4DOYvEs/mqdefault.jpg"
            },
            {
                order: 5,
                name: "EMOM",
                isSuperset: true,
                isEMOM: true,
                emomDetails: {
                    totalIntervals: 3,
                    workIntervalSeconds: 60
                },
                items: [
                    {
                        name: "Dominadas Australianas con Pies en el Suelo",
                        subOrder: 1,
                        sets: 1,
                        reps: "10",
                        isEMOMItem: true,
                        notes: "Intenta que la espalda esté lo más vertical posible (Sin avanzar la cadera).",
                        videoUrl: "https://www.youtube.com/watch?v=-GFyrw9BJVk",
                        imageUrl: "https://i.ytimg.com/vi/-GFyrw9BJVk/mqdefault.jpg"
                    },
                    {
                        name: "Remo Renegade + Flexión con Mancuernas",
                        subOrder: 2,
                        sets: 1,
                        reps: "10",
                        isEMOMItem: true,
                        videoUrl: "https://www.youtube.com/shorts/hLPJik1MaaY",
                        imageUrl: "https://i.ytimg.com/vi/hLPJik1MaaY/mqdefault.jpg"
                    },
                    {
                        name: "Curl Martillo con Mancuernas",
                        subOrder: 3,
                        sets: 1,
                        reps: "12",
                        isEMOMItem: true,
                        videoUrl: "https://youtu.be/fcFsPoJY9lg",
                        imageUrl: "https://i.ytimg.com/vi/fcFsPoJY9lg/mqdefault.jpg"
                    }
                ],
                notes: "Intenta que la espalda esté lo más vertical posible (Sin avanzar la cadera).",
                videoUrl: "https://www.youtube.com/watch?v=-GFyrw9BJVk",
                imageUrl: "https://i.ytimg.com/vi/-GFyrw9BJVk/mqdefault.jpg"
            }
        ]
    },
    "dia2": {
        name: "Anterior",
        exercises: [
            {
                order: 1,
                name: "Sentadilla Trasera en Multipower",
                setTechniques: {"1":"REST-PAUSE","2":"REST-PAUSE","3":"REST-PAUSE"},
                sets: 3,
                reps: "8",
                rest: "120s",
                notes: "",
                videoUrl: "https://youtu.be/la-dqygoIuk",
                imageUrl: "https://i.ytimg.com/vi/la-dqygoIuk/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Press Militar Sentado con Mancuernas (ExPLICADO)",
                setTechniques: {"3":"DROPSET"},
                sets: 3,
                reps: "8",
                rest: "90s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/2ZkYyh4ic0o",
                imageUrl: "https://i.ytimg.com/vi/2ZkYyh4ic0o/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Fondos en Paralelas con Peso Corporal",
                sets: 3,
                reps: "6-8",
                rest: "90s",
                notes: "No bajes más de lo que tu movilidad de hombro te permita (unos 90 grados)",
                videoUrl: "https://youtube.com/shorts/om9U8WY5HoY",
                imageUrl: "https://i.ytimg.com/vi/om9U8WY5HoY/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Zancada Trasera Alterna con Mancuernas/KTB",
                sets: 3,
                reps: "10-12",
                rest: "60s",
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=Kzv73cEkTq4",
                imageUrl: "https://i.ytimg.com/vi/Kzv73cEkTq4/mqdefault.jpg"
            },
            {
                order: 6,
                name: "EMOM",
                isSuperset: true,
                isEMOM: true,
                emomDetails: {
                    totalIntervals: 3,
                    workIntervalSeconds: 60
                },
                items: [
                    {
                        name: "Muscle Clean-Jerk Unilat Alterno con Mancuerna",
                        subOrder: 1,
                        sets: 1,
                        reps: "10",
                        isEMOMItem: true,
                        notes: "Alterna entre brazos",
                        videoUrl: "https://www.youtube.com/shorts/2sOV3aayUCI",
                        imageUrl: "https://i.ytimg.com/vi/2sOV3aayUCI/mqdefault.jpg"
                    },
                    {
                        name: "Fondos de Tríceps con Pies en el Suelo",
                        subOrder: 2,
                        sets: 1,
                        reps: "12",
                        isEMOMItem: true,
                        videoUrl: "https://youtube.com/shorts/7mpEJQC_gRk",
                        imageUrl: "https://i.ytimg.com/vi/7mpEJQC_gRk/mqdefault.jpg"
                    },
                    {
                        name: "Plancha - Cambios de apoyo",
                        subOrder: 3,
                        sets: 1,
                        reps: "8",
                        isEMOMItem: true,
                        videoUrl: "https://youtu.be/Yg74EfwLBQY",
                        imageUrl: "https://i.ytimg.com/vi/Yg74EfwLBQY/mqdefault.jpg"
                    }
                ],
                notes: "Alterna entre brazos",
                videoUrl: "https://www.youtube.com/shorts/2sOV3aayUCI",
                imageUrl: "https://i.ytimg.com/vi/2sOV3aayUCI/mqdefault.jpg"
            }
        ]
    },
    "dia3": {
        name: "Foco GLÚTEO",
        exercises: [
            {
                order: 1,
                name: "Hip Thrust con Barra (ExPLICADO)",
                setTechniques: {"1":"REST-PAUSE","2":"REST-PAUSE","3":"REST-PAUSE"},
                sets: 3,
                reps: "8",
                rest: "120s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/eIZUNV9Xj7Y",
                imageUrl: "https://i.ytimg.com/vi/eIZUNV9Xj7Y/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Sentadilla Búlgara con Mancuerna o KTB",
                sets: 3,
                reps: "10-12",
                rest: "90s",
                notes: "",
                videoUrl: "https://youtu.be/kA6bHiDdTO4",
                imageUrl: "https://i.ytimg.com/vi/kA6bHiDdTO4/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Abducción de Glúteo Unilat en el Suelo",
                setTechniques: {"3":"DROPSET"},
                sets: 3,
                reps: "10",
                rest: "90s",
                notes: "",
                videoUrl: "https://youtu.be/TY5nZehvOhU?si=c3yMrpjxVKgMh7jG",
                imageUrl: "https://i.ytimg.com/vi/TY5nZehvOhU/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Patada de Glúteo en Polea",
                sets: 3,
                reps: "12",
                rest: "60s",
                notes: "Usa un disco o step para elevar el otro pie",
                videoUrl: "https://www.youtube.com/watch?v=3KdH7vkEW6s",
                imageUrl: "https://i.ytimg.com/vi/3KdH7vkEW6s/mqdefault.jpg"
            },
            {
                order: 5,
                name: "EMOM",
                isSuperset: true,
                isEMOM: true,
                emomDetails: {
                    totalIntervals: 3,
                    workIntervalSeconds: 45
                },
                items: [
                    {
                        name: "Sit Up Abdominal con Disco",
                        subOrder: 1,
                        sets: 1,
                        reps: "10",
                        isEMOMItem: true,
                        videoUrl: "https://www.youtube.com/shorts/GHLO76YCyHE",
                        imageUrl: "https://i.ytimg.com/vi/GHLO76YCyHE/mqdefault.jpg"
                    },
                    {
                        name: "Crunch Abdominal Piernas Extendidas",
                        subOrder: 2,
                        sets: 1,
                        reps: "12",
                        isEMOMItem: true,
                        videoUrl: "https://youtu.be/TYNp3OsGKL0",
                        imageUrl: "https://i.ytimg.com/vi/TYNp3OsGKL0/mqdefault.jpg"
                    },
                    {
                        name: "Abducción de Glúteo Unilat en el Suelo",
                        subOrder: 3,
                        sets: 1,
                        reps: "15",
                        isEMOMItem: true,
                        videoUrl: "https://youtu.be/TY5nZehvOhU?si=c3yMrpjxVKgMh7jG",
                        imageUrl: "https://i.ytimg.com/vi/TY5nZehvOhU/mqdefault.jpg"
                    },
                    {
                        name: "Abducción de Glúteo Unilat en el Suelo",
                        subOrder: 4,
                        sets: 1,
                        reps: "15",
                        isEMOMItem: true,
                        videoUrl: "https://youtu.be/TY5nZehvOhU?si=c3yMrpjxVKgMh7jG",
                        imageUrl: "https://i.ytimg.com/vi/TY5nZehvOhU/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/GHLO76YCyHE",
                imageUrl: "https://i.ytimg.com/vi/GHLO76YCyHE/mqdefault.jpg"
            }
        ]
    }
};

const exerciseAlternatives = {
    "Sentadilla Posterior en Máquina Jaca": [
        { name: "Sentadilla Anterior en Máquina Jaca", videoUrl: "https://youtube.com/shorts/saLWdiUe5eE", imageUrl: "https://i.ytimg.com/vi/saLWdiUe5eE/mqdefault.jpg" }
    ],
    "Máquina de Remo (Gironda)": [
        { name: "Remo Gironda en Polea", videoUrl: "https://youtube.com/shorts/11xkWdyYWus", imageUrl: "https://i.ytimg.com/vi/11xkWdyYWus/mqdefault.jpg" }
    ],
    "Sentadilla Trasera en Multipower": [
        { name: "Sentadilla Trasera con Barra", videoUrl: "https://youtu.be/FK5XU_gaxAE", imageUrl: "https://i.ytimg.com/vi/FK5XU_gaxAE/mqdefault.jpg" }
    ],
    "Fondos en Paralelas con Peso Corporal": [
        { name: "Flexiones / Deficit Push Ups con Discos al lado", videoUrl: "https://www.youtube.com/watch?v=nLnrNuQFlao", imageUrl: "https://i.ytimg.com/vi/nLnrNuQFlao/mqdefault.jpg" }
    ]
};
