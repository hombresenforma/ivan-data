// Contenido de app_datos.js

// =================================================================================
// DATOS DE LA RUTINA (5 DÍAS)
// =================================================================================
const workoutData = {
    "dia1": {
        name: "Torso Completo",
        exercises: [
            {
                order: 1,
                name: "Press Militar Sentado con Mancuernas",
                sets: 4,
                reps: "8, 8, 8, 12",
                rest: "120s",
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=_IMpMCr87Cg",
                imageUrl: "https://i.ytimg.com/vi/_IMpMCr87Cg/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Dominadas / Pull Ups Supinación (Chin Up)",
                sets: 3,
                reps: "8, 8, 12",
                rest: "120s",
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=dN5DqMhO18s",
                imageUrl: "https://i.ytimg.com/vi/dN5DqMhO18s/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Press en Máquina",
                isSuperset: true,
                items: [
                    {
                        name: "Press en Máquina",
                        subOrder: 1,
                        sets: 3,
                        reps: "10-12",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/watch?v=QrnVDLSBdMo",
                        imageUrl: "https://i.ytimg.com/vi/QrnVDLSBdMo/mqdefault.jpg"
                    },
                    {
                        name: "Remo Seal con Mancuernas",
                        subOrder: 2,
                        sets: 3,
                        reps: "10-12",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/shorts/6tLfn99dO8o",
                        imageUrl: "https://i.ytimg.com/vi/6tLfn99dO8o/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=QrnVDLSBdMo",
                imageUrl: "https://i.ytimg.com/vi/QrnVDLSBdMo/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Fondos en Paralelas para Pecho",
                isSuperset: true,
                items: [
                    {
                        name: "Fondos en Paralelas para Pecho",
                        subOrder: 1,
                        sets: 3,
                        reps: "10",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/W9TfhUAvteE",
                        imageUrl: "https://i.ytimg.com/vi/W9TfhUAvteE/mqdefault.jpg"
                    },
                    {
                        name: "Curl con Barra Z",
                        subOrder: 2,
                        sets: 3,
                        reps: "10",
                        rest: "90s",
                        videoUrl: "https://youtu.be/4gYLTjNaTmw",
                        imageUrl: "https://i.ytimg.com/vi/4gYLTjNaTmw/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/W9TfhUAvteE",
                imageUrl: "https://i.ytimg.com/vi/W9TfhUAvteE/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Circuito Metabólico",
                isSuperset: true,
                isEMOM: true,
                emomDetails: {
                    totalIntervals: 10,
                    workIntervalSeconds: 60
                },
                items: [
                    {
                        name: "Kettlebell - Clean Alterno",
                        subOrder: 1,
                        sets: 1,
                        reps: "10",
                        isEMOMItem: true,
                        videoUrl: "https://youtu.be/xBOoNSv9LlY",
                        imageUrl: "https://i.ytimg.com/vi/xBOoNSv9LlY/mqdefault.jpg"
                    },
                    {
                        name: "Remo en TRX / Anillas",
                        subOrder: 2,
                        sets: 1,
                        reps: "15",
                        isEMOMItem: true,
                        videoUrl: "https://www.youtube.com/watch?v=ZVM4-F0ZF0w",
                        imageUrl: "https://i.ytimg.com/vi/ZVM4-F0ZF0w/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/xBOoNSv9LlY",
                imageUrl: "https://i.ytimg.com/vi/xBOoNSv9LlY/mqdefault.jpg"
            }
        ]
    },
    "dia2": {
        name: "Pierna Completa",
        exercises: [
            {
                order: 1,
                name: "Sentadilla Split en Multipower",
                sets: 4,
                reps: "8, 8, 8, 12",
                rest: "120s",
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=Nyk_I5-_tIA",
                imageUrl: "https://i.ytimg.com/vi/Nyk_I5-_tIA/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Prensa Inclinada 45º",
                sets: 3,
                reps: "8, 8, 12",
                rest: "120s",
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=IqjbBRNqJps",
                imageUrl: "https://i.ytimg.com/vi/IqjbBRNqJps/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Extensión de Cuádriceps en Máquina",
                isSuperset: true,
                items: [
                    {
                        name: "Extensión de Cuádriceps en Máquina",
                        subOrder: 1,
                        sets: 3,
                        reps: "10-12",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/watch?v=k1Nn0cJOMng",
                        imageUrl: "https://i.ytimg.com/vi/k1Nn0cJOMng/mqdefault.jpg"
                    },
                    {
                        name: "Sentadilla Goblet con Mancuerna/Kettlebell",
                        subOrder: 2,
                        sets: 3,
                        reps: "10-12",
                        rest: "90s",
                        videoUrl: "https://youtu.be/xPVfWX_9ytk",
                        imageUrl: "https://i.ytimg.com/vi/xPVfWX_9ytk/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=k1Nn0cJOMng",
                imageUrl: "https://i.ytimg.com/vi/k1Nn0cJOMng/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Circuito Metabólico",
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
                        reps: "16",
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
                        name: "Cuerpo Libre - Cardio - Burpee sin Flexión",
                        subOrder: 3,
                        sets: 1,
                        reps: "8",
                        isEMOMItem: true,
                        videoUrl: "https://youtu.be/_liq4fAscDU",
                        imageUrl: "https://i.ytimg.com/vi/_liq4fAscDU/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/7tRy9X0ibnk",
                imageUrl: "https://i.ytimg.com/vi/7tRy9X0ibnk/mqdefault.jpg"
            }
        ]
    },
    "dia3": {
        name: "Torso Repaso",
        exercises: [
            {
                order: 1,
                name: "Press Banca Inclinado en Multipower",
                sets: 4,
                reps: "8, 8, 8, 12",
                rest: "120s",
                notes: "",
                videoUrl: "https://youtu.be/3GS7EjN7KSk",
                imageUrl: "https://i.ytimg.com/vi/3GS7EjN7KSk/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Remo Unilat con Mancuerna/KTB (Explicado)",
                sets: 3,
                reps: "8, 8, 12",
                rest: "120s",
                notes: "",
                videoUrl: "https://youtu.be/uH9Hg4nWOG8",
                imageUrl: "https://i.ytimg.com/vi/uH9Hg4nWOG8/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Curl con Mancuernas Sentado en Banco Inclinado",
                isSuperset: true,
                items: [
                    {
                        name: "Curl con Mancuernas Sentado en Banco Inclinado",
                        subOrder: 1,
                        sets: 3,
                        reps: "10-12",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/S32a3nYiWko",
                        imageUrl: "https://i.ytimg.com/vi/S32a3nYiWko/mqdefault.jpg"
                    },
                    {
                        name: "Flexiones / Push Ups al Banco",
                        subOrder: 2,
                        sets: 3,
                        reps: "15-20",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/watch?v=_mby7bboEUw",
                        imageUrl: "https://i.ytimg.com/vi/_mby7bboEUw/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/S32a3nYiWko",
                imageUrl: "https://i.ytimg.com/vi/S32a3nYiWko/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Circuito Metabólico",
                isSuperset: true,
                isEMOM: true,
                emomDetails: {
                    totalIntervals: 12,
                    workIntervalSeconds: 60
                },
                items: [
                    {
                        name: "Curl Martillo con Mancuernas",
                        subOrder: 1,
                        sets: 1,
                        reps: "12",
                        isEMOMItem: true,
                        videoUrl: "https://youtu.be/fcFsPoJY9lg",
                        imageUrl: "https://i.ytimg.com/vi/fcFsPoJY9lg/mqdefault.jpg"
                    },
                    {
                        name: "Remo Renegade Alterno con Mancuernas",
                        subOrder: 2,
                        sets: 1,
                        reps: "16",
                        isEMOMItem: true,
                        videoUrl: "https://www.youtube.com/watch?v=FjwFzYXSK70",
                        imageUrl: "https://i.ytimg.com/vi/FjwFzYXSK70/mqdefault.jpg"
                    },
                    {
                        name: "Kettlebell - Thruster",
                        subOrder: 3,
                        sets: 1,
                        reps: "10",
                        isEMOMItem: true,
                        videoUrl: "https://youtube.com/shorts/52JAS52W8Hw",
                        imageUrl: "https://i.ytimg.com/vi/52JAS52W8Hw/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/fcFsPoJY9lg",
                imageUrl: "https://i.ytimg.com/vi/fcFsPoJY9lg/mqdefault.jpg"
            }
        ]
    },
    "dia4": {
        name: "Cardio y Core",
        exercises: [
            {
                order: 1,
                name: "Interválico Intensivo",
                isSuperset: true,
                circuitDetails: {
                    totalRounds: 6,
                    restBetweenExercisesSeconds: 3,
                    restBetweenRoundsSeconds: 3
                },
                items: [
                    {
                        name: "CARDIO - Correr (Sprint)",
                        subOrder: 1,
                        sets: 1,
                        reps: "30s",
                        isCircuitItem: true,
                        videoUrl: "https://youtu.be/KKvRtNn904g",
                        imageUrl: "https://i.ytimg.com/vi/KKvRtNn904g/mqdefault.jpg"
                    },
                    {
                        name: "CARDIO - Correr (Suave)",
                        subOrder: 2,
                        sets: 1,
                        reps: "30s",
                        isCircuitItem: true,
                        videoUrl: "https://youtu.be/KKvRtNn904g",
                        imageUrl: "https://i.ytimg.com/vi/KKvRtNn904g/mqdefault.jpg"
                    }
                ],
                notes: "Puedes hacerlo al aire libre si lo prefieres.",
                videoUrl: "https://youtu.be/KKvRtNn904g",
                imageUrl: "https://i.ytimg.com/vi/KKvRtNn904g/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Core y Lumbar",
                isSuperset: true,
                circuitDetails: {
                    totalRounds: 3,
                    restBetweenExercisesSeconds: 10,
                    restBetweenRoundsSeconds: 60
                },
                items: [
                    {
                        name: "Crunch - Flexión de Cadera",
                        subOrder: 1,
                        sets: 1,
                        reps: "40s",
                        isCircuitItem: true,
                        videoUrl: "https://youtu.be/XJFii9NYHNs",
                        imageUrl: "https://i.ytimg.com/vi/XJFii9NYHNs/mqdefault.jpg"
                    },
                    {
                        name: "Plancha - Lateral elevando Pierna",
                        subOrder: 2,
                        sets: 1,
                        reps: "40s",
                        isCircuitItem: true,
                        videoUrl: "https://youtu.be/-3PDE3ztwzU",
                        imageUrl: "https://i.ytimg.com/vi/-3PDE3ztwzU/mqdefault.jpg"
                    },
                    {
                        name: "Plancha - Lateral elevando Pierna",
                        subOrder: 3,
                        sets: 1,
                        reps: "40s",
                        isCircuitItem: true,
                        videoUrl: "https://youtu.be/-3PDE3ztwzU",
                        imageUrl: "https://i.ytimg.com/vi/-3PDE3ztwzU/mqdefault.jpg"
                    },
                    {
                        name: "Crunch - Extensión Lumbar",
                        subOrder: 5,
                        sets: 1,
                        reps: "40s",
                        isCircuitItem: true,
                        videoUrl: "https://youtu.be/BJTJdFViRsU",
                        imageUrl: "https://i.ytimg.com/vi/BJTJdFViRsU/mqdefault.jpg"
                    },
                    {
                        name: "Funcional - Bird Dog",
                        subOrder: 6,
                        sets: 1,
                        reps: "40s",
                        isCircuitItem: true,
                        videoUrl: "https://youtu.be/KizkN2buzMw",
                        imageUrl: "https://i.ytimg.com/vi/KizkN2buzMw/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/XJFii9NYHNs",
                imageUrl: "https://i.ytimg.com/vi/XJFii9NYHNs/mqdefault.jpg"
            }
        ]
    },
    "dia5": {
        name: "Descarga (Foam Roller)",
        exercises: [
            {
                order: 1,
                name: "Movilidad Articular",
                isSuperset: true,
                circuitDetails: {
                    totalRounds: 2,
                    restBetweenExercisesSeconds: 5,
                    restBetweenRoundsSeconds: 3
                },
                items: [
                    {
                        name: "Movilidad - Columna",
                        subOrder: 1,
                        sets: 1,
                        reps: "30s",
                        isCircuitItem: true,
                        videoUrl: "https://youtu.be/48_aYaSLNRY",
                        imageUrl: "https://i.ytimg.com/vi/48_aYaSLNRY/mqdefault.jpg"
                    },
                    {
                        name: "Movilidad - Activación de Escápulas",
                        subOrder: 2,
                        sets: 1,
                        reps: "30s",
                        isCircuitItem: true,
                        videoUrl: "https://youtu.be/6Kj_rg_7tYQ",
                        imageUrl: "https://i.ytimg.com/vi/6Kj_rg_7tYQ/mqdefault.jpg"
                    },
                    {
                        name: "Movilidad - De Cadera",
                        subOrder: 3,
                        sets: 1,
                        reps: "30s",
                        isCircuitItem: true,
                        videoUrl: "https://youtu.be/7TmNRUP7N_0",
                        imageUrl: "https://i.ytimg.com/vi/7TmNRUP7N_0/mqdefault.jpg"
                    }
                ],
                notes: "Exagerar las curvaturas.",
                videoUrl: "https://youtu.be/48_aYaSLNRY",
                imageUrl: "https://i.ytimg.com/vi/48_aYaSLNRY/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Liberación Miofascial - Gastrocnemios",
                isSuperset: true,
                items: [
                    {
                        name: "Liberación Miofascial - Gastrocnemios",
                        subOrder: 1,
                        sets: 1,
                        reps: "10",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/juUqLPfhF2I",
                        imageUrl: "https://i.ytimg.com/vi/juUqLPfhF2I/mqdefault.jpg"
                    },
                    {
                        name: "Liberación Miofascial - Isquiosurales",
                        subOrder: 2,
                        sets: 1,
                        reps: "10",
                        videoUrl: "https://youtu.be/wfP97EW_3B0",
                        imageUrl: "https://i.ytimg.com/vi/wfP97EW_3B0/mqdefault.jpg"
                    },
                    {
                        name: "Liberación Miofascial - Glúteo y Piramidal",
                        subOrder: 3,
                        sets: 1,
                        reps: "10",
                        videoUrl: "https://youtu.be/H4TxDBt9Oew",
                        imageUrl: "https://i.ytimg.com/vi/H4TxDBt9Oew/mqdefault.jpg"
                    },
                    {
                        name: "Liberación Miofascial - Cuádriceps Distal",
                        subOrder: 4,
                        sets: 1,
                        reps: "10",
                        videoUrl: "https://youtu.be/q27nZmlg_x8",
                        imageUrl: "https://i.ytimg.com/vi/q27nZmlg_x8/mqdefault.jpg"
                    },
                    {
                        name: "Liberación Miofascial - Iliopsoas y Cuádriceps",
                        subOrder: 5,
                        sets: 1,
                        reps: "10",
                        videoUrl: "https://youtu.be/4Ic63y0cRgQ",
                        imageUrl: "https://i.ytimg.com/vi/4Ic63y0cRgQ/mqdefault.jpg"
                    },
                    {
                        name: "Liberación Miofascial - TFL",
                        subOrder: 6,
                        sets: 1,
                        reps: "10",
                        videoUrl: "https://youtu.be/6bO-z38wmdk",
                        imageUrl: "https://i.ytimg.com/vi/6bO-z38wmdk/mqdefault.jpg"
                    },
                    {
                        name: "Liberación Miofascial - Zona Lumbar",
                        subOrder: 7,
                        sets: 1,
                        reps: "10",
                        videoUrl: "https://youtu.be/iR4yp5nhlpA",
                        imageUrl: "https://i.ytimg.com/vi/iR4yp5nhlpA/mqdefault.jpg"
                    },
                    {
                        name: "Liberación Miofascial - Zona Torácica",
                        subOrder: 8,
                        sets: 1,
                        reps: "10",
                        notes: "Liberación Miofascial. Busca un punto de dolor (punto gatillo) e insiste en pasadas por esa zona. Entre 10 y 20 pasadas por zona. ",
                        rest: "60s",
                        videoUrl: "https://youtu.be/hESaRK6iaBg",
                        imageUrl: "https://i.ytimg.com/vi/hESaRK6iaBg/mqdefault.jpg"
                    }
                ],
                notes: "Liberación Miofascial. Busca un punto de dolor (punto gatillo) e insiste en pasadas por esa zona. Entre 10 y 20 pasadas por zona. ",
                videoUrl: "https://youtu.be/juUqLPfhF2I",
                imageUrl: "https://i.ytimg.com/vi/juUqLPfhF2I/mqdefault.jpg"
            }
        ]
    }
};

const exerciseAlternatives = {
    "Press Militar Sentado con Mancuernas": [
        { name: "Press Militar en Multipower", videoUrl: "https://www.youtube.com/watch?v=iATqshmFPnI", imageUrl: "https://i.ytimg.com/vi/iATqshmFPnI/mqdefault.jpg" }
    ],
    "Dominadas / Pull Ups Supinación (Chin Up)": [
        { name: "Dominadas Australianas con Pies en Banco", videoUrl: "https://youtu.be/WqoNa74DieE", imageUrl: "https://i.ytimg.com/vi/WqoNa74DieE/mqdefault.jpg" }
    ],
    "Prensa Inclinada 45º": [
        { name: "Hack Squat / Prensa Hack", videoUrl: "https://www.youtube.com/watch?v=6teL-OyXuQs", imageUrl: "https://i.ytimg.com/vi/6teL-OyXuQs/mqdefault.jpg" }
    ],
    "Press Banca Inclinado en Multipower": [
        { name: "Press Banca en Multipower", videoUrl: "https://youtu.be/w-5ovE5O5iU", imageUrl: "https://i.ytimg.com/vi/w-5ovE5O5iU/mqdefault.jpg" }
    ],
    "Remo Unilat con Mancuerna/KTB (Explicado)": [
        { name: "Remo con Barra", videoUrl: "https://youtu.be/MjnZ52mZgT0", imageUrl: "https://i.ytimg.com/vi/MjnZ52mZgT0/mqdefault.jpg" }
    ]
};

console.log("Datos de rutina cargados desde el creador.");
// Export if using modules in the target app, or remove if it's a simple script include
// export { workoutData, exerciseAlternatives };
