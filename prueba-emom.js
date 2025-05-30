// Contenido de app_datos.js

// =================================================================================
// DATOS DE LA RUTINA (1 DÍAS)
// =================================================================================
const workoutData = {
    "dia1": {
        name: "DÍA 1: Prueba EMOMS",
        exercises: [
            {
                order: 1,
                type: "emom",
                name: "Press Banca con Barra",
                emomDuration: "10",
                emomExercises: [
                    { subOrder: 1, name: "Press Militar con Barra de Pie", repsTime: "10", videoUrl: "https://www.youtube.com/watch?v=idnuMZx6mS0&list=PLDmmv3PadX2NuaxMhWe4DMVBnkUuHymCK&index=174Press" },
                    { subOrder: 2, name: "Curl con Barra", repsTime: "", videoUrl: "https://youtu.be/0TjnWWqQfUwCurl" }
                ],
                rest: "0",
                rpe: "",
                notes: "",
                videoUrl: "https://youtu.be/PKpsrFS2uacPress"
            },
            {
                order: 2,
                type: "circuit",
                name: "Metabólico 1",
                circuitRounds: "4",
                circuitWorkTime: "45",
                circuitRestBetweenExercises: "15",
                circuitRestBetweenRounds: "60",
                circuitExercises: [
                    { subOrder: 1, name: "Cuerpo Libre - Cardio - Burpee Completo", videoUrl: "https://youtu.be/qfBhsTabWN0Cardio" },
                    { subOrder: 2, name: "Snatch con Kettlebell", videoUrl: "https://youtu.be/KlzSHIMdPTcAb" },
                    { subOrder: 3, name: "Remo con Barra", videoUrl: "https://youtu.be/MjnZ52mZgT0Remo" }
                ],
                rest: "",
                rpe: "",
                notes: "",
                videoUrl: ""
            }
        ]
    }
};

const exerciseAlternatives = {
};
// =================================================================================
// FIN DE DATOS DE LA RUTINA Y ALTERNATIVAS
// =================================================================================
console.log("Datos de rutina cargados desde el creador. Alternativas actualizadas con videos.");
