// Titulo: P6_3D_ANTPOSTFB_RESTPAUSE_2_HOME
// Notas: AntPost:
// - Ejercicio 1 añadimos 1 serie más con REST-PAUSE.
// - Ejercicio 2 añadimos 1 serie más y cambiamos todo a DROP-SET.
// 
// Fullbody:
// - EMOMs 1 y 2: Añadimos 1 vuelta y bajamos tiempo de 120 a 90s

const workoutData = {
    "dia1": {
        name: "Posterior",
        exercises: [
            {
                order: 1,
                name: "Sentadilla Frontal con Mancuernas/Kettlebells",
                setTechniques: {"1":"REST-PAUSE","2":"REST-PAUSE","3":"REST-PAUSE","4":"REST-PAUSE"},
                sets: 4,
                reps: "10",
                rest: "120s",
                notes: "",
                videoUrl: "https://youtu.be/lfb6neUpfP8",
                imageUrl: "https://i.ytimg.com/vi/lfb6neUpfP8/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Remo Unilat con Mancuerna/KTB (Explicado)",
                setTechniques: {"1":"DROPSET","2":"DROPSET","3":"DROPSET"},
                sets: 3,
                reps: "10",
                rest: "120s",
                notes: "",
                videoUrl: "https://youtu.be/uH9Hg4nWOG8",
                imageUrl: "https://i.ytimg.com/vi/uH9Hg4nWOG8/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Dominadas Australianas en TRX",
                isSuperset: true,
                items: [
                    {
                        name: "Dominadas Australianas en TRX",
                        subOrder: 1,
                        sets: 3,
                        reps: "10",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/shorts/f2-aezhuOoQ",
                        imageUrl: "https://i.ytimg.com/vi/f2-aezhuOoQ/mqdefault.jpg"
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
                videoUrl: "https://www.youtube.com/shorts/f2-aezhuOoQ",
                imageUrl: "https://i.ytimg.com/vi/f2-aezhuOoQ/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Sentadilla Búlgara con Mancuerna o KTB",
                sets: 3,
                reps: "10",
                rest: "90s",
                notes: "",
                videoUrl: "https://youtu.be/kA6bHiDdTO4",
                imageUrl: "https://i.ytimg.com/vi/kA6bHiDdTO4/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Gorilla Row con Kettlebells/Mancuernas",
                isSuperset: true,
                items: [
                    {
                        name: "Gorilla Row con Kettlebells/Mancuernas",
                        subOrder: 1,
                        sets: 3,
                        reps: "20",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/4hKPsdWsXl8",
                        imageUrl: "https://i.ytimg.com/vi/4hKPsdWsXl8/mqdefault.jpg"
                    },
                    {
                        name: "Curl Martillo con Mancuernas",
                        subOrder: 2,
                        sets: 3,
                        reps: "10",
                        videoUrl: "https://youtu.be/fcFsPoJY9lg",
                        imageUrl: "https://i.ytimg.com/vi/fcFsPoJY9lg/mqdefault.jpg"
                    },
                    {
                        name: "Zancada Dinámica",
                        subOrder: 3,
                        sets: 3,
                        reps: "15",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/watch?v=eSAN1E5usJI",
                        imageUrl: "https://i.ytimg.com/vi/eSAN1E5usJI/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/4hKPsdWsXl8",
                imageUrl: "https://i.ytimg.com/vi/4hKPsdWsXl8/mqdefault.jpg"
            }
        ]
    },
    "dia2": {
        name: "Anterior",
        exercises: [
            {
                order: 1,
                name: "Press Banca con Mancuernas",
                setTechniques: {"1":"REST-PAUSE","2":"REST-PAUSE","3":"REST-PAUSE","4":"REST-PAUSE"},
                sets: 4,
                reps: "10",
                rest: "120s",
                notes: "",
                videoUrl: "https://youtu.be/hXCJC2Apcdg",
                imageUrl: "https://i.ytimg.com/vi/hXCJC2Apcdg/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Press Militar Sentado con Mancuernas (ExPLICADO)",
                setTechniques: {"1":"DROPSET","2":"DROPSET","3":"DROPSET"},
                sets: 3,
                reps: "10",
                rest: "90s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/2ZkYyh4ic0o",
                imageUrl: "https://i.ytimg.com/vi/2ZkYyh4ic0o/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Flexiones / Deficit Push Ups con Discos al lado",
                sets: 3,
                reps: "12",
                rest: "60s",
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=nLnrNuQFlao",
                imageUrl: "https://i.ytimg.com/vi/nLnrNuQFlao/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Zancada Trasera Alterna con Mancuernas/KTB",
                sets: 3,
                reps: "20",
                rest: "90s",
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=Kzv73cEkTq4",
                imageUrl: "https://i.ytimg.com/vi/Kzv73cEkTq4/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Press Militar Unilat de Pie con Mancuerna/KTB",
                sets: 3,
                reps: "10",
                rest: "60s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/vIK0qkXP_f0",
                imageUrl: "https://i.ytimg.com/vi/vIK0qkXP_f0/mqdefault.jpg"
            },
            {
                order: 6,
                name: "Extensión Tríceps Trasnuca con Mancuernas/Kettlebell",
                isSuperset: true,
                items: [
                    {
                        name: "Extensión Tríceps Trasnuca con Mancuernas/Kettlebell",
                        subOrder: 1,
                        sets: 3,
                        reps: "10",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/1MgU2PO4_rI",
                        imageUrl: "https://i.ytimg.com/vi/1MgU2PO4_rI/mqdefault.jpg"
                    },
                    {
                        name: "Fondos de Tríceps con Pies Elevados",
                        subOrder: 2,
                        sets: 3,
                        reps: "15",
                        videoUrl: "https://youtube.com/shorts/FBttBh-aiVs",
                        imageUrl: "https://i.ytimg.com/vi/FBttBh-aiVs/mqdefault.jpg"
                    },
                    {
                        name: "Worm + Flexión",
                        subOrder: 3,
                        sets: 3,
                        reps: "8",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/watch?v=FhJAsfzBj50",
                        imageUrl: "https://i.ytimg.com/vi/FhJAsfzBj50/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/1MgU2PO4_rI",
                imageUrl: "https://i.ytimg.com/vi/1MgU2PO4_rI/mqdefault.jpg"
            }
        ]
    },
    "dia3": {
        name: "Fullbody",
        exercises: [
            {
                order: 1,
                name: "EMOM",
                isSuperset: true,
                isEMOM: true,
                emomDetails: {
                    totalIntervals: 4,
                    workIntervalSeconds: 90
                },
                items: [
                    {
                        name: "Remo Inclinado con Mancuernas/KTB (ExPLICADO)",
                        subOrder: 1,
                        sets: 1,
                        reps: "8",
                        isEMOMItem: true,
                        videoUrl: "https://www.youtube.com/shorts/NMlvYALcyBc",
                        imageUrl: "https://i.ytimg.com/vi/NMlvYALcyBc/mqdefault.jpg"
                    },
                    {
                        name: "Press Inclinado con Mancuernas",
                        subOrder: 2,
                        sets: 1,
                        reps: "8",
                        isEMOMItem: true,
                        videoUrl: "https://youtu.be/ZE4M73kXB5A",
                        imageUrl: "https://i.ytimg.com/vi/ZE4M73kXB5A/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/NMlvYALcyBc",
                imageUrl: "https://i.ytimg.com/vi/NMlvYALcyBc/mqdefault.jpg"
            },
            {
                order: 2,
                name: "EMOM",
                isSuperset: true,
                isEMOM: true,
                emomDetails: {
                    totalIntervals: 4,
                    workIntervalSeconds: 90
                },
                items: [
                    {
                        name: "Zancadas Caminando con Mancuernas/KTB",
                        subOrder: 1,
                        sets: 1,
                        reps: "20",
                        isEMOMItem: true,
                        notes: "Zancadas cortas como en el vídeo para priorizar trabajo de cuádriceps. Talón del pie delantero a la altura de la rodilla trasera.",
                        videoUrl: "https://youtu.be/7tRy9X0ibnk",
                        imageUrl: "https://i.ytimg.com/vi/7tRy9X0ibnk/mqdefault.jpg"
                    }
                ],
                notes: "Zancadas cortas como en el vídeo para priorizar trabajo de cuádriceps. Talón del pie delantero a la altura de la rodilla trasera.",
                videoUrl: "https://youtu.be/7tRy9X0ibnk",
                imageUrl: "https://i.ytimg.com/vi/7tRy9X0ibnk/mqdefault.jpg"
            },
            {
                order: 3,
                name: "EMOM",
                isSuperset: true,
                isEMOM: true,
                emomDetails: {
                    totalIntervals: 3,
                    workIntervalSeconds: 90
                },
                items: [
                    {
                        name: "Curl con Mancuernas Sentado en Banco Inclinado",
                        subOrder: 1,
                        sets: 1,
                        reps: "10",
                        isEMOMItem: true,
                        videoUrl: "https://youtu.be/S32a3nYiWko",
                        imageUrl: "https://i.ytimg.com/vi/S32a3nYiWko/mqdefault.jpg"
                    },
                    {
                        name: "Press Francés con Mancuernas en Banco Inclinado",
                        subOrder: 2,
                        sets: 1,
                        reps: "10",
                        isEMOMItem: true,
                        videoUrl: "https://youtu.be/L__Q6Jl9Ics",
                        imageUrl: "https://i.ytimg.com/vi/L__Q6Jl9Ics/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/S32a3nYiWko",
                imageUrl: "https://i.ytimg.com/vi/S32a3nYiWko/mqdefault.jpg"
            },
            {
                order: 4,
                name: "EMOM",
                isSuperset: true,
                isEMOM: true,
                emomDetails: {
                    totalIntervals: 4,
                    workIntervalSeconds: 60
                },
                items: [
                    {
                        name: "Burpee Completo",
                        subOrder: 1,
                        sets: 1,
                        reps: "5",
                        isEMOMItem: true,
                        videoUrl: "https://youtu.be/qfBhsTabWN0",
                        imageUrl: "https://i.ytimg.com/vi/qfBhsTabWN0/mqdefault.jpg"
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
                        name: "Spider Climber",
                        subOrder: 3,
                        sets: 1,
                        reps: "12",
                        isEMOMItem: true,
                        videoUrl: "https://youtu.be/bzzJ0zeO70A",
                        imageUrl: "https://i.ytimg.com/vi/bzzJ0zeO70A/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/qfBhsTabWN0",
                imageUrl: "https://i.ytimg.com/vi/qfBhsTabWN0/mqdefault.jpg"
            }
        ]
    },
    "dia4": {
        name: "Fullbody TRX",
        exercises: [
            {
                order: 1,
                name: "Movilidad - Activación de Cadera",
                isWarmup: true,
                isSuperset: true,
                items: [
                    {
                        name: "Movilidad - Activación de Cadera",
                        subOrder: 1,
                        sets: 2,
                        reps: "10",
                        isSupersetStart: true,
                        notes: "Haz los ejercicios y repeticiones del vídeo",
                        videoUrl: "https://youtu.be/ltzWjXiHXao",
                        imageUrl: "https://i.ytimg.com/vi/ltzWjXiHXao/mqdefault.jpg"
                    },
                    {
                        name: "Movilidad - Cintura Escapular",
                        subOrder: 2,
                        sets: 2,
                        reps: "10",
                        videoUrl: "https://youtu.be/qFt3RmTDmXI",
                        imageUrl: "https://i.ytimg.com/vi/qFt3RmTDmXI/mqdefault.jpg"
                    },
                    {
                        name: "Movilidad - Activación de Escápulas",
                        subOrder: 3,
                        sets: 2,
                        reps: "10",
                        rest: "20s",
                        videoUrl: "https://youtu.be/6Kj_rg_7tYQ",
                        imageUrl: "https://i.ytimg.com/vi/6Kj_rg_7tYQ/mqdefault.jpg"
                    }
                ],
                notes: "Haz los ejercicios y repeticiones del vídeo",
                videoUrl: "https://youtu.be/ltzWjXiHXao",
                imageUrl: "https://i.ytimg.com/vi/ltzWjXiHXao/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Face Pull con TRX",
                isSuperset: true,
                items: [
                    {
                        name: "Face Pull con TRX",
                        subOrder: 1,
                        sets: 3,
                        reps: "12",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/shorts/bxzpphpaGSg",
                        imageUrl: "https://i.ytimg.com/vi/bxzpphpaGSg/mqdefault.jpg"
                    },
                    {
                        name: "Plancha - Normal",
                        subOrder: 2,
                        sets: 3,
                        reps: "15\"",
                        rest: "45s",
                        videoUrl: "https://youtu.be/DQ4wYExQRJo",
                        imageUrl: "https://i.ytimg.com/vi/DQ4wYExQRJo/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/bxzpphpaGSg",
                imageUrl: "https://i.ytimg.com/vi/bxzpphpaGSg/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Flexiones / Push Ups en TRX / Anillas",
                sets: 4,
                reps: "10",
                rest: "60s",
                notes: "Mantener espalda recta y glúteo apretado (retroversión de cadera)\nTambién puedes hacerla con los pies en el suelo. Cuanto más paralelo al suelo estés mayor la intensidad (como en el vídeo).",
                videoUrl: "https://www.youtube.com/watch?v=i8tpN3KPXLE",
                imageUrl: "https://i.ytimg.com/vi/i8tpN3KPXLE/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Remo en TRX",
                sets: 4,
                reps: "10",
                rest: "60s",
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=L6F1ZKsrRGI",
                imageUrl: "https://i.ytimg.com/vi/L6F1ZKsrRGI/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Sentadilla Búlgara en TRX",
                sets: 4,
                reps: "10",
                rest: "60s",
                notes: "10 repeticiones con cada pierna",
                videoUrl: "https://www.youtube.com/shorts/1IiEF0y17pM",
                imageUrl: "https://i.ytimg.com/vi/1IiEF0y17pM/mqdefault.jpg"
            },
            {
                order: 6,
                name: "Circuito",
                isSuperset: true,
                circuitDetails: {
                    totalRounds: 8,
                    restBetweenExercisesSeconds: 10,
                    restBetweenRoundsSeconds: 0
                },
                items: [
                    {
                        name: "Worm",
                        subOrder: 1,
                        sets: 1,
                        reps: "20",
                        isCircuitItem: true,
                        videoUrl: "https://www.youtube.com/watch?v=irBHRDg7ZHU",
                        imageUrl: "https://i.ytimg.com/vi/irBHRDg7ZHU/mqdefault.jpg"
                    },
                    {
                        name: "Burpee Completo",
                        subOrder: 2,
                        sets: 1,
                        reps: "20",
                        isCircuitItem: true,
                        videoUrl: "https://youtu.be/qfBhsTabWN0",
                        imageUrl: "https://i.ytimg.com/vi/qfBhsTabWN0/mqdefault.jpg"
                    },
                    {
                        name: "Jumping Jack",
                        subOrder: 3,
                        sets: 1,
                        reps: "20",
                        isCircuitItem: true,
                        videoUrl: "https://youtu.be/K5PMB8CauGM",
                        imageUrl: "https://i.ytimg.com/vi/K5PMB8CauGM/mqdefault.jpg"
                    },
                    {
                        name: "Sentadilla con Salto",
                        subOrder: 4,
                        sets: 1,
                        reps: "20",
                        isCircuitItem: true,
                        videoUrl: "https://www.youtube.com/watch?v=l6zEYjjJ4dE",
                        imageUrl: "https://i.ytimg.com/vi/l6zEYjjJ4dE/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=irBHRDg7ZHU",
                imageUrl: "https://i.ytimg.com/vi/irBHRDg7ZHU/mqdefault.jpg"
            }
        ]
    }
};

const exerciseAlternatives = {
    "Sentadilla Frontal con Mancuernas/Kettlebells": [
        { name: "Sentadilla Goblet con Mancuerna/KTB (ExPLICADO)", videoUrl: "https://www.youtube.com/shorts/tNu9bm3geqY", imageUrl: "https://i.ytimg.com/vi/tNu9bm3geqY/mqdefault.jpg" }
    ],
    "Press Banca con Mancuernas": [
        { name: "Floor Press con Mancuernas", videoUrl: "https://www.youtube.com/shorts/Iu02N3s7zgQ", imageUrl: "https://i.ytimg.com/vi/Iu02N3s7zgQ/mqdefault.jpg" }
    ]
};

