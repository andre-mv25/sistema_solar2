const planetas = [
  {nombre:'Mercurio',slug:'mercurio',tipo:'Rocoso',radio:'2,440 km',distancia:'57.9 millones km',periodo:'88 días',lunas:0,gravedad:'3.7 m/s²',info:'El planeta más pequeño y cercano al Sol. Sin atmósfera significativa, temperaturas de -180°C a 430°C.',color:'#b5b5b5',grad:'radial-gradient(circle at 35% 35%,#d4d4d4,#8a8a8a 40%,#5a5a5a 80%)',tam:24,orb:8,anill:false},
  {nombre:'Venus',slug:'venus',tipo:'Rocoso',radio:'6,052 km',distancia:'108.2 millones km',periodo:'225 días',lunas:0,gravedad:'8.87 m/s²',info:'El planeta más caliente (465°C) por efecto invernadero descontrolado. Gira en sentido contrario al resto.',color:'#e8cda0',grad:'radial-gradient(circle at 35% 35%,#f5e6c8,#d4a85c 40%,#b8873a 80%)',tam:32,orb:12,anill:false},
  {nombre:'Tierra',slug:'tierra',tipo:'Rocoso',radio:'6,371 km',distancia:'149.6 millones km',periodo:'365.25 días',lunas:1,gravedad:'9.81 m/s²',info:'Único planeta con vida conocida. Agua líquida, atmósfera rica en nitrógeno y oxígeno, campo magnético protector.',color:'#4b9cd3',grad:'radial-gradient(circle at 35% 35%,#6db8e8,#2d7ab5 35%,#1a5276 70%,#0d2f47)',tam:34,orb:16,anill:false},
  {nombre:'Marte',slug:'marte',tipo:'Rocoso',radio:'3,390 km',distancia:'227.9 millones km',periodo:'687 días',lunas:2,gravedad:'3.72 m/s²',info:'El planeta rojo. Tiene el volcán más grande (Monte Olimpo, 21.9 km) y evidencias de agua pasada.',color:'#c1440e',grad:'radial-gradient(circle at 35% 35%,#e87540,#c1440e 35%,#8a2e08 70%,#5a1a04)',tam:28,orb:20,anill:false},
  {nombre:'Júpiter',slug:'jupiter',tipo:'Gaseoso',radio:'69,911 km',distancia:'778.5 millones km',periodo:'11.86 años',lunas:95,gravedad:'24.79 m/s²',info:'El planeta más grande. Su Gran Mancha Roja es una tormenta mayor que la Tierra que dura siglos.',color:'#d4a574',grad:'radial-gradient(circle at 35% 35%,#f0d5b0,#d4a574 30%,#b8865a 55%,#8b6340 80%),repeating-linear-gradient(0deg,transparent,transparent 8px,rgba(255,255,255,.05)8px,rgba(255,255,255,.05)10px)',tam:52,orb:26,anill:false},
  {nombre:'Saturno',slug:'saturno',tipo:'Gaseoso',radio:'58,232 km',distancia:'1,434 millones km',periodo:'29.46 años',lunas:146,gravedad:'10.44 m/s²',info:'Famoso por sus anillos de hielo y roca. Es el menos denso: flotaría en agua.',color:'#ead6b8',grad:'radial-gradient(circle at 35% 35%,#f0e4d0,#d4c4a0 35%,#b8a880 70%)',tam:46,orb:32,anill:true},
  {nombre:'Urano',slug:'urano',tipo:'Helado',radio:'25,362 km',distancia:'2,871 millones km',periodo:'84 años',lunas:27,gravedad:'8.87 m/s²',info:'Gira inclinado 98°, "rodando" alrededor del Sol. Color azul verdoso por metano en su atmósfera.',color:'#7ec8e3',grad:'radial-gradient(circle at 35% 35%,#a8e0f0,#5cb0cc 35%,#3a8aa8 70%)',tam:36,orb:38,anill:false},
  {nombre:'Neptuno',slug:'neptuno',tipo:'Helado',radio:'24,622 km',distancia:'4,495 millones km',periodo:'164.8 años',lunas:16,gravedad:'11.15 m/s²',info:'El más ventoso: vientos de 2,100 km/h. Descubierto por cálculos matemáticos antes de ser observado.',color:'#3b5c9a',grad:'radial-gradient(circle at 35% 35%,#5a8cc8,#2a4a8a 35%,#1a2e5a 70%)',tam:34,orb:44,anill:false}
];
const sol = {nombre:'Sol',slug:'sol',tipo:'Estrella enana amarilla G2V',radio:'696,340 km',masa:'1.989 × 10³⁰ kg',temperatura:'5,505 °C',edad:'4,600 millones años',distanciaTierra:'149.6 millones km',info:'El Sol contiene el 99.8% de la masa del sistema solar. Su energía se produce mediante fusión nuclear, convirtiendo hidrógeno en helio a 15 millones °C en su núcleo.',color:'#f9d423',grad:'radial-gradient(circle at 35% 35%,#fff7a0,#f9d423 30%,#e8930a 70%,#c07200)'};
(function(){
  try {
    var custom = JSON.parse(localStorage.getItem('sistemaSolarCustomPlanets')) || [];
    custom.forEach(function(cp){
      planetas.push(cp);
    });
  } catch(e) {}
})();
