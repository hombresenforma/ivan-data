// Contenido de app_datos.js

// =================================================================================
// DATOS DE LA RUTINA (4 DÍAS)
// =================================================================================
const workoutData = {
    "dia1": {
        name: "Pierna Completa",
        exercises: [
            {
                order: 1,
                name: "Sentadilla Trasera con Barra",
                sets: 4,
                reps: "8, 8, 8, 20",
                rest: "120s",
                notes: "",
                videoUrl: "https://youtu.be/FK5XU_gaxAE",
                imageUrl: "https://i.ytimg.com/vi/FK5XU_gaxAE/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Hip Thrust con Barra",
                sets: 3,
                reps: "10",
                rest: "120s",
                notes: "",
                videoUrl: "https://youtu.be/sbl1qYdkzUc",
                imageUrl: "https://i.ytimg.com/vi/sbl1qYdkzUc/mqdefault.jpg"
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
                        videoUrl: "https://www.youtube.com/watch?v=Zhnhz1r_u-Y",
                        imageUrl: "https://i.ytimg.com/vi/Zhnhz1r_u-Y/mqdefault.jpg"
                    },
                    {
                        name: "Sentadilla Goblet con Mancuerna/Kettlebell",
                        subOrder: 2,
                        sets: 3,
                        reps: "12",
                        rest: "90s",
                        videoUrl: "https://youtu.be/xPVfWX_9ytk",
                        imageUrl: "https://i.ytimg.com/vi/xPVfWX_9ytk/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=Zhnhz1r_u-Y",
                imageUrl: "https://i.ytimg.com/vi/Zhnhz1r_u-Y/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Prensa Inclinada 45º",
                sets: 3,
                reps: "8",
                rest: "60s",
                notes: "1 DROPSET en todas las series. (8+8)",
                videoUrl: "https://www.youtube.com/watch?v=IqjbBRNqJps",
                imageUrl: "https://i.ytimg.com/vi/IqjbBRNqJps/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Metabólico Final",
                isSuperset: true,
                isEMOM: true,
                emomDetails: {
                    totalIntervals: 12,
                    workIntervalSeconds: 60
                },
                items: [
                    {
                        name: "Zancadas Caminando con Mancuernas/Kettlebells",
                        subOrder: 1,
                        sets: 1,
                        reps: "12",
                        isEMOMItem: true,
                        videoUrl: "https://youtu.be/7tRy9X0ibnk",
                        imageUrl: "https://i.ytimg.com/vi/7tRy9X0ibnk/mqdefault.jpg"
                    },
                    {
                        name: "Kettlebell - Swing Ruso",
                        subOrder: 2,
                        sets: 1,
                        reps: "15",
                        isEMOMItem: true,
                        videoUrl: "https://youtu.be/eKN0tj8q6Qc",
                        imageUrl: "https://i.ytimg.com/vi/eKN0tj8q6Qc/mqdefault.jpg"
                    },
                    {
                        name: "Cuerpo Libre - Cardio - Sentadilla con Salto en Step",
                        subOrder: 3,
                        sets: 1,
                        reps: "12",
                        isEMOMItem: true,
                        videoUrl: "https://youtu.be/7ckSQy2BtWw",
                        imageUrl: "https://i.ytimg.com/vi/7ckSQy2BtWw/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/7tRy9X0ibnk",
                imageUrl: "https://i.ytimg.com/vi/7tRy9X0ibnk/mqdefault.jpg"
            }
        ]
    },
    "dia2": {
        name: "Torso Completo",
        exercises: [
            {
                order: 1,
                name: "Dominadas / Pull Ups Supinación (Chin Up)",
                isSuperset: true,
                items: [
                    {
                        name: "Dominadas / Pull Ups Supinación (Chin Up)",
                        subOrder: 1,
                        sets: 3,
                        reps: "6, 6, 10",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/watch?v=dN5DqMhO18s",
                        imageUrl: "https://i.ytimg.com/vi/dN5DqMhO18s/mqdefault.jpg"
                    },
                    {
                        name: "Floor Press con Mancuernas",
                        subOrder: 2,
                        sets: 3,
                        reps: "10",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/shorts/Iu02N3s7zgQ",
                        imageUrl: "https://i.ytimg.com/vi/Iu02N3s7zgQ/mqdefault.jpg"
                    }
                ],
                notes: "Puedes hacerlo en Multipower",
                videoUrl: "https://www.youtube.com/watch?v=dN5DqMhO18s",
                imageUrl: "https://i.ytimg.com/vi/dN5DqMhO18s/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Remo con Barra",
                sets: 4,
                reps: "8, 8, 8, 20",
                rest: "120s",
                notes: "Última serie CLUSTERS: 8 reps con mismo peso (al fallo). Seguido de series de 3-4 reps hasta completar 20 reps.",
                videoUrl: "https://youtu.be/MjnZ52mZgT0",
                imageUrl: "https://i.ytimg.com/vi/MjnZ52mZgT0/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Press Militar en Multipower",
                isSuperset: true,
                items: [
                    {
                        name: "Press Militar en Multipower",
                        subOrder: 1,
                        sets: 3,
                        reps: "12",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/watch?v=iATqshmFPnI",
                        imageUrl: "https://i.ytimg.com/vi/iATqshmFPnI/mqdefault.jpg"
                    },
                    {
                        name: "Face Pull en Polea Alta",
                        subOrder: 2,
                        sets: 3,
                        reps: "12",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/watch?v=tZN8KYDSCRo",
                        imageUrl: "https://i.ytimg.com/vi/tZN8KYDSCRo/mqdefault.jpg"
                    }
                ],
                notes: "Puedes hacerlo en Multipower",
                videoUrl: "https://www.youtube.com/watch?v=iATqshmFPnI",
                imageUrl: "https://i.ytimg.com/vi/iATqshmFPnI/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Elevaciones Laterales con Mancuernas",
                sets: 3,
                reps: "10",
                rest: "60s",
                notes: "Excéntrica en 3 segundos. No pares abajo",
                videoUrl: "https://youtu.be/rhmW_fhB4cs",
                imageUrl: "https://i.ytimg.com/vi/rhmW_fhB4cs/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Metabólico Final",
                isSuperset: true,
                isEMOM: true,
                emomDetails: {
                    totalIntervals: 12,
                    workIntervalSeconds: 60
                },
                items: [
                    {
                        name: "Thruster con Mancuernas",
                        subOrder: 1,
                        sets: 1,
                        reps: "12",
                        isEMOMItem: true,
                        videoUrl: "https://www.youtube.com/watch?v=5mTjKFubavs",
                        imageUrl: "https://i.ytimg.com/vi/5mTjKFubavs/mqdefault.jpg"
                    },
                    {
                        name: "Fondos en Banco",
                        subOrder: 2,
                        sets: 1,
                        reps: "15",
                        isEMOMItem: true,
                        videoUrl: "https://youtu.be/NSB_HrDwd6I",
                        imageUrl: "https://i.ytimg.com/vi/NSB_HrDwd6I/mqdefault.jpg"
                    },
                    {
                        name: "Remo en TRX / Anillas",
                        subOrder: 3,
                        sets: 1,
                        reps: "15",
                        isEMOMItem: true,
                        videoUrl: "https://www.youtube.com/watch?v=ZVM4-F0ZF0w",
                        imageUrl: "https://i.ytimg.com/vi/ZVM4-F0ZF0w/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=5mTjKFubavs",
                imageUrl: "https://i.ytimg.com/vi/5mTjKFubavs/mqdefault.jpg"
            }
        ]
    },
    "dia3": {
        name: "Fullbody",
        exercises: [
            {
                order: 1,
                name: "Sentadilla Búlgara con Mancuerna",
                sets: 4,
                reps: "6, 6, 6, 8",
                rest: "120s",
                notes: "Últimas serie DROPSETx2 DEJANDO MANCUERNAS. (8 reps, dejas 1 mancuerna 8 reps, dejas 1 mancuerna 8 reps)",
                videoUrl: "https://youtu.be/kA6bHiDdTO4",
                imageUrl: "https://i.ytimg.com/vi/kA6bHiDdTO4/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Press Militar con Barra de Pie",
                sets: 3,
                reps: "6, 6, 10",
                rest: "120s",
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=idnuMZx6mS0",
                imageUrl: "https://i.ytimg.com/vi/idnuMZx6mS0/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Jalón al Pecho en Polea",
                sets: 3,
                reps: "6, 6, 10",
                rest: "120s",
                notes: "",
                videoUrl: "https://youtu.be/GYIhmy1P4vY",
                imageUrl: "https://i.ytimg.com/vi/GYIhmy1P4vY/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Curl Martillo con Mancuernas",
                isSuperset: true,
                items: [
                    {
                        name: "Curl Martillo con Mancuernas",
                        subOrder: 1,
                        sets: 3,
                        reps: "10",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/fcFsPoJY9lg",
                        imageUrl: "https://i.ytimg.com/vi/fcFsPoJY9lg/mqdefault.jpg"
                    },
                    {
                        name: "Press Cerrado en Banco Inclinado con Mancuernas",
                        subOrder: 2,
                        sets: 3,
                        reps: "8",
                        rest: "90s",
                        videoUrl: "https://youtu.be/tdh7LSxUj1s",
                        imageUrl: "https://i.ytimg.com/vi/tdh7LSxUj1s/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/fcFsPoJY9lg",
                imageUrl: "https://i.ytimg.com/vi/fcFsPoJY9lg/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Patada de Glúteo en Hold en Banco",
                isSuperset: true,
                items: [
                    {
                        name: "Patada de Glúteo en Hold en Banco",
                        subOrder: 1,
                        sets: 3,
                        reps: "15, 12, 10",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/watch?v=JfJPwDmzyKM",
                        imageUrl: "https://i.ytimg.com/vi/JfJPwDmzyKM/mqdefault.jpg"
                    },
                    {
                        name: "Elevaciones Laterales con Mancuernas",
                        subOrder: 2,
                        sets: 3,
                        reps: "15, 12, 10",
                        rest: "90s",
                        videoUrl: "https://youtu.be/rhmW_fhB4cs",
                        imageUrl: "https://i.ytimg.com/vi/rhmW_fhB4cs/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=JfJPwDmzyKM",
                imageUrl: "https://i.ytimg.com/vi/JfJPwDmzyKM/mqdefault.jpg"
            },
            {
                order: 6,
                name: "Circuito Final",
                isSuperset: true,
                circuitDetails: {
                    totalRounds: 3,
                    restBetweenExercisesSeconds: 10,
                    restBetweenRoundsSeconds: 60
                },
                items: [
                    {
                        name: "Snatch + Thruster Unilat Alterno con Mancuerna",
                        subOrder: 1,
                        sets: 1,
                        reps: "30s",
                        isCircuitItem: true,
                        videoUrl: "https://www.youtube.com/shorts/jNbG4xt8zCs",
                        imageUrl: "https://i.ytimg.com/vi/jNbG4xt8zCs/mqdefault.jpg"
                    },
                    {
                        name: "Remo Renegade Alterno con Mancuernas",
                        subOrder: 2,
                        sets: 1,
                        reps: "30s",
                        isCircuitItem: true,
                        videoUrl: "https://www.youtube.com/watch?v=FjwFzYXSK70",
                        imageUrl: "https://i.ytimg.com/vi/FjwFzYXSK70/mqdefault.jpg"
                    },
                    {
                        name: "Hollow - Nivel 4",
                        subOrder: 3,
                        sets: 1,
                        reps: "30s",
                        isCircuitItem: true,
                        videoUrl: "https://youtu.be/RxFdlQ4oelM",
                        imageUrl: "https://i.ytimg.com/vi/RxFdlQ4oelM/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/jNbG4xt8zCs",
                imageUrl: "https://i.ytimg.com/vi/jNbG4xt8zCs/mqdefault.jpg"
            }
        ]
    },
    "dia4": {
        name: "Accesorios + HIIT",
        exercises: [
            {
                order: 1,
                name: "Step Up Unilateral al Cajón con Mancuerna/Kettlebell",
                sets: 4,
                reps: "10-12",
                rest: "90s",
                notes: "",
                videoUrl: "https://youtu.be/cabSAbO0YLY",
                imageUrl: "https://i.ytimg.com/vi/cabSAbO0YLY/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Press Militar en Landmine",
                isSuperset: true,
                items: [
                    {
                        name: "Press Militar en Landmine",
                        subOrder: 1,
                        sets: 3,
                        reps: "8-10",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/czeWFmHVKzM",
                        imageUrl: "https://i.ytimg.com/vi/czeWFmHVKzM/mqdefault.jpg"
                    },
                    {
                        name: "Sentadilla Sumo con Landmine",
                        subOrder: 2,
                        sets: 3,
                        reps: "15-20",
                        notes: "Puedes poner steps o discos para más profundidad",
                        rest: "90s",
                        videoUrl: "https://youtu.be/2F8_uwf5IlE",
                        imageUrl: "https://i.ytimg.com/vi/2F8_uwf5IlE/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/czeWFmHVKzM",
                imageUrl: "https://i.ytimg.com/vi/czeWFmHVKzM/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Sentadilla Split en Multipower",
                isSuperset: true,
                items: [
                    {
                        name: "Sentadilla Split en Multipower",
                        subOrder: 1,
                        sets: 3,
                        reps: "10",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/watch?v=Nyk_I5-_tIA",
                        imageUrl: "https://i.ytimg.com/vi/Nyk_I5-_tIA/mqdefault.jpg"
                    },
                    {
                        name: "Elevaciones Laterales con Mancuernas",
                        subOrder: 2,
                        sets: 3,
                        reps: "12-15",
                        rest: "90s",
                        videoUrl: "https://youtu.be/rhmW_fhB4cs",
                        imageUrl: "https://i.ytimg.com/vi/rhmW_fhB4cs/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=Nyk_I5-_tIA",
                imageUrl: "https://i.ytimg.com/vi/Nyk_I5-_tIA/mqdefault.jpg"
            },
            {
                order: 4,
                name: "HIIT",
                isSuperset: true,
                circuitDetails: {
                    totalRounds: 4,
                    restBetweenExercisesSeconds: 15,
                    restBetweenRoundsSeconds: 15
                },
                items: [
                    {
                        name: "Cuerpo Libre - Cardio - Step Up Lateral Alterno en Step",
                        subOrder: 1,
                        sets: 1,
                        reps: "45s",
                        isCircuitItem: true,
                        videoUrl: "https://youtu.be/N26TyhPhSRI",
                        imageUrl: "https://i.ytimg.com/vi/N26TyhPhSRI/mqdefault.jpg"
                    },
                    {
                        name: "Cardio - Press Dinámico con Landmine",
                        subOrder: 2,
                        sets: 1,
                        reps: "45s",
                        isCircuitItem: true,
                        videoUrl: "https://youtu.be/9_faYEjxCTU",
                        imageUrl: "https://i.ytimg.com/vi/9_faYEjxCTU/mqdefault.jpg"
                    },
                    {
                        name: "Cardio - Press Dinámico con Landmine",
                        subOrder: 3,
                        sets: 1,
                        reps: "45s",
                        isCircuitItem: true,
                        videoUrl: "https://youtu.be/9_faYEjxCTU",
                        imageUrl: "https://i.ytimg.com/vi/9_faYEjxCTU/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/N26TyhPhSRI",
                imageUrl: "https://i.ytimg.com/vi/N26TyhPhSRI/mqdefault.jpg"
            }
        ]
    }
};

const exerciseAlternatives = {
    "Sentadilla Trasera con Barra": [
        { name: "Sentadilla Trasera en Multipower", videoUrl: "https://youtu.be/la-dqygoIuk", imageUrl: "https://i.ytimg.com/vi/la-dqygoIuk/mqdefault.jpg" }
    ],
    "Hip Thrust con Barra": [
        { name: "Hack Squat / Prensa Hack", videoUrl: "https://www.youtube.com/watch?v=6teL-OyXuQs", imageUrl: "https://i.ytimg.com/vi/6teL-OyXuQs/mqdefault.jpg" }
    ],
    "Floor Press con Mancuernas": [
        { name: "Flexiones Tempo 1:1", videoUrl: "https://www.youtube.com/shorts/-9Md7Htla-o", imageUrl: "https://i.ytimg.com/vi/-9Md7Htla-o/mqdefault.jpg" }
    ],
    "Remo con Barra": [
        { name: "Remo en Barra T", videoUrl: "https://www.youtube.com/watch?v=AgxCPp37waQ", imageUrl: "https://i.ytimg.com/vi/AgxCPp37waQ/mqdefault.jpg" }
    ]
};

console.log("Datos de rutina cargados desde el creador.");
// Export if using modules in the target app, or remove if it's a simple script include
// export { workoutData, exerciseAlternatives };
