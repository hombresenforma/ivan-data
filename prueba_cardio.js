// Contenido de app_datos.js

// =================================================================================
// DATOS DE LA RUTINA (1 DÍAS)
// =================================================================================
const workoutData = {
    "dia1": {
        name: "DÍA 1: Cardio",
        exercises: [
            {
                order: 1,
                name: "Cardio - Correr en Cinta Suave",
                sets: 1,
                reps: "300s",
                notes: "Calentamiento SUAVE. ",
                videoUrl: "https://www.youtube.com/shorts/KKvRtNn904g"
            },
            {
                order: 2,
                name: "Cardio - Correr en Cinta Sprint",
                isSuperset: true,
                items: [
                    {
                        name: "Cardio - Correr en Cinta Sprint",
                        subOrder: 1,
                        sets: 3,
                        reps: "90s",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/shorts/KKvRtNn904g"
                    },
                    {
                        name: "Cardio - Correr en Cinta Suave",
                        subOrder: 2,
                        sets: 3,
                        reps: "120s",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/shorts/KKvRtNn904g"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/KKvRtNn904g"
            },
            {
                order: 3,
                name: "EMOM Cardio",
                isSuperset: true,
                isEMOM: true,
                emomDetails: {
                    totalIntervals: 5,
                    workIntervalSeconds: 90
                },
                items: [
                    {
                        name: "Cardio - Correr en Cinta Sprint",
                        subOrder: 1,
                        sets: 1,
                        reps: "90s",
                        isEMOMItem: true,
                        videoUrl: "https://www.youtube.com/shorts/KKvRtNn904g"
                    },
                    {
                        name: "Cardio - Correr en Cinta Suave",
                        subOrder: 2,
                        sets: 1,
                        reps: "90s",
                        isEMOMItem: true,
                        videoUrl: "https://www.youtube.com/shorts/KKvRtNn904g"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/KKvRtNn904g"
            },
            {
                order: 4,
                name: "Circuito Cardio",
                isSuperset: true,
                circuitDetails: {
                    totalRounds: 3,
                    restBetweenExercisesSeconds: 60,
                    restBetweenRoundsSeconds: 60
                },
                items: [
                    {
                        name: "Cardio - Correr en Cinta Sprint",
                        subOrder: 1,
                        sets: 1,
                        reps: "90s",
                        isCircuitItem: true,
                        videoUrl: "https://www.youtube.com/shorts/KKvRtNn904g"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/KKvRtNn904g"
            }
        ]
    }
};

const exerciseAlternatives = {
};

console.log("Datos de rutina cargados desde el creador.");
// Export if using modules in the target app, or remove if it's a simple script include
// export { workoutData, exerciseAlternatives };
