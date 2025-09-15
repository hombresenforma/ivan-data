// Contenido de app_datos.js

// =================================================================================
// DATOS DE LA RUTINA (1 DÍAS)
// =================================================================================
const workoutData = {
    "dia1": {
        name: "DÍA 1: Prueba ",
        exercises: [
            {
                order: 1,
                name: "Calistenia For Time",
                isSuperset: true,
                isForTime: true,
                forTimeDetails: {
                    totalRounds: 5
                },
                items: [
                    {
                        name: "Dominadas con Peso Corporal",
                        subOrder: 1,
                        sets: 1,
                        reps: "21, 15, 9",
                        isForTimeItem: true,
                        videoUrl: "https://www.youtube.com/shorts/pb-14sP_R4M",
                        imageUrl: "https://i.ytimg.com/vi/pb-14sP_R4M/mqdefault.jpg"
                    },
                    {
                        name: "Fondos en Paralelas para Pecho",
                        subOrder: 2,
                        sets: 1,
                        reps: "21, 15, 9",
                        isForTimeItem: true,
                        videoUrl: "https://youtu.be/W9TfhUAvteE",
                        imageUrl: "https://i.ytimg.com/vi/W9TfhUAvteE/mqdefault.jpg"
                    }
                ],
                notes: "Completa en el mínimo tiempo posible. ",
                videoUrl: "https://www.youtube.com/shorts/pb-14sP_R4M",
                imageUrl: "https://i.ytimg.com/vi/pb-14sP_R4M/mqdefault.jpg"
            },
            {
                order: 2,
                name: "AMRAP Completo",
                isSuperset: true,
                isAmrap: true,
                amrapDetails: {
                    durationSeconds: 900
                },
                items: [
                    {
                        name: "Muscle Snatch Unilat con Mancuerna/KTB",
                        subOrder: 1,
                        sets: 1,
                        reps: "12, 10, 8, 6, 4, 2",
                        isAmrapItem: true,
                        videoUrl: "https://www.youtube.com/shorts/00FzH7YaDwc",
                        imageUrl: "https://i.ytimg.com/vi/00FzH7YaDwc/mqdefault.jpg"
                    },
                    {
                        name: "Remo Renegade Alterno con Mancuernas",
                        subOrder: 2,
                        sets: 1,
                        reps: "20, 18, 16, 14, 12, 10",
                        isAmrapItem: true,
                        videoUrl: "https://www.youtube.com/watch?v=FjwFzYXSK70",
                        imageUrl: "https://i.ytimg.com/vi/FjwFzYXSK70/mqdefault.jpg"
                    },
                    {
                        name: "Sentadilla con Salto",
                        subOrder: 3,
                        sets: 1,
                        reps: "30, 25, 20, 15, 10, 5",
                        isAmrapItem: true,
                        videoUrl: "https://www.youtube.com/watch?v=1-Mum4hyIJ0",
                        imageUrl: "https://i.ytimg.com/vi/1-Mum4hyIJ0/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/00FzH7YaDwc",
                imageUrl: "https://i.ytimg.com/vi/00FzH7YaDwc/mqdefault.jpg"
            }
        ]
    }
};

const exerciseAlternatives = {
};

console.log("Datos de rutina cargados desde el creador.");
// Export if using modules in the target app, or remove if it's a simple script include
// export { workoutData, exerciseAlternatives };
