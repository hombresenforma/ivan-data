// Titulo: 2D_KTBYBANDAS_VERANO
// Notas: KTB y BANDAS

const workoutData = {
    "dia1": {
        name: "Entreno A",
        exercises: [
            {
                order: 1,
                name: "Kettlebell - Press Militar",
                isSuperset: true,
                items: [
                    {
                        name: "Kettlebell - Press Militar",
                        subOrder: 1,
                        sets: 3,
                        reps: "12-15",
                        isSupersetStart: true,
                        videoUrl: "https://youtube.com/shorts/CCgU8PLMcdI",
                        imageUrl: "https://i.ytimg.com/vi/CCgU8PLMcdI/mqdefault.jpg"
                    },
                    {
                        name: "Flexiones con Lastre",
                        subOrder: 2,
                        sets: 3,
                        reps: "12-15",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/shorts/gLBrKowP2eo",
                        imageUrl: "https://i.ytimg.com/vi/gLBrKowP2eo/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtube.com/shorts/CCgU8PLMcdI",
                imageUrl: "https://i.ytimg.com/vi/CCgU8PLMcdI/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Kettlebell - Zancada Alterna con Rotación",
                isSuperset: true,
                items: [
                    {
                        name: "Kettlebell - Zancada Alterna con Rotación",
                        subOrder: 1,
                        sets: 3,
                        reps: "10-12",
                        isSupersetStart: true,
                        videoUrl: "https://youtube.com/shorts/8EjXf0rK3Lg",
                        imageUrl: "https://i.ytimg.com/vi/8EjXf0rK3Lg/mqdefault.jpg"
                    },
                    {
                        name: "Gomas - Extensión de Tríceps en Columna",
                        subOrder: 2,
                        sets: 3,
                        reps: "15",
                        videoUrl: "https://youtu.be/MtGdJQ-Q0hs",
                        imageUrl: "https://i.ytimg.com/vi/MtGdJQ-Q0hs/mqdefault.jpg"
                    },
                    {
                        name: "Hollow - Nivel 4",
                        subOrder: 3,
                        sets: 3,
                        reps: "30s",
                        rest: "90s",
                        videoUrl: "https://youtu.be/RxFdlQ4oelM",
                        imageUrl: "https://i.ytimg.com/vi/RxFdlQ4oelM/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtube.com/shorts/8EjXf0rK3Lg",
                imageUrl: "https://i.ytimg.com/vi/8EjXf0rK3Lg/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Circuito Final",
                isSuperset: true,
                circuitDetails: {
                    totalRounds: 4,
                    restBetweenExercisesSeconds: 15,
                    restBetweenRoundsSeconds: 60
                },
                items: [
                    {
                        name: "Kettlebell - Snatch Cruzado",
                        subOrder: 1,
                        sets: 1,
                        reps: "45s",
                        isCircuitItem: true,
                        videoUrl: "https://youtube.com/shorts/l8v8vjHoTjs",
                        imageUrl: "https://i.ytimg.com/vi/l8v8vjHoTjs/mqdefault.jpg"
                    },
                    {
                        name: "Kettlebell - Clean Alterno",
                        subOrder: 2,
                        sets: 1,
                        reps: "45s",
                        isCircuitItem: true,
                        videoUrl: "https://youtu.be/xBOoNSv9LlY",
                        imageUrl: "https://i.ytimg.com/vi/xBOoNSv9LlY/mqdefault.jpg"
                    },
                    {
                        name: "Sentadilla Goblet con Mancuerna/KTB (ExPLICADO)",
                        subOrder: 3,
                        sets: 1,
                        reps: "45s",
                        isCircuitItem: true,
                        videoUrl: "https://www.youtube.com/shorts/tNu9bm3geqY",
                        imageUrl: "https://i.ytimg.com/vi/tNu9bm3geqY/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtube.com/shorts/l8v8vjHoTjs",
                imageUrl: "https://i.ytimg.com/vi/l8v8vjHoTjs/mqdefault.jpg"
            }
        ]
    },
    "dia2": {
        name: "Entreno B",
        exercises: [
            {
                order: 1,
                name: "Kettlebell - Remo Inclinado Unilateral",
                isSuperset: true,
                items: [
                    {
                        name: "Kettlebell - Remo Inclinado Unilateral",
                        subOrder: 1,
                        sets: 3,
                        reps: "12-15",
                        isSupersetStart: true,
                        videoUrl: "https://youtube.com/shorts/JQYZ3sz3rko",
                        imageUrl: "https://i.ytimg.com/vi/JQYZ3sz3rko/mqdefault.jpg"
                    },
                    {
                        name: "Face Pull con KTB",
                        subOrder: 2,
                        sets: 3,
                        reps: "12-15",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/shorts/RIS2s-UkKOk",
                        imageUrl: "https://i.ytimg.com/vi/RIS2s-UkKOk/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtube.com/shorts/JQYZ3sz3rko",
                imageUrl: "https://i.ytimg.com/vi/JQYZ3sz3rko/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Remo + Swing Ruso con KTB",
                isSuperset: true,
                items: [
                    {
                        name: "Remo + Swing Ruso con KTB",
                        subOrder: 1,
                        sets: 3,
                        reps: "10-12",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/shorts/BTL9Ydr9Pv8",
                        imageUrl: "https://i.ytimg.com/vi/BTL9Ydr9Pv8/mqdefault.jpg"
                    },
                    {
                        name: "Gomas - Curl de Bíceps de Pie",
                        subOrder: 2,
                        sets: 3,
                        reps: "12-15",
                        videoUrl: "https://youtu.be/w4AydDM5bjU",
                        imageUrl: "https://i.ytimg.com/vi/w4AydDM5bjU/mqdefault.jpg"
                    },
                    {
                        name: "Plancha - Avanzada",
                        subOrder: 3,
                        sets: 3,
                        reps: "30s",
                        rest: "90s",
                        videoUrl: "https://youtu.be/nH9AQFIJ1rY",
                        imageUrl: "https://i.ytimg.com/vi/nH9AQFIJ1rY/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/BTL9Ydr9Pv8",
                imageUrl: "https://i.ytimg.com/vi/BTL9Ydr9Pv8/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Circuito Final",
                isSuperset: true,
                circuitDetails: {
                    totalRounds: 4,
                    restBetweenExercisesSeconds: 15,
                    restBetweenRoundsSeconds: 60
                },
                items: [
                    {
                        name: "Kettlebell - Swing High Pull",
                        subOrder: 1,
                        sets: 1,
                        reps: "45s",
                        isCircuitItem: true,
                        videoUrl: "https://youtube.com/shorts/nOCmFFwoqqY",
                        imageUrl: "https://i.ytimg.com/vi/nOCmFFwoqqY/mqdefault.jpg"
                    },
                    {
                        name: "Kettlebell - Swing High Pull",
                        subOrder: 2,
                        sets: 1,
                        reps: "45s",
                        isCircuitItem: true,
                        videoUrl: "https://youtube.com/shorts/nOCmFFwoqqY",
                        imageUrl: "https://i.ytimg.com/vi/nOCmFFwoqqY/mqdefault.jpg"
                    },
                    {
                        name: "High Pull con KTB",
                        subOrder: 3,
                        sets: 1,
                        reps: "45s",
                        isCircuitItem: true,
                        videoUrl: "https://www.youtube.com/shorts/rjAV_JCo7g0",
                        imageUrl: "https://i.ytimg.com/vi/rjAV_JCo7g0/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtube.com/shorts/nOCmFFwoqqY",
                imageUrl: "https://i.ytimg.com/vi/nOCmFFwoqqY/mqdefault.jpg"
            }
        ]
    }
};

const exerciseAlternatives = {
};