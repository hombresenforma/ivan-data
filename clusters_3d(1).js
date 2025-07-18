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
                videoUrl: "https://youtu.be/3GS7EjN7KSk"
            },
            {
                order: 2,
                name: "Jalón al Pecho Unilateral con Polea",
                sets: 3,
                reps: "10",
                rest: "90s",
                notes: "",
                videoUrl: "https://youtu.be/fxMPLrCpzeA"
            },
            {
                order: 3,
                name: "Press Militar Sentado con Mancuernas",
                sets: 3,
                reps: "10",
                rest: "90s",
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=_IMpMCr87Cg"
            },
            {
                order: 4,
                name: "Flexiones / Push Ups",
                sets: 3,
                reps: "100",
                rest: "90s",
                notes: "3 series AL FALLO. Anota el número de repeticiones.",
                videoUrl: "https://www.youtube.com/watch?v=GFUw7S0wDxk"
            },
            {
                order: 5,
                name: "EMOM Final",
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
                        videoUrl: "https://www.youtube.com/watch?v=vDwCEtv1KHA"
                    },
                    {
                        name: "Fondos en Banco",
                        subOrder: 2,
                        sets: 1,
                        reps: "15",
                        isEMOMItem: true,
                        videoUrl: "https://youtu.be/NSB_HrDwd6I"
                    },
                    {
                        name: "Muscle Clean-Jerk Unilat Alterno Mancuerna",
                        subOrder: 3,
                        sets: 1,
                        reps: "16",
                        isEMOMItem: true,
                        videoUrl: "https://www.youtube.com/watch?v=2sOV3aayUCI&t=2s"
                    }
                ],
                notes: "Completa las repeticiones dentro del tiempo marcado y descansa el tiempo que te sobre. ",
                videoUrl: "https://www.youtube.com/watch?v=vDwCEtv1KHA"
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
                videoUrl: "https://www.youtube.com/watch?v=AgxCPp37waQ"
            },
            {
                order: 2,
                name: "Press Banca con Mancuernas",
                sets: 3,
                reps: "10",
                rest: "90s",
                notes: "",
                videoUrl: "https://youtu.be/hXCJC2Apcdg"
            },
            {
                order: 3,
                name: "Dominadas Supinas / Chin Ups",
                sets: 3,
                reps: "10",
                rest: "90s",
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=dN5DqMhO18s"
            },
            {
                order: 4,
                name: "Dominadas Australianas con Pies en el Suelo",
                sets: 3,
                reps: "100",
                rest: "90s",
                notes: "3 series AL FALLO. Anota el número de repeticiones.",
                videoUrl: "https://www.youtube.com/watch?v=-GFyrw9BJVk"
            },
            {
                order: 5,
                name: "EMOM Final",
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
                        videoUrl: "https://youtu.be/fcFsPoJY9lg"
                    },
                    {
                        name: "Curl Concentrado con TRX / Anillas",
                        subOrder: 2,
                        sets: 1,
                        reps: "15",
                        isEMOMItem: true,
                        videoUrl: "https://www.youtube.com/watch?v=d-DyoyBtrTU"
                    },
                    {
                        name: "Remo Renegade Alterno con Mancuernas",
                        subOrder: 3,
                        sets: 1,
                        reps: "16",
                        isEMOMItem: true,
                        videoUrl: "https://www.youtube.com/watch?v=FjwFzYXSK70"
                    }
                ],
                notes: "Completa las repeticiones dentro del tiempo marcado y descansa el tiempo que te sobre. ",
                videoUrl: "https://youtu.be/fcFsPoJY9lg"
            }
        ]
    },
    "dia3": {
        name: "Pierna Completa",
        exercises: [
            {
                order: 1,
                name: "Aductor en Máquina",
                sets: 2,
                reps: "12-15",
                rest: "60s",
                notes: "2 series de activación para las piernas.",
                videoUrl: "https://www.youtube.com/watch?v=CfTZfTILu3U"
            },
            {
                order: 2,
                name: "Hack Squat / Prensa Hack",
                sets: 3,
                reps: "6, 6, 15-25",
                rest: "120s",
                notes: "Última serie CLUSTERS. Con el mismo peso d, haz series de 3 a 5 reps con 15-20seg de descanso. Hasta que no seas capaz de llegar a 3.",
                videoUrl: "https://www.youtube.com/watch?v=6teL-OyXuQs"
            },
            {
                order: 3,
                name: "Sentadilla Trasera con Barra",
                sets: 3,
                reps: "10",
                rest: "90s",
                notes: "",
                videoUrl: "https://youtu.be/FK5XU_gaxAE"
            },
            {
                order: 4,
                name: "Extensión de Cuádriceps en Máquina",
                sets: 3,
                reps: "100",
                rest: "90s",
                notes: "3 series AL FALLO (peso aprox para 12 reps) Anota el número de repeticiones.",
                videoUrl: "https://www.youtube.com/watch?v=k1Nn0cJOMng"
            },
            {
                order: 5,
                name: "Curl Femoral en Máquina",
                sets: 3,
                reps: "100",
                rest: "90s",
                notes: "3 series AL FALLO (peso aprox para 12 reps) Anota el número de repeticiones.",
                videoUrl: "https://www.youtube.com/watch?v=Zhnhz1r_u-Y"
            },
            {
                order: 6,
                name: "EMOM Final",
                isSuperset: true,
                isEMOM: true,
                emomDetails: {
                    totalIntervals: 6,
                    workIntervalSeconds: 60
                },
                items: [
                    {
                        name: "Zancadas Caminando con Mancuernas/Kettlebells",
                        subOrder: 1,
                        sets: 1,
                        reps: "16",
                        isEMOMItem: true,
                        videoUrl: "https://youtu.be/7tRy9X0ibnk"
                    },
                    {
                        name: "Kettlebell - Swing con Sentadilla",
                        subOrder: 2,
                        sets: 1,
                        reps: "8",
                        isEMOMItem: true,
                        videoUrl: "https://youtube.com/shorts/MUJ2UiP5gjc"
                    },
                    {
                        name: "Plancha - Normal",
                        subOrder: 3,
                        sets: 1,
                        reps: "30s",
                        isEMOMItem: true,
                        videoUrl: "https://youtu.be/DQ4wYExQRJo"
                    }
                ],
                notes: "Completa las repeticiones dentro del tiempo marcado y descansa el tiempo que te sobre. ",
                videoUrl: "https://youtu.be/7tRy9X0ibnk"
            }
        ]
    }
};

