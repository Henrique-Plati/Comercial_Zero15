
document.addEventListener("DOMContentLoaded", function () {
    const slider = document.getElementById("slider");
    const scrollAmount = 300;
    let autoScroll;
  
    // DUPLICA os produtos para criar efeito de loop infinito
    slider.innerHTML += slider.innerHTML;
  
    // Corrige o scroll se passar do limite
    function checkScrollPosition() {
      if (slider.scrollLeft >= slider.scrollWidth / 2) {
        slider.scrollLeft = 0;
      }
    }
  
    function scrollRight() {
      slider.scrollBy({ left: scrollAmount, behavior: "smooth" });
      setTimeout(checkScrollPosition, 500);
    }
  
    function scrollLeft() {
      if (slider.scrollLeft <= 0) {
        slider.scrollLeft = slider.scrollWidth / 2;
      }
      slider.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  
    function startAutoScroll() {
      autoScroll = setInterval(scrollRight, 4000);
    }
  
    function stopAutoScroll() {
      clearInterval(autoScroll);
    }
  
    slider.addEventListener("mouseenter", stopAutoScroll);
    slider.addEventListener("mouseleave", startAutoScroll);
  
    startAutoScroll();
  });
  
  
  document.addEventListener("DOMContentLoaded", function () {
    const sliders = document.querySelectorAll(".slider");
  
    sliders.forEach(slider => {
      const images = slider.querySelectorAll("img");
      let index = 0;
  
      function showSlide(i) {
        images.forEach((img, idx) => {
          img.classList.toggle("active", idx === i);
        });
      }
  
      showSlide(index);
  
      setInterval(() => {
        index = (index + 1) % images.length;
        showSlide(index);
      }, 4000); // troca a cada 4 segundos
    });
  });
  const toggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('nav');
  const produtosToggle = document.getElementById('toggle-produtos');
  const submenu = produtosToggle.nextElementSibling;

  // Toggle do menu principal
  toggle.addEventListener('click', () => {
    nav.classList.toggle('active');
  
    const icon = toggle.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-x');
  });
  

  // Toggle do submenu Produtos
  produtosToggle.addEventListener('click', (e) => {
    e.preventDefault(); // Impede o comportamento padrão do link
    submenu.classList.toggle('show-submenu');
  });

 
