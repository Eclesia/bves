(function(){var r=document.documentElement,b=document.getElementById('theme-toggle');if(!b)return;
function set(d){r.setAttribute('data-theme',d?'dark':'light');b.setAttribute('aria-checked',d?'true':'false');}
set(r.getAttribute('data-theme')==='dark');
b.addEventListener('click',function(){var d=r.getAttribute('data-theme')!=='dark';set(d);try{localStorage.setItem('theme',d?'dark':'light')}catch(e){}});})();
