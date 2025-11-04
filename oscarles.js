// Titulo: p2_3d_fbcardio_1_home

// Contenido de app_datos.js

// =================================================================================
// DATOS DE LA RUTINA (3 DÍAS)
// =================================================================================
const workoutData = {
    "dia1": {
        name: "Fullbody Anterior",
        exercises: [
            {
                order: 1,
                name: "Floor Press con Mancuernas",
                sets: 3,
                reps: "10",
                rest: "120s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/Iu02N3s7zgQ",
                imageUrl: "https://i.ytimg.com/vi/Iu02N3s7zgQ/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Sentadilla Frontal con Mancuernas/Kettlebells",
                isSuperset: true,
                items: [
                    {
                        name: "Sentadilla Frontal con Mancuernas/Kettlebells",
                        subOrder: 1,
                        sets: 3,
                        reps: "12",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/lfb6neUpfP8",
                        imageUrl: "https://i.ytimg.com/vi/lfb6neUpfP8/mqdefault.jpg"
                    },
                    {
                        name: "Cuerpo Libre - Cardio - Burpee sin Flexión",
                        subOrder: 2,
                        sets: 3,
                        reps: "90s",
                        rest: "90s",
                        videoUrl: "https://youtu.be/_liq4fAscDU",
                        imageUrl: "https://i.ytimg.com/vi/_liq4fAscDU/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/lfb6neUpfP8",
                imageUrl: "https://i.ytimg.com/vi/lfb6neUpfP8/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Zancada Trasera Alterna con Mancuernas/KTB",
                sets: 3,
                reps: "12",
                rest: "60s",
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=Kzv73cEkTq4",
                imageUrl: "https://i.ytimg.com/vi/Kzv73cEkTq4/mqdefault.jpg"
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
                        reps: "12, 10, 8",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/shorts/vIK0qkXP_f0",
                        imageUrl: "https://i.ytimg.com/vi/vIK0qkXP_f0/mqdefault.jpg"
                    },
                    {
                        name: "Press Militar Unilat de Pie con Mancuerna/KTB",
                        subOrder: 2,
                        sets: 3,
                        reps: "12, 10, 8",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/shorts/vIK0qkXP_f0",
                        imageUrl: "https://i.ytimg.com/vi/vIK0qkXP_f0/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/vIK0qkXP_f0",
                imageUrl: "https://i.ytimg.com/vi/vIK0qkXP_f0/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Zancadas Caminando con Mancuernas/Kettlebells",
                isSuperset: true,
                items: [
                    {
                        name: "Zancadas Caminando con Mancuernas/Kettlebells",
                        subOrder: 1,
                        sets: 3,
                        reps: "16",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/7tRy9X0ibnk",
                        imageUrl: "https://i.ytimg.com/vi/7tRy9X0ibnk/mqdefault.jpg"
                    },
                    {
                        name: "Flexiones + Mountain Climbers",
                        subOrder: 2,
                        sets: 3,
                        reps: "10",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/shorts/1wdJ5RSUCBE",
                        imageUrl: "https://i.ytimg.com/vi/1wdJ5RSUCBE/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/7tRy9X0ibnk",
                imageUrl: "https://i.ytimg.com/vi/7tRy9X0ibnk/mqdefault.jpg"
            }
        ]
    },
    "dia2": {
        name: "Fullbody Posterior",
        exercises: [
            {
                order: 1,
                name: "Dominadas Australianas en TRX",
                sets: 3,
                reps: "10",
                rest: "120s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/f2-aezhuOoQ",
                imageUrl: "https://i.ytimg.com/vi/f2-aezhuOoQ/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Sentadilla Búlgara con Mancuerna",
                isSuperset: true,
                items: [
                    {
                        name: "Sentadilla Búlgara con Mancuerna",
                        subOrder: 1,
                        sets: 3,
                        reps: "12",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/kA6bHiDdTO4",
                        imageUrl: "https://i.ytimg.com/vi/kA6bHiDdTO4/mqdefault.jpg"
                    },
                    {
                        name: "Cuerpo Libre - Cardio - Over-Head Jumping Jack",
                        subOrder: 2,
                        sets: 3,
                        reps: "90s",
                        rest: "90s",
                        videoUrl: "https://youtu.be/ZU5OglDiAQY",
                        imageUrl: "https://i.ytimg.com/vi/ZU5OglDiAQY/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/kA6bHiDdTO4",
                imageUrl: "https://i.ytimg.com/vi/kA6bHiDdTO4/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Remo Unilat con Mancuerna/KTB (Explicado)",
                sets: 3,
                reps: "10",
                rest: "60s",
                notes: "",
                videoUrl: "https://youtu.be/uH9Hg4nWOG8",
                imageUrl: "https://i.ytimg.com/vi/uH9Hg4nWOG8/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Curl Martillo con Mancuernas",
                sets: 3,
                reps: "12, 10, 8",
                rest: "90s",
                notes: "",
                videoUrl: "https://youtu.be/fcFsPoJY9lg",
                imageUrl: "https://i.ytimg.com/vi/fcFsPoJY9lg/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Remo en TRX",
                isSuperset: true,
                items: [
                    {
                        name: "Remo en TRX",
                        subOrder: 1,
                        sets: 3,
                        reps: "12",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/watch?v=L6F1ZKsrRGI",
                        imageUrl: "https://i.ytimg.com/vi/L6F1ZKsrRGI/mqdefault.jpg"
                    },
                    {
                        name: "Remo Renegade + Flexión con Mancuernas",
                        subOrder: 2,
                        sets: 3,
                        reps: "10",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/shorts/hLPJik1MaaY",
                        imageUrl: "https://i.ytimg.com/vi/hLPJik1MaaY/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=L6F1ZKsrRGI",
                imageUrl: "https://i.ytimg.com/vi/L6F1ZKsrRGI/mqdefault.jpg"
            }
        ]
    },
    "dia3": {
        name: "Torso Completo",
        exercises: [
            {
                order: 1,
                name: "Gorilla Row con Kettlebells/Mancuernas",
                sets: 3,
                reps: "20",
                rest: "90s",
                notes: "",
                videoUrl: "https://youtu.be/4hKPsdWsXl8",
                imageUrl: "https://i.ytimg.com/vi/4hKPsdWsXl8/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Flexiones con Lastre",
                sets: 3,
                reps: "10",
                rest: "90s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/gLBrKowP2eo",
                imageUrl: "https://i.ytimg.com/vi/gLBrKowP2eo/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Thruster con Mancuernas",
                isSuperset: true,
                items: [
                    {
                        name: "Thruster con Mancuernas",
                        subOrder: 1,
                        sets: 3,
                        reps: "12",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/watch?v=5mTjKFubavs",
                        imageUrl: "https://i.ytimg.com/vi/5mTjKFubavs/mqdefault.jpg"
                    },
                    {
                        name: "Cuerpo Libre - Cardio - Sentadilla con Salto en Step",
                        subOrder: 2,
                        sets: 3,
                        reps: "90s",
                        rest: "90s",
                        videoUrl: "https://youtu.be/7ckSQy2BtWw",
                        imageUrl: "https://i.ytimg.com/vi/7ckSQy2BtWw/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=5mTjKFubavs",
                imageUrl: "https://i.ytimg.com/vi/5mTjKFubavs/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Press Militar Sentado con Mancuernas",
                isSuperset: true,
                items: [
                    {
                        name: "Press Militar Sentado con Mancuernas",
                        subOrder: 1,
                        sets: 3,
                        reps: "12, 10, 8",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/watch?v=_IMpMCr87Cg",
                        imageUrl: "https://i.ytimg.com/vi/_IMpMCr87Cg/mqdefault.jpg"
                    },
                    {
                        name: "Fondos en Banco",
                        subOrder: 2,
                        sets: 3,
                        reps: "12, 10, 8",
                        videoUrl: "https://youtu.be/NSB_HrDwd6I",
                        imageUrl: "https://i.ytimg.com/vi/NSB_HrDwd6I/mqdefault.jpg"
                    },
                    {
                        name: "Curl con Mancuernas de Pie Alterno",
                        subOrder: 3,
                        sets: 3,
                        reps: "20, 16, 12",
                        rest: "90s",
                        videoUrl: "https://youtu.be/85KCpAw9CE4",
                        imageUrl: "https://i.ytimg.com/vi/85KCpAw9CE4/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=_IMpMCr87Cg",
                imageUrl: "https://i.ytimg.com/vi/_IMpMCr87Cg/mqdefault.jpg"
            }
        ]
    }
};

const exerciseAlternatives = {
    "Sentadilla Frontal con Mancuernas/Kettlebells": [
        { name: "Sentadilla Trasera en Multipower", videoUrl: "https://youtu.be/la-dqygoIuk", imageUrl: "https://i.ytimg.com/vi/la-dqygoIuk/mqdefault.jpg" }
    ]
};

console.log("Datos de rutina cargados desde el creador.");
// Export if using modules in the target app, or remove if it's a simple script include
// export { workoutData, exerciseAlternatives };
