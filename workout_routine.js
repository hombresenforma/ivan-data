// Contenido de app_datos.js

// =================================================================================
// DATOS DE LA RUTINA (2 DÍAS)
// =================================================================================
const workoutData = {
    "dia1": {
        name: "Torso Completo",
        exercises: [
            {
                order: 1,
                name: "Sentadilla Trasera en Multipower",
                isSuperset: true,
                items: [
                    {
                        name: "Sentadilla Trasera en Multipower",
                        subOrder: 1,
                        sets: 4,
                        reps: "10-12",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/la-dqygoIuk"
                    },
                    {
                        name: "Sentadilla Búlgara con Mancuerna",
                        subOrder: 2,
                        sets: 4,
                        reps: "15/lado",
                        rest: "90s",
                        videoUrl: "https://youtu.be/kA6bHiDdTO4"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/la-dqygoIuk"
            },
            {
                order: 2,
                name: "Hip Thrust con Barra",
                sets: 3,
                reps: "8",
                rest: "90s",
                notes: "",
                videoUrl: "https://youtu.be/sbl1qYdkzUc"
            },
            {
                order: 3,
                name: "EMOM",
                isSuperset: true,
                isEMOM: true,
                emomDetails: {
                    totalIntervals: 8,
                    workIntervalSeconds: 40
                },
                items: [
                    {
                        name: "Cuerpo Libre - Cardio - Burpee Completo",
                        subOrder: 1,
                        sets: 1,
                        reps: "5",
                        isEMOMItem: true,
                        videoUrl: "https://youtu.be/qfBhsTabWN0"
                    },
                    {
                        name: "Sentadilla con Salto",
                        subOrder: 2,
                        sets: 1,
                        reps: "15",
                        isEMOMItem: true,
                        videoUrl: "https://www.youtube.com/watch?v=1-Mum4hyIJ0"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/qfBhsTabWN0"
            },
            {
                order: 4,
                name: "Circuito",
                isSuperset: true,
                circuitDetails: {
                    totalRounds: 2,
                    restBetweenExercisesSeconds: 15,
                    restBetweenRoundsSeconds: 0
                },
                items: [
                    {
                        name: "Flexiones / Push Ups",
                        subOrder: 1,
                        sets: 1,
                        reps: "45s",
                        isCircuitItem: true,
                        videoUrl: "https://www.youtube.com/watch?v=GFUw7S0wDxk"
                    },
                    {
                        name: "Remo en TRX / Anillas",
                        subOrder: 2,
                        sets: 1,
                        reps: "45s",
                        isCircuitItem: true,
                        videoUrl: "https://www.youtube.com/watch?v=ZVM4-F0ZF0w"
                    },
                    {
                        name: "Plancha - Normal",
                        subOrder: 3,
                        sets: 1,
                        reps: "45s",
                        isCircuitItem: true,
                        videoUrl: "https://youtu.be/DQ4wYExQRJo"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=GFUw7S0wDxk"
            }
        ]
    },
    "dia2": {
        name: "Torso Completo (Copia)",
        exercises: [
            {
                order: 1,
                name: "Press Banca con Barra",
                sets: 3,
                reps: "10-12",
                rest: "60s",
                notes: "",
                videoUrl: "https://youtu.be/PKpsrFS2uac"
            },
            {
                order: 2,
                name: "Press Militar con Barra de Pie",
                isSuperset: true,
                items: [
                    {
                        name: "Press Militar con Barra de Pie",
                        subOrder: 1,
                        sets: 3,
                        reps: "10-12",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/watch?v=idnuMZx6mS0"
                    },
                    {
                        name: "Elevaciones Laterales con Mancuernas",
                        subOrder: 2,
                        sets: 3,
                        reps: "15",
                        rest: "90s",
                        videoUrl: "https://youtu.be/rhmW_fhB4cs"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=idnuMZx6mS0"
            },
            {
                order: 3,
                name: "EMOM",
                isSuperset: true,
                isEMOM: true,
                emomDetails: {
                    totalIntervals: 8,
                    workIntervalSeconds: 40
                },
                items: [
                    {
                        name: "Cuerpo Libre - Cardio - Burpee Completo",
                        subOrder: 1,
                        sets: 1,
                        reps: "5",
                        isEMOMItem: true,
                        videoUrl: "https://youtu.be/qfBhsTabWN0"
                    },
                    {
                        name: "Sentadilla con Salto",
                        subOrder: 2,
                        sets: 1,
                        reps: "15",
                        isEMOMItem: true,
                        videoUrl: "https://www.youtube.com/watch?v=1-Mum4hyIJ0"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/qfBhsTabWN0"
            },
            {
                order: 4,
                name: "Circuito",
                isSuperset: true,
                circuitDetails: {
                    totalRounds: 2,
                    restBetweenExercisesSeconds: 15,
                    restBetweenRoundsSeconds: 0
                },
                items: [
                    {
                        name: "Flexiones / Push Ups",
                        subOrder: 1,
                        sets: 1,
                        reps: "45s",
                        isCircuitItem: true,
                        videoUrl: "https://www.youtube.com/watch?v=GFUw7S0wDxk"
                    },
                    {
                        name: "Remo en TRX / Anillas",
                        subOrder: 2,
                        sets: 1,
                        reps: "45s",
                        isCircuitItem: true,
                        videoUrl: "https://www.youtube.com/watch?v=ZVM4-F0ZF0w"
                    },
                    {
                        name: "Plancha - Normal",
                        subOrder: 3,
                        sets: 1,
                        reps: "45s",
                        isCircuitItem: true,
                        videoUrl: "https://youtu.be/DQ4wYExQRJo"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=GFUw7S0wDxk"
            }
        ]
    }
};

const exerciseAlternatives = {
    "Hip Thrust con Barra": [
        { name: "Press Inclinado con Mancuernas", videoUrl: "https://youtu.be/ZE4M73kXB5A" }
    ],
    "Press Banca con Barra": [
        { name: "Press Inclinado con Mancuernas", videoUrl: "https://youtu.be/ZE4M73kXB5A" }
    ]
};

console.log("Datos de rutina cargados desde el creador.");
// Export if using modules in the target app, or remove if it's a simple script include
// export { workoutData, exerciseAlternatives };
