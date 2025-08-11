// Contenido de app_datos.js

// =================================================================================
// DATOS DE LA RUTINA (3 DÍAS)
// =================================================================================
const workoutData = {
    "dia1": {
        name: "Torso Completo",
        exercises: [
            {
                order: 1,
                name: "Gomas - Aperturas en Columna",
                isSuperset: true,
                items: [
                    {
                        name: "Gomas - Aperturas en Columna",
                        subOrder: 1,
                        sets: 4,
                        reps: "12-15",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/_FBdkpZ5FTs",
                        imageUrl: "https://i.ytimg.com/vi/_FBdkpZ5FTs/mqdefault.jpg"
                    },
                    {
                        name: "Flexiones con Lastre",
                        subOrder: 2,
                        sets: 4,
                        reps: "12-15",
                        notes: "Ponte un disco o botella con peso",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/shorts/gLBrKowP2eo",
                        imageUrl: "https://i.ytimg.com/vi/gLBrKowP2eo/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/_FBdkpZ5FTs",
                imageUrl: "https://i.ytimg.com/vi/_FBdkpZ5FTs/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Gomas - Remo Unilateral en Columna",
                isSuperset: true,
                items: [
                    {
                        name: "Gomas - Remo Unilateral en Columna",
                        subOrder: 1,
                        sets: 4,
                        reps: "12-15",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/SaitEaEDD5Q",
                        imageUrl: "https://i.ytimg.com/vi/SaitEaEDD5Q/mqdefault.jpg"
                    },
                    {
                        name: "Gomas - Curl de Bíceps en Columna",
                        subOrder: 2,
                        sets: 4,
                        reps: "12-15",
                        rest: "90s",
                        videoUrl: "https://youtu.be/JogvxqdpbMU",
                        imageUrl: "https://i.ytimg.com/vi/JogvxqdpbMU/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/SaitEaEDD5Q",
                imageUrl: "https://i.ytimg.com/vi/SaitEaEDD5Q/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Circuito",
                isSuperset: true,
                circuitDetails: {
                    totalRounds: 4,
                    restBetweenExercisesSeconds: 15,
                    restBetweenRoundsSeconds: 30
                },
                items: [
                    {
                        name: "Gomas - Press Militar",
                        subOrder: 1,
                        sets: 1,
                        reps: "45s",
                        isCircuitItem: true,
                        videoUrl: "https://youtu.be/PaVq5VuHYEg",
                        imageUrl: "https://i.ytimg.com/vi/PaVq5VuHYEg/mqdefault.jpg"
                    },
                    {
                        name: "Fondos en Banco",
                        subOrder: 2,
                        sets: 1,
                        reps: "45s",
                        isCircuitItem: true,
                        videoUrl: "https://youtu.be/NSB_HrDwd6I",
                        imageUrl: "https://i.ytimg.com/vi/NSB_HrDwd6I/mqdefault.jpg"
                    },
                    {
                        name: "Crunch - Flexión de Cadera",
                        subOrder: 3,
                        sets: 1,
                        reps: "45s",
                        isCircuitItem: true,
                        videoUrl: "https://youtu.be/XJFii9NYHNs",
                        imageUrl: "https://i.ytimg.com/vi/XJFii9NYHNs/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/PaVq5VuHYEg",
                imageUrl: "https://i.ytimg.com/vi/PaVq5VuHYEg/mqdefault.jpg"
            }
        ]
    },
    "dia2": {
        name: "Pierna Completa",
        exercises: [
            {
                order: 1,
                name: "Gomas - Squat",
                isSuperset: true,
                items: [
                    {
                        name: "Gomas - Squat",
                        subOrder: 1,
                        sets: 4,
                        reps: "12-15",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/203_Zzz_Z_0",
                        imageUrl: "https://i.ytimg.com/vi/203_Zzz_Z_0/mqdefault.jpg"
                    },
                    {
                        name: "Sentadilla con Salto",
                        subOrder: 2,
                        sets: 4,
                        reps: "12-15",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/watch?v=1-Mum4hyIJ0",
                        imageUrl: "https://i.ytimg.com/vi/1-Mum4hyIJ0/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/203_Zzz_Z_0",
                imageUrl: "https://i.ytimg.com/vi/203_Zzz_Z_0/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Gomas - Peso Muerto",
                isSuperset: true,
                items: [
                    {
                        name: "Gomas - Peso Muerto",
                        subOrder: 1,
                        sets: 4,
                        reps: "12-15",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/o3vMmkN9JnQ",
                        imageUrl: "https://i.ytimg.com/vi/o3vMmkN9JnQ/mqdefault.jpg"
                    },
                    {
                        name: "Gomas - Zancada Avanzada",
                        subOrder: 2,
                        sets: 4,
                        reps: "12-15",
                        rest: "90s",
                        videoUrl: "https://youtu.be/rlfgAEO58no",
                        imageUrl: "https://i.ytimg.com/vi/rlfgAEO58no/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/o3vMmkN9JnQ",
                imageUrl: "https://i.ytimg.com/vi/o3vMmkN9JnQ/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Circuito",
                isSuperset: true,
                circuitDetails: {
                    totalRounds: 3,
                    restBetweenExercisesSeconds: 15,
                    restBetweenRoundsSeconds: 30
                },
                items: [
                    {
                        name: "Zancadas Caminando con Mancuernas/Kettlebells",
                        subOrder: 1,
                        sets: 1,
                        reps: "45s",
                        isCircuitItem: true,
                        videoUrl: "https://youtu.be/7tRy9X0ibnk",
                        imageUrl: "https://i.ytimg.com/vi/7tRy9X0ibnk/mqdefault.jpg"
                    },
                    {
                        name: "Sentadilla Búlgara",
                        subOrder: 2,
                        sets: 1,
                        reps: "45s",
                        isCircuitItem: true,
                        videoUrl: "https://youtu.be/WB7DVQtQmBw",
                        imageUrl: "https://i.ytimg.com/vi/WB7DVQtQmBw/mqdefault.jpg"
                    },
                    {
                        name: "Sentadilla Búlgara",
                        subOrder: 3,
                        sets: 1,
                        reps: "45s",
                        isCircuitItem: true,
                        videoUrl: "https://youtu.be/WB7DVQtQmBw",
                        imageUrl: "https://i.ytimg.com/vi/WB7DVQtQmBw/mqdefault.jpg"
                    },
                    {
                        name: "Hollow - Nivel 4",
                        subOrder: 4,
                        sets: 1,
                        reps: "45s",
                        isCircuitItem: true,
                        videoUrl: "https://youtu.be/RxFdlQ4oelM",
                        imageUrl: "https://i.ytimg.com/vi/RxFdlQ4oelM/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/7tRy9X0ibnk",
                imageUrl: "https://i.ytimg.com/vi/7tRy9X0ibnk/mqdefault.jpg"
            }
        ]
    },
    "dia3": {
        name: "Running",
        exercises: [
            {
                order: 1,
                name: "Circuito",
                isSuperset: true,
                circuitDetails: {
                    totalRounds: 8,
                    restBetweenExercisesSeconds: 5,
                    restBetweenRoundsSeconds: 3
                },
                items: [
                    {
                        name: "Cardio - Correr en Cinta Sprint",
                        subOrder: 1,
                        sets: 1,
                        reps: "45s",
                        isCircuitItem: true,
                        videoUrl: "https://www.youtube.com/shorts/KKvRtNn904g",
                        imageUrl: "https://i.ytimg.com/vi/KKvRtNn904g/mqdefault.jpg"
                    },
                    {
                        name: "Cardio - Correr en Cinta Suave",
                        subOrder: 2,
                        sets: 1,
                        reps: "45s",
                        isCircuitItem: true,
                        videoUrl: "https://www.youtube.com/shorts/KKvRtNn904g",
                        imageUrl: "https://i.ytimg.com/vi/KKvRtNn904g/mqdefault.jpg"
                    }
                ],
                notes: "Ritmo: SPRINT 45 segundos - TROTE SUAVE 45 segundos. \nEmpieza y termina con 3-5 min de trote progresivo. ",
                videoUrl: "https://www.youtube.com/shorts/KKvRtNn904g",
                imageUrl: "https://i.ytimg.com/vi/KKvRtNn904g/mqdefault.jpg"
            }
        ]
    }
};

const exerciseAlternatives = {
};

console.log("Datos de rutina cargados desde el creador.");
// Export if using modules in the target app, or remove if it's a simple script include
// export { workoutData, exerciseAlternatives };
