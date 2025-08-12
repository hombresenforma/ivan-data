// Contenido de app_datos.js

// =================================================================================
// DATOS DE LA RUTINA (3 DÍAS)
// =================================================================================
const workoutData = {
    "dia1": {
        name: "Torso Empuje",
        exercises: [
            {
                order: 1,
                name: "Press Banca Inclinado en Multipower",
                sets: 3,
                reps: "6, 6, 15-25",
                rest: "120s",
                notes: "Última serie CLUSTERS. Con el mismo peso d, haz series de 3 a 5 reps con 15-20seg de descanso. Hasta que no seas capaz de llegar a 3.",
                videoUrl: "https://youtu.be/3GS7EjN7KSk",
                imageUrl: "https://i.ytimg.com/vi/3GS7EjN7KSk/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Jalón al Pecho en Polea",
                sets: 3,
                reps: "10",
                rest: "90s",
                notes: "",
                videoUrl: "https://youtu.be/GYIhmy1P4vY",
                imageUrl: "https://i.ytimg.com/vi/GYIhmy1P4vY/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Press Militar Sentado con Mancuernas",
                sets: 3,
                reps: "10",
                rest: "90s",
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=_IMpMCr87Cg",
                imageUrl: "https://i.ytimg.com/vi/_IMpMCr87Cg/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Flexiones / Push Ups",
                sets: 3,
                reps: "100",
                rest: "90s",
                notes: "3 series AL FALLO. Anota las repeticiones. ",
                videoUrl: "https://www.youtube.com/watch?v=GFUw7S0wDxk",
                imageUrl: "https://i.ytimg.com/vi/GFUw7S0wDxk/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Circuito Metabólico",
                isSuperset: true,
                isEMOM: true,
                emomDetails: {
                    totalIntervals: 9,
                    workIntervalSeconds: 60
                },
                items: [
                    {
                        name: "Press Francés con Mancuernas",
                        subOrder: 1,
                        sets: 1,
                        reps: "12",
                        isEMOMItem: true,
                        videoUrl: "https://www.youtube.com/watch?v=vDwCEtv1KHA",
                        imageUrl: "https://i.ytimg.com/vi/vDwCEtv1KHA/mqdefault.jpg"
                    },
                    {
                        name: "Fondos en Banco",
                        subOrder: 2,
                        sets: 1,
                        reps: "15",
                        isEMOMItem: true,
                        videoUrl: "https://youtu.be/NSB_HrDwd6I",
                        imageUrl: "https://i.ytimg.com/vi/NSB_HrDwd6I/mqdefault.jpg"
                    },
                    {
                        name: "Muscle Clean-Jerk Unilat Alterno Mancuerna",
                        subOrder: 3,
                        sets: 1,
                        reps: "16",
                        isEMOMItem: true,
                        videoUrl: "https://www.youtube.com/watch?v=2sOV3aayUCI&t=2s",
                        imageUrl: "https://i.ytimg.com/vi/2sOV3aayUCI/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=vDwCEtv1KHA",
                imageUrl: "https://i.ytimg.com/vi/vDwCEtv1KHA/mqdefault.jpg"
            }
        ]
    },
    "dia2": {
        name: "Torso Tracción",
        exercises: [
            {
                order: 1,
                name: "Remo en Barra T",
                sets: 3,
                reps: "6, 6, 15-25",
                rest: "120s",
                notes: "Última serie CLUSTERS. Con el mismo peso d, haz series de 3 a 5 reps con 15-20seg de descanso. Hasta que no seas capaz de llegar a 3.",
                videoUrl: "https://www.youtube.com/watch?v=AgxCPp37waQ",
                imageUrl: "https://i.ytimg.com/vi/AgxCPp37waQ/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Press Banca con Mancuernas",
                sets: 3,
                reps: "10",
                rest: "90s",
                notes: "",
                videoUrl: "https://youtu.be/hXCJC2Apcdg",
                imageUrl: "https://i.ytimg.com/vi/hXCJC2Apcdg/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Dominadas Supinas / Chin Ups",
                sets: 3,
                reps: "10",
                rest: "90s",
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=dN5DqMhO18s",
                imageUrl: "https://i.ytimg.com/vi/dN5DqMhO18s/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Dominadas Australianas con Pies en Banco",
                sets: 3,
                reps: "100",
                rest: "90s",
                notes: "3 series AL FALLO. Anota las repeticiones. ",
                videoUrl: "https://youtu.be/WqoNa74DieE",
                imageUrl: "https://i.ytimg.com/vi/WqoNa74DieE/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Circuito Metabólico",
                isSuperset: true,
                isEMOM: true,
                emomDetails: {
                    totalIntervals: 9,
                    workIntervalSeconds: 60
                },
                items: [
                    {
                        name: "Curl Martillo con Mancuernas",
                        subOrder: 1,
                        sets: 1,
                        reps: "12",
                        isEMOMItem: true,
                        videoUrl: "https://youtu.be/fcFsPoJY9lg",
                        imageUrl: "https://i.ytimg.com/vi/fcFsPoJY9lg/mqdefault.jpg"
                    },
                    {
                        name: "Curl Concentrado con TRX / Anillas",
                        subOrder: 2,
                        sets: 1,
                        reps: "15",
                        isEMOMItem: true,
                        videoUrl: "https://www.youtube.com/watch?v=d-DyoyBtrTU",
                        imageUrl: "https://i.ytimg.com/vi/d-DyoyBtrTU/mqdefault.jpg"
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
                videoUrl: "https://youtu.be/fcFsPoJY9lg",
                imageUrl: "https://i.ytimg.com/vi/fcFsPoJY9lg/mqdefault.jpg"
            }
        ]
    },
    "dia3": {
        name: "Piernas",
        exercises: [
            {
                order: 1,
                name: "Aductor en Máquina",
                sets: 2,
                reps: "12-15",
                rest: "60s",
                notes: "2 series de activación-calentamiento.",
                videoUrl: "https://www.youtube.com/watch?v=CfTZfTILu3U",
                imageUrl: "https://i.ytimg.com/vi/CfTZfTILu3U/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Hack Squat / Prensa Hack",
                sets: 3,
                reps: "6, 6, 15-25",
                rest: "120s",
                notes: "Última serie CLUSTERS. Con el mismo peso d, haz series de 3 a 5 reps con 15-20seg de descanso. Hasta que no seas capaz de llegar a 3.",
                videoUrl: "https://www.youtube.com/watch?v=6teL-OyXuQs",
                imageUrl: "https://i.ytimg.com/vi/6teL-OyXuQs/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Sentadilla Trasera con Barra",
                sets: 3,
                reps: "10",
                rest: "90s",
                notes: "",
                videoUrl: "https://youtu.be/FK5XU_gaxAE",
                imageUrl: "https://i.ytimg.com/vi/FK5XU_gaxAE/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Extensión de Cuádriceps en Máquina",
                sets: 3,
                reps: "100",
                rest: "90s",
                notes: "3 series AL FALLO. Anota las repeticiones. ",
                videoUrl: "https://www.youtube.com/watch?v=k1Nn0cJOMng",
                imageUrl: "https://i.ytimg.com/vi/k1Nn0cJOMng/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Curl Femoral en Máquina",
                sets: 3,
                reps: "100",
                rest: "90s",
                notes: "3 series AL FALLO. Anota las repeticiones. ",
                videoUrl: "https://www.youtube.com/watch?v=Zhnhz1r_u-Y",
                imageUrl: "https://i.ytimg.com/vi/Zhnhz1r_u-Y/mqdefault.jpg"
            },
            {
                order: 6,
                name: "Circuito Metabólico",
                isSuperset: true,
                isEMOM: true,
                emomDetails: {
                    totalIntervals: 9,
                    workIntervalSeconds: 60
                },
                items: [
                    {
                        name: "Zancadas Caminando con Mancuernas/Kettlebells",
                        subOrder: 1,
                        sets: 1,
                        reps: "16",
                        isEMOMItem: true,
                        videoUrl: "https://youtu.be/7tRy9X0ibnk",
                        imageUrl: "https://i.ytimg.com/vi/7tRy9X0ibnk/mqdefault.jpg"
                    },
                    {
                        name: "Kettlebell - Swing con Sentadilla",
                        subOrder: 2,
                        sets: 1,
                        reps: "10",
                        isEMOMItem: true,
                        videoUrl: "https://youtube.com/shorts/MUJ2UiP5gjc",
                        imageUrl: "https://i.ytimg.com/vi/MUJ2UiP5gjc/mqdefault.jpg"
                    },
                    {
                        name: "Plancha - Normal",
                        subOrder: 3,
                        sets: 1,
                        reps: "30s",
                        isEMOMItem: true,
                        videoUrl: "https://youtu.be/DQ4wYExQRJo",
                        imageUrl: "https://i.ytimg.com/vi/DQ4wYExQRJo/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/7tRy9X0ibnk",
                imageUrl: "https://i.ytimg.com/vi/7tRy9X0ibnk/mqdefault.jpg"
            }
        ]
    }
};

const exerciseAlternatives = {
    "Press Banca Inclinado en Multipower": [
        { name: "Press Banca Inclinado con Barra", videoUrl: "https://www.youtube.com/watch?v=4tPP-4K5kMQ", imageUrl: "https://i.ytimg.com/vi/4tPP-4K5kMQ/mqdefault.jpg" }
    ],
    "Remo en Barra T": [
        { name: "Máquina de Remo (Gironda)", videoUrl: "https://www.youtube.com/watch?v=3wcaZqSfP0A", imageUrl: "https://i.ytimg.com/vi/3wcaZqSfP0A/mqdefault.jpg" }
    ],
    "Press Banca con Mancuernas": [
        { name: "Press Banca con Barra", videoUrl: "https://youtu.be/PKpsrFS2uac", imageUrl: "https://i.ytimg.com/vi/PKpsrFS2uac/mqdefault.jpg" }
    ],
    "Hack Squat / Prensa Hack": [
        { name: "Prensa Inclinada 45º", videoUrl: "https://www.youtube.com/watch?v=IqjbBRNqJps", imageUrl: "https://i.ytimg.com/vi/IqjbBRNqJps/mqdefault.jpg" }
    ],
    "Sentadilla Trasera con Barra": [
        { name: "Sentadilla Trasera en Multipower", videoUrl: "https://youtu.be/la-dqygoIuk", imageUrl: "https://i.ytimg.com/vi/la-dqygoIuk/mqdefault.jpg" }
    ]
};

console.log("Datos de rutina cargados desde el creador.");
// Export if using modules in the target app, or remove if it's a simple script include
// export { workoutData, exerciseAlternatives };
