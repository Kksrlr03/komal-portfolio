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
window.addEventListener("load", () => {

    const intro = document.getElementById("intro-overlay");

    if (!intro) return;

    setTimeout(() => {

        intro.style.opacity = "0";

        setTimeout(() => {

            intro.style.display = "none";

        }, 1000);

    }, 3000);

});
/* ==========================================================
   PART 2 — NAVIGATION
   Smooth Scroll + Active Link + Sticky Header
========================================================== */

/* ==========================================================
   SMOOTH SCROLL
========================================================== */

navLinks.forEach(link => {

    link.addEventListener("click", function (e) {

        const targetId = this.getAttribute("href");

        if (!targetId || targetId === "#") return;

        const target = document.querySelector(targetId);

        if (!target) return;

        e.preventDefault();

        const headerHeight = header ? header.offsetHeight : 0;

        const targetPosition =
            target.getBoundingClientRect().top +
            window.pageYOffset -
            headerHeight -
            15;

        window.scrollTo({

            top: targetPosition,

            behavior: "smooth"

        });

    });

});

/* ==========================================================
   ACTIVE NAVIGATION
========================================================== */

function updateActiveNavigation() {

    const scrollPosition = window.scrollY + 180;

    sections.forEach(section => {

        const top = section.offsetTop;

        const bottom = top + section.offsetHeight;

        if (

            scrollPosition >= top &&
            scrollPosition < bottom

        ) {

            navLinks.forEach(link => {

                link.classList.remove("active");

                if (

                    link.getAttribute("href") ===
                    "#" + section.id

                ) {

                    link.classList.add("active");

                }

            });

        }

    });

}

/* ==========================================================
   STICKY HEADER EFFECT
========================================================== */

function updateHeader() {

    if (!header) return;

    if (window.scrollY > 80) {

        header.classList.add("header-scrolled");

    }

    else {

        header.classList.remove("header-scrolled");

    }

}

/* ==========================================================
   SCROLL LISTENER
========================================================== */

let navTicking = false;

window.addEventListener("scroll", () => {

    if (!navTicking) {

        window.requestAnimationFrame(() => {

            updateHeader();

            updateActiveNavigation();

            navTicking = false;

        });

        navTicking = true;

    }

});

/* ==========================================================
   INITIAL CALLS
========================================================== */

updateHeader();

updateActiveNavigation();

/* ==========================================================
   END OF PART 2
========================================================== */

/* ==========================================================
   PART 3 — SCROLL TO TOP BUTTON
========================================================== */

/* ==========================================================
   INITIAL STATE
========================================================== */

if (topBtn) {

    topBtn.style.opacity = "0";

    topBtn.style.visibility = "hidden";

    topBtn.style.transform = "translateY(30px)";

}

/* ==========================================================
   SHOW / HIDE BUTTON
========================================================== */

function updateScrollButton() {

    if (!topBtn) return;

    if (window.scrollY > 350) {

        topBtn.style.opacity = "1";

        topBtn.style.visibility = "visible";

        topBtn.style.transform = "translateY(0) scale(1)";

    }

    else {

        topBtn.style.opacity = "0";

        topBtn.style.visibility = "hidden";

        topBtn.style.transform = "translateY(30px) scale(.9)";

    }

}

/* ==========================================================
   SMOOTH SCROLL TO TOP
========================================================== */

if (topBtn) {

    topBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}

/* ==========================================================
   UPDATE ON SCROLL
========================================================== */

window.addEventListener("scroll", updateScrollButton);

/* ==========================================================
   INITIAL CALL
========================================================== */

updateScrollButton();

/* ==========================================================
   END OF PART 3
========================================================== */

/* ==========================================================
   PART 4 — PROFESSIONAL CERTIFICATE MODAL
========================================================== */

/* ==========================================================
   OPEN CERTIFICATE
========================================================== */

function openCert(el) {

    if (!modal || !modalImg) return;

    modal.style.display = "flex";

    requestAnimationFrame(() => {

        modal.classList.add("show");

    });

    modalImg.src = el.src;

    modalImg.alt = el.dataset.desc || "Certificate";

    modalDesc.textContent = el.dataset.desc || "";

    body.style.overflow = "hidden";

}

/* ==========================================================
   CLOSE MODAL
========================================================== */

function closeCertificateModal() {

    if (!modal) return;

    modal.classList.remove("show");

    setTimeout(() => {

        modal.style.display = "none";

        body.style.overflow = "";

    },250);

}

/* ==========================================================
   CLOSE BUTTON
========================================================== */

