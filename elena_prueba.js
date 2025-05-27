// Contenido de app_datos.js

// =================================================================================
// DATOS DE LA RUTINA (1 DÍAS)
// =================================================================================
const workoutData = {
    "dia1": {
        name: "DÍA 1: Pierna Completa",
        exercises: [
            {
                order: 1,
                name: "Hack Squat",
                sets: 4,
                reps: "6, 6, 10, 10",
                rest: "120s",
                rpe: "N/A",
                notes: "Hazlo de espaldas",
                videoUrl: "https://www.youtube.com/watch?v=6teL-OyXuQsThruster"
            },
            {
                order: 2,
                name: "Prensa Inclinada 45",
                sets: 3,
                reps: "12, 10, 8",
                rest: "90s",
                rpe: "N/A",
                notes: "Subiendo peso en cada serie",
                videoUrl: "https://www.youtube.com/watch?v=IqjbBRNqJpsPrensa"
            },
            {
                order: 3,
                isSuperset: true,
                items: [
                    {
                        subOrder: 1,
                        name: "Sentadilla Goblet con Mancuerna/Kettlebell",
                        sets: 3,
                        reps: "12",
                        isSupersetStart: true,
                        customRestText: "90",
                        rpe: "N/A",
                        notes: "",
                        videoUrl: "https://youtu.be/xPVfWX_9ytkSentadilla"
                    }
                ]
            },
            {
                order: 4,
                name: "Step Up Unilateral en Step con Mancuerna/Kettlebell",
                sets: 3,
                reps: "10",
                rest: "90s",
                rpe: "N/A",
                notes: "Subiendo peso en cada serie",
                videoUrl: "https://youtu.be/cabSAbO0YLYSplit"
            }
        ]
    }
};

const exerciseAlternatives = {
    "Hack Squat": [
        { name: "Sentadilla Trasera con Barra", videoUrl: "https://youtu.be/FK5XU_gaxAESentadilla" }
    ]
};
// =================================================================================
// FIN DE DATOS DE LA RUTINA Y ALTERNATIVAS
// =================================================================================
console.log("Datos de rutina cargados desde el creador. Alternativas actualizadas con videos.");
