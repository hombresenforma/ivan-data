// Titulo: PX. ELENA NEW

// Contenido de app_datos.js

// =================================================================================
// DATOS DE LA RUTINA (3 DÍAS)
// =================================================================================
const workoutData = {
    "dia1": {
        name: "Pierna",
        exercises: [
            {
                order: 1,
                name: "Sentadilla Jaca en Máquina",
                sets: 4,
                reps: "8, 8, 8, 12",
                rest: "90s",
                notes: "",
                videoUrl: "https://youtube.com/shorts/P4iHoym5SxM",
                imageUrl: "https://i.ytimg.com/vi/P4iHoym5SxM/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Sentadilla Búlgara con Mancuerna",
                sets: 3,
                reps: "10-12",
                rest: "90s",
                notes: "",
                videoUrl: "https://youtu.be/kA6bHiDdTO4",
                imageUrl: "https://i.ytimg.com/vi/kA6bHiDdTO4/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Curl Femoral Sentado en Máquina",
                setTechniques: {"1":"DROPSET","2":"DROPSET"},
                sets: 2,
                reps: "10",
                rest: "90s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/2fXW4I08ov4",
                imageUrl: "https://i.ytimg.com/vi/2fXW4I08ov4/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Extensión de Cuádriceps en Máquina",
                setTechniques: {"1":"DROPSET","2":"DROPSET"},
                sets: 2,
                reps: "10",
                rest: "90s",
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=k1Nn0cJOMng",
                imageUrl: "https://i.ytimg.com/vi/k1Nn0cJOMng/mqdefault.jpg"
            },
            {
                order: 5,
                name: "EMOM",
                isSuperset: true,
                isEMOM: true,
                emomDetails: {
                    totalIntervals: 8,
                    workIntervalSeconds: 60
                },
                items: [
                    {
                        name: "Cuerpo Libre - Cardio - Step Up Lateral Alterno en Step",
                        subOrder: 1,
                        sets: 1,
                        reps: "16",
                        isEMOMItem: true,
                        videoUrl: "https://youtu.be/N26TyhPhSRI",
                        imageUrl: "https://i.ytimg.com/vi/N26TyhPhSRI/mqdefault.jpg"
                    },
                    {
                        name: "Sentadilla Sumo con Mancuerna/Kettlebell",
                        subOrder: 2,
                        sets: 1,
                        reps: "15",
                        isEMOMItem: true,
                        videoUrl: "https://youtu.be/ifBHyfgLe8k",
                        imageUrl: "https://i.ytimg.com/vi/ifBHyfgLe8k/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/N26TyhPhSRI",
                imageUrl: "https://i.ytimg.com/vi/N26TyhPhSRI/mqdefault.jpg"
            }
        ]
    },
    "dia2": {
        name: "Torso",
        exercises: [
            {
                order: 1,
                name: "Circuito",
                isSuperset: true,
                circuitDetails: {
                    totalRounds: 2,
                    restBetweenExercisesSeconds: 15,
                    restBetweenRoundsSeconds: 30
                },
                items: [
                    {
                        name: "Remo Inclinado con Mancuernas/KTB (Explicado)",
                        subOrder: 1,
                        sets: 1,
                        reps: "30s",
                        isCircuitItem: true,
                        videoUrl: "https://www.youtube.com/shorts/NMlvYALcyBc",
                        imageUrl: "https://i.ytimg.com/vi/NMlvYALcyBc/mqdefault.jpg"
                    },
                    {
                        name: "Shoulder Taps",
                        subOrder: 2,
                        sets: 1,
                        reps: "30s",
                        isCircuitItem: true,
                        videoUrl: "https://www.youtube.com/shorts/viyHk_K7I48",
                        imageUrl: "https://i.ytimg.com/vi/viyHk_K7I48/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/NMlvYALcyBc",
                imageUrl: "https://i.ytimg.com/vi/NMlvYALcyBc/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Dominadas Supinas Asistidas en Máquina",
                sets: 3,
                reps: "6-8",
                rest: "90s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/E9DT2pv7Rp0",
                imageUrl: "https://i.ytimg.com/vi/E9DT2pv7Rp0/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Press Militar en Multipower",
                sets: 3,
                reps: "8-10",
                rest: "90s",
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=iATqshmFPnI",
                imageUrl: "https://i.ytimg.com/vi/iATqshmFPnI/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Remo Inclinado en Landmine",
                sets: 3,
                reps: "8-10",
                rest: "90s",
                notes: "",
                videoUrl: "https://youtu.be/5gakUsid-Lg",
                imageUrl: "https://i.ytimg.com/vi/5gakUsid-Lg/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Dominadas Australianas con Pies en el Suelo",
                isSuperset: true,
                items: [
                    {
                        name: "Dominadas Australianas con Pies en el Suelo",
                        subOrder: 1,
                        sets: 3,
                        reps: "10",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/watch?v=-GFyrw9BJVk",
                        imageUrl: "https://i.ytimg.com/vi/-GFyrw9BJVk/mqdefault.jpg"
                    },
                    {
                        name: "Remo Renegade Alterno con Mancuernas",
                        subOrder: 2,
                        sets: 3,
                        reps: "16",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/watch?v=FjwFzYXSK70",
                        imageUrl: "https://i.ytimg.com/vi/FjwFzYXSK70/mqdefault.jpg"
                    }
                ],
                notes: "Intenta que la espalda esté lo más vertical posible (Sin avanzar la cadera).",
                videoUrl: "https://www.youtube.com/watch?v=-GFyrw9BJVk",
                imageUrl: "https://i.ytimg.com/vi/-GFyrw9BJVk/mqdefault.jpg"
            },
            {
                order: 6,
                name: "Curl con Barra Z",
                isSuperset: true,
                items: [
                    {
                        name: "Curl con Barra Z",
                        subOrder: 1,
                        sets: 3,
                        reps: "10",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/4gYLTjNaTmw",
                        imageUrl: "https://i.ytimg.com/vi/4gYLTjNaTmw/mqdefault.jpg"
                    },
                    {
                        name: "Elevaciones Laterales con Mancuernas",
                        subOrder: 2,
                        sets: 3,
                        reps: "12",
                        videoUrl: "https://youtu.be/rhmW_fhB4cs",
                        imageUrl: "https://i.ytimg.com/vi/rhmW_fhB4cs/mqdefault.jpg"
                    },
                    {
                        name: "Fondos en Banco",
                        subOrder: 3,
                        sets: 3,
                        reps: "15",
                        rest: "90s",
                        videoUrl: "https://youtu.be/NSB_HrDwd6I",
                        imageUrl: "https://i.ytimg.com/vi/NSB_HrDwd6I/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/4gYLTjNaTmw",
                imageUrl: "https://i.ytimg.com/vi/4gYLTjNaTmw/mqdefault.jpg"
            }
        ]
    },
    "dia3": {
        name: "Glúteo",
        exercises: [
            {
                order: 1,
                name: "Abducción de Glúteo Unilat en el Suelo",
                isSuperset: true,
                items: [
                    {
                        name: "Abducción de Glúteo Unilat en el Suelo",
                        subOrder: 1,
                        sets: 2,
                        reps: "15",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/TY5nZehvOhU?si=c3yMrpjxVKgMh7jG",
                        imageUrl: "https://i.ytimg.com/vi/TY5nZehvOhU/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/TY5nZehvOhU?si=c3yMrpjxVKgMh7jG",
                imageUrl: "https://i.ytimg.com/vi/TY5nZehvOhU/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Peso Muerto Rumano con Mancuernas",
                setTechniques: {},
                sets: 3,
                reps: "8, 8, 25",
                rest: "120s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/SMll4DOYvEs",
                imageUrl: "https://i.ytimg.com/vi/SMll4DOYvEs/mqdefault.jpg"
            },
            {
                order: 3,
                name: "SS Box Step Up Unilat con Mancuerna/KTB",
                sets: 3,
                reps: "8",
                rest: "90s",
                notes: "8 de cada tipo, sin descanso.",
                videoUrl: "https://youtube.com/shorts/NuhlISUIU_c",
                imageUrl: "https://i.ytimg.com/vi/NuhlISUIU_c/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Zancadas Caminando con Mancuernas/Kettlebells",
                sets: 3,
                reps: "20",
                rest: "120s",
                notes: "",
                videoUrl: "https://youtu.be/7tRy9X0ibnk",
                imageUrl: "https://i.ytimg.com/vi/7tRy9X0ibnk/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Patada de Glúteo en Polea",
                sets: 3,
                reps: "15, 12, 10",
                rest: "60s",
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=3KdH7vkEW6s",
                imageUrl: "https://i.ytimg.com/vi/3KdH7vkEW6s/mqdefault.jpg"
            },
            {
                order: 6,
                name: "Circuito Metabólico",
                isSuperset: true,
                circuitDetails: {
                    totalRounds: 3,
                    restBetweenExercisesSeconds: 15,
                    restBetweenRoundsSeconds: 60
                },
                items: [
                    {
                        name: "Kettlebell - Soft Swing",
                        subOrder: 1,
                        sets: 1,
                        reps: "45s",
                        isCircuitItem: true,
                        videoUrl: "https://youtube.com/shorts/-i4ReGBb26g",
                        imageUrl: "https://i.ytimg.com/vi/-i4ReGBb26g/mqdefault.jpg"
                    },
                    {
                        name: "Zancada Dinámica",
                        subOrder: 2,
                        sets: 1,
                        reps: "45s",
                        isCircuitItem: true,
                        videoUrl: "https://www.youtube.com/watch?v=eSAN1E5usJI",
                        imageUrl: "https://i.ytimg.com/vi/eSAN1E5usJI/mqdefault.jpg"
                    },
                    {
                        name: "Plancha - Avanzada",
                        subOrder: 3,
                        sets: 1,
                        reps: "45s",
                        isCircuitItem: true,
                        videoUrl: "https://youtu.be/nH9AQFIJ1rY",
                        imageUrl: "https://i.ytimg.com/vi/nH9AQFIJ1rY/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtube.com/shorts/-i4ReGBb26g",
                imageUrl: "https://i.ytimg.com/vi/-i4ReGBb26g/mqdefault.jpg"
            }
        ]
    }
};

const exerciseAlternatives = {
    "Sentadilla Jaca en Máquina": [
        { name: "Prensa Inclinada en Máquina de Discos", videoUrl: "https://www.youtube.com/shorts/je1QdJdvAN0", imageUrl: "https://i.ytimg.com/vi/je1QdJdvAN0/mqdefault.jpg" }
    ],
    "Dominadas Supinas Asistidas en Máquina": [
        { name: "Jalón al Pecho Supino en Polea", videoUrl: "https://youtu.be/rimdRzyIJkA", imageUrl: "https://i.ytimg.com/vi/rimdRzyIJkA/mqdefault.jpg" }
    ],
    "Press Militar en Multipower": [
        { name: "Press Militar Sentado con Mancuernas (Explicado)", videoUrl: "https://www.youtube.com/shorts/2ZkYyh4ic0o", imageUrl: "https://i.ytimg.com/vi/2ZkYyh4ic0o/mqdefault.jpg" }
    ],
    "Remo Renegade Alterno con Mancuernas": [
        { name: "Máquina de Remo (Gironda)", videoUrl: "https://www.youtube.com/watch?v=3wcaZqSfP0A", imageUrl: "https://i.ytimg.com/vi/3wcaZqSfP0A/mqdefault.jpg" }
    ]
};

console.log("Datos de rutina cargados desde el creador.");
