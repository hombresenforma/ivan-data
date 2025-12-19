// Titulo: Plan de Entrenamiento

// Contenido de app_datos.js

// =================================================================================
// DATOS DE LA RUTINA (1 DÍAS)
// =================================================================================
const workoutData = {
    "dia1": {
        name: "Tracción",
        exercises: [
            {
                order: 1,
                name: "Sentadilla Jaca en Máquina",
                sets: 3,
                reps: "10-12",
                rest: "120s",
                notes: "",
                videoUrl: "https://youtube.com/shorts/P4iHoym5SxM",
                imageUrl: "https://i.ytimg.com/vi/P4iHoym5SxM/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Máquina de Remo (Gironda)",
                setTechniques: {"3":"DROPSET"},
                sets: 3,
                reps: "10",
                rest: "90s",
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=3wcaZqSfP0A",
                imageUrl: "https://i.ytimg.com/vi/3wcaZqSfP0A/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Curl de Bíceps Apoyado en Banco con Mancuernas",
                sets: 3,
                reps: "10-12",
                rest: "60s",
                notes: "",
                videoUrl: "https://youtube.com/shorts/hQ3ojFx5soY",
                imageUrl: "https://i.ytimg.com/vi/hQ3ojFx5soY/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Dominadas con Peso Corporal",
                sets: 3,
                reps: "8",
                rest: "60s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/pb-14sP_R4M",
                imageUrl: "https://i.ytimg.com/vi/pb-14sP_R4M/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Curl Bayesian Unilateral en Polea Baja",
                sets: 3,
                reps: "10-12",
                rest: "60s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/dCI2pPQmq_k",
                imageUrl: "https://i.ytimg.com/vi/dCI2pPQmq_k/mqdefault.jpg"
            },
            {
                order: 6,
                name: "EMOM",
                isSuperset: true,
                isEMOM: true,
                emomDetails: {
                    totalIntervals: 8,
                    workIntervalSeconds: 60
                },
                items: [
                    {
                        name: "Kettlebell - Press Militar",
                        subOrder: 1,
                        sets: 1,
                        reps: "10-12",
                        isEMOMItem: true,
                        videoUrl: "https://youtube.com/shorts/CCgU8PLMcdI",
                        imageUrl: "https://i.ytimg.com/vi/CCgU8PLMcdI/mqdefault.jpg"
                    },
                    {
                        name: "Worm",
                        subOrder: 2,
                        sets: 1,
                        reps: "",
                        isEMOMItem: true,
                        videoUrl: "https://www.youtube.com/watch?v=irBHRDg7ZHU",
                        imageUrl: "https://i.ytimg.com/vi/irBHRDg7ZHU/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtube.com/shorts/CCgU8PLMcdI",
                imageUrl: "https://i.ytimg.com/vi/CCgU8PLMcdI/mqdefault.jpg"
            },
            {
                order: 7,
                name: "FOR TIME",
                isSuperset: true,
                isForTime: true,
                forTimeDetails: {
                    totalRounds: 3
                },
                items: [
                    {
                        name: "Thruster con Mancuernas",
                        subOrder: 1,
                        reps: "12",
                        isForTimeItem: true,
                        videoUrl: "https://www.youtube.com/watch?v=5mTjKFubavs",
                        imageUrl: "https://i.ytimg.com/vi/5mTjKFubavs/mqdefault.jpg"
                    },
                    {
                        name: "Saltos - Box jump (Touch and go)",
                        subOrder: 2,
                        reps: "",
                        isForTimeItem: true,
                        videoUrl: "https://www.youtube.com/watch?v=P0VQFYM8xGg",
                        imageUrl: "https://i.ytimg.com/vi/P0VQFYM8xGg/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=5mTjKFubavs",
                imageUrl: "https://i.ytimg.com/vi/5mTjKFubavs/mqdefault.jpg"
            },
            {
                order: 8,
                name: "AMRAP FINAL ",
                isSuperset: true,
                isAMRAP: true,
                amrapDetails: {
                    timeLimitSeconds: 300
                },
                items: [
                    {
                        name: "Hollow Abdominal Encogido",
                        subOrder: 1,
                        reps: "10",
                        isAMRAPItem: true,
                        videoUrl: "https://www.youtube.com/shorts/DUYZEFKjYxs",
                        imageUrl: "https://i.ytimg.com/vi/DUYZEFKjYxs/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/DUYZEFKjYxs",
                imageUrl: "https://i.ytimg.com/vi/DUYZEFKjYxs/mqdefault.jpg"
            }
        ]
    }
};

const exerciseAlternatives = {
    "Saltos - Box jump (Touch and go)": [
        { name: "Cuerpo Libre - Cardio - Sentadilla con Salto en Step", videoUrl: "https://youtu.be/7ckSQy2BtWw", imageUrl: "https://i.ytimg.com/vi/7ckSQy2BtWw/mqdefault.jpg" }
    ],
    "Hollow Abdominal Encogido": [
        { name: "Plancha - Normal", videoUrl: "https://youtu.be/DQ4wYExQRJo", imageUrl: "https://i.ytimg.com/vi/DQ4wYExQRJo/mqdefault.jpg" }
    ]
};

console.log("Datos de rutina cargados desde el creador.");
