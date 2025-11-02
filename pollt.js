// Titulo: Plan de Entrenamiento

// Contenido de app_datos.js

// =================================================================================
// DATOS DE LA RUTINA (2 DÍAS)
// =================================================================================
const workoutData = {
    "dia1": {
        name: "TORSO",
        exercises: [
            {
                order: 1,
                name: "Press Banca Inclinado con Barra",
                sets: 4,
                reps: "10, 10, 12, 15",
                rest: "90s",
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=4tPP-4K5kMQ",
                imageUrl: "https://i.ytimg.com/vi/4tPP-4K5kMQ/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Jalón al Pecho Supino en Polea",
                sets: 4,
                reps: "10, 10, 12, 15",
                rest: "90s",
                notes: "",
                videoUrl: "https://youtu.be/rimdRzyIJkA",
                imageUrl: "https://i.ytimg.com/vi/rimdRzyIJkA/mqdefault.jpg"
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
                        reps: "15",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/watch?v=5mTjKFubavs",
                        imageUrl: "https://i.ytimg.com/vi/5mTjKFubavs/mqdefault.jpg"
                    },
                    {
                        name: "CARDIO - Bicicleta (Ritmo Fuerte)",
                        subOrder: 2,
                        sets: 3,
                        reps: "45s",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/watch?v=T4xdxoA4UzY",
                        imageUrl: "https://i.ytimg.com/vi/T4xdxoA4UzY/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=5mTjKFubavs",
                imageUrl: "https://i.ytimg.com/vi/5mTjKFubavs/mqdefault.jpg"
            },
            {
                order: 5,
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
                        name: "Curl con Barra Recta",
                        subOrder: 2,
                        sets: 3,
                        reps: "10",
                        videoUrl: "https://youtu.be/0TjnWWqQfUw",
                        imageUrl: "https://i.ytimg.com/vi/0TjnWWqQfUw/mqdefault.jpg"
                    },
                    {
                        name: "Face Pull con KTB",
                        subOrder: 3,
                        sets: 3,
                        reps: "15",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/shorts/RIS2s-UkKOk",
                        imageUrl: "https://i.ytimg.com/vi/RIS2s-UkKOk/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/L__Q6Jl9Ics",
                imageUrl: "https://i.ytimg.com/vi/L__Q6Jl9Ics/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Crunch en Polea Alta",
                sets: 3,
                reps: "12-15",
                rest: "60s",
                notes: "",
                videoUrl: "https://youtube.com/shorts/H9QSO6XBRkA",
                imageUrl: "https://i.ytimg.com/vi/H9QSO6XBRkA/mqdefault.jpg"
            }
        ]
    },
    "dia2": {
        name: "PIERNA",
        exercises: [
            {
                order: 1,
                name: "Peso Muerto Rumano con Mancuernas",
                sets: 4,
                reps: "10, 10, 12, 15",
                rest: "90s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/SMll4DOYvEs",
                imageUrl: "https://i.ytimg.com/vi/SMll4DOYvEs/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Sentadilla Frontal con Barra",
                sets: 4,
                reps: "10, 10, 12, 15",
                rest: "90s",
                notes: "",
                videoUrl: "https://youtu.be/ErXO1WKVlPI",
                imageUrl: "https://i.ytimg.com/vi/ErXO1WKVlPI/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Cuerpo Libre - Cardio - Step Up Lateral Alterno en Step",
                isSuperset: true,
                items: [
                    {
                        name: "Cuerpo Libre - Cardio - Step Up Lateral Alterno en Step",
                        subOrder: 1,
                        sets: 3,
                        reps: "20",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/N26TyhPhSRI",
                        imageUrl: "https://i.ytimg.com/vi/N26TyhPhSRI/mqdefault.jpg"
                    },
                    {
                        name: "CARDIO - Bicicleta (Ritmo Fuerte)",
                        subOrder: 2,
                        sets: 3,
                        reps: "45s",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/watch?v=T4xdxoA4UzY",
                        imageUrl: "https://i.ytimg.com/vi/T4xdxoA4UzY/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/N26TyhPhSRI",
                imageUrl: "https://i.ytimg.com/vi/N26TyhPhSRI/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Extensión de Cuádriceps en Máquina",
                isSuperset: true,
                items: [
                    {
                        name: "Extensión de Cuádriceps en Máquina",
                        subOrder: 1,
                        sets: 3,
                        reps: "10",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/watch?v=k1Nn0cJOMng",
                        imageUrl: "https://i.ytimg.com/vi/k1Nn0cJOMng/mqdefault.jpg"
                    },
                    {
                        name: "Kettlebell - Swing Americano",
                        subOrder: 2,
                        sets: 3,
                        reps: "10",
                        videoUrl: "https://youtu.be/_kVSgpKXc_k",
                        imageUrl: "https://i.ytimg.com/vi/_kVSgpKXc_k/mqdefault.jpg"
                    },
                    {
                        name: "Sentadilla con Salto",
                        subOrder: 3,
                        sets: 3,
                        reps: "20",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/watch?v=1-Mum4hyIJ0",
                        imageUrl: "https://i.ytimg.com/vi/1-Mum4hyIJ0/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=k1Nn0cJOMng",
                imageUrl: "https://i.ytimg.com/vi/k1Nn0cJOMng/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Press Pallof Unilat con Rotación en Polea",
                sets: 3,
                reps: "10-12",
                rest: "60s",
                notes: "Por lado.",
                videoUrl: "https://youtube.com/shorts/5lo528rQAx8",
                imageUrl: "https://i.ytimg.com/vi/5lo528rQAx8/mqdefault.jpg"
            }
        ]
    }
};

const exerciseAlternatives = {
    "Press Banca Inclinado con Barra": [
        { name: "Press Banca Inclinado en Multipower", videoUrl: "https://youtu.be/3GS7EjN7KSk", imageUrl: "https://i.ytimg.com/vi/3GS7EjN7KSk/mqdefault.jpg" }
    ]
};

console.log("Datos de rutina cargados desde el creador.");
// Export if using modules in the target app, or remove if it's a simple script include
// export { workoutData, exerciseAlternatives };