if(closeModalBtn){

    closeModalBtn.addEventListener("click",closeCertificateModal);

}

/* ==========================================================
   ESC KEY
========================================================== */

document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        closeCertificateModal();

    }

});

/* ==========================================================
   CLICK OUTSIDE IMAGE
========================================================== */

if(modal){

    modal.addEventListener("click",(e)=>{

        if(e.target===modal){

            closeCertificateModal();

        }

    });

}

/* ==========================================================
   PREVENT IMAGE CLICK FROM CLOSING
========================================================== */

if(modalImg){

    modalImg.addEventListener("click",(e)=>{

        e.stopPropagation();

    });

}

/* ==========================================================
   IMAGE LOADING EFFECT
========================================================== */

if(modalImg){

    modalImg.addEventListener("load",()=>{

        modalImg.style.opacity="1";

        modalImg.style.transform="scale(1)";

    });

}

/* ==========================================================
   END OF PART 4
========================================================== */


/* ==========================================================
   PART 5 — REVEAL ON SCROLL ANIMATIONS
========================================================== */

/* ==========================================================
   ELEMENTS TO ANIMATE
========================================================== */

const revealElements = document.querySelectorAll(`

section,
.premium-card,
.project-card,
.cert-item,
.language-card,
.tech-category,
.why-card,
.experience-card,
.contact-box,
.glass-card,
.future-projects

`);

/* ==========================================================
   PREPARE ELEMENTS
========================================================== */

revealElements.forEach((element) => {

    element.classList.add("reveal");

});

/* ==========================================================
   OBSERVER
========================================================== */

const revealObserver = new IntersectionObserver(

(entries) => {

    entries.forEach((entry) => {

        if(entry.isIntersecting){

            entry.target.classList.add("revealed");

            revealObserver.unobserve(entry.target);

        }

    });

},

{

    threshold:0.12,

    rootMargin:"0px 0px -60px 0px"

}

);

/* ==========================================================
   START OBSERVING
========================================================== */

revealElements.forEach((element)=>{

    revealObserver.observe(element);

});

/* ==========================================================
   STAGGER EFFECT FOR GRIDS
========================================================== */

document.querySelectorAll(

".cert-grid,.why-grid,.language-grid,.tech-stack-grid"

).forEach(grid=>{

    [...grid.children].forEach((child,index)=>{

        child.style.transitionDelay=`${index*80}ms`;

    });

});

/* ==========================================================
   END PART 5
========================================================== */


/* ==========================================================
   PART 6 — JOURNEY TRACKER
========================================================== */

/* ==========================================================
   ELEMENTS
========================================================== */

const journeySection = document.getElementById("journey-tracker");

const progressBar = document.querySelector(".progress-fill");

const journeySteps = document.querySelectorAll(".journey-step");

/* ==========================================================
   ANIMATE PROGRESS BAR
========================================================== */

if (journeySection && progressBar) {

    const journeyObserver = new IntersectionObserver(

        (entries) => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) return;

                progressBar.style.width = "0%";

                requestAnimationFrame(() => {

                    progressBar.style.transition =
                        "width 2.2s cubic-bezier(.22,.61,.36,1)";

                    progressBar.style.width = "28%";

                });

                journeyObserver.unobserve(entry.target);

            });

        },

        {

            threshold: 0.35

        }

    );

    journeyObserver.observe(journeySection);

}

/* ==========================================================
   STEP HOVER EFFECT
========================================================== */

journeySteps.forEach(step => {

    step.addEventListener("mouseenter", () => {

        step.classList.add("step-active");

    });

    step.addEventListener("mouseleave", () => {

        step.classList.remove("step-active");

    });

});

/* ==========================================================
   TOOLTIP
========================================================== */

const tooltip = document.createElement("div");

tooltip.className = "journey-tooltip";

document.body.appendChild(tooltip);

journeySteps.forEach(step => {

    step.addEventListener("mousemove", (e) => {

        const title = step.dataset.title || "";

        const info = step.dataset.info || "";

        tooltip.innerHTML = `

            <strong>${title}</strong><br>
            ${info}

        `;

        tooltip.classList.add("show");

        tooltip.style.left =

            e.pageX + 18 + "px";

        tooltip.style.top =

            e.pageY - 18 + "px";

    });

    step.addEventListener("mouseleave", () => {

        tooltip.classList.remove("show");

    });

});

/* ==========================================================
   FLOATING EFFECT
========================================================== */

