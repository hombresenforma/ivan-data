// Contenido de app_datos.js

// =================================================================================
// DATOS DE LA RUTINA (4 DÍAS)
// =================================================================================
const workoutData = {
    "dia1": {
        name: "Torso Completo",
        exercises: [
            {
                order: 1,
                name: "Press Militar con Barra de Pie",
                sets: 4,
                reps: "8, 8, 8, 12",
                rest: "120s",
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=idnuMZx6mS0",
                imageUrl: "https://i.ytimg.com/vi/idnuMZx6mS0/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Dominadas / Pull Ups Supinación (Chin Up)",
                sets: 4,
                reps: "8, 8, 8, 12",
                rest: "120s",
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=dN5DqMhO18s",
                imageUrl: "https://i.ytimg.com/vi/dN5DqMhO18s/mqdefault.jpg"
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
                        reps: "12-15",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/ZE4M73kXB5A",
                        imageUrl: "https://i.ytimg.com/vi/ZE4M73kXB5A/mqdefault.jpg"
                    },
                    {
                        name: "Remo Seal con Mancuernas",
                        subOrder: 2,
                        sets: 3,
                        reps: "12-15",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/shorts/6tLfn99dO8o",
                        imageUrl: "https://i.ytimg.com/vi/6tLfn99dO8o/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/ZE4M73kXB5A",
                imageUrl: "https://i.ytimg.com/vi/ZE4M73kXB5A/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Fondos en Paralelas para Pecho",
                isSuperset: true,
                items: [
                    {
                        name: "Fondos en Paralelas para Pecho",
                        subOrder: 1,
                        sets: 3,
                        reps: "10",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/W9TfhUAvteE",
                        imageUrl: "https://i.ytimg.com/vi/W9TfhUAvteE/mqdefault.jpg"
                    },
                    {
                        name: "Curl con Barra Z",
                        subOrder: 2,
                        sets: 3,
                        reps: "10",
                        rest: "90s",
                        videoUrl: "https://youtu.be/4gYLTjNaTmw",
                        imageUrl: "https://i.ytimg.com/vi/4gYLTjNaTmw/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/W9TfhUAvteE",
                imageUrl: "https://i.ytimg.com/vi/W9TfhUAvteE/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Circuito Metabólico",
                isSuperset: true,
                isEMOM: true,
                emomDetails: {
                    totalIntervals: 10,
                    workIntervalSeconds: 60
                },
                items: [
                    {
                        name: "Kettlebell - Clean Alterno",
                        subOrder: 1,
                        sets: 1,
                        reps: "12",
                        isEMOMItem: true,
                        videoUrl: "https://youtu.be/xBOoNSv9LlY",
                        imageUrl: "https://i.ytimg.com/vi/xBOoNSv9LlY/mqdefault.jpg"
                    },
                    {
                        name: "Remo en TRX / Anillas",
                        subOrder: 2,
                        sets: 1,
                        reps: "20",
                        isEMOMItem: true,
                        videoUrl: "https://www.youtube.com/watch?v=ZVM4-F0ZF0w",
                        imageUrl: "https://i.ytimg.com/vi/ZVM4-F0ZF0w/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/xBOoNSv9LlY",
                imageUrl: "https://i.ytimg.com/vi/xBOoNSv9LlY/mqdefault.jpg"
            }
        ]
    },
    "dia2": {
        name: "Pierna Completa",
        exercises: [
            {
                order: 1,
                name: "Sentadilla Búlgara con Mancuerna",
                sets: 4,
                reps: "8, 8, 8, 12",
                rest: "120s",
                notes: "",
                videoUrl: "https://youtu.be/kA6bHiDdTO4",
                imageUrl: "https://i.ytimg.com/vi/kA6bHiDdTO4/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Prensa Inclinada 45º",
                sets: 4,
                reps: "8, 8, 8, 12",
                rest: "120s",
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=IqjbBRNqJps",
                imageUrl: "https://i.ytimg.com/vi/IqjbBRNqJps/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Extensión de Cuádriceps en Máquina",
                isSuperset: true,
                items: [
                    {
                        name: "Extensión de Cuádriceps en Máquina",
                        subOrder: 1,
                        sets: 3,
                        reps: "12-15",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/watch?v=k1Nn0cJOMng",
                        imageUrl: "https://i.ytimg.com/vi/k1Nn0cJOMng/mqdefault.jpg"
                    },
                    {
                        name: "Sentadilla Goblet con Mancuerna/Kettlebell",
                        subOrder: 2,
                        sets: 3,
                        reps: "12-15",
                        rest: "90s",
                        videoUrl: "https://youtu.be/xPVfWX_9ytk",
                        imageUrl: "https://i.ytimg.com/vi/xPVfWX_9ytk/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=k1Nn0cJOMng",
                imageUrl: "https://i.ytimg.com/vi/k1Nn0cJOMng/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Circuito Metabólico",
                isSuperset: true,
                isEMOM: true,
                emomDetails: {
                    totalIntervals: 12,
                    workIntervalSeconds: 60
                },
                items: [
                    {
                        name: "Zancadas Caminando con Mancuernas/Kettlebells",
                        subOrder: 1,
                        sets: 1,
                        reps: "20",
                        isEMOMItem: true,
                        videoUrl: "https://youtu.be/7tRy9X0ibnk",
                        imageUrl: "https://i.ytimg.com/vi/7tRy9X0ibnk/mqdefault.jpg"
                    },
                    {
                        name: "Kettlebell - Swing Ruso",
                        subOrder: 2,
                        sets: 1,
                        reps: "20",
                        isEMOMItem: true,
                        videoUrl: "https://youtu.be/eKN0tj8q6Qc",
                        imageUrl: "https://i.ytimg.com/vi/eKN0tj8q6Qc/mqdefault.jpg"
                    },
                    {
                        name: "Cuerpo Libre - Cardio - Burpee sin Flexión",
                        subOrder: 3,
                        sets: 1,
                        reps: "8",
                        isEMOMItem: true,
                        videoUrl: "https://youtu.be/_liq4fAscDU",
                        imageUrl: "https://i.ytimg.com/vi/_liq4fAscDU/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/7tRy9X0ibnk",
                imageUrl: "https://i.ytimg.com/vi/7tRy9X0ibnk/mqdefault.jpg"
            }
        ]
    },
    "dia3": {
        name: "Torso Repaso",
        exercises: [
            {
                order: 1,
                name: "Press Banca con Barra",
                sets: 4,
                reps: "8, 8, 8, 12",
                rest: "120s",
                notes: "",
                videoUrl: "https://youtu.be/PKpsrFS2uac",
                imageUrl: "https://i.ytimg.com/vi/PKpsrFS2uac/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Máquina de Remo (Gironda)",
                sets: 4,
                reps: "8, 8, 8, 12",
                rest: "120s",
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=3wcaZqSfP0A",
                imageUrl: "https://i.ytimg.com/vi/3wcaZqSfP0A/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Curl con Mancuernas Sentado en Banco Inclinado",
                isSuperset: true,
                items: [
                    {
                        name: "Curl con Mancuernas Sentado en Banco Inclinado",
                        subOrder: 1,
                        sets: 3,
                        reps: "12-15",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/S32a3nYiWko",
                        imageUrl: "https://i.ytimg.com/vi/S32a3nYiWko/mqdefault.jpg"
                    },
                    {
                        name: "Flexiones / Push Ups al Banco",
                        subOrder: 2,
                        sets: 3,
                        reps: "15-20",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/watch?v=_mby7bboEUw",
                        imageUrl: "https://i.ytimg.com/vi/_mby7bboEUw/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/S32a3nYiWko",
                imageUrl: "https://i.ytimg.com/vi/S32a3nYiWko/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Circuito Metabólico",
                isSuperset: true,
                isEMOM: true,
                emomDetails: {
                    totalIntervals: 12,
                    workIntervalSeconds: 60
                },
                items: [
                    {
                        name: "Curl Martillo con Mancuernas",
                        subOrder: 1,
                        sets: 1,
                        reps: "15",
                        isEMOMItem: true,
                        videoUrl: "https://youtu.be/fcFsPoJY9lg",
                        imageUrl: "https://i.ytimg.com/vi/fcFsPoJY9lg/mqdefault.jpg"
                    },
                    {
                        name: "Remo Renegade Alterno con Mancuernas",
                        subOrder: 2,
                        sets: 1,
                        reps: "20",
                        isEMOMItem: true,
                        videoUrl: "https://www.youtube.com/watch?v=FjwFzYXSK70",
                        imageUrl: "https://i.ytimg.com/vi/FjwFzYXSK70/mqdefault.jpg"
                    },
                    {
                        name: "Kettlebell - Thruster",
                        subOrder: 3,
                        sets: 1,
                        reps: "15",
                        isEMOMItem: true,
                        videoUrl: "https://youtube.com/shorts/52JAS52W8Hw",
                        imageUrl: "https://i.ytimg.com/vi/52JAS52W8Hw/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/fcFsPoJY9lg",
                imageUrl: "https://i.ytimg.com/vi/fcFsPoJY9lg/mqdefault.jpg"
            }
        ]
    },
    "dia4": {
        name: "Cardio y Core",
        exercises: [
            {
                order: 1,
                name: "Interválico Intensivo",
                isSuperset: true,
                circuitDetails: {
                    totalRounds: 6,
                    restBetweenExercisesSeconds: 3,
                    restBetweenRoundsSeconds: 3
                },
                items: [
                    {
                        name: "Cardio - Correr en Cinta Sprint",
                        subOrder: 1,
                        sets: 1,
                        reps: "45s",
                        isCircuitItem: true,
                        videoUrl: "https://www.youtube.com/shorts/KKvRtN904g",
                        imageUrl: ""
                    },
                    {
                        name: "Cardio - Correr en Cinta Suave",
                        subOrder: 2,
                        sets: 1,
                        reps: "45s",
                        isCircuitItem: true,
                        videoUrl: "https://www.youtube.com/shorts/KKvRtN904g",
                        imageUrl: ""
                    }
                ],
                notes: "SPRINT: Por encima de 11km/h\nSUAVE: Por encima de 7km/h",
                videoUrl: "https://www.youtube.com/shorts/KKvRtN904g",
                imageUrl: ""
            },
            {
                order: 2,
                name: "EMOM",
                isSuperset: true,
                isEMOM: true,
                emomDetails: {
                    totalIntervals: 8,
                    workIntervalSeconds: 60
                },
                items: [
                    {
                        name: "Toes to Bar (Estricto)",
                        subOrder: 1,
                        sets: 1,
                        reps: "8",
                        isEMOMItem: true,
                        videoUrl: "https://www.youtube.com/shorts/UMmLdPvdZCw",
                        imageUrl: "https://i.ytimg.com/vi/UMmLdPvdZCw/mqdefault.jpg"
                    },
                    {
                        name: "Crunch Abdominal con Piernas Elevadas",
                        subOrder: 2,
                        sets: 1,
                        reps: "15",
                        isEMOMItem: true,
                        videoUrl: "https://www.youtube.com/shorts/TYNp3OsGKL0",
                        imageUrl: "https://i.ytimg.com/vi/TYNp3OsGKL0/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/UMmLdPvdZCw",
                imageUrl: "https://i.ytimg.com/vi/UMmLdPvdZCw/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Core y Lumbar",
                isSuperset: true,
                circuitDetails: {
                    totalRounds: 3,
                    restBetweenExercisesSeconds: 10,
                    restBetweenRoundsSeconds: 60
                },
                items: [
                    {
                        name: "Crunch - Flexión de Cadera",
                        subOrder: 1,
                        sets: 1,
                        reps: "40s",
                        isCircuitItem: true,
                        videoUrl: "https://youtu.be/XJFii9NYHNs",
                        imageUrl: "https://i.ytimg.com/vi/XJFii9NYHNs/mqdefault.jpg"
                    },
                    {
                        name: "Plancha - Lateral elevando Pierna",
                        subOrder: 2,
                        sets: 1,
                        reps: "40s",
                        isCircuitItem: true,
                        videoUrl: "https://youtu.be/-3PDE3ztwzU",
                        imageUrl: "https://i.ytimg.com/vi/-3PDE3ztwzU/mqdefault.jpg"
                    },
                    {
                        name: "Plancha - Lateral elevando Pierna",
                        subOrder: 3,
                        sets: 1,
                        reps: "40s",
                        isCircuitItem: true,
                        videoUrl: "https://youtu.be/-3PDE3ztwzU",
                        imageUrl: "https://i.ytimg.com/vi/-3PDE3ztwzU/mqdefault.jpg"
                    },
                    {
                        name: "Plancha - Abrir y Cerrar Piernas",
                        subOrder: 4,
                        sets: 1,
                        reps: "40s",
                        isCircuitItem: true,
                        videoUrl: "https://youtu.be/G8GPAq4110U",
                        imageUrl: "https://i.ytimg.com/vi/G8GPAq4110U/mqdefault.jpg"
                    },
                    {
                        name: "Crunch - Extensión Lumbar",
                        subOrder: 5,
                        sets: 1,
                        reps: "40s",
                        isCircuitItem: true,
                        videoUrl: "https://youtu.be/BJTJdFViRsU",
                        imageUrl: "https://i.ytimg.com/vi/BJTJdFViRsU/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/XJFii9NYHNs",
                imageUrl: "https://i.ytimg.com/vi/XJFii9NYHNs/mqdefault.jpg"
            }
        ]
    }
};

const exerciseAlternatives = {
    "Press Militar con Barra de Pie": [
        { name: "Press Militar en Multipower", videoUrl: "https://www.youtube.com/watch?v=iATqshmFPnI", imageUrl: "https://i.ytimg.com/vi/iATqshmFPnI/mqdefault.jpg" }
    ],
    "Dominadas / Pull Ups Supinación (Chin Up)": [
        { name: "Dominadas Australianas con Pies en Banco", videoUrl: "https://youtu.be/WqoNa74DieE", imageUrl: "https://i.ytimg.com/vi/WqoNa74DieE/mqdefault.jpg" }
    ],
    "Prensa Inclinada 45º": [
        { name: "Hack Squat / Prensa Hack", videoUrl: "https://www.youtube.com/watch?v=6teL-OyXuQs", imageUrl: "https://i.ytimg.com/vi/6teL-OyXuQs/mqdefault.jpg" }
    ],
    "Press Banca con Barra": [
        { name: "Press Banca en Multipower", videoUrl: "https://www.youtube.com/shorts/EDFhiF1mSKc", imageUrl: "https://i.ytimg.com/vi/EDFhiF1mSKc/mqdefault.jpg" }
    ],
    "Máquina de Remo (Gironda)": [
        { name: "Remo con Barra", videoUrl: "https://youtu.be/MjnZ52mZgT0", imageUrl: "https://i.ytimg.com/vi/MjnZ52mZgT0/mqdefault.jpg" }
    ],
    "Toes to Bar (Estricto)": [
        { name: "Encogimiento Abdominal Colgado", videoUrl: "https://www.youtube.com/shorts/SG0h_d-bBRk", imageUrl: "https://i.ytimg.com/vi/SG0h_d-bBRk/mqdefault.jpg" }
    ]
};

console.log("Datos de rutina cargados desde el creador.");
// Export if using modules in the target app, or remove if it's a simple script include
// export { workoutData, exerciseAlternatives };
