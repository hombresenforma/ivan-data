// Titulo: noeliaotero

// Contenido de app_datos.js

// =================================================================================
// DATOS DE LA RUTINA (1 DÍAS)
// =================================================================================
const workoutData = {
    "dia1": {
        name: "Fullbody Noelia",
        exercises: [
            {
                order: 1,
                name: "Aducción de Piernas en Máquina",
                isSuperset: true,
                items: [
                    {
                        name: "Aducción de Piernas en Máquina",
                        subOrder: 1,
                        sets: 3,
                        reps: "15",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/shorts/7TPklhKZRrc",
                        imageUrl: "https://i.ytimg.com/vi/7TPklhKZRrc/mqdefault.jpg"
                    },
                    {
                        name: "Worm",
                        subOrder: 2,
                        sets: 3,
                        reps: "5",
                        rest: "30s",
                        videoUrl: "https://www.youtube.com/watch?v=irBHRDg7ZHU",
                        imageUrl: "https://i.ytimg.com/vi/irBHRDg7ZHU/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/7TPklhKZRrc",
                imageUrl: "https://i.ytimg.com/vi/7TPklhKZRrc/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Prensa Inclinada en Máquina de Discos",
                sets: 3,
                reps: "10-12",
                rest: "90s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/je1QdJdvAN0",
                imageUrl: "https://i.ytimg.com/vi/je1QdJdvAN0/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Press Militar Sentado con Mancuernas (Explicado)",
                isSuperset: true,
                items: [
                    {
                        name: "Press Militar Sentado con Mancuernas (Explicado)",
                        subOrder: 1,
                        sets: 3,
                        reps: "10-12",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/shorts/2ZkYyh4ic0o",
                        imageUrl: "https://i.ytimg.com/vi/2ZkYyh4ic0o/mqdefault.jpg"
                    },
                    {
                        name: "Remo Inclinado con Mancuernas/KTB (Explicado)",
                        subOrder: 2,
                        sets: 3,
                        reps: "10-12",
                        notes: "Puedes usar una mancuerna de poco peso si lo prefieres o el peso de la Kettlebell es demasiado elevado.",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/shorts/NMlvYALcyBc",
                        imageUrl: "https://i.ytimg.com/vi/NMlvYALcyBc/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/2ZkYyh4ic0o",
                imageUrl: "https://i.ytimg.com/vi/2ZkYyh4ic0o/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Zancada Trasera Alterna con Mancuernas/KTB",
                sets: 3,
                reps: "20",
                rest: "90s",
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=Kzv73cEkTq4",
                imageUrl: "https://i.ytimg.com/vi/Kzv73cEkTq4/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Circuito",
                isSuperset: true,
                circuitDetails: {
                    totalRounds: 3,
                    restBetweenExercisesSeconds: 15,
                    restBetweenRoundsSeconds: 60
                },
                items: [
                    {
                        name: "Hollow Abdominal Completo",
                        subOrder: 1,
                        sets: 1,
                        reps: "45s",
                        isCircuitItem: true,
                        videoUrl: "https://www.youtube.com/shorts/S7nIyMHLO98",
                        imageUrl: "https://i.ytimg.com/vi/S7nIyMHLO98/mqdefault.jpg"
                    },
                    {
                        name: "Cuerpo Libre - Cardio - Burpee sin Flexión",
                        subOrder: 2,
                        sets: 1,
                        reps: "45s",
                        isCircuitItem: true,
                        videoUrl: "https://youtu.be/_liq4fAscDU",
                        imageUrl: "https://i.ytimg.com/vi/_liq4fAscDU/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/S7nIyMHLO98",
                imageUrl: "https://i.ytimg.com/vi/S7nIyMHLO98/mqdefault.jpg"
            }
        ]
    }
};

const exerciseAlternatives = {
    "Prensa Inclinada en Máquina de Discos": [
        { name: "Hack Squat / Prensa Hack", videoUrl: "https://www.youtube.com/watch?v=6teL-OyXuQs", imageUrl: "https://i.ytimg.com/vi/6teL-OyXuQs/mqdefault.jpg" }
    ]
};

console.log("Datos de rutina cargados desde el creador.");
// Export if using modules in the target app, or remove if it's a simple script include
// export { workoutData, exerciseAlternatives };
