// Titulo: eneko

// Contenido de app_datos.js

// =================================================================================
// DATOS DE LA RUTINA (2 DÍAS)
// =================================================================================
const workoutData = {
    "dia1": {
        name: "PIERNA PESO MUERTO",
        exercises: [
            {
                order: 1,
                name: "Sentadilla Frontal con Barra",
                sets: 4,
                reps: "15, 12, 10, 10",
                rest: "90s",
                notes: "",
                videoUrl: "https://youtu.be/ErXO1WKVlPI",
                imageUrl: "https://i.ytimg.com/vi/ErXO1WKVlPI/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Peso Muerto Rumano con Mancuernas",
                sets: 3,
                reps: "15, 12, 10",
                rest: "90s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/SMll4DOYvEs",
                imageUrl: "https://i.ytimg.com/vi/SMll4DOYvEs/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Box Glute Step Up Unilat con Mancuerna/KTB",
                sets: 3,
                reps: "10-12",
                rest: "60s",
                notes: "",
                videoUrl: "https://youtube.com/shorts/h73RCZp007M",
                imageUrl: "https://i.ytimg.com/vi/h73RCZp007M/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Sentadilla Goblet con Pies Elevados",
                isSuperset: true,
                items: [
                    {
                        name: "Sentadilla Goblet con Pies Elevados",
                        subOrder: 1,
                        sets: 3,
                        reps: "10",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/E2n7V0o8B5A",
                        imageUrl: "https://i.ytimg.com/vi/E2n7V0o8B5A/mqdefault.jpg"
                    },
                    {
                        name: "Curl Femoral desde Puente (Con TRX)",
                        subOrder: 2,
                        sets: 3,
                        reps: "10",
                        videoUrl: "https://www.youtube.com/watch?v=6NCkHTG4lHc",
                        imageUrl: "https://i.ytimg.com/vi/6NCkHTG4lHc/mqdefault.jpg"
                    },
                    {
                        name: "Hollow Abdominal Completo",
                        subOrder: 3,
                        sets: 3,
                        reps: "30s",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/shorts/S7nIyMHLO98",
                        imageUrl: "https://i.ytimg.com/vi/S7nIyMHLO98/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/E2n7V0o8B5A",
                imageUrl: "https://i.ytimg.com/vi/E2n7V0o8B5A/mqdefault.jpg"
            }
        ]
    },
    "dia2": {
        name: "TORSO (EMPUJE)",
        exercises: [
            {
                order: 1,
                name: "Press Inclinado con Mancuernas",
                sets: 4,
                reps: "15, 12, 10, 10",
                rest: "90s",
                notes: "",
                videoUrl: "https://youtu.be/ZE4M73kXB5A",
                imageUrl: "https://i.ytimg.com/vi/ZE4M73kXB5A/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Dominadas con Peso Corporal",
                sets: 3,
                reps: "15, 12, 10",
                rest: "90s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/pb-14sP_R4M",
                imageUrl: "https://i.ytimg.com/vi/pb-14sP_R4M/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Press Militar Sentado con Mancuernas",
                isSuperset: true,
                items: [
                    {
                        name: "Press Militar Sentado con Mancuernas",
                        subOrder: 1,
                        sets: 3,
                        reps: "15",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/watch?v=_IMpMCr87Cg",
                        imageUrl: "https://i.ytimg.com/vi/_IMpMCr87Cg/mqdefault.jpg"
                    },
                    {
                        name: "Worm + Flexión",
                        subOrder: 2,
                        sets: 3,
                        reps: "6",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/watch?v=FhJAsfzBj50",
                        imageUrl: "https://i.ytimg.com/vi/FhJAsfzBj50/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=_IMpMCr87Cg",
                imageUrl: "https://i.ytimg.com/vi/_IMpMCr87Cg/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Remo Seal con Mancuernas",
                isSuperset: true,
                items: [
                    {
                        name: "Remo Seal con Mancuernas",
                        subOrder: 1,
                        sets: 3,
                        reps: "10",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/shorts/6tLfn99dO8o",
                        imageUrl: "https://i.ytimg.com/vi/6tLfn99dO8o/mqdefault.jpg"
                    },
                    {
                        name: "Press Cerrado con Barra",
                        subOrder: 2,
                        sets: 3,
                        reps: "10",
                        rest: "90s",
                        videoUrl: "https://youtu.be/_062fQmtry8",
                        imageUrl: "https://i.ytimg.com/vi/_062fQmtry8/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/6tLfn99dO8o",
                imageUrl: "https://i.ytimg.com/vi/6tLfn99dO8o/mqdefault.jpg"
            }
        ]
    }
};

const exerciseAlternatives = {
    "Sentadilla Frontal con Barra": [
        { name: "Peso Muerto Rumano con Mancuernas", videoUrl: "https://www.youtube.com/shorts/SMll4DOYvEs", imageUrl: "https://i.ytimg.com/vi/SMll4DOYvEs/mqdefault.jpg" }
    ]
};

console.log("Datos de rutina cargados desde el creador.");
// Export if using modules in the target app, or remove if it's a simple script include
// export { workoutData, exerciseAlternatives };
