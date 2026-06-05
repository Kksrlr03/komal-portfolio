/* ===== LUXURY FLOATING LIGHTS ===== */

const canvas = document.getElementById('bgCanvas');
const ctx = canvas.getContext('2d');

let W = canvas.width = window.innerWidth;
let H = canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
});

const blobs = [];

for(let i=0;i<8;i++){

    blobs.push({
        x:Math.random()*W,
        y:Math.random()*H,

        r:150 + Math.random()*250,

        dx:(Math.random()-0.5)*0.3,
        dy:(Math.random()-0.5)*0.3,

        color:[
            'rgba(212,175,55,0.12)',
            'rgba(246,211,101,0.10)',
            'rgba(255,179,71,0.10)'
        ][Math.floor(Math.random()*3)]
    });
}

function animateBackground(){

    ctx.clearRect(0,0,W,H);

    blobs.forEach(blob=>{

        blob.x += blob.dx;
        blob.y += blob.dy;

        if(blob.x < -blob.r) blob.x = W + blob.r;
        if(blob.x > W + blob.r) blob.x = -blob.r;

        if(blob.y < -blob.r) blob.y = H + blob.r;
        if(blob.y > H + blob.r) blob.y = -blob.r;

        const gradient = ctx.createRadialGradient(
            blob.x,
            blob.y,
            0,
            blob.x,
            blob.y,
            blob.r
        );

        gradient.addColorStop(0,blob.color);
        gradient.addColorStop(1,'transparent');

        ctx.fillStyle = gradient;

        ctx.beginPath();
        ctx.arc(blob.x,blob.y,blob.r,0,Math.PI*2);
        ctx.fill();
    });

    requestAnimationFrame(animateBackground);
}

animateBackground();

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
