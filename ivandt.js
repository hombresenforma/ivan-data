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
            }
        ]
    }
};

const exerciseAlternatives = {
};

console.log("Datos de rutina cargados desde el creador.");
