// Contenido de Ivan_rutina.js (o el nombre que tu app espere, ej. ivan_rutina.js)

const workoutData = {
    "dia1": {
        name: "DÍA 1: TORSO",
        exercises: [
            { 
                order: 1, 
                name: "Press de Banca con Barra", 
                sets: 4, 
                reps: "10-12", 
                rest: "90s", 
                rpe: "RPE 8", 
                notes: "Agarre medio. Codos a 45º, pies en el suelo, retracción escapular.", 
                videoUrl: "https://www.youtube.com/embed/examplevideo2" 
            },
            { 
                order: 2, 
                name: "Remo con Barra (Agarre Prono)", 
                sets: 4, 
                reps: "10-12", 
                rest: "90s", 
                rpe: "RPE 8", 
                notes: "Inclinar torso a 45º. Tirar la barra hacia el abdomen bajo.", 
                videoUrl: "https://www.youtube.com/embed/examplevideo23" 
            },
            {
                order: 3, 
                isSuperset: true,
                items: [
                    { 
                        subOrder: 1, 
                        name: "Press Inclinado con Mancuernas", 
                        sets: 3, 
                        reps: "10-12", 
                        rpe: "RIR 2", 
                        notes: "Banco a 30-45 grados. Controlar la bajada.", 
                        videoUrl: "https://www.youtube.com/embed/examplevideo3", 
                        isSupersetStart: true, 
                        customRestText: "Sin descanso (Pasa al 3.2)" 
                    },
                    { 
                        subOrder: 2, 
                        name: "Jalón al Pecho en Polea Alta (Agarre Ancho Prono)", 
                        sets: 3, 
                        reps: "10-12", 
                        rest: "120s", 
                        rpe: "RIR 1-2", 
                        notes: "Llevar la barra al pecho, retracción escapular.", 
                        videoUrl: "https://www.youtube.com/embed/SCVAc0p9001" 
                    }
                ]
            },
            {
                order: 4, 
                isSuperset: true,
                items: [
                    { 
                        subOrder: 1, 
                        name: "Curl de Bíceps con Barra Z", 
                        sets: 3, 
                        reps: "10-12", 
                        rpe: "RIR 1", 
                        notes: "Evitar balanceo excesivo.", 
                        videoUrl: "https://www.youtube.com/embed/SCVAc0p9003", 
                        isSupersetStart: true, 
                        customRestText: "Sin descanso (Pasa al 4.2)" 
                    },
                    { 
                        subOrder: 2, 
                        name: "Extensiones Tríceps Polea Alta con Cuerda", 
                        sets: 3, 
                        reps: "10-15", 
                        rest: "75s", 
                        rpe: "RIR 1-2", 
                        notes: "Codos pegados al cuerpo, extensión completa.", 
                        videoUrl: "youtube.com/embed/" 
                    }
                ]
            }
        ]
    },
    "dia2": { 
        name: "DÍA 2: PIERNA",
        exercises: [
            { 
                order: 1, 
                name: "Sentadilla Trasera con Barra", 
                sets: 4, 
                reps: "10-12", 
                rest: "120s", 
                rpe: "RPE 8", 
                notes: "Profundidad completa, espalda recta.", 
                videoUrl: "https://www.youtube.com/embed/examplevideo22" 
            },
            { 
                order: 2, 
                name: "Peso Muerto Rumano con Mancuernas", 
                sets: 4, 
                reps: "10-12", 
                rest: "90s", 
                rpe: "RPE 8", 
                notes: "Sentir el estiramiento en isquiotibiales, espalda neutra.", 
                videoUrl: "https://www.youtube.com/embed/examplevideo42" // Asumiendo ID 32 para PMR con mancuernas
            },
            {
                order: 3, 
                isSuperset: true,
                items: [
                    { 
                        subOrder: 1, 
                        name: "Prensa Inclinada", 
                        sets: 3, 
                        reps: "10-12", 
                        rpe: "RIR 1-2", 
                        notes: "Enfoque en cuádriceps, rango completo.", 
                        videoUrl: "youtube.com/embed/...9", // Asumiendo ID 49 para Prensa Inclinada
                        isSupersetStart: true, 
                        customRestText: "Sin descanso (Pasa al 3.2)" 
                    },
                    { 
                        subOrder: 2, 
                        name: "Curl Femoral Sentado en Máquina", 
                        sets: 3, 
                        reps: "12-15", 
                        rest: "90s", 
                        rpe: "RIR 1", 
                        notes: "Foco en la contracción del isquio.", 
                        videoUrl: "https://www.youtube.com/embed/examplevideo20" 
                    }
                ]
            },
            {
                order: 4, 
                isSuperset: true,
                items: [
                    { 
                        subOrder: 1, 
                        name: "Elevación de Talones de Pie (en máquina o con peso)", 
                        sets: 4, 
                        reps: "15-20", 
                        rpe: "RIR 0-1", 
                        notes: "Rango completo para gemelos.", 
                        videoUrl: "https://www.youtube.com/embed/examplevideo41", 
                        isSupersetStart: true, 
                        customRestText: "Sin descanso (Pasa al 4.2)" 
                    },
                    { 
                        subOrder: 2, 
                        name: "Plancha Abdominal (Plank)", 
                        sets: 4, 
                        reps: "30-60seg", 
                        rest: "60s", 
                        rpe: "Al fallo técnico", 
                        notes: "Cuerpo recto, abdomen contraído.", 
                        videoUrl: "googleusercontent.com/youtube.com/14" 
                    }
                ]
            }
        ]
    },
    "dia3": {
        name: "DÍA 3: PESO MUERTO",
        exercises: [
            { 
                order: 1, 
                name: "Peso Muerto Convencional", 
                sets: 5, 
                reps: "5", 
                rest: "180-240s", 
                rpe: "RPE 8-9", 
                notes: "Técnica primero, espalda recta, activación de toda la cadena posterior. Calentar bien antes.", 
                videoUrl: "youtu.be/"
            }
            // Puedes añadir ejercicios accesorios aquí si lo deseas, o dejarlo solo con Peso Muerto.
        ]
    }
};

