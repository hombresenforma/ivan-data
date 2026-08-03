// Titulo: P20_4D_TorPier_DC_0
// Notas: Rutina para AVANZADOS -> ALTA INTENSIDAD, Bajo Volumen
// - Adaptación sencilla de 4 días. Dropsets en lugar de Clusters.

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
                notes: "",
                videoUrl: "https://youtu.be/PKpsrFS2uac",
                imageUrl: "https://i.ytimg.com/vi/PKpsrFS2uac/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Press MIlitar en Multipower - Rodillas",
                setTechniques: {"2":"DROPSET","3":"DROPSET"},
                sets: 3,
                reps: "10",
                rest: "120s",
                notes: "",
                videoUrl: "https://youtube.com/shorts/ZtBQT2bnKEw?feature=share",
                imageUrl: "https://i.ytimg.com/vi/ZtBQT2bnKEw/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Extensión de Tríceps Unilat Trasnuca en Polea Alta",
                setTechniques: {"2":"DROPSET","3":"DROPSET"},
                sets: 3,
                reps: "15",
                rest: "120s",
                notes: "Stretch: elevación lateral cable (45s)",
                videoUrl: "https://youtu.be/_2VPSbsjMQE",
                imageUrl: "https://i.ytimg.com/vi/_2VPSbsjMQE/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Press Inclinado con Mancuernas",
                setTechniques: {},
                sets: 3,
                reps: "12",
                rest: "90s",
                notes: "",
                videoUrl: "https://youtu.be/ZE4M73kXB5A",
                imageUrl: "https://i.ytimg.com/vi/ZE4M73kXB5A/mqdefault.jpg"
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
                        reps: "12, 10, 8",
                        isSupersetStart: true,
                        notes: "Stretch: pullover cable (60s)",
                        videoUrl: "https://youtu.be/rimdRzyIJkA",
                        imageUrl: "https://i.ytimg.com/vi/rimdRzyIJkA/mqdefault.jpg"
                    },
                    {
                        name: "Extensión de Tríceps en Polea con Cuerda",
                        subOrder: 2,
                        sets: 3,
                        reps: "12, 10, 8",
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
        name: "B1 - Espalda/Bíceps/Pierna",
        exercises: [
            {
                order: 1,
                name: "Remo en Máquina T Agarre Estrecho",
                setTechniques: {},
                sets: 3,
                reps: "6, 6, 10",
                rest: "120",
                notes: "",
                videoUrl: "https://youtube.com/shorts/_XOaMY5NumY",
                imageUrl: "https://i.ytimg.com/vi/_XOaMY5NumY/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Dominadas Supinas Asistidas en Máquina",
                setTechniques: {"2":"DROPSET","3":"DROPSET"},
                sets: 3,
                reps: "10",
                rest: "120s",
                notes: "Puedes asistirte con banda elástica",
                videoUrl: "https://www.youtube.com/shorts/E9DT2pv7Rp0",
                imageUrl: "https://i.ytimg.com/vi/E9DT2pv7Rp0/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Sentadilla Anterior en Máquina Jaca",
                setTechniques: {"2":"DROPSET","3":"DROPSET"},
                sets: 3,
                reps: "10",
                rest: "120",
                notes: "",
                videoUrl: "https://youtube.com/shorts/saLWdiUe5eE",
                imageUrl: "https://i.ytimg.com/vi/saLWdiUe5eE/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Curl Femoral Tumbado en Máquina",
                setTechniques: {"2":"DROPSET","3":"DROPSET"},
                sets: 3,
                reps: "15",
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
                        reps: "12, 10, 8",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/shorts/Z3DdhEK_0rw",
                        imageUrl: "https://i.ytimg.com/vi/Z3DdhEK_0rw/mqdefault.jpg"
                    },
                    {
                        name: "Elevaciones Laterales en Poleas Cruzadas",
                        subOrder: 2,
                        sets: 3,
                        reps: "12, 10, 8",
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
                notes: "",
                videoUrl: "https://youtu.be/3GS7EjN7KSk",
                imageUrl: "https://i.ytimg.com/vi/3GS7EjN7KSk/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Press Militar Sentado con Mancuernas (ExPLICADO)",
                setTechniques: {"2":"DROPSET","3":"DROPSET"},
                sets: 3,
                reps: "10",
                rest: "120s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/2ZkYyh4ic0o",
                imageUrl: "https://i.ytimg.com/vi/2ZkYyh4ic0o/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Press Francés con Barra Z en Banco Inclinado",
                setTechniques: {"2":"DROPSET","3":"DROPSET"},
                sets: 3,
                reps: "15",
                rest: "120",
                notes: "",
                videoUrl: "https://youtu.be/hFk6xzt1DWM",
                imageUrl: "https://i.ytimg.com/vi/hFk6xzt1DWM/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Fondos en Paralelas Lastrados",
                setTechniques: {},
                sets: 3,
                reps: "12",
                rest: "90s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/xsnhvnyl70I",
                imageUrl: "https://i.ytimg.com/vi/xsnhvnyl70I/mqdefault.jpg"
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
                        reps: "12, 10, 8",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/shorts/zWGbrVxoUpk",
                        imageUrl: "https://i.ytimg.com/vi/zWGbrVxoUpk/mqdefault.jpg"
                    },
                    {
                        name: "Cruces en Polea Alta",
                        subOrder: 2,
                        sets: 3,
                        reps: "12, 10, 8",
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
        name: "B2 - Espalda/Bíceps/Pierna",
        exercises: [
            {
                order: 1,
                name: "Máquina de Remo (Gironda)",
                setTechniques: {},
                sets: 3,
                reps: "6, 6, 10",
                rest: "120s",
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=3wcaZqSfP0A",
                imageUrl: "https://i.ytimg.com/vi/3wcaZqSfP0A/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Curl Scott con Barra Z",
                setTechniques: {"2":"DROPSET","3":"DROPSET"},
                sets: 3,
                reps: "15",
                rest: "120",
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=-Rzppjmt6ag",
                imageUrl: "https://i.ytimg.com/vi/-Rzppjmt6ag/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Prensa Inclinada en Máquina de Discos",
                setTechniques: {"2":"DROPSET","3":"DROPSET"},
                sets: 3,
                reps: "10",
                rest: "120s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/je1QdJdvAN0",
                imageUrl: "https://i.ytimg.com/vi/je1QdJdvAN0/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Extensión de Cuádriceps en Máquina",
                setTechniques: {},
                sets: 3,
                reps: "12",
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
                        reps: "12, 10, 8",
                        isSupersetStart: true,
                        notes: "Stretch: estiramiento con peso (30s)",
                        videoUrl: "https://youtube.com/shorts/0GHLPYa_jzo",
                        imageUrl: "https://i.ytimg.com/vi/0GHLPYa_jzo/mqdefault.jpg"
                    },
                    {
                        name: "Face Pull al Cuello en Polea Alta",
                        subOrder: 2,
                        sets: 3,
                        reps: "12, 10, 8",
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
    }
};

const exerciseAlternatives = {
    "Press Banca con Barra": [
        { name: "Press Banca en Multipower", videoUrl: "https://youtu.be/w-5ovE5O5iU", imageUrl: "https://i.ytimg.com/vi/w-5ovE5O5iU/mqdefault.jpg" }
    ],
    "Press MIlitar en Multipower - Rodillas": [
        { name: "Press Militar con Barra de Pie", videoUrl: "https://www.youtube.com/watch?v=idnuMZx6mS0", imageUrl: "https://i.ytimg.com/vi/idnuMZx6mS0/mqdefault.jpg" }
    ],
    "Remo en Máquina T Agarre Estrecho": [
        { name: "Remo con Barra", videoUrl: "https://youtu.be/MjnZ52mZgT0", imageUrl: "https://i.ytimg.com/vi/MjnZ52mZgT0/mqdefault.jpg" }
    ],
    "Sentadilla Anterior en Máquina Jaca": [
        { name: "Sentadilla Trasera en Multipower", videoUrl: "https://youtu.be/la-dqygoIuk", imageUrl: "https://i.ytimg.com/vi/la-dqygoIuk/mqdefault.jpg" }
    ],
    "Press Banca Inclinado en Multipower": [
        { name: "Press en Máquina inclinado", videoUrl: "https://www.youtube.com/watch?v=nna4gQD-v9Y", imageUrl: "https://i.ytimg.com/vi/nna4gQD-v9Y/mqdefault.jpg" }
    ],
    "Máquina de Remo (Gironda)": [
        { name: "Remo Gironda en Polea", videoUrl: "https://youtube.com/shorts/11xkWdyYWus", imageUrl: "https://i.ytimg.com/vi/11xkWdyYWus/mqdefault.jpg" }
    ]
};
