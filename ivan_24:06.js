// Contenido de app_datos.js

// =================================================================================
// DATOS DE LA RUTINA (3 DÍAS)
// =================================================================================
const workoutData = {
    "dia1": {
        name: "Empuje Completo",
        exercises: [
            {
                order: 1,
                name: "Press Banca con Barra",
                sets: 3,
                reps: "6, 6, 10",
                rest: "120s",
                notes: "",
                videoUrl: "https://youtu.be/PKpsrFS2uac"
            },
            {
                order: 2,
                name: "Hack Squat / Prensa Hack",
                sets: 3,
                reps: "12, 10, 8",
                rest: "120s",
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=6teL-OyXuQs"
            },
            {
                order: 3,
                name: "Press Inclinado con Mancuernas",
                sets: 3,
                reps: "10",
                rest: "90s",
                notes: "Pausa de 1 segundo al final. Foco en excéntrica.",
                videoUrl: "https://youtu.be/ZE4M73kXB5A"
            },
            {
                order: 4,
                name: "Press Militar Sentado con Mancuernas",
                isSuperset: true,
                items: [
                    {
                        name: "Press Militar Sentado con Mancuernas",
                        subOrder: 1,
                        sets: 3,
                        reps: "10",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/watch?v=_IMpMCr87Cg"
                    },
                    {
                        name: "Sentadilla Goblet con Pies Elevados",
                        subOrder: 2,
                        sets: 3,
                        reps: "12",
                        notes: "Puedes hacer extensión de cuádriceps si lo prefieres. ",
                        rest: "90s",
                        videoUrl: "https://youtu.be/E2n7V0o8B5A"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=_IMpMCr87Cg"
            },
            {
                order: 5,
                name: "Press Francés con Barra Z en Banco Inclinado",
                sets: 3,
                reps: "10-12",
                rest: "90s",
                notes: "",
                videoUrl: "https://youtu.be/hFk6xzt1DWM"
            }
        ]
    },
    "dia2": {
        name: "Tracción Completa",
        exercises: [
            {
                order: 1,
                name: "Remo en Barra T",
                sets: 3,
                reps: "6, 6, 10",
                rest: "120s",
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=AgxCPp37waQ"
            },
            {
                order: 2,
                name: "Curl con Barra con Cheating (Técnica Avanzada)",
                sets: 3,
                reps: "12, 10, 8",
                rest: "120s",
                notes: "Curl con pausa abajo.",
                videoUrl: "https://www.youtube.com/watch?v=oijf5bpMepU"
            },
            {
                order: 3,
                name: "Jalón al Pecho en Polea",
                sets: 3,
                reps: "10",
                rest: "90s",
                notes: "Pausa de 1 segundo al final. Foco en excéntrica.",
                videoUrl: "https://youtu.be/GYIhmy1P4vY"
            },
            {
                order: 4,
                name: "Curl con Mancuernas de Pie",
                isSuperset: true,
                items: [
                    {
                        name: "Curl con Mancuernas de Pie",
                        subOrder: 1,
                        sets: 3,
                        reps: "10",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/8STuQuoDMR0"
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
                videoUrl: "https://youtu.be/8STuQuoDMR0"
            },
            {
                order: 5,
                name: "Face Pull en Polea Alta",
                sets: 3,
                reps: "10-12",
                rest: "90s",
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=tZN8KYDSCRo"
            }
        ]
    },
    "dia3": {
        name: "Torso Completo",
        exercises: [
            {
                order: 1,
                name: "Fondos en Paralelas / Dip Up",
                isSuperset: true,
                items: [
                    {
                        name: "Fondos en Paralelas / Dip Up",
                        subOrder: 1,
                        sets: 3,
                        reps: "8-10",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/watch?v=CMlWH_7crjY"
                    },
                    {
                        name: "Dominadas Supinas / Chin Ups",
                        subOrder: 2,
                        sets: 3,
                        reps: "8-10",
                        rest: "120s",
                        videoUrl: "https://www.youtube.com/watch?v=dN5DqMhO18s"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=CMlWH_7crjY"
            },
            {
                order: 2,
                name: "Curl con Barra Z",
                isSuperset: true,
                items: [
                    {
                        name: "Curl con Barra Z",
                        subOrder: 1,
                        sets: 3,
                        reps: "8-10",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/4gYLTjNaTmw"
                    },
                    {
                        name: "Press Francés con Barra Z en Banco Inclinado",
                        subOrder: 2,
                        sets: 3,
                        reps: "10-12",
                        rest: "90s",
                        videoUrl: "https://youtu.be/hFk6xzt1DWM"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/4gYLTjNaTmw"
            },
            {
                order: 3,
                name: "Curl en Polea Baja con Barra Recta",
                sets: 3,
                reps: "12-15",
                rest: "90s",
                notes: "DROP-SET x2",
                videoUrl: "https://www.youtube.com/watch?v=obFKEQEAink"
            },
            {
                order: 4,
                name: "Flexiones / Deficit Push Ups con Discos al lado",
                sets: 3,
                reps: "12-15",
                rest: "90s",
                notes: "DROP-SET x1 (Rodillas)",
                videoUrl: "https://www.youtube.com/watch?v=nLnrNuQFlao"
            }
        ]
    }
};

const exerciseAlternatives = {
    "Press Banca con Barra": [
        { name: "Press Banca Inclinado con Barra", videoUrl: "https://www.youtube.com/watch?v=4tPP-4K5kMQ" }
    ],
    "Hack Squat / Prensa Hack": [
        { name: "Prensa Inclinada 45º", videoUrl: "https://www.youtube.com/watch?v=IqjbBRNqJps" }
    ],
    "Press Inclinado con Mancuernas": [
        { name: "Cruces en Polea Alta", videoUrl: "https://youtu.be/Ht9awbF2fBA" }
    ],
    "Remo en Barra T": [
        { name: "Máquina de Remo (Gironda)", videoUrl: "https://www.youtube.com/watch?v=3wcaZqSfP0A" }
    ],
    "Curl con Barra con Cheating (Técnica Avanzada)": [
        { name: "Curl Scott con Barra Z", videoUrl: "https://www.youtube.com/watch?v=-Rzppjmt6ag" }
    ],
    "Jalón al Pecho en Polea": [
        { name: "Dominadas / Pull Ups", videoUrl: "https://www.youtube.com/watch?v=7ht8tmdAyqw" }
    ]
};

console.log("Datos de rutina cargados desde el creador.");
// Export if using modules in the target app, or remove if it's a simple script include
// export { workoutData, exerciseAlternatives };
