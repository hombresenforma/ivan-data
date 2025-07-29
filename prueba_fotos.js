// Contenido de app_datos.js

// =================================================================================
// DATOS DE LA RUTINA (1 DÍAS)
// =================================================================================
const workoutData = {
    "dia1": {
        name: "Prueba FOTOS",
        exercises: [
            {
                order: 1,
                name: "Press Banca con Barra",
                sets: 3,
                reps: "10-12",
                rest: "60s",
                notes: "",
                videoUrl: "https://youtu.be/PKpsrFS2uac",
                imageUrl: "https://i.ytimg.com/vi/PKpsrFS2uac/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Flexiones / Deficit Push Ups con Discos al lado",
                isSuperset: true,
                items: [
                    {
                        name: "Flexiones / Deficit Push Ups con Discos al lado",
                        subOrder: 1,
                        sets: 3,
                        reps: "10-12",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/watch?v=nLnrNuQFlao",
                        imageUrl: "https://i.ytimg.com/vi/nLnrNuQFlao/mqdefault.jpg"
                    },
                    {
                        name: "Crunch - V",
                        subOrder: 2,
                        sets: 3,
                        reps: "",
                        rest: "90s",
                        videoUrl: "https://youtu.be/_SCqc7BCW9A",
                        imageUrl: "https://i.ytimg.com/vi/_SCqc7BCW9A/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=nLnrNuQFlao",
                imageUrl: "https://i.ytimg.com/vi/nLnrNuQFlao/mqdefault.jpg"
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
                        name: "Kettlebell - Swing Americano",
                        subOrder: 1,
                        sets: 1,
                        reps: "10-12",
                        isEMOMItem: true,
                        videoUrl: "https://youtu.be/_kVSgpKXc_k",
                        imageUrl: "https://i.ytimg.com/vi/_kVSgpKXc_k/mqdefault.jpg"
                    },
                    {
                        name: "Extensión Tríceps Trasnuca con Mancuernas/Kettlebell",
                        subOrder: 2,
                        sets: 1,
                        reps: "",
                        isEMOMItem: true,
                        videoUrl: "https://youtu.be/1MgU2PO4_rI",
                        imageUrl: "https://i.ytimg.com/vi/1MgU2PO4_rI/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/_kVSgpKXc_k",
                imageUrl: "https://i.ytimg.com/vi/_kVSgpKXc_k/mqdefault.jpg"
            }
        ]
    }
};

const exerciseAlternatives = {
};

console.log("Datos de rutina cargados desde el creador.");
// Export if using modules in the target app, or remove if it's a simple script include
// export { workoutData, exerciseAlternatives };
