document.addEventListener("DOMContentLoaded", function () {
  particlesJS.load("particles-js", "js/particles.json");

  const boton = document.querySelector(".boton");
  const cartaContainer = document.querySelector(".carta-container");
  const musica = document.getElementById("musica");

  boton.addEventListener("click", function () {
    mostrarCarta();
  });
});

function mostrarCarta() {
  document.querySelector(".boton").style.display = "none";

  if (musica) {
    musica.play();
  }

  let cartaContainer = document.querySelector(".carta-container");
  cartaContainer.style.opacity = "1";

  anime({
    targets: ".carta-container",
    scale: [0, 1],
    duration: 1200,
    easing: "easeOutElastic(1, .8)",
    begin: function () {
      document.querySelector(".carta-container").style.display = "flex";
    },
  });

  setTimeout(() => {
    anime({
      targets: ".tapa",
      rotateX: [0, 190],
      duration: 1000,
      easing: "easeInOutQuad",
    });

    anime({
      targets: ".tapa",
      translateX: [-2, 2, -2, 2, 0],
      duration: 400,
      delay: 1000,
      easing: "easeInOutSine",
    });

    anime({
      targets: ".carta",
      translateY: [-100, 0],
      opacity: [0, 1],
      duration: 1200,
      easing: "easeOutBounce",
    });
  }, 1300);
}

function cerrarCarta() {
  // 🎭 Animación de desvanecimiento y bajada de la carta
  anime({
    targets: ".carta-container",
    scale: [1, 0],
    opacity: [1, 0],
    duration: 800,
    easing: "easeInOutExpo",
    complete: function () {
      // Oculta la carta después de la animación
      document.querySelector(".boton").style.display = "block"; // Muestra el botón "Abrir Carta"
    },
  });

  // 🔄 Cerrar la tapa del sobre
  anime({
    targets: ".tapa",
    rotateX: [180, 0],
    duration: 1000,
    easing: "easeInOutExpo",
  });

  // 🎵 Detener la música (opcional)
  const musica = document.getElementById("musica");
  if (musica) {
    musica.pause();
    musica.currentTime = 0; // Reinicia la canción
  }
}
