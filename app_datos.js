bplist00�_WebMainResource�	
_WebResourceMIMEType_WebResourceFrameName^WebResourceURL_WebResourceTextEncodingName_WebResourceDataYtext/htmlP_file:///index.htmlUutf-8O�7<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="Content-Style-Type" content="text/css">
  <title></title>
  <meta name="Generator" content="Cocoa HTML Writer">
  <meta name="CocoaVersion" content="2575.5">
  <style type="text/css">
    p.p1 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Helvetica}
    p.p2 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Helvetica; min-height: 14.0px}
  </style>
</head>
<body>
<p class="p1">// Contenido de app_datos.js</p>
<p class="p2"><br></p>
<p class="p1">// =================================================================================</p>
<p class="p1">// DATOS DE LA RUTINA Y ALTERNATIVAS</p>
<p class="p1">// =================================================================================</p>
<p class="p1">const workoutData = {</p>
<p class="p1"><span class="Apple-converted-space">    </span>"dia1": {</p>
<p class="p1"><span class="Apple-converted-space">        </span>name: "DÍA 1: EMPUJES A",</p>
<p class="p1"><span class="Apple-converted-space">        </span>exercises: [</p>
<p class="p1"><span class="Apple-converted-space">            </span>{ order: 1, name: "Press de Banca con Barra", sets: 4, reps: "6-10", rest: "90-120s", rpe: "RPE 8", notes: "Agarre medio. Codos a 45º, pies en el suelo, retracción escapular.", videoUrl: "https://www.youtube.com/embed/examplevideo2" },</p>
<p class="p1"><span class="Apple-converted-space">            </span>{ order: 2, name: "Press Inclinado con Mancuernas", sets: 3, reps: "8-12", rest: "75s", rpe: "RIR 2", notes: "Ajustar inclinación a 30-45 grados. Rango completo.", videoUrl: "https://www.youtube.com/embed/examplevideo3" },</p>
<p class="p1"><span class="Apple-converted-space">            </span>{</p>
<p class="p1"><span class="Apple-converted-space">                </span>order: 3, isSuperset: true,</p>
<p class="p1"><span class="Apple-converted-space">                </span>items: [</p>
<p class="p1"><span class="Apple-converted-space">                    </span>{ subOrder: 1, name: "Fondos en Paralelas", sets: 3, reps: "Al fallo", rpe: "RPE 9-10", notes: "Inclinar torso para enfocar pecho. Bajar controlado.", videoUrl: "https://www.youtube.com/embed/examplevideo4", isSupersetStart: true, customRestText: "Sin descanso (Pasa al 3.2)" },</p>
<p class="p1"><span class="Apple-converted-space">                    </span>{ subOrder: 2, name: "Extensiones Tríceps Polea Alta con Cuerda", sets: 3, reps: "10-15", rest: "75s", rpe: "RIR 1-2", notes: "Codos pegados al cuerpo, extensión completa.", videoUrl: "youtube.com/embed/" }</p>
<p class="p1"><span class="Apple-converted-space">                </span>]</p>
<p class="p1"><span class="Apple-converted-space">            </span>},</p>
<p class="p1"><span class="Apple-converted-space">            </span>{ order: 4, name: "Elevaciones Laterales con Mancuerna", sets: 3, reps: "12-15", rest: "60s", rpe: "RIR 1", videoUrl: "https://www.youtube.com/embed/SCVAc0p9000", notes: "Controlar el movimiento, sin balanceo." }</p>
<p class="p1"><span class="Apple-converted-space">        </span>]</p>
<p class="p1"><span class="Apple-converted-space">    </span>},</p>
<p class="p1"><span class="Apple-converted-space">    </span>"dia2": {<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">        </span>name: "DÍA 2: TRACCIONES (FUERZA + HIPERTROFIA)",</p>
<p class="p1"><span class="Apple-converted-space">        </span>exercises: [</p>
<p class="p1"><span class="Apple-converted-space">            </span>{<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">                </span>order: 1,<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">                </span>name: "Remo en Barra T con Apoyo en Pecho",<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">                </span>sets: 3,<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">                </span>reps: ["5-6", "5-6", "10-12"],<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">                </span>rest: "120-180s",<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">                </span>rpe: "RPE 8-9",<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">                </span>notes: "Bloque principal de fuerza. Mantener técnica estricta.",<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">                </span>videoUrl: "https://youtube.com/shorts/9Mrjy280xgI?feature=share"<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">            </span>},</p>
<p class="p1"><span class="Apple-converted-space">            </span>{<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">                </span>order: 2,<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">                </span>name: "Curl de Bíceps con Barra Z",<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">                </span>sets: 3,<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">                </span>reps: "10-12",<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">                </span>rest: "60-75s",<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">                </span>rpe: "RIR 1-2",<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">                </span>notes: "Evitar balanceo excesivo.",<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">                </span>videoUrl: "https://www.youtube.com/embed/SCVAc0p9003"<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">            </span>},</p>
<p class="p1"><span class="Apple-converted-space">            </span>{<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">                </span>order: 3,<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">                </span>name: "Jalón al Pecho en Polea Alta (Agarre Ancho Prono)",<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">                </span>sets: 3,<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">                </span>reps: "10-12",<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">                </span>rest: "60-75s",<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">                </span>rpe: "RIR 1-2",<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">                </span>notes: "Llevar la barra al pecho, retracción escapular.",<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">                </span>videoUrl: "https://www.youtube.com/embed/SCVAc0p9001"<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">            </span>},</p>
<p class="p1"><span class="Apple-converted-space">            </span>{<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">                </span>order: 4,<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">                </span>name: "Curl Concentrado con Mancuerna (en banco Scott si es posible)",<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">                </span>sets: 3,<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">                </span>reps: "10-12",<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">                </span>rest: "60s",<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">                </span>rpe: "RIR 1",<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">                </span>notes: "Aislar bien el bíceps, evitar mover el hombro.",<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">                </span>videoUrl: "youtube.com/embed"<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">            </span>},</p>
<p class="p1"><span class="Apple-converted-space">            </span>{<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">                </span>order: 5,<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">                </span>name: "Elevaciones Laterales con Mancuernas",<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">                </span>sets: 3,<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">                </span>reps: "10-12",<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">                </span>rest: "60s",<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">                </span>rpe: "RIR 1",<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">                </span>notes: "Movimiento controlado, sin impulso.",<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">                </span>videoUrl: "https://www.youtube.com/embed/SCVAc0p9000"<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">            </span>},</p>
<p class="p1"><span class="Apple-converted-space">             </span>{<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">                </span>order: 6,<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">                </span>name: "Curl Femoral Sentado en Máquina",<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">                </span>sets: 3,<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">                </span>reps: "10-12",<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">                </span>rest: "60s",<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">                </span>rpe: "RIR 1-2",<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">                </span>notes: "Foco en la contracción del isquio.",<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">                </span>videoUrl: "https://www.youtube.com/embed/examplevideo20"<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">            </span>},</p>
<p class="p1"><span class="Apple-converted-space">            </span>{<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">                </span>order: 7,<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">                </span>isSuperset: true,</p>
<p class="p1"><span class="Apple-converted-space">                </span>isEMOM: true,</p>
<p class="p1"><span class="Apple-converted-space">                </span>emomDetails: {</p>
<p class="p1"><span class="Apple-converted-space">                    </span>totalDurationMinutes: 6,<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">                    </span>roundsPerExercise: 3 <span class="Apple-converted-space">   </span></p>
<p class="p1"><span class="Apple-converted-space">                </span>},</p>
<p class="p1"><span class="Apple-converted-space">                </span>items: [</p>
<p class="p1"><span class="Apple-converted-space">                    </span>{ subOrder: 1, name: "Remo Gorila con Mancuernas o KTB", sets: 3, reps: "8-10 por lado", rpe: "RPE 8", notes: "Mantener espalda recta, core activo.", isEMOMItem: true, videoUrl: "https://www.youtube.com/embed/SCVAc0p9002" },</p>
<p class="p1"><span class="Apple-converted-space">                    </span>{ subOrder: 2, name: "Face Pull con Cuerda en Polea", sets: 3, reps: "12-15", rpe: "RIR 1", notes: "Tirar hacia la cara, codos altos, rotación externa.", isEMOMItem: true, customRestText: "EMOM", videoUrl: "https://www.youtube.com/embed/examplevideo21" }</p>
<p class="p1"><span class="Apple-converted-space">                </span>]</p>
<p class="p1"><span class="Apple-converted-space">            </span>}</p>
<p class="p1"><span class="Apple-converted-space">        </span>]</p>
<p class="p1"><span class="Apple-converted-space">    </span>},</p>
<p class="p1"><span class="Apple-converted-space">    </span>"dia3": {</p>
<p class="p1"><span class="Apple-converted-space">        </span>name: "DÍA 3: FULL BODY (MIXTO)",</p>
<p class="p1"><span class="Apple-converted-space">        </span>exercises: [</p>
<p class="p1"><span class="Apple-converted-space">            </span>{<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">                </span>order: 1,<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">                </span>name: "Sentadilla Trasera con Barra",<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">                </span>sets: 3,<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">                </span>reps: ["12", "10", "8"],<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">                </span>rest: "90s",<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">                </span>rpe: "RPE 7-8",<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">                </span>notes: "Profundidad completa (romper paralela si es posible), espalda recta.",<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">                </span>videoUrl: "https://www.youtube.com/embed/examplevideo22"</p>
<p class="p1"><span class="Apple-converted-space">            </span>},</p>
<p class="p1"><span class="Apple-converted-space">            </span>{</p>
<p class="p1"><span class="Apple-converted-space">                </span>order: 2, isSuperset: true,</p>
<p class="p1"><span class="Apple-converted-space">                </span>items: [</p>
<p class="p1"><span class="Apple-converted-space">                    </span>{<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">                        </span>subOrder: 1,<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">                        </span>name: "Press Inclinado con Mancuernas",<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">                        </span>sets: 3,<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">                        </span>reps: "10",<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">                        </span>rpe: "RIR 2",<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">                        </span>notes: "Banco a 30-45 grados. Controlar la bajada.",<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">                        </span>videoUrl: "https://www.youtube.com/embed/examplevideo3",<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">                        </span>isSupersetStart: true,<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">                        </span>customRestText: "Sin descanso (Pasa al 2.2)"<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">                    </span>},</p>
<p class="p1"><span class="Apple-converted-space">                    </span>{<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">                        </span>subOrder: 2,<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">                        </span>name: "Remo con Barra (Agarre Prono)",<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">                        </span>sets: 3,<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">                        </span>reps: "8",<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">                        </span>rest: "120s",<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">                        </span>rpe: "RPE 8",<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">                        </span>notes: "Inclinar torso a 45º. Tirar la barra hacia el abdomen bajo.",<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">                        </span>videoUrl: "https://www.youtube.com/embed/examplevideo23"<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">                    </span>}</p>
<p class="p1"><span class="Apple-converted-space">                </span>]</p>
<p class="p1"><span class="Apple-converted-space">            </span>},</p>
<p class="p1"><span class="Apple-converted-space">            </span>{</p>
<p class="p1"><span class="Apple-converted-space">                </span>order: 3, isSuperset: true,<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">                </span>items: [</p>
<p class="p1"><span class="Apple-converted-space">                    </span>{<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">                        </span>subOrder: 1,<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">                        </span>name: "Encogimientos Abdominales (Crunches)",<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">                        </span>sets: 3,<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">                        </span>reps: "15",<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">                        </span>rpe: "RIR 1-2",<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">                        </span>notes: "Elevar solo la parte superior de la espalda, sin tirar del cuello.",<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">                        </span>videoUrl: "https://www.youtube.com/embed/examplevideo24",<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">                        </span>isSupersetStart: true,<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">                        </span>customRestText: "Sin descanso (Pasa al 3.2)"<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">                    </span>},</p>
<p class="p1"><span class="Apple-converted-space">                    </span>{<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">                        </span>subOrder: 2,<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">                        </span>name: "Plancha Abdominal (Plank)",<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">                        </span>sets: 3,<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">                        </span>reps: "30-60seg",<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">                        </span>rpe: "Al fallo técnico",<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">                        </span>notes: "Cuerpo recto desde cabeza a talones, abdomen contraído.",<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">                        </span>videoUrl: "googleusercontent.com/youtube.com/14",<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">                        </span>customRestText: "Sin descanso (Pasa al 3.3)"</p>
<p class="p1"><span class="Apple-converted-space">                    </span>},</p>
<p class="p1"><span class="Apple-converted-space">                    </span>{<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">                        </span>subOrder: 3,<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">                        </span>name: "Elevaciones de Piernas Tumbado",<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">                        </span>sets: 3,<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">                        </span>reps: "15",<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">                        </span>rest: "60s",<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">                        </span>rpe: "RIR 1-2",<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">                        </span>notes: "Mantener espalda baja pegada al suelo. Bajar piernas controlado.",<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">                        </span>videoUrl: "https://www.youtube.com/embed/examplevideo26"<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">                    </span>}</p>
<p class="p1"><span class="Apple-converted-space">                </span>]</p>
<p class="p1"><span class="Apple-converted-space">            </span>}</p>
<p class="p1"><span class="Apple-converted-space">        </span>]</p>
<p class="p1"><span class="Apple-converted-space">    </span>},</p>
<p class="p1"><span class="Apple-converted-space">    </span>"dia4": {</p>
<p class="p1"><span class="Apple-converted-space">        </span>name: "DÍA 4: EMPUJES B",</p>
<p class="p1"><span class="Apple-converted-space">        </span>exercises: [</p>
<p class="p1"><span class="Apple-converted-space">            </span>{ order: 1, name: "Press Militar con Barra (de pie)", sets: 4, reps: "6-10", rest: "90-120s", rpe: "RPE 8", notes: "Core apretado.", videoUrl: "https://www.youtube.com/embed/examplevideo27" },</p>
<p class="p1"><span class="Apple-converted-space">            </span>{ order: 2, name: "Press de Banca Inclinado con Barra", sets: 3, reps: "8-10", rest: "75s", rpe: "RIR 2", notes: "Enfoque en pectoral superior.", videoUrl: null }, // Asumiendo que no hay video específico</p>
<p class="p1"><span class="Apple-converted-space">            </span>{</p>
<p class="p1"><span class="Apple-converted-space">                </span>order: 3, isSuperset: true,</p>
<p class="p1"><span class="Apple-converted-space">                </span>items: [</p>
<p class="p1"><span class="Apple-converted-space">                    </span>{ subOrder: 1, name: "Aperturas Planas con Mancuernas", sets: 3, reps: "12-15", rpe: "RIR 1", notes: "Estiramiento controlado.", videoUrl: "https://www.youtube.com/embed/examplevideo29", isSupersetStart: true, customRestText: "Sin descanso (Pasa al 3.2)" },</p>
<p class="p1"><span class="Apple-converted-space">                    </span>{ subOrder: 2, name: "Flexiones (Pies elevados si es posible)", sets: 3, reps: "Al fallo", rest: "75s", rpe: "RPE 9-10", notes: "Mantener cuerpo recto.", videoUrl: "https://www.youtube.com/embed/examplevideo30" }</p>
<p class="p1"><span class="Apple-converted-space">                </span>]</p>
<p class="p1"><span class="Apple-converted-space">            </span>},</p>
<p class="p1"><span class="Apple-converted-space">            </span>{ order: 4, name: "Press Francés con Barra Z", sets: 3, reps: "10-12", rest: "60s", rpe: "RIR 1", notes: "Codos cerrados.", videoUrl: "youtu.be" }</p>
<p class="p1"><span class="Apple-converted-space">        </span>]</p>
<p class="p1"><span class="Apple-converted-space">    </span>},</p>
<p class="p1"><span class="Apple-converted-space">    </span>"dia5": {</p>
<p class="p1"><span class="Apple-converted-space">        </span>name: "DÍA 5: TRACCIONES B",</p>
<p class="p1"><span class="Apple-converted-space">        </span>exercises: [</p>
<p class="p1"><span class="Apple-converted-space">            </span>{ order: 1, name: "Peso Muerto Convencional", sets: 1, reps: "5 (pesado)", rest: "180s", rpe: "RPE 9", notes:"Técnica primero, espalda recta.", videoUrl: "youtu.be/" },</p>
<p class="p1"><span class="Apple-converted-space">             </span>{ order: 2, name: "Remo Pendlay", sets: 4, reps: "6-8", rest: "90s", rpe: "RPE 8", notes: "Explosivo desde el suelo.", videoUrl: "https://www.youtube.com/embed/$" },</p>
<p class="p1"><span class="Apple-converted-space">            </span>{ order: 3, name: "Jalón al Pecho Agarre Supino (Chin-up Grip)", sets: 3, reps: "8-12", rest: "75s", rpe: "RIR 1-2", notes: "Enfocar en dorsales y bíceps.", videoUrl: "youtube.com/watch?v=" },</p>
<p class="p1"><span class="Apple-converted-space">            </span>{ order: 4, name: "Curl Martillo con Mancuernas", sets: 3, reps: "10-12 por lado", rest: "60s", rpe: "RIR 1", notes: "Trabaja braquial.", videoUrl: "https://www.youtube.com/embed/examplevideo31" },</p>
<p class="p1"><span class="Apple-converted-space">            </span>{ order: 5, name: "Encogimientos con Barra (para Trapecios)", sets: 3, reps: "12-15", rest: "60s", rpe: "RIR 1", notes: "Contracción máxima del trapecio.", videoUrl: "https://www.youtube.com/embed/SCVCLChgT5A" }</p>
<p class="p1"><span class="Apple-converted-space">        </span>]</p>
<p class="p1"><span class="Apple-converted-space">    </span>},</p>
<p class="p1"><span class="Apple-converted-space">    </span>"dia6": {</p>
<p class="p1"><span class="Apple-converted-space">        </span>name: "DÍA 6: PIERNA B (Énfasis Cuádriceps)",</p>
<p class="p1"><span class="Apple-converted-space">        </span>exercises: [</p>
<p class="p1"><span class="Apple-converted-space">            </span>{ order: 1, name: "Sentadilla Frontal", sets: 4, reps: "8-10", rest: "120s", rpe: "RPE 8", notes: "Mantener torso erguido.", videoUrl: "https://www.youtube.com/embed/pwenGg9A7aA" },</p>
<p class="p1"><span class="Apple-converted-space">            </span>{ order: 2, name: "Zancadas con Mancuernas", sets: 3, reps: "10-12 por lado", rest: "75s", rpe: "RPE 8", notes: "Paso largo y controlado.", videoUrl: "https://www.youtube.com/embed/MORo1n24MUI" },<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">            </span>{ order: 3, name: "Sentadilla Búlgara con Mancuerna", sets: 3, reps: "10-12 por lado", rest: "60s", rpe: "RIR 1-2", notes: "Equilibrio y profundidad.", videoUrl: "https://www.youtube.com/embed/LegE4f_4_6A" },<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">            </span>{ order: 4, name: "Prensa Horizontal (pies bajos)", sets: 3, reps: "15-20", rest: "75s", rpe: "RIR 0-1", notes: "Enfoque en cuádriceps.", videoUrl: "https://www.youtube.com/embed/examplevideo40" },</p>
<p class="p1"><span class="Apple-converted-space">            </span>{ order: 5, name: "Elevación de Talones de Pie (en máquina o con peso)", sets: 4, reps: "15-20", rest: "45s", rpe: "RIR 0-1", notes: "Rango completo de movimiento.", videoUrl: "https://www.youtube.com/embed/examplevideo41" }</p>
<p class="p1"><span class="Apple-converted-space">        </span>]</p>
<p class="p1"><span class="Apple-converted-space">    </span>}</p>
<p class="p1">};</p>
<p class="p2"><br></p>
<p class="p1">const exerciseAlternatives = {<span class="Apple-converted-space"> </span></p>
<p class="p1"><span class="Apple-converted-space">    </span>"Press de Banca con Barra": [{ name: "Press de Banca con Mancuernas", muscleGroup: "Pecho, Tríceps, Hombro", notes: "Mayor rango de movimiento." }, { name: "Flexiones con Lastre", muscleGroup: "Pecho, Tríceps", notes: "Peso corporal + lastre."}],</p>
<p class="p1"><span class="Apple-converted-space">    </span>"Press Inclinado con Mancuernas": [{ name: "Press Inclinado con Barra", muscleGroup: "Pecho Sup, Hombro" }, { name: "Flexiones Inclinadas (manos elevadas)", muscleGroup: "Pecho Sup, Hombro" }],</p>
<p class="p1"><span class="Apple-converted-space">    </span>"Fondos en Paralelas": [{ name: "Press Declinado con Barra", muscleGroup: "Pecho Inf, Tríceps" }, { name: "Fondos entre Bancos (Tríceps)", muscleGroup: "Tríceps, Pecho" }],</p>
<p class="p1"><span class="Apple-converted-space">    </span>"Extensiones Tríceps Polea Alta con Cuerda": [{ name: "Press Francés con Barra Z", muscleGroup: "Tríceps" }, { name: "Extensiones sobre Cabeza con Mancuerna", muscleGroup: "Tríceps" }],</p>
<p class="p1"><span class="Apple-converted-space">    </span>"Elevaciones Laterales con Mancuerna": [{ name: "Elevaciones Laterales en Polea", muscleGroup: "Hombro Lateral" }, { name: "Upright Row con Barra (agarre ancho)", muscleGroup: "Hombro Lateral, Trapecio" }],</p>
<p class="p1"><span class="Apple-converted-space">    </span>"Remo en Barra T con Apoyo en Pecho": [{ name: "Remo con Mancuerna a un Brazo (con apoyo)", muscleGroup: "Espalda Alta, Dorsales" }, { name: "Remo en Máquina con Apoyo al Pecho", muscleGroup: "Espalda Alta, Dorsales" }],</p>
<p class="p1"><span class="Apple-converted-space">    </span>"Curl de Bíceps con Barra Z": [{ name: "Curl de Bíceps con Barra Recta", muscleGroup: "Bíceps"}, { name: "Curl de Bíceps con Mancuernas (simultáneo o alterno)", muscleGroup: "Bíceps"}],</p>
<p class="p1"><span class="Apple-converted-space">    </span>"Jalón al Pecho en Polea Alta (Agarre Ancho Prono)": [{ name: "Dominadas (asistidas o libres)", muscleGroup: "Dorsales, Bíceps"}, {name: "Remo con Barra", muscleGroup: "Espalda, Bíceps"}],</p>
<p class="p1"><span class="Apple-converted-space">    </span>"Curl Concentrado con Mancuerna (en banco Scott si es posible)": [{ name: "Curl Concentrado con Mancuerna (sentado)", muscleGroup: "Bíceps (pico)"}, {name: "Curl Araña con Mancuernas", muscleGroup: "Bíceps (pico)"}],</p>
<p class="p1"><span class="Apple-converted-space">    </span>"Curl Femoral Sentado en Máquina": [{ name: "Curl Femoral Tumbado", muscleGroup: "Isquiotibiales"}, {name: "Peso Muerto Rumano con Mancuernas", muscleGroup: "Isquiotibiales, Glúteos"}],</p>
<p class="p1"><span class="Apple-converted-space">    </span>"Remo Gorila con Mancuernas o KTB": [{ name: "Remo con Mancuerna a un Brazo (sin apoyo)", muscleGroup: "Espalda Completa, Core"}, {name: "Renegade Row (Remo Renegado)", muscleGroup: "Espalda, Core, Pecho"}],</p>
<p class="p1"><span class="Apple-converted-space">    </span>"Face Pull con Cuerda en Polea": [{ name: "Band Pull-Aparts", muscleGroup: "Hombro Posterior, Trapecio" }, { name: "Pájaros con Mancuernas (Peck Deck Inverso)", muscleGroup: "Hombro Posterior" }],</p>
<p class="p1"><span class="Apple-converted-space">    </span>"Sentadilla Trasera con Barra": [{ name: "Prensa Inclinada", muscleGroup: "Cuádriceps, Glúteos" }, { name: "Sentadilla Goblet", muscleGroup: "Cuádriceps, Glúteos, Core" }],</p>
<p class="p1"><span class="Apple-converted-space">    </span>"Remo con Barra (Agarre Prono)": [{ name: "Remo con Mancuernas (ambos brazos)", muscleGroup: "Espalda Alta, Dorsales" }, { name: "Remo en Punta con Barra T", muscleGroup: "Espalda Media, Dorsales" }],</p>
<p class="p1"><span class="Apple-converted-space">    </span>"Encogimientos Abdominales (Crunches)": [{ name: "Encogimientos en Polea Alta", muscleGroup: "Abdomen Superior" }, { name: "Rueda Abdominal (Ab Wheel Rollout)", muscleGroup: "Core Completo" }],</p>
<p class="p1"><span class="Apple-converted-space">    </span>"Plancha Abdominal (Plank)": [{ name: "Plancha Lateral", muscleGroup: "Core, Oblicuos" }, { name: "Plancha con Elevación de Brazo/Pierna", muscleGroup: "Core (Anti-rotación)" }],</p>
<p class="p1"><span class="Apple-converted-space">    </span>"Elevaciones de Piernas Tumbado": [{ name: "Elevaciones de Piernas Colgado (Hanging Leg Raises)", muscleGroup: "Abdomen Inferior, Flexores Cadera" }, { name: "Encogimientos Inversos (Reverse Crunches)", muscleGroup: "Abdomen Inferior" }],</p>
<p class="p1"><span class="Apple-converted-space">    </span>"Press Militar con Barra (de pie)": [{ name: "Press de Hombro con Mancuernas (sentado o de pie)", muscleGroup: "Hombro, Tríceps" }, { name: "Push Press con Barra", muscleGroup: "Hombro, Tríceps (con impulso de piernas)" }],</p>
<p class="p1"><span class="Apple-converted-space">    </span>"Press de Banca Inclinado con Barra": [{ name: "Press Inclinado en Máquina Smith", muscleGroup: "Pecho Sup, Hombro" }, { name: "Press Inclinado con Mancuernas", muscleGroup: "Pecho Sup, Hombro" }],</p>
<p class="p1"><span class="Apple-converted-space">    </span>"Aperturas Planas con Mancuernas": [{ name: "Aperturas en Máquina Peck Deck", muscleGroup: "Pecho" }, { name: "Cruce de Poleas (de abajo a arriba)", muscleGroup: "Pecho (énfasis superior)" }],</p>
<p class="p1"><span class="Apple-converted-space">    </span>"Flexiones (Pies elevados si es posible)": [{ name: "Flexiones Planas", muscleGroup: "Pecho, Tríceps" }, { name: "Press de Banca con Agarre Cerrado", muscleGroup: "Tríceps, Pecho" }],</p>
<p class="p1"><span class="Apple-converted-space">    </span>"Press Francés con Barra Z": [{ name: "Extensiones de Tríceps sobre Cabeza con Mancuerna (a dos manos)", muscleGroup: "Tríceps" }, { name: "Patada de Tríceps con Mancuerna", muscleGroup: "Tríceps" }],</p>
<p class="p1"><span class="Apple-converted-space">    </span>"Peso Muerto Convencional": [{ name: "Peso Muerto Sumo", muscleGroup: "Piernas, Glúteos, Espalda" }, { name: "Hip Thrust con Barra", muscleGroup: "Glúteos, Isquiotibiales" }],</p>
<p class="p1"><span class="Apple-converted-space">    </span>"Remo Pendlay": [{ name: "Remo con Barra (tradicional, inclinado)", muscleGroup: "Espalda Alta, Dorsal" }, { name: "Seal Row (Remo en banco prono)", muscleGroup: "Espalda Alta" }],</p>
<p class="p1"><span class="Apple-converted-space">    </span>"Jalón al Pecho Agarre Supino (Chin-up Grip)": [{ name: "Dominadas Agarre Supino (Chin-ups)", muscleGroup: "Dorsal, Bíceps" }, { name: "Remo Invertido Agarre Supino", muscleGroup: "Dorsal, Bíceps" }],</p>
<p class="p1"><span class="Apple-converted-space">    </span>"Curl Martillo con Mancuernas": [{ name: "Curl de Bíceps Inverso con Barra", muscleGroup: "Braquial, Antebrazo" }, { name: "Curl Zottman", muscleGroup: "Bíceps, Braquial, Antebrazo" }],</p>
<p class="p1"><span class="Apple-converted-space">    </span>"Encogimientos con Barra (para Trapecios)": [{ name: "Encogimientos con Mancuernas", muscleGroup: "Trapecio" }, { name: "Farmer's Walk (Paseo del Granjero)", muscleGroup: "Trapecio, Agarre, Core" }],</p>
<p class="p1"><span class="Apple-converted-space">    </span>"Sentadilla Frontal": [{ name: "Sentadilla Zercher", muscleGroup: "Cuádriceps, Core, Espalda Alta" }, { name: "Sentadilla Goblet (profunda)", muscleGroup: "Cuádriceps, Glúteos" }],</p>
<p class="p1"><span class="Apple-converted-space">    </span>"Zancadas con Mancuernas": [{ name: "Zancadas con Barra", muscleGroup: "Cuádriceps, Glúteos" }, { name: "Prensa a una Pierna", muscleGroup: "Cuádriceps, Glúteos" }],</p>
<p class="p1"><span class="Apple-converted-space">    </span>"Sentadilla Búlgara con Mancuerna": [{ name: "Sentadilla Búlgara con Barra", muscleGroup: "Cuádriceps, Glúteos" }, { name: "Zancadas Inversas", muscleGroup: "Glúteos, Cuádriceps" }],</p>
<p class="p1"><span class="Apple-converted-space">    </span>"Prensa Horizontal (pies bajos)": [{ name: "Extensiones de Cuádriceps (con pausa)", muscleGroup: "Cuádriceps" }, { name: "Sentadilla Hack (pies bajos)", muscleGroup: "Cuádriceps" }],</p>
<p class="p1"><span class="Apple-converted-space">    </span>"Elevación de Talones de Pie (en máquina o con peso)": [{ name: "Elevación de Talones Sentado (para sóleo)", muscleGroup: "Sóleo" }, { name: "Elevación de Talones en Prensa", muscleGroup: "Gemelos" }]</p>
<p class="p1">};</p>
<p class="p1">// =================================================================================</p>
<p class="p1">// FIN DE DATOS DE LA RUTINA Y ALTERNATIVAS</p>
<p class="p1">// =================================================================================</p>
<p class="p1">console.log("Datos de entrenamiento y alternativas definidos en app_datos.js");</p>
</body>
</html>
    ( > U d � � � � � �                           ��