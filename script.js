// Buttons
const gaia = document.getElementById("Gaia");
const cronos = document.getElementById("Cronos");
const zeus = document.getElementById("Zeus");
const uranus = document.getElementById("Uranus");
// Images
const g = document.getElementById("gimg");
const c = document.getElementById("cimg");
const z = document.getElementById("zimg");
const u = document.getElementById("uimg");
// Booleans
let gdb = false;
let udb = false;
let cdb = false;
let zdb = false;

// Check the clicks
gaia.addEventListener("click", () => { 
  if (gdb == false) {
    g.style.display = "block"; 
    gaia.textContent = "Click Me Again!"
    gdb = true
  }
  else if (gdb == true) {
    g.style.display = "none"; 
    gaia.textContent = "Click Me!"
    gdb = false
  }
});

cronos.addEventListener("click", () => { 
  if (cdb == false) {
    c.style.display = "block"; 
    cronos.textContent = "Click Me Again!"
    cdb = true
  }
  else if (cdb == true) {
    c.style.display = "none"; 
    cronos.textContent = "Click Me!"
    cdb = false
  }
});

zeus.addEventListener("click", () => { 
  if (zdb == false) {
    z.style.display = "block"; 
    zeus.textContent = "Click Me Again!"
    zdb = true
  }
  else if (zdb == true) {
    z.style.display = "none"; 
    zeus.textContent = "Click Me!"
    zdb = false
  }
});

uranus.addEventListener("click", () => { 
  if (udb == false) {
    u.style.display = "block"; 
    uranus.textContent = "Click Me Again!"
    udb = true
  }
  else if (udb == true) {
    u.style.display = "none"; 
    uranus.textContent = "Click Me!"
    udb = false
  }
});