(function(){var h=document.documentElement,b=document.getElementById('theme-btn');if(!b)return;
function lbl(){b.lastChild.textContent=h.classList.contains('light')?'DARK':'LIGHT';}lbl();
b.onclick=function(){var on=h.classList.toggle('light');try{localStorage.setItem('theme',on?'light':'dark');}catch(e){}lbl();};})();
