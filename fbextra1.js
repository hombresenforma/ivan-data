// Contenido de app_datos.js

// =================================================================================
// DATOS DE LA RUTINA (1 DÍAS)
// =================================================================================
const workoutData = {
    "dia1": {
        name: "Fullbody Complementario",
        exercises: [
            {
                order: 1,
                name: "Prensa Inclinada 45º",
                sets: 3,
                reps: "6, 6, 10",
                rest: "120s",
                notes: "Última serie 1 DROP-SETS (10- Baja 15-20% el peso - AL FALLO)",
                videoUrl: "https://www.youtube.com/watch?v=IqjbBRNqJps"
            },
            {
                order: 2,
                name: "Remo Seal con Mancuernas",
                sets: 3,
                reps: "10",
                rest: "90s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/6tLfn99dO8o"
            },
            {
                order: 3,
                name: "Press Militar Unilateral en Landmine",
                sets: 3,
                reps: "10",
                rest: "90s",
                notes: "10 por cada brazo",
                videoUrl: "https://www.youtube.com/watch?v=p2OLvWOo9l0"
            },
            {
                order: 4,
                name: "Dominadas / Pull Ups",
                isSuperset: true,
                items: [
                    {
                        name: "Dominadas / Pull Ups",
                        subOrder: 1,
                        sets: 3,
                        reps: "6-8",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/watch?v=7ht8tmdAyqw"
                    },
                    {
                        name: "Press Banca con Mancuernas",
                        subOrder: 2,
                        sets: 3,
                        reps: "10-12",
                        notes: "Si no dispones de banco para la super-serie, puedes hacerlo tumbado en el suelo con menos rango de recorrido.",
                        rest: "90s",
                        videoUrl: "https://youtu.be/hXCJC2Apcdg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=7ht8tmdAyqw"
            },
            {
                order: 5,
                name: "Kettlebell - Zancada Alterna con Rotación",
                isSuperset: true,
                items: [
                    {
                        name: "Kettlebell - Zancada Alterna con Rotación",
                        subOrder: 1,
                        sets: 3,
                        reps: "10",
                        isSupersetStart: true,
                        videoUrl: "https://youtube.com/shorts/8EjXf0rK3Lg"
                    },
                    {
                        name: "Kettlebell - Swing Ruso Alterno",
                        subOrder: 2,
                        sets: 3,
                        reps: "20",
                        videoUrl: "https://youtu.be/rHgKjGjmHNI"
                    },
                    {
                        name: "Plancha - Avanzada",
                        subOrder: 3,
                        sets: 3,
                        reps: "30s",
                        rest: "90s",
                        videoUrl: "https://youtu.be/nH9AQFIJ1rY"
                    }
                ],
                notes: "",
                videoUrl: "https://youtube.com/shorts/8EjXf0rK3Lg"
            }
        ]
    }
};

const exerciseAlternatives = {
};

console.log("Datos de rutina cargados desde el creador.");
// Export if using modules in the target app, or remove if it's a simple script include
// export { workoutData, exerciseAlternatives };
