// Titulo: P19_4D_PHAT_1_FEM

const workoutData = {
    "dia1": {
        name: "TORSO Fuerza",
        exercises: [
            {
                order: 1,
                name: "Rotación Externa de Hombro Unilat con Polea",
                isWarmup: true,
                isSuperset: true,
                items: [
                    {
                        name: "Rotación Externa de Hombro Unilat con Polea",
                        subOrder: 1,
                        sets: 2,
                        reps: "10",
                        isSupersetStart: true,
                        videoUrl: "https://youtube.com/shorts/0dw436rzrNU",
                        imageUrl: "https://i.ytimg.com/vi/0dw436rzrNU/mqdefault.jpg"
                    },
                    {
                        name: "Rotación Interna de Hombro Unilat con Polea",
                        subOrder: 2,
                        sets: 2,
                        reps: "10",
                        rest: "30s",
                        videoUrl: "https://youtube.com/shorts/3SW4Pxgi1c0",
                        imageUrl: "https://i.ytimg.com/vi/3SW4Pxgi1c0/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtube.com/shorts/0dw436rzrNU",
                imageUrl: "https://i.ytimg.com/vi/0dw436rzrNU/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Dominadas Supinas",
                setTechniques: {},
                sets: 3,
                reps: "6",
                rest: "120s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/0TwqeC7fH8Y",
                imageUrl: "https://i.ytimg.com/vi/0TwqeC7fH8Y/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Press Militar con Barra de Pie",
                setTechniques: {},
                sets: 3,
                reps: "6",
                rest: "120s",
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=idnuMZx6mS0",
                imageUrl: "https://i.ytimg.com/vi/idnuMZx6mS0/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Remo Inclinado en Landmine",
                setTechniques: {},
                sets: 3,
                reps: "6",
                rest: "90s",
                notes: "",
                videoUrl: "https://youtu.be/5gakUsid-Lg",
                imageUrl: "https://i.ytimg.com/vi/5gakUsid-Lg/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Fondos en Paralelas con Peso Corporal",
                setTechniques: {},
                sets: 3,
                reps: "6",
                rest: "90",
                notes: "",
                videoUrl: "https://youtube.com/shorts/om9U8WY5HoY",
                imageUrl: "https://i.ytimg.com/vi/om9U8WY5HoY/mqdefault.jpg"
            },
            {
                order: 6,
                name: "Curl Araña con Mancuernas",
                isSuperset: true,
                items: [
                    {
                        name: "Curl Araña con Mancuernas",
                        subOrder: 1,
                        sets: 4,
                        reps: "8",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/shorts/vll2f1bqDlA",
                        imageUrl: "https://i.ytimg.com/vi/vll2f1bqDlA/mqdefault.jpg"
                    },
                    {
                        name: "Press Francés con Mancuernas en Banco Inclinado",
                        subOrder: 2,
                        sets: 4,
                        reps: "8",
                        rest: "90s",
                        videoUrl: "https://youtu.be/L__Q6Jl9Ics",
                        imageUrl: "https://i.ytimg.com/vi/L__Q6Jl9Ics/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/vll2f1bqDlA",
                imageUrl: "https://i.ytimg.com/vi/vll2f1bqDlA/mqdefault.jpg"
            }
        ]
    },
    "dia2": {
        name: "PIERNA Fuerza",
        exercises: [
            {
                order: 1,
                name: "Aducción de Piernas en Máquina",
                isWarmup: true,
                isSuperset: true,
                items: [
                    {
                        name: "Aducción de Piernas en Máquina",
                        subOrder: 1,
                        sets: 2,
                        reps: "15",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/shorts/7TPklhKZRrc",
                        imageUrl: "https://i.ytimg.com/vi/7TPklhKZRrc/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/7TPklhKZRrc",
                imageUrl: "https://i.ytimg.com/vi/7TPklhKZRrc/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Sentadilla Trasera con Barra",
                setTechniques: {},
                sets: 4,
                reps: "6",
                rest: "120s",
                notes: "",
                videoUrl: "https://youtu.be/FK5XU_gaxAE",
                imageUrl: "https://i.ytimg.com/vi/FK5XU_gaxAE/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Prensa Inclinada en Máquina de Discos",
                setTechniques: {},
                sets: 3,
                reps: "6",
                rest: "120s",
                notes: "Baja lo que te permita tu movilidad de cadera (Espalda completamente recta).",
                videoUrl: "https://www.youtube.com/shorts/je1QdJdvAN0",
                imageUrl: "https://i.ytimg.com/vi/je1QdJdvAN0/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Hip Thrust con Barra (ExPLICADO)",
                setTechniques: {},
                sets: 3,
                reps: "6",
                rest: "90s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/eIZUNV9Xj7Y",
                imageUrl: "https://i.ytimg.com/vi/eIZUNV9Xj7Y/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Curl Femoral Tumbado en Máquina",
                isSuperset: true,
                items: [
                    {
                        name: "Curl Femoral Tumbado en Máquina",
                        subOrder: 1,
                        sets: 4,
                        reps: "10",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/shorts/-VfGwgG23OM",
                        imageUrl: "https://i.ytimg.com/vi/-VfGwgG23OM/mqdefault.jpg"
                    },
                    {
                        name: "Sentadilla Goblet con Mancuerna/KTB (ExPLICADO)",
                        subOrder: 2,
                        sets: 4,
                        reps: "12",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/shorts/tNu9bm3geqY",
                        imageUrl: "https://i.ytimg.com/vi/tNu9bm3geqY/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/-VfGwgG23OM",
                imageUrl: "https://i.ytimg.com/vi/-VfGwgG23OM/mqdefault.jpg"
            }
        ]
    },
    "dia3": {
        name: "TRACCIÓN Volumen",
        exercises: [
            {
                order: 1,
                name: "Pull Over en Polea Alta",
                isWarmup: true,
                isSuperset: true,
                items: [
                    {
                        name: "Pull Over en Polea Alta",
                        subOrder: 1,
                        sets: 2,
                        reps: "15",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/shorts/zWGbrVxoUpk",
                        imageUrl: "https://i.ytimg.com/vi/zWGbrVxoUpk/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/zWGbrVxoUpk",
                imageUrl: "https://i.ytimg.com/vi/zWGbrVxoUpk/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Dominadas con Peso Corporal",
                setTechniques: {},
                sets: 5,
                reps: "3",
                rest: "60s",
                notes: "NO FUERZA. POTENCIA",
                videoUrl: "https://www.youtube.com/shorts/pb-14sP_R4M",
                imageUrl: "https://i.ytimg.com/vi/pb-14sP_R4M/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Remo Gironda en Polea",
                setTechniques: {},
                sets: 4,
                reps: "10",
                rest: "90s",
                notes: "Baja lo que te permita tu movilidad de cadera (Espalda completamente recta).",
                videoUrl: "https://youtube.com/shorts/11xkWdyYWus",
                imageUrl: "https://i.ytimg.com/vi/11xkWdyYWus/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Jalón al Pecho en Polea",
                setTechniques: {},
                sets: 3,
                reps: "15",
                rest: "90s",
                notes: "",
                videoUrl: "https://youtu.be/GYIhmy1P4vY",
                imageUrl: "https://i.ytimg.com/vi/GYIhmy1P4vY/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Elevaciones Laterales con Mancuernas",
                sets: 3,
                reps: "15",
                rest: "60s",
                notes: "",
                videoUrl: "https://youtu.be/rhmW_fhB4cs",
                imageUrl: "https://i.ytimg.com/vi/rhmW_fhB4cs/mqdefault.jpg"
            },
            {
                order: 6,
                name: "Curl Martillo con Cuerda en Polea Baja",
                isSuperset: true,
                items: [
                    {
                        name: "Curl Martillo con Cuerda en Polea Baja",
                        subOrder: 1,
                        sets: 3,
                        reps: "8",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/shorts/fSTgTQr1WCk",
                        imageUrl: "https://i.ytimg.com/vi/fSTgTQr1WCk/mqdefault.jpg"
                    },
                    {
                        name: "Face Pull al Cuello en Polea Alta",
                        subOrder: 2,
                        sets: 3,
                        reps: "8",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/shorts/TaTjLum-_qI",
                        imageUrl: "https://i.ytimg.com/vi/TaTjLum-_qI/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/fSTgTQr1WCk",
                imageUrl: "https://i.ytimg.com/vi/fSTgTQr1WCk/mqdefault.jpg"
            }
        ]
    },
    "dia4": {
        name: "EMPUJE Volumen",
        exercises: [
            {
                order: 1,
                name: "Flexiones / Deficit Push Ups con Discos al lado",
                isWarmup: true,
                isSuperset: true,
                items: [
                    {
                        name: "Flexiones / Deficit Push Ups con Discos al lado",
                        subOrder: 1,
                        sets: 2,
                        reps: "15",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/watch?v=nLnrNuQFlao",
                        imageUrl: "https://i.ytimg.com/vi/nLnrNuQFlao/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=nLnrNuQFlao",
                imageUrl: "https://i.ytimg.com/vi/nLnrNuQFlao/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Press Militar con Barra de Pie",
                setTechniques: {},
                sets: 5,
                reps: "3",
                rest: "60s",
                notes: "NO FUERZA. POTENCIA",
                videoUrl: "https://www.youtube.com/watch?v=idnuMZx6mS0",
                imageUrl: "https://i.ytimg.com/vi/idnuMZx6mS0/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Press Cerrado en Banco Inclinado con Mancuernas",
                setTechniques: {},
                sets: 4,
                reps: "10",
                rest: "90s",
                notes: "",
                videoUrl: "https://youtu.be/tdh7LSxUj1s",
                imageUrl: "https://i.ytimg.com/vi/tdh7LSxUj1s/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Press Militar Sentado con Mancuernas",
                sets: 3,
                reps: "12",
                rest: "60s",
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=_IMpMCr87Cg",
                imageUrl: "https://i.ytimg.com/vi/_IMpMCr87Cg/mqdefault.jpg"
            },
            {
                order: 6,
                name: "Flexiones / Deficit Push Ups con Discos al lado",
                isSuperset: true,
                items: [
                    {
                        name: "Flexiones / Deficit Push Ups con Discos al lado",
                        subOrder: 1,
                        sets: 3,
                        reps: "8",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/watch?v=nLnrNuQFlao",
                        imageUrl: "https://i.ytimg.com/vi/nLnrNuQFlao/mqdefault.jpg"
                    },
                    {
                        name: "Extensión de Tríceps en Polea con Cuerda",
                        subOrder: 2,
                        sets: 3,
                        reps: "8",
                        rest: "90s",
                        videoUrl: "https://youtube.com/shorts/Eqi6CSuPbUQ",
                        imageUrl: "https://i.ytimg.com/vi/Eqi6CSuPbUQ/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=nLnrNuQFlao",
                imageUrl: "https://i.ytimg.com/vi/nLnrNuQFlao/mqdefault.jpg"
            }
        ]
    }
};

const exerciseAlternatives = {
    "Remo Inclinado en Landmine": [
        { name: "Remo con Barra", videoUrl: "https://youtu.be/MjnZ52mZgT0", imageUrl: "https://i.ytimg.com/vi/MjnZ52mZgT0/mqdefault.jpg" }
    ],
    "Fondos en Paralelas con Peso Corporal": [
        { name: "Press Cerrado con Barra", videoUrl: "https://youtu.be/_062fQmtry8", imageUrl: "https://i.ytimg.com/vi/_062fQmtry8/mqdefault.jpg" }
    ],
    "Sentadilla Trasera con Barra": [
        { name: "Sentadilla Anterior en Máquina Jaca", videoUrl: "https://youtube.com/shorts/saLWdiUe5eE", imageUrl: "https://i.ytimg.com/vi/saLWdiUe5eE/mqdefault.jpg" }
    ],
    "Curl Femoral Tumbado en Máquina": [
        { name: "Curl Femoral Sentado en Máquina", videoUrl: "https://www.youtube.com/shorts/2fXW4I08ov4", imageUrl: "https://i.ytimg.com/vi/2fXW4I08ov4/mqdefault.jpg" }
    ],
    "Jalón al Pecho en Polea": [
        { name: "Jalón al Pecho en Polea", videoUrl: "https://youtu.be/GYIhmy1P4vY", imageUrl: "https://i.ytimg.com/vi/GYIhmy1P4vY/mqdefault.jpg" }
    ],
    "Press Militar con Barra de Pie": [
        { name: "Press Banca en Multipower (ExPLICADO)", videoUrl: "https://www.youtube.com/shorts/EDFhiF1mSKc", imageUrl: "https://i.ytimg.com/vi/EDFhiF1mSKc/mqdefault.jpg" }
    ]
};
