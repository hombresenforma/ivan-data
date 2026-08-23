// Titulo: P20_6D_TorPier_DC_2
// Notas: Rutina para AVANZADOS -> ALTA INTENSIDAD, Bajo Volumen
// - Usa un peso para 8 reps al fallo + 2 clusters. Objetivo de reps marcado. Tienes 4 reps de margen. Por ejemplo si pone 15 reps, margen de 11 a 15 reps. 

const workoutData = {
    "dia1": {
        name: "A1 - Pecho/Hombros/Tríceps/Espalda",
        exercises: [
            {
                order: 1,
                name: "Press Banca con Barra",
                setTechniques: {},
                sets: 3,
                reps: "6, 6, 10",
                rest: "120s",
                notes: "Stretch: aperturas cable bajo (60s)",
                videoUrl: "https://youtu.be/PKpsrFS2uac",
                imageUrl: "https://i.ytimg.com/vi/PKpsrFS2uac/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Press MIlitar en Multipower - Rodillas",
                setTechniques: {"1":"CLUSTER","2":"CLUSTER","3":"DROPSET"},
                sets: 3,
                reps: "15, 15, 10",
                rest: "120s",
                notes: "Stretch: elevación lateral cable (45s)",
                videoUrl: "https://youtube.com/shorts/ZtBQT2bnKEw?feature=share",
                imageUrl: "https://i.ytimg.com/vi/ZtBQT2bnKEw/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Extensión de Tríceps en Polea con Cuerda",
                setTechniques: {"1":"CLUSTER","2":"CLUSTER","3":"DROPSET"},
                sets: 3,
                reps: "20, 20, 10",
                rest: "120s",
                notes: "Stretch: elevación lateral cable (45s)",
                videoUrl: "https://youtube.com/shorts/Eqi6CSuPbUQ",
                imageUrl: "https://i.ytimg.com/vi/Eqi6CSuPbUQ/mqdefault.jpg"
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
                        notes: "Stretch: pullover cable (60s)",
                        videoUrl: "https://youtu.be/rimdRzyIJkA",
                        imageUrl: "https://i.ytimg.com/vi/rimdRzyIJkA/mqdefault.jpg"
                    },
                    {
                        name: "Extensión de Tríceps en Polea con Cuerda",
                        subOrder: 2,
                        sets: 3,
                        reps: "10",
                        rest: "90s",
                        videoUrl: "https://youtube.com/shorts/Eqi6CSuPbUQ",
                        imageUrl: "https://i.ytimg.com/vi/Eqi6CSuPbUQ/mqdefault.jpg"
                    }
                ],
                notes: "Stretch: pullover cable (60s)",
                videoUrl: "https://youtu.be/rimdRzyIJkA",
                imageUrl: "https://i.ytimg.com/vi/rimdRzyIJkA/mqdefault.jpg"
            }
        ]
    },
    "dia2": {
        name: "B1 - Espalda/Bíceps/Cuádriceps/Femoral/Gemelos",
        exercises: [
            {
                order: 1,
                name: "Remo en Máquina T Agarre Estrecho",
                setTechniques: {},
                sets: 3,
                reps: "6, 6, 10",
                rest: "120",
                notes: "Stretch: remo en máquina (60s)",
                videoUrl: "https://youtube.com/shorts/_XOaMY5NumY",
                imageUrl: "https://i.ytimg.com/vi/_XOaMY5NumY/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Curl Martillo con Mancuernas",
                setTechniques: {"1":"CLUSTER","2":"CLUSTER","3":"DROPSET"},
                sets: 3,
                reps: "20, 20, 10",
                rest: "120s",
                notes: "Stretch: curl en banco inclinado (45s)",
                videoUrl: "https://youtu.be/fcFsPoJY9lg",
                imageUrl: "https://i.ytimg.com/vi/fcFsPoJY9lg/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Sentadilla Anterior en Máquina Jaca",
                setTechniques: {"1":"CLUSTER","2":"CLUSTER","3":"DROPSET"},
                sets: 3,
                reps: "15, 15, 10",
                rest: "120",
                notes: "Stretch: sentadilla profunda con peso (60s)",
                videoUrl: "https://youtube.com/shorts/saLWdiUe5eE",
                imageUrl: "https://i.ytimg.com/vi/saLWdiUe5eE/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Curl Femoral Tumbado en Máquina",
                setTechniques: {"1":"CLUSTER","2":"CLUSTER"},
                sets: 2,
                reps: "20",
                rest: "90s",
                notes: "Stretch: estiramiento con peso (30s)",
                videoUrl: "https://www.youtube.com/shorts/-VfGwgG23OM",
                imageUrl: "https://i.ytimg.com/vi/-VfGwgG23OM/mqdefault.jpg"
            },
            {
                order: 6,
                name: "Curl Bayesian de Pie en Polea Doble",
                isSuperset: true,
                items: [
                    {
                        name: "Curl Bayesian de Pie en Polea Doble",
                        subOrder: 1,
                        sets: 3,
                        reps: "10",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/shorts/Z3DdhEK_0rw",
                        imageUrl: "https://i.ytimg.com/vi/Z3DdhEK_0rw/mqdefault.jpg"
                    },
                    {
                        name: "Elevaciones Laterales en Poleas Cruzadas",
                        subOrder: 2,
                        sets: 3,
                        reps: "10",
                        rest: "90s",
                        videoUrl: "https://youtu.be/MtLsD20-EdE",
                        imageUrl: "https://i.ytimg.com/vi/MtLsD20-EdE/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/Z3DdhEK_0rw",
                imageUrl: "https://i.ytimg.com/vi/Z3DdhEK_0rw/mqdefault.jpg"
            }
        ]
    },
    "dia3": {
        name: "A2 - Pecho/Hombros/Tríceps/Espalda",
        exercises: [
            {
                order: 1,
                name: "Press Banca Inclinado en Multipower",
                setTechniques: {},
                sets: 3,
                reps: "6, 6, 10",
                rest: "120",
                notes: "Stretch: aperturas con mancuernas (60s)",
                videoUrl: "https://youtu.be/3GS7EjN7KSk",
                imageUrl: "https://i.ytimg.com/vi/3GS7EjN7KSk/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Press Militar Sentado con Mancuernas (ExPLICADO)",
                setTechniques: {"1":"CLUSTER","2":"CLUSTER","3":"DROPSET"},
                sets: 3,
                reps: "15, 15, 10",
                rest: "120s",
                notes: "Stretch: elevación frontal cable (45s)",
                videoUrl: "https://www.youtube.com/shorts/2ZkYyh4ic0o",
                imageUrl: "https://i.ytimg.com/vi/2ZkYyh4ic0o/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Press Francés con Barra Z en Banco Inclinado",
                setTechniques: {"1":"CLUSTER","2":"CLUSTER","3":"DROPSET"},
                sets: 3,
                reps: "20, 20, 10",
                rest: "120",
                notes: "Stretch: extensión overhead mancuerna (45s)",
                videoUrl: "https://youtu.be/hFk6xzt1DWM",
                imageUrl: "https://i.ytimg.com/vi/hFk6xzt1DWM/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Pull Over en Polea Alta",
                isSuperset: true,
                items: [
                    {
                        name: "Pull Over en Polea Alta",
                        subOrder: 1,
                        sets: 3,
                        reps: "10",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/shorts/zWGbrVxoUpk",
                        imageUrl: "https://i.ytimg.com/vi/zWGbrVxoUpk/mqdefault.jpg"
                    },
                    {
                        name: "Cruces en Polea Alta",
                        subOrder: 2,
                        sets: 3,
                        reps: "10",
                        rest: "90s",
                        videoUrl: "https://youtu.be/Ht9awbF2fBA",
                        imageUrl: "https://i.ytimg.com/vi/Ht9awbF2fBA/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/zWGbrVxoUpk",
                imageUrl: "https://i.ytimg.com/vi/zWGbrVxoUpk/mqdefault.jpg"
            }
        ]
    },
    "dia4": {
        name: "B2 - Espalda/Bíceps/Cuádriceps/Femoral/Gemelos",
        exercises: [
            {
                order: 1,
                name: "Remo con Barra",
                setTechniques: {},
                sets: 3,
                reps: "6, 6, 10",
                rest: "120s",
                notes: "Stretch: remo en cable (60s)",
                videoUrl: "https://youtu.be/MjnZ52mZgT0",
                imageUrl: "https://i.ytimg.com/vi/MjnZ52mZgT0/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Curl Scott con Barra Z",
                setTechniques: {"1":"CLUSTER","2":"CLUSTER","3":"DROPSET"},
                sets: 3,
                reps: "20, 20, 10",
                rest: "120",
                notes: "Stretch: curl Scott cable (45s)",
                videoUrl: "https://www.youtube.com/watch?v=-Rzppjmt6ag",
                imageUrl: "https://i.ytimg.com/vi/-Rzppjmt6ag/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Prensa Inclinada en Máquina de Discos",
                setTechniques: {"1":"CLUSTER","2":"CLUSTER","3":"DROPSET"},
                sets: 3,
                reps: "15, 15, 10",
                rest: "120s",
                notes: "Stretch: sentadilla sissy (60s)",
                videoUrl: "https://www.youtube.com/shorts/je1QdJdvAN0",
                imageUrl: "https://i.ytimg.com/vi/je1QdJdvAN0/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Extensión de Cuádriceps en Máquina",
                setTechniques: {"1":"CLUSTER","2":"CLUSTER"},
                sets: 2,
                reps: "20",
                rest: "120",
                notes: "Stretch: posición estirada en máquina (60s)",
                videoUrl: "https://www.youtube.com/watch?v=k1Nn0cJOMng",
                imageUrl: "https://i.ytimg.com/vi/k1Nn0cJOMng/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Curl de Biceps en Polea Baja",
                isSuperset: true,
                items: [
                    {
                        name: "Curl de Biceps en Polea Baja",
                        subOrder: 1,
                        sets: 3,
                        reps: "10",
                        isSupersetStart: true,
                        notes: "Stretch: estiramiento con peso (30s)",
                        videoUrl: "https://youtube.com/shorts/0GHLPYa_jzo",
                        imageUrl: "https://i.ytimg.com/vi/0GHLPYa_jzo/mqdefault.jpg"
                    },
                    {
                        name: "Face Pull al Cuello en Polea Alta",
                        subOrder: 2,
                        sets: 3,
                        reps: "10",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/shorts/TaTjLum-_qI",
                        imageUrl: "https://i.ytimg.com/vi/TaTjLum-_qI/mqdefault.jpg"
                    }
                ],
                notes: "Stretch: estiramiento con peso (30s)",
                videoUrl: "https://youtube.com/shorts/0GHLPYa_jzo",
                imageUrl: "https://i.ytimg.com/vi/0GHLPYa_jzo/mqdefault.jpg"
            }
        ]
    },
    "dia5": {
        name: "A3 - Pecho/Hombros/Tríceps/Espalda",
        exercises: [
            {
                order: 1,
                name: "Press Inclinado con Mancuernas",
                setTechniques: {},
                sets: 3,
                reps: "6, 6, 10",
                rest: "120s",
                notes: "Stretch: cruce en polea alta (60s)",
                videoUrl: "https://youtu.be/ZE4M73kXB5A",
                imageUrl: "https://i.ytimg.com/vi/ZE4M73kXB5A/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Fondos en Paralelas Lastrados",
                setTechniques: {"1":"CLUSTER","2":"CLUSTER","3":"DROPSET"},
                sets: 3,
                reps: "15, 15, 10",
                rest: "120s",
                notes: "Stretch: elevación lateral mancuerna (45s)",
                videoUrl: "https://www.youtube.com/shorts/xsnhvnyl70I",
                imageUrl: "https://i.ytimg.com/vi/xsnhvnyl70I/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Extensión Tríceps Trasnuca con Barra Z",
                setTechniques: {"1":"CLUSTER","2":"CLUSTER","3":"DROPSET"},
                sets: 3,
                reps: "20, 20, 10",
                rest: "120s",
                notes: "Hazlo con cable mejor. ",
                videoUrl: "https://youtu.be/O5wMBydqDHY",
                imageUrl: "https://i.ytimg.com/vi/O5wMBydqDHY/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Dominadas con Peso Corporal",
                isSuperset: true,
                items: [
                    {
                        name: "Dominadas con Peso Corporal",
                        subOrder: 1,
                        sets: 3,
                        reps: "10",
                        isSupersetStart: true,
                        notes: "Stretch: straight-arm pulldown (60s)",
                        videoUrl: "https://www.youtube.com/shorts/pb-14sP_R4M",
                        imageUrl: "https://i.ytimg.com/vi/pb-14sP_R4M/mqdefault.jpg"
                    },
                    {
                        name: "Flexiones / Deficit Push Ups con Discos al lado",
                        subOrder: 2,
                        sets: 3,
                        reps: "10",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/watch?v=nLnrNuQFlao",
                        imageUrl: "https://i.ytimg.com/vi/nLnrNuQFlao/mqdefault.jpg"
                    }
                ],
                notes: "Stretch: straight-arm pulldown (60s)",
                videoUrl: "https://www.youtube.com/shorts/pb-14sP_R4M",
                imageUrl: "https://i.ytimg.com/vi/pb-14sP_R4M/mqdefault.jpg"
            }
        ]
    },
    "dia6": {
        name: "B3 - Espalda/Bíceps/Cuádriceps/Femoral/Gemelos",
        exercises: [
            {
                order: 1,
                name: "Remo Gironda en Polea",
                setTechniques: {},
                sets: 3,
                reps: "6, 6, 10",
                rest: "120",
                notes: "Stretch: remo bajo en polea (60s)",
                videoUrl: "https://youtube.com/shorts/11xkWdyYWus",
                imageUrl: "https://i.ytimg.com/vi/11xkWdyYWus/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Dead Curl con Barra",
                setTechniques: {"1":"CLUSTER","2":"CLUSTER","3":"DROPSET"},
                sets: 3,
                reps: "20, 20, 10",
                rest: "120",
                notes: "Stretch: curl en polea baja (45s)",
                videoUrl: "https://www.youtube.com/shorts/HWs4EYCI8iE",
                imageUrl: "https://i.ytimg.com/vi/HWs4EYCI8iE/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Sentadilla Trasera con Barra",
                setTechniques: {"1":"CLUSTER","2":"CLUSTER","3":"DROPSET"},
                sets: 3,
                reps: "15, 15, 10",
                rest: "120",
                notes: "Stretch: sentadilla búlgara (60s)",
                videoUrl: "https://youtu.be/FK5XU_gaxAE",
                imageUrl: "https://i.ytimg.com/vi/FK5XU_gaxAE/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Aducción de Piernas en Máquina",
                setTechniques: {"1":"CLUSTER","2":"CLUSTER"},
                sets: 2,
                reps: "20",
                rest: "120",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/7TPklhKZRrc",
                imageUrl: "https://i.ytimg.com/vi/7TPklhKZRrc/mqdefault.jpg"
            },
            {
                order: 7,
                name: "Curl con Mancuernas Sentado en Banco Inclinado",
                isSuperset: true,
                items: [
                    {
                        name: "Curl con Mancuernas Sentado en Banco Inclinado",
                        subOrder: 1,
                        sets: 3,
                        reps: "10",
                        isSupersetStart: true,
                        notes: "Stretch: sentadilla búlgara (60s)",
                        videoUrl: "https://youtu.be/S32a3nYiWko",
                        imageUrl: "https://i.ytimg.com/vi/S32a3nYiWko/mqdefault.jpg"
                    },
                    {
                        name: "Elevaciones Laterales en Polea",
                        subOrder: 2,
                        sets: 3,
                        reps: "10",
                        rest: "90s",
                        videoUrl: "https://youtu.be/UxII1sPTa9U",
                        imageUrl: "https://i.ytimg.com/vi/UxII1sPTa9U/mqdefault.jpg"
                    }
                ],
                notes: "Stretch: sentadilla búlgara (60s)",
                videoUrl: "https://youtu.be/S32a3nYiWko",
                imageUrl: "https://i.ytimg.com/vi/S32a3nYiWko/mqdefault.jpg"
            }
        ]
    }
};

const exerciseAlternatives = {
};
