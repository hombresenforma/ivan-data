// Titulo: P3_3D_APFB_INOUT_2
// Notas: - Añadimos una 4ta serie + cambiamos reps a 8, 8, 10, 12
// - Añadimos una 5a serie al circuito IN-OUT

// Contenido de app_datos.js

// =================================================================================
// DATOS DE LA RUTINA (3 DÍAS)
// =================================================================================
const workoutData = {
    "dia1": {
        name: "Anterior IN-OUT",
        exercises: [
            {
                order: 2,
                name: "Press Banca Inclinado en Multipower",
                sets: 4,
                reps: "8, 8, 10, 12",
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
                    totalRounds: 5,
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
                sets: 4,
                reps: "8, 8, 10, 12",
                rest: "90s",
                notes: "",
                videoUrl: "https://youtu.be/rimdRzyIJkA",
                imageUrl: "https://i.ytimg.com/vi/rimdRzyIJkA/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Peso Muerto Rumano con Barra",
                sets: 4,
                reps: "8, 8, 10, 12",
                rest: "90s",
                notes: "Baja lo que te permita tu movilidad de cadera (Espalda completamente recta).",
                videoUrl: "https://youtu.be/R7FKam5GyNw",
                imageUrl: "https://i.ytimg.com/vi/R7FKam5GyNw/mqdefault.jpg"
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
                    totalRounds: 5,
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
                sets: 4,
                reps: "8, 8, 10, 12",
                rest: "90s",
                notes: "",
                videoUrl: "https://youtu.be/4gYLTjNaTmw",
                imageUrl: "https://i.ytimg.com/vi/4gYLTjNaTmw/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Press Cerrado con Barra",
                sets: 4,
                reps: "8, 8, 10, 12",
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
                    totalRounds: 5,
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
    "Peso Muerto Rumano con Barra": [
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
