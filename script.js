// script.js - minimal helper (mobile menu stub / small UX)
document.addEventListener('DOMContentLoaded', function(){
  // simple enhancement: focus first required field when on formulario page
  if (location.pathname.includes('formulario')) {
    const f = document.querySelector('form');
    if (f) {
      const first = f.querySelector('[required]');
      if (first) first.focus();
    }
  }
});
