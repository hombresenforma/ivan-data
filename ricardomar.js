// Titulo: Plan de Entrenamiento

// Contenido de app_datos.js

// =================================================================================
// DATOS DE LA RUTINA (4 DÍAS)
// =================================================================================
const workoutData = {
    "dia1": {
        name: "Anterior (Press Militar)",
        exercises: [
            {
                order: 1,
                name: "Press Militar con Barra de Pie",
                sets: 5,
                reps: "4-6",
                rest: "90s",
                notes: "Trabajo de Fuerza. Lo más explosivo posible. Sin llegar al fallo.",
                videoUrl: "https://www.youtube.com/watch?v=idnuMZx6mS0",
                imageUrl: "https://i.ytimg.com/vi/idnuMZx6mS0/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Sentadilla Jaca en Máquina",
                sets: 3,
                reps: "15, 12, 10",
                rest: "90s",
                notes: "",
                videoUrl: "https://youtube.com/shorts/P4iHoym5SxM",
                imageUrl: "https://i.ytimg.com/vi/P4iHoym5SxM/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Press Inclinado con Mancuernas",
                isSuperset: true,
                items: [
                    {
                        name: "Press Inclinado con Mancuernas",
                        subOrder: 1,
                        sets: 3,
                        reps: "10-12",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/ZE4M73kXB5A",
                        imageUrl: "https://i.ytimg.com/vi/ZE4M73kXB5A/mqdefault.jpg"
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
                videoUrl: "https://youtu.be/ZE4M73kXB5A",
                imageUrl: "https://i.ytimg.com/vi/ZE4M73kXB5A/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Extensión de Codo en Polea Alta",
                isSuperset: true,
                items: [
                    {
                        name: "Extensión de Codo en Polea Alta",
                        subOrder: 1,
                        sets: 3,
                        reps: "10-12",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/watch?v=z7gqbcjkzU0",
                        imageUrl: "https://i.ytimg.com/vi/z7gqbcjkzU0/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=z7gqbcjkzU0",
                imageUrl: "https://i.ytimg.com/vi/z7gqbcjkzU0/mqdefault.jpg"
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
                        reps: "20, 18, 15",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/watch?v=k1Nn0cJOMng",
                        imageUrl: "https://i.ytimg.com/vi/k1Nn0cJOMng/mqdefault.jpg"
                    },
                    {
                        name: "Fondos en Banco",
                        subOrder: 2,
                        sets: 3,
                        reps: "20, 18, 15",
                        videoUrl: "https://youtu.be/NSB_HrDwd6I",
                        imageUrl: "https://i.ytimg.com/vi/NSB_HrDwd6I/mqdefault.jpg"
                    },
                    {
                        name: "Sentadilla con Salto",
                        subOrder: 3,
                        sets: 3,
                        reps: "20, 18, 15",
                        rest: "60s",
                        videoUrl: "https://www.youtube.com/watch?v=1-Mum4hyIJ0",
                        imageUrl: "https://i.ytimg.com/vi/1-Mum4hyIJ0/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=k1Nn0cJOMng",
                imageUrl: "https://i.ytimg.com/vi/k1Nn0cJOMng/mqdefault.jpg"
            }
        ]
    },
    "dia2": {
        name: "Posterior (Hip Thrust)",
        exercises: [
            {
                order: 1,
                name: "Hip Thrust con Barra",
                sets: 5,
                reps: "4-6",
                rest: "120s",
                notes: "",
                videoUrl: "https://youtu.be/sbl1qYdkzUc",
                imageUrl: "https://i.ytimg.com/vi/sbl1qYdkzUc/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Dominadas Asistidas en Máquina",
                sets: 3,
                reps: "15, 12, 10",
                rest: "90s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/5OGBlINLP6w",
                imageUrl: "https://i.ytimg.com/vi/5OGBlINLP6w/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Curl Femoral en Máquina",
                isSuperset: true,
                items: [
                    {
                        name: "Curl Femoral en Máquina",
                        subOrder: 1,
                        sets: 3,
                        reps: "10-12",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/watch?v=Zhnhz1r_u-Y",
                        imageUrl: "https://i.ytimg.com/vi/Zhnhz1r_u-Y/mqdefault.jpg"
                    },
                    {
                        name: "Curl con Mancuernas de Pie Alterno",
                        subOrder: 2,
                        sets: 3,
                        reps: "20",
                        rest: "90s",
                        videoUrl: "https://youtu.be/85KCpAw9CE4",
                        imageUrl: "https://i.ytimg.com/vi/85KCpAw9CE4/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=Zhnhz1r_u-Y",
                imageUrl: "https://i.ytimg.com/vi/Zhnhz1r_u-Y/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Curl Scott con Barra Z",
                sets: 3,
                reps: "10-12",
                rest: "90s",
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=-Rzppjmt6ag",
                imageUrl: "https://i.ytimg.com/vi/-Rzppjmt6ag/mqdefault.jpg"
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
                        reps: "20, 18, 15",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/fcFsPoJY9lg",
                        imageUrl: "https://i.ytimg.com/vi/fcFsPoJY9lg/mqdefault.jpg"
                    },
                    {
                        name: "Remo Horizontal en TRX",
                        subOrder: 2,
                        sets: 3,
                        reps: "20, 18, 15",
                        videoUrl: "https://www.youtube.com/watch?v=uTA2s5FuRUM",
                        imageUrl: "https://i.ytimg.com/vi/uTA2s5FuRUM/mqdefault.jpg"
                    },
                    {
                        name: "Kettlebell - Soft Swing",
                        subOrder: 3,
                        sets: 3,
                        reps: "20, 18, 15",
                        rest: "60s",
                        videoUrl: "https://youtube.com/shorts/-i4ReGBb26g",
                        imageUrl: "https://i.ytimg.com/vi/-i4ReGBb26g/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/fcFsPoJY9lg",
                imageUrl: "https://i.ytimg.com/vi/fcFsPoJY9lg/mqdefault.jpg"
            }
        ]
    },
    "dia3": {
        name: "Anterior (Sentadilla)",
        exercises: [
            {
                order: 1,
                name: "Sentadilla Trasera con Barra",
                sets: 5,
                reps: "4-6",
                rest: "120s",
                notes: "",
                videoUrl: "https://youtu.be/FK5XU_gaxAE",
                imageUrl: "https://i.ytimg.com/vi/FK5XU_gaxAE/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Press Banca Inclinado en Multipower",
                sets: 3,
                reps: "15, 12, 10",
                rest: "90s",
                notes: "",
                videoUrl: "https://youtu.be/3GS7EjN7KSk",
                imageUrl: "https://i.ytimg.com/vi/3GS7EjN7KSk/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Zancadas Caminando con Mancuernas/Kettlebells",
                sets: 3,
                reps: "10-12",
                rest: "60s",
                notes: "Zancadas cortas como en el vídeo para priorizar trabajo de cuádriceps. Talón del pie delantero a la altura de la rodilla trasera.",
                videoUrl: "https://youtu.be/7tRy9X0ibnk",
                imageUrl: "https://i.ytimg.com/vi/7tRy9X0ibnk/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Press Militar Unilat de Pie con Mancuerna/KTB",
                sets: 3,
                reps: "10-12",
                rest: "60s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/vIK0qkXP_f0",
                imageUrl: "https://i.ytimg.com/vi/vIK0qkXP_f0/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Thruster con Mancuernas",
                isSuperset: true,
                items: [
                    {
                        name: "Thruster con Mancuernas",
                        subOrder: 1,
                        sets: 3,
                        reps: "20, 18, 15, 12",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/watch?v=5mTjKFubavs",
                        imageUrl: "https://i.ytimg.com/vi/5mTjKFubavs/mqdefault.jpg"
                    },
                    {
                        name: "Flexiones + Mountain Climbers",
                        subOrder: 2,
                        sets: 3,
                        reps: "20, 18, 15",
                        videoUrl: "https://www.youtube.com/shorts/1wdJ5RSUCBE",
                        imageUrl: "https://i.ytimg.com/vi/1wdJ5RSUCBE/mqdefault.jpg"
                    },
                    {
                        name: "Shoulder Taps",
                        subOrder: 3,
                        sets: 3,
                        reps: "20, 18, 16",
                        rest: "60s",
                        videoUrl: "https://www.youtube.com/shorts/viyHk_K7I48",
                        imageUrl: "https://i.ytimg.com/vi/viyHk_K7I48/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=5mTjKFubavs",
                imageUrl: "https://i.ytimg.com/vi/5mTjKFubavs/mqdefault.jpg"
            }
        ]
    },
    "dia4": {
        name: "Posterior (Chin Up)",
        exercises: [
            {
                order: 1,
                name: "Dominadas / Pull Ups Supinación (Chin Up)",
                sets: 5,
                reps: "4-6",
                rest: "120s",
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=dN5DqMhO18s",
                imageUrl: "https://i.ytimg.com/vi/dN5DqMhO18s/mqdefault.jpg"
            },
            {
                order: 2,
                name: "Remo Gironda Sentado en Polea",
                isSuperset: true,
                items: [
                    {
                        name: "Remo Gironda Sentado en Polea",
                        subOrder: 1,
                        sets: 3,
                        reps: "15, 12, 10",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/shorts/jFR7oYwgy5s",
                        imageUrl: "https://i.ytimg.com/vi/jFR7oYwgy5s/mqdefault.jpg"
                    },
                    {
                        name: "Curl con Mancuernas Sentado en Banco Inclinado",
                        subOrder: 2,
                        sets: 3,
                        reps: "10-12",
                        rest: "90s",
                        videoUrl: "https://youtu.be/S32a3nYiWko",
                        imageUrl: "https://i.ytimg.com/vi/S32a3nYiWko/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/jFR7oYwgy5s",
                imageUrl: "https://i.ytimg.com/vi/jFR7oYwgy5s/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Curl con Barra Z",
                isSuperset: true,
                items: [
                    {
                        name: "Curl con Barra Z",
                        subOrder: 1,
                        sets: 3,
                        reps: "10-12",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/4gYLTjNaTmw",
                        imageUrl: "https://i.ytimg.com/vi/4gYLTjNaTmw/mqdefault.jpg"
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
                videoUrl: "https://youtu.be/4gYLTjNaTmw",
                imageUrl: "https://i.ytimg.com/vi/4gYLTjNaTmw/mqdefault.jpg"
            },
            {
                order: 4,
                name: "Peso Muerto Rumano con Mancuernas",
                sets: 3,
                reps: "10-12",
                rest: "90s",
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/SMll4DOYvEs",
                imageUrl: "https://i.ytimg.com/vi/SMll4DOYvEs/mqdefault.jpg"
            },
            {
                order: 5,
                name: "Gorilla Row con Kettlebells/Mancuernas",
                isSuperset: true,
                items: [
                    {
                        name: "Gorilla Row con Kettlebells/Mancuernas",
                        subOrder: 1,
                        sets: 3,
                        reps: "20, 18, 16",
                        isSupersetStart: true,
                        videoUrl: "https://youtu.be/4hKPsdWsXl8",
                        imageUrl: "https://i.ytimg.com/vi/4hKPsdWsXl8/mqdefault.jpg"
                    },
                    {
                        name: "Curl Femoral desde Puente (Con TRX)",
                        subOrder: 2,
                        sets: 3,
                        reps: "20, 18, 16",
                        videoUrl: "https://www.youtube.com/watch?v=6NCkHTG4lHc",
                        imageUrl: "https://i.ytimg.com/vi/6NCkHTG4lHc/mqdefault.jpg"
                    },
                    {
                        name: "Hollow - Nivel 3",
                        subOrder: 3,
                        sets: 3,
                        reps: "45s",
                        rest: "60s",
                        videoUrl: "https://youtu.be/I6YISGE4Uvo",
                        imageUrl: "https://i.ytimg.com/vi/I6YISGE4Uvo/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/4hKPsdWsXl8",
                imageUrl: "https://i.ytimg.com/vi/4hKPsdWsXl8/mqdefault.jpg"
            }
        ]
    }
};

const exerciseAlternatives = {
    "Sentadilla Jaca en Máquina": [
        { name: "Sentadilla Trasera en Multipower", videoUrl: "https://youtu.be/la-dqygoIuk", imageUrl: "https://i.ytimg.com/vi/la-dqygoIuk/mqdefault.jpg" }
    ],
    "Hip Thrust con Barra": [
        { name: "Prensa Horizontal", videoUrl: "https://www.youtube.com/watch?v=IqjbBRNqJps", imageUrl: "https://i.ytimg.com/vi/IqjbBRNqJps/mqdefault.jpg" }
    ],
    "Dominadas Asistidas en Máquina": [
        { name: "Dominadas Australianas con Pies en Banco", videoUrl: "https://youtu.be/WqoNa74DieE", imageUrl: "https://i.ytimg.com/vi/WqoNa74DieE/mqdefault.jpg" }
    ],
    "Sentadilla Trasera con Barra": [
        { name: "Hack Squat / Prensa Hack", videoUrl: "https://www.youtube.com/watch?v=6teL-OyXuQs", imageUrl: "https://i.ytimg.com/vi/6teL-OyXuQs/mqdefault.jpg" }
    ],
    "Press Banca Inclinado en Multipower": [
        { name: "Press Inclinado con Mancuernas", videoUrl: "https://youtu.be/ZE4M73kXB5A", imageUrl: "https://i.ytimg.com/vi/ZE4M73kXB5A/mqdefault.jpg" }
    ],
    "Remo Gironda Sentado en Polea": [
        { name: "Máquina de Remo (Gironda)", videoUrl: "https://www.youtube.com/watch?v=3wcaZqSfP0A", imageUrl: "https://i.ytimg.com/vi/3wcaZqSfP0A/mqdefault.jpg" }
    ]
};

console.log("Datos de rutina cargados desde el creador.");
// Export if using modules in the target app, or remove if it's a simple script include
// export { workoutData, exerciseAlternatives };
