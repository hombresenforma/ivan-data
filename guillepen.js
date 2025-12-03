// Titulo: P3_3D_APFB_INOUT_1

// Contenido de app_datos.js

// =================================================================================
// DATOS DE LA RUTINA (5 DÍAS)
// =================================================================================
const workoutData = {
    "dia1": {
        name: "Anterior IN-OUT",
        exercises: [
            {
                order: 2,
                name: "Press Banca Inclinado en Multipower",
                sets: 3,
                reps: "8",
                rest: "90s",
                notes: "",
                videoUrl: "https://youtu.be/3GS7EjN7KSk",
                imageUrl: "https://i.ytimg.com/vi/3GS7EjN7KSk/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Zancada Trasera Alterna con Mancuernas/KTB",
                sets: 3,
                reps: "16",
                rest: "90s",
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=Kzv73cEkTq4",
                imageUrl: "https://i.ytimg.com/vi/Kzv73cEkTq4/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Press Militar con Barra de Pie",
                isSuperset: true,
                items: [
                    {
                        name: "Press Militar con Barra de Pie",
                        subOrder: 1,
                        sets: 3,
                        reps: "10",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/watch?v=idnuMZx6mS0",
                        imageUrl: "https://i.ytimg.com/vi/idnuMZx6mS0/mqdefault.jpg"
                    },
                    {
                        name: "Elevaciones Laterales con Mancuernas",
                        subOrder: 2,
                        sets: 3,
                        reps: "15",
                        rest: "90s",
                        videoUrl: "https://youtu.be/rhmW_fhB4cs",
                        imageUrl: "https://i.ytimg.com/vi/rhmW_fhB4cs/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=idnuMZx6mS0",
                imageUrl: "https://i.ytimg.com/vi/idnuMZx6mS0/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Press Banca con Barra",
                isSuperset: true,
                items: [
                    {
                        name: "Press Banca con Barra",
                        subOrder: 1,
                        sets: 3,
                        reps: "15, 12, 10",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/PKpsrFS2uac",
                        imageUrl: "https://i.ytimg.com/vi/PKpsrFS2uac/mqdefault.jpg"
                    },
                    {
                        name: "Fondos en Banco",
                        subOrder: 2,
                        sets: 3,
                        reps: "15, 12, 10",
                        rest: "90s",
                        videoUrl: "https://youtu.be/NSB_HrDwd6I",
                        imageUrl: "https://i.ytimg.com/vi/NSB_HrDwd6I/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/PKpsrFS2uac",
                imageUrl: "https://i.ytimg.com/vi/PKpsrFS2uac/mqdefault.jpg"
            },
            {
                order: 6,
                name: "Circuito IN-OUT",
                isSuperset: true,
                circuitDetails: {
                    totalRounds: 4,
                    restBetweenExercisesSeconds: 30,
                    restBetweenRoundsSeconds: 30
                },
                items: [
                    {
                        name: "Cuerpo Libre - Step Up Alterno en Step",
                        subOrder: 1,
                        sets: 1,
                        reps: "30s",
                        isCircuitItem: true,
                        videoUrl: "https://youtu.be/IwixiNKjpCA",
                        imageUrl: "https://i.ytimg.com/vi/IwixiNKjpCA/mqdefault.jpg"
                    },
                    {
                        name: "Thruster con Mancuernas",
                        subOrder: 2,
                        sets: 1,
                        reps: "30s",
                        isCircuitItem: true,
                        videoUrl: "https://www.youtube.com/watch?v=5mTjKFubavs",
                        imageUrl: "https://i.ytimg.com/vi/5mTjKFubavs/mqdefault.jpg"
                    }
                ],
                notes: "Utiliza mancuernas de 8-10kg. ",
                videoUrl: "https://youtu.be/IwixiNKjpCA",
                imageUrl: "https://i.ytimg.com/vi/IwixiNKjpCA/mqdefault.jpg"
            }
        ]
    },
    "dia2": {
        name: "Posterior IN-OUT",
        exercises: [
            {
                order: 2,
                name: "Jalón al Pecho Supino en Polea",
                sets: 3,
                reps: "8",
                rest: "90s",
                notes: "",
                videoUrl: "https://youtu.be/rimdRzyIJkA",
                imageUrl: "https://i.ytimg.com/vi/rimdRzyIJkA/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Peso Muerto Rumano con Mancuernas",
                sets: 3,
                reps: "8",
                rest: "90s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/SMll4DOYvEs",
                imageUrl: "https://i.ytimg.com/vi/SMll4DOYvEs/mqdefault.jpg"
            },
            {
                order: 4,
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
                        name: "Remo Renegade Alterno con Mancuernas",
                        subOrder: 2,
                        sets: 3,
                        reps: "16",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/watch?v=FjwFzYXSK70",
                        imageUrl: "https://i.ytimg.com/vi/FjwFzYXSK70/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/uH9Hg4nWOG8",
                imageUrl: "https://i.ytimg.com/vi/uH9Hg4nWOG8/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Face Pull en Polea Alta",
                isSuperset: true,
                items: [
                    {
                        name: "Face Pull en Polea Alta",
                        subOrder: 1,
                        sets: 3,
                        reps: "15, 12, 10",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/watch?v=tZN8KYDSCRo",
                        imageUrl: "https://i.ytimg.com/vi/tZN8KYDSCRo/mqdefault.jpg"
                    },
                    {
                        name: "Curl en Polea Baja con Cuerda",
                        subOrder: 2,
                        sets: 3,
                        reps: "15, 12, 10",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/watch?v=2BFzjygU1Ic",
                        imageUrl: "https://i.ytimg.com/vi/2BFzjygU1Ic/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=tZN8KYDSCRo",
                imageUrl: "https://i.ytimg.com/vi/tZN8KYDSCRo/mqdefault.jpg"
            },
            {
                order: 6,
                name: "Circuito IN-OUT. ",
                isSuperset: true,
                circuitDetails: {
                    totalRounds: 4,
                    restBetweenExercisesSeconds: 30,
                    restBetweenRoundsSeconds: 30
                },
                items: [
                    {
                        name: "Kettlebell - Swing Ruso",
                        subOrder: 1,
                        sets: 1,
                        reps: "30s",
                        isCircuitItem: true,
                        videoUrl: "https://youtu.be/eKN0tj8q6Qc",
                        imageUrl: "https://i.ytimg.com/vi/eKN0tj8q6Qc/mqdefault.jpg"
                    },
                    {
                        name: "Snatch + Thruster Unilat Alterno con Mancuerna",
                        subOrder: 2,
                        sets: 1,
                        reps: "30s",
                        isCircuitItem: true,
                        videoUrl: "https://www.youtube.com/shorts/jNbG4xt8zCs",
                        imageUrl: "https://i.ytimg.com/vi/jNbG4xt8zCs/mqdefault.jpg"
                    }
                ],
                notes: "Mancuerna de 10-12kg.",
                videoUrl: "https://youtu.be/eKN0tj8q6Qc",
                imageUrl: "https://i.ytimg.com/vi/eKN0tj8q6Qc/mqdefault.jpg"
            }
        ]
    },
    "dia3": {
        name: "Fullbody IN-OUT",
        exercises: [
            {
                order: 2,
                name: "Curl con Barra Z",
                sets: 3,
                reps: "8",
                rest: "90s",
                notes: "",
                videoUrl: "https://youtu.be/4gYLTjNaTmw",
                imageUrl: "https://i.ytimg.com/vi/4gYLTjNaTmw/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Press Cerrado con Barra",
                sets: 3,
                reps: "8",
                rest: "90s",
                notes: "",
                videoUrl: "https://youtu.be/_062fQmtry8",
                imageUrl: "https://i.ytimg.com/vi/_062fQmtry8/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Sentadilla Trasera en Multipower",
                sets: 3,
                reps: "8",
                rest: "90s",
                notes: "",
                videoUrl: "https://youtu.be/la-dqygoIuk",
                imageUrl: "https://i.ytimg.com/vi/la-dqygoIuk/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Curl Martillo con Mancuernas",
                isSuperset: true,
                items: [
                    {
                        name: "Curl Martillo con Mancuernas",
                        subOrder: 1,
                        sets: 3,
                        reps: "15, 12, 10",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/fcFsPoJY9lg",
                        imageUrl: "https://i.ytimg.com/vi/fcFsPoJY9lg/mqdefault.jpg"
                    },
                    {
                        name: "Extensión Tríceps Trasnuca Unilateral con Mancuerna",
                        subOrder: 2,
                        sets: 3,
                        reps: "15, 12, 10",
                        rest: "90s",
                        videoUrl: "https://youtu.be/jGTquNttoRU",
                        imageUrl: "https://i.ytimg.com/vi/jGTquNttoRU/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/fcFsPoJY9lg",
                imageUrl: "https://i.ytimg.com/vi/fcFsPoJY9lg/mqdefault.jpg"
            },
            {
                order: 8,
                name: "Circuito IN-OUT. ",
                isSuperset: true,
                circuitDetails: {
                    totalRounds: 4,
                    restBetweenExercisesSeconds: 30,
                    restBetweenRoundsSeconds: 30
                },
                items: [
                    {
                        name: "Remo Renegade + Flexión con Mancuernas",
                        subOrder: 1,
                        sets: 1,
                        reps: "30s",
                        isCircuitItem: true,
                        videoUrl: "https://www.youtube.com/shorts/hLPJik1MaaY",
                        imageUrl: "https://i.ytimg.com/vi/hLPJik1MaaY/mqdefault.jpg"
                    },
                    {
                        name: "Zancadas Caminando con Mancuernas/Kettlebells",
                        subOrder: 2,
                        sets: 1,
                        reps: "30s",
                        isCircuitItem: true,
                        videoUrl: "https://youtu.be/7tRy9X0ibnk",
                        imageUrl: "https://i.ytimg.com/vi/7tRy9X0ibnk/mqdefault.jpg"
                    }
                ],
                notes: "Utiliza mancuernas de 8-10kg para ambos ejercicios.",
                videoUrl: "https://www.youtube.com/shorts/hLPJik1MaaY",
                imageUrl: "https://i.ytimg.com/vi/hLPJik1MaaY/mqdefault.jpg"
            }
        ]
    },
    "dia4": {
        name: "Entreno A",
        exercises: [
            {
                order: 2,
                name: "Worm + Flexión",
                isSuperset: true,
                items: [
                    {
                        name: "Worm + Flexión",
                        subOrder: 1,
                        sets: 3,
                        reps: "10",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/watch?v=FhJAsfzBj50",
                        imageUrl: "https://i.ytimg.com/vi/FhJAsfzBj50/mqdefault.jpg"
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
                videoUrl: "https://www.youtube.com/watch?v=FhJAsfzBj50",
                imageUrl: "https://i.ytimg.com/vi/FhJAsfzBj50/mqdefault.jpg"
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
                        name: "Sentadilla con Salto",
                        subOrder: 1,
                        sets: 1,
                        reps: "45s",
                        isCircuitItem: true,
                        videoUrl: "https://www.youtube.com/watch?v=1-Mum4hyIJ0",
                        imageUrl: "https://i.ytimg.com/vi/1-Mum4hyIJ0/mqdefault.jpg"
                    },
                    {
                        name: "Press Pallof Excéntrico con Banda Elástica",
                        subOrder: 2,
                        sets: 1,
                        reps: "45s",
                        isCircuitItem: true,
                        videoUrl: "https://www.youtube.com/shorts/K4zseqb-hvo",
                        imageUrl: "https://i.ytimg.com/vi/K4zseqb-hvo/mqdefault.jpg"
                    },
                    {
                        name: "Plancha - Avanzada",
                        subOrder: 3,
                        sets: 1,
                        reps: "45s",
                        isCircuitItem: true,
                        videoUrl: "https://youtu.be/nH9AQFIJ1rY",
                        imageUrl: "https://i.ytimg.com/vi/nH9AQFIJ1rY/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=1-Mum4hyIJ0",
                imageUrl: "https://i.ytimg.com/vi/1-Mum4hyIJ0/mqdefault.jpg"
            }
        ]
    },
    "dia5": {
        name: "Entreno B",
        exercises: [
            {
                order: 2,
                name: "Remo Unilateral con Banda Elástica",
                isSuperset: true,
                items: [
                    {
                        name: "Remo Unilateral con Banda Elástica",
                        subOrder: 1,
                        sets: 3,
                        reps: "10",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/shorts/90NfKSOGEVI",
                        imageUrl: "https://i.ytimg.com/vi/90NfKSOGEVI/mqdefault.jpg"
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
                        name: "CARDIO - Lateral Climbers",
                        subOrder: 3,
                        sets: 3,
                        reps: "8",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/shorts/IKuy2laTdGY",
                        imageUrl: "https://i.ytimg.com/vi/IKuy2laTdGY/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/90NfKSOGEVI",
                imageUrl: "https://i.ytimg.com/vi/90NfKSOGEVI/mqdefault.jpg"
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
                        name: "Gomas - FacePull en Columna",
                        subOrder: 1,
                        sets: 1,
                        reps: "45s",
                        isCircuitItem: true,
                        videoUrl: "https://youtu.be/KnnWfHUjsKg",
                        imageUrl: "https://i.ytimg.com/vi/KnnWfHUjsKg/mqdefault.jpg"
                    },
                    {
                        name: "Cuerpo Libre - Cardio - Predator Jacks",
                        subOrder: 2,
                        sets: 1,
                        reps: "45s",
                        isCircuitItem: true,
                        videoUrl: "https://youtu.be/uGmzXjFM0d8",
                        imageUrl: "https://i.ytimg.com/vi/uGmzXjFM0d8/mqdefault.jpg"
                    },
                    {
                        name: "Plancha - Lateral de Rodillas",
                        subOrder: 3,
                        sets: 1,
                        reps: "45s",
                        isCircuitItem: true,
                        videoUrl: "https://youtu.be/pIf682Ral3A",
                        imageUrl: "https://i.ytimg.com/vi/pIf682Ral3A/mqdefault.jpg"
                    },
                    {
                        name: "Plancha - Lateral de Rodillas",
                        subOrder: 4,
                        sets: 1,
                        reps: "45s",
                        isCircuitItem: true,
                        videoUrl: "https://youtu.be/pIf682Ral3A",
                        imageUrl: "https://i.ytimg.com/vi/pIf682Ral3A/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/KnnWfHUjsKg",
                imageUrl: "https://i.ytimg.com/vi/KnnWfHUjsKg/mqdefault.jpg"
            }
        ]
    }
};

const exerciseAlternatives = {
    "Press Banca Inclinado en Multipower": [
        { name: "Press Inclinado con Mancuernas", videoUrl: "https://youtu.be/ZE4M73kXB5A", imageUrl: "https://i.ytimg.com/vi/ZE4M73kXB5A/mqdefault.jpg" }
    ],
    "Press Militar con Barra de Pie": [
        { name: "Press Militar Sentado con Mancuernas (Explicado)", videoUrl: "https://www.youtube.com/shorts/2ZkYyh4ic0o", imageUrl: "https://i.ytimg.com/vi/2ZkYyh4ic0o/mqdefault.jpg" }
    ],
    "Press Banca con Barra": [
        { name: "Press Banca en Multipower", videoUrl: "https://youtu.be/w-5ovE5O5iU", imageUrl: "https://i.ytimg.com/vi/w-5ovE5O5iU/mqdefault.jpg" }
    ],
    "Jalón al Pecho Supino en Polea": [
        { name: "Dominadas Australianas con Pies en Banco", videoUrl: "https://youtu.be/WqoNa74DieE", imageUrl: "https://i.ytimg.com/vi/WqoNa74DieE/mqdefault.jpg" }
    ],
    "Peso Muerto Rumano con Mancuernas": [
        { name: "Peso Muerto Rumano con Mancuernas", videoUrl: "https://www.youtube.com/shorts/SMll4DOYvEs", imageUrl: "https://i.ytimg.com/vi/SMll4DOYvEs/mqdefault.jpg" }
    ],
    "Remo Unilat con Mancuerna/KTB (Explicado)": [
        { name: "Máquina de Remo (Gironda)", videoUrl: "https://www.youtube.com/watch?v=3wcaZqSfP0A", imageUrl: "https://i.ytimg.com/vi/3wcaZqSfP0A/mqdefault.jpg" }
    ],
    "Sentadilla Trasera en Multipower": [
        { name: "Sentadilla Trasera con Barra", videoUrl: "https://youtu.be/FK5XU_gaxAE", imageUrl: "https://i.ytimg.com/vi/FK5XU_gaxAE/mqdefault.jpg" }
    ]
};

console.log("Datos de rutina cargados desde el creador.");
// Export if using modules in the target app, or remove if it's a simple script include
// export { workoutData, exerciseAlternatives };
