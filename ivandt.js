// Titulo: IVAN_NUEVOBÁSICOS

const workoutData = {
    "dia1": {
        name: "SENTADILLA",
        exercises: [
            {
                order: 1,
                name: "Aducción de Piernas en Máquina",
                isWarmup: true,
                sets: 3,
                reps: "10",
                rest: "60s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/7TPklhKZRrc",
                imageUrl: "https://i.ytimg.com/vi/7TPklhKZRrc/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Sentadilla Trasera con Barra",
                sets: 3,
                reps: "8",
                rest: "120s",
                notes: "",
                videoUrl: "https://youtu.be/FK5XU_gaxAE",
                imageUrl: "https://i.ytimg.com/vi/FK5XU_gaxAE/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Press Banca Inclinado en Multipower",
                sets: 3,
                reps: "8, 8, 12",
                rest: "120s",
                notes: "",
                videoUrl: "https://youtu.be/3GS7EjN7KSk",
                imageUrl: "https://i.ytimg.com/vi/3GS7EjN7KSk/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Press Militar Sentado con Mancuernas (ExPLICADO)",
                sets: 3,
                reps: "8, 8, 12",
                rest: "90s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/2ZkYyh4ic0o",
                imageUrl: "https://i.ytimg.com/vi/2ZkYyh4ic0o/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Fondos en Paralelas Lastrados",
                sets: 2,
                reps: "8, 12",
                rest: "90s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/xsnhvnyl70I",
                imageUrl: "https://i.ytimg.com/vi/xsnhvnyl70I/mqdefault.jpg"
            },
            {
                order: 6,
                name: "Extensión de Cuádriceps en Máquina",
                isSuperset: true,
                items: [
                    {
                        name: "Extensión de Cuádriceps en Máquina",
                        subOrder: 1,
                        sets: 2,
                        reps: "10",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/watch?v=k1Nn0cJOMng",
                        imageUrl: "https://i.ytimg.com/vi/k1Nn0cJOMng/mqdefault.jpg"
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
                videoUrl: "https://www.youtube.com/watch?v=k1Nn0cJOMng",
                imageUrl: "https://i.ytimg.com/vi/k1Nn0cJOMng/mqdefault.jpg"
            }
        ]
    },
    "dia2": {
        name: "REMO",
        exercises: [
            {
                order: 1,
                name: "Aducción de Piernas en Máquina",
                isWarmup: true,
                sets: 3,
                reps: "10",
                rest: "60s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/7TPklhKZRrc",
                imageUrl: "https://i.ytimg.com/vi/7TPklhKZRrc/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Remo en Máquina T Agarre Estrecho",
                sets: 3,
                reps: "8",
                rest: "120s",
                notes: "",
                videoUrl: "https://youtube.com/shorts/_XOaMY5NumY",
                imageUrl: "https://i.ytimg.com/vi/_XOaMY5NumY/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Dominadas Supinas",
                sets: 3,
                reps: "8, 8, 12",
                rest: "120s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/0TwqeC7fH8Y",
                imageUrl: "https://i.ytimg.com/vi/0TwqeC7fH8Y/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Remo en Banco con Pecho Apoyado con Mancuernas",
                sets: 2,
                reps: "10, 12",
                rest: "90s",
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=tlGl_Svh6Mk",
                imageUrl: "https://i.ytimg.com/vi/tlGl_Svh6Mk/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Curl Femoral Sentado en Máquina",
                sets: 2,
                reps: "8, 12",
                rest: "90s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/2fXW4I08ov4",
                imageUrl: "https://i.ytimg.com/vi/2fXW4I08ov4/mqdefault.jpg"
            },
            {
                order: 6,
                name: "Curl con Barra Z",
                sets: 2,
                reps: "8, 12",
                rest: "90s",
                notes: "",
                videoUrl: "https://youtu.be/4gYLTjNaTmw",
                imageUrl: "https://i.ytimg.com/vi/4gYLTjNaTmw/mqdefault.jpg"
            },
            {
                order: 7,
                name: "Elevaciones Laterales con Mancuernas",
                isSuperset: true,
                items: [
                    {
                        name: "Elevaciones Laterales con Mancuernas",
                        subOrder: 1,
                        sets: 2,
                        reps: "10",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/rhmW_fhB4cs",
                        imageUrl: "https://i.ytimg.com/vi/rhmW_fhB4cs/mqdefault.jpg"
                    },
                    {
                        name: "Curl Martillo con Cuerda en Polea Baja",
                        subOrder: 2,
                        sets: 3,
                        reps: "10",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/shorts/fSTgTQr1WCk",
                        imageUrl: "https://i.ytimg.com/vi/fSTgTQr1WCk/mqdefault.jpg"
                    }
                ],
                videoUrl: "https://youtu.be/rhmW_fhB4cs",
                imageUrl: "https://i.ytimg.com/vi/rhmW_fhB4cs/mqdefault.jpg"
            }
        ]
    },
    "dia3": {
        name: "PRESS BANCA",
        exercises: [
            {
                order: 1,
                name: "Aducción de Piernas en Máquina",
                isWarmup: true,
                sets: 3,
                reps: "10",
                rest: "60s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/7TPklhKZRrc",
                imageUrl: "https://i.ytimg.com/vi/7TPklhKZRrc/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Press Banca con Barra",
                sets: 3,
                reps: "8",
                rest: "120s",
                notes: "",
                videoUrl: "https://youtu.be/PKpsrFS2uac",
                imageUrl: "https://i.ytimg.com/vi/PKpsrFS2uac/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Prensa Inclinada en Máquina de Discos",
                sets: 3,
                reps: "8, 8, 12",
                rest: "120s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/je1QdJdvAN0",
                imageUrl: "https://i.ytimg.com/vi/je1QdJdvAN0/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Press Inclinado con Mancuernas",
                sets: 2,
                reps: "8, 12",
                rest: "90s",
                notes: "MUY inclinado (60º)",
                videoUrl: "https://youtu.be/ZE4M73kXB5A",
                imageUrl: "https://i.ytimg.com/vi/ZE4M73kXB5A/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Zancadas Caminando con Mancuernas/KTB",
                sets: 2,
                reps: "16, 20",
                rest: "90s",
                notes: "Zancadas cortas como en el vídeo para priorizar trabajo de cuádriceps. Talón del pie delantero a la altura de la rodilla trasera.",
                videoUrl: "https://youtu.be/7tRy9X0ibnk",
                imageUrl: "https://i.ytimg.com/vi/7tRy9X0ibnk/mqdefault.jpg"
            },
            {
                order: 6,
                name: "Elevaciones Laterales en Polea",
                sets: 2,
                reps: "12, 15",
                rest: "60s",
                notes: "",
                videoUrl: "https://youtu.be/UxII1sPTa9U",
                imageUrl: "https://i.ytimg.com/vi/UxII1sPTa9U/mqdefault.jpg"
            },
            {
                order: 7,
                name: "Cruces en Polea Alta",
                isSuperset: true,
                items: [
                    {
                        name: "Cruces en Polea Alta",
                        subOrder: 1,
                        sets: 2,
                        reps: "10",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/Ht9awbF2fBA",
                        imageUrl: "https://i.ytimg.com/vi/Ht9awbF2fBA/mqdefault.jpg"
                    },
                    {
                        name: "Extensión de Codo Trasnuca con Cuerda en Polea Baja",
                        subOrder: 2,
                        sets: 3,
                        reps: "10",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/watch?v=iSC42Fn4VT0",
                        imageUrl: "https://i.ytimg.com/vi/iSC42Fn4VT0/mqdefault.jpg"
                    }
                ],
                videoUrl: "https://youtu.be/Ht9awbF2fBA",
                imageUrl: "https://i.ytimg.com/vi/Ht9awbF2fBA/mqdefault.jpg"
            }
        ]
    },
    "dia4": {
        name: "PESO MUERTO",
        exercises: [
            {
                order: 1,
                name: "Gomas - Remo en Columna",
                isWarmup: true,
                sets: 3,
                reps: "10",
                rest: "60s",
                notes: "",
                videoUrl: "https://youtu.be/oaNDZ4glMKY",
                imageUrl: "https://i.ytimg.com/vi/oaNDZ4glMKY/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Peso Muerto Rumano con Barra",
                sets: 3,
                reps: "8",
                rest: "120s",
                notes: "",
                videoUrl: "https://youtu.be/R7FKam5GyNw",
                imageUrl: "https://i.ytimg.com/vi/R7FKam5GyNw/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Remo con Barra",
                sets: 3,
                reps: "8, 8, 12",
                rest: "120s",
                notes: "",
                videoUrl: "https://youtu.be/MjnZ52mZgT0",
                imageUrl: "https://i.ytimg.com/vi/MjnZ52mZgT0/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Jalón al Pecho Neutro en Polea",
                sets: 3,
                reps: "8, 10, 12",
                rest: "90s",
                notes: "",
                videoUrl: "https://youtu.be/5YzMH2KkMHc",
                imageUrl: "https://i.ytimg.com/vi/5YzMH2KkMHc/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Curl con Mancuernas Sentado en Banco Inclinado",
                sets: 2,
                reps: "8, 12",
                rest: "90s",
                notes: "",
                videoUrl: "https://youtu.be/S32a3nYiWko",
                imageUrl: "https://i.ytimg.com/vi/S32a3nYiWko/mqdefault.jpg"
            },
            {
                order: 6,
                name: "Pájaros en Polea",
                sets: 2,
                reps: "12, 15",
                rest: "60s",
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=F8bfnYgzIRs",
                imageUrl: "https://i.ytimg.com/vi/F8bfnYgzIRs/mqdefault.jpg"
            },
            {
                order: 7,
                name: "Face Pull en Polea Alta",
                isSuperset: true,
                items: [
                    {
                        name: "Face Pull en Polea Alta",
                        subOrder: 1,
                        sets: 2,
                        reps: "10",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/watch?v=tZN8KYDSCRo",
                        imageUrl: "https://i.ytimg.com/vi/tZN8KYDSCRo/mqdefault.jpg"
                    },
                    {
                        name: "Curl Araña con Mancuernas",
                        subOrder: 2,
                        sets: 2,
                        reps: "10",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/shorts/vll2f1bqDlA",
                        imageUrl: "https://i.ytimg.com/vi/vll2f1bqDlA/mqdefault.jpg"
                    }
                ],
                videoUrl: "https://www.youtube.com/watch?v=tZN8KYDSCRo",
                imageUrl: "https://i.ytimg.com/vi/tZN8KYDSCRo/mqdefault.jpg"
            }
        ]
    },
    "dia5": {
        name: "CORE Y BRAZOS",
        exercises: [
            {
                order: 1,
                name: "Pallof press en polea",
                sets: 3,
                reps: "12/lado",
                rest: "60s",
                notes: "Core anti-rotación; tronco neutro."
            },
            {
                order: 2,
                name: "Dead bug",
                sets: 3,
                reps: "10/lado",
                rest: "60s",
                notes: "Control lumbar y respiración."
            },
            {
                order: 3,
                name: "Curl con Barra Z",
                sets: 3,
                reps: "10, 12",
                rest: "75s",
                notes: "",
                videoUrl: "https://youtu.be/4gYLTjNaTmw",
                imageUrl: "https://i.ytimg.com/vi/4gYLTjNaTmw/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Extensión de Tríceps en Polea con Cuerda",
                sets: 3,
                reps: "10, 12",
                rest: "75s",
                notes: "",
                videoUrl: "https://youtube.com/shorts/Eqi6CSuPbUQ",
                imageUrl: "https://i.ytimg.com/vi/Eqi6CSuPbUQ/mqdefault.jpg"
            }
        ]
    }
};

const exerciseAlternatives = {};
