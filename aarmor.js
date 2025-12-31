// Titulo: P5_3D_FUERZA

// Contenido de app_datos.js

// =================================================================================
// DATOS DE LA RUTINA (4 DÍAS)
// =================================================================================
const workoutData = {
    "dia1": {
        name: "Anterior (Press Militar)",
        exercises: [
            {
                order: 1,
                name: "Press Militar en Multipower",
                sets: 5,
                reps: "6-8",
                rest: "90s",
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=iATqshmFPnI",
                imageUrl: "https://i.ytimg.com/vi/iATqshmFPnI/mqdefault.jpg"
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
                name: "Press Militar Unilat de Pie con Mancuerna/KTB",
                isSuperset: true,
                items: [
                    {
                        name: "Press Militar Unilat de Pie con Mancuerna/KTB",
                        subOrder: 1,
                        sets: 3,
                        reps: "10-12",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/shorts/vIK0qkXP_f0",
                        imageUrl: "https://i.ytimg.com/vi/vIK0qkXP_f0/mqdefault.jpg"
                    },
                    {
                        name: "Flexiones Tempo 1:1",
                        subOrder: 2,
                        sets: 3,
                        reps: "10",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/shorts/-9Md7Htla-o",
                        imageUrl: "https://i.ytimg.com/vi/-9Md7Htla-o/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/vIK0qkXP_f0",
                imageUrl: "https://i.ytimg.com/vi/vIK0qkXP_f0/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Press Banca con Mancuernas",
                isSuperset: true,
                items: [
                    {
                        name: "Press Banca con Mancuernas",
                        subOrder: 1,
                        sets: 3,
                        reps: "10-12",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/hXCJC2Apcdg",
                        imageUrl: "https://i.ytimg.com/vi/hXCJC2Apcdg/mqdefault.jpg"
                    },
                    {
                        name: "Extensión de Codo en Polea Alta",
                        subOrder: 2,
                        sets: 3,
                        reps: "12-15",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/watch?v=z7gqbcjkzU0",
                        imageUrl: "https://i.ytimg.com/vi/z7gqbcjkzU0/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/hXCJC2Apcdg",
                imageUrl: "https://i.ytimg.com/vi/hXCJC2Apcdg/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Circuito",
                isSuperset: true,
                circuitDetails: {
                    totalRounds: 3,
                    restBetweenExercisesSeconds: 10,
                    restBetweenRoundsSeconds: 60
                },
                items: [
                    {
                        name: "Sentadilla con Salto",
                        subOrder: 1,
                        sets: 1,
                        reps: "45s",
                        isCircuitItem: true,
                        videoUrl: "https://www.youtube.com/watch?v=1-Mum4hyIJ0",
                        imageUrl: "https://i.ytimg.com/vi/1-Mum4hyIJ0/mqdefault.jpg"
                    },
                    {
                        name: "Worm",
                        subOrder: 2,
                        sets: 1,
                        reps: "45s",
                        isCircuitItem: true,
                        videoUrl: "https://www.youtube.com/watch?v=irBHRDg7ZHU",
                        imageUrl: "https://i.ytimg.com/vi/irBHRDg7ZHU/mqdefault.jpg"
                    },
                    {
                        name: "Flexiones + Mountain Climbers",
                        subOrder: 3,
                        sets: 1,
                        reps: "45s",
                        isCircuitItem: true,
                        videoUrl: "https://www.youtube.com/shorts/1wdJ5RSUCBE",
                        imageUrl: "https://i.ytimg.com/vi/1wdJ5RSUCBE/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=1-Mum4hyIJ0",
                imageUrl: "https://i.ytimg.com/vi/1-Mum4hyIJ0/mqdefault.jpg"
            }
        ]
    },
    "dia2": {
        name: "Posterior (Remo)",
        exercises: [
            {
                order: 1,
                name: "Máquina de Remo (Gironda)",
                sets: 5,
                reps: "6-8",
                rest: "90s",
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=3wcaZqSfP0A",
                imageUrl: "https://i.ytimg.com/vi/3wcaZqSfP0A/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Jalón al Pecho Neutro en Polea",
                sets: 3,
                reps: "15, 12, 10",
                rest: "90s",
                notes: "",
                videoUrl: "https://youtu.be/5YzMH2KkMHc",
                imageUrl: "https://i.ytimg.com/vi/5YzMH2KkMHc/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Curl Femoral en Máquina",
                isSuperset: true,
                items: [
                    {
                        name: "Curl Femoral en Máquina",
                        subOrder: 1,
                        sets: 3,
                        reps: "10-12",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/watch?v=Zhnhz1r_u-Y",
                        imageUrl: "https://i.ytimg.com/vi/Zhnhz1r_u-Y/mqdefault.jpg"
                    },
                    {
                        name: "Elevaciones Laterales con Mancuernas",
                        subOrder: 2,
                        sets: 3,
                        reps: "20",
                        rest: "90s",
                        videoUrl: "https://youtu.be/rhmW_fhB4cs",
                        imageUrl: "https://i.ytimg.com/vi/rhmW_fhB4cs/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=Zhnhz1r_u-Y",
                imageUrl: "https://i.ytimg.com/vi/Zhnhz1r_u-Y/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Curl con Barra Z",
                isSuperset: true,
                items: [
                    {
                        name: "Curl con Barra Z",
                        subOrder: 1,
                        sets: 3,
                        reps: "10-12",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/4gYLTjNaTmw",
                        imageUrl: "https://i.ytimg.com/vi/4gYLTjNaTmw/mqdefault.jpg"
                    },
                    {
                        name: "Remo Horizontal en TRX",
                        subOrder: 2,
                        sets: 3,
                        reps: "15",
                        rest: "60s",
                        videoUrl: "https://www.youtube.com/watch?v=uTA2s5FuRUM",
                        imageUrl: "https://i.ytimg.com/vi/uTA2s5FuRUM/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/4gYLTjNaTmw",
                imageUrl: "https://i.ytimg.com/vi/4gYLTjNaTmw/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Circuito",
                isSuperset: true,
                circuitDetails: {
                    totalRounds: 3,
                    restBetweenExercisesSeconds: 10,
                    restBetweenRoundsSeconds: 60
                },
                items: [
                    {
                        name: "Cuerpo Libre - Step Up Alterno en Step",
                        subOrder: 1,
                        sets: 1,
                        reps: "45s",
                        isCircuitItem: true,
                        videoUrl: "https://youtu.be/IwixiNKjpCA",
                        imageUrl: "https://i.ytimg.com/vi/IwixiNKjpCA/mqdefault.jpg"
                    },
                    {
                        name: "Remo Renegade Alterno con Mancuernas",
                        subOrder: 2,
                        sets: 1,
                        reps: "45s",
                        isCircuitItem: true,
                        videoUrl: "https://www.youtube.com/watch?v=FjwFzYXSK70",
                        imageUrl: "https://i.ytimg.com/vi/FjwFzYXSK70/mqdefault.jpg"
                    },
                    {
                        name: "Kettlebell - Soft Swing",
                        subOrder: 3,
                        sets: 1,
                        reps: "45s",
                        isCircuitItem: true,
                        videoUrl: "https://youtube.com/shorts/-i4ReGBb26g",
                        imageUrl: "https://i.ytimg.com/vi/-i4ReGBb26g/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/IwixiNKjpCA",
                imageUrl: "https://i.ytimg.com/vi/IwixiNKjpCA/mqdefault.jpg"
            }
        ]
    },
    "dia3": {
        name: "Completo",
        exercises: [
            {
                order: 1,
                name: "Dominadas Australianas con Pies en Banco",
                sets: 5,
                reps: "6-8",
                rest: "90s",
                notes: "",
                videoUrl: "https://youtu.be/WqoNa74DieE",
                imageUrl: "https://i.ytimg.com/vi/WqoNa74DieE/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Press Banca Inclinado en Multipower",
                sets: 5,
                reps: "6-8",
                rest: "90s",
                notes: "",
                videoUrl: "https://youtu.be/3GS7EjN7KSk",
                imageUrl: "https://i.ytimg.com/vi/3GS7EjN7KSk/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Hack Squat / Prensa Hack",
                isSuperset: true,
                items: [
                    {
                        name: "Hack Squat / Prensa Hack",
                        subOrder: 1,
                        sets: 3,
                        reps: "15, 12, 10",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/watch?v=6teL-OyXuQs",
                        imageUrl: "https://i.ytimg.com/vi/6teL-OyXuQs/mqdefault.jpg"
                    },
                    {
                        name: "Zancadas Caminando con Mancuernas/Kettlebells",
                        subOrder: 2,
                        sets: 3,
                        reps: "20, 18, 16",
                        rest: "90s",
                        videoUrl: "https://youtu.be/7tRy9X0ibnk",
                        imageUrl: "https://i.ytimg.com/vi/7tRy9X0ibnk/mqdefault.jpg"
                    }
                ],
                notes: "Hazla REVERSA (Foco Glúteo)",
                videoUrl: "https://www.youtube.com/watch?v=6teL-OyXuQs",
                imageUrl: "https://i.ytimg.com/vi/6teL-OyXuQs/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Remo Seal con Mancuernas",
                isSuperset: true,
                items: [
                    {
                        name: "Remo Seal con Mancuernas",
                        subOrder: 1,
                        sets: 3,
                        reps: "15, 12, 10",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/shorts/6tLfn99dO8o",
                        imageUrl: "https://i.ytimg.com/vi/6tLfn99dO8o/mqdefault.jpg"
                    },
                    {
                        name: "Curl de Bíceps Apoyado en Banco con Mancuernas",
                        subOrder: 2,
                        sets: 3,
                        reps: "12, 10, 8",
                        rest: "90s",
                        videoUrl: "https://youtube.com/shorts/hQ3ojFx5soY",
                        imageUrl: "https://i.ytimg.com/vi/hQ3ojFx5soY/mqdefault.jpg"
                    }
                ],
                notes: "Trata de despegar el pecho al final del movimiento",
                videoUrl: "https://www.youtube.com/shorts/6tLfn99dO8o",
                imageUrl: "https://i.ytimg.com/vi/6tLfn99dO8o/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Press Militar Sentado con Mancuernas",
                isSuperset: true,
                items: [
                    {
                        name: "Press Militar Sentado con Mancuernas",
                        subOrder: 1,
                        sets: 3,
                        reps: "15, 12, 10",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/watch?v=_IMpMCr87Cg",
                        imageUrl: "https://i.ytimg.com/vi/_IMpMCr87Cg/mqdefault.jpg"
                    },
                    {
                        name: "Press Francés con Mancuernas en Banco Inclinado",
                        subOrder: 2,
                        sets: 3,
                        reps: "12, 10, 8",
                        rest: "90s",
                        videoUrl: "https://youtu.be/L__Q6Jl9Ics",
                        imageUrl: "https://i.ytimg.com/vi/L__Q6Jl9Ics/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=_IMpMCr87Cg",
                imageUrl: "https://i.ytimg.com/vi/_IMpMCr87Cg/mqdefault.jpg"
            }
        ]
    },
    "dia4": {
        name: "Metabólico + Abdominales",
        exercises: [
            {
                order: 1,
                name: "EMOM 15'",
                isSuperset: true,
                isEMOM: true,
                emomDetails: {
                    totalIntervals: 5,
                    workIntervalSeconds: 60
                },
                items: [
                    {
                        name: "Devil Press + Thruster con Mancuernas",
                        subOrder: 1,
                        sets: 1,
                        reps: "6",
                        isEMOMItem: true,
                        videoUrl: "https://www.youtube.com/shorts/njS9V-rVeTY",
                        imageUrl: "https://i.ytimg.com/vi/njS9V-rVeTY/mqdefault.jpg"
                    },
                    {
                        name: "Zancada Trasera Alterna con Mancuernas/KTB",
                        subOrder: 2,
                        sets: 1,
                        reps: "16",
                        isEMOMItem: true,
                        videoUrl: "https://www.youtube.com/watch?v=Kzv73cEkTq4",
                        imageUrl: "https://i.ytimg.com/vi/Kzv73cEkTq4/mqdefault.jpg"
                    },
                    {
                        name: "Remo Renegade Alterno con Mancuernas",
                        subOrder: 3,
                        sets: 1,
                        reps: "16",
                        isEMOMItem: true,
                        videoUrl: "https://www.youtube.com/watch?v=FjwFzYXSK70",
                        imageUrl: "https://i.ytimg.com/vi/FjwFzYXSK70/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/njS9V-rVeTY",
                imageUrl: "https://i.ytimg.com/vi/njS9V-rVeTY/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Muscle Clean-Jerk Unilat Alterno con Mancuerna",
                isSuperset: true,
                items: [
                    {
                        name: "Muscle Clean-Jerk Unilat Alterno con Mancuerna",
                        subOrder: 1,
                        sets: 5,
                        reps: "24, 20, 16, 12, 8",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/shorts/2sOV3aayUCI",
                        imageUrl: "https://i.ytimg.com/vi/2sOV3aayUCI/mqdefault.jpg"
                    },
                    {
                        name: "Worm + Burpee",
                        subOrder: 2,
                        sets: 5,
                        reps: "12, 10, 8, 6, 4",
                        videoUrl: "https://www.youtube.com/watch?v=qTLp4wcAAtQ",
                        imageUrl: "https://i.ytimg.com/vi/qTLp4wcAAtQ/mqdefault.jpg"
                    },
                    {
                        name: "Sentadilla con Salto",
                        subOrder: 3,
                        sets: 5,
                        reps: "24, 20, 16, 12, 8",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/watch?v=1-Mum4hyIJ0",
                        imageUrl: "https://i.ytimg.com/vi/1-Mum4hyIJ0/mqdefault.jpg"
                    }
                ],
                notes: "Alterna entre brazos",
                videoUrl: "https://www.youtube.com/shorts/2sOV3aayUCI",
                imageUrl: "https://i.ytimg.com/vi/2sOV3aayUCI/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Crunch en Polea Alta",
                isSuperset: true,
                items: [
                    {
                        name: "Crunch en Polea Alta",
                        subOrder: 1,
                        sets: 4,
                        reps: "10",
                        isSupersetStart: true,
                        videoUrl: "https://youtube.com/shorts/H9QSO6XBRkA",
                        imageUrl: "https://i.ytimg.com/vi/H9QSO6XBRkA/mqdefault.jpg"
                    },
                    {
                        name: "Press Pallof Alterno con Rotación en Polea",
                        subOrder: 2,
                        sets: 4,
                        reps: "20",
                        videoUrl: "https://youtube.com/shorts/vqBP-GHoW5k",
                        imageUrl: "https://i.ytimg.com/vi/vqBP-GHoW5k/mqdefault.jpg"
                    },
                    {
                        name: "Hollow - Nivel 3",
                        subOrder: 3,
                        sets: 4,
                        reps: "30s",
                        rest: "90s",
                        videoUrl: "https://youtu.be/I6YISGE4Uvo",
                        imageUrl: "https://i.ytimg.com/vi/I6YISGE4Uvo/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtube.com/shorts/H9QSO6XBRkA",
                imageUrl: "https://i.ytimg.com/vi/H9QSO6XBRkA/mqdefault.jpg"
            }
        ]
    }
};

const exerciseAlternatives = {
    "Press Militar en Multipower": [
        { name: "Press Militar con Barra Sentado (Half Press)", videoUrl: "https://www.youtube.com/watch?v=q0C0BaHITAc", imageUrl: "https://i.ytimg.com/vi/q0C0BaHITAc/mqdefault.jpg" }
    ],
    "Máquina de Remo (Gironda)": [
        { name: "Remo Unilat con Mancuerna/KTB (Explicado)", videoUrl: "https://youtu.be/uH9Hg4nWOG8", imageUrl: "https://i.ytimg.com/vi/uH9Hg4nWOG8/mqdefault.jpg" }
    ],
    "Press Banca Inclinado en Multipower": [
        { name: "Press Banca Inclinado con Barra", videoUrl: "https://www.youtube.com/watch?v=4tPP-4K5kMQ", imageUrl: "https://i.ytimg.com/vi/4tPP-4K5kMQ/mqdefault.jpg" }
    ]
};

console.log("Datos de rutina cargados desde el creador.");
