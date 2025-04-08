document.addEventListener("DOMContentLoaded", function () {
  const slider = document.getElementById('slider');
  const btnLeft = document.querySelector('.seta.esquerda');
  const btnRight = document.querySelector('.seta.direita');
  const scrollAmount = 300;

  let autoScroll;

  function scrollRight() {
    if (slider.scrollLeft + slider.offsetWidth >= slider.scrollWidth - 1) {
      slider.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  }

  function scrollLeft() {
    slider.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  }

  function startAutoScroll() {
    autoScroll = setInterval(scrollRight, 3000);
  }

  function stopAutoScroll() {
    clearInterval(autoScroll);
  }

  // Eventos das setas
  btnLeft.addEventListener("click", () => {
    stopAutoScroll();
    scrollLeft();
    startAutoScroll();
  });

  btnRight.addEventListener("click", () => {
    stopAutoScroll();
    scrollRight();
    startAutoScroll();
  });

  // Parar o auto scroll ao passar o mouse
  slider.addEventListener("mouseenter", stopAutoScroll);
  slider.addEventListener("mouseleave", startAutoScroll);

  // Iniciar o carrossel automaticamente
  startAutoScroll();
});

document.addEventListener("DOMContentLoaded", function () {
  const slider = document.getElementById("slider");
  const btnLeft = document.querySelector(".seta.esquerda");
  const btnRight = document.querySelector(".seta.direita");
  const scrollAmount = 300;
  let autoScroll;

  // DUPLICA OS ITENS PARA LOOP INFINITO
  const produtos = slider.innerHTML;
  slider.innerHTML += produtos;

  function scrollRight() {
    if (slider.scrollLeft >= slider.scrollWidth / 2) {
      slider.scrollLeft = 0;
    }
    slider.scrollBy({ left: scrollAmount, behavior: "smooth" });
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

  btnLeft.addEventListener("click", () => {
    stopAutoScroll();
    scrollLeft();
    startAutoScroll();
  });

  btnRight.addEventListener("click", () => {
    stopAutoScroll();
    scrollRight();
    startAutoScroll();
  });

  slider.addEventListener("mouseenter", stopAutoScroll);
  slider.addEventListener("mouseleave", startAutoScroll);

  startAutoScroll();
});
