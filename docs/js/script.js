const confetiBox = document.getElementById("confeti");
const aplausos = document.getElementById("aplausos");
const btn = document.getElementById("revivir");

function crearConfeti(cantidad = 150) {
  confetiBox.innerHTML = "";
  for (let i = 0; i < cantidad; i++) {
    const c = document.createElement("div");
    c.className = "conf";
    c.style.left = Math.random() * 100 + "%";
    c.style.animation = `caer ${6 + Math.random() * 6}s linear infinite`;
    c.style.animationDelay = Math.random() * 2 + "s";
    confetiBox.appendChild(c);
  }
}

function celebrar() {
  crearConfeti(200);
  aplausos.currentTime = 0;
  aplausos.play();
}

celebrar();

btn.onclick = celebrar;

/* INTERACCIÓN CON DEDO / MOUSE */
document.addEventListener("mousemove", mover);
document.addEventListener("touchmove", e => mover(e.touches[0]));

function mover(e) {
  document.querySelectorAll(".conf").forEach(c => {
    const dx = (Math.random() - 0.5) * 10;
    c.style.transform += ` translateX(${dx}px)`;
  });
}
