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
                name: "Press Banca en Multipower",
                sets: 3,
                reps: "15, 12, 10",
                rest: "90s",
                notes: "Última DROP-SET",
                videoUrl: "https://youtu.be/w-5ovE5O5iU",
                imageUrl: "https://i.ytimg.com/vi/w-5ovE5O5iU/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Dominadas Supinas",
                sets: 3,
                reps: "12, 10, 8",
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
                        name: "Remo Renegade + Flexión con Mancuernas",
                        subOrder: 2,
                        sets: 3,
                        reps: "10",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/shorts/hLPJik1MaaY",
                        imageUrl: "https://i.ytimg.com/vi/hLPJik1MaaY/mqdefault.jpg"
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
                name: "",
                sets: 4,
                reps: "15, 12, 10, 10",
                rest: "90s",
                notes: "",
                videoUrl: "",
                imageUrl: ""
            },
            {
                order: 2,
                name: "Prensa Inclinada 45º",
                sets: 3,
                reps: "15, 12, 10",
                rest: "90s",
                notes: "Última DROP-SET",
                videoUrl: "https://www.youtube.com/watch?v=IqjbBRNqJps",
                imageUrl: "https://i.ytimg.com/vi/IqjbBRNqJps/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Zancadas Caminando con Mancuernas/Kettlebells",
                isSuperset: true,
                items: [
                    {
                        name: "Zancadas Caminando con Mancuernas/Kettlebells",
                        subOrder: 1,
                        sets: 3,
                        reps: "24",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/7tRy9X0ibnk",
                        imageUrl: "https://i.ytimg.com/vi/7tRy9X0ibnk/mqdefault.jpg"
                    },
                    {
                        name: "CARDIO - Bicicleta (Ritmo Fuerte)",
                        subOrder: 2,
                        sets: 3,
                        reps: "45s",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/watch?v=T4xdxoA4UzY",
                        imageUrl: "https://i.ytimg.com/vi/T4xdxoA4UzY/mqdefault.jpg"
                    }
                ],
                notes: "Zancadas cortas como en el vídeo para priorizar trabajo de cuádriceps. Talón del pie delantero a la altura de la rodilla trasera.",
                videoUrl: "https://youtu.be/7tRy9X0ibnk",
                imageUrl: "https://i.ytimg.com/vi/7tRy9X0ibnk/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Extensión de Cuádriceps en Máquina",
                isSuperset: true,
                items: [
                    {
                        name: "Extensión de Cuádriceps en Máquina",
                        subOrder: 1,
                        sets: 4,
                        reps: "10",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/watch?v=k1Nn0cJOMng",
                        imageUrl: "https://i.ytimg.com/vi/k1Nn0cJOMng/mqdefault.jpg"
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
                videoUrl: "https://www.youtube.com/watch?v=k1Nn0cJOMng",
                imageUrl: "https://i.ytimg.com/vi/k1Nn0cJOMng/mqdefault.jpg"
            }
        ]
    },
    "dia3": {
        name: "TORSO (EMPUJE)",
        exercises: [
            {
                order: 1,
                name: "Press Inclinado con Mancuernas",
                sets: 4,
                reps: "15, 12, 10, 10",
                rest: "90s",
                notes: "",
                videoUrl: "https://youtu.be/ZE4M73kXB5A",
                imageUrl: "https://i.ytimg.com/vi/ZE4M73kXB5A/mqdefault.jpg"
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
                name: "Cruces en Polea Alta",
                sets: 3,
                reps: "20, 15, 12",
                rest: "90s",
                notes: "",
                videoUrl: "https://youtu.be/Ht9awbF2fBA",
                imageUrl: "https://i.ytimg.com/vi/Ht9awbF2fBA/mqdefault.jpg"
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
                name: "Hip Thrust con Barra",
                sets: 3,
                reps: "15, 12, 10",
                rest: "90s",
                notes: "Última DROP-SET",
                videoUrl: "https://youtu.be/sbl1qYdkzUc",
                imageUrl: "https://i.ytimg.com/vi/sbl1qYdkzUc/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Sentadilla Goblet con Pies Elevados",
                isSuperset: true,
                items: [
                    {
                        name: "Sentadilla Goblet con Pies Elevados",
                        subOrder: 1,
                        sets: 3,
                        reps: "15",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/E2n7V0o8B5A",
                        imageUrl: "https://i.ytimg.com/vi/E2n7V0o8B5A/mqdefault.jpg"
                    },
                    {
                        name: "CARDIO - Bicicleta (Ritmo Fuerte)",
                        subOrder: 2,
                        sets: 3,
                        reps: "45s",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/watch?v=T4xdxoA4UzY",
                        imageUrl: "https://i.ytimg.com/vi/T4xdxoA4UzY/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/E2n7V0o8B5A",
                imageUrl: "https://i.ytimg.com/vi/E2n7V0o8B5A/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Curl Femoral en Máquina",
                isSuperset: true,
                items: [
                    {
                        name: "Curl Femoral en Máquina",
                        subOrder: 1,
                        sets: 4,
                        reps: "10",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/watch?v=Zhnhz1r_u-Y",
                        imageUrl: "https://i.ytimg.com/vi/Zhnhz1r_u-Y/mqdefault.jpg"
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
                videoUrl: "https://www.youtube.com/watch?v=Zhnhz1r_u-Y",
                imageUrl: "https://i.ytimg.com/vi/Zhnhz1r_u-Y/mqdefault.jpg"
            }
        ]
    }
};

const exerciseAlternatives = {
    "Remo Unilat con Mancuerna/KTB (Explicado)": [
        { name: "Remo Unilateral Lateral en Landmine", videoUrl: "https://youtu.be/6uECO7vAmCc", imageUrl: "https://i.ytimg.com/vi/6uECO7vAmCc/mqdefault.jpg" }
    ],
    "Press Banca en Multipower": [
        { name: "Press Banca con Barra", videoUrl: "https://youtu.be/PKpsrFS2uac", imageUrl: "https://i.ytimg.com/vi/PKpsrFS2uac/mqdefault.jpg" }
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
    "Prensa Inclinada 45º": [
        { name: "Sentadilla Trasera en Multipower", videoUrl: "https://youtu.be/la-dqygoIuk", imageUrl: "https://i.ytimg.com/vi/la-dqygoIuk/mqdefault.jpg" }
    ],
    "CARDIO - Bicicleta (Ritmo Fuerte)": [
        { name: "CARDIO - Correr (Sprint)", videoUrl: "https://youtu.be/KKvRtNn904g", imageUrl: "https://i.ytimg.com/vi/KKvRtNn904g/mqdefault.jpg" }
    ],
    "Press Inclinado con Mancuernas": [
        { name: "Press Banca Inclinado en Multipower", videoUrl: "https://youtu.be/3GS7EjN7KSk", imageUrl: "https://i.ytimg.com/vi/3GS7EjN7KSk/mqdefault.jpg" }
    ],
    "Remo Diagonal Unilat en Polea Alta": [
        { name: "Jalón al Pecho Supino en Polea", videoUrl: "https://youtu.be/rimdRzyIJkA", imageUrl: "https://i.ytimg.com/vi/rimdRzyIJkA/mqdefault.jpg" }
    ],
    "Cruces en Polea Alta": [
        { name: "Aperturas de Pecho en TRX+Banda", videoUrl: "https://www.youtube.com/shorts/IKej1zRzR6M", imageUrl: "https://i.ytimg.com/vi/IKej1zRzR6M/mqdefault.jpg" }
    ],
    "Press Militar Unilateral en Landmine": [
        { name: "Press Militar Sentado con Mancuernas (Explicado)", videoUrl: "https://www.youtube.com/shorts/2ZkYyh4ic0o", imageUrl: "https://i.ytimg.com/vi/2ZkYyh4ic0o/mqdefault.jpg" }
    ],
    "Press Francés con Barra Z en Banco Inclinado": [
        { name: "Press Francés con Mancuernas en Banco Inclinado", videoUrl: "https://youtu.be/L__Q6Jl9Ics", imageUrl: "https://i.ytimg.com/vi/L__Q6Jl9Ics/mqdefault.jpg" }
    ],
    "Sentadilla Búlgara con Mancuerna": [
        { name: "Sentadilla Jaca en Máquina", videoUrl: "https://youtube.com/shorts/P4iHoym5SxM", imageUrl: "https://i.ytimg.com/vi/P4iHoym5SxM/mqdefault.jpg" }
    ],
    "Hip Thrust con Barra": [
        { name: "Zancada Trasera Alterna con Mancuernas/KTB", videoUrl: "https://www.youtube.com/watch?v=Kzv73cEkTq4", imageUrl: "https://i.ytimg.com/vi/Kzv73cEkTq4/mqdefault.jpg" }
    ],
    "Sentadilla Goblet con Pies Elevados": [
        { name: "Sentadilla Frontal con Mancuernas/Kettlebells", videoUrl: "https://youtu.be/lfb6neUpfP8", imageUrl: "https://i.ytimg.com/vi/lfb6neUpfP8/mqdefault.jpg" }
    ],
    "Curl Femoral en Máquina": [
        { name: "Curl Femoral Sentado en Máquina", videoUrl: "https://www.youtube.com/shorts/2fXW4I08ov4", imageUrl: "https://i.ytimg.com/vi/2fXW4I08ov4/mqdefault.jpg" }
    ]
};

console.log("Datos de rutina cargados desde el creador.");
// Export if using modules in the target app, or remove if it's a simple script include
// export { workoutData, exerciseAlternatives };
