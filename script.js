// DATA DE INÍCIO DO NAMORO: 23 de Novembro de 2025
const startDate = new Date(2025, 10, 23, 0, 0, 0); // Mês 10 = Novembro no JS

// 1. Botão da tela inicial
const revealBtn = document.getElementById("reveal-btn");
const introScreen = document.getElementById("intro-screen");
const mainContent = document.getElementById("main-content");

revealBtn.addEventListener("click", () => {
  introScreen.classList.add("fade-out");
  mainContent.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// 2. Atualizar contador em tempo real
function updateCounter() {
  const now = new Date();

  // Cálculo exato de Anos, Meses e Dias
  let years = now.getFullYear() - startDate.getFullYear();
  let months = now.getMonth() - startDate.getMonth();
  let days = now.getDate() - startDate.getDate();

  if (days < 0) {
    months--;
    const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    days += prevMonth.getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  // Horas, minutos e segundos atuais
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  // Total de dias corridos
  const diffTime = Math.max(0, now - startDate);
  const totalDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  // Atualiza na tela
  document.getElementById("years").textContent = years;
  document.getElementById("years-label").textContent = years === 1 ? "ANO" : "ANOS";

  document.getElementById("months").textContent = months;
  document.getElementById("months-label").textContent = months === 1 ? "MÊS" : "MESES";

  document.getElementById("days").textContent = days;
  document.getElementById("days-label").textContent = days === 1 ? "DIA" : "DIAS";

  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
  document.getElementById("total-days").textContent = totalDays;
}

setInterval(updateCounter, 1000);
updateCounter();

// 3. Revelar música do Spotify
const discoverMusicBtn = document.getElementById("discover-music-btn");
const musicCover = document.getElementById("music-cover");
const spotifyBox = document.getElementById("spotify-box");

discoverMusicBtn.addEventListener("click", () => {
  musicCover.classList.add("hidden");
  spotifyBox.classList.remove("hidden");
});

// 4. Carrossel de fotos ("Nossos Momentos")
const slides = [
  { img: "foto1.jpg", caption: '"O começo da nossa história"' },
  { img: "foto2.jpg", caption: '"Meu lugar favorito no mundo"' },
  { img: "foto3.jpg", caption: '"Minha melhor dupla ❤️"' },
  { img: "foto4.jpg", caption: '"365 dias ao seu lado"' }
];

let currentSlide = 0;
const carouselImg = document.getElementById("carousel-img");
const carouselCaption = document.getElementById("carousel-caption");
const slideCounter = document.getElementById("slide-counter");
const thumbs = document.querySelectorAll(".thumb");

function showSlide(index) {
  currentSlide = (index + slides.length) % slides.length;
  
  if (carouselImg) {
    carouselImg.src = slides[currentSlide].img;
    carouselImg.style.width = "100%";
    carouselImg.style.height = "100%";
    carouselImg.style.objectFit = "contain";
  }

  if (carouselCaption) {
    carouselCaption.textContent = slides[currentSlide].caption;
  }

  if (slideCounter) {
    slideCounter.textContent = `${currentSlide + 1} / ${slides.length}`;
  }

  thumbs.forEach((t, i) => {
    t.classList.toggle("active", i === currentSlide);
  });
}

const prevBtn = document.getElementById("prev-slide");
const nextBtn = document.getElementById("next-slide");

if (prevBtn) {
  prevBtn.addEventListener("click", () => showSlide(currentSlide - 1));
}

if (nextBtn) {
  nextBtn.addEventListener("click", () => showSlide(currentSlide + 1));
}

thumbs.forEach((thumb, index) => {
  thumb.addEventListener("click", () => showSlide(index));
});


// 5. Corações flutuando no fundo
const bgHearts = document.getElementById("bgHearts");
for (let i = 0; i < 16; i++) {
  const heart = document.createElement("span");
  heart.className = "floating-heart";
  heart.textContent = "♥";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (Math.random() * 14 + 10) + "px";
  heart.style.animationDuration = (Math.random() * 10 + 10) + "s";
  heart.style.animationDelay = (Math.random() * 8) + "s";
  bgHearts.appendChild(heart);
}
