// Run before paint; CSS handles the system preference without a JS listener.
export const themeBootstrap = `(function(){try{var t=localStorage.getItem('portfolio-theme');if(t==='light'||t==='dark'||t==='system')document.documentElement.dataset.theme=t;}catch(e){}})();`;
