/* Script content injected in real-time *//* ===== GRID BACKGROUND ===== */
const canvas = document.getElementById('bgCanvas');
const ctx = canvas.getContext('2d');

let W = canvas.width = window.innerWidth;
let H = canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
  W = canvas.width = window.innerWidth;
  H = canvas.height = window.innerHeight;
});

let offset = 0;

function drawGrid() {
  ctx.clearRect(0, 0, W, H);

  ctx.strokeStyle = "rgba(180,140,255,0.15)";
  ctx.lineWidth = 1;

  const gap = 40;
  offset += 0.3;

  for (let x = 0; x < W; x += gap) {
    ctx.beginPath();
    ctx.moveTo(x + (offset % gap), 0);
    ctx.lineTo(x + (offset % gap), H);
    ctx.stroke();
  }

  for (let y = 0; y < H; y += gap) {
    ctx.beginPath();
    ctx.moveTo(0, y + (offset % gap));
    ctx.lineTo(W, y + (offset % gap));
    ctx.stroke();
  }

  requestAnimationFrame(drawGrid);
}

drawGrid();

/* ===== SCROLL BUTTON ===== */
const topBtn = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
  topBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});

topBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

/* ===== MODAL ===== */
function openCert(el){
  const modal = document.getElementById('certModal');
  const modalImg = document.getElementById('modalImg');
  const desc = document.getElementById('modalDesc');

  modal.style.display = 'flex';
  modalImg.src = el.src;
  desc.textContent = el.dataset.desc || "";
}

document.getElementById('closeModal').onclick = () => {
  document.getElementById('certModal').style.display = 'none';
};

document.addEventListener('keydown', (e)=>{
  if(e.key === 'Escape'){
    document.getElementById('certModal').style.display = 'none';
  }
});
