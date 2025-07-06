// Contenido de app_datos.js

// =================================================================================
// DATOS DE LA RUTINA (3 DÍAS)
// =================================================================================
const workoutData = {
    "dia1": {
        name: "Pierna Completa",
        exercises: [
            {
                order: 1,
                name: "Hack Squat",
                sets: 4,
                reps: "6, 6, 10, 10",
                rest: "120s",
                notes: "",
                videoUrl: ""
            },
            {
                order: 2,
                name: "Prensa Inclinada 45",
                sets: 4,
                reps: "12, 10, 8, 15",
                rest: "90s",
                notes: "",
                videoUrl: ""
            },
            {
                order: 3,
                name: "Curl Femoral en Máquina",
                isSuperset: true,
                items: [
                    {
                        name: "Curl Femoral en Máquina",
                        subOrder: 1,
                        sets: 3,
                        reps: "12",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/watch?v=Zhnhz1r_u-Y"
                    },
                    {
                        name: "Zancadas Caminando con Mancuernas/Kettlebells - Cuádriceps",
                        subOrder: 2,
                        sets: 3,
                        reps: "16",
                        rest: "90s",
                        videoUrl: ""
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=Zhnhz1r_u-Y"
            },
            {
                order: 4,
                name: "Aductor en Maquina",
                sets: 3,
                reps: "12",
                rest: "60s",
                notes: "",
                videoUrl: ""
            },
            {
                order: 5,
                name: "Patada de Glúteo en Hold en Banco",
                sets: 2,
                reps: "10",
                rest: "60s",
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=JfJPwDmzyKM"
            }
        ]
    },
    "dia2": {
        name: "Torso Completo",
        exercises: [
            {
                order: 1,
                name: "Dominadas Supinas / Chin Ups",
                isSuperset: true,
                items: [
                    {
                        name: "Dominadas Supinas / Chin Ups",
                        subOrder: 1,
                        sets: 2,
                        reps: "5",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/watch?v=dN5DqMhO18s"
                    },
                    {
                        name: "Flexiones / Push Ups",
                        subOrder: 2,
                        sets: 2,
                        reps: "5",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/watch?v=GFUw7S0wDxk"
                    }
                ],
                notes: "Te pongo 5 repeticiones, pero la idea es que hagas las máximas repeticiones posibles en las 2 series con tu peso corporal y las apuntes. ",
                videoUrl: "https://www.youtube.com/watch?v=dN5DqMhO18s"
            },
            {
                order: 2,
                name: "Remo en Barra T",
                sets: 3,
                reps: "8, 8, 12",
                rest: "90s",
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=AgxCPp37waQ"
            },
            {
                order: 3,
                name: "Press Militar Sentado con Mancuernas",
                sets: 3,
                reps: "8, 8, 12",
                rest: "90s",
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=_IMpMCr87Cg"
            },
            {
                order: 4,
                name: "Jalón al Pecho en Polea",
                isSuperset: true,
                items: [
                    {
                        name: "Jalón al Pecho en Polea",
                        subOrder: 1,
                        sets: 3,
                        reps: "10",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/GYIhmy1P4vY"
                    },
                    {
                        name: "Elevaciones Laterales con Mancuernas",
                        subOrder: 2,
                        sets: 3,
                        reps: "12",
                        rest: "90s",
                        videoUrl: "https://youtu.be/rhmW_fhB4cs"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/GYIhmy1P4vY"
            },
            {
                order: 5,
                name: "EMOM 8 min",
                isSuperset: true,
                isEMOM: true,
                emomDetails: {
                    totalIntervals: 8,
                    workIntervalSeconds: 45
                },
                items: [
                    {
                        name: "Fondos en Banco",
                        subOrder: 1,
                        sets: 1,
                        reps: "12",
                        isEMOMItem: true,
                        videoUrl: "https://youtu.be/NSB_HrDwd6I"
                    },
                    {
                        name: "Curl Martillo con Mancuernas",
                        subOrder: 2,
                        sets: 1,
                        reps: "10",
                        isEMOMItem: true,
                        videoUrl: "https://youtu.be/fcFsPoJY9lg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/NSB_HrDwd6I"
            }
        ]
    },
    "dia3": {
        name: "Pierna Foco Glúteo",
        exercises: [
            {
                order: 1,
                name: "Hip Thrust con Barra",
                sets: 3,
                reps: "8, 8, 12",
                rest: "120s",
                notes: "",
                videoUrl: "https://youtu.be/sbl1qYdkzUc"
            },
            {
                order: 2,
                name: "Sentadilla Búlgara con Mancuerna",
                sets: 4,
                reps: "12, 10, 8, 15",
                rest: "90s",
                notes: "Puedes hacerlas en multipower",
                videoUrl: "https://youtu.be/kA6bHiDdTO4"
            },
            {
                order: 3,
                name: "Step Up Unilateral en Step con Mancuerna/Kettlebell",
                sets: 3,
                reps: "10",
                rest: "90s",
                notes: "Puedes hacerlas en multipower",
                videoUrl: ""
            },
            {
                order: 4,
                name: "EMOM 8 min",
                isSuperset: true,
                isEMOM: true,
                emomDetails: {
                    totalIntervals: 8,
                    workIntervalSeconds: 60
                },
                items: [
                    {
                        name: "Zancadas Caminando con Mancuernas/Kettlebells",
                        subOrder: 1,
                        sets: 1,
                        reps: "12",
                        isEMOMItem: true,
                        videoUrl: "https://youtu.be/7tRy9X0ibnk"
                    },
                    {
                        name: "Swing Ruso con Kettlebell",
                        subOrder: 2,
                        sets: 1,
                        reps: "12",
                        isEMOMItem: true,
                        videoUrl: ""
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/7tRy9X0ibnk"
            }
        ]
    }
};

const exerciseAlternatives = {
    "Hack Squat": [
        { name: "Sentadilla Trasera en Multipower", videoUrl: "https://youtu.be/la-dqygoIuk" }
    ],
    "Remo en Barra T": [
        { name: "Remo con Mancuerna Unilateral", videoUrl: "https://youtu.be/EPXL9QIasLM" }
    ]
};

console.log("Datos de rutina cargados desde el creador.");
// Export if using modules in the target app, or remove if it's a simple script include
// export { workoutData, exerciseAlternatives };
