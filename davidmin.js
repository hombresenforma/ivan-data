// Contenido de app_datos.js

// =================================================================================
// DATOS DE LA RUTINA (3 DÍAS)
// =================================================================================
const workoutData = {
    "dia1": {
        name: "Fullbody 1",
        exercises: [
            {
                order: 1,
                name: "Flexiones sobre Mancuernas",
                isSuperset: true,
                items: [
                    {
                        name: "Flexiones sobre Mancuernas",
                        subOrder: 1,
                        sets: 2,
                        reps: "8",
                        isSupersetStart: true,
                        videoUrl: "",
                        imageUrl: ""
                    },
                    {
                        name: "Sentadilla Sumo con Mancuerna/Kettlebell",
                        subOrder: 2,
                        sets: 2,
                        reps: "12",
                        rest: "45s",
                        videoUrl: "https://youtu.be/ifBHyfgLe8k",
                        imageUrl: "https://i.ytimg.com/vi/ifBHyfgLe8k/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "",
                imageUrl: ""
            },
            {
                order: 2,
                name: "Press Banca Inclinado en Multipower",
                sets: 3,
                reps: "8",
                rest: "120s",
                notes: "",
                videoUrl: "https://youtu.be/3GS7EjN7KSk",
                imageUrl: "https://i.ytimg.com/vi/3GS7EjN7KSk/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Sentadilla Trasera con Barra (Explicado)",
                isSuperset: true,
                items: [
                    {
                        name: "Sentadilla Trasera con Barra (Explicado)",
                        subOrder: 1,
                        sets: 3,
                        reps: "15, 12, 10",
                        isSupersetStart: true,
                        videoUrl: "",
                        imageUrl: ""
                    },
                    {
                        name: "Cardio - Remo en Máquina",
                        subOrder: 2,
                        sets: 3,
                        reps: "60s",
                        notes: "Si no dispones de esta máquina, utiliza cualquier otra máquina de cardio (sin repetir las del resto de días)",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/watch?v=kX7ccUa7Nwc",
                        imageUrl: "https://i.ytimg.com/vi/kX7ccUa7Nwc/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "",
                imageUrl: ""
            },
            {
                order: 4,
                name: "Press Banca con Mancuernas",
                sets: 3,
                reps: "15, 12, 10",
                rest: "90s",
                notes: "",
                videoUrl: "https://youtu.be/hXCJC2Apcdg",
                imageUrl: "https://i.ytimg.com/vi/hXCJC2Apcdg/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Step Up Unilateral al Cajón con Mancuerna/Kettlebell",
                isSuperset: true,
                items: [
                    {
                        name: "Step Up Unilateral al Cajón con Mancuerna/Kettlebell",
                        subOrder: 1,
                        sets: 3,
                        reps: "10",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/cabSAbO0YLY",
                        imageUrl: "https://i.ytimg.com/vi/cabSAbO0YLY/mqdefault.jpg"
                    },
                    {
                        name: "Worm + Flexiones",
                        subOrder: 2,
                        sets: 3,
                        reps: "5",
                        videoUrl: "",
                        imageUrl: ""
                    },
                    {
                        name: "Remo Renegade + Flexión con Mancuernas",
                        subOrder: 3,
                        sets: 3,
                        reps: "12",
                        videoUrl: "https://www.youtube.com/shorts/hLPJik1MaaY",
                        imageUrl: "https://i.ytimg.com/vi/hLPJik1MaaY/mqdefault.jpg"
                    },
                    {
                        name: "Fondos en Banco",
                        subOrder: 4,
                        sets: 3,
                        reps: "12",
                        rest: "90s",
                        videoUrl: "https://youtu.be/NSB_HrDwd6I",
                        imageUrl: "https://i.ytimg.com/vi/NSB_HrDwd6I/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/cabSAbO0YLY",
                imageUrl: "https://i.ytimg.com/vi/cabSAbO0YLY/mqdefault.jpg"
            }
        ]
    },
    "dia2": {
        name: "Fullbody 2",
        exercises: [
            {
                order: 1,
                name: "Remo Inclinado con Mancuernas",
                isSuperset: true,
                items: [
                    {
                        name: "Remo Inclinado con Mancuernas",
                        subOrder: 1,
                        sets: 2,
                        reps: "8",
                        isSupersetStart: true,
                        videoUrl: "",
                        imageUrl: ""
                    },
                    {
                        name: "Worm",
                        subOrder: 2,
                        sets: 2,
                        reps: "12",
                        rest: "45s",
                        videoUrl: "https://www.youtube.com/watch?v=irBHRDg7ZHU",
                        imageUrl: "https://i.ytimg.com/vi/irBHRDg7ZHU/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "",
                imageUrl: ""
            },
            {
                order: 2,
                name: "Dominadas Asistidas en Máquina",
                sets: 3,
                reps: "8",
                rest: "120s",
                notes: "",
                videoUrl: "",
                imageUrl: ""
            },
            {
                order: 3,
                name: "Peso Muerto Rumano con Barra",
                isSuperset: true,
                items: [
                    {
                        name: "Peso Muerto Rumano con Barra",
                        subOrder: 1,
                        sets: 3,
                        reps: "15, 12, 10",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/R7FKam5GyNw",
                        imageUrl: "https://i.ytimg.com/vi/R7FKam5GyNw/mqdefault.jpg"
                    },
                    {
                        name: "Cardio Bicicleta Ritmo Fuerte De Pie",
                        subOrder: 2,
                        sets: 3,
                        reps: "60s",
                        notes: "Si no dispones de esta máquina, utiliza cualquier otra máquina de cardio (sin repetir las del resto de días)",
                        rest: "90s",
                        videoUrl: "",
                        imageUrl: ""
                    }
                ],
                notes: "Baja lo que te permita tu movilidad de cadera (Espalda completamente recta).",
                videoUrl: "https://youtu.be/R7FKam5GyNw",
                imageUrl: "https://i.ytimg.com/vi/R7FKam5GyNw/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Remo Seal con Mancuernas",
                sets: 3,
                reps: "15, 12, 10",
                rest: "90s",
                notes: "Trata de despegar el pecho al final del movimiento",
                videoUrl: "https://www.youtube.com/shorts/6tLfn99dO8o",
                imageUrl: "https://i.ytimg.com/vi/6tLfn99dO8o/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Thuster con Mancuerna",
                isSuperset: true,
                items: [
                    {
                        name: "Thuster con Mancuerna",
                        subOrder: 1,
                        sets: 3,
                        reps: "10",
                        isSupersetStart: true,
                        videoUrl: "",
                        imageUrl: ""
                    },
                    {
                        name: "Curl con Mancuernas de Pie",
                        subOrder: 2,
                        sets: 3,
                        reps: "12",
                        videoUrl: "https://youtu.be/8STuQuoDMR0",
                        imageUrl: "https://i.ytimg.com/vi/8STuQuoDMR0/mqdefault.jpg"
                    },
                    {
                        name: "Cuerpo Libre - Cardio - Sentadilla con Salto en Step",
                        subOrder: 3,
                        sets: 3,
                        reps: "15",
                        videoUrl: "https://youtu.be/7ckSQy2BtWw",
                        imageUrl: "https://i.ytimg.com/vi/7ckSQy2BtWw/mqdefault.jpg"
                    },
                    {
                        name: "Plancha sobre Manos con Toque a Rodilla Contraria",
                        subOrder: 4,
                        sets: 3,
                        reps: "12",
                        rest: "90s",
                        videoUrl: "",
                        imageUrl: ""
                    }
                ],
                notes: "",
                videoUrl: "",
                imageUrl: ""
            }
        ]
    },
    "dia3": {
        name: "Fullbody 3",
        exercises: [
            {
                order: 1,
                name: "6 Ways con Mancuernas",
                isSuperset: true,
                items: [
                    {
                        name: "6 Ways con Mancuernas",
                        subOrder: 1,
                        sets: 2,
                        reps: "8",
                        isSupersetStart: true,
                        videoUrl: "",
                        imageUrl: ""
                    },
                    {
                        name: "Abducción de Glúteo Unilateral en el Suelo",
                        subOrder: 2,
                        sets: 2,
                        reps: "12",
                        rest: "45s",
                        videoUrl: "",
                        imageUrl: ""
                    }
                ],
                notes: "",
                videoUrl: "",
                imageUrl: ""
            },
            {
                order: 2,
                name: "Press Militar en Multipower",
                sets: 3,
                reps: "8",
                rest: "120s",
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=iATqshmFPnI",
                imageUrl: "https://i.ytimg.com/vi/iATqshmFPnI/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Zancadas Caminando con Mancuernas/Kettlebells",
                isSuperset: true,
                items: [
                    {
                        name: "Zancadas Caminando con Mancuernas/Kettlebells",
                        subOrder: 1,
                        sets: 3,
                        reps: "15, 12, 10",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/7tRy9X0ibnk",
                        imageUrl: "https://i.ytimg.com/vi/7tRy9X0ibnk/mqdefault.jpg"
                    },
                    {
                        name: "Cardio - Correr en Cinta Sprint",
                        subOrder: 2,
                        sets: 3,
                        reps: "60s",
                        notes: "Si no dispones de esta máquina, utiliza cualquier otra máquina de cardio (sin repetir las del resto de días)",
                        rest: "90s",
                        videoUrl: "",
                        imageUrl: ""
                    }
                ],
                notes: "Zancadas cortas como en el vídeo para priorizar trabajo de cuádriceps. Talón del pie delantero a la altura de la rodilla trasera.",
                videoUrl: "https://youtu.be/7tRy9X0ibnk",
                imageUrl: "https://i.ytimg.com/vi/7tRy9X0ibnk/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Sentadilla Trasera en Multipower",
                sets: 3,
                reps: "15, 12, 10",
                rest: "90s",
                notes: "",
                videoUrl: "https://youtu.be/la-dqygoIuk",
                imageUrl: "https://i.ytimg.com/vi/la-dqygoIuk/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Zancada Trasera Alterna con Mancuernas o KTB",
                isSuperset: true,
                items: [
                    {
                        name: "Zancada Trasera Alterna con Mancuernas o KTB",
                        subOrder: 1,
                        sets: 3,
                        reps: "20",
                        isSupersetStart: true,
                        videoUrl: "",
                        imageUrl: ""
                    },
                    {
                        name: "Cuerpo Libre - Cardio - Burpee Completo",
                        subOrder: 2,
                        sets: 3,
                        reps: "6",
                        videoUrl: "https://youtu.be/qfBhsTabWN0",
                        imageUrl: "https://i.ytimg.com/vi/qfBhsTabWN0/mqdefault.jpg"
                    },
                    {
                        name: "Sentadilla Goblet con Mancuerna/Kettlebell",
                        subOrder: 3,
                        sets: 3,
                        reps: "15",
                        videoUrl: "https://youtu.be/xPVfWX_9ytk",
                        imageUrl: "https://i.ytimg.com/vi/xPVfWX_9ytk/mqdefault.jpg"
                    },
                    {
                        name: "Funcional - Spider Climber",
                        subOrder: 4,
                        sets: 3,
                        reps: "10",
                        rest: "90s",
                        videoUrl: "https://youtu.be/bzzJ0zeO70A",
                        imageUrl: "https://i.ytimg.com/vi/bzzJ0zeO70A/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "",
                imageUrl: ""
            }
        ]
    }
};

const exerciseAlternatives = {
    "Press Banca Inclinado en Multipower": [
        { name: "Press Banca Inclinado con Barra", videoUrl: "https://www.youtube.com/watch?v=4tPP-4K5kMQ", imageUrl: "https://i.ytimg.com/vi/4tPP-4K5kMQ/mqdefault.jpg" }
    ],
    "Sentadilla Trasera con Barra (Explicado)": [
        { name: "Hack Squat / Prensa Hack", videoUrl: "https://www.youtube.com/watch?v=6teL-OyXuQs", imageUrl: "https://i.ytimg.com/vi/6teL-OyXuQs/mqdefault.jpg" }
    ],
    "Dominadas Asistidas en Máquina": [
        { name: "Press Banca Inclinado con Barra", videoUrl: "https://www.youtube.com/watch?v=4tPP-4K5kMQ", imageUrl: "https://i.ytimg.com/vi/4tPP-4K5kMQ/mqdefault.jpg" }
    ],
    "Peso Muerto Rumano con Barra": [
        { name: "Peso Muerto Rumano con Mancuernas", videoUrl: "https://www.youtube.com/shorts/SMll4DOYvEs", imageUrl: "https://i.ytimg.com/vi/SMll4DOYvEs/mqdefault.jpg" }
    ],
    "Remo Seal con Mancuernas": [
        { name: "Máquina de Remo (Gironda)", videoUrl: "https://www.youtube.com/watch?v=3wcaZqSfP0A", imageUrl: "https://i.ytimg.com/vi/3wcaZqSfP0A/mqdefault.jpg" }
    ],
    "Press Militar en Multipower": [
        { name: "Press Militar Sentado con Mancuernas", videoUrl: "https://www.youtube.com/watch?v=_IMpMCr87Cg", imageUrl: "https://i.ytimg.com/vi/_IMpMCr87Cg/mqdefault.jpg" }
    ],
    "Sentadilla Trasera en Multipower": [
        { name: "Sentadilla Trasera con Barra (Explicado)", videoUrl: "", imageUrl: "" }
    ]
};

console.log("Datos de rutina cargados desde el creador.");
// Export if using modules in the target app, or remove if it's a simple script include
// export { workoutData, exerciseAlternatives };
