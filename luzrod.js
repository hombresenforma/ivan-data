// Titulo: luzrod

// Contenido de app_datos.js

// =================================================================================
// DATOS DE LA RUTINA (3 DÍAS)
// =================================================================================
const workoutData = {
    "dia1": {
        name: "Torso Completo",
        exercises: [
            {
                order: 1,
                name: "Dominadas / Pull Ups asistidas con Goma",
                sets: 4,
                reps: "8, 6, 4, 4",
                rest: "90s",
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=pll4AdUg17g",
                imageUrl: "https://i.ytimg.com/vi/pll4AdUg17g/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Fondos en Paralelas con Peso Corporal",
                sets: 4,
                reps: "8, 6, 4, 4",
                rest: "90s",
                notes: "Puedes usar banda elástica si lo necesitas",
                videoUrl: "https://youtube.com/shorts/om9U8WY5HoY",
                imageUrl: "https://i.ytimg.com/vi/om9U8WY5HoY/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Remo Invertido",
                isSuperset: true,
                items: [
                    {
                        name: "Remo Invertido",
                        subOrder: 1,
                        sets: 3,
                        reps: "10-12",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/watch?v=hdEpF62-Jb8",
                        imageUrl: "https://i.ytimg.com/vi/hdEpF62-Jb8/mqdefault.jpg"
                    },
                    {
                        name: "Face Pull con KTB",
                        subOrder: 2,
                        sets: 3,
                        reps: "15",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/shorts/RIS2s-UkKOk",
                        imageUrl: "https://i.ytimg.com/vi/RIS2s-UkKOk/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=hdEpF62-Jb8",
                imageUrl: "https://i.ytimg.com/vi/hdEpF62-Jb8/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Flexiones Tempo 1:1",
                isSuperset: true,
                items: [
                    {
                        name: "Flexiones Tempo 1:1",
                        subOrder: 1,
                        sets: 3,
                        reps: "10-12",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/shorts/-9Md7Htla-o",
                        imageUrl: "https://i.ytimg.com/vi/-9Md7Htla-o/mqdefault.jpg"
                    },
                    {
                        name: "Kettlebell - Thruster",
                        subOrder: 2,
                        sets: 3,
                        reps: "15",
                        rest: "90s",
                        videoUrl: "https://youtube.com/shorts/52JAS52W8Hw",
                        imageUrl: "https://i.ytimg.com/vi/52JAS52W8Hw/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/-9Md7Htla-o",
                imageUrl: "https://i.ytimg.com/vi/-9Md7Htla-o/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Curl de Biceps con TRX+Banda",
                isSuperset: true,
                items: [
                    {
                        name: "Curl de Biceps con TRX+Banda",
                        subOrder: 1,
                        sets: 3,
                        reps: "10-12",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/shorts/O-iK5Fb7gYc",
                        imageUrl: "https://i.ytimg.com/vi/O-iK5Fb7gYc/mqdefault.jpg"
                    },
                    {
                        name: "Press Pallof Alterno con Rotación en TRX+Banda",
                        subOrder: 2,
                        sets: 3,
                        reps: "16",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/shorts/CNs-Q357rMY",
                        imageUrl: "https://i.ytimg.com/vi/CNs-Q357rMY/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/O-iK5Fb7gYc",
                imageUrl: "https://i.ytimg.com/vi/O-iK5Fb7gYc/mqdefault.jpg"
            }
        ]
    },
    "dia2": {
        name: "Pierna Completa",
        exercises: [
            {
                order: 1,
                name: "Zancada Trasera Alterna con Mancuernas/KTB",
                sets: 4,
                reps: "16, 12, 8, 8",
                rest: "90s",
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=Kzv73cEkTq4",
                imageUrl: "https://i.ytimg.com/vi/Kzv73cEkTq4/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Peso Muerto Rumano con Mancuernas",
                sets: 4,
                reps: "12, 10, 8, 8",
                rest: "90s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/SMll4DOYvEs",
                imageUrl: "https://i.ytimg.com/vi/SMll4DOYvEs/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Gomas - Banded hip thrust",
                isSuperset: true,
                items: [
                    {
                        name: "Gomas - Banded hip thrust",
                        subOrder: 1,
                        sets: 3,
                        reps: "12-15",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/watch?v=z8z0biVVaQY",
                        imageUrl: "https://i.ytimg.com/vi/z8z0biVVaQY/mqdefault.jpg"
                    },
                    {
                        name: "Zancadas Caminando con Mancuernas/Kettlebells",
                        subOrder: 2,
                        sets: 3,
                        reps: "20",
                        rest: "90s",
                        videoUrl: "https://youtu.be/7tRy9X0ibnk",
                        imageUrl: "https://i.ytimg.com/vi/7tRy9X0ibnk/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=z8z0biVVaQY",
                imageUrl: "https://i.ytimg.com/vi/z8z0biVVaQY/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Sentadilla Frontal con Mancuernas/Kettlebells",
                isSuperset: true,
                items: [
                    {
                        name: "Sentadilla Frontal con Mancuernas/Kettlebells",
                        subOrder: 1,
                        sets: 3,
                        reps: "10-12",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/lfb6neUpfP8",
                        imageUrl: "https://i.ytimg.com/vi/lfb6neUpfP8/mqdefault.jpg"
                    },
                    {
                        name: "Cuerpo Libre - Cardio - Sentadilla con Salto en Step",
                        subOrder: 2,
                        sets: 3,
                        reps: "15",
                        rest: "90s",
                        videoUrl: "https://youtu.be/7ckSQy2BtWw",
                        imageUrl: "https://i.ytimg.com/vi/7ckSQy2BtWw/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/lfb6neUpfP8",
                imageUrl: "https://i.ytimg.com/vi/lfb6neUpfP8/mqdefault.jpg"
            }
        ]
    },
    "dia3": {
        name: "HIIT + Abdominales",
        exercises: [
            {
                order: 1,
                name: "EMOM 10' PASADAS",
                isSuperset: true,
                isEMOM: true,
                emomDetails: {
                    totalIntervals: 10,
                    workIntervalSeconds: 60
                },
                items: [
                    {
                        name: "CARDIO - Correr (Sprint)",
                        subOrder: 1,
                        sets: 1,
                        reps: "20s",
                        isEMOMItem: true,
                        videoUrl: "https://youtu.be/KKvRtNn904g",
                        imageUrl: "https://i.ytimg.com/vi/KKvRtNn904g/mqdefault.jpg"
                    },
                    {
                        name: "CARDIO - Correr (Suave)",
                        subOrder: 3,
                        sets: 1,
                        reps: "60s",
                        isEMOMItem: true,
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
                name: "Crunch - Bicycle Crunch",
                isSuperset: true,
                items: [
                    {
                        name: "Crunch - Bicycle Crunch",
                        subOrder: 1,
                        sets: 3,
                        reps: "20",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/watch?v=udtuZlqsrGU",
                        imageUrl: "https://i.ytimg.com/vi/udtuZlqsrGU/mqdefault.jpg"
                    },
                    {
                        name: "Crunch Tuck Up Completo",
                        subOrder: 2,
                        sets: 3,
                        reps: "15",
                        videoUrl: "https://www.youtube.com/shorts/LJNB5djT4LI",
                        imageUrl: "https://i.ytimg.com/vi/LJNB5djT4LI/mqdefault.jpg"
                    },
                    {
                        name: "Crunch - Mariposa",
                        subOrder: 3,
                        sets: 3,
                        reps: "10",
                        videoUrl: "https://youtu.be/Wh9hdGIUkVw",
                        imageUrl: "https://i.ytimg.com/vi/Wh9hdGIUkVw/mqdefault.jpg"
                    },
                    {
                        name: "Plancha - Unilateral Alterna",
                        subOrder: 4,
                        sets: 3,
                        reps: "20",
                        rest: "90s",
                        videoUrl: "https://youtu.be/zQVZrTzOYBk",
                        imageUrl: "https://i.ytimg.com/vi/zQVZrTzOYBk/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=udtuZlqsrGU",
                imageUrl: "https://i.ytimg.com/vi/udtuZlqsrGU/mqdefault.jpg"
            }
        ]
    }
};

const exerciseAlternatives = {
};

console.log("Datos de rutina cargados desde el creador.");
// Export if using modules in the target app, or remove if it's a simple script include
// export { workoutData, exerciseAlternatives };
