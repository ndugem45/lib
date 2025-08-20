document.addEventListener('DOMContentLoaded', ()=>{
  let acc = document.querySelectorAll("[data-accordion='head']");
  let body = document.querySelectorAll("[data-accordion='body']");
  let i;
  
  body.forEach((elem, i)=>{
    elem.style.maxHeight = null;
  })
  
  acc.forEach((elem, i)=>{
    elem[i].addEventListener("click", function() {
      this.classList.toggle("active");
      let panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  })
}, false);
