// Titulo: luzrod

// Contenido de app_datos.js

// =================================================================================
// DATOS DE LA RUTINA (3 DÍAS)
// =================================================================================
const workoutData = {
    "dia1": {
        name: "Anterior",
        exercises: [
            {
                order: 1,
                name: "Press Militar Unilat de Pie con Mancuerna/KTB",
                isSuperset: true,
                items: [
                    {
                        name: "Press Militar Unilat de Pie con Mancuerna/KTB",
                        subOrder: 1,
                        sets: 3,
                        reps: "6-8",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/shorts/vIK0qkXP_f0",
                        imageUrl: "https://i.ytimg.com/vi/vIK0qkXP_f0/mqdefault.jpg"
                    },
                    {
                        name: "Press Militar Unilat de Pie con Mancuerna/KTB",
                        subOrder: 2,
                        sets: 3,
                        reps: "6-8",
                        videoUrl: "https://www.youtube.com/shorts/vIK0qkXP_f0",
                        imageUrl: "https://i.ytimg.com/vi/vIK0qkXP_f0/mqdefault.jpg"
                    },
                    {
                        name: "Crunch Abdominal Piernas Extendidas",
                        subOrder: 3,
                        sets: 3,
                        reps: "15",
                        rest: "90s",
                        videoUrl: "https://youtu.be/TYNp3OsGKL0",
                        imageUrl: "https://i.ytimg.com/vi/TYNp3OsGKL0/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/vIK0qkXP_f0",
                imageUrl: "https://i.ytimg.com/vi/vIK0qkXP_f0/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Sentadilla Goblet con Mancuerna/Kettlebell",
                isSuperset: true,
                items: [
                    {
                        name: "Sentadilla Goblet con Mancuerna/Kettlebell",
                        subOrder: 1,
                        sets: 3,
                        reps: "12-15",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/xPVfWX_9ytk",
                        imageUrl: "https://i.ytimg.com/vi/xPVfWX_9ytk/mqdefault.jpg"
                    },
                    {
                        name: "Plancha - Unilateral Alterna",
                        subOrder: 2,
                        sets: 3,
                        reps: "12",
                        rest: "90s",
                        videoUrl: "https://youtu.be/zQVZrTzOYBk",
                        imageUrl: "https://i.ytimg.com/vi/zQVZrTzOYBk/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/xPVfWX_9ytk",
                imageUrl: "https://i.ytimg.com/vi/xPVfWX_9ytk/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Zancadas Caminando con Mancuernas/Kettlebells",
                isSuperset: true,
                items: [
                    {
                        name: "Zancadas Caminando con Mancuernas/Kettlebells",
                        subOrder: 1,
                        sets: 3,
                        reps: "20",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/7tRy9X0ibnk",
                        imageUrl: "https://i.ytimg.com/vi/7tRy9X0ibnk/mqdefault.jpg"
                    },
                    {
                        name: "Fondos en Banco",
                        subOrder: 2,
                        sets: 3,
                        reps: "12-15",
                        rest: "90s",
                        videoUrl: "https://youtu.be/NSB_HrDwd6I",
                        imageUrl: "https://i.ytimg.com/vi/NSB_HrDwd6I/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/7tRy9X0ibnk",
                imageUrl: "https://i.ytimg.com/vi/7tRy9X0ibnk/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Circuito",
                isSuperset: true,
                circuitDetails: {
                    totalRounds: 3,
                    restBetweenExercisesSeconds: 20,
                    restBetweenRoundsSeconds: 60
                },
                items: [
                    {
                        name: "Sentadilla con Salto",
                        subOrder: 1,
                        sets: 1,
                        reps: "40s",
                        isCircuitItem: true,
                        videoUrl: "https://www.youtube.com/watch?v=1-Mum4hyIJ0",
                        imageUrl: "https://i.ytimg.com/vi/1-Mum4hyIJ0/mqdefault.jpg"
                    },
                    {
                        name: "Worm",
                        subOrder: 2,
                        sets: 1,
                        reps: "40s",
                        isCircuitItem: true,
                        videoUrl: "https://www.youtube.com/watch?v=irBHRDg7ZHU",
                        imageUrl: "https://i.ytimg.com/vi/irBHRDg7ZHU/mqdefault.jpg"
                    },
                    {
                        name: "Flexiones + Mountain Climbers",
                        subOrder: 3,
                        sets: 1,
                        reps: "40s",
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
        name: "Posterior",
        exercises: [
            {
                order: 1,
                name: "Remo Unilat en TRX",
                isSuperset: true,
                items: [
                    {
                        name: "Remo Unilat en TRX",
                        subOrder: 1,
                        sets: 3,
                        reps: "6-8",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/watch?v=sIM4_aMGdlk",
                        imageUrl: "https://i.ytimg.com/vi/sIM4_aMGdlk/mqdefault.jpg"
                    },
                    {
                        name: "Remo Unilat en TRX",
                        subOrder: 2,
                        sets: 3,
                        reps: "6-8",
                        videoUrl: "https://www.youtube.com/watch?v=sIM4_aMGdlk",
                        imageUrl: "https://i.ytimg.com/vi/sIM4_aMGdlk/mqdefault.jpg"
                    },
                    {
                        name: "Shoulder Tap (Hold)",
                        subOrder: 3,
                        sets: 3,
                        reps: "20s",
                        videoUrl: "https://www.youtube.com/shorts/XbpPZNgcvxE",
                        imageUrl: "https://i.ytimg.com/vi/XbpPZNgcvxE/mqdefault.jpg"
                    },
                    {
                        name: "Shoulder Tap (Hold)",
                        subOrder: 4,
                        sets: 3,
                        reps: "20s",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/shorts/XbpPZNgcvxE",
                        imageUrl: "https://i.ytimg.com/vi/XbpPZNgcvxE/mqdefault.jpg"
                    }
                ],
                notes: "Controla el Torso que no se gire.",
                videoUrl: "https://www.youtube.com/watch?v=sIM4_aMGdlk",
                imageUrl: "https://i.ytimg.com/vi/sIM4_aMGdlk/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Sentadilla Búlgara con Mancuerna",
                isSuperset: true,
                items: [
                    {
                        name: "Sentadilla Búlgara con Mancuerna",
                        subOrder: 1,
                        sets: 3,
                        reps: "10-12",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/kA6bHiDdTO4",
                        imageUrl: "https://i.ytimg.com/vi/kA6bHiDdTO4/mqdefault.jpg"
                    },
                    {
                        name: "Sentadilla Búlgara con Mancuerna",
                        subOrder: 2,
                        sets: 3,
                        reps: "10-12",
                        videoUrl: "https://youtu.be/kA6bHiDdTO4",
                        imageUrl: "https://i.ytimg.com/vi/kA6bHiDdTO4/mqdefault.jpg"
                    },
                    {
                        name: "Gomas - FacePull en Columna",
                        subOrder: 3,
                        sets: 3,
                        reps: "12",
                        rest: "90s",
                        videoUrl: "https://youtu.be/KnnWfHUjsKg",
                        imageUrl: "https://i.ytimg.com/vi/KnnWfHUjsKg/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/kA6bHiDdTO4",
                imageUrl: "https://i.ytimg.com/vi/kA6bHiDdTO4/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Dominadas Australianas con Pies en el Suelo",
                isSuperset: true,
                items: [
                    {
                        name: "Dominadas Australianas con Pies en el Suelo",
                        subOrder: 1,
                        sets: 3,
                        reps: "10-12",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/watch?v=-GFyrw9BJVk",
                        imageUrl: "https://i.ytimg.com/vi/-GFyrw9BJVk/mqdefault.jpg"
                    },
                    {
                        name: "Curl Concentrado con TRX / Anillas",
                        subOrder: 2,
                        sets: 3,
                        reps: "12-15",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/watch?v=d-DyoyBtrTU",
                        imageUrl: "https://i.ytimg.com/vi/d-DyoyBtrTU/mqdefault.jpg"
                    }
                ],
                notes: "Intenta que la espalda esté lo más vertical posible (Sin avanzar la cadera).",
                videoUrl: "https://www.youtube.com/watch?v=-GFyrw9BJVk",
                imageUrl: "https://i.ytimg.com/vi/-GFyrw9BJVk/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Circuito",
                isSuperset: true,
                circuitDetails: {
                    totalRounds: 3,
                    restBetweenExercisesSeconds: 20,
                    restBetweenRoundsSeconds: 60
                },
                items: [
                    {
                        name: "Gorilla Row con Kettlebells/Mancuernas",
                        subOrder: 1,
                        sets: 1,
                        reps: "40s",
                        isCircuitItem: true,
                        videoUrl: "https://youtu.be/4hKPsdWsXl8",
                        imageUrl: "https://i.ytimg.com/vi/4hKPsdWsXl8/mqdefault.jpg"
                    },
                    {
                        name: "Face Pull con KTB",
                        subOrder: 2,
                        sets: 1,
                        reps: "40s",
                        isCircuitItem: true,
                        videoUrl: "https://www.youtube.com/shorts/RIS2s-UkKOk",
                        imageUrl: "https://i.ytimg.com/vi/RIS2s-UkKOk/mqdefault.jpg"
                    },
                    {
                        name: "Plancha - Avanzada",
                        subOrder: 3,
                        sets: 1,
                        reps: "40s",
                        isCircuitItem: true,
                        videoUrl: "https://youtu.be/nH9AQFIJ1rY",
                        imageUrl: "https://i.ytimg.com/vi/nH9AQFIJ1rY/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/4hKPsdWsXl8",
                imageUrl: "https://i.ytimg.com/vi/4hKPsdWsXl8/mqdefault.jpg"
            }
        ]
    },
    "dia3": {
        name: "Metabólico + Abdominales",
        exercises: [
            {
                order: 1,
                name: "EMOM 15'",
                isSuperset: true,
                isEMOM: true,
                emomDetails: {
                    totalIntervals: 15,
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
                name: "Crunch Abdominal Piernas Extendidas",
                isSuperset: true,
                items: [
                    {
                        name: "Crunch Abdominal Piernas Extendidas",
                        subOrder: 1,
                        sets: 3,
                        reps: "15",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/TYNp3OsGKL0",
                        imageUrl: "https://i.ytimg.com/vi/TYNp3OsGKL0/mqdefault.jpg"
                    },
                    {
                        name: "Crunch - Lateral Piernas",
                        subOrder: 2,
                        sets: 3,
                        reps: "15",
                        videoUrl: "https://youtu.be/jjoqs9YMyrM",
                        imageUrl: "https://i.ytimg.com/vi/jjoqs9YMyrM/mqdefault.jpg"
                    },
                    {
                        name: "Crunch - Lateral Piernas",
                        subOrder: 3,
                        sets: 3,
                        reps: "15",
                        videoUrl: "https://youtu.be/jjoqs9YMyrM",
                        imageUrl: "https://i.ytimg.com/vi/jjoqs9YMyrM/mqdefault.jpg"
                    },
                    {
                        name: "Hollow - Nivel 3",
                        subOrder: 4,
                        sets: 3,
                        reps: "30s",
                        rest: "90s",
                        videoUrl: "https://youtu.be/I6YISGE4Uvo",
                        imageUrl: "https://i.ytimg.com/vi/I6YISGE4Uvo/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/TYNp3OsGKL0",
                imageUrl: "https://i.ytimg.com/vi/TYNp3OsGKL0/mqdefault.jpg"
            }
        ]
    }
};

const exerciseAlternatives = {
};

console.log("Datos de rutina cargados desde el creador.");
// Export if using modules in the target app, or remove if it's a simple script include
// export { workoutData, exerciseAlternatives };
