// Titulo: Plan de Entrenamiento

// Contenido de app_datos.js

// =================================================================================
// DATOS DE LA RUTINA (4 DÍAS)
// =================================================================================
const workoutData = {
    "dia1": {
        name: "Tracción ",
        exercises: [
            {
                order: 1,
                name: "Curl Femoral Sentado en Máquina",
                sets: 2,
                reps: "10-12",
                rest: "90s",
                notes: "Excéntrica controlada, pausa en inicio y final.",
                videoUrl: "https://www.youtube.com/shorts/2fXW4I08ov4",
                imageUrl: "https://i.ytimg.com/vi/2fXW4I08ov4/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Peso Muerto Rumano con Barra",
                sets: 3,
                reps: "8-10",
                rest: "90s",
                notes: "Baja lo que te permita tu movilidad de cadera (Espalda completamente recta).",
                videoUrl: "https://youtu.be/R7FKam5GyNw",
                imageUrl: "https://i.ytimg.com/vi/R7FKam5GyNw/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Remo Unilateral Lateral en Landmine",
                setTechniques: {"3":"DROPSET"},
                sets: 3,
                reps: "10",
                rest: "90s",
                notes: "",
                videoUrl: "https://youtu.be/6uECO7vAmCc",
                imageUrl: "https://i.ytimg.com/vi/6uECO7vAmCc/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Curl Scott con Barra Z",
                sets: 3,
                reps: "8-10",
                rest: "90s",
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=-Rzppjmt6ag",
                imageUrl: "https://i.ytimg.com/vi/-Rzppjmt6ag/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Jalón al Pecho Neutro en Polea",
                sets: 2,
                reps: "8-10",
                rest: "90s",
                notes: "",
                videoUrl: "https://youtu.be/5YzMH2KkMHc",
                imageUrl: "https://i.ytimg.com/vi/5YzMH2KkMHc/mqdefault.jpg"
            },
            {
                order: 6,
                name: "Curl de Bíceps Apoyado en Banco con Mancuernas",
                isSuperset: true,
                items: [
                    {
                        name: "Curl de Bíceps Apoyado en Banco con Mancuernas",
                        subOrder: 1,
                        sets: 2,
                        reps: "8-10",
                        isSupersetStart: true,
                        videoUrl: "https://youtube.com/shorts/hQ3ojFx5soY",
                        imageUrl: "https://i.ytimg.com/vi/hQ3ojFx5soY/mqdefault.jpg"
                    },
                    {
                        name: "Elevaciones Laterales en Polea",
                        subOrder: 2,
                        sets: 2,
                        reps: "10-12",
                        rest: "90s",
                        videoUrl: "https://youtu.be/UxII1sPTa9U",
                        imageUrl: "https://i.ytimg.com/vi/UxII1sPTa9U/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtube.com/shorts/hQ3ojFx5soY",
                imageUrl: "https://i.ytimg.com/vi/hQ3ojFx5soY/mqdefault.jpg"
            },
            {
                order: 7,
                name: "EMOM en Polea",
                isSuperset: true,
                isEMOM: true,
                emomDetails: {
                    totalIntervals: 4,
                    workIntervalSeconds: 60
                },
                items: [
                    {
                        name: "Curl Martillo con Cuerda en Polea Baja",
                        subOrder: 1,
                        sets: 1,
                        reps: "10-12",
                        isEMOMItem: true,
                        videoUrl: "https://www.youtube.com/shorts/fSTgTQr1WCk",
                        imageUrl: "https://i.ytimg.com/vi/fSTgTQr1WCk/mqdefault.jpg"
                    },
                    {
                        name: "Face Pull en Polea Alta",
                        subOrder: 2,
                        sets: 1,
                        reps: "10-12",
                        isEMOMItem: true,
                        videoUrl: "https://www.youtube.com/watch?v=tZN8KYDSCRo",
                        imageUrl: "https://i.ytimg.com/vi/tZN8KYDSCRo/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/fSTgTQr1WCk",
                imageUrl: "https://i.ytimg.com/vi/fSTgTQr1WCk/mqdefault.jpg"
            }
        ]
    },
    "dia2": {
        name: "Empuje",
        exercises: [
            {
                order: 1,
                name: "Press Banca con Barra",
                setTechniques: {"3":"DROPSET"},
                sets: 3,
                reps: "8-10",
                rest: "120s",
                notes: "",
                videoUrl: "https://youtu.be/PKpsrFS2uac",
                imageUrl: "https://i.ytimg.com/vi/PKpsrFS2uac/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Sentadilla Búlgara con Mancuerna",
                sets: 3,
                reps: "8-10",
                rest: "90s",
                notes: "",
                videoUrl: "https://youtu.be/kA6bHiDdTO4",
                imageUrl: "https://i.ytimg.com/vi/kA6bHiDdTO4/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Press en Máquina inclinado",
                setTechniques: {"3":"DROPSET"},
                sets: 3,
                reps: "10",
                rest: "90s",
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=nna4gQD-v9Y",
                imageUrl: "https://i.ytimg.com/vi/nna4gQD-v9Y/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Fondos en Paralelas Lastrados",
                sets: 2,
                reps: "10-12",
                rest: "90s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/xsnhvnyl70I",
                imageUrl: "https://i.ytimg.com/vi/xsnhvnyl70I/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Extensión de Cuádriceps en Máquina",
                sets: 2,
                reps: "10-12",
                rest: "90s",
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=k1Nn0cJOMng",
                imageUrl: "https://i.ytimg.com/vi/k1Nn0cJOMng/mqdefault.jpg"
            },
            {
                order: 7,
                name: "Extensión de Codo Trasnuca con Cuerda en Polea Baja",
                sets: 3,
                reps: "10-12",
                rest: "60s",
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=iSC42Fn4VT0",
                imageUrl: "https://i.ytimg.com/vi/iSC42Fn4VT0/mqdefault.jpg"
            }
        ]
    },
    "dia3": {
        name: "Empuje PRENSA",
        exercises: [
            {
                order: 1,
                name: "Aducción de Piernas en Máquina",
                sets: 2,
                reps: "12-15",
                rest: "90s",
                notes: "Excéntrica controlada y pausa en cada punto.",
                videoUrl: "https://www.youtube.com/shorts/7TPklhKZRrc",
                imageUrl: "https://i.ytimg.com/vi/7TPklhKZRrc/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Prensa Inclinada en Máquina de Discos",
                sets: 3,
                reps: "8-10",
                rest: "90s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/je1QdJdvAN0",
                imageUrl: "https://i.ytimg.com/vi/je1QdJdvAN0/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Press Inclinado con Mancuernas",
                setTechniques: {"3":"DROPSET"},
                sets: 3,
                reps: "8-10",
                rest: "120s",
                notes: "",
                videoUrl: "https://youtu.be/ZE4M73kXB5A",
                imageUrl: "https://i.ytimg.com/vi/ZE4M73kXB5A/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Press en Máquina",
                setTechniques: {"3":"DROPSET"},
                sets: 3,
                reps: "10",
                rest: "90s",
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=QrnVDLSBdMo",
                imageUrl: "https://i.ytimg.com/vi/QrnVDLSBdMo/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Cruces en Polea Alta",
                sets: 2,
                reps: "10-12",
                rest: "90s",
                notes: "",
                videoUrl: "https://youtu.be/Ht9awbF2fBA",
                imageUrl: "https://i.ytimg.com/vi/Ht9awbF2fBA/mqdefault.jpg"
            },
            {
                order: 6,
                name: "Extensión de Cuádriceps en Máquina",
                sets: 2,
                reps: "10-12",
                rest: "90s",
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=k1Nn0cJOMng",
                imageUrl: "https://i.ytimg.com/vi/k1Nn0cJOMng/mqdefault.jpg"
            },
            {
                order: 7,
                name: "Press Francés con Barra Z en Banco Inclinado",
                sets: 3,
                reps: "10-12",
                rest: "60s",
                notes: "",
                videoUrl: "https://youtu.be/hFk6xzt1DWM",
                imageUrl: "https://i.ytimg.com/vi/hFk6xzt1DWM/mqdefault.jpg"
            },
            {
                order: 8,
                name: "EMOM",
                isSuperset: true,
                isEMOM: true,
                emomDetails: {
                    totalIntervals: 4,
                    workIntervalSeconds: 60
                },
                items: [
                    {
                        name: "Press Militar Unilat de Pie con Mancuerna/KTB",
                        subOrder: 1,
                        sets: 1,
                        reps: "8",
                        isEMOMItem: true,
                        videoUrl: "https://www.youtube.com/shorts/vIK0qkXP_f0",
                        imageUrl: "https://i.ytimg.com/vi/vIK0qkXP_f0/mqdefault.jpg"
                    },
                    {
                        name: "Extensión de Codo en Polea Alta",
                        subOrder: 2,
                        sets: 1,
                        reps: "",
                        isEMOMItem: true,
                        videoUrl: "https://www.youtube.com/watch?v=z7gqbcjkzU0",
                        imageUrl: "https://i.ytimg.com/vi/z7gqbcjkzU0/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/vIK0qkXP_f0",
                imageUrl: "https://i.ytimg.com/vi/vIK0qkXP_f0/mqdefault.jpg"
            }
        ]
    },
    "dia4": {
        name: "Tracción DOMINADAS",
        exercises: [
            {
                order: 1,
                name: "Dominadas con Peso Corporal",
                sets: 3,
                reps: "8-10",
                rest: "90s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/pb-14sP_R4M",
                imageUrl: "https://i.ytimg.com/vi/pb-14sP_R4M/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Remo Seal con Mancuernas",
                setTechniques: {"3":"DROPSET"},
                sets: 3,
                reps: "10",
                rest: "90s",
                notes: "Trata de despegar el pecho al final del movimiento",
                videoUrl: "https://www.youtube.com/shorts/6tLfn99dO8o",
                imageUrl: "https://i.ytimg.com/vi/6tLfn99dO8o/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Dead Curl con Barra",
                sets: 3,
                reps: "8-10",
                rest: "90s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/HWs4EYCI8iE",
                imageUrl: "https://i.ytimg.com/vi/HWs4EYCI8iE/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Hip Thrust con Barra (Explicado)",
                sets: 3,
                reps: "8-10",
                rest: "90s",
                notes: "Si haces zancadas, haz 8-10 POR PIERNA.",
                videoUrl: "https://www.youtube.com/shorts/eIZUNV9Xj7Y",
                imageUrl: "https://i.ytimg.com/vi/eIZUNV9Xj7Y/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Curl con Mancuernas Sentado en Banco Inclinado",
                sets: 2,
                reps: "8-10",
                rest: "90s",
                notes: "",
                videoUrl: "https://youtu.be/S32a3nYiWko",
                imageUrl: "https://i.ytimg.com/vi/S32a3nYiWko/mqdefault.jpg"
            },
            {
                order: 6,
                name: "EMOM MANCUERNAS",
                isSuperset: true,
                isEMOM: true,
                emomDetails: {
                    totalIntervals: 4,
                    workIntervalSeconds: 60
                },
                items: [
                    {
                        name: "Peso Muerto Rumano con Mancuernas",
                        subOrder: 1,
                        sets: 1,
                        reps: "10-12",
                        isEMOMItem: true,
                        videoUrl: "https://www.youtube.com/shorts/SMll4DOYvEs",
                        imageUrl: "https://i.ytimg.com/vi/SMll4DOYvEs/mqdefault.jpg"
                    },
                    {
                        name: "Elevaciones Laterales con Mancuernas",
                        subOrder: 2,
                        sets: 1,
                        reps: "10-12",
                        isEMOMItem: true,
                        videoUrl: "https://youtu.be/rhmW_fhB4cs",
                        imageUrl: "https://i.ytimg.com/vi/rhmW_fhB4cs/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/SMll4DOYvEs",
                imageUrl: "https://i.ytimg.com/vi/SMll4DOYvEs/mqdefault.jpg"
            }
        ]
    }
};

const exerciseAlternatives = {
    "Curl Femoral Sentado en Máquina": [
        { name: "Curl Femoral Tumbado en Máquina", videoUrl: "https://www.youtube.com/shorts/-VfGwgG23OM", imageUrl: "https://i.ytimg.com/vi/-VfGwgG23OM/mqdefault.jpg" }
    ],
    "Peso Muerto Rumano con Barra": [
        { name: "Peso Muerto Rumano con Mancuernas", videoUrl: "https://www.youtube.com/shorts/SMll4DOYvEs", imageUrl: "https://i.ytimg.com/vi/SMll4DOYvEs/mqdefault.jpg" }
    ],
    "Remo Unilateral Lateral en Landmine": [
        { name: "Remo Unilat con Mancuerna/KTB (Explicado)", videoUrl: "https://youtu.be/uH9Hg4nWOG8", imageUrl: "https://i.ytimg.com/vi/uH9Hg4nWOG8/mqdefault.jpg" }
    ],
    "Jalón al Pecho Neutro en Polea": [
        { name: "", videoUrl: "", imageUrl: "" }
    ],
    "Press Banca con Barra": [
        { name: "Press Banca Inclinado en Multipower", videoUrl: "https://youtu.be/3GS7EjN7KSk", imageUrl: "https://i.ytimg.com/vi/3GS7EjN7KSk/mqdefault.jpg" }
    ],
    "Sentadilla Búlgara con Mancuerna": [
        { name: "Sentadilla Trasera con Barra", videoUrl: "https://youtu.be/FK5XU_gaxAE", imageUrl: "https://i.ytimg.com/vi/FK5XU_gaxAE/mqdefault.jpg" }
    ],
    "Press en Máquina inclinado": [
        { name: "Press Inclinado con Mancuernas", videoUrl: "https://youtu.be/ZE4M73kXB5A", imageUrl: "https://i.ytimg.com/vi/ZE4M73kXB5A/mqdefault.jpg" }
    ],
    "Prensa Inclinada en Máquina de Discos": [
        { name: "Hack Squat / Prensa Hack", videoUrl: "https://www.youtube.com/watch?v=6teL-OyXuQs", imageUrl: "https://i.ytimg.com/vi/6teL-OyXuQs/mqdefault.jpg" }
    ],
    "Press Inclinado con Mancuernas": [
        { name: "Press en Máquina inclinado", videoUrl: "https://www.youtube.com/watch?v=nna4gQD-v9Y", imageUrl: "https://i.ytimg.com/vi/nna4gQD-v9Y/mqdefault.jpg" }
    ],
    "Press en Máquina": [
        { name: "Press Banca en Multipower", videoUrl: "https://youtu.be/w-5ovE5O5iU", imageUrl: "https://i.ytimg.com/vi/w-5ovE5O5iU/mqdefault.jpg" }
    ],
    "Dominadas con Peso Corporal": [
        { name: "Peso Muerto Rumano con Mancuernas", videoUrl: "https://www.youtube.com/shorts/SMll4DOYvEs", imageUrl: "https://i.ytimg.com/vi/SMll4DOYvEs/mqdefault.jpg" }
    ],
    "Remo Seal con Mancuernas": [
        { name: "Remo Unilat con Mancuerna/KTB (Explicado)", videoUrl: "https://youtu.be/uH9Hg4nWOG8", imageUrl: "https://i.ytimg.com/vi/uH9Hg4nWOG8/mqdefault.jpg" }
    ],
    "Dead Curl con Barra": [
        { name: "Curl con Barra Z", videoUrl: "https://youtu.be/4gYLTjNaTmw", imageUrl: "https://i.ytimg.com/vi/4gYLTjNaTmw/mqdefault.jpg" }
    ],
    "Hip Thrust con Barra (Explicado)": [
        { name: "Zancadas Caminando con Mancuernas/Kettlebells", videoUrl: "https://youtu.be/7tRy9X0ibnk", imageUrl: "https://i.ytimg.com/vi/7tRy9X0ibnk/mqdefault.jpg" }
    ],
    "Curl con Mancuernas Sentado en Banco Inclinado": [
        { name: "", videoUrl: "", imageUrl: "" }
    ]
};

console.log("Datos de rutina cargados desde el creador.");
