// Contenido de app_datos.js

// =================================================================================
// DATOS DE LA RUTINA (2 DÍAS)
// =================================================================================
const workoutData = {
    "dia1": {
        name: "Fullbody 1",
        exercises: [
            {
                order: 1,
                name: "Gomas - Zancada Avançada",
                sets: 3,
                reps: "10-12",
                rest: "60s",
                notes: "",
                videoUrl: "https://youtu.be/rlfgAEO58no",
                imageUrl: "https://i.ytimg.com/vi/rlfgAEO58no/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Gomas - Flexiones con Resistencia",
                sets: 3,
                reps: "10-12",
                rest: "60s",
                notes: "",
                videoUrl: "https://youtu.be/5y-98KIMKf0",
                imageUrl: "https://i.ytimg.com/vi/5y-98KIMKf0/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Gomas - Thruster",
                isSuperset: true,
                items: [
                    {
                        name: "Gomas - Thruster",
                        subOrder: 1,
                        sets: 4,
                        reps: "12-15",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/fCXPsC8Mk6A",
                        imageUrl: "https://i.ytimg.com/vi/fCXPsC8Mk6A/mqdefault.jpg"
                    },
                    {
                        name: "Gomas - Squat",
                        subOrder: 2,
                        sets: 4,
                        reps: "12-15",
                        rest: "90s",
                        videoUrl: "https://youtu.be/203_Zzz_Z_0",
                        imageUrl: "https://i.ytimg.com/vi/203_Zzz_Z_0/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/fCXPsC8Mk6A",
                imageUrl: "https://i.ytimg.com/vi/fCXPsC8Mk6A/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Fondos en Banco",
                isSuperset: true,
                items: [
                    {
                        name: "Fondos en Banco",
                        subOrder: 1,
                        sets: 3,
                        reps: "15-20",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/NSB_HrDwd6I",
                        imageUrl: "https://i.ytimg.com/vi/NSB_HrDwd6I/mqdefault.jpg"
                    },
                    {
                        name: "Zancada Dinámica + Sentadilla",
                        subOrder: 2,
                        sets: 3,
                        reps: "10",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/watch?v=kRm4s1Aemew",
                        imageUrl: "https://i.ytimg.com/vi/kRm4s1Aemew/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/NSB_HrDwd6I",
                imageUrl: "https://i.ytimg.com/vi/NSB_HrDwd6I/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Worm + Flexión",
                isSuperset: true,
                items: [
                    {
                        name: "Worm + Flexión",
                        subOrder: 1,
                        sets: 3,
                        reps: "6",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/watch?v=FhJAsfzBj50",
                        imageUrl: "https://i.ytimg.com/vi/FhJAsfzBj50/mqdefault.jpg"
                    },
                    {
                        name: "Hollow - Nivel 3",
                        subOrder: 2,
                        sets: 3,
                        reps: "30s",
                        rest: "90s",
                        videoUrl: "https://youtu.be/I6YISGE4Uvo",
                        imageUrl: "https://i.ytimg.com/vi/I6YISGE4Uvo/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=FhJAsfzBj50",
                imageUrl: "https://i.ytimg.com/vi/FhJAsfzBj50/mqdefault.jpg"
            }
        ]
    },
    "dia2": {
        name: "Fullbody 2",
        exercises: [
            {
                order: 1,
                name: "Gomas - Peso Muerto",
                sets: 3,
                reps: "10-12",
                rest: "60s",
                notes: "",
                videoUrl: "https://youtu.be/o3vMmkN9JnQ",
                imageUrl: "https://i.ytimg.com/vi/o3vMmkN9JnQ/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Gomas - Remo Unilateral en Columna",
                sets: 3,
                reps: "10-12",
                rest: "60s",
                notes: "",
                videoUrl: "https://youtu.be/SaitEaEDD5Q",
                imageUrl: "https://i.ytimg.com/vi/SaitEaEDD5Q/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Zancadas Caminando con Mancuernas/Kettlebells",
                isSuperset: true,
                items: [
                    {
                        name: "Zancadas Caminando con Mancuernas/Kettlebells",
                        subOrder: 1,
                        sets: 4,
                        reps: "20",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/7tRy9X0ibnk",
                        imageUrl: "https://i.ytimg.com/vi/7tRy9X0ibnk/mqdefault.jpg"
                    },
                    {
                        name: "Gomas - Remo Vertical en Columna",
                        subOrder: 2,
                        sets: 4,
                        reps: "12-15",
                        rest: "90s",
                        videoUrl: "https://youtu.be/KFCTeV1AIGU",
                        imageUrl: "https://i.ytimg.com/vi/KFCTeV1AIGU/mqdefault.jpg"
                    }
                ],
                notes: "Haz sin peso las zancadas si no tienes.",
                videoUrl: "https://youtu.be/7tRy9X0ibnk",
                imageUrl: "https://i.ytimg.com/vi/7tRy9X0ibnk/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Gomas - Curl de Bíceps en Columna",
                isSuperset: true,
                items: [
                    {
                        name: "Gomas - Curl de Bíceps en Columna",
                        subOrder: 1,
                        sets: 3,
                        reps: "15-20",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/JogvxqdpbMU",
                        imageUrl: "https://i.ytimg.com/vi/JogvxqdpbMU/mqdefault.jpg"
                    },
                    {
                        name: "Gomas - FacePull en Columna",
                        subOrder: 2,
                        sets: 3,
                        reps: "15",
                        rest: "90s",
                        videoUrl: "https://youtu.be/KnnWfHUjsKg",
                        imageUrl: "https://i.ytimg.com/vi/KnnWfHUjsKg/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/JogvxqdpbMU",
                imageUrl: "https://i.ytimg.com/vi/JogvxqdpbMU/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Gomas - Remo al Mentón de Pie",
                isSuperset: true,
                items: [
                    {
                        name: "Gomas - Remo al Mentón de Pie",
                        subOrder: 1,
                        sets: 3,
                        reps: "6",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/K1o3Sviayko",
                        imageUrl: "https://i.ytimg.com/vi/K1o3Sviayko/mqdefault.jpg"
                    },
                    {
                        name: "Hollow - Nivel 3",
                        subOrder: 2,
                        sets: 3,
                        reps: "30s",
                        rest: "90s",
                        videoUrl: "https://youtu.be/I6YISGE4Uvo",
                        imageUrl: "https://i.ytimg.com/vi/I6YISGE4Uvo/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/K1o3Sviayko",
                imageUrl: "https://i.ytimg.com/vi/K1o3Sviayko/mqdefault.jpg"
            }
        ]
    }
};

const exerciseAlternatives = {
    "Gomas - Zancada Avançada": [
        { name: "Gomas - Zancada Básica", videoUrl: "https://youtu.be/-NtzcHwp6fo", imageUrl: "https://i.ytimg.com/vi/-NtzcHwp6fo/mqdefault.jpg" }
    ],
    "Gomas - Peso Muerto": [
        { name: "Gomas - Zancada Básica", videoUrl: "https://youtu.be/-NtzcHwp6fo", imageUrl: "https://i.ytimg.com/vi/-NtzcHwp6fo/mqdefault.jpg" }
    ]
};

console.log("Datos de rutina cargados desde el creador.");
// Export if using modules in the target app, or remove if it's a simple script include
// export { workoutData, exerciseAlternatives };
