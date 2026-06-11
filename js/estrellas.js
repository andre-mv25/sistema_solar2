(function(){
  var c=document.getElementById('stars');
  if(!c)return;
  for(var i=0;i<140;i++){
    var s=document.createElement('div');s.className='star';
    var sz=Math.random()*2.5+1;
    s.style.width=sz+'px';s.style.height=sz+'px';
    s.style.left=Math.random()*100+'%';s.style.top=Math.random()*100+'%';
    s.style.setProperty('--d',(Math.random()*3+2)+'s');
    s.style.animationDelay=Math.random()*5+'s';
    c.appendChild(s);
  }
})();
