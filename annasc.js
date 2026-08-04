// Titulo: P19_2D_PHAT_2_FEM
// Notas: FUERZA: Cambiamos ORDEN ejercicios de fuerza + Variante de los del final.
// VOLUMEN: Cambiamos patrón V-H en Potencia + Añadimos POTENCIA en básico de PIERNA.

const workoutData = {
    "dia1": {
        name: "TORSO Completo",
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
                name: "Fondos en Paralelas con Peso Corporal",
                setTechniques: {},
                sets: 4,
                reps: "6, 6, 6, 10",
                rest: "120s",
                notes: "",
                videoUrl: "https://youtube.com/shorts/om9U8WY5HoY",
                imageUrl: "https://i.ytimg.com/vi/om9U8WY5HoY/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Dominadas Supinas",
                setTechniques: {},
                sets: 4,
                reps: "6",
                rest: "120s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/0TwqeC7fH8Y",
                imageUrl: "https://i.ytimg.com/vi/0TwqeC7fH8Y/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Press Militar Unilateral en Landmine",
                isSuperset: true,
                items: [
                    {
                        name: "Press Militar Unilateral en Landmine",
                        subOrder: 1,
                        sets: 3,
                        reps: "10",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/watch?v=p2OLvWOo9l0",
                        imageUrl: "https://i.ytimg.com/vi/p2OLvWOo9l0/mqdefault.jpg"
                    },
                    {
                        name: "Remo Unilateral en Landmine",
                        subOrder: 2,
                        sets: 3,
                        reps: "10",
                        rest: "90s",
                        videoUrl: "https://youtu.be/DSMBCxZlts4",
                        imageUrl: "https://i.ytimg.com/vi/DSMBCxZlts4/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=p2OLvWOo9l0",
                imageUrl: "https://i.ytimg.com/vi/p2OLvWOo9l0/mqdefault.jpg"
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
            },
            {
                order: 6,
                name: "Elevación Lateral Unilat en Polea Alta",
                sets: 2,
                reps: "10",
                rest: "60s",
                notes: "",
                videoUrl: "https://youtube.com/shorts/8h_6GaA47HA",
                imageUrl: "https://i.ytimg.com/vi/8h_6GaA47HA/mqdefault.jpg"
            }
        ]
    },
    "dia2": {
        name: "PIERNA Completa",
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
                name: "Hip Thrust con Barra (ExPLICADO)",
                setTechniques: {},
                sets: 4,
                reps: "6, 6, 6, 10",
                rest: "120s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/eIZUNV9Xj7Y",
                imageUrl: "https://i.ytimg.com/vi/eIZUNV9Xj7Y/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Sentadilla Búlgara con Mancuerna o KTB",
                setTechniques: {},
                sets: 4,
                reps: "6",
                rest: "120s",
                notes: "Baja lo que te permita tu movilidad de cadera (Espalda completamente recta).",
                videoUrl: "https://youtu.be/kA6bHiDdTO4",
                imageUrl: "https://i.ytimg.com/vi/kA6bHiDdTO4/mqdefault.jpg"
            },
            {
                order: 4,
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
                        name: "Zancadas Caminando con Mancuernas/KTB",
                        subOrder: 2,
                        sets: 3,
                        reps: "16",
                        rest: "90s",
                        videoUrl: "https://youtu.be/7tRy9X0ibnk",
                        imageUrl: "https://i.ytimg.com/vi/7tRy9X0ibnk/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/FK5XU_gaxAE",
                imageUrl: "https://i.ytimg.com/vi/FK5XU_gaxAE/mqdefault.jpg"
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
            },
            {
                order: 6,
                name: "Patada de Glúteo en Polea",
                sets: 2,
                reps: "10",
                rest: "60s",
                notes: "Usa un disco o step para elevar el otro pie",
                videoUrl: "https://www.youtube.com/watch?v=3KdH7vkEW6s",
                imageUrl: "https://i.ytimg.com/vi/3KdH7vkEW6s/mqdefault.jpg"
            }
        ]
    }
};

const exerciseAlternatives = {
    "Fondos en Paralelas con Peso Corporal": [
        { name: "Press Cerrado con Barra", videoUrl: "https://youtu.be/_062fQmtry8", imageUrl: "https://i.ytimg.com/vi/_062fQmtry8/mqdefault.jpg" }
    ],
    "Dominadas Supinas": [
        { name: "Jalón al Pecho Supino en Polea", videoUrl: "https://youtu.be/rimdRzyIJkA", imageUrl: "https://i.ytimg.com/vi/rimdRzyIJkA/mqdefault.jpg" }
    ],
    "Curl Femoral Tumbado en Máquina": [
        { name: "Curl Femoral Sentado en Máquina", videoUrl: "https://www.youtube.com/shorts/2fXW4I08ov4", imageUrl: "https://i.ytimg.com/vi/2fXW4I08ov4/mqdefault.jpg" }
    ]
};
