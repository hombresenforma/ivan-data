// Titulo: P5_3D_TPFB_2

const workoutData = {
    "dia1": {
        name: "Tren superior",
        exercises: [
            {
                order: 1,
                name: "Dominadas Australianas en TRX",
                isSuperset: true,
                items: [
                    {
                        name: "Dominadas Australianas en TRX",
                        subOrder: 1,
                        sets: 1,
                        reps: "10",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/shorts/f2-aezhuOoQ",
                        imageUrl: "https://i.ytimg.com/vi/f2-aezhuOoQ/mqdefault.jpg"
                    },
                    {
                        name: "Fondos de Tríceps con Pies en el Suelo",
                        subOrder: 2,
                        sets: 1,
                        reps: "15",
                        rest: "30s",
                        videoUrl: "https://youtube.com/shorts/7mpEJQC_gRk",
                        imageUrl: "https://i.ytimg.com/vi/7mpEJQC_gRk/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/f2-aezhuOoQ",
                imageUrl: "https://i.ytimg.com/vi/f2-aezhuOoQ/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Dominadas Supinas Asistidas en Máquina",
                sets: 4,
                reps: "10-12",
                rest: "90s",
                notes: "-Mantener retracción escapular, extensión completa de los codos",
                videoUrl: "https://www.youtube.com/shorts/E9DT2pv7Rp0",
                imageUrl: "https://i.ytimg.com/vi/E9DT2pv7Rp0/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Remo Gironda en Polea",
                sets: 3,
                reps: "8-10",
                rest: "60s",
                notes: "",
                videoUrl: "https://youtube.com/shorts/11xkWdyYWus",
                imageUrl: "https://i.ytimg.com/vi/11xkWdyYWus/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Press Banca con Mancuernas",
                sets: 3,
                reps: "10-12",
                rest: "60s",
                notes: "",
                videoUrl: "https://youtu.be/hXCJC2Apcdg",
                imageUrl: "https://i.ytimg.com/vi/hXCJC2Apcdg/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Press Militar Unilat de Pie con Mancuerna/KTB",
                sets: 3,
                reps: "10-12",
                rest: "60s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/vIK0qkXP_f0",
                imageUrl: "https://i.ytimg.com/vi/vIK0qkXP_f0/mqdefault.jpg"
            },
            {
                order: 6,
                name: "Ejercicio por tiempo",
                isSuperset: true,
                circuitDetails: {
                    totalRounds: 4,
                    restBetweenExercisesSeconds: 0,
                    restBetweenRoundsSeconds: 60
                },
                items: [
                    {
                        name: "Snatch + Thruster Unilat Alterno con Mancuerna",
                        subOrder: 1,
                        sets: 1,
                        reps: "45s",
                        isCircuitItem: true,
                        videoUrl: "https://www.youtube.com/shorts/jNbG4xt8zCs",
                        imageUrl: "https://i.ytimg.com/vi/jNbG4xt8zCs/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/jNbG4xt8zCs",
                imageUrl: "https://i.ytimg.com/vi/jNbG4xt8zCs/mqdefault.jpg"
            },
            {
                order: 7,
                name: "EMOM",
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
                        reps: "15",
                        isEMOMItem: true,
                        videoUrl: "https://www.youtube.com/shorts/fSTgTQr1WCk",
                        imageUrl: "https://i.ytimg.com/vi/fSTgTQr1WCk/mqdefault.jpg"
                    },
                    {
                        name: "Crunch - V Agrupado",
                        subOrder: 2,
                        sets: 1,
                        reps: "15",
                        isEMOMItem: true,
                        videoUrl: "https://youtu.be/bS10OysdlLg",
                        imageUrl: "https://i.ytimg.com/vi/bS10OysdlLg/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/fSTgTQr1WCk",
                imageUrl: "https://i.ytimg.com/vi/fSTgTQr1WCk/mqdefault.jpg"
            }
        ]
    },
    "dia2": {
        name: "Tren inferior",
        exercises: [
            {
                order: 1,
                name: "Jumping Jack",
                isSuperset: true,
                items: [
                    {
                        name: "Jumping Jack",
                        subOrder: 1,
                        sets: 2,
                        reps: "15",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/K5PMB8CauGM",
                        imageUrl: "https://i.ytimg.com/vi/K5PMB8CauGM/mqdefault.jpg"
                    },
                    {
                        name: "Sentadilla con Salto",
                        subOrder: 2,
                        sets: 2,
                        reps: "15",
                        rest: "30s",
                        videoUrl: "https://www.youtube.com/watch?v=l6zEYjjJ4dE",
                        imageUrl: "https://i.ytimg.com/vi/l6zEYjjJ4dE/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/K5PMB8CauGM",
                imageUrl: "https://i.ytimg.com/vi/K5PMB8CauGM/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Prensa Inclinada en Máquina de Discos",
                sets: 4,
                reps: "10-12",
                rest: "90s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/je1QdJdvAN0",
                imageUrl: "https://i.ytimg.com/vi/je1QdJdvAN0/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Kettlebell - Swing con Sentadilla",
                sets: 3,
                reps: "10-12",
                rest: "60s",
                notes: "",
                videoUrl: "https://youtube.com/shorts/MUJ2UiP5gjc",
                imageUrl: "https://i.ytimg.com/vi/MUJ2UiP5gjc/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Circuito",
                isSuperset: true,
                circuitDetails: {
                    totalRounds: 4,
                    restBetweenExercisesSeconds: 15,
                    restBetweenRoundsSeconds: 60
                },
                items: [
                    {
                        name: "Step Up Alterno en Step",
                        subOrder: 1,
                        sets: 1,
                        reps: "45s",
                        isCircuitItem: true,
                        videoUrl: "https://youtu.be/IwixiNKjpCA",
                        imageUrl: "https://i.ytimg.com/vi/IwixiNKjpCA/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/IwixiNKjpCA",
                imageUrl: "https://i.ytimg.com/vi/IwixiNKjpCA/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Curl Femoral Sentado en Máquina",
                sets: 3,
                reps: "10-12",
                rest: "60s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/2fXW4I08ov4",
                imageUrl: "https://i.ytimg.com/vi/2fXW4I08ov4/mqdefault.jpg"
            },
            {
                order: 6,
                name: "EMOM",
                isSuperset: true,
                isEMOM: true,
                emomDetails: {
                    totalIntervals: 4,
                    workIntervalSeconds: 60
                },
                items: [
                    {
                        name: "Aducción de Piernas en Máquina",
                        subOrder: 1,
                        sets: 1,
                        reps: "20",
                        isEMOMItem: true,
                        videoUrl: "https://www.youtube.com/shorts/7TPklhKZRrc",
                        imageUrl: "https://i.ytimg.com/vi/7TPklhKZRrc/mqdefault.jpg"
                    },
                    {
                        name: "Crunch Bicicleta Alterno",
                        subOrder: 2,
                        sets: 1,
                        reps: "20",
                        isEMOMItem: true,
                        videoUrl: "https://www.youtube.com/shorts/nUIfDzuMR00",
                        imageUrl: "https://i.ytimg.com/vi/nUIfDzuMR00/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/7TPklhKZRrc",
                imageUrl: "https://i.ytimg.com/vi/7TPklhKZRrc/mqdefault.jpg"
            }
        ]
    },
    "dia3": {
        name: "Fullbody",
        exercises: [
            {
                order: 1,
                name: "Activación - Deep Squat + Rotación",
                isSuperset: true,
                items: [
                    {
                        name: "Activación - Deep Squat + Rotación",
                        subOrder: 1,
                        sets: 2,
                        reps: "6",
                        isSupersetStart: true,
                        notes: "Activación.",
                        videoUrl: "https://youtu.be/sFbhjaZfdd8",
                        imageUrl: "https://i.ytimg.com/vi/sFbhjaZfdd8/mqdefault.jpg"
                    },
                    {
                        name: "Face Pull con KTB",
                        subOrder: 2,
                        sets: 2,
                        reps: "10",
                        rest: "30s",
                        videoUrl: "https://www.youtube.com/shorts/RIS2s-UkKOk",
                        imageUrl: "https://i.ytimg.com/vi/RIS2s-UkKOk/mqdefault.jpg"
                    }
                ],
                notes: "Activación.",
                videoUrl: "https://youtu.be/sFbhjaZfdd8",
                imageUrl: "https://i.ytimg.com/vi/sFbhjaZfdd8/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Devil Press + Thruster con Mancuernas",
                isSuperset: true,
                items: [
                    {
                        name: "Devil Press + Thruster con Mancuernas",
                        subOrder: 1,
                        sets: 3,
                        reps: "8",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/shorts/njS9V-rVeTY",
                        imageUrl: "https://i.ytimg.com/vi/njS9V-rVeTY/mqdefault.jpg"
                    },
                    {
                        name: "Sentadilla Goblet + Sentadilla Sumo con KTB",
                        subOrder: 2,
                        sets: 3,
                        reps: "12",
                        notes: "En caso de no llegar a las repeticiones pautadas, se pueden hacer con rodilla",
                        rest: "90s",
                        videoUrl: "https://youtu.be/oz1SagvDVe8",
                        imageUrl: "https://i.ytimg.com/vi/oz1SagvDVe8/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/njS9V-rVeTY",
                imageUrl: "https://i.ytimg.com/vi/njS9V-rVeTY/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Kettlebell - Soft Swing",
                isSuperset: true,
                items: [
                    {
                        name: "Kettlebell - Soft Swing",
                        subOrder: 1,
                        sets: 3,
                        reps: "15",
                        isSupersetStart: true,
                        videoUrl: "https://youtube.com/shorts/-i4ReGBb26g",
                        imageUrl: "https://i.ytimg.com/vi/-i4ReGBb26g/mqdefault.jpg"
                    },
                    {
                        name: "Plancha - Lateral",
                        subOrder: 2,
                        sets: 3,
                        reps: "30s",
                        videoUrl: "https://youtu.be/IBlAMf7LYvI",
                        imageUrl: "https://i.ytimg.com/vi/IBlAMf7LYvI/mqdefault.jpg"
                    },
                    {
                        name: "Plancha - Lateral",
                        subOrder: 3,
                        sets: 3,
                        reps: "30s",
                        rest: "90s",
                        videoUrl: "https://youtu.be/IBlAMf7LYvI",
                        imageUrl: "https://i.ytimg.com/vi/IBlAMf7LYvI/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtube.com/shorts/-i4ReGBb26g",
                imageUrl: "https://i.ytimg.com/vi/-i4ReGBb26g/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Remo con Barra",
                isSuperset: true,
                items: [
                    {
                        name: "Remo con Barra",
                        subOrder: 1,
                        sets: 3,
                        reps: "12",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/MjnZ52mZgT0",
                        imageUrl: "https://i.ytimg.com/vi/MjnZ52mZgT0/mqdefault.jpg"
                    },
                    {
                        name: "Curl Martillo Alterno Sentado con Mancuernas",
                        subOrder: 2,
                        sets: 3,
                        reps: "12",
                        notes: "En caso de no tener el banco cerca lo puedes hacer de pie",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/shorts/1cRT5C0klJc",
                        imageUrl: "https://i.ytimg.com/vi/1cRT5C0klJc/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/MjnZ52mZgT0",
                imageUrl: "https://i.ytimg.com/vi/MjnZ52mZgT0/mqdefault.jpg"
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
                        name: "Hollow Abdominal Encogido",
                        subOrder: 2,
                        sets: 4,
                        reps: "45s",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/shorts/DUYZEFKjYxs",
                        imageUrl: "https://i.ytimg.com/vi/DUYZEFKjYxs/mqdefault.jpg"
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
};