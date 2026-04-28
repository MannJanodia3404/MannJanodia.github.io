/* ============================================================
   background.js — Floating robotics icons on canvas
   ============================================================ */

(function () {
  const cv = document.getElementById('bg');
  const cx = cv.getContext('2d');

  function resize() { cv.width = innerWidth; cv.height = innerHeight; }
  resize();
  window.addEventListener('resize', resize);

  /* Each function draws one icon type at (x, y) with scale s */
  const draws = [
    /* Robotic arm */
    (c,x,y,s)=>{c.strokeStyle='rgba(0,217,255,.52)';c.lineWidth=2;c.strokeRect(x-s*.3,y+s*.34,s*.6,s*.14);c.beginPath();c.moveTo(x,y+s*.34);c.lineTo(x-s*.18,y);c.stroke();c.beginPath();c.arc(x-s*.18,y,s*.07,0,Math.PI*2);c.stroke();c.beginPath();c.moveTo(x-s*.18,y);c.lineTo(x+s*.22,y-s*.28);c.stroke();c.beginPath();c.arc(x+s*.22,y-s*.28,s*.07,0,Math.PI*2);c.stroke();c.beginPath();c.moveTo(x+s*.22,y-s*.28);c.lineTo(x+s*.22,y-s*.44);c.moveTo(x+s*.16,y-s*.44);c.lineTo(x+s*.16,y-s*.54);c.moveTo(x+s*.28,y-s*.44);c.lineTo(x+s*.28,y-s*.54);c.stroke();},
    /* Robotic hand */
    (c,x,y,s)=>{c.strokeStyle='rgba(112,0,255,.52)';c.lineWidth=2;c.strokeRect(x-s*.22,y-s*.12,s*.44,s*.32);[[x-s*.16,y-s*.12,x-s*.22,y-s*.38],[x,y-s*.12,x,y-s*.44],[x+s*.16,y-s*.12,x+s*.12,y-s*.38]].forEach(([a,b,d,e])=>{c.beginPath();c.moveTo(a,b);c.lineTo(d,e);c.stroke();});c.fillStyle='rgba(112,0,255,.55)';[[x-s*.16,y-s*.25],[x,y-s*.28],[x+s*.16,y-s*.25]].forEach(([a,b])=>{c.beginPath();c.arc(a,b,2.5,0,Math.PI*2);c.fill();});},
    /* Rover */
    (c,x,y,s)=>{c.strokeStyle='rgba(0,217,255,.52)';c.lineWidth=2;c.strokeRect(x-s*.38,y-s*.18,s*.76,s*.28);c.strokeRect(x-s*.22,y-s*.32,s*.44,s*.14);c.beginPath();c.moveTo(x,y-s*.32);c.lineTo(x,y-s*.48);c.stroke();c.strokeRect(x-s*.1,y-s*.54,s*.2,s*.08);c.fillStyle='rgba(0,217,255,.7)';c.beginPath();c.arc(x,y-s*.5,2.5,0,Math.PI*2);c.fill();[x-s*.32,x,x+s*.32].forEach(wx=>{c.beginPath();c.arc(wx,y+s*.12,s*.1,0,Math.PI*2);c.stroke();});},
    /* Drone */
    (c,x,y,s)=>{c.strokeStyle='rgba(255,0,110,.52)';c.lineWidth=2;c.strokeRect(x-s*.16,y-s*.09,s*.32,s*.18);[[x-s*.16,y-s*.09,x-s*.36,y-s*.28],[x+s*.16,y-s*.09,x+s*.36,y-s*.28],[x-s*.16,y+s*.09,x-s*.36,y+s*.28],[x+s*.16,y+s*.09,x+s*.36,y+s*.28]].forEach(([a,b,d,e])=>{c.beginPath();c.moveTo(a,b);c.lineTo(d,e);c.stroke();});c.strokeStyle='rgba(255,0,110,.38)';[[x-s*.36,y-s*.28],[x+s*.36,y-s*.28],[x-s*.36,y+s*.28],[x+s*.36,y+s*.28]].forEach(([px,py])=>{c.beginPath();c.ellipse(px,py,s*.14,s*.034,0,0,Math.PI*2);c.stroke();});c.fillStyle='rgba(255,0,110,.7)';c.beginPath();c.arc(x,y,3.5,0,Math.PI*2);c.fill();},
    /* Robot head */
    (c,x,y,s)=>{c.strokeStyle='rgba(0,217,255,.52)';c.lineWidth=2;c.strokeRect(x-s*.32,y-s*.32,s*.64,s*.54);c.fillStyle='rgba(0,217,255,.32)';c.fillRect(x-s*.26,y-s*.17,s*.52,s*.12);c.strokeRect(x-s*.26,y-s*.17,s*.52,s*.12);c.fillStyle='rgba(0,217,255,.88)';c.beginPath();c.arc(x-s*.12,y-s*.11,3.5,0,Math.PI*2);c.fill();c.beginPath();c.arc(x+s*.12,y-s*.11,3.5,0,Math.PI*2);c.fill();c.beginPath();c.moveTo(x-s*.16,y+s*.04);c.lineTo(x+s*.16,y+s*.04);c.moveTo(x-s*.16,y+s*.1);c.lineTo(x+s*.16,y+s*.1);c.stroke();c.beginPath();c.moveTo(x-s*.1,y-s*.32);c.lineTo(x-s*.15,y-s*.48);c.moveTo(x+s*.1,y-s*.32);c.lineTo(x+s*.15,y-s*.48);c.stroke();c.fillStyle='rgba(0,217,255,.85)';c.beginPath();c.arc(x-s*.15,y-s*.48,3,0,Math.PI*2);c.fill();c.beginPath();c.arc(x+s*.15,y-s*.48,3,0,Math.PI*2);c.fill();},
    /* Gear */
    (c,x,y,s)=>{c.strokeStyle='rgba(112,0,255,.52)';c.lineWidth=2;const t=8;c.beginPath();for(let i=0;i<t*2;i++){const a=(i*Math.PI)/t,r=i%2===0?s*.48:s*.36;i===0?c.moveTo(x+Math.cos(a)*r,y+Math.sin(a)*r):c.lineTo(x+Math.cos(a)*r,y+Math.sin(a)*r);}c.closePath();c.stroke();c.beginPath();c.arc(x,y,s*.18,0,Math.PI*2);c.stroke();},
    /* Humanoid */
    (c,x,y,s)=>{c.strokeStyle='rgba(0,217,255,.48)';c.lineWidth=2;c.strokeRect(x-s*.16,y-s*.52,s*.32,s*.22);c.strokeRect(x-s*.22,y-s*.3,s*.44,s*.38);c.strokeRect(x-s*.38,y-s*.28,s*.13,s*.32);c.strokeRect(x+s*.25,y-s*.28,s*.13,s*.32);c.strokeRect(x-s*.16,y+s*.08,s*.13,s*.38);c.strokeRect(x+s*.03,y+s*.08,s*.13,s*.38);c.fillStyle='rgba(0,217,255,.82)';c.beginPath();c.arc(x,y-s*.18,3.5,0,Math.PI*2);c.fill();}
  ];

  const icons = Array.from({ length: 14 }, () => ({
    x:  Math.random() * innerWidth,
    y:  Math.random() * innerHeight,
    vx: (Math.random() - .5) * .17,
    vy: (Math.random() - .5) * .17,
    s:  55 + Math.random() * 35,
    r:  Math.random() * Math.PI * 2,
    rs: (Math.random() - .5) * .006,
    t:  Math.floor(Math.random() * draws.length),
    a:  .42 + Math.random() * .32
  }));

  (function loop() {
    cx.clearRect(0, 0, cv.width, cv.height);
    icons.forEach(ic => {
      ic.x += ic.vx; ic.y += ic.vy; ic.r += ic.rs;
      if (ic.x < -90) ic.x = cv.width  + 90;
      if (ic.x > cv.width  + 90) ic.x = -90;
      if (ic.y < -90) ic.y = cv.height + 90;
      if (ic.y > cv.height + 90) ic.y = -90;
      cx.save(); cx.translate(ic.x, ic.y); cx.rotate(ic.r);
      cx.globalAlpha = ic.a;
      draws[ic.t](cx, 0, 0, ic.s);
      cx.restore();
    });
    requestAnimationFrame(loop);
  })();
})();
