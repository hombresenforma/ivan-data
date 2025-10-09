// Contenido de app_datos.js

// =================================================================================
// DATOS DE LA RUTINA (5 DÍAS)
// =================================================================================
const workoutData = {
    "dia1": {
        name: "Empuje Foco Torso",
        exercises: [
            {
                order: 1,
                name: "Press Banca con Barra",
                sets: 4,
                reps: "30, 10, 10, 10",
                rest: "90s",
                notes: "Primera serie BILBO (Máximo 30 reps, máximo 2 sesiones con misma carga). ",
                videoUrl: "https://youtu.be/PKpsrFS2uac",
                imageUrl: "https://i.ytimg.com/vi/PKpsrFS2uac/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Press Militar con Barra de Pie",
                sets: 4,
                reps: "4-6",
                rest: "120s",
                notes: "Trabajo de Fuerza. Lo más explosivo posible. Sin llegar al fallo.",
                videoUrl: "https://www.youtube.com/watch?v=idnuMZx6mS0",
                imageUrl: "https://i.ytimg.com/vi/idnuMZx6mS0/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Press Banca con Mancuernas",
                isSuperset: true,
                items: [
                    {
                        name: "Press Banca con Mancuernas",
                        subOrder: 1,
                        sets: 3,
                        reps: "10-12",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/hXCJC2Apcdg",
                        imageUrl: "https://i.ytimg.com/vi/hXCJC2Apcdg/mqdefault.jpg"
                    },
                    {
                        name: "Flexiones Tempo 1:1",
                        subOrder: 2,
                        sets: 3,
                        reps: "10",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/shorts/-9Md7Htla-o",
                        imageUrl: "https://i.ytimg.com/vi/-9Md7Htla-o/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/hXCJC2Apcdg",
                imageUrl: "https://i.ytimg.com/vi/hXCJC2Apcdg/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Cruces en Polea Alta",
                isSuperset: true,
                items: [
                    {
                        name: "Cruces en Polea Alta",
                        subOrder: 1,
                        sets: 3,
                        reps: "10-12",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/Ht9awbF2fBA",
                        imageUrl: "https://i.ytimg.com/vi/Ht9awbF2fBA/mqdefault.jpg"
                    },
                    {
                        name: "Extensión de Codo en Polea Alta",
                        subOrder: 2,
                        sets: 3,
                        reps: "12-15",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/watch?v=z7gqbcjkzU0",
                        imageUrl: "https://i.ytimg.com/vi/z7gqbcjkzU0/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/Ht9awbF2fBA",
                imageUrl: "https://i.ytimg.com/vi/Ht9awbF2fBA/mqdefault.jpg"
            }
        ]
    },
    "dia2": {
        name: "Tracción Completa (Peso Muerto)",
        exercises: [
            {
                order: 1,
                name: "Peso Muerto Rumano con Barra",
                sets: 4,
                reps: "4-6",
                rest: "120s",
                notes: "Baja lo que te permita tu movilidad de cadera (Espalda completamente recta). Trabajo de Fuerza. Lo más explosivo posible. Sin llegar al fallo.",
                videoUrl: "https://youtu.be/R7FKam5GyNw",
                imageUrl: "https://i.ytimg.com/vi/R7FKam5GyNw/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Dominadas con Peso Corporal",
                sets: 3,
                reps: "8",
                rest: "90s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/pb-14sP_R4M",
                imageUrl: "https://i.ytimg.com/vi/pb-14sP_R4M/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Remo Seal con Mancuernas",
                isSuperset: true,
                items: [
                    {
                        name: "Remo Seal con Mancuernas",
                        subOrder: 1,
                        sets: 3,
                        reps: "10-12",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/shorts/6tLfn99dO8o",
                        imageUrl: "https://i.ytimg.com/vi/6tLfn99dO8o/mqdefault.jpg"
                    },
                    {
                        name: "Curl con Mancuernas Sentado en Banco Inclinado",
                        subOrder: 2,
                        sets: 3,
                        reps: "12-15",
                        rest: "90s",
                        videoUrl: "https://youtu.be/S32a3nYiWko",
                        imageUrl: "https://i.ytimg.com/vi/S32a3nYiWko/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/6tLfn99dO8o",
                imageUrl: "https://i.ytimg.com/vi/6tLfn99dO8o/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Curl con Barra Z",
                isSuperset: true,
                items: [
                    {
                        name: "Curl con Barra Z",
                        subOrder: 1,
                        sets: 3,
                        reps: "10-12",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/4gYLTjNaTmw",
                        imageUrl: "https://i.ytimg.com/vi/4gYLTjNaTmw/mqdefault.jpg"
                    },
                    {
                        name: "Face Pull en Polea Alta",
                        subOrder: 2,
                        sets: 3,
                        reps: "12-15",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/watch?v=tZN8KYDSCRo",
                        imageUrl: "https://i.ytimg.com/vi/tZN8KYDSCRo/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/4gYLTjNaTmw",
                imageUrl: "https://i.ytimg.com/vi/4gYLTjNaTmw/mqdefault.jpg"
            }
        ]
    },
    "dia3": {
        name: "Empuje Foco Pierna",
        exercises: [
            {
                order: 1,
                name: "Press Banca con Barra",
                sets: 4,
                reps: "30, 10, 10, 10",
                rest: "90s",
                notes: "Primera serie BILBO (Máximo 30 reps, máximo 2 sesiones con misma carga). ",
                videoUrl: "https://youtu.be/PKpsrFS2uac",
                imageUrl: "https://i.ytimg.com/vi/PKpsrFS2uac/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Hack Squat / Prensa Hack",
                sets: 4,
                reps: "4-6",
                rest: "120s",
                notes: "Trabajo de Fuerza. Lo más explosivo posible. Sin llegar al fallo.",
                videoUrl: "https://www.youtube.com/watch?v=6teL-OyXuQs",
                imageUrl: "https://i.ytimg.com/vi/6teL-OyXuQs/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Sentadilla Trasera en Multipower",
                isSuperset: true,
                items: [
                    {
                        name: "Sentadilla Trasera en Multipower",
                        subOrder: 1,
                        sets: 3,
                        reps: "10-12",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/la-dqygoIuk",
                        imageUrl: "https://i.ytimg.com/vi/la-dqygoIuk/mqdefault.jpg"
                    },
                    {
                        name: "Sentadilla Goblet con Pies Elevados",
                        subOrder: 2,
                        sets: 3,
                        reps: "12-15",
                        rest: "90s",
                        videoUrl: "https://youtu.be/E2n7V0o8B5A",
                        imageUrl: "https://i.ytimg.com/vi/E2n7V0o8B5A/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/la-dqygoIuk",
                imageUrl: "https://i.ytimg.com/vi/la-dqygoIuk/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Sentadilla Búlgara con Mancuerna",
                sets: 3,
                reps: "10-12",
                rest: "60s",
                notes: "",
                videoUrl: "https://youtu.be/kA6bHiDdTO4",
                imageUrl: "https://i.ytimg.com/vi/kA6bHiDdTO4/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Extensión de Cuádriceps en Máquina",
                sets: 3,
                reps: "12-15",
                rest: "60s",
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=k1Nn0cJOMng",
                imageUrl: "https://i.ytimg.com/vi/k1Nn0cJOMng/mqdefault.jpg"
            }
        ]
    },
    "dia4": {
        name: "Tracción Completa (Remo)",
        exercises: [
            {
                order: 1,
                name: "Remo con Barra",
                sets: 4,
                reps: "4-6",
                rest: "120s",
                notes: "Trabajo de Fuerza. Lo más explosivo posible. Sin llegar al fallo.",
                videoUrl: "https://youtu.be/MjnZ52mZgT0",
                imageUrl: "https://i.ytimg.com/vi/MjnZ52mZgT0/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Jalón al Pecho Neutro en Polea",
                sets: 3,
                reps: "8",
                rest: "90s",
                notes: "",
                videoUrl: "https://youtu.be/5YzMH2KkMHc",
                imageUrl: "https://i.ytimg.com/vi/5YzMH2KkMHc/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Curl Scott con Barra Z",
                isSuperset: true,
                items: [
                    {
                        name: "Curl Scott con Barra Z",
                        subOrder: 1,
                        sets: 3,
                        reps: "10-12",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/watch?v=-Rzppjmt6ag",
                        imageUrl: "https://i.ytimg.com/vi/-Rzppjmt6ag/mqdefault.jpg"
                    },
                    {
                        name: "Elevaciones Laterales con Mancuernas Sentado",
                        subOrder: 2,
                        sets: 3,
                        reps: "12-15",
                        rest: "90s",
                        videoUrl: "https://youtu.be/rhmW_fhB4cs",
                        imageUrl: "https://i.ytimg.com/vi/rhmW_fhB4cs/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=-Rzppjmt6ag",
                imageUrl: "https://i.ytimg.com/vi/-Rzppjmt6ag/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Curl Femoral en Máquina",
                sets: 3,
                reps: "10-12",
                rest: "60s",
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=Zhnhz1r_u-Y",
                imageUrl: "https://i.ytimg.com/vi/Zhnhz1r_u-Y/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Curl Martillo con Mancuernas",
                sets: 3,
                reps: "10-12",
                rest: "60s",
                notes: "",
                videoUrl: "https://youtu.be/fcFsPoJY9lg",
                imageUrl: "https://i.ytimg.com/vi/fcFsPoJY9lg/mqdefault.jpg"
            }
        ]
    },
    "dia5": {
        name: "Torso Completo",
        exercises: [
            {
                order: 1,
                name: "Press Banca con Barra",
                sets: 1,
                reps: "30",
                notes: "",
                videoUrl: "https://youtu.be/PKpsrFS2uac",
                imageUrl: "https://i.ytimg.com/vi/PKpsrFS2uac/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Press Banca con Barra",
                sets: 3,
                reps: "8-10",
                rest: "90s",
                notes: "",
                videoUrl: "https://youtu.be/PKpsrFS2uac",
                imageUrl: "https://i.ytimg.com/vi/PKpsrFS2uac/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Dominadas / Pull Ups Supinación (Chin Up)",
                isSuperset: true,
                items: [
                    {
                        name: "Dominadas / Pull Ups Supinación (Chin Up)",
                        subOrder: 1,
                        sets: 3,
                        reps: "8",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/watch?v=dN5DqMhO18s",
                        imageUrl: "https://i.ytimg.com/vi/dN5DqMhO18s/mqdefault.jpg"
                    },
                    {
                        name: "Fondos en Paralelas Lastrados",
                        subOrder: 2,
                        sets: 3,
                        reps: "12",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/shorts/xsnhvnyl70I",
                        imageUrl: "https://i.ytimg.com/vi/xsnhvnyl70I/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=dN5DqMhO18s",
                imageUrl: "https://i.ytimg.com/vi/dN5DqMhO18s/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Metabólico 1",
                isSuperset: true,
                circuitDetails: {
                    totalRounds: 3,
                    restBetweenExercisesSeconds: 15,
                    restBetweenRoundsSeconds: 120
                },
                items: [
                    {
                        name: "Press Militar Unilat de Pie con Mancuerna/KTB",
                        subOrder: 1,
                        sets: 1,
                        reps: "30s",
                        isCircuitItem: true,
                        videoUrl: "https://www.youtube.com/shorts/vIK0qkXP_f0",
                        imageUrl: "https://i.ytimg.com/vi/vIK0qkXP_f0/mqdefault.jpg"
                    },
                    {
                        name: "Press Militar Unilat de Pie con Mancuerna/KTB",
                        subOrder: 2,
                        sets: 1,
                        reps: "30s",
                        isCircuitItem: true,
                        videoUrl: "https://www.youtube.com/shorts/vIK0qkXP_f0",
                        imageUrl: "https://i.ytimg.com/vi/vIK0qkXP_f0/mqdefault.jpg"
                    },
                    {
                        name: "Remo Renegade Unilat con Mancuernas",
                        subOrder: 3,
                        sets: 1,
                        reps: "30s",
                        isCircuitItem: true,
                        videoUrl: "https://www.youtube.com/shorts/-8l81kFeLhc",
                        imageUrl: "https://i.ytimg.com/vi/-8l81kFeLhc/mqdefault.jpg"
                    },
                    {
                        name: "Remo Renegade Unilat con Mancuernas",
                        subOrder: 4,
                        sets: 1,
                        reps: "30s",
                        isCircuitItem: true,
                        videoUrl: "https://www.youtube.com/shorts/-8l81kFeLhc",
                        imageUrl: "https://i.ytimg.com/vi/-8l81kFeLhc/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/vIK0qkXP_f0",
                imageUrl: "https://i.ytimg.com/vi/vIK0qkXP_f0/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Curl con Mancuernas Sentado en Banco Inclinado",
                isSuperset: true,
                items: [
                    {
                        name: "Curl con Mancuernas Sentado en Banco Inclinado",
                        subOrder: 1,
                        sets: 3,
                        reps: "10",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/S32a3nYiWko",
                        imageUrl: "https://i.ytimg.com/vi/S32a3nYiWko/mqdefault.jpg"
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
                videoUrl: "https://youtu.be/S32a3nYiWko",
                imageUrl: "https://i.ytimg.com/vi/S32a3nYiWko/mqdefault.jpg"
            },
            {
                order: 6,
                name: "EMOM",
                isSuperset: true,
                isEMOM: true,
                emomDetails: {
                    totalIntervals: 6,
                    workIntervalSeconds: 60
                },
                items: [
                    {
                        name: "Curl con Barra Z",
                        subOrder: 1,
                        sets: 1,
                        reps: "10",
                        isEMOMItem: true,
                        videoUrl: "https://youtu.be/4gYLTjNaTmw",
                        imageUrl: "https://i.ytimg.com/vi/4gYLTjNaTmw/mqdefault.jpg"
                    },
                    {
                        name: "Worm + Flexión",
                        subOrder: 2,
                        sets: 1,
                        reps: "6",
                        isEMOMItem: true,
                        videoUrl: "https://www.youtube.com/watch?v=FhJAsfzBj50",
                        imageUrl: "https://i.ytimg.com/vi/FhJAsfzBj50/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/4gYLTjNaTmw",
                imageUrl: "https://i.ytimg.com/vi/4gYLTjNaTmw/mqdefault.jpg"
            },
            {
                order: 7,
                name: "ABS",
                isSuperset: true,
                circuitDetails: {
                    totalRounds: 3,
                    restBetweenExercisesSeconds: 10,
                    restBetweenRoundsSeconds: 90
                },
                items: [
                    {
                        name: "Crunch - Flexión de Cadera",
                        subOrder: 1,
                        sets: 1,
                        reps: "30s",
                        isCircuitItem: true,
                        videoUrl: "https://youtu.be/XJFii9NYHNs",
                        imageUrl: "https://i.ytimg.com/vi/XJFii9NYHNs/mqdefault.jpg"
                    },
                    {
                        name: "Crunch - Lateral Piernas",
                        subOrder: 2,
                        sets: 1,
                        reps: "30s",
                        isCircuitItem: true,
                        videoUrl: "https://youtu.be/jjoqs9YMyrM",
                        imageUrl: "https://i.ytimg.com/vi/jjoqs9YMyrM/mqdefault.jpg"
                    },
                    {
                        name: "Crunch - Lateral Piernas",
                        subOrder: 3,
                        sets: 1,
                        reps: "30s",
                        isCircuitItem: true,
                        videoUrl: "https://youtu.be/jjoqs9YMyrM",
                        imageUrl: "https://i.ytimg.com/vi/jjoqs9YMyrM/mqdefault.jpg"
                    },
                    {
                        name: "Hollow - Nivel 3",
                        subOrder: 4,
                        sets: 1,
                        reps: "30s",
                        isCircuitItem: true,
                        videoUrl: "https://youtu.be/I6YISGE4Uvo",
                        imageUrl: "https://i.ytimg.com/vi/I6YISGE4Uvo/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/XJFii9NYHNs",
                imageUrl: "https://i.ytimg.com/vi/XJFii9NYHNs/mqdefault.jpg"
            }
        ]
    }
};

const exerciseAlternatives = {
    "Press Banca con Mancuernas": [
        { name: "Press Banca Inclinado en Multipower", videoUrl: "https://youtu.be/3GS7EjN7KSk", imageUrl: "https://i.ytimg.com/vi/3GS7EjN7KSk/mqdefault.jpg" }
    ],
    "Cruces en Polea Alta": [
        { name: "Aperturas en Banco Inclinado con Mancuernas", videoUrl: "https://youtu.be/Lx8d28YlcbQ", imageUrl: "https://i.ytimg.com/vi/Lx8d28YlcbQ/mqdefault.jpg" }
    ],
    "Peso Muerto Rumano con Barra": [
        { name: "", videoUrl: "", imageUrl: "" }
    ],
    "Remo Seal con Mancuernas": [
        { name: "Máquina de Remo (Gironda)", videoUrl: "https://www.youtube.com/watch?v=3wcaZqSfP0A", imageUrl: "https://i.ytimg.com/vi/3wcaZqSfP0A/mqdefault.jpg" }
    ],
    "Curl con Mancuernas Sentado en Banco Inclinado": [
        { name: "Curl con Mancuernas de Pie", videoUrl: "https://youtu.be/8STuQuoDMR0", imageUrl: "https://i.ytimg.com/vi/8STuQuoDMR0/mqdefault.jpg" }
    ],
    "Curl con Barra Z": [
        { name: "Curl en Polea Baja con Barra Recta", videoUrl: "https://www.youtube.com/watch?v=obFKEQEAink", imageUrl: "https://i.ytimg.com/vi/obFKEQEAink/mqdefault.jpg" }
    ],
    "Hack Squat / Prensa Hack": [
        { name: "Prensa Inclinada 45º", videoUrl: "https://www.youtube.com/watch?v=IqjbBRNqJps", imageUrl: "https://i.ytimg.com/vi/IqjbBRNqJps/mqdefault.jpg" }
    ],
    "Sentadilla Trasera en Multipower": [
        { name: "Sentadilla Trasera con Barra", videoUrl: "https://youtu.be/FK5XU_gaxAE", imageUrl: "https://i.ytimg.com/vi/FK5XU_gaxAE/mqdefault.jpg" }
    ],
    "Jalón al Pecho Neutro en Polea": [
        { name: "Dominadas con Peso Corporal", videoUrl: "https://www.youtube.com/shorts/pb-14sP_R4M", imageUrl: "https://i.ytimg.com/vi/pb-14sP_R4M/mqdefault.jpg" }
    ],
    "Curl Scott con Barra Z": [
        { name: "Curl con Barra Recta", videoUrl: "https://youtu.be/0TjnWWqQfUw", imageUrl: "https://i.ytimg.com/vi/0TjnWWqQfUw/mqdefault.jpg" }
    ],
    "Press Banca con Barra": [
        { name: "Press Banca con Mancuernas", videoUrl: "https://youtu.be/hXCJC2Apcdg", imageUrl: "https://i.ytimg.com/vi/hXCJC2Apcdg/mqdefault.jpg" }
    ]
};

console.log("Datos de rutina cargados desde el creador.");
// Export if using modules in the target app, or remove if it's a simple script include
// export { workoutData, exerciseAlternatives };
