// Titulo: p2_3d_fbcardio_2_home
// Notas: - Añadimos 1 serie al PRINCIPAL (No subimos repeticiones, SUBE PESO).
// - Añadimos 1 vuelta al circuito CARDIO y bajamos tiempo a la mitad).
// - Añadimos 1 vuelta al circuito final.

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
                name: "Press Militar Sentado con Mancuernas (Explicado)",
                sets: 4,
                reps: "10",
                rest: "90s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/2ZkYyh4ic0o",
                imageUrl: "https://i.ytimg.com/vi/2ZkYyh4ic0o/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Sentadilla Frontal con Mancuernas/Kettlebells",
                isSuperset: true,
                items: [
                    {
                        name: "Sentadilla Frontal con Mancuernas/Kettlebells",
                        subOrder: 1,
                        sets: 4,
                        reps: "12",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/lfb6neUpfP8",
                        imageUrl: "https://i.ytimg.com/vi/lfb6neUpfP8/mqdefault.jpg"
                    },
                    {
                        name: "Zancada Dinámica",
                        subOrder: 2,
                        sets: 4,
                        reps: "45s",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/watch?v=eSAN1E5usJI",
                        imageUrl: "https://i.ytimg.com/vi/eSAN1E5usJI/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/lfb6neUpfP8",
                imageUrl: "https://i.ytimg.com/vi/lfb6neUpfP8/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Flexiones con Peso Corporal",
                sets: 3,
                reps: "12",
                rest: "60s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/jqnnetMI-4s",
                imageUrl: "https://i.ytimg.com/vi/jqnnetMI-4s/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Snatch + Thruster Unilat Alterno con Mancuerna",
                sets: 3,
                reps: "16, 12, 10",
                rest: "90s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/jNbG4xt8zCs",
                imageUrl: "https://i.ytimg.com/vi/jNbG4xt8zCs/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Zancadas Caminando con Mancuernas/Kettlebells",
                isSuperset: true,
                items: [
                    {
                        name: "Zancadas Caminando con Mancuernas/Kettlebells",
                        subOrder: 1,
                        sets: 4,
                        reps: "16",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/7tRy9X0ibnk",
                        imageUrl: "https://i.ytimg.com/vi/7tRy9X0ibnk/mqdefault.jpg"
                    },
                    {
                        name: "Fondos en Banco",
                        subOrder: 2,
                        sets: 4,
                        reps: "10",
                        rest: "90s",
                        videoUrl: "https://youtu.be/NSB_HrDwd6I",
                        imageUrl: "https://i.ytimg.com/vi/NSB_HrDwd6I/mqdefault.jpg"
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
                name: "Remo Unilat con Mancuerna/KTB (Explicado)",
                sets: 4,
                reps: "10",
                rest: "90s",
                notes: "",
                videoUrl: "https://youtu.be/uH9Hg4nWOG8",
                imageUrl: "https://i.ytimg.com/vi/uH9Hg4nWOG8/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Sentadilla Búlgara con Mancuerna",
                isSuperset: true,
                items: [
                    {
                        name: "Sentadilla Búlgara con Mancuerna",
                        subOrder: 1,
                        sets: 4,
                        reps: "12",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/kA6bHiDdTO4",
                        imageUrl: "https://i.ytimg.com/vi/kA6bHiDdTO4/mqdefault.jpg"
                    },
                    {
                        name: "Cuerpo Libre - Cardio - Burpee sin Flexión",
                        subOrder: 2,
                        sets: 4,
                        reps: "45s",
                        rest: "90s",
                        videoUrl: "https://youtu.be/_liq4fAscDU",
                        imageUrl: "https://i.ytimg.com/vi/_liq4fAscDU/mqdefault.jpg"
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
                name: "Dominadas Australianas en TRX",
                isSuperset: true,
                items: [
                    {
                        name: "Dominadas Australianas en TRX",
                        subOrder: 1,
                        sets: 4,
                        reps: "10",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/shorts/f2-aezhuOoQ",
                        imageUrl: "https://i.ytimg.com/vi/f2-aezhuOoQ/mqdefault.jpg"
                    },
                    {
                        name: "CARDIO - Shoulder Taps con Salto Adelante",
                        subOrder: 2,
                        sets: 4,
                        reps: "10",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/shorts/xWUxD4rzmfQ",
                        imageUrl: "https://i.ytimg.com/vi/xWUxD4rzmfQ/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/f2-aezhuOoQ",
                imageUrl: "https://i.ytimg.com/vi/f2-aezhuOoQ/mqdefault.jpg"
            }
        ]
    },
    "dia3": {
        name: "Torso Completo",
        exercises: [
            {
                order: 1,
                name: "Floor Press con Mancuernas",
                sets: 4,
                reps: "10",
                rest: "90s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/Iu02N3s7zgQ",
                imageUrl: "https://i.ytimg.com/vi/Iu02N3s7zgQ/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Remo Unilateral con Banda Elástica",
                sets: 4,
                reps: "10",
                rest: "90s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/90NfKSOGEVI",
                imageUrl: "https://i.ytimg.com/vi/90NfKSOGEVI/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Gorilla Row con Kettlebells/Mancuernas",
                isSuperset: true,
                items: [
                    {
                        name: "Gorilla Row con Kettlebells/Mancuernas",
                        subOrder: 1,
                        sets: 4,
                        reps: "16",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/4hKPsdWsXl8",
                        imageUrl: "https://i.ytimg.com/vi/4hKPsdWsXl8/mqdefault.jpg"
                    },
                    {
                        name: "Saltos - Vertical Jump",
                        subOrder: 2,
                        sets: 4,
                        reps: "45s",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/watch?v=UH-3LUWzBpU",
                        imageUrl: "https://i.ytimg.com/vi/UH-3LUWzBpU/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/4hKPsdWsXl8",
                imageUrl: "https://i.ytimg.com/vi/4hKPsdWsXl8/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Press Militar Unilat de Pie con Mancuerna/KTB",
                isSuperset: true,
                items: [
                    {
                        name: "Press Militar Unilat de Pie con Mancuerna/KTB",
                        subOrder: 1,
                        sets: 4,
                        reps: "12, 10, 8",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/shorts/vIK0qkXP_f0",
                        imageUrl: "https://i.ytimg.com/vi/vIK0qkXP_f0/mqdefault.jpg"
                    },
                    {
                        name: "Fondos en Banco",
                        subOrder: 2,
                        sets: 4,
                        reps: "12, 10, 8",
                        videoUrl: "https://youtu.be/NSB_HrDwd6I",
                        imageUrl: "https://i.ytimg.com/vi/NSB_HrDwd6I/mqdefault.jpg"
                    },
                    {
                        name: "Curl de Biceps con TRX",
                        subOrder: 3,
                        sets: 4,
                        reps: "12, 10, 8",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/shorts/W1C5ABPg_Ak",
                        imageUrl: "https://i.ytimg.com/vi/W1C5ABPg_Ak/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/vIK0qkXP_f0",
                imageUrl: "https://i.ytimg.com/vi/vIK0qkXP_f0/mqdefault.jpg"
            }
        ]
    }
};

const exerciseAlternatives = {
    "Press Militar Sentado con Mancuernas (Explicado)": [
        { name: "Press Militar Unilat de Pie con Mancuerna/KTB", videoUrl: "https://www.youtube.com/shorts/vIK0qkXP_f0", imageUrl: "https://i.ytimg.com/vi/vIK0qkXP_f0/mqdefault.jpg" }
    ],
    "Remo Unilat con Mancuerna/KTB (Explicado)": [
        { name: "Remo Unilat en TRX", videoUrl: "https://www.youtube.com/watch?v=sIM4_aMGdlk", imageUrl: "https://i.ytimg.com/vi/sIM4_aMGdlk/mqdefault.jpg" }
    ]
};

console.log("Datos de rutina cargados desde el creador.");
