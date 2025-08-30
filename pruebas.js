// Contenido de app_datos.js

// =================================================================================
// DATOS DE LA RUTINA (3 DÍAS)
// =================================================================================
const workoutData = {
    "dia1": {
        name: "Fullbody Push",
        exercises: [
            {
                order: 1,
                name: "Worm + Rotación de Tronco",
                isSuperset: true,
                items: [
                    {
                        name: "Worm + Rotación de Tronco",
                        subOrder: 1,
                        sets: 2,
                        reps: "4",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/watch?v=A8MFPgYNoGs",
                        imageUrl: "https://i.ytimg.com/vi/A8MFPgYNoGs/mqdefault.jpg"
                    },
                    {
                        name: "Sentadilla con Salto",
                        subOrder: 2,
                        sets: 2,
                        reps: "10",
                        notes: "Puedes hacerlas sin salto si lo prefieres.",
                        rest: "30s",
                        videoUrl: "https://www.youtube.com/watch?v=1-Mum4hyIJ0",
                        imageUrl: "https://i.ytimg.com/vi/1-Mum4hyIJ0/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=A8MFPgYNoGs",
                imageUrl: "https://i.ytimg.com/vi/A8MFPgYNoGs/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Press Banca en Multipower",
                sets: 3,
                reps: "8",
                rest: "90s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/EDFhiF1mSKc",
                imageUrl: "https://i.ytimg.com/vi/EDFhiF1mSKc/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Remo Inclinado en Landmine",
                isSuperset: true,
                items: [
                    {
                        name: "Remo Inclinado en Landmine",
                        subOrder: 1,
                        sets: 3,
                        reps: "10",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/5gakUsid-Lg",
                        imageUrl: "https://i.ytimg.com/vi/5gakUsid-Lg/mqdefault.jpg"
                    },
                    {
                        name: "Plancha Lateral Dinámica sobre Antebrazo",
                        subOrder: 2,
                        sets: 3,
                        reps: "20s",
                        notes: "Haz ambos lados.",
                        rest: "90s",
                        videoUrl: "",
                        imageUrl: ""
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/5gakUsid-Lg",
                imageUrl: "https://i.ytimg.com/vi/5gakUsid-Lg/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Zancada Trasera Alterna con Mancuernas o KTB",
                isSuperset: true,
                items: [
                    {
                        name: "Zancada Trasera Alterna con Mancuernas o KTB",
                        subOrder: 1,
                        sets: 3,
                        reps: "20",
                        isSupersetStart: true,
                        videoUrl: "",
                        imageUrl: ""
                    },
                    {
                        name: "Flexiones / Push Ups",
                        subOrder: 2,
                        sets: 3,
                        reps: "10",
                        notes: "Puedes hacerlas de rodillas.",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/watch?v=GFUw7S0wDxk",
                        imageUrl: "https://i.ytimg.com/vi/GFUw7S0wDxk/mqdefault.jpg"
                    }
                ],
                notes: "10 por lado en las zancadas.",
                videoUrl: "",
                imageUrl: ""
            },
            {
                order: 5,
                name: "Thuster con Mancuerna",
                isSuperset: true,
                items: [
                    {
                        name: "Thuster con Mancuerna",
                        subOrder: 1,
                        sets: 3,
                        reps: "10",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/watch?v=5mTjKFubavs",
                        imageUrl: "https://i.ytimg.com/vi/5mTjKFubavs/mqdefault.jpg"
                    },
                    {
                        name: "Sentadilla Goblet con Mancuerna/Kettlebell",
                        subOrder: 2,
                        sets: 3,
                        reps: "12",
                        videoUrl: "https://youtu.be/xPVfWX_9ytk",
                        imageUrl: "https://i.ytimg.com/vi/xPVfWX_9ytk/mqdefault.jpg"
                    },
                    {
                        name: "Plancha - Normal",
                        subOrder: 3,
                        sets: 3,
                        reps: "30s",
                        rest: "90s",
                        videoUrl: "https://youtu.be/DQ4wYExQRJo",
                        imageUrl: "https://i.ytimg.com/vi/DQ4wYExQRJo/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=5mTjKFubavs",
                imageUrl: "https://i.ytimg.com/vi/5mTjKFubavs/mqdefault.jpg"
            }
        ]
    },
    "dia2": {
        name: "Fullbody Pull",
        exercises: [
            {
                order: 1,
                name: "Remo en TRX",
                isSuperset: true,
                items: [
                    {
                        name: "Remo en TRX",
                        subOrder: 1,
                        sets: 2,
                        reps: "8",
                        isSupersetStart: true,
                        videoUrl: "",
                        imageUrl: ""
                    },
                    {
                        name: "Funcional - Mountain Climber",
                        subOrder: 2,
                        sets: 2,
                        reps: "20",
                        rest: "30s",
                        videoUrl: "https://youtu.be/GZWmYzClS3s",
                        imageUrl: "https://i.ytimg.com/vi/GZWmYzClS3s/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "",
                imageUrl: ""
            },
            {
                order: 2,
                name: "Dominadas Australianas con Pies en el Suelo",
                sets: 3,
                reps: "8",
                rest: "90s",
                notes: "Intenta que la espalda esté lo más vertical posible (Sin avanzar la cadera).",
                videoUrl: "https://www.youtube.com/watch?v=-GFyrw9BJVk",
                imageUrl: "https://i.ytimg.com/vi/-GFyrw9BJVk/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Sentadilla Trasera en Multipower",
                isSuperset: true,
                items: [
                    {
                        name: "Sentadilla Trasera en Multipower",
                        subOrder: 1,
                        sets: 3,
                        reps: "10",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/la-dqygoIuk",
                        imageUrl: "https://i.ytimg.com/vi/la-dqygoIuk/mqdefault.jpg"
                    },
                    {
                        name: "Plancha - Lateral elevando Rodilla",
                        subOrder: 2,
                        sets: 3,
                        reps: "20s",
                        notes: "Haz ambos lados.",
                        rest: "90s",
                        videoUrl: "https://youtu.be/ROVRkBnD4zg",
                        imageUrl: "https://i.ytimg.com/vi/ROVRkBnD4zg/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/la-dqygoIuk",
                imageUrl: "https://i.ytimg.com/vi/la-dqygoIuk/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Press Militar en Multipower",
                isSuperset: true,
                items: [
                    {
                        name: "Press Militar en Multipower",
                        subOrder: 1,
                        sets: 3,
                        reps: "10",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/watch?v=iATqshmFPnI",
                        imageUrl: "https://i.ytimg.com/vi/iATqshmFPnI/mqdefault.jpg"
                    },
                    {
                        name: "Fondos en Banco",
                        subOrder: 2,
                        sets: 3,
                        reps: "12",
                        rest: "90s",
                        videoUrl: "https://youtu.be/NSB_HrDwd6I",
                        imageUrl: "https://i.ytimg.com/vi/NSB_HrDwd6I/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=iATqshmFPnI",
                imageUrl: "https://i.ytimg.com/vi/iATqshmFPnI/mqdefault.jpg"
            },
            {
                order: 5,
                name: "REMO Horizontal en TRX",
                isSuperset: true,
                items: [
                    {
                        name: "REMO Horizontal en TRX",
                        subOrder: 1,
                        sets: 3,
                        reps: "10",
                        isSupersetStart: true,
                        videoUrl: "",
                        imageUrl: ""
                    },
                    {
                        name: "Remo Renegade Alterno con Mancuernas",
                        subOrder: 2,
                        sets: 3,
                        reps: "16",
                        videoUrl: "https://www.youtube.com/watch?v=FjwFzYXSK70",
                        imageUrl: "https://i.ytimg.com/vi/FjwFzYXSK70/mqdefault.jpg"
                    },
                    {
                        name: "Hollow - Nivel 2",
                        subOrder: 3,
                        sets: 3,
                        reps: "30s",
                        rest: "90s",
                        videoUrl: "https://youtu.be/lFEg3UQYM3g",
                        imageUrl: "https://i.ytimg.com/vi/lFEg3UQYM3g/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "",
                imageUrl: ""
            }
        ]
    },
    "dia3": {
        name: "Fullbody Legs",
        exercises: [
            {
                order: 1,
                name: "Abducción de Glúteo Unilateral en el Suelo",
                isSuperset: true,
                items: [
                    {
                        name: "Abducción de Glúteo Unilateral en el Suelo",
                        subOrder: 1,
                        sets: 2,
                        reps: "8",
                        isSupersetStart: true,
                        videoUrl: "",
                        imageUrl: ""
                    },
                    {
                        name: "Zancada Trasera Alterna con Mancuernas o KTB",
                        subOrder: 2,
                        sets: 2,
                        reps: "16",
                        rest: "30s",
                        videoUrl: "",
                        imageUrl: ""
                    }
                ],
                notes: "",
                videoUrl: "",
                imageUrl: ""
            },
            {
                order: 2,
                name: "Prensa Inclinada 45º",
                sets: 3,
                reps: "8",
                rest: "90s",
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=IqjbBRNqJps",
                imageUrl: "https://i.ytimg.com/vi/IqjbBRNqJps/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Press Inclinado con Mancuernas",
                isSuperset: true,
                items: [
                    {
                        name: "Press Inclinado con Mancuernas",
                        subOrder: 1,
                        sets: 3,
                        reps: "10",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/ZE4M73kXB5A",
                        imageUrl: "https://i.ytimg.com/vi/ZE4M73kXB5A/mqdefault.jpg"
                    },
                    {
                        name: "Sit Up Unilateral con KTB",
                        subOrder: 2,
                        sets: 3,
                        reps: "5",
                        notes: "Puedes usar una mancuerna de poco peso si lo prefieres o el peso de la Kettlebell es demasiado elevado.",
                        rest: "90s",
                        videoUrl: "",
                        imageUrl: ""
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/ZE4M73kXB5A",
                imageUrl: "https://i.ytimg.com/vi/ZE4M73kXB5A/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Jalón al Pecho Supino en Polea",
                isSuperset: true,
                items: [
                    {
                        name: "Jalón al Pecho Supino en Polea",
                        subOrder: 1,
                        sets: 3,
                        reps: "10",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/rimdRzyIJkA",
                        imageUrl: "https://i.ytimg.com/vi/rimdRzyIJkA/mqdefault.jpg"
                    },
                    {
                        name: "Curl con Mancuernas de Pie",
                        subOrder: 2,
                        sets: 3,
                        reps: "12",
                        rest: "90s",
                        videoUrl: "https://youtu.be/8STuQuoDMR0",
                        imageUrl: "https://i.ytimg.com/vi/8STuQuoDMR0/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/rimdRzyIJkA",
                imageUrl: "https://i.ytimg.com/vi/rimdRzyIJkA/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Split Unilateral con Mancuernas",
                isSuperset: true,
                items: [
                    {
                        name: "Split Unilateral con Mancuernas",
                        subOrder: 1,
                        sets: 3,
                        reps: "10",
                        isSupersetStart: true,
                        videoUrl: "",
                        imageUrl: ""
                    },
                    {
                        name: "Worm",
                        subOrder: 2,
                        sets: 3,
                        reps: "5",
                        videoUrl: "https://www.youtube.com/watch?v=irBHRDg7ZHU",
                        imageUrl: "https://i.ytimg.com/vi/irBHRDg7ZHU/mqdefault.jpg"
                    },
                    {
                        name: "Funcional - Mountain Climber",
                        subOrder: 3,
                        sets: 3,
                        reps: "30",
                        rest: "90s",
                        videoUrl: "https://youtu.be/GZWmYzClS3s",
                        imageUrl: "https://i.ytimg.com/vi/GZWmYzClS3s/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "",
                imageUrl: ""
            }
        ]
    }
};

const exerciseAlternatives = {
    "Press Banca en Multipower": [
        { name: "Press Banca con Barra", videoUrl: "https://youtu.be/PKpsrFS2uac", imageUrl: "https://i.ytimg.com/vi/PKpsrFS2uac/mqdefault.jpg" }
    ],
    "Remo Inclinado en Landmine": [
        { name: "Máquina de Remo (Gironda)", videoUrl: "https://www.youtube.com/watch?v=3wcaZqSfP0A", imageUrl: "https://i.ytimg.com/vi/3wcaZqSfP0A/mqdefault.jpg" }
    ],
    "Dominadas Australianas con Pies en el Suelo": [
        { name: "Jalón al Pecho en Polea", videoUrl: "https://youtu.be/GYIhmy1P4vY", imageUrl: "https://i.ytimg.com/vi/GYIhmy1P4vY/mqdefault.jpg" }
    ],
    "Sentadilla Trasera en Multipower": [
        { name: "Sentadilla Trasera con Barra", videoUrl: "https://youtu.be/FK5XU_gaxAE", imageUrl: "https://i.ytimg.com/vi/FK5XU_gaxAE/mqdefault.jpg" }
    ],
    "Prensa Inclinada 45º": [
        { name: "Hack Squat / Prensa Hack", videoUrl: "https://www.youtube.com/watch?v=6teL-OyXuQs", imageUrl: "https://i.ytimg.com/vi/6teL-OyXuQs/mqdefault.jpg" }
    ]
};

console.log("Datos de rutina cargados desde el creador.");
// Export if using modules in the target app, or remove if it's a simple script include
// export { workoutData, exerciseAlternatives };
