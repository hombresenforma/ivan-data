// Titulo: PX. IVÁN ACTUAL ENERO

// Contenido de app_datos.js

// =================================================================================
// DATOS DE LA RUTINA (2 DÍAS)
// =================================================================================
const workoutData = {
    "dia1": {
        name: "Empuje Nuevo",
        exercises: [
            {
                order: 2,
                name: "Prensa Inclinada en Máquina de Discos",
                sets: 3,
                reps: "8-10",
                rest: "90s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/je1QdJdvAN0",
                imageUrl: "https://i.ytimg.com/vi/je1QdJdvAN0/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Press Inclinado con Mancuernas",
                setTechniques: {"3":"DROPSET"},
                sets: 3,
                reps: "8-10",
                rest: "120s",
                notes: "",
                videoUrl: "https://youtu.be/ZE4M73kXB5A",
                imageUrl: "https://i.ytimg.com/vi/ZE4M73kXB5A/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Press Banca en Multipower",
                setTechniques: {"3":"DROPSET"},
                sets: 3,
                reps: "10",
                rest: "90s",
                notes: "",
                videoUrl: "https://youtu.be/w-5ovE5O5iU",
                imageUrl: "https://i.ytimg.com/vi/w-5ovE5O5iU/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Cruces en Polea Alta",
                sets: 2,
                reps: "10-12",
                rest: "90s",
                notes: "",
                videoUrl: "https://youtu.be/Ht9awbF2fBA",
                imageUrl: "https://i.ytimg.com/vi/Ht9awbF2fBA/mqdefault.jpg"
            },
            {
                order: 6,
                name: "Extensión de Cuádriceps en Máquina",
                sets: 2,
                reps: "10-12",
                rest: "90s",
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=k1Nn0cJOMng",
                imageUrl: "https://i.ytimg.com/vi/k1Nn0cJOMng/mqdefault.jpg"
            },
            {
                order: 7,
                name: "Press Francés con Barra Z en Banco Inclinado",
                sets: 3,
                reps: "10-12",
                rest: "60s",
                notes: "",
                videoUrl: "https://youtu.be/hFk6xzt1DWM",
                imageUrl: "https://i.ytimg.com/vi/hFk6xzt1DWM/mqdefault.jpg"
            },
            {
                order: 8,
                name: "EMOM",
                isSuperset: true,
                isEMOM: true,
                emomDetails: {
                    totalIntervals: 4,
                    workIntervalSeconds: 60
                },
                items: [
                    {
                        name: "Press Militar Unilat de Pie con Mancuerna/KTB",
                        subOrder: 1,
                        sets: 1,
                        reps: "8",
                        isEMOMItem: true,
                        videoUrl: "https://www.youtube.com/shorts/vIK0qkXP_f0",
                        imageUrl: "https://i.ytimg.com/vi/vIK0qkXP_f0/mqdefault.jpg"
                    },
                    {
                        name: "Extensión de Codo en Polea Alta",
                        subOrder: 2,
                        sets: 1,
                        reps: "",
                        isEMOMItem: true,
                        videoUrl: "https://www.youtube.com/watch?v=z7gqbcjkzU0",
                        imageUrl: "https://i.ytimg.com/vi/z7gqbcjkzU0/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/vIK0qkXP_f0",
                imageUrl: "https://i.ytimg.com/vi/vIK0qkXP_f0/mqdefault.jpg"
            }
        ]
    },
    "dia2": {
        name: "Tracción Nueva",
        exercises: [
            {
                order: 1,
                name: "Dominadas con Peso Corporal",
                sets: 3,
                reps: "8-10",
                rest: "90s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/pb-14sP_R4M",
                imageUrl: "https://i.ytimg.com/vi/pb-14sP_R4M/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Remo Seal con Mancuernas",
                setTechniques: {"3":"DROPSET"},
                sets: 3,
                reps: "10",
                rest: "90s",
                notes: "Trata de despegar el pecho al final del movimiento",
                videoUrl: "https://www.youtube.com/shorts/6tLfn99dO8o",
                imageUrl: "https://i.ytimg.com/vi/6tLfn99dO8o/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Dead Curl con Barra",
                sets: 3,
                reps: "8-10",
                rest: "90s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/HWs4EYCI8iE",
                imageUrl: "https://i.ytimg.com/vi/HWs4EYCI8iE/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Hip Thrust con Barra (Explicado)",
                sets: 3,
                reps: "8-10",
                rest: "90s",
                notes: "Si haces zancadas, haz 8-10 POR PIERNA.",
                videoUrl: "https://www.youtube.com/shorts/eIZUNV9Xj7Y",
                imageUrl: "https://i.ytimg.com/vi/eIZUNV9Xj7Y/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Curl con Mancuernas Sentado en Banco Inclinado",
                sets: 2,
                reps: "8-10",
                rest: "90s",
                notes: "",
                videoUrl: "https://youtu.be/S32a3nYiWko",
                imageUrl: "https://i.ytimg.com/vi/S32a3nYiWko/mqdefault.jpg"
            },
            {
                order: 6,
                name: "EMOM MANCUERNAS",
                isSuperset: true,
                isEMOM: true,
                emomDetails: {
                    totalIntervals: 4,
                    workIntervalSeconds: 60
                },
                items: [
                    {
                        name: "Peso Muerto Rumano con Mancuernas",
                        subOrder: 1,
                        sets: 1,
                        reps: "10-12",
                        isEMOMItem: true,
                        videoUrl: "https://www.youtube.com/shorts/SMll4DOYvEs",
                        imageUrl: "https://i.ytimg.com/vi/SMll4DOYvEs/mqdefault.jpg"
                    },
                    {
                        name: "Elevaciones Laterales con Mancuernas",
                        subOrder: 2,
                        sets: 1,
                        reps: "10-12",
                        isEMOMItem: true,
                        videoUrl: "https://youtu.be/rhmW_fhB4cs",
                        imageUrl: "https://i.ytimg.com/vi/rhmW_fhB4cs/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/SMll4DOYvEs",
                imageUrl: "https://i.ytimg.com/vi/SMll4DOYvEs/mqdefault.jpg"
            }
        ]
    }
};

const exerciseAlternatives = {
    "Prensa Inclinada en Máquina de Discos": [
        { name: "Hack Squat / Prensa Hack", videoUrl: "https://www.youtube.com/watch?v=6teL-OyXuQs", imageUrl: "https://i.ytimg.com/vi/6teL-OyXuQs/mqdefault.jpg" }
    ],
    "Press Inclinado con Mancuernas": [
        { name: "Press en Máquina inclinado", videoUrl: "https://www.youtube.com/watch?v=nna4gQD-v9Y", imageUrl: "https://i.ytimg.com/vi/nna4gQD-v9Y/mqdefault.jpg" }
    ],
    "Press Banca en Multipower": [
        { name: "Press Banca en Multipower", videoUrl: "https://youtu.be/w-5ovE5O5iU", imageUrl: "https://i.ytimg.com/vi/w-5ovE5O5iU/mqdefault.jpg" }
    ],
    "Dominadas con Peso Corporal": [
        { name: "Peso Muerto Rumano con Mancuernas", videoUrl: "https://www.youtube.com/shorts/SMll4DOYvEs", imageUrl: "https://i.ytimg.com/vi/SMll4DOYvEs/mqdefault.jpg" }
    ],
    "Remo Seal con Mancuernas": [
        { name: "Remo Inclinado en Landmine", videoUrl: "https://youtu.be/5gakUsid-Lg", imageUrl: "https://i.ytimg.com/vi/5gakUsid-Lg/mqdefault.jpg" }
    ],
    "Dead Curl con Barra": [
        { name: "Curl con Barra Z", videoUrl: "https://youtu.be/4gYLTjNaTmw", imageUrl: "https://i.ytimg.com/vi/4gYLTjNaTmw/mqdefault.jpg" }
    ],
    "Hip Thrust con Barra (Explicado)": [
        { name: "Zancadas Caminando con Mancuernas/Kettlebells", videoUrl: "https://youtu.be/7tRy9X0ibnk", imageUrl: "https://i.ytimg.com/vi/7tRy9X0ibnk/mqdefault.jpg" }
    ],
    "Curl con Mancuernas Sentado en Banco Inclinado": [
        { name: "", videoUrl: "", imageUrl: "" }
    ]
};

console.log("Datos de rutina cargados desde el creador.");
