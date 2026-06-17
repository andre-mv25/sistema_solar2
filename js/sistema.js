(function(){
  var base = window.location.pathname.includes('/planetas/') ? '../' : '';
  var sist=document.getElementById('sistema');
  if(!sist)return;
  var radios=[36,52,68,86,110,138,168,200];
  radios.forEach(function(r){var o=document.createElement('div');o.className='orbita';o.style.width=r*2+'px';o.style.height=r*2+'px';sist.appendChild(o)});

  var solEl=document.createElement('a');solEl.className='sol-sistema';solEl.href=base+'sol.html';sist.appendChild(solEl);
  var solL=document.createElement('div');solL.className='sol-label';solL.textContent='Sol';sist.appendChild(solL);

  var orbitas=[8,12,16,20,26,32,38,44];
  planetas.forEach(function(p,i){
    var o=document.createElement('div');o.className='p-orbita';
    o.style.setProperty('--o',(20+i*10)+'s');o.style.setProperty('--r',orbitas[i]+'px');
    var b=document.createElement('a');b.className='p-bola';b.href=base+'planetas/'+p.slug+'.html';
    b.style.width=(p.tam-6)+'px';b.style.height=(p.tam-6)+'px';
    b.style.background=p.grad;b.style.boxShadow='0 0 12px '+p.color+'33';
    if(p.anill){var an=document.createElement('div');an.className='anillo';b.appendChild(an)}
    o.appendChild(b);sist.appendChild(o);
  });

  var grid=document.getElementById('cardsGrid');
  if(grid){
    planetas.forEach(function(p){
      var c=document.createElement('a');c.className='card';c.href=base+'planetas/'+p.slug+'.html';
      var b=document.createElement('div');b.className='card-bola'+(p.anill?' anillado':'');
      b.style.background=p.grad;b.style.boxShadow='0 0 10px '+p.color+'33';
      var n=document.createElement('div');n.className='card-nombre';n.textContent=p.nombre;
      var s=document.createElement('div');s.className='card-sub';s.textContent=p.tipo;
      c.appendChild(b);c.appendChild(n);c.appendChild(s);grid.appendChild(c);
    });
  }

  var drop=document.getElementById('dropPlanetas');
  if(drop){
    planetas.forEach(function(p){
      var li=document.createElement('li');
      var a=document.createElement('a');a.href=base+'planetas/'+p.slug+'.html';
      var d=document.createElement('span');d.className='nav-dot';d.style.background=p.color;
      a.appendChild(d);a.appendChild(document.createTextNode(p.nombre));li.appendChild(a);drop.appendChild(li);
    });
  }

  var act=document.querySelector('.nav-links a.act');
  if(!act) document.getElementById('navInicio').classList.add('act');
})();
