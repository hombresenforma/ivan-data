// Titulo: P4_5D_APTOR_HIIT_1

const workoutData = {
    "dia1": {
        name: "Anterior HIIT",
        exercises: [
            {
                order: 1,
                name: "Flexiones con Peso Corporal",
                sets: 3,
                reps: "FALLO",
                rest: "60s",
                notes: "MÁXIMAS REPETICIONES (AL FALLO)",
                videoUrl: "https://www.youtube.com/shorts/jqnnetMI-4s",
                imageUrl: "https://i.ytimg.com/vi/jqnnetMI-4s/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Sentadilla Frontal con Mancuernas/Kettlebells",
                isSuperset: true,
                items: [
                    {
                        name: "Sentadilla Frontal con Mancuernas/Kettlebells",
                        subOrder: 1,
                        sets: 3,
                        reps: "15",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/lfb6neUpfP8",
                        imageUrl: "https://i.ytimg.com/vi/lfb6neUpfP8/mqdefault.jpg"
                    },
                    {
                        name: "Zancada Dinámica",
                        subOrder: 2,
                        sets: 3,
                        reps: "24",
                        notes: "12 por lado.",
                        rest: "60s",
                        videoUrl: "https://www.youtube.com/watch?v=eSAN1E5usJI",
                        imageUrl: "https://i.ytimg.com/vi/eSAN1E5usJI/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/lfb6neUpfP8",
                imageUrl: "https://i.ytimg.com/vi/lfb6neUpfP8/mqdefault.jpg"
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
                        reps: "10",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/shorts/vIK0qkXP_f0",
                        imageUrl: "https://i.ytimg.com/vi/vIK0qkXP_f0/mqdefault.jpg"
                    },
                    {
                        name: "Fondos de Tríceps con Pies Elevados",
                        subOrder: 2,
                        sets: 3,
                        reps: "15",
                        rest: "60s",
                        videoUrl: "https://youtube.com/shorts/FBttBh-aiVs",
                        imageUrl: "https://i.ytimg.com/vi/FBttBh-aiVs/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/vIK0qkXP_f0",
                imageUrl: "https://i.ytimg.com/vi/vIK0qkXP_f0/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Floor Press con Mancuernas",
                sets: 3,
                reps: "15, 12, 10",
                rest: "60s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/Iu02N3s7zgQ",
                imageUrl: "https://i.ytimg.com/vi/Iu02N3s7zgQ/mqdefault.jpg"
            },
            {
                order: 5,
                name: "HIIT 1:1",
                isSuperset: true,
                circuitDetails: {
                    totalRounds: 4,
                    restBetweenExercisesSeconds: 15,
                    restBetweenRoundsSeconds: 15
                },
                items: [
                    {
                        name: "Over-Head Jumping Jack",
                        subOrder: 1,
                        sets: 1,
                        reps: "30s",
                        isCircuitItem: true,
                        notes: "Haz el descanso a ritmo suave, pero no pares.",
                        videoUrl: "https://youtu.be/ZU5OglDiAQY",
                        imageUrl: "https://i.ytimg.com/vi/ZU5OglDiAQY/mqdefault.jpg"
                    },
                    {
                        name: "Worm",
                        subOrder: 2,
                        sets: 1,
                        reps: "30s",
                        isCircuitItem: true,
                        videoUrl: "https://www.youtube.com/watch?v=irBHRDg7ZHU",
                        imageUrl: "https://i.ytimg.com/vi/irBHRDg7ZHU/mqdefault.jpg"
                    }
                ],
                notes: "Haz el descanso a ritmo suave, pero no pares.",
                videoUrl: "https://youtu.be/ZU5OglDiAQY",
                imageUrl: "https://i.ytimg.com/vi/ZU5OglDiAQY/mqdefault.jpg"
            },
            {
                order: 6,
                name: "Circuito",
                isSuperset: true,
                circuitDetails: {
                    totalRounds: 6,
                    restBetweenExercisesSeconds: 60,
                    restBetweenRoundsSeconds: 60
                },
                items: [
                    {
                        name: "CARDIO - Correr (Sprint)",
                        subOrder: 1,
                        sets: 1,
                        reps: "30",
                        isCircuitItem: true,
                        notes: "Combinamos 30 segundos sprint con 60 segundos trote suave",
                        videoUrl: "https://youtu.be/KKvRtNn904g",
                        imageUrl: "https://i.ytimg.com/vi/KKvRtNn904g/mqdefault.jpg"
                    }
                ],
                notes: "Combinamos 30 segundos sprint con 60 segundos trote suave",
                videoUrl: "https://youtu.be/KKvRtNn904g",
                imageUrl: "https://i.ytimg.com/vi/KKvRtNn904g/mqdefault.jpg"
            }
        ]
    },
    "dia2": {
        name: "Posterior HIIT",
        exercises: [
            {
                order: 1,
                name: "Dominadas Australianas en TRX",
                sets: 3,
                reps: "FALLO",
                rest: "60s",
                notes: "Pon el 50% de tu peso corporal y haz las máximas repeticiones.",
                videoUrl: "https://www.youtube.com/shorts/f2-aezhuOoQ",
                imageUrl: "https://i.ytimg.com/vi/f2-aezhuOoQ/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Zancada Trasera Alterna con Mancuernas/KTB",
                isSuperset: true,
                items: [
                    {
                        name: "Zancada Trasera Alterna con Mancuernas/KTB",
                        subOrder: 1,
                        sets: 3,
                        reps: "16",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/watch?v=Kzv73cEkTq4",
                        imageUrl: "https://i.ytimg.com/vi/Kzv73cEkTq4/mqdefault.jpg"
                    },
                    {
                        name: "Sentadilla con Salto",
                        subOrder: 2,
                        sets: 3,
                        reps: "15",
                        rest: "60s",
                        videoUrl: "https://www.youtube.com/watch?v=l6zEYjjJ4dE",
                        imageUrl: "https://i.ytimg.com/vi/l6zEYjjJ4dE/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=Kzv73cEkTq4",
                imageUrl: "https://i.ytimg.com/vi/Kzv73cEkTq4/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Remo Unilat con Mancuerna/KTB (Explicado)",
                isSuperset: true,
                items: [
                    {
                        name: "Remo Unilat con Mancuerna/KTB (Explicado)",
                        subOrder: 1,
                        sets: 3,
                        reps: "8",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/uH9Hg4nWOG8",
                        imageUrl: "https://i.ytimg.com/vi/uH9Hg4nWOG8/mqdefault.jpg"
                    },
                    {
                        name: "Remo Renegade Alterno + Peso Muerto con Mancuernas",
                        subOrder: 2,
                        sets: 3,
                        reps: "8",
                        rest: "60s",
                        videoUrl: "https://www.youtube.com/shorts/HH8uoLbhWSw",
                        imageUrl: "https://i.ytimg.com/vi/HH8uoLbhWSw/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/uH9Hg4nWOG8",
                imageUrl: "https://i.ytimg.com/vi/uH9Hg4nWOG8/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Face Pull con TRX",
                isSuperset: true,
                items: [
                    {
                        name: "Face Pull con TRX",
                        subOrder: 1,
                        sets: 3,
                        reps: "15, 12, 10",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/shorts/bxzpphpaGSg",
                        imageUrl: "https://i.ytimg.com/vi/bxzpphpaGSg/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/bxzpphpaGSg",
                imageUrl: "https://i.ytimg.com/vi/bxzpphpaGSg/mqdefault.jpg"
            },
            {
                order: 5,
                name: "HIIT 1:1",
                isSuperset: true,
                circuitDetails: {
                    totalRounds: 4,
                    restBetweenExercisesSeconds: 45,
                    restBetweenRoundsSeconds: 45
                },
                items: [
                    {
                        name: "Remo Renegade Alterno + Peso Muerto con Mancuernas",
                        subOrder: 1,
                        sets: 1,
                        reps: "60s",
                        isCircuitItem: true,
                        notes: "Haz el descanso a ritmo suave, pero no pares.",
                        videoUrl: "https://www.youtube.com/shorts/HH8uoLbhWSw",
                        imageUrl: "https://i.ytimg.com/vi/HH8uoLbhWSw/mqdefault.jpg"
                    }
                ],
                notes: "Haz el descanso a ritmo suave, pero no pares.",
                videoUrl: "https://www.youtube.com/shorts/HH8uoLbhWSw",
                imageUrl: "https://i.ytimg.com/vi/HH8uoLbhWSw/mqdefault.jpg"
            },
            {
                order: 6,
                name: "Circuito",
                isSuperset: true,
                circuitDetails: {
                    totalRounds: 1,
                    restBetweenExercisesSeconds: 0,
                    restBetweenRoundsSeconds: 0
                },
                items: [
                    {
                        name: "CARDIO - Correr (Suave)",
                        subOrder: 1,
                        sets: 1,
                        reps: "1200s",
                        isCircuitItem: true,
                        notes: "Caminando rápido en cinta",
                        videoUrl: "https://youtu.be/KKvRtNn904g",
                        imageUrl: "https://i.ytimg.com/vi/KKvRtNn904g/mqdefault.jpg"
                    }
                ],
                notes: "Caminando rápido en cinta",
                videoUrl: "https://youtu.be/KKvRtNn904g",
                imageUrl: "https://i.ytimg.com/vi/KKvRtNn904g/mqdefault.jpg"
            }
        ]
    },
    "dia3": {
        name: "Torso HIIT",
        exercises: [
            {
                order: 1,
                name: "Curl de Bíceps Apoyado en Banco con Mancuernas",
                sets: 4,
                reps: "8-10",
                rest: "60s",
                notes: "",
                videoUrl: "https://youtube.com/shorts/hQ3ojFx5soY",
                imageUrl: "https://i.ytimg.com/vi/hQ3ojFx5soY/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Fondos de Tríceps con Pies Elevados",
                sets: 3,
                reps: "8",
                rest: "60s",
                notes: "Utiliza la máquina asistida o banda elástica si lo necesitas. ",
                videoUrl: "https://youtube.com/shorts/FBttBh-aiVs",
                imageUrl: "https://i.ytimg.com/vi/FBttBh-aiVs/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Press Militar Sentado con Mancuernas (ExPLICADO)",
                isSuperset: true,
                items: [
                    {
                        name: "Press Militar Sentado con Mancuernas (ExPLICADO)",
                        subOrder: 1,
                        sets: 4,
                        reps: "10",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/shorts/2ZkYyh4ic0o",
                        imageUrl: "https://i.ytimg.com/vi/2ZkYyh4ic0o/mqdefault.jpg"
                    },
                    {
                        name: "Curl con Mancuernas Sentado en Banco Inclinado",
                        subOrder: 2,
                        sets: 4,
                        reps: "10",
                        videoUrl: "https://youtu.be/S32a3nYiWko",
                        imageUrl: "https://i.ytimg.com/vi/S32a3nYiWko/mqdefault.jpg"
                    },
                    {
                        name: "Flexiones Agarre Estrecho",
                        subOrder: 3,
                        sets: 4,
                        reps: "10",
                        notes: "Hazlas de rodillas si no puedes ",
                        rest: "60s",
                        videoUrl: "https://youtu.be/9o2ldyYStO8",
                        imageUrl: "https://i.ytimg.com/vi/9o2ldyYStO8/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/2ZkYyh4ic0o",
                imageUrl: "https://i.ytimg.com/vi/2ZkYyh4ic0o/mqdefault.jpg"
            },
            {
                order: 5,
                name: "HIIT 1:1",
                isSuperset: true,
                circuitDetails: {
                    totalRounds: 2,
                    restBetweenExercisesSeconds: 45,
                    restBetweenRoundsSeconds: 45
                },
                items: [
                    {
                        name: "Burpee sin Flexión",
                        subOrder: 1,
                        sets: 1,
                        reps: "60s",
                        isCircuitItem: true,
                        videoUrl: "https://youtu.be/_liq4fAscDU",
                        imageUrl: "https://i.ytimg.com/vi/_liq4fAscDU/mqdefault.jpg"
                    },
                    {
                        name: "Lateral Climbers",
                        subOrder: 2,
                        sets: 1,
                        reps: "60s",
                        isCircuitItem: true,
                        videoUrl: "https://www.youtube.com/shorts/IKuy2laTdGY",
                        imageUrl: "https://i.ytimg.com/vi/IKuy2laTdGY/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/_liq4fAscDU",
                imageUrl: "https://i.ytimg.com/vi/_liq4fAscDU/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Circuito",
                isSuperset: true,
                circuitDetails: {
                    totalRounds: 8,
                    restBetweenExercisesSeconds: 45,
                    restBetweenRoundsSeconds: 0
                },
                items: [
                    {
                        name: "CARDIO - Correr (Sprint)",
                        subOrder: 1,
                        sets: 1,
                        reps: "15",
                        isCircuitItem: true,
                        notes: "15\" sprint y 45\" trote suave",
                        videoUrl: "https://youtu.be/KKvRtNn904g",
                        imageUrl: "https://i.ytimg.com/vi/KKvRtNn904g/mqdefault.jpg"
                    }
                ],
                notes: "15\" sprint y 45\" trote suave",
                videoUrl: "https://youtu.be/KKvRtNn904g",
                imageUrl: "https://i.ytimg.com/vi/KKvRtNn904g/mqdefault.jpg"
            }
        ]
    }
};

const exerciseAlternatives = {
    "Press Militar Unilat de Pie con Mancuerna/KTB": [
        { name: "Press Militar Sentado con Mancuernas (Explicado)", videoUrl: "", imageUrl: "" }
    ],
    "Dominadas Australianas en TRX": [
        { name: "Dominadas Australianas con Pies en Banco", videoUrl: "https://youtu.be/WqoNa74DieE", imageUrl: "https://i.ytimg.com/vi/WqoNa74DieE/mqdefault.jpg" }
    ],
    "Remo Unilat con Mancuerna/KTB (Explicado)": [
        { name: "Máquina de Remo (Gironda)", videoUrl: "https://www.youtube.com/watch?v=3wcaZqSfP0A", imageUrl: "https://i.ytimg.com/vi/3wcaZqSfP0A/mqdefault.jpg" }
    ],
    "Curl de Bíceps Apoyado en Banco con Mancuernas": [
        { name: "Curl Araña con Barra Z", videoUrl: "https://www.youtube.com/shorts/ZGa2E8bi9Eg", imageUrl: "https://i.ytimg.com/vi/ZGa2E8bi9Eg/mqdefault.jpg" }
    ]
};

