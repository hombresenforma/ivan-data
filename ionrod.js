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
                name: "Worm + Rotaciones de Tronco",
                isSuperset: true,
                items: [
                    {
                        name: "Worm + Rotaciones de Tronco",
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
                name: "Press Banca con Barra",
                sets: 3,
                reps: "8",
                rest: "90s",
                notes: "",
                videoUrl: "https://youtu.be/PKpsrFS2uac",
                imageUrl: "https://i.ytimg.com/vi/PKpsrFS2uac/mqdefault.jpg"
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
                        name: "Plancha - Lateral elevando Pierna",
                        subOrder: 2,
                        sets: 3,
                        reps: "20s",
                        notes: "Haz ambos lados.",
                        rest: "90s",
                        videoUrl: "https://youtu.be/-3PDE3ztwzU",
                        imageUrl: "https://i.ytimg.com/vi/-3PDE3ztwzU/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/5gakUsid-Lg",
                imageUrl: "https://i.ytimg.com/vi/5gakUsid-Lg/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Zancada Trasera Alterna con Mancuernas/KTB",
                isSuperset: true,
                items: [
                    {
                        name: "Zancada Trasera Alterna con Mancuernas/KTB",
                        subOrder: 1,
                        sets: 3,
                        reps: "20",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/watch?v=Kzv73cEkTq4",
                        imageUrl: "https://i.ytimg.com/vi/Kzv73cEkTq4/mqdefault.jpg"
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
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=Kzv73cEkTq4",
                imageUrl: "https://i.ytimg.com/vi/Kzv73cEkTq4/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Thruster con Mancuernas",
                isSuperset: true,
                items: [
                    {
                        name: "Thruster con Mancuernas",
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
                        videoUrl: "https://www.youtube.com/watch?v=L6F1ZKsrRGI",
                        imageUrl: "https://i.ytimg.com/vi/L6F1ZKsrRGI/mqdefault.jpg"
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
                videoUrl: "https://www.youtube.com/watch?v=L6F1ZKsrRGI",
                imageUrl: "https://i.ytimg.com/vi/L6F1ZKsrRGI/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Dominadas Supinas / Chin Ups",
                sets: 3,
                reps: "8",
                rest: "90s",
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=dN5DqMhO18s",
                imageUrl: "https://i.ytimg.com/vi/dN5DqMhO18s/mqdefault.jpg"
            },
            {
                order: 3,
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
                videoUrl: "https://youtu.be/FK5XU_gaxAE",
                imageUrl: "https://i.ytimg.com/vi/FK5XU_gaxAE/mqdefault.jpg"
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
                name: "Remo Horizontal en TRX",
                isSuperset: true,
                items: [
                    {
                        name: "Remo Horizontal en TRX",
                        subOrder: 1,
                        sets: 3,
                        reps: "10",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/watch?v=uTA2s5FuRUM",
                        imageUrl: "https://i.ytimg.com/vi/uTA2s5FuRUM/mqdefault.jpg"
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
                notes: "Mantén una inclinación paralela al suelo.",
                videoUrl: "https://www.youtube.com/watch?v=uTA2s5FuRUM",
                imageUrl: "https://i.ytimg.com/vi/uTA2s5FuRUM/mqdefault.jpg"
            }
        ]
    },
    "dia3": {
        name: "Fullbody Legs",
        exercises: [
            {
                order: 1,
                name: "Abducción de Glúteo Unilat en el Suelo",
                isSuperset: true,
                items: [
                    {
                        name: "Abducción de Glúteo Unilat en el Suelo",
                        subOrder: 1,
                        sets: 2,
                        reps: "8",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/TY5nZehvOhU?si=c3yMrpjxVKgMh7jG",
                        imageUrl: "https://i.ytimg.com/vi/TY5nZehvOhU/mqdefault.jpg"
                    },
                    {
                        name: "Zancada Trasera Alterna con Mancuernas/KTB",
                        subOrder: 2,
                        sets: 2,
                        reps: "16",
                        notes: "Poco peso (Es calentamiento)",
                        rest: "30s",
                        videoUrl: "https://www.youtube.com/watch?v=Kzv73cEkTq4",
                        imageUrl: "https://i.ytimg.com/vi/Kzv73cEkTq4/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/TY5nZehvOhU?si=c3yMrpjxVKgMh7jG",
                imageUrl: "https://i.ytimg.com/vi/TY5nZehvOhU/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Sentadilla Trasera con Landmine",
                sets: 3,
                reps: "8",
                rest: "90s",
                notes: "",
                videoUrl: "https://youtu.be/sMcrgyyvK-8",
                imageUrl: "https://i.ytimg.com/vi/sMcrgyyvK-8/mqdefault.jpg"
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
                        videoUrl: "https://youtu.be/INcd--4kK5k",
                        imageUrl: "https://i.ytimg.com/vi/INcd--4kK5k/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/ZE4M73kXB5A",
                imageUrl: "https://i.ytimg.com/vi/ZE4M73kXB5A/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Dominadas Australianas con Pies en Banco",
                isSuperset: true,
                items: [
                    {
                        name: "Dominadas Australianas con Pies en Banco",
                        subOrder: 1,
                        sets: 3,
                        reps: "10",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/WqoNa74DieE",
                        imageUrl: "https://i.ytimg.com/vi/WqoNa74DieE/mqdefault.jpg"
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
                videoUrl: "https://youtu.be/WqoNa74DieE",
                imageUrl: "https://i.ytimg.com/vi/WqoNa74DieE/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Zancadas Caminando con Mancuernas/Kettlebells",
                isSuperset: true,
                items: [
                    {
                        name: "Zancadas Caminando con Mancuernas/Kettlebells",
                        subOrder: 1,
                        sets: 3,
                        reps: "12",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/7tRy9X0ibnk",
                        imageUrl: "https://i.ytimg.com/vi/7tRy9X0ibnk/mqdefault.jpg"
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
                notes: "Zancadas cortas como en el vídeo para priorizar trabajo de cuádriceps. Talón del pie delantero a la altura de la rodilla trasera.",
                videoUrl: "https://youtu.be/7tRy9X0ibnk",
                imageUrl: "https://i.ytimg.com/vi/7tRy9X0ibnk/mqdefault.jpg"
            }
        ]
    }
};

const exerciseAlternatives = {
    "Press Banca con Barra": [
        { name: "Floor Press con Mancuernas", videoUrl: "https://www.youtube.com/shorts/Iu02N3s7zgQ", imageUrl: "https://i.ytimg.com/vi/Iu02N3s7zgQ/mqdefault.jpg" }
    ],
    "Remo Inclinado en Landmine": [
        { name: "Máquina de Remo (Gironda)", videoUrl: "https://www.youtube.com/watch?v=3wcaZqSfP0A", imageUrl: "https://i.ytimg.com/vi/3wcaZqSfP0A/mqdefault.jpg" }
    ],
    "Dominadas Supinas / Chin Ups": [
        { name: "Jalón al Pecho Neutro en Polea", videoUrl: "https://youtu.be/5YzMH2KkMHc", imageUrl: "https://i.ytimg.com/vi/5YzMH2KkMHc/mqdefault.jpg" }
    ],
    "Press Militar en Multipower": [
        { name: "Press Militar Sentado con Mancuernas", videoUrl: "https://www.youtube.com/watch?v=_IMpMCr87Cg", imageUrl: "https://i.ytimg.com/vi/_IMpMCr87Cg/mqdefault.jpg" }
    ],
    "Sentadilla Trasera con Landmine": [
        { name: "Hack Squat / Prensa Hack", videoUrl: "https://www.youtube.com/watch?v=6teL-OyXuQs", imageUrl: "https://i.ytimg.com/vi/6teL-OyXuQs/mqdefault.jpg" }
    ]
};

console.log("Datos de rutina cargados desde el creador.");
// Export if using modules in the target app, or remove if it's a simple script include
// export { workoutData, exerciseAlternatives };