const exerciseAlternatives = { 
    "Press de Banca con Barra": [{ name: "Press de Banca con Mancuernas" }, { name: "Flexiones con Lastre"}],
    "Press Inclinado con Mancuernas": [{ name: "Press Inclinado con Barra" }, { name: "Flexiones Inclinadas (manos elevadas)" }],
    "Fondos en Paralelas": [{ name: "Press Declinado con Barra" }, { name: "Fondos entre Bancos (Tríceps)" }],
    "Extensiones Tríceps Polea Alta con Cuerda": [{ name: "Press Francés con Barra Z" }, { name: "Extensiones sobre Cabeza con Mancuerna" }],
    "Remo con Barra (Agarre Prono)": [{ name: "Remo con Mancuernas (ambos brazos)" }, { name: "Remo en Punta con Barra T" }],
    "Jalón al Pecho en Polea Alta (Agarre Ancho Prono)": [{ name: "Dominadas (asistidas o libres)"}, {name: "Remo con Barra"}],
    "Curl de Bíceps con Barra Z": [{ name: "Curl de Bíceps con Barra Recta"}, { name: "Curl de Bíceps con Mancuernas"}],
    "Sentadilla Trasera con Barra": [{ name: "Prensa Inclinada" }, { name: "Sentadilla Goblet" }],
    "Peso Muerto Rumano con Mancuernas": [{ name: "Peso Muerto Rumano con Barra" }, { name: "Good Mornings con Barra" }],
    "Prensa Inclinada": [{ name: "Sentadilla Hack" }, { name: "Zancadas con Barra o Mancuernas" }],
    "Curl Femoral Sentado en Máquina": [{ name: "Curl Femoral Tumbado"}, {name: "Peso Muerto Rumano con Mancuernas"}],
    "Elevación de Talones de Pie (en máquina o con peso)": [{ name: "Elevación de Talones Sentado (para sóleo)" }, { name: "Elevación de Talones en Prensa" }],
    "Plancha Abdominal (Plank)": [{ name: "Plancha Lateral" }, { name: "Rueda Abdominal (Ab Wheel Rollout)" }],
    "Peso Muerto Convencional": [{ name: "Peso Muerto Sumo" }, { name: "Hip Thrust con Barra" }]
    // Añade más alternativas según sea necesario para los ejercicios de esta rutina
};

console.log("Datos de la rutina de Iván cargados.");
