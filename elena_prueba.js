// Contenido de app_datos.js

// =================================================================================
// DATOS DE LA RUTINA (1 DÍAS)
// =================================================================================
const workoutData = {
    "dia1": {
        name: "Día 1. Pierna Completa",
        exercises: [
            {
                order: 1,
                name: "Sentadilla Trasera con Landmine",
                sets: 4,
                reps: "6,6,10,10",
                rest: "120s",
                rpe: "N/A",
                notes: "Utiliza la máquina de sentadillas al revés.",
                videoUrl: "https://youtu.be/sMcrgyyvK-8Sentadilal"
            },
            {
                order: 2,
                name: "Zancada Alterna con Barra",
                sets: 3,
                reps: "8-10",
                rest: "90s",
                rpe: "N/A",
                notes: "Puedes hacerlo con Mancuernas",
                videoUrl: "https://youtu.be/Q2SUv47Qh4UZancada"
            }
        ]
    }
};

const exerciseAlternatives = {
    "Sentadilla Trasera con Landmine": [
        { name: "Sentadilla Trasera en Multipower", videoUrl: "https://youtu.be/la-dqygoIukSentadilla" }
    ]
};
// =================================================================================
// FIN DE DATOS DE LA RUTINA Y ALTERNATIVAS
// =================================================================================
console.log("Datos de rutina cargados desde el creador. Alternativas actualizadas con videos.");
