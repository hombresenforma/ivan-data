// Titulo: P22_4D_TORPIER_MIXTO_1

const workoutData = {
    "dia1": {
        name: "Torso Completo (PUSH)",
        exercises: [
            {
                order: 1,
                name: "RotaciÃ³n Externa de Hombro Unilat con Polea",
                isWarmup: true,
                isSuperset: true,
                items: [
                    {
                        name: "RotaciÃ³n Externa de Hombro Unilat con Polea",
                        subOrder: 1,
                        sets: 2,
                        reps: "10",
                        isSupersetStart: true,
                        videoUrl: "https://youtube.com/shorts/0dw436rzrNU",
                        imageUrl: "https://i.ytimg.com/vi/0dw436rzrNU/mqdefault.jpg"
                    },
                    {
                        name: "RotaciÃ³n Interna de Hombro Unilat con Polea",
                        subOrder: 2,
                        sets: 2,
                        reps: "10",
                        rest: "30s",
                        videoUrl: "https://youtube.com/shorts/3SW4Pxgi1c0",
                        imageUrl: "https://i.ytimg.com/vi/3SW4Pxgi1c0/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtube.com/shorts/0dw436rzrNU",
                imageUrl: "https://i.ytimg.com/vi/0dw436rzrNU/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Press Banca Inclinado en Multipower",
                sets: 3,
                reps: "6, 10, 10",
                rest: "90s",
                notes: "",
                videoUrl: "https://youtu.be/3GS7EjN7KSk",
                imageUrl: "https://i.ytimg.com/vi/3GS7EjN7KSk/mqdefault.jpg"
            },
            {
                order: 3,
                name: "MÃ¡quina de Remo (Gironda)",
                sets: 3,
                reps: "8, 12, 12",
                rest: "90s",
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=3wcaZqSfP0A",
                imageUrl: "https://i.ytimg.com/vi/3wcaZqSfP0A/mqdefault.jpg"
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
                        reps: "8-10",
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
                order: 5,
                name: "JalÃ³n al Pecho Neutro en Polea",
                isSuperset: true,
                items: [
                    {
                        name: "JalÃ³n al Pecho Neutro en Polea",
                        subOrder: 1,
                        sets: 3,
                        reps: "8-10",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/5YzMH2KkMHc",
                        imageUrl: "https://i.ytimg.com/vi/5YzMH2KkMHc/mqdefault.jpg"
                    },
                    {
                        name: "Curl Martillo con Mancuernas",
                        subOrder: 2,
                        sets: 3,
                        reps: "10",
                        rest: "90s",
                        videoUrl: "https://youtu.be/fcFsPoJY9lg",
                        imageUrl: "https://i.ytimg.com/vi/fcFsPoJY9lg/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/5YzMH2KkMHc",
                imageUrl: "https://i.ytimg.com/vi/5YzMH2KkMHc/mqdefault.jpg"
            },
            {
                order: 6,
                name: "Fondos en Paralelas Lastrados",
                isSuperset: true,
                items: [
                    {
                        name: "Fondos en Paralelas Lastrados",
                        subOrder: 1,
                        sets: 2,
                        reps: "10-12",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/shorts/xsnhvnyl70I",
                        imageUrl: "https://i.ytimg.com/vi/xsnhvnyl70I/mqdefault.jpg"
                    },
                    {
                        name: "ExtensiÃ³n de Codo en Polea Alta",
                        subOrder: 2,
                        sets: 2,
                        reps: "12-15",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/watch?v=z7gqbcjkzU0",
                        imageUrl: "https://i.ytimg.com/vi/z7gqbcjkzU0/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/xsnhvnyl70I",
                imageUrl: "https://i.ytimg.com/vi/xsnhvnyl70I/mqdefault.jpg"
            }
        ]
    },
    "dia2": {
        name: "Torso Completo (PULL)",
        exercises: [
            {
                order: 1,
                name: "RotaciÃ³n Externa de Hombro Unilat con Polea",
                isWarmup: true,
                isSuperset: true,
                items: [
                    {
                        name: "RotaciÃ³n Externa de Hombro Unilat con Polea",
                        subOrder: 1,
                        sets: 2,
                        reps: "10",
                        isSupersetStart: true,
                        videoUrl: "https://youtube.com/shorts/0dw436rzrNU",
                        imageUrl: "https://i.ytimg.com/vi/0dw436rzrNU/mqdefault.jpg"
                    },
                    {
                        name: "RotaciÃ³n Interna de Hombro Unilat con Polea",
                        subOrder: 2,
                        sets: 2,
                        reps: "10",
                        rest: "30s",
                        videoUrl: "https://youtube.com/shorts/3SW4Pxgi1c0",
                        imageUrl: "https://i.ytimg.com/vi/3SW4Pxgi1c0/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtube.com/shorts/0dw436rzrNU",
                imageUrl: "https://i.ytimg.com/vi/0dw436rzrNU/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Dominadas Supinas",
                sets: 3,
                reps: "6, 10, 10",
                rest: "90s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/0TwqeC7fH8Y",
                imageUrl: "https://i.ytimg.com/vi/0TwqeC7fH8Y/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Press Militar en Multipower",
                sets: 3,
                reps: "8, 12, 12",
                rest: "90s",
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=iATqshmFPnI",
                imageUrl: "https://i.ytimg.com/vi/iATqshmFPnI/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Remo Unilat Sentado en Polea Media",
                isSuperset: true,
                items: [
                    {
                        name: "Remo Unilat Sentado en Polea Media",
                        subOrder: 1,
                        sets: 3,
                        reps: "8-10",
                        isSupersetStart: true,
                        videoUrl: "https://youtube.com/shorts/kjbRoWIl7eI",
                        imageUrl: "https://i.ytimg.com/vi/kjbRoWIl7eI/mqdefault.jpg"
                    },
                    {
                        name: "Face Pull con KTB",
                        subOrder: 2,
                        sets: 3,
                        reps: "10",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/shorts/RIS2s-UkKOk",
                        imageUrl: "https://i.ytimg.com/vi/RIS2s-UkKOk/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtube.com/shorts/kjbRoWIl7eI",
                imageUrl: "https://i.ytimg.com/vi/kjbRoWIl7eI/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Press Banca con Mancuernas",
                isSuperset: true,
                items: [
                    {
                        name: "Press Banca con Mancuernas",
                        subOrder: 1,
                        sets: 3,
                        reps: "8-10",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/hXCJC2Apcdg",
                        imageUrl: "https://i.ytimg.com/vi/hXCJC2Apcdg/mqdefault.jpg"
                    },
                    {
                        name: "Fondos de TrÃ­ceps con Pies en el Suelo",
                        subOrder: 2,
                        sets: 3,
                        reps: "15",
                        rest: "90s",
                        videoUrl: "https://youtube.com/shorts/7mpEJQC_gRk",
                        imageUrl: "https://i.ytimg.com/vi/7mpEJQC_gRk/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/hXCJC2Apcdg",
                imageUrl: "https://i.ytimg.com/vi/hXCJC2Apcdg/mqdefault.jpg"
            },
            {
                order: 6,
                name: "Curl con Barra Z",
                isSuperset: true,
                items: [
                    {
                        name: "Curl con Barra Z",
                        subOrder: 1,
                        sets: 2,
                        reps: "10-12",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/4gYLTjNaTmw",
                        imageUrl: "https://i.ytimg.com/vi/4gYLTjNaTmw/mqdefault.jpg"
                    },
                    {
                        name: "Elevaciones Laterales con Mancuernas",
                        subOrder: 2,
                        sets: 2,
                        reps: "12-15",
                        rest: "90s",
                        videoUrl: "https://youtu.be/rhmW_fhB4cs",
                        imageUrl: "https://i.ytimg.com/vi/rhmW_fhB4cs/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/4gYLTjNaTmw",
                imageUrl: "https://i.ytimg.com/vi/4gYLTjNaTmw/mqdefault.jpg"
            }
        ]
    },
    "dia3": {
        name: "Pierna Completa (POSTERIOR)",
        exercises: [
            {
                order: 1,
                name: "AducciÃ³n de Piernas en MÃ¡quina",
                isWarmup: true,
                isSuperset: true,
                items: [
                    {
                        name: "AducciÃ³n de Piernas en MÃ¡quina",
                        subOrder: 1,
                        sets: 2,
                        reps: "12",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/shorts/7TPklhKZRrc",
                        imageUrl: "https://i.ytimg.com/vi/7TPklhKZRrc/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/7TPklhKZRrc",
                imageUrl: "https://i.ytimg.com/vi/7TPklhKZRrc/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Hip Thrust con Barra (ExPLICADO)",
                sets: 4,
                reps: "6, 6, 12, 12",
                rest: "120s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/eIZUNV9Xj7Y",
                imageUrl: "https://i.ytimg.com/vi/eIZUNV9Xj7Y/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Sentadilla Trasera con Barra Talones Elevados",
                sets: 3,
                reps: "8, 12, 12",
                rest: "90s",
                notes: "Baja lo que te permita tu movilidad de cadera (Espalda completamente recta).",
                videoUrl: "https://youtube.com/shorts/FYuU4CAAT1I",
                imageUrl: "https://i.ytimg.com/vi/FYuU4CAAT1I/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Sentadilla BÃºlgara con Mancuerna o KTB",
                sets: 3,
                reps: "8",
                rest: "90s",
                notes: "",
                videoUrl: "https://youtu.be/kA6bHiDdTO4",
                imageUrl: "https://i.ytimg.com/vi/kA6bHiDdTO4/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Curl Femoral Sentado en MÃ¡quina",
                sets: 3,
                reps: "12",
                rest: "60s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/2fXW4I08ov4",
                imageUrl: "https://i.ytimg.com/vi/2fXW4I08ov4/mqdefault.jpg"
            }
        ]
    },
    "dia4": {
        name: "Torso Accesorios",
        exercises: [
            {
                order: 1,
                name: "Fondos de TrÃ­ceps con Pies Elevados",
                isWarmup: true,
                isSuperset: true,
                items: [
                    {
                        name: "Fondos de TrÃ­ceps con Pies Elevados",
                        subOrder: 1,
                        sets: 2,
                        reps: "12",
                        isSupersetStart: true,
                        videoUrl: "https://youtube.com/shorts/FBttBh-aiVs",
                        imageUrl: "https://i.ytimg.com/vi/FBttBh-aiVs/mqdefault.jpg"
                    },
                    {
                        name: "Curl Martillo con Mancuernas",
                        subOrder: 2,
                        sets: 2,
                        reps: "12",
                        rest: "60s",
                        videoUrl: "https://youtu.be/fcFsPoJY9lg",
                        imageUrl: "https://i.ytimg.com/vi/fcFsPoJY9lg/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtube.com/shorts/FBttBh-aiVs",
                imageUrl: "https://i.ytimg.com/vi/FBttBh-aiVs/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Press Militar Alterno con Mancuernas",
                sets: 3,
                reps: "16",
                rest: "120s",
                notes: "",
                videoUrl: "https://youtube.com/shorts/pKvRPUg6MB8?feature=share",
                imageUrl: "https://i.ytimg.com/vi/pKvRPUg6MB8/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Remo Diagonal Unilat en Polea Alta",
                sets: 3,
                reps: "8",
                rest: "90s",
                notes: "Baja lo que te permita tu movilidad de cadera (Espalda completamente recta).",
                videoUrl: "https://youtube.com/shorts/ikKQhcynKmg",
                imageUrl: "https://i.ytimg.com/vi/ikKQhcynKmg/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Press Banca con Mancuernas",
                isSuperset: true,
                items: [
                    {
                        name: "Press Banca con Mancuernas",
                        subOrder: 1,
                        sets: 3,
                        reps: "10",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/hXCJC2Apcdg",
                        imageUrl: "https://i.ytimg.com/vi/hXCJC2Apcdg/mqdefault.jpg"
                    },
                    {
                        name: "Remo Seal con Mancuernas",
                        subOrder: 2,
                        sets: 3,
                        reps: "10",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/shorts/6tLfn99dO8o",
                        imageUrl: "https://i.ytimg.com/vi/6tLfn99dO8o/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/hXCJC2Apcdg",
                imageUrl: "https://i.ytimg.com/vi/hXCJC2Apcdg/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Curl Scott con Barra Z",
                isSuperset: true,
                items: [
                    {
                        name: "Curl Scott con Barra Z",
                        subOrder: 1,
                        sets: 3,
                        reps: "10",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/watch?v=-Rzppjmt6ag",
                        imageUrl: "https://i.ytimg.com/vi/-Rzppjmt6ag/mqdefault.jpg"
                    },
                    {
                        name: "ExtensiÃ³n TrÃ­ceps Trasnuca con Mancuernas/Kettlebell",
                        subOrder: 2,
                        sets: 3,
                        reps: "10",
                        rest: "90s",
                        videoUrl: "https://youtu.be/1MgU2PO4_rI",
                        imageUrl: "https://i.ytimg.com/vi/1MgU2PO4_rI/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=-Rzppjmt6ag",
                imageUrl: "https://i.ytimg.com/vi/-Rzppjmt6ag/mqdefault.jpg"
            }
        ]
    },
    "dia5": {
        name: "Fullbody 1",
        exercises: [
            {
                order: 1,
                name: "Gomas - Zancada AvanÃ§ada",
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
                name: "Fondos de TrÃ­ceps con Pies Elevados",
                isSuperset: true,
                items: [
                    {
                        name: "Fondos de TrÃ­ceps con Pies Elevados",
                        subOrder: 1,
                        sets: 3,
                        reps: "15-20",
                        isSupersetStart: true,
                        videoUrl: "https://youtube.com/shorts/FBttBh-aiVs",
                        imageUrl: "https://i.ytimg.com/vi/FBttBh-aiVs/mqdefault.jpg"
                    },
                    {
                        name: "Zancada DinÃ¡mica + Sentadilla",
                        subOrder: 2,
                        sets: 3,
                        reps: "10",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/watch?v=kRm4s1Aemew",
                        imageUrl: "https://i.ytimg.com/vi/kRm4s1Aemew/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtube.com/shorts/FBttBh-aiVs",
                imageUrl: "https://i.ytimg.com/vi/FBttBh-aiVs/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Worm + FlexiÃ³n",
                isSuperset: true,
                items: [
                    {
                        name: "Worm + FlexiÃ³n",
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
    "dia6": {
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
                name: "Zancadas Caminando con Mancuernas/KTB",
                isSuperset: true,
                items: [
                    {
                        name: "Zancadas Caminando con Mancuernas/KTB",
                        subOrder: 1,
                        sets: 4,
                        reps: "20",
                        isSupersetStart: true,
                        notes: "Haz sin peso las zancadas si no tienes.",
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
                name: "Gomas - Curl de BÃ­ceps en Columna",
                isSuperset: true,
                items: [
                    {
                        name: "Gomas - Curl de BÃ­ceps en Columna",
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
                name: "Gomas - Remo al MentÃ³n de Pie",
                isSuperset: true,
                items: [
                    {
                        name: "Gomas - Remo al MentÃ³n de Pie",
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
    "Press Banca Inclinado en Multipower": [
        { name: "Press Banca Inclinado con Barra", videoUrl: "https://www.youtube.com/watch?v=4tPP-4K5kMQ", imageUrl: "https://i.ytimg.com/vi/4tPP-4K5kMQ/mqdefault.jpg" }
    ],
    "MÃ¡quina de Remo (Gironda)": [
        { name: "Remo Gironda en Polea", videoUrl: "https://youtube.com/shorts/11xkWdyYWus", imageUrl: "https://i.ytimg.com/vi/11xkWdyYWus/mqdefault.jpg" }
    ],
    "Dominadas Supinas": [
        { name: "JalÃ³n al Pecho Supino en Polea", videoUrl: "https://youtu.be/rimdRzyIJkA", imageUrl: "https://i.ytimg.com/vi/rimdRzyIJkA/mqdefault.jpg" }
    ],
    "Press Militar en Multipower": [
        { name: "Press Militar con Barra Sentado (Half Press)", videoUrl: "https://www.youtube.com/watch?v=q0C0BaHITAc", imageUrl: "https://i.ytimg.com/vi/q0C0BaHITAc/mqdefault.jpg" }
    ],
    "Hip Thrust con Barra (ExPLICADO)": [
        { name: "Sentadilla Posterior en MÃ¡quina Jaca", videoUrl: "https://youtube.com/shorts/KII1KHKgr8o", imageUrl: "https://i.ytimg.com/vi/KII1KHKgr8o/mqdefault.jpg" }
    ],
    "Press Militar Alterno con Mancuernas": [
        { name: "Sentadilla Posterior en MÃ¡quina Jaca", videoUrl: "https://youtube.com/shorts/KII1KHKgr8o", imageUrl: "https://i.ytimg.com/vi/KII1KHKgr8o/mqdefault.jpg" }
    ],
    "Gomas - Zancada AvanÃ§ada": [
        { name: "Gomas - Zancada BÃ¡sica", videoUrl: "https://youtu.be/-NtzcHwp6fo", imageUrl: "https://i.ytimg.com/vi/-NtzcHwp6fo/mqdefault.jpg" }
    ],
    "Gomas - Peso Muerto": [
        { name: "Gomas - Zancada BÃ¡sica", videoUrl: "https://youtu.be/-NtzcHwp6fo", imageUrl: "https://i.ytimg.com/vi/-NtzcHwp6fo/mqdefault.jpg" }
    ]
};
