// Titulo: P14_3D_FUERZA_1_BOX
// Notas: Entrenamiento enfocado en FUERZA (Básicos 5x6-8reps). Sin trabajo metabólico.

const workoutData = {
    "dia1": {
        name: "Posterior (Remo)",
        isHidden: true,
        exercises: [
            {
                order: 1,
                name: "Gorilla Row con Kettlebells/Mancuernas",
                isWarmup: true,
                sets: 2,
                reps: "10",
                rest: "30s",
                notes: "",
                videoUrl: "https://youtu.be/4hKPsdWsXl8",
                imageUrl: "https://i.ytimg.com/vi/4hKPsdWsXl8/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Remo con Barra",
                sets: 4,
                reps: "6-8",
                rest: "120s",
                notes: "",
                videoUrl: "https://youtu.be/MjnZ52mZgT0",
                imageUrl: "https://i.ytimg.com/vi/MjnZ52mZgT0/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Hip Thrust con Barra (ExPLICADO)",
                sets: 3,
                reps: "15, 12, 10",
                rest: "90s",
                notes: "Con pausa de 2 segundos arriba en cada repetición",
                videoUrl: "https://www.youtube.com/shorts/eIZUNV9Xj7Y",
                imageUrl: "https://i.ytimg.com/vi/eIZUNV9Xj7Y/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Remo Diagonal Unilat en Polea Alta",
                sets: 3,
                reps: "10-12",
                rest: "60s",
                notes: "",
                videoUrl: "https://youtube.com/shorts/ikKQhcynKmg",
                imageUrl: "https://i.ytimg.com/vi/ikKQhcynKmg/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Curl con Mancuernas Sentado en Banco Inclinado",
                isSuperset: true,
                items: [
                    {
                        name: "Curl con Mancuernas Sentado en Banco Inclinado",
                        subOrder: 1,
                        sets: 3,
                        reps: "12",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/S32a3nYiWko",
                        imageUrl: "https://i.ytimg.com/vi/S32a3nYiWko/mqdefault.jpg"
                    },
                    {
                        name: "Remo en TRX",
                        subOrder: 2,
                        sets: 3,
                        reps: "15",
                        rest: "60s",
                        videoUrl: "https://www.youtube.com/watch?v=L6F1ZKsrRGI",
                        imageUrl: "https://i.ytimg.com/vi/L6F1ZKsrRGI/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/S32a3nYiWko",
                imageUrl: "https://i.ytimg.com/vi/S32a3nYiWko/mqdefault.jpg"
            }
        ]
    },
    "dia2": {
        name: "Anterior (Press Militar)",
        isHidden: true,
        exercises: [
            {
                order: 1,
                name: "Gomas - Rotación Externa en Columna",
                isWarmup: true,
                sets: 2,
                reps: "10",
                rest: "30s",
                notes: "Mantén tu codo prácticamente pegado al torso en todo momento",
                videoUrl: "https://youtu.be/y8cSPoMahok",
                imageUrl: "https://i.ytimg.com/vi/y8cSPoMahok/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Press Militar con Barra Sentado (Half Press)",
                sets: 4,
                reps: "6-8",
                rest: "120s",
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=q0C0BaHITAc",
                imageUrl: "https://i.ytimg.com/vi/q0C0BaHITAc/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Sentadilla Búlgara con Mancuerna o KTB",
                sets: 3,
                reps: "15, 12, 10",
                rest: "90s",
                notes: "",
                videoUrl: "https://youtu.be/kA6bHiDdTO4",
                imageUrl: "https://i.ytimg.com/vi/kA6bHiDdTO4/mqdefault.jpg"
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
                        reps: "10-12",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/shorts/vIK0qkXP_f0",
                        imageUrl: "https://i.ytimg.com/vi/vIK0qkXP_f0/mqdefault.jpg"
                    },
                    {
                        name: "Flexiones Tempo 1:1",
                        subOrder: 2,
                        sets: 3,
                        reps: "10",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/shorts/-9Md7Htla-o",
                        imageUrl: "https://i.ytimg.com/vi/-9Md7Htla-o/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/vIK0qkXP_f0",
                imageUrl: "https://i.ytimg.com/vi/vIK0qkXP_f0/mqdefault.jpg"
            },
            {
                order: 6,
                name: "Sentadilla Goblet con Mancuerna/KTB y Pies Elevados",
                isSuperset: true,
                items: [
                    {
                        name: "Sentadilla Goblet con Mancuerna/KTB y Pies Elevados",
                        subOrder: 1,
                        sets: 3,
                        reps: "15",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/E2n7V0o8B5A",
                        imageUrl: "https://i.ytimg.com/vi/E2n7V0o8B5A/mqdefault.jpg"
                    },
                    {
                        name: "Flexiones con Lastre",
                        subOrder: 2,
                        sets: 3,
                        reps: "8",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/shorts/gLBrKowP2eo",
                        imageUrl: "https://i.ytimg.com/vi/gLBrKowP2eo/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/E2n7V0o8B5A",
                imageUrl: "https://i.ytimg.com/vi/E2n7V0o8B5A/mqdefault.jpg"
            }
        ]
    },
    "dia3": {
        name: "Completo",
        isHidden: true,
        exercises: [
            {
                order: 1,
                name: "Worm + Rotaciones de Tronco",
                isWarmup: true,
                sets: 1,
                reps: "10",
                rest: "30s",
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=A8MFPgYNoGs",
                imageUrl: "https://i.ytimg.com/vi/A8MFPgYNoGs/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Sentadilla Trasera con Barra Talones Elevados",
                sets: 4,
                reps: "6-8",
                rest: "120s",
                notes: "",
                videoUrl: "https://youtube.com/shorts/FYuU4CAAT1I",
                imageUrl: "https://i.ytimg.com/vi/FYuU4CAAT1I/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Press Banca con Barra",
                sets: 3,
                reps: "6",
                rest: "90s",
                notes: "",
                videoUrl: "https://youtu.be/PKpsrFS2uac",
                imageUrl: "https://i.ytimg.com/vi/PKpsrFS2uac/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Dominadas Supinas",
                sets: 3,
                reps: "6",
                rest: "90s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/0TwqeC7fH8Y",
                imageUrl: "https://i.ytimg.com/vi/0TwqeC7fH8Y/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Press Inclinado con Mancuernas",
                isSuperset: true,
                items: [
                    {
                        name: "Press Inclinado con Mancuernas",
                        subOrder: 1,
                        sets: 3,
                        reps: "12, 10, 8",
                        isSupersetStart: true,
                        notes: "Trata de despegar el pecho al final del movimiento",
                        videoUrl: "https://youtu.be/ZE4M73kXB5A",
                        imageUrl: "https://i.ytimg.com/vi/ZE4M73kXB5A/mqdefault.jpg"
                    },
                    {
                        name: "Remo Seal con Mancuernas",
                        subOrder: 2,
                        sets: 3,
                        reps: "12, 10, 8",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/shorts/6tLfn99dO8o",
                        imageUrl: "https://i.ytimg.com/vi/6tLfn99dO8o/mqdefault.jpg"
                    }
                ],
                notes: "Trata de despegar el pecho al final del movimiento",
                videoUrl: "https://youtu.be/ZE4M73kXB5A",
                imageUrl: "https://i.ytimg.com/vi/ZE4M73kXB5A/mqdefault.jpg"
            },
            {
                order: 6,
                name: "Zancada Trasera Alterna con Mancuernas/KTB",
                isSuperset: true,
                items: [
                    {
                        name: "Zancada Trasera Alterna con Mancuernas/KTB",
                        subOrder: 1,
                        sets: 3,
                        reps: "16, 14, 12",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/watch?v=Kzv73cEkTq4",
                        imageUrl: "https://i.ytimg.com/vi/Kzv73cEkTq4/mqdefault.jpg"
                    },
                    {
                        name: "Elevaciones Laterales con Mancuernas",
                        subOrder: 2,
                        sets: 3,
                        reps: "12, 10, 8",
                        rest: "90s",
                        videoUrl: "https://youtu.be/rhmW_fhB4cs",
                        imageUrl: "https://i.ytimg.com/vi/rhmW_fhB4cs/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=Kzv73cEkTq4",
                imageUrl: "https://i.ytimg.com/vi/Kzv73cEkTq4/mqdefault.jpg"
            }
        ]
    },
    "dia4": {
        name: "Empuje BÁSICOS",
        exercises: [
            {
                order: 1,
                name: "Gomas - Rotación Externa en Columna",
                isWarmup: true,
                sets: 2,
                reps: "15",
                rest: "30s",
                notes: "Mantén tu codo prácticamente pegado al torso en todo momento",
                videoUrl: "https://youtu.be/y8cSPoMahok",
                imageUrl: "https://i.ytimg.com/vi/y8cSPoMahok/mqdefault.jpg"
            },
            {
                order: 2,
                name: "EMOM",
                isSuperset: true,
                isEMOM: true,
                emomDetails: {
                    totalIntervals: 4,
                    workIntervalSeconds: 90
                },
                items: [
                    {
                        name: "Sentadilla Frontal con Barra",
                        subOrder: 1,
                        sets: 1,
                        reps: "12",
                        isEMOMItem: true,
                        notes: "Ajusta la carga entre ejercicios",
                        videoUrl: "https://youtu.be/ErXO1WKVlPI",
                        imageUrl: "https://i.ytimg.com/vi/ErXO1WKVlPI/mqdefault.jpg"
                    },
                    {
                        name: "Press Militar con Barra de Pie",
                        subOrder: 2,
                        sets: 1,
                        reps: "6",
                        isEMOMItem: true,
                        videoUrl: "https://www.youtube.com/watch?v=idnuMZx6mS0",
                        imageUrl: "https://i.ytimg.com/vi/idnuMZx6mS0/mqdefault.jpg"
                    }
                ],
                notes: "Ajusta la carga entre ejercicios",
                videoUrl: "https://youtu.be/ErXO1WKVlPI",
                imageUrl: "https://i.ytimg.com/vi/ErXO1WKVlPI/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Press Inclinado con Mancuernas",
                sets: 4,
                reps: "12",
                rest: "90s",
                notes: "",
                videoUrl: "https://youtu.be/ZE4M73kXB5A",
                imageUrl: "https://i.ytimg.com/vi/ZE4M73kXB5A/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Zancada Trasera Alterna con Mancuernas/KTB",
                sets: 3,
                reps: "16",
                rest: "90s",
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=Kzv73cEkTq4",
                imageUrl: "https://i.ytimg.com/vi/Kzv73cEkTq4/mqdefault.jpg"
            },
            {
                order: 5,
                name: "EMOM",
                isSuperset: true,
                isEMOM: true,
                emomDetails: {
                    totalIntervals: 4,
                    workIntervalSeconds: 60
                },
                items: [
                    {
                        name: "Extensión Tríceps Trasnuca con Mancuernas/Kettlebell",
                        subOrder: 1,
                        sets: 1,
                        reps: "10",
                        isEMOMItem: true,
                        notes: "Ajusta la carga entre ejercicios",
                        videoUrl: "https://youtu.be/1MgU2PO4_rI",
                        imageUrl: "https://i.ytimg.com/vi/1MgU2PO4_rI/mqdefault.jpg"
                    },
                    {
                        name: "Flexiones / Deficit Push Ups con Discos al lado",
                        subOrder: 2,
                        sets: 1,
                        reps: "10",
                        isEMOMItem: true,
                        videoUrl: "https://www.youtube.com/watch?v=nLnrNuQFlao",
                        imageUrl: "https://i.ytimg.com/vi/nLnrNuQFlao/mqdefault.jpg"
                    }
                ],
                notes: "Ajusta la carga entre ejercicios",
                videoUrl: "https://youtu.be/1MgU2PO4_rI",
                imageUrl: "https://i.ytimg.com/vi/1MgU2PO4_rI/mqdefault.jpg"
            }
        ]
    },
    "dia5": {
        name: "Tracción BÁSICOS ",
        exercises: [
            {
                order: 1,
                name: "Gomas - Rotación Externa en Columna",
                isWarmup: true,
                sets: 2,
                reps: "15",
                rest: "30s",
                notes: "Mantén tu codo prácticamente pegado al torso en todo momento",
                videoUrl: "https://youtu.be/y8cSPoMahok",
                imageUrl: "https://i.ytimg.com/vi/y8cSPoMahok/mqdefault.jpg"
            },
            {
                order: 2,
                name: "EMOM",
                isSuperset: true,
                isEMOM: true,
                emomDetails: {
                    totalIntervals: 4,
                    workIntervalSeconds: 90
                },
                items: [
                    {
                        name: "Peso Muerto Rumano con Barra",
                        subOrder: 1,
                        sets: 1,
                        reps: "12",
                        isEMOMItem: true,
                        notes: "Ajusta la carga entre ejercicios",
                        videoUrl: "https://youtu.be/R7FKam5GyNw",
                        imageUrl: "https://i.ytimg.com/vi/R7FKam5GyNw/mqdefault.jpg"
                    },
                    {
                        name: "Dominadas con Peso Corporal",
                        subOrder: 2,
                        sets: 1,
                        reps: "6",
                        isEMOMItem: true,
                        videoUrl: "https://www.youtube.com/shorts/pb-14sP_R4M",
                        imageUrl: "https://i.ytimg.com/vi/pb-14sP_R4M/mqdefault.jpg"
                    }
                ],
                notes: "Ajusta la carga entre ejercicios",
                videoUrl: "https://youtu.be/R7FKam5GyNw",
                imageUrl: "https://i.ytimg.com/vi/R7FKam5GyNw/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Remo Seal con Mancuernas",
                sets: 4,
                reps: "12",
                rest: "90s",
                notes: "Trata de despegar el pecho al final del movimiento",
                videoUrl: "https://www.youtube.com/shorts/6tLfn99dO8o",
                imageUrl: "https://i.ytimg.com/vi/6tLfn99dO8o/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Curl Femoral desde Puente (Con TRX)",
                sets: 3,
                reps: "15",
                rest: "90s",
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=6NCkHTG4lHc",
                imageUrl: "https://i.ytimg.com/vi/6NCkHTG4lHc/mqdefault.jpg"
            },
            {
                order: 5,
                name: "EMOM",
                isSuperset: true,
                isEMOM: true,
                emomDetails: {
                    totalIntervals: 4,
                    workIntervalSeconds: 60
                },
                items: [
                    {
                        name: "Curl de Bíceps Apoyado en Banco con Mancuernas",
                        subOrder: 1,
                        sets: 1,
                        reps: "10",
                        isEMOMItem: true,
                        notes: "Ajusta la carga entre ejercicios",
                        videoUrl: "https://youtube.com/shorts/hQ3ojFx5soY",
                        imageUrl: "https://i.ytimg.com/vi/hQ3ojFx5soY/mqdefault.jpg"
                    },
                    {
                        name: "Face Pull con TRX",
                        subOrder: 2,
                        sets: 1,
                        reps: "10",
                        isEMOMItem: true,
                        videoUrl: "https://www.youtube.com/shorts/bxzpphpaGSg",
                        imageUrl: "https://i.ytimg.com/vi/bxzpphpaGSg/mqdefault.jpg"
                    }
                ],
                notes: "Ajusta la carga entre ejercicios",
                videoUrl: "https://youtube.com/shorts/hQ3ojFx5soY",
                imageUrl: "https://i.ytimg.com/vi/hQ3ojFx5soY/mqdefault.jpg"
            }
        ]
    }
};

const exerciseAlternatives = {
    "Remo con Barra": [
        { name: "Remo Unilat con Mancuerna/KTB (Explicado)", videoUrl: "https://youtu.be/uH9Hg4nWOG8", imageUrl: "https://i.ytimg.com/vi/uH9Hg4nWOG8/mqdefault.jpg" }
    ],
    "Hip Thrust con Barra (ExPLICADO)": [
        { name: "Peso Muerto Rumano con Mancuernas/KTB", videoUrl: "https://www.youtube.com/shorts/SMll4DOYvEs", imageUrl: "https://i.ytimg.com/vi/SMll4DOYvEs/mqdefault.jpg" }
    ],
    "Press Militar con Barra Sentado (Half Press)": [
        { name: "Press Militar Sentado con Mancuernas (ExPLICADO)", videoUrl: "https://www.youtube.com/shorts/2ZkYyh4ic0o", imageUrl: "https://i.ytimg.com/vi/2ZkYyh4ic0o/mqdefault.jpg" }
    ],
    "Sentadilla Trasera con Barra Talones Elevados": [
        { name: "Sentadilla Frontal con Mancuernas/Kettlebells", videoUrl: "https://youtu.be/lfb6neUpfP8", imageUrl: "https://i.ytimg.com/vi/lfb6neUpfP8/mqdefault.jpg" }
    ],
    "Press Banca con Barra": [
        { name: "Floor Press con Mancuernas", videoUrl: "https://www.youtube.com/shorts/Iu02N3s7zgQ", imageUrl: "https://i.ytimg.com/vi/Iu02N3s7zgQ/mqdefault.jpg" }
    ],
    "Dominadas Supinas": [
        { name: "Dominadas Australianas con Pies en Banco", videoUrl: "https://youtu.be/WqoNa74DieE", imageUrl: "https://i.ytimg.com/vi/WqoNa74DieE/mqdefault.jpg" }
    ]
};
