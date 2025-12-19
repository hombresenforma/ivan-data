// Titulo: Plan de Entrenamiento

// Contenido de app_datos.js

// =================================================================================
// DATOS DE LA RUTINA (1 DÍAS)
// =================================================================================
const workoutData = {
    "dia1": {
        name: "DÍA 1: Prueba 1",
        exercises: [
            {
                order: 1,
                name: "Press Banca con Barra",
                setTechniques: {"2":"CLUSTER","3":"DROPSET","4":"DROPSET X2"},
                sets: 4,
                reps: "12",
                rest: "60s",
                notes: "",
                videoUrl: "https://youtu.be/PKpsrFS2uac",
                imageUrl: "https://i.ytimg.com/vi/PKpsrFS2uac/mqdefault.jpg"
            },
            {
                order: 2,
                name: "FOR TIME",
                isSuperset: true,
                isForTime: true,
                forTimeDetails: {
                    totalRounds: 4
                },
                items: [
                    {
                        name: "Fondos en Paralelas con Peso Corporal",
                        subOrder: 1,
                        reps: "12",
                        isForTimeItem: true,
                        videoUrl: "https://youtube.com/shorts/om9U8WY5HoY",
                        imageUrl: "https://i.ytimg.com/vi/om9U8WY5HoY/mqdefault.jpg"
                    },
                    {
                        name: "Dominadas con Peso Corporal",
                        subOrder: 2,
                        reps: "10",
                        isForTimeItem: true,
                        videoUrl: "https://www.youtube.com/shorts/pb-14sP_R4M",
                        imageUrl: "https://i.ytimg.com/vi/pb-14sP_R4M/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtube.com/shorts/om9U8WY5HoY",
                imageUrl: "https://i.ytimg.com/vi/om9U8WY5HoY/mqdefault.jpg"
            },
            {
                order: 3,
                name: "AMRAP",
                isSuperset: true,
                isAMRAP: true,
                amrapDetails: {
                    timeLimitSeconds: 750
                },
                items: [
                    {
                        name: "CARDIO - Burpees con Jumping Jacks",
                        subOrder: 1,
                        reps: "10",
                        isAMRAPItem: true,
                        videoUrl: "https://www.youtube.com/shorts/A21AiXaXi40",
                        imageUrl: "https://i.ytimg.com/vi/A21AiXaXi40/mqdefault.jpg"
                    },
                    {
                        name: "Worm",
                        subOrder: 2,
                        reps: "10",
                        isAMRAPItem: true,
                        videoUrl: "https://www.youtube.com/watch?v=irBHRDg7ZHU",
                        imageUrl: "https://i.ytimg.com/vi/irBHRDg7ZHU/mqdefault.jpg"
                    },
                    {
                        name: "Kettlebell - Soft Swing",
                        subOrder: 3,
                        reps: "15",
                        isAMRAPItem: true,
                        videoUrl: "https://youtube.com/shorts/-i4ReGBb26g",
                        imageUrl: "https://i.ytimg.com/vi/-i4ReGBb26g/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/A21AiXaXi40",
                imageUrl: "https://i.ytimg.com/vi/A21AiXaXi40/mqdefault.jpg"
            }
        ]
    }
};

const exerciseAlternatives = {
};

console.log("Datos de rutina cargados desde el creador.");