journeySteps.forEach((step,index)=>{

    step.style.animationDelay=`${index*120}ms`;

});

/* ==========================================================
   END PART 6
========================================================== */


/* ==========================================================
   PART 7 — INTRO LOADER + PERFORMANCE
========================================================== */

/* ==========================================================
   PAGE LOADED
========================================================== */

window.addEventListener("load", () => {

    document.body.classList.add("page-loaded");

    const intro = document.getElementById("intro-overlay");

    if (intro) {

        setTimeout(() => {

            intro.classList.add("fade-out");

            setTimeout(() => {

                intro.remove();

            }, 800);

        }, 1800);

    }

});

/* ==========================================================
   LAZY LOAD VIDEOS
========================================================== */

const videos = document.querySelectorAll("video");

videos.forEach(video => {

    video.setAttribute("preload", "metadata");

});

/* ==========================================================
   IMAGE FADE-IN
========================================================== */

const images = document.querySelectorAll("img");

images.forEach(img => {

    if (img.complete) {

        img.classList.add("loaded");

    }

    else {

        img.addEventListener("load", () => {

            img.classList.add("loaded");

        });

    }

});

/* ==========================================================
   REDUCED MOTION SUPPORT
========================================================== */

const prefersReducedMotion = window.matchMedia(

"(prefers-reduced-motion: reduce)"

);

if (prefersReducedMotion.matches) {

    document.documentElement.classList.add(

        "reduced-motion"

    );

}

/* ==========================================================
   WINDOW RESIZE (THROTTLED)
========================================================== */

let resizeTimer;

window.addEventListener("resize", () => {

    clearTimeout(resizeTimer);

    resizeTimer = setTimeout(() => {

        updateHeader();

        updateActiveNavigation();

        updateScrollButton();

    }, 120);

});

/* ==========================================================
   COPY PROTECTION (OPTIONAL)
   Prevent accidental image dragging
========================================================== */

document.querySelectorAll("img").forEach(img => {

    img.draggable = false;

});

/* ==========================================================
   END PART 7
========================================================== */


/* ==========================================================
   PART 8 — MASTER INITIALIZER & FINAL UTILITIES
========================================================== */

/* ==========================================================
   APP INITIALIZATION
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    console.log("%cKomalSriram.com Loaded Successfully",
        "color:#00d4ff;font-size:16px;font-weight:bold;");

    console.log(
        "%cBuilt by Karri Komal Sriram Lakshman Reddy",
        "color:#94a3b8;"
    );

});

/* ==========================================================
   SAFE INITIALIZATION
========================================================== */

function initializePortfolio() {

    updateHeader();

    updateActiveNavigation();

    updateScrollButton();

}

initializePortfolio();

/* ==========================================================
   KEYBOARD SHORTCUTS
========================================================== */

document.addEventListener("keydown", (e) => {

    /* Ignore while typing */

    if (

        e.target.tagName === "INPUT" ||

        e.target.tagName === "TEXTAREA"

    ) {

        return;

    }

    /* Home Key */

    if (e.key === "Home") {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }

});

/* ==========================================================
   EXTERNAL LINKS
========================================================== */

document.querySelectorAll("a[target='_blank']").forEach(link => {

    if (!link.hasAttribute("rel")) {

        link.setAttribute(

            "rel",

            "noopener noreferrer"

        );

    }

});

/* ==========================================================
   PERFORMANCE LOGGER
========================================================== */

window.addEventListener("load", () => {

    if ("performance" in window) {

        const loadTime = (

            performance.now() / 1000

        ).toFixed(2);

        console.log(

            `Portfolio loaded in ${loadTime}s`

        );

    }

});

/* ==========================================================
   DISABLE DOUBLE CLICK IMAGE SELECTION
========================================================== */

document.querySelectorAll("img").forEach(img => {

    img.addEventListener("mousedown", e => {

        e.preventDefault();

    });

});

/* ==========================================================
   FUTURE FEATURES PLACEHOLDER
========================================================== */

/*

Future Ideas

✔ Dark / Light Theme

✔ Blog System

✔ Search

✔ AI Chat Assistant

✔ Visitor Counter

✔ GitHub API

✔ Skills Progress

✔ Blog CMS

✔ Timeline Expansion

✔ Project Filtering

*/

/* ==========================================================
   VERSION
========================================================== */

const PORTFOLIO_VERSION = "2.0.0";

console.log(

    "Portfolio Version:",

    PORTFOLIO_VERSION

);

/* ==========================================================
   END OF SCRIPT.JS
========================================================== */

