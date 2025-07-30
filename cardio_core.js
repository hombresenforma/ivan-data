// Contenido de app_datos.js

// =================================================================================
// DATOS DE LA RUTINA (1 DÍAS)
// =================================================================================
const workoutData = {
    "dia1": {
        name: "Cardio y Core",
        exercises: [
            {
                order: 1,
                name: "Cardio - Correr en Cinta Suave",
                sets: 1,
                reps: "120s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/KKvRtNn904g",
                imageUrl: "https://i.ytimg.com/vi/KKvRtNn904g/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Interválico ",
                isSuperset: true,
                circuitDetails: {
                    totalRounds: 5,
                    restBetweenExercisesSeconds: 0,
                    restBetweenRoundsSeconds: 0
                },
                items: [
                    {
                        name: "Cardio - Correr en Cinta Sprint",
                        subOrder: 1,
                        sets: 1,
                        reps: "60s",
                        isCircuitItem: true,
                        videoUrl: "https://www.youtube.com/shorts/KKvRtNn904g",
                        imageUrl: "https://i.ytimg.com/vi/KKvRtNn904g/mqdefault.jpg"
                    },
                    {
                        name: "Cardio - Correr en Cinta Suave",
                        subOrder: 2,
                        sets: 1,
                        reps: "60s",
                        isCircuitItem: true,
                        videoUrl: "https://www.youtube.com/shorts/KKvRtNn904g",
                        imageUrl: "https://i.ytimg.com/vi/KKvRtNn904g/mqdefault.jpg"
                    }
                ],
                notes: "SPRINT: Por encima de 10km/h\nSUAVE: Por encima de 7km/h",
                videoUrl: "https://www.youtube.com/shorts/KKvRtNn904g",
                imageUrl: "https://i.ytimg.com/vi/KKvRtNn904g/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Circuito CORE",
                isSuperset: true,
                circuitDetails: {
                    totalRounds: 3,
                    restBetweenExercisesSeconds: 10,
                    restBetweenRoundsSeconds: 60
                },
                items: [
                    {
                        name: "Crunch - Extensión Lumbar",
                        subOrder: 1,
                        sets: 1,
                        reps: "40s",
                        isCircuitItem: true,
                        videoUrl: "https://youtu.be/BJTJdFViRsU",
                        imageUrl: "https://i.ytimg.com/vi/BJTJdFViRsU/mqdefault.jpg"
                    },
                    {
                        name: "Crunch - Flexión de Cadera",
                        subOrder: 3,
                        sets: 1,
                        reps: "40s",
                        isCircuitItem: true,
                        videoUrl: "https://youtu.be/XJFii9NYHNs",
                        imageUrl: "https://i.ytimg.com/vi/XJFii9NYHNs/mqdefault.jpg"
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
                        name: "Plancha - Lateral elevando Pierna",
                        subOrder: 4,
                        sets: 1,
                        reps: "40s",
                        isCircuitItem: true,
                        videoUrl: "https://youtu.be/-3PDE3ztwzU",
                        imageUrl: "https://i.ytimg.com/vi/-3PDE3ztwzU/mqdefault.jpg"
                    },
                    {
                        name: "Plancha - Abrir y Cerrar Piernas",
                        subOrder: 5,
                        sets: 1,
                        reps: "40s",
                        isCircuitItem: true,
                        videoUrl: "https://youtu.be/G8GPAq4110U",
                        imageUrl: "https://i.ytimg.com/vi/G8GPAq4110U/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/BJTJdFViRsU",
                imageUrl: "https://i.ytimg.com/vi/BJTJdFViRsU/mqdefault.jpg"
            }
        ]
    }
};

const exerciseAlternatives = {
};

console.log("Datos de rutina cargados desde el creador.");
// Export if using modules in the target app, or remove if it's a simple script include
// export { workoutData, exerciseAlternatives };
