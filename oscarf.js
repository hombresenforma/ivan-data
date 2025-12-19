// Titulo: P9_4D_TPVARIADO_1

// Contenido de app_datos.js

// =================================================================================
// DATOS DE LA RUTINA (4 DÍAS)
// =================================================================================
const workoutData = {
    "dia1": {
        name: "TORSO (ESPALDA)",
        exercises: [
            {
                order: 1,
                name: "Remo Unilat con Mancuerna/KTB (Explicado)",
                sets: 4,
                reps: "15, 12, 10, 10",
                rest: "90s",
                notes: "",
                videoUrl: "https://youtu.be/uH9Hg4nWOG8",
                imageUrl: "https://i.ytimg.com/vi/uH9Hg4nWOG8/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Press Banca Inclinado en Multipower",
                sets: 3,
                reps: "15, 12, 10",
                rest: "90s",
                notes: "",
                videoUrl: "https://youtu.be/3GS7EjN7KSk",
                imageUrl: "https://i.ytimg.com/vi/3GS7EjN7KSk/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Dominadas Supinas",
                sets: 3,
                reps: "8",
                rest: "90s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/0TwqeC7fH8Y",
                imageUrl: "https://i.ytimg.com/vi/0TwqeC7fH8Y/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Remo Gironda Sentado en Polea",
                isSuperset: true,
                items: [
                    {
                        name: "Remo Gironda Sentado en Polea",
                        subOrder: 1,
                        sets: 3,
                        reps: "12",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/shorts/jFR7oYwgy5s",
                        imageUrl: "https://i.ytimg.com/vi/jFR7oYwgy5s/mqdefault.jpg"
                    },
                    {
                        name: "Remo Renegade Alterno con Mancuernas",
                        subOrder: 2,
                        sets: 3,
                        reps: "16",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/watch?v=FjwFzYXSK70",
                        imageUrl: "https://i.ytimg.com/vi/FjwFzYXSK70/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/jFR7oYwgy5s",
                imageUrl: "https://i.ytimg.com/vi/jFR7oYwgy5s/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Curl Martillo con Mancuernas",
                isSuperset: true,
                items: [
                    {
                        name: "Curl Martillo con Mancuernas",
                        subOrder: 1,
                        sets: 4,
                        reps: "10",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/fcFsPoJY9lg",
                        imageUrl: "https://i.ytimg.com/vi/fcFsPoJY9lg/mqdefault.jpg"
                    },
                    {
                        name: "Gorilla Row con Kettlebells/Mancuernas",
                        subOrder: 2,
                        sets: 4,
                        reps: "16",
                        videoUrl: "https://youtu.be/4hKPsdWsXl8",
                        imageUrl: "https://i.ytimg.com/vi/4hKPsdWsXl8/mqdefault.jpg"
                    },
                    {
                        name: "Thruster con Mancuernas",
                        subOrder: 3,
                        sets: 4,
                        reps: "12",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/watch?v=5mTjKFubavs",
                        imageUrl: "https://i.ytimg.com/vi/5mTjKFubavs/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/fcFsPoJY9lg",
                imageUrl: "https://i.ytimg.com/vi/fcFsPoJY9lg/mqdefault.jpg"
            }
        ]
    },
    "dia2": {
        name: "PIERNA PESO MUERTO",
        exercises: [
            {
                order: 1,
                name: "Peso Muerto Rumano con Barra",
                sets: 4,
                reps: "15, 12, 10, 10",
                rest: "90s",
                notes: "Baja lo que te permita tu movilidad de cadera (Espalda completamente recta).",
                videoUrl: "https://youtu.be/R7FKam5GyNw",
                imageUrl: "https://i.ytimg.com/vi/R7FKam5GyNw/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Prensa Inclinada 45º",
                sets: 3,
                reps: "15, 12, 10",
                rest: "90s",
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=IqjbBRNqJps",
                imageUrl: "https://i.ytimg.com/vi/IqjbBRNqJps/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Zancadas Caminando con Mancuernas/Kettlebells",
                sets: 3,
                reps: "10-12",
                rest: "60s",
                notes: "Zancadas cortas como en el vídeo para priorizar trabajo de cuádriceps. Talón del pie delantero a la altura de la rodilla trasera.",
                videoUrl: "https://youtu.be/7tRy9X0ibnk",
                imageUrl: "https://i.ytimg.com/vi/7tRy9X0ibnk/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Aducción de Piernas en Máquina",
                sets: 3,
                reps: "10-12",
                rest: "60s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/7TPklhKZRrc",
                imageUrl: "https://i.ytimg.com/vi/7TPklhKZRrc/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Curl Femoral Sentado en Máquina",
                isSuperset: true,
                items: [
                    {
                        name: "Curl Femoral Sentado en Máquina",
                        subOrder: 1,
                        sets: 4,
                        reps: "10",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/shorts/2fXW4I08ov4",
                        imageUrl: "https://i.ytimg.com/vi/2fXW4I08ov4/mqdefault.jpg"
                    },
                    {
                        name: "Cuerpo Libre - Cardio - Sentadilla con Salto en Step",
                        subOrder: 2,
                        sets: 4,
                        reps: "10",
                        videoUrl: "https://youtu.be/7ckSQy2BtWw",
                        imageUrl: "https://i.ytimg.com/vi/7ckSQy2BtWw/mqdefault.jpg"
                    },
                    {
                        name: "Hollow Abdominal Completo",
                        subOrder: 3,
                        sets: 4,
                        reps: "30s",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/shorts/S7nIyMHLO98",
                        imageUrl: "https://i.ytimg.com/vi/S7nIyMHLO98/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/2fXW4I08ov4",
                imageUrl: "https://i.ytimg.com/vi/2fXW4I08ov4/mqdefault.jpg"
            }
        ]
    },
    "dia3": {
        name: "TORSO (EMPUJE)",
        exercises: [
            {
                order: 1,
                name: "Press Banca con Mancuernas",
                sets: 4,
                reps: "15, 12, 10, 10",
                rest: "90s",
                notes: "",
                videoUrl: "https://youtu.be/hXCJC2Apcdg",
                imageUrl: "https://i.ytimg.com/vi/hXCJC2Apcdg/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Remo Diagonal Unilat en Polea Alta",
                sets: 3,
                reps: "15, 12, 10",
                rest: "90s",
                notes: "Última DROP-SET",
                videoUrl: "https://youtube.com/shorts/ikKQhcynKmg",
                imageUrl: "https://i.ytimg.com/vi/ikKQhcynKmg/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Fondos en Paralelas Lastrados",
                sets: 3,
                reps: "8",
                rest: "90s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/xsnhvnyl70I",
                imageUrl: "https://i.ytimg.com/vi/xsnhvnyl70I/mqdefault.jpg"
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
                        reps: "15",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/watch?v=p2OLvWOo9l0",
                        imageUrl: "https://i.ytimg.com/vi/p2OLvWOo9l0/mqdefault.jpg"
                    },
                    {
                        name: "Kettlebell - Swing Americano",
                        subOrder: 2,
                        sets: 3,
                        reps: "15",
                        rest: "90s",
                        videoUrl: "https://youtu.be/_kVSgpKXc_k",
                        imageUrl: "https://i.ytimg.com/vi/_kVSgpKXc_k/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=p2OLvWOo9l0",
                imageUrl: "https://i.ytimg.com/vi/p2OLvWOo9l0/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Press Francés con Barra Z en Banco Inclinado",
                isSuperset: true,
                items: [
                    {
                        name: "Press Francés con Barra Z en Banco Inclinado",
                        subOrder: 1,
                        sets: 4,
                        reps: "10",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/hFk6xzt1DWM",
                        imageUrl: "https://i.ytimg.com/vi/hFk6xzt1DWM/mqdefault.jpg"
                    },
                    {
                        name: "Flexiones + Mountain Climbers",
                        subOrder: 2,
                        sets: 4,
                        reps: "10",
                        videoUrl: "https://www.youtube.com/shorts/1wdJ5RSUCBE",
                        imageUrl: "https://i.ytimg.com/vi/1wdJ5RSUCBE/mqdefault.jpg"
                    },
                    {
                        name: "Sit Up Abdominal con Disco",
                        subOrder: 3,
                        sets: 4,
                        reps: "10",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/shorts/GHLO76YCyHE",
                        imageUrl: "https://i.ytimg.com/vi/GHLO76YCyHE/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/hFk6xzt1DWM",
                imageUrl: "https://i.ytimg.com/vi/hFk6xzt1DWM/mqdefault.jpg"
            }
        ]
    },
    "dia4": {
        name: "PIERNA SENTADILLA",
        exercises: [
            {
                order: 1,
                name: "Sentadilla Búlgara con Mancuerna",
                sets: 4,
                reps: "15, 12, 10, 10",
                rest: "90s",
                notes: "",
                videoUrl: "https://youtu.be/kA6bHiDdTO4",
                imageUrl: "https://i.ytimg.com/vi/kA6bHiDdTO4/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Sentadilla Trasera en Multipower",
                sets: 3,
                reps: "15, 12, 10",
                rest: "90s",
                notes: "",
                videoUrl: "https://youtu.be/la-dqygoIuk",
                imageUrl: "https://i.ytimg.com/vi/la-dqygoIuk/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Extensión de Cuádriceps en Máquina",
                sets: 3,
                reps: "10-12",
                rest: "60s",
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=k1Nn0cJOMng",
                imageUrl: "https://i.ytimg.com/vi/k1Nn0cJOMng/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Sentadilla Goblet con Pies Elevados",
                sets: 3,
                reps: "10-12",
                rest: "60s",
                notes: "",
                videoUrl: "https://youtu.be/E2n7V0o8B5A",
                imageUrl: "https://i.ytimg.com/vi/E2n7V0o8B5A/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Zancada Trasera Alterna con Mancuernas/KTB",
                isSuperset: true,
                items: [
                    {
                        name: "Zancada Trasera Alterna con Mancuernas/KTB",
                        subOrder: 1,
                        sets: 4,
                        reps: "16",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/watch?v=Kzv73cEkTq4",
                        imageUrl: "https://i.ytimg.com/vi/Kzv73cEkTq4/mqdefault.jpg"
                    },
                    {
                        name: "Kettlebell - Soft Swing",
                        subOrder: 2,
                        sets: 4,
                        reps: "15",
                        videoUrl: "https://youtube.com/shorts/-i4ReGBb26g",
                        imageUrl: "https://i.ytimg.com/vi/-i4ReGBb26g/mqdefault.jpg"
                    },
                    {
                        name: "Plancha - Avanzada",
                        subOrder: 3,
                        sets: 4,
                        reps: "30s",
                        rest: "90s",
                        videoUrl: "https://youtu.be/nH9AQFIJ1rY",
                        imageUrl: "https://i.ytimg.com/vi/nH9AQFIJ1rY/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=Kzv73cEkTq4",
                imageUrl: "https://i.ytimg.com/vi/Kzv73cEkTq4/mqdefault.jpg"
            }
        ]
    }
};

const exerciseAlternatives = {
    "Remo Unilat con Mancuerna/KTB (Explicado)": [
        { name: "Remo Unilateral Lateral en Landmine", videoUrl: "https://youtu.be/6uECO7vAmCc", imageUrl: "https://i.ytimg.com/vi/6uECO7vAmCc/mqdefault.jpg" }
    ],
    "Press Banca Inclinado en Multipower": [
        { name: "Press Banca Inclinado con Barra", videoUrl: "https://www.youtube.com/watch?v=4tPP-4K5kMQ", imageUrl: "https://i.ytimg.com/vi/4tPP-4K5kMQ/mqdefault.jpg" }
    ],
    "Dominadas Supinas": [
        { name: "Jalón al Pecho Supino en Polea", videoUrl: "https://youtu.be/rimdRzyIJkA", imageUrl: "https://i.ytimg.com/vi/rimdRzyIJkA/mqdefault.jpg" }
    ],
    "Remo Gironda Sentado en Polea": [
        { name: "Máquina de Remo (Gironda)", videoUrl: "https://www.youtube.com/watch?v=3wcaZqSfP0A", imageUrl: "https://i.ytimg.com/vi/3wcaZqSfP0A/mqdefault.jpg" }
    ],
    "Curl Martillo con Mancuernas": [
        { name: "Curl con Barra Z Agarre Estrecho", videoUrl: "https://youtu.be/NQZnaLU9kXs", imageUrl: "https://i.ytimg.com/vi/NQZnaLU9kXs/mqdefault.jpg" }
    ],
    "Peso Muerto Rumano con Barra": [
        { name: "Peso Muerto Rumano con Mancuernas", videoUrl: "https://www.youtube.com/shorts/SMll4DOYvEs", imageUrl: "https://i.ytimg.com/vi/SMll4DOYvEs/mqdefault.jpg" }
    ],
    "Prensa Inclinada 45º": [
        { name: "Sentadilla Jaca en Máquina", videoUrl: "https://youtube.com/shorts/P4iHoym5SxM", imageUrl: "https://i.ytimg.com/vi/P4iHoym5SxM/mqdefault.jpg" }
    ],
    "Curl Femoral Sentado en Máquina": [
        { name: "Curl Femoral Tumbado en Máquina", videoUrl: "https://www.youtube.com/shorts/-VfGwgG23OM", imageUrl: "https://i.ytimg.com/vi/-VfGwgG23OM/mqdefault.jpg" }
    ],
    "Press Banca con Mancuernas": [
        { name: "Press en Máquina", videoUrl: "https://www.youtube.com/watch?v=QrnVDLSBdMo", imageUrl: "https://i.ytimg.com/vi/QrnVDLSBdMo/mqdefault.jpg" }
    ],
    "Remo Diagonal Unilat en Polea Alta": [
        { name: "Jalón al Pecho Supino en Polea", videoUrl: "https://youtu.be/rimdRzyIJkA", imageUrl: "https://i.ytimg.com/vi/rimdRzyIJkA/mqdefault.jpg" }
    ],
    "Fondos en Paralelas Lastrados": [
        { name: "Cruces en Polea Alta", videoUrl: "https://youtu.be/Ht9awbF2fBA", imageUrl: "https://i.ytimg.com/vi/Ht9awbF2fBA/mqdefault.jpg" }
    ],
    "Press Militar Unilateral en Landmine": [
        { name: "Press Militar Unilat de Pie con Mancuerna/KTB", videoUrl: "https://www.youtube.com/shorts/vIK0qkXP_f0", imageUrl: "https://i.ytimg.com/vi/vIK0qkXP_f0/mqdefault.jpg" }
    ],
    "Press Francés con Barra Z en Banco Inclinado": [
        { name: "Press Francés con Mancuernas en Banco Inclinado", videoUrl: "https://youtu.be/L__Q6Jl9Ics", imageUrl: "https://i.ytimg.com/vi/L__Q6Jl9Ics/mqdefault.jpg" }
    ],
    "Sentadilla Búlgara con Mancuerna": [
        { name: "Sentadilla Jaca en Máquina", videoUrl: "https://youtube.com/shorts/P4iHoym5SxM", imageUrl: "https://i.ytimg.com/vi/P4iHoym5SxM/mqdefault.jpg" }
    ],
    "Sentadilla Trasera en Multipower": [
        { name: "Sentadilla Trasera con Barra", videoUrl: "https://youtu.be/FK5XU_gaxAE", imageUrl: "https://i.ytimg.com/vi/FK5XU_gaxAE/mqdefault.jpg" }
    ],
    "Zancada Trasera Alterna con Mancuernas/KTB": [
        { name: "Curl Femoral Sentado en Máquina", videoUrl: "https://www.youtube.com/shorts/2fXW4I08ov4", imageUrl: "https://i.ytimg.com/vi/2fXW4I08ov4/mqdefault.jpg" }
    ]
};

console.log("Datos de rutina cargados desde el creador.");
// Export if using modules in the target app, or remove if it's a simple script include
// export { workoutData, exerciseAlternatives };