const exerciseAlternatives = {
    "Press Banca Inclinado en Multipower": [
        { name: "Press Banca Inclinado con Barra", videoUrl: "https://www.youtube.com/watch?v=4tPP-4K5kMQ" }
    ],
    "Jalón al Pecho Unilateral con Polea": [
        { name: "Jalón al Pecho Neutro en Polea", videoUrl: "https://youtu.be/5YzMH2KkMHc" }
    ],
    "Remo en Barra T": [
        { name: "Máquina de Remo (Gironda)", videoUrl: "https://www.youtube.com/watch?v=3wcaZqSfP0A" }
    ],
    "Press Banca con Mancuernas": [
        { name: "Press Banca con Barra", videoUrl: "https://youtu.be/PKpsrFS2uac" }
    ],
    "Dominadas Supinas / Chin Ups": [
        { name: "Jalón al Pecho Supino en Polea", videoUrl: "https://youtu.be/rimdRzyIJkA" }
    ],
    "Hack Squat / Prensa Hack": [
        { name: "Prensa Inclinada 45º", videoUrl: "https://www.youtube.com/watch?v=IqjbBRNqJps" }
    ],
    "Sentadilla Trasera con Barra": [
        { name: "Sentadilla Trasera en Multipower", videoUrl: "https://youtu.be/la-dqygoIuk" }
    ]
};

console.log("Datos de rutina cargados desde el creador.");
// Export if using modules in the target app, or remove if it's a simple script include
// export { workoutData, exerciseAlternatives };
