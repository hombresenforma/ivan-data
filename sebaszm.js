// Contenido de app_datos.js

// =================================================================================
// DATOS DE LA RUTINA (5 DÍAS)
// =================================================================================
const workoutData = {
    "dia1": {
        name: "Anterior IN-OUT",
        exercises: [
            {
                order: 1,
                name: "Press Inclinado con Mancuernas",
                isSuperset: true,
                items: [
                    {
                        name: "Press Inclinado con Mancuernas",
                        subOrder: 1,
                        sets: 4,
                        reps: "8",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/ZE4M73kXB5A",
                        imageUrl: "https://i.ytimg.com/vi/ZE4M73kXB5A/mqdefault.jpg"
                    },
                    {
                        name: "Flexiones Tempo 1:1",
                        subOrder: 2,
                        sets: 4,
                        reps: "10",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/shorts/-9Md7Htla-o",
                        imageUrl: "https://i.ytimg.com/vi/-9Md7Htla-o/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/ZE4M73kXB5A",
                imageUrl: "https://i.ytimg.com/vi/ZE4M73kXB5A/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Sentadilla Búlgara con Mancuerna",
                sets: 3,
                reps: "8",
                rest: "90s",
                notes: "DROPSET dejando el peso en cada serie. (8 con mancuerna + 8 sin)",
                videoUrl: "https://youtu.be/kA6bHiDdTO4",
                imageUrl: "https://i.ytimg.com/vi/kA6bHiDdTO4/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Press Militar Unilat de Pie con Mancuerna/KTB",
                isSuperset: true,
                items: [
                    {
                        name: "Press Militar Unilat de Pie con Mancuerna/KTB",
                        subOrder: 1,
                        sets: 4,
                        reps: "10",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/shorts/vIK0qkXP_f0",
                        imageUrl: "https://i.ytimg.com/vi/vIK0qkXP_f0/mqdefault.jpg"
                    },
                    {
                        name: "Elevaciones Laterales con Mancuernas Sentado",
                        subOrder: 2,
                        sets: 4,
                        reps: "15",
                        rest: "90s",
                        videoUrl: "https://youtu.be/rhmW_fhB4cs",
                        imageUrl: "https://i.ytimg.com/vi/rhmW_fhB4cs/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/vIK0qkXP_f0",
                imageUrl: "https://i.ytimg.com/vi/vIK0qkXP_f0/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Floor Press con Mancuernas",
                sets: 3,
                reps: "15, 12, 10",
                rest: "90s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/Iu02N3s7zgQ",
                imageUrl: "https://i.ytimg.com/vi/Iu02N3s7zgQ/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Fondos en Banco",
                sets: 3,
                reps: "15, 12, 10",
                rest: "90s",
                notes: "",
                videoUrl: "https://youtu.be/NSB_HrDwd6I",
                imageUrl: "https://i.ytimg.com/vi/NSB_HrDwd6I/mqdefault.jpg"
            },
            {
                order: 6,
                name: "IN-OUT",
                isSuperset: true,
                circuitDetails: {
                    totalRounds: 5,
                    restBetweenExercisesSeconds: 20,
                    restBetweenRoundsSeconds: 20
                },
                items: [
                    {
                        name: "Cuerpo Libre - Step Up Alterno en Step",
                        subOrder: 1,
                        sets: 1,
                        reps: "20s",
                        isCircuitItem: true,
                        videoUrl: "https://youtu.be/IwixiNKjpCA",
                        imageUrl: "https://i.ytimg.com/vi/IwixiNKjpCA/mqdefault.jpg"
                    },
                    {
                        name: "Thruster con Mancuernas",
                        subOrder: 2,
                        sets: 1,
                        reps: "20s",
                        isCircuitItem: true,
                        videoUrl: "https://www.youtube.com/watch?v=5mTjKFubavs",
                        imageUrl: "https://i.ytimg.com/vi/5mTjKFubavs/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/IwixiNKjpCA",
                imageUrl: "https://i.ytimg.com/vi/IwixiNKjpCA/mqdefault.jpg"
            }
        ]
    },
    "dia2": {
        name: "Posterior IN-OUT",
        exercises: [
            {
                order: 1,
                name: "Dominadas con Peso Corporal",
                isSuperset: true,
                items: [
                    {
                        name: "Dominadas con Peso Corporal",
                        subOrder: 1,
                        sets: 4,
                        reps: "8",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/shorts/pb-14sP_R4M",
                        imageUrl: "https://i.ytimg.com/vi/pb-14sP_R4M/mqdefault.jpg"
                    },
                    {
                        name: "Gorilla Row con Kettlebells/Mancuernas",
                        subOrder: 2,
                        sets: 4,
                        reps: "16",
                        rest: "90s",
                        videoUrl: "https://youtu.be/4hKPsdWsXl8",
                        imageUrl: "https://i.ytimg.com/vi/4hKPsdWsXl8/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/pb-14sP_R4M",
                imageUrl: "https://i.ytimg.com/vi/pb-14sP_R4M/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Peso Muerto Rumano con Mancuernas",
                isSuperset: true,
                items: [
                    {
                        name: "Peso Muerto Rumano con Mancuernas",
                        subOrder: 1,
                        sets: 3,
                        reps: "8",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/shorts/SMll4DOYvEs",
                        imageUrl: "https://i.ytimg.com/vi/SMll4DOYvEs/mqdefault.jpg"
                    },
                    {
                        name: "Curl Femoral desde Puente (Con TRX)",
                        subOrder: 2,
                        sets: 3,
                        reps: "10",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/watch?v=6NCkHTG4lHc",
                        imageUrl: "https://i.ytimg.com/vi/6NCkHTG4lHc/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/SMll4DOYvEs",
                imageUrl: "https://i.ytimg.com/vi/SMll4DOYvEs/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Remo con Mancuerna Unilateral",
                isSuperset: true,
                items: [
                    {
                        name: "Remo con Mancuerna Unilateral",
                        subOrder: 1,
                        sets: 4,
                        reps: "10",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/EPXL9QIasLM",
                        imageUrl: "https://i.ytimg.com/vi/EPXL9QIasLM/mqdefault.jpg"
                    },
                    {
                        name: "Remo Renegade Alterno con Mancuernas",
                        subOrder: 2,
                        sets: 4,
                        reps: "16",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/watch?v=FjwFzYXSK70",
                        imageUrl: "https://i.ytimg.com/vi/FjwFzYXSK70/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/EPXL9QIasLM",
                imageUrl: "https://i.ytimg.com/vi/EPXL9QIasLM/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Remo Seal con Mancuernas",
                sets: 3,
                reps: "15, 12, 10",
                rest: "90s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/6tLfn99dO8o",
                imageUrl: "https://i.ytimg.com/vi/6tLfn99dO8o/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Face Pull en TRX / Rings / Anillas",
                sets: 3,
                reps: "15, 12, 10",
                rest: "90s",
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=rIpWyPV45PU",
                imageUrl: "https://i.ytimg.com/vi/rIpWyPV45PU/mqdefault.jpg"
            },
            {
                order: 6,
                name: "IN-OUT",
                isSuperset: true,
                circuitDetails: {
                    totalRounds: 5,
                    restBetweenExercisesSeconds: 20,
                    restBetweenRoundsSeconds: 20
                },
                items: [
                    {
                        name: "Face Pull con KTB",
                        subOrder: 1,
                        sets: 1,
                        reps: "20s",
                        isCircuitItem: true,
                        videoUrl: "https://www.youtube.com/shorts/RIS2s-UkKOk",
                        imageUrl: "https://i.ytimg.com/vi/RIS2s-UkKOk/mqdefault.jpg"
                    },
                    {
                        name: "Kettlebell - Swing Ruso",
                        subOrder: 2,
                        sets: 1,
                        reps: "20s",
                        isCircuitItem: true,
                        videoUrl: "https://youtu.be/eKN0tj8q6Qc",
                        imageUrl: "https://i.ytimg.com/vi/eKN0tj8q6Qc/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/RIS2s-UkKOk",
                imageUrl: "https://i.ytimg.com/vi/RIS2s-UkKOk/mqdefault.jpg"
            }
        ]
    },
    "dia3": {
        name: "Fullbody IN-OUT",
        exercises: [
            {
                order: 1,
                name: "Curl con Mancuernas de Pie Alterno",
                isSuperset: true,
                items: [
                    {
                        name: "Curl con Mancuernas de Pie Alterno",
                        subOrder: 1,
                        sets: 3,
                        reps: "16",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/85KCpAw9CE4",
                        imageUrl: "https://i.ytimg.com/vi/85KCpAw9CE4/mqdefault.jpg"
                    },
                    {
                        name: "Curl Martillo con Mancuernas",
                        subOrder: 2,
                        sets: 3,
                        reps: "10",
                        rest: "90s",
                        videoUrl: "https://youtu.be/fcFsPoJY9lg",
                        imageUrl: "https://i.ytimg.com/vi/fcFsPoJY9lg/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/85KCpAw9CE4",
                imageUrl: "https://i.ytimg.com/vi/85KCpAw9CE4/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Press Francés con Mancuernas en Banco Inclinado",
                isSuperset: true,
                items: [
                    {
                        name: "Press Francés con Mancuernas en Banco Inclinado",
                        subOrder: 1,
                        sets: 3,
                        reps: "10",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/L__Q6Jl9Ics",
                        imageUrl: "https://i.ytimg.com/vi/L__Q6Jl9Ics/mqdefault.jpg"
                    },
                    {
                        name: "Press Cerrado en Banco Inclinado con Mancuernas",
                        subOrder: 2,
                        sets: 3,
                        reps: "10",
                        rest: "90s",
                        videoUrl: "https://youtu.be/tdh7LSxUj1s",
                        imageUrl: "https://i.ytimg.com/vi/tdh7LSxUj1s/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/L__Q6Jl9Ics",
                imageUrl: "https://i.ytimg.com/vi/L__Q6Jl9Ics/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Sentadilla Frontal con Mancuernas/Kettlebells",
                sets: 3,
                reps: "10",
                rest: "90s",
                notes: "",
                videoUrl: "https://youtu.be/lfb6neUpfP8",
                imageUrl: "https://i.ytimg.com/vi/lfb6neUpfP8/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Curl con Barra Recta",
                isSuperset: true,
                items: [
                    {
                        name: "Curl con Barra Recta",
                        subOrder: 1,
                        sets: 4,
                        reps: "15, 12, 10",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/0TjnWWqQfUw",
                        imageUrl: "https://i.ytimg.com/vi/0TjnWWqQfUw/mqdefault.jpg"
                    },
                    {
                        name: "Extensión Tríceps Trasnuca con Mancuernas/Kettlebell",
                        subOrder: 2,
                        sets: 4,
                        reps: "15, 12, 10",
                        rest: "90s",
                        videoUrl: "https://youtu.be/1MgU2PO4_rI",
                        imageUrl: "https://i.ytimg.com/vi/1MgU2PO4_rI/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/0TjnWWqQfUw",
                imageUrl: "https://i.ytimg.com/vi/0TjnWWqQfUw/mqdefault.jpg"
            },
            {
                order: 5,
                name: "IN-OUT",
                isSuperset: true,
                circuitDetails: {
                    totalRounds: 5,
                    restBetweenExercisesSeconds: 20,
                    restBetweenRoundsSeconds: 20
                },
                items: [
                    {
                        name: "Remo Renegade Alterno con Mancuernas",
                        subOrder: 1,
                        sets: 1,
                        reps: "20s",
                        isCircuitItem: true,
                        videoUrl: "https://www.youtube.com/watch?v=FjwFzYXSK70",
                        imageUrl: "https://i.ytimg.com/vi/FjwFzYXSK70/mqdefault.jpg"
                    },
                    {
                        name: "Zancadas Caminando con Mancuernas/Kettlebells",
                        subOrder: 2,
                        sets: 1,
                        reps: "20s",
                        isCircuitItem: true,
                        videoUrl: "https://youtu.be/7tRy9X0ibnk",
                        imageUrl: "https://i.ytimg.com/vi/7tRy9X0ibnk/mqdefault.jpg"
                    }
                ],
                notes: "Mantén la cadera sin que se mueva ni rote",
                videoUrl: "https://www.youtube.com/watch?v=FjwFzYXSK70",
                imageUrl: "https://i.ytimg.com/vi/FjwFzYXSK70/mqdefault.jpg"
            }
        ]
    },
    "dia4": {
        name: "Cardio y Core",
        exercises: [
            {
                order: 1,
                name: "Remo",
                isSuperset: true,
                circuitDetails: {
                    totalRounds: 6,
                    restBetweenExercisesSeconds: 0,
                    restBetweenRoundsSeconds: 90
                },
                items: [
                    {
                        name: "Cardio - Remo en Máquina",
                        subOrder: 1,
                        sets: 1,
                        reps: "90s",
                        isCircuitItem: true,
                        videoUrl: "https://www.youtube.com/watch?v=kX7ccUa7Nwc",
                        imageUrl: "https://i.ytimg.com/vi/kX7ccUa7Nwc/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=kX7ccUa7Nwc",
                imageUrl: "https://i.ytimg.com/vi/kX7ccUa7Nwc/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Crunch - Extensión Lumbar",
                isSuperset: true,
                items: [
                    {
                        name: "Crunch - Extensión Lumbar",
                        subOrder: 1,
                        sets: 4,
                        reps: "15",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/BJTJdFViRsU",
                        imageUrl: "https://i.ytimg.com/vi/BJTJdFViRsU/mqdefault.jpg"
                    },
                    {
                        name: "Crunch - Lateral Piernas",
                        subOrder: 2,
                        sets: 4,
                        reps: "15",
                        videoUrl: "https://youtu.be/jjoqs9YMyrM",
                        imageUrl: "https://i.ytimg.com/vi/jjoqs9YMyrM/mqdefault.jpg"
                    },
                    {
                        name: "Crunch - Lateral Piernas",
                        subOrder: 3,
                        sets: 4,
                        reps: "15",
                        videoUrl: "https://youtu.be/jjoqs9YMyrM",
                        imageUrl: "https://i.ytimg.com/vi/jjoqs9YMyrM/mqdefault.jpg"
                    },
                    {
                        name: "Crunch - Flexión de Cadera",
                        subOrder: 4,
                        sets: 4,
                        reps: "15",
                        videoUrl: "https://youtu.be/XJFii9NYHNs",
                        imageUrl: "https://i.ytimg.com/vi/XJFii9NYHNs/mqdefault.jpg"
                    },
                    {
                        name: "Hollow - Nivel 3",
                        subOrder: 5,
                        sets: 4,
                        reps: "30s",
                        rest: "90s",
                        videoUrl: "https://youtu.be/I6YISGE4Uvo",
                        imageUrl: "https://i.ytimg.com/vi/I6YISGE4Uvo/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/BJTJdFViRsU",
                imageUrl: "https://i.ytimg.com/vi/BJTJdFViRsU/mqdefault.jpg"
            }
        ]
    },
    "dia5": {
        name: "TEST",
        exercises: [
            {
                order: 1,
                name: "Muscle Snatch Unilat con Mancuerna/KTB",
                isSuperset: true,
                items: [
                    {
                        name: "Muscle Snatch Unilat con Mancuerna/KTB",
                        subOrder: 1,
                        sets: 6,
                        reps: "12, 10, 8, 6, 4, 2",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/shorts/00FzH7YaDwc",
                        imageUrl: "https://i.ytimg.com/vi/00FzH7YaDwc/mqdefault.jpg"
                    },
                    {
                        name: "Remo Renegade Alterno + Peso Muerto con Mancuernas",
                        subOrder: 2,
                        sets: 6,
                        reps: "20, 18, 16, 14, 12, 10",
                        videoUrl: "https://www.youtube.com/shorts/HH8uoLbhWSw",
                        imageUrl: "https://i.ytimg.com/vi/HH8uoLbhWSw/mqdefault.jpg"
                    },
                    {
                        name: "Sentadilla con Salto",
                        subOrder: 3,
                        sets: 6,
                        reps: "30, 25, 20, 15, 10 5",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/watch?v=1-Mum4hyIJ0",
                        imageUrl: "https://i.ytimg.com/vi/1-Mum4hyIJ0/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/00FzH7YaDwc",
                imageUrl: "https://i.ytimg.com/vi/00FzH7YaDwc/mqdefault.jpg"
            }
        ]
    }
};

const exerciseAlternatives = {
};

console.log("Datos de rutina cargados desde el creador.");
// Export if using modules in the target app, or remove if it's a simple script include
// export { workoutData, exerciseAlternatives };
