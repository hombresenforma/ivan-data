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
                videoUrl: "https://www.youtube.com/watch?v=6teL-OyXuQsThruster"
            },
            {
                order: 2,
                name: "Prensa Inclinada 45",
                sets: 3,
                reps: "12, 10, 8",
                rest: "120s",
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=IqjbBRNqJpsPrensa"
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
                        notes: "undefined",
                        videoUrl: "https://www.youtube.com/watch?v=Zhnhz1r_u-YCurl"

                    },
                    {
                        name: "Zancadas Caminando con Mancuernas/Kettlebells - Cuádriceps",
                        subOrder: 2,
                        sets: 3,
                        reps: "16",
                        notes: "",
                        videoUrl: "https://youtu.be/7tRy9X0ibnkZancadas"
                        ,rest: "90s"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=Zhnhz1r_u-YCurl"
            },
            {
                order: 4,
                name: "Aductor en Maquina",
                sets: 3,
                reps: "12",
                rest: "60s",
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=CfTZfTILu3UAdd"
            }
        ]
    },
    "dia2": {
        name: "Torso Completo",
        exercises: [
            {
                order: 1,
                name: "Remo en Barra T",
                sets: 3,
                reps: "8, 8, 12",
                rest: "90s",
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=AgxCPp37waQRemo"
            },
            {
                order: 2,
                name: "Press Militar Sentado con Mancuernas",
                sets: 3,
                reps: "8, 8, 12",
                rest: "90s",
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=_IMpMCr87Cg&list=PLDmmv3PadX2NuaxMhWe4DMVBnkUuHymCK&index=187Press"
            },
            {
                order: 3,
                name: "Jalón al Pecho en Polea",
                isSuperset: true,
                items: [
                    {
                        name: "Jalón al Pecho en Polea",
                        subOrder: 1,
                        sets: 3,
                        reps: "10",
                        isSupersetStart: true,
                        notes: "undefined",
                        videoUrl: "https://youtu.be/GYIhmy1P4vYJalón"

                    },
                    {
                        name: "Elevaciones Laterales con Mancuernas",
                        subOrder: 2,
                        sets: 3,
                        reps: "12",
                        notes: "",
                        videoUrl: "https://youtu.be/rhmW_fhB4csElevaciones"
                        ,rest: "90s"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/GYIhmy1P4vYJalón"
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
                        subOrder: 1,
                        name: "Fondos en Banco",
                        sets: 1,
                        reps: "12",
                        isEMOMItem: true,
                        videoUrl: "https://youtu.be/NSB_HrDwd6IFondos"
                    },
                    {
                        subOrder: 2,
                        name: "Curl Martillo con Mancuernas",
                        sets: 1,
                        reps: "10",
                        isEMOMItem: true,
                        videoUrl: "https://youtu.be/fcFsPoJY9lgCurl"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/NSB_HrDwd6IFondos"
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
                videoUrl: "https://youtu.be/sbl1qYdkzUcHip"
            },
            {
                order: 2,
                name: "Sentadilla Búlgara con Mancuerna",
                sets: 3,
                reps: "8",
                rest: "90s",
                notes: "Puedes hacerlas en multipower",
                videoUrl: "https://youtu.be/kA6bHiDdTO4Sentadilla"
            },
            {
                order: 3,
                name: "Step Up Unilateral en Step con Mancuerna/Kettlebell",
                sets: 3,
                reps: "10",
                rest: "90s",
                notes: "Puedes hacerlas en multipower",
                videoUrl: "https://youtu.be/cabSAbO0YLYSplit"
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
                        subOrder: 1,
                        name: "Zancadas Caminando con Mancuernas/Kettlebells",
                        sets: 1,
                        reps: "12",
                        isEMOMItem: true,
                        videoUrl: "https://youtu.be/xyl28TxLlsMMZancadas"
                    },
                    {
                        subOrder: 2,
                        name: "Swing Ruso con Kettlebell",
                        sets: 1,
                        reps: "12",
                        isEMOMItem: true,
                        videoUrl: "https://youtu.be/eKN0tj8q6QcSwing"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/xyl28TxLlsMMZancadas"
            }
        ]
    }
};

const exerciseAlternatives = {
    "Hack Squat": [
        { name: "Sentadilla Trasera en Multipower", videoUrl: "https://youtu.be/la-dqygoIukSentadilla" }
    ],
    "Remo en Barra T": [
        { name: "Remo con Mancuerna Unilateral", videoUrl: "https://youtu.be/EPXL9QIasLMRemo" }
    ]
};
// =================================================================================
// FIN DE DATOS DE LA RUTINA Y ALTERNATIVAS
// =================================================================================
console.log("Datos de rutina cargados desde el creador. Alternativas actualizadas con videos.");
