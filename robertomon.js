// Titulo: p1_3d_fb_home_1
// Notas: Mancuernas/KTB y TRX

// Contenido de app_datos.js

// =================================================================================
// DATOS DE LA RUTINA (4 DÍAS)
// =================================================================================
const workoutData = {
    "dia1": {
        name: "Mañanas 1",
        exercises: [
            {
                order: 1,
                name: "Dominadas Australianas en TRX",
                sets: 4,
                reps: "10",
                rest: "60s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/f2-aezhuOoQ",
                imageUrl: "https://i.ytimg.com/vi/f2-aezhuOoQ/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Snatch + Thruster Unilat Alterno con Mancuerna",
                isSuperset: true,
                items: [
                    {
                        name: "Snatch + Thruster Unilat Alterno con Mancuerna",
                        subOrder: 1,
                        sets: 3,
                        reps: "12",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/shorts/jNbG4xt8zCs",
                        imageUrl: "https://i.ytimg.com/vi/jNbG4xt8zCs/mqdefault.jpg"
                    },
                    {
                        name: "Plancha - Normal",
                        subOrder: 2,
                        sets: 3,
                        reps: "45s",
                        rest: "90s",
                        videoUrl: "https://youtu.be/DQ4wYExQRJo",
                        imageUrl: "https://i.ytimg.com/vi/DQ4wYExQRJo/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/jNbG4xt8zCs",
                imageUrl: "https://i.ytimg.com/vi/jNbG4xt8zCs/mqdefault.jpg"
            },
            {
                order: 3,
                name: "EMOM",
                isSuperset: true,
                isEMOM: true,
                emomDetails: {
                    totalIntervals: 10,
                    workIntervalSeconds: 60
                },
                items: [
                    {
                        name: "Remo Horizontal en TRX",
                        subOrder: 1,
                        sets: 1,
                        reps: "15",
                        isEMOMItem: true,
                        videoUrl: "https://www.youtube.com/watch?v=uTA2s5FuRUM",
                        imageUrl: "https://i.ytimg.com/vi/uTA2s5FuRUM/mqdefault.jpg"
                    },
                    {
                        name: "Worm + Flexión",
                        subOrder: 2,
                        sets: 1,
                        reps: "5",
                        isEMOMItem: true,
                        videoUrl: "https://www.youtube.com/watch?v=FhJAsfzBj50",
                        imageUrl: "https://i.ytimg.com/vi/FhJAsfzBj50/mqdefault.jpg"
                    }
                ],
                notes: "Mantén una inclinación paralela al suelo.",
                videoUrl: "https://www.youtube.com/watch?v=uTA2s5FuRUM",
                imageUrl: "https://i.ytimg.com/vi/uTA2s5FuRUM/mqdefault.jpg"
            }
        ]
    },
    "dia2": {
        name: "Mañanas 2",
        exercises: [
            {
                order: 1,
                name: "Flexiones Tempo 1:1",
                sets: 4,
                reps: "10",
                rest: "60s",
                notes: "Puedes hacerlas de rodillas cuando no puedas más. ",
                videoUrl: "https://www.youtube.com/shorts/-9Md7Htla-o",
                imageUrl: "https://i.ytimg.com/vi/-9Md7Htla-o/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Sentadilla Búlgara en TRX",
                isSuperset: true,
                items: [
                    {
                        name: "Sentadilla Búlgara en TRX",
                        subOrder: 1,
                        sets: 3,
                        reps: "12",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/shorts/1IiEF0y17pM",
                        imageUrl: "https://i.ytimg.com/vi/1IiEF0y17pM/mqdefault.jpg"
                    },
                    {
                        name: "Crunch Abdominal Piernas Extendidas",
                        subOrder: 2,
                        sets: 3,
                        reps: "45s",
                        rest: "90s",
                        videoUrl: "https://youtu.be/TYNp3OsGKL0",
                        imageUrl: "https://i.ytimg.com/vi/TYNp3OsGKL0/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/1IiEF0y17pM",
                imageUrl: "https://i.ytimg.com/vi/1IiEF0y17pM/mqdefault.jpg"
            },
            {
                order: 3,
                name: "EMOM",
                isSuperset: true,
                isEMOM: true,
                emomDetails: {
                    totalIntervals: 10,
                    workIntervalSeconds: 60
                },
                items: [
                    {
                        name: "Zancadas Caminando con Mancuernas/Kettlebells",
                        subOrder: 1,
                        sets: 1,
                        reps: "14",
                        isEMOMItem: true,
                        videoUrl: "https://youtu.be/7tRy9X0ibnk",
                        imageUrl: "https://i.ytimg.com/vi/7tRy9X0ibnk/mqdefault.jpg"
                    },
                    {
                        name: "Press Militar Sentado con Mancuernas",
                        subOrder: 2,
                        sets: 1,
                        reps: "10",
                        isEMOMItem: true,
                        videoUrl: "https://www.youtube.com/watch?v=_IMpMCr87Cg",
                        imageUrl: "https://i.ytimg.com/vi/_IMpMCr87Cg/mqdefault.jpg"
                    }
                ],
                notes: "Zancadas cortas como en el vídeo para priorizar trabajo de cuádriceps. Talón del pie delantero a la altura de la rodilla trasera.",
                videoUrl: "https://youtu.be/7tRy9X0ibnk",
                imageUrl: "https://i.ytimg.com/vi/7tRy9X0ibnk/mqdefault.jpg"
            }
        ]
    },
    "dia3": {
        name: "Fullbody Push",
        exercises: [
            {
                order: 1,
                name: "Worm + Rotaciones de Tronco",
                isSuperset: true,
                items: [
                    {
                        name: "Worm + Rotaciones de Tronco",
                        subOrder: 1,
                        sets: 2,
                        reps: "4",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/watch?v=A8MFPgYNoGs",
                        imageUrl: "https://i.ytimg.com/vi/A8MFPgYNoGs/mqdefault.jpg"
                    },
                    {
                        name: "Sentadilla con Salto",
                        subOrder: 2,
                        sets: 2,
                        reps: "10",
                        notes: "Puedes hacerlas sin salto si lo prefieres.",
                        rest: "30s",
                        videoUrl: "https://www.youtube.com/watch?v=1-Mum4hyIJ0",
                        imageUrl: "https://i.ytimg.com/vi/1-Mum4hyIJ0/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=A8MFPgYNoGs",
                imageUrl: "https://i.ytimg.com/vi/A8MFPgYNoGs/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Floor Press con Mancuernas",
                sets: 3,
                reps: "10",
                rest: "90s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/Iu02N3s7zgQ",
                imageUrl: "https://i.ytimg.com/vi/Iu02N3s7zgQ/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Remo Unilat con Mancuerna/KTB (Explicado)",
                isSuperset: true,
                items: [
                    {
                        name: "Remo Unilat con Mancuerna/KTB (Explicado)",
                        subOrder: 1,
                        sets: 3,
                        reps: "10",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/uH9Hg4nWOG8",
                        imageUrl: "https://i.ytimg.com/vi/uH9Hg4nWOG8/mqdefault.jpg"
                    },
                    {
                        name: "Plancha Lateral Dinámica sobre Antebrazo",
                        subOrder: 2,
                        sets: 3,
                        reps: "20s",
                        notes: "Haz ambos lados.",
                        videoUrl: "https://www.youtube.com/watch?v=fhCo3uoboAU",
                        imageUrl: "https://i.ytimg.com/vi/fhCo3uoboAU/mqdefault.jpg"
                    },
                    {
                        name: "Plancha Lateral Dinámica sobre Antebrazo",
                        subOrder: 3,
                        sets: 3,
                        reps: "20s",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/watch?v=fhCo3uoboAU",
                        imageUrl: "https://i.ytimg.com/vi/fhCo3uoboAU/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/uH9Hg4nWOG8",
                imageUrl: "https://i.ytimg.com/vi/uH9Hg4nWOG8/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Zancada Trasera Alterna con Mancuernas/KTB",
                isSuperset: true,
                items: [
                    {
                        name: "Zancada Trasera Alterna con Mancuernas/KTB",
                        subOrder: 1,
                        sets: 3,
                        reps: "20",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/watch?v=Kzv73cEkTq4",
                        imageUrl: "https://i.ytimg.com/vi/Kzv73cEkTq4/mqdefault.jpg"
                    },
                    {
                        name: "Flexiones + Mountain Climbers",
                        subOrder: 2,
                        sets: 3,
                        reps: "10",
                        notes: "Puedes hacerlas de rodillas.",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/shorts/1wdJ5RSUCBE",
                        imageUrl: "https://i.ytimg.com/vi/1wdJ5RSUCBE/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=Kzv73cEkTq4",
                imageUrl: "https://i.ytimg.com/vi/Kzv73cEkTq4/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Thruster con Mancuernas",
                isSuperset: true,
                items: [
                    {
                        name: "Thruster con Mancuernas",
                        subOrder: 1,
                        sets: 3,
                        reps: "10",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/watch?v=5mTjKFubavs",
                        imageUrl: "https://i.ytimg.com/vi/5mTjKFubavs/mqdefault.jpg"
                    },
                    {
                        name: "Sentadilla Goblet con Mancuerna/Kettlebell",
                        subOrder: 2,
                        sets: 3,
                        reps: "12",
                        videoUrl: "https://youtu.be/xPVfWX_9ytk",
                        imageUrl: "https://i.ytimg.com/vi/xPVfWX_9ytk/mqdefault.jpg"
                    },
                    {
                        name: "Plancha - Normal",
                        subOrder: 3,
                        sets: 3,
                        reps: "30s",
                        rest: "90s",
                        videoUrl: "https://youtu.be/DQ4wYExQRJo",
                        imageUrl: "https://i.ytimg.com/vi/DQ4wYExQRJo/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=5mTjKFubavs",
                imageUrl: "https://i.ytimg.com/vi/5mTjKFubavs/mqdefault.jpg"
            }
        ]
    },
    "dia4": {
        name: "Fullbody Pull",
        exercises: [
            {
                order: 1,
                name: "Remo en TRX",
                isSuperset: true,
                items: [
                    {
                        name: "Remo en TRX",
                        subOrder: 1,
                        sets: 2,
                        reps: "8",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/watch?v=L6F1ZKsrRGI",
                        imageUrl: "https://i.ytimg.com/vi/L6F1ZKsrRGI/mqdefault.jpg"
                    },
                    {
                        name: "Shoulder Taps",
                        subOrder: 2,
                        sets: 2,
                        reps: "16",
                        rest: "30s",
                        videoUrl: "https://www.youtube.com/shorts/viyHk_K7I48",
                        imageUrl: "https://i.ytimg.com/vi/viyHk_K7I48/mqdefault.jpg"
                    }
                ],
                notes: "Asegúrate de que no se mueva la cadera en el segundo ejercicio.",
                videoUrl: "https://www.youtube.com/watch?v=L6F1ZKsrRGI",
                imageUrl: "https://i.ytimg.com/vi/L6F1ZKsrRGI/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Face Pull en TRX / Rings / Anillas",
                sets: 3,
                reps: "10",
                rest: "90s",
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=rIpWyPV45PU",
                imageUrl: "https://i.ytimg.com/vi/rIpWyPV45PU/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Sentadilla Frontal con Mancuernas/Kettlebells",
                isSuperset: true,
                items: [
                    {
                        name: "Sentadilla Frontal con Mancuernas/Kettlebells",
                        subOrder: 1,
                        sets: 3,
                        reps: "10",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/lfb6neUpfP8",
                        imageUrl: "https://i.ytimg.com/vi/lfb6neUpfP8/mqdefault.jpg"
                    },
                    {
                        name: "Plancha - Lateral elevando Rodilla",
                        subOrder: 2,
                        sets: 3,
                        reps: "20s",
                        notes: "Haz ambos lados.",
                        videoUrl: "https://youtu.be/ROVRkBnD4zg",
                        imageUrl: "https://i.ytimg.com/vi/ROVRkBnD4zg/mqdefault.jpg"
                    },
                    {
                        name: "Plancha - Lateral elevando Rodilla",
                        subOrder: 3,
                        sets: 3,
                        reps: "20s",
                        rest: "90s",
                        videoUrl: "https://youtu.be/ROVRkBnD4zg",
                        imageUrl: "https://i.ytimg.com/vi/ROVRkBnD4zg/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/lfb6neUpfP8",
                imageUrl: "https://i.ytimg.com/vi/lfb6neUpfP8/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Press Militar Unilat de Pie con Mancuerna/KTB",
                isSuperset: true,
                items: [
                    {
                        name: "Press Militar Unilat de Pie con Mancuerna/KTB",
                        subOrder: 1,
                        sets: 3,
                        reps: "10",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/shorts/vIK0qkXP_f0",
                        imageUrl: "https://i.ytimg.com/vi/vIK0qkXP_f0/mqdefault.jpg"
                    },
                    {
                        name: "Fondos en Banco",
                        subOrder: 2,
                        sets: 3,
                        reps: "12",
                        rest: "90s",
                        videoUrl: "https://youtu.be/NSB_HrDwd6I",
                        imageUrl: "https://i.ytimg.com/vi/NSB_HrDwd6I/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/vIK0qkXP_f0",
                imageUrl: "https://i.ytimg.com/vi/vIK0qkXP_f0/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Remo Horizontal en TRX",
                isSuperset: true,
                items: [
                    {
                        name: "Remo Horizontal en TRX",
                        subOrder: 1,
                        sets: 3,
                        reps: "12",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/watch?v=uTA2s5FuRUM",
                        imageUrl: "https://i.ytimg.com/vi/uTA2s5FuRUM/mqdefault.jpg"
                    },
                    {
                        name: "Remo Renegade Alterno con Mancuernas",
                        subOrder: 2,
                        sets: 3,
                        reps: "16",
                        videoUrl: "https://www.youtube.com/watch?v=FjwFzYXSK70",
                        imageUrl: "https://i.ytimg.com/vi/FjwFzYXSK70/mqdefault.jpg"
                    },
                    {
                        name: "Hollow - Nivel 2",
                        subOrder: 3,
                        sets: 3,
                        reps: "30s",
                        rest: "90s",
                        videoUrl: "https://youtu.be/lFEg3UQYM3g",
                        imageUrl: "https://i.ytimg.com/vi/lFEg3UQYM3g/mqdefault.jpg"
                    }
                ],
                notes: "Mantén una inclinación paralela al suelo.",
                videoUrl: "https://www.youtube.com/watch?v=uTA2s5FuRUM",
                imageUrl: "https://i.ytimg.com/vi/uTA2s5FuRUM/mqdefault.jpg"
            }
        ]
    }
};

const exerciseAlternatives = {
    "Floor Press con Mancuernas": [
        { name: "Flexiones Tempo 1:1", videoUrl: "https://www.youtube.com/shorts/-9Md7Htla-o", imageUrl: "https://i.ytimg.com/vi/-9Md7Htla-o/mqdefault.jpg" }
    ],
    "Face Pull en TRX / Rings / Anillas": [
        { name: "Gomas - FacePull en Columna", videoUrl: "https://youtu.be/KnnWfHUjsKg", imageUrl: "https://i.ytimg.com/vi/KnnWfHUjsKg/mqdefault.jpg" }
    ]
};

console.log("Datos de rutina cargados desde el creador.");
// Export if using modules in the target app, or remove if it's a simple script include
// export { workoutData, exerciseAlternatives };
