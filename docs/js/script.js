const confetiBox = document.getElementById("confeti");
const aplausos = document.getElementById("aplausos");
const btn = document.getElementById("revivir");

/* CREAR CONFETI */
function crearConfeti(cantidad = 220) {
  confetiBox.innerHTML = "";
  for (let i = 0; i < cantidad; i++) {
    const c = document.createElement("div");
    c.className = "conf";
    c.style.left = Math.random() * 100 + "%";
    c.style.animationDuration = 6 + Math.random() * 8 + "s";
    c.style.animationDelay = Math.random() * 2 + "s";
    confetiBox.appendChild(c);
  }
}

/* CELEBRACIÓN */
function celebrar() {
  crearConfeti(260);
  if (aplausos) {
    aplausos.currentTime = 0;
    aplausos.play().catch(() => {});
  }
}

celebrar();
btn.addEventListener("click", celebrar);

/* INTERACCIÓN CON DEDO / MOUSE */
document.addEventListener("mousemove", mover);
document.addEventListener("touchmove", e => mover(e.touches[0]));

function mover(e) {
  const x = (e.clientX / window.innerWidth - 0.5) * 40;
  const y = (e.clientY / window.innerHeight - 0.5) * 40;

  // Confeti flota
  document.querySelectorAll(".conf").forEach(c => {
    c.style.transform = `translate(${x}px, ${y}px)`;
  });

  // Serpentinas se balancean
  document.querySelectorAll(".serpentinas span").forEach((s, i) => {
    const factor = (i + 1) * 0.6;
    s.style.transform = `rotate(${x * factor}deg) translateY(${y}px)`;
  });
}

