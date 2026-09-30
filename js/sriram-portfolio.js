(() => {
  const workImages = [
    "./assets/sriram-workbench.png",
    "./assets/sriram-prototype-presentation.png",
    "./assets/sriram-blueprint.png",
    "./assets/sriram-tablet.png",
    "./assets/sriram-prototype-portrait.png",
    "./assets/sriram-studio-direction.png",
    "./assets/sriram-product-review.png",
  ];

  const start = () => {
    document.documentElement.classList.add("sriram-personal-site");
    document.title = "Sriram Karri — Personal Portfolio";
    document.querySelectorAll('meta[property="og:title"], meta[name="twitter:title"]').forEach((meta) => {
      meta.content = document.title;
    });
    document.querySelectorAll('meta[name="description"], meta[property="og:description"], meta[name="twitter:description"]').forEach((meta) => {
      meta.content = "Sriram Karri — a personal home for ideas, work and what comes next.";
    });
    document.querySelectorAll('meta[property="og:image"], meta[name="twitter:image"]').forEach((meta) => meta.remove());
    document.querySelectorAll('link[rel="shortcut icon"], link[rel="apple-touch-icon"]').forEach((link) => link.remove());
    document.querySelector(".btn-layout.is-nav > a")?.classList.add("sriram-hidden-store");
    document.querySelectorAll(".is-ln4-logo").forEach((logo) => logo.classList.add("sriram-hidden-mark"));
    document.querySelectorAll('[data-hero-anim="msg"]').forEach((message) => {
      message.textContent = "Ideas, work and what’s next";
    });

    const introLabel = document.querySelector(".transition-btn .btn-text");
    if (introLabel) introLabel.textContent = "Sriram Karri";

    const brand = document.querySelector(".nav-brand-link");

    const monogram = document.querySelector(".nav-middle");
    monogram?.classList.add("sriram-hidden-mark");

    const navInner = document.querySelector(".nav-inner");
    if (navInner && !navInner.querySelector(".sriram-top-brand")) {
      const homeBrand = document.createElement("a");
      homeBrand.className = "sriram-top-brand";
      homeBrand.href = "#home";
      homeBrand.setAttribute("aria-label", "Sriram Karri — home");
      homeBrand.textContent = "SRIRAM KARRI";
      navInner.prepend(homeBrand);
    }
    if (navInner && !navInner.querySelector(".sriram-top-links")) {
      const topLinks = document.createElement("nav");
      topLinks.className = "sriram-top-links";
      topLinks.setAttribute("aria-label", "Main navigation");
      topLinks.innerHTML = '<a href="#home">Home</a><a href="#about">About</a><a href="#projects">Projects</a><a href="#contact">Contact</a>';
      navInner.append(topLinks);
    }
    brand?.remove();

    const menuButton = document.querySelector(".nav-ham");
    if (menuButton) {
      menuButton.title = "Open or close navigation";
      if (!menuButton.querySelector(".sriram-switch-knob")) {
        menuButton.insertAdjacentHTML("beforeend", '<span class="sriram-switch-knob" aria-hidden="true"></span>');
      }
    }

    const menuLinks = [...document.querySelectorAll(".nav-menu-link-w")];
    [
      ["HOME", "#home"],
      ["ABOUT", "#about"],
      ["CONTACT", "#contact"],
    ].forEach(([label, href], index) => {
      const link = menuLinks[index];
      if (!link) return;
      link.href = href;
      const text = link.querySelector(".text-nav-link");
      if (text) text.textContent = label;
    });
    menuLinks.slice(3).forEach((link) => link.classList.add("sriram-hidden-menu-link"));

    const pageTitle = document.querySelector(".home-title-w");
    if (pageTitle) {
      const headings = pageTitle.querySelectorAll("h1, h2");
      if (headings[0]) headings[0].textContent = "Sriram Karri";
      if (headings[1]) headings[1].textContent = "Personal Portfolio";
    }

    const hero = document.querySelector(".sticky-track.home-hero");
    const heroSection = hero?.querySelector(".s.home-hero");
    if (hero && heroSection) {
      hero.id = "home";
      const heroCanvas = heroSection.querySelector(".c.home-hero");
      if (heroCanvas && !heroCanvas.querySelector(".hero-editorial")) {
        const editorial = document.createElement("div");
        editorial.className = "hero-editorial";
        editorial.className = "hero-stage";
        editorial.innerHTML = `
          <div class="hero-next-reveal" aria-hidden="true"><span>CREATIVE TECHNOLOGY</span><strong>IDEAS INTO<br>REALITY.</strong><span>TECHNOLOGY · DESIGN · AI</span></div>
          <div class="hero-hover-atmosphere" aria-hidden="true"></div>
          <div class="hero-portrait-plane">
            <img class="hero-portrait sriram-unique-photo" src="./assets/sriram-with-glasses-cutout.png" alt="Sriram Karri wearing glasses, a black suit and tie" fetchpriority="high" />
            <svg class="hero-eye-sheen" viewBox="0 0 1415 1111" aria-hidden="true">
              <defs>
                <clipPath id="hero-lens-clip" clipPathUnits="userSpaceOnUse">
                  <path d="M671 293 C680 276 709 279 737 285 C764 290 786 299 792 314 C801 334 788 363 776 377 C765 392 741 389 717 386 C694 383 674 375 670 360 C666 341 666 313 671 293Z"/>
                  <path d="M848 325 C857 316 879 317 900 322 C923 327 947 337 957 349 C965 364 951 392 941 413 C934 429 916 426 895 420 C873 415 855 410 849 397 C843 380 840 341 848 325Z"/>
                </clipPath>
                <linearGradient id="hero-lens-sweep" x1="0" y1="0" x2="1" y2=".15"><stop offset="0" stop-color="#fff" stop-opacity="0"/><stop offset=".47" stop-color="#eef4ff" stop-opacity=".4"/><stop offset=".54" stop-color="#fff" stop-opacity=".78"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient>
              </defs>
              <g clip-path="url(#hero-lens-clip)" opacity=".28"><rect x="260" y="270" width="145" height="170" fill="url(#hero-lens-sweep)" transform="skewX(-17)"><animate attributeName="x" values="260;1190;260" dur="7.2s" repeatCount="indefinite"/></rect></g>
            </svg>
            <svg class="hero-glasses-overlay" viewBox="0 0 1414 1114" role="img" aria-label="Sriram wearing glossy black acetate sunglasses">
              <defs>
                <linearGradient id="lens-smoke" x1="0" y1="0" x2=".12" y2="1"><stop offset="0" stop-color="#343942" stop-opacity=".36"/><stop offset=".6" stop-color="#111317" stop-opacity=".47"/><stop offset="1" stop-color="#070809" stop-opacity=".56"/></linearGradient>
                <linearGradient id="acetate-gloss" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#45484c"/><stop offset=".16" stop-color="#151719"/><stop offset=".72" stop-color="#050607"/><stop offset="1" stop-color="#242629"/></linearGradient>
                <linearGradient id="glass-glint" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".22"/><stop offset=".3" stop-color="#d9e0e8" stop-opacity=".04"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient>
                <linearGradient id="eye-reveal-band" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="white"/><stop offset=".2" stop-color="black"/><stop offset=".8" stop-color="black"/><stop offset="1" stop-color="white"/></linearGradient>
                <mask id="eye-reveal-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="1414" height="1114"><rect x="0" y="0" width="1414" height="1114" fill="white"/><rect x="-250" y="300" width="154" height="230" fill="url(#eye-reveal-band)"><animate attributeName="x" values="-250;1414;-250" dur="8s" repeatCount="indefinite"/></rect></mask>
                <filter id="lens-shadow" x="-20%" y="-20%" width="140%" height="150%"><feGaussianBlur in="SourceAlpha" stdDeviation="2.5"/><feOffset dy="3"/><feComponentTransfer><feFuncA type="linear" slope=".38"/></feComponentTransfer><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge></filter>
              </defs>
              <g class="hero-glasses-fit" transform="translate(62 0) scale(.92 1) rotate(2 780 390)" filter="url(#lens-shadow)">
                <path d="M590 333 Q574 335 571 351 L583 431 Q586 451 606 453 L730 447 Q753 446 759 427 L772 363 Q776 345 757 341 Q689 333 590 333Z M805 344 Q786 345 784 363 L793 433 Q796 452 816 454 L940 458 Q963 459 969 439 L990 365 Q994 347 975 345 Q891 340 805 344Z" fill="url(#lens-smoke)" fill-rule="evenodd"/>
                <path d="M590 333 Q574 335 571 351 L583 431 Q586 451 606 453 L730 447 Q753 446 759 427 L772 363 Q776 345 757 341 Q689 333 590 333Z M805 344 Q786 345 784 363 L793 433 Q796 452 816 454 L940 458 Q963 459 969 439 L990 365 Q994 347 975 345 Q891 340 805 344Z" fill="#030405" fill-rule="evenodd" opacity=".25" mask="url(#eye-reveal-mask)"/>
                <path d="M590 333 Q574 335 571 351 L583 431 Q586 451 606 453 L730 447 Q753 446 759 427 L772 363 Q776 345 757 341 Q689 333 590 333Z M805 344 Q786 345 784 363 L793 433 Q796 452 816 454 L940 458 Q963 459 969 439 L990 365 Q994 347 975 345 Q891 340 805 344Z" fill="none" stroke="url(#acetate-gloss)" stroke-width="17" stroke-linejoin="round"/>
                <path d="M590 333 Q574 335 571 351 L583 431 Q586 451 606 453 L730 447 Q753 446 759 427 L772 363 Q776 345 757 341 Q689 333 590 333Z M805 344 Q786 345 784 363 L793 433 Q796 452 816 454 L940 458 Q963 459 969 439 L990 365 Q994 347 975 345 Q891 340 805 344Z" fill="none" stroke="#030405" stroke-width="11" stroke-linejoin="round"/>
                <path d="M590 333 Q574 335 571 351 L583 431 Q586 451 606 453 L730 447 Q753 446 759 427 L772 363 Q776 345 757 341 Q689 333 590 333Z M805 344 Q786 345 784 363 L793 433 Q796 452 816 454 L940 458 Q963 459 969 439 L990 365 Q994 347 975 345 Q891 340 805 344Z" fill="none" stroke="#828589" stroke-width="1.8" stroke-linejoin="round" opacity=".64"/>
                <path d="M602 340 Q674 340 749 348 M817 350 Q894 347 965 352" fill="none" stroke="#eef0f1" stroke-width="2.2" stroke-linecap="round" opacity=".5"/>
                <path d="M770 357 Q784 343 798 358 L801 368 Q785 361 773 372Z" fill="url(#acetate-gloss)" stroke="#08090a" stroke-width="4" stroke-linejoin="round"/>
                <path d="M573 350 Q549 347 526 338 M990 352 Q1013 356 1036 368" fill="none" stroke="#08090a" stroke-width="12" stroke-linecap="round"/>
                <path d="M573 350 Q549 347 526 338 M990 352 Q1013 356 1036 368" fill="none" stroke="#45484b" stroke-width="2" stroke-linecap="round" opacity=".75"/>
                <path d="M602 344 Q656 343 709 350 M820 354 Q873 353 924 359" fill="none" stroke="url(#glass-glint)" stroke-width="5" opacity=".35"/>
              </g>
            </svg>
          </div>
          <div class="hero-stage-index" aria-hidden="true"><span>01 — IDEAS IN MOTION</span><span>MOVE TO EXPLORE</span></div>`;
        heroCanvas.append(editorial);
        editorial.querySelector(".hero-glasses-overlay")?.remove();
      }
      if (heroCanvas && !heroCanvas.dataset.interactiveLightReady) {
        heroCanvas.dataset.interactiveLightReady = "true";
        let frame = 0;
        let nextX = 50;
        let nextY = 52;
        let lightX = 50;
        let lightY = 52;
        const paintLight = () => {
          frame = 0;
          lightX += (nextX - lightX) * .075;
          lightY += (nextY - lightY) * .075;
          heroCanvas.style.setProperty("--hero-light-x", `${lightX}%`);
          heroCanvas.style.setProperty("--hero-light-y", `${lightY}%`);
          heroCanvas.style.setProperty("--hero-pan-x", `${(50 - lightX) * 0.13}px`);
          heroCanvas.style.setProperty("--hero-pan-y", `${(52 - lightY) * 0.09}px`);
          heroCanvas.style.setProperty("--hero-tilt-x", `${((lightX - 50) / 50) * 2.4}deg`);
          heroCanvas.style.setProperty("--hero-tilt-y", `${((lightY - 52) / 48) * 1.8}deg`);
          heroCanvas.style.setProperty("--hero-parallax-x", `${(lightX - 50) * 0.1}px`);
          heroCanvas.style.setProperty("--hero-parallax-y", `${(lightY - 52) * 0.08}px`);
          if(Math.abs(nextX-lightX)+Math.abs(nextY-lightY)>.015)frame=requestAnimationFrame(paintLight);
        };
        heroCanvas.addEventListener("pointermove", (event) => {
          const bounds = heroCanvas.getBoundingClientRect();
          nextX = Math.max(0, Math.min(100, ((event.clientX - bounds.left) / bounds.width) * 100));
          nextY = Math.max(0, Math.min(100, ((event.clientY - bounds.top) / bounds.height) * 100));
          if (!frame) frame = requestAnimationFrame(paintLight);
        }, { passive: true });
        heroCanvas.addEventListener("pointerleave", () => {
          nextX = 50;
          nextY = 52;
          if (!frame) frame = requestAnimationFrame(paintLight);
        }, { passive: true });
      }
      const heroLabels = hero.querySelectorAll(".home-hero-next-race-w .text-eyebrow");
      ["PERSONAL PORTFOLIO", "SRIRAM", "KARRI", "Ideas in motion"].forEach((label, index) => {
        if (heroLabels[index]) heroLabels[index].textContent = label;
      });

      const taxi = hero.parentElement;
      if (taxi) {
        const firstContentSection = [...taxi.children].find((child) => child.tagName === "SECTION");
        if (firstContentSection) {
          firstContentSection.id = "about";
          initHeroTransition(hero, firstContentSection);
        }
        const footer = taxi.querySelector(".is-footer");
        if (footer) footer.id = "contact";
      }

      if ("IntersectionObserver" in window) {
        const heroVisibility = new IntersectionObserver(([entry]) => {
          document.body.classList.toggle("hero-background-active", entry.isIntersecting);
        }, { threshold: 0.15 });
        heroVisibility.observe(hero);
      }
    }

    personalizeSections();

    let attempts = 0;
    const recolor = window.setInterval(() => {
      const scene = window.landoGL?.params?.backgroundScene;
      if (scene) {
        scene.COLOR_BACKGROUND = "#080809";
        scene.COLOR_FOREGROUND = "#19191a";
        scene.COLOR_CURSOR_BACKGROUND = "#d7d6d0";
        scene.COLOR_CURSOR_FOREGROUND = "#f5f4ef";
        window.landoGL.updateColors?.();
        window.clearInterval(recolor);
      }
      if (++attempts > 120) window.clearInterval(recolor);
    }, 150);
  };

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start, { once: true });
  else start();

  function initIdeaGeometry(canvas, stage, pointerTarget) {
    if (!canvas || !canvas.getContext) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;
    const pieces = Array.from({ length: 11 }, (_, i) => {
      const a = (Math.PI * 2 * i) / 11;
      const radius = i % 2 ? .36 : .45;
      return {
        orbit: a,
        rx: radius * (i < 6 ? -1 : 1),
        ry: Math.sin(a) * .3,
        rz: (i % 3 - 1) * .13,
        size: .028 + (i % 4) * .008,
        speed: .12 + (i % 4) * .035,
        phase: i * 1.7,
      };
    });
    let pointer = { x: 0, y: 0 }, current = { x: 0, y: 0 }, raf = 0;
    let width = 0, height = 0, dpr = 1;
    const resize = () => {
      const rect = stage.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 1.6);
      width = rect.width; height = rect.height;
      canvas.width = Math.round(width * dpr); canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`; canvas.style.height = `${height}px`;
    };
    const draw = (now) => {
      raf = 0;
      current.x += (pointer.x - current.x) * .055;
      current.y += (pointer.y - current.y) * .055;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0); ctx.clearRect(0, 0, width, height);
      const center = { x: width * .5, y: height * .48 };
      const focal = Math.min(width, height) * 1.2;
      const tiltY = current.x * .28, tiltX = current.y * -.16;
      const projected = pieces.map((piece) => {
        const t = now * .00022 * piece.speed * 5 + piece.phase;
        const bob = Math.sin(t) * .025;
        let x = piece.rx + Math.cos(piece.orbit + t * .22) * .045;
        let y = piece.ry + bob;
        let z = piece.rz + Math.sin(t * .8) * .06;
        let x1 = x * Math.cos(tiltY) - z * Math.sin(tiltY);
        let z1 = x * Math.sin(tiltY) + z * Math.cos(tiltY);
        let y1 = y * Math.cos(tiltX) - z1 * Math.sin(tiltX);
        let z2 = y * Math.sin(tiltX) + z1 * Math.cos(tiltX);
        const perspective = focal / (focal + z2 * height);
        return { x: center.x + x1 * height * perspective, y: center.y + y1 * height * perspective, z: z2, r: piece.size * height * perspective, phase: piece.phase };
      }).sort((a, b) => a.z - b.z);
      projected.forEach((p, i) => {
        const k = Math.sin(now * .0012 + p.phase) * .5 + .5;
        const r = p.r;
        ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(current.x * .22 + p.phase * .12);
        ctx.beginPath(); ctx.moveTo(0, -r); ctx.lineTo(r * .82, -r * .28); ctx.lineTo(r * .62, r * .76); ctx.lineTo(-r * .55, r); ctx.lineTo(-r, -.12 * r); ctx.closePath();
        ctx.fillStyle = `rgba(225,226,224,${.05 + k * .09})`; ctx.fill();
        ctx.strokeStyle = `rgba(245,245,241,${.24 + k * .25})`; ctx.lineWidth = .8; ctx.stroke();
        ctx.beginPath(); ctx.moveTo(0, -r); ctx.lineTo(0, r * .16); ctx.lineTo(-r * .55, r); ctx.moveTo(0, r * .16); ctx.lineTo(r * .82, -r * .28); ctx.strokeStyle = `rgba(255,255,255,${.10 + k * .12})`; ctx.stroke(); ctx.restore();
        if (i > 0) {
          const q = projected[i - 1];
          ctx.beginPath(); ctx.moveTo(q.x, q.y); ctx.lineTo(p.x, p.y); ctx.strokeStyle = `rgba(235,235,232,${.035 + k * .07})`; ctx.lineWidth = .7; ctx.stroke();
        }
      });
      if (Math.abs(pointer.x - current.x) + Math.abs(pointer.y - current.y) > .001 || !document.hidden) raf = requestAnimationFrame(draw);
    };
    const onMove = (event) => {
      const b = pointerTarget.getBoundingClientRect();
      pointer.x = Math.max(-1, Math.min(1, (event.clientX - b.left) / b.width * 2 - 1));
      pointer.y = Math.max(-1, Math.min(1, (event.clientY - b.top) / b.height * 2 - 1));
      if (!raf) raf = requestAnimationFrame(draw);
    };
    pointerTarget.addEventListener("pointermove", onMove, { passive: true });
    pointerTarget.addEventListener("pointerleave", () => { pointer = { x: 0, y: 0 }; if (!raf) raf = requestAnimationFrame(draw); }, { passive: true });
    new ResizeObserver(resize).observe(stage); resize(); raf = requestAnimationFrame(draw);
    document.addEventListener("visibilitychange", () => { if (!document.hidden && !raf) raf = requestAnimationFrame(draw); });
  }

  function initHeroTransition(track, nextSection) {
    if (!track || track.dataset.sriramTransitionReady) return;
    track.dataset.sriramTransitionReady = "true";
    const stage = track.querySelector(".hero-stage");
    if (!stage) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const travel = Math.max(1, track.offsetHeight - window.innerHeight);
      const progress = Math.max(0, Math.min(1, -track.getBoundingClientRect().top / travel));
      const reveal = Math.max(0, Math.min(1, (progress - .16) / .68));
      stage.style.setProperty("--hero-exit-progress", reveal.toFixed(3));
      const entrySection = document.querySelector('.portfolio-rebuilt #about') || nextSection;
      entrySection.style.setProperty("--about-entry-progress", reveal.toFixed(3));
    };
    const schedule = () => { if (!raf) raf = requestAnimationFrame(update); };
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });
    schedule();
  }

  function personalizeSections() {
    const sections = [...document.querySelectorAll("main section.s")];
    const intro = sections.find((section) => !section.classList.length || section.classList.length === 1 && section.classList.contains("s"));
    const horizontal = document.querySelector(".is-horizontal-track");
    const gallery = document.querySelector(".home-helmets");
    const contact = document.querySelector(".is-footer");
    if (intro) { intro.id = "about"; intro.querySelector(".text-eyebrow")?.replaceChildren("PERSONAL / CREATIVE TECHNOLOGY"); const statement = intro.querySelector(".text-impact-lg-mona"); if (statement) statement.textContent = "Ideas take shape when technology meets design."; }
    if (horizontal) horizontal.id = "projects";
    if (gallery) gallery.id = "selected-work";
    if (contact) contact.id = "contact";

    document.querySelectorAll(".sriram-top-links a").forEach((link) => { if (link.textContent.trim() === "Projects") link.href = "#projects"; });
    const menuLinks = [...document.querySelectorAll(".nav-menu-link-w")];
    if (menuLinks[2]) { menuLinks[2].href = "#projects"; const label = menuLinks[2].querySelector(".text-nav-link"); if (label) label.textContent = "PROJECTS"; }

    const replaceImage = (img, src, alt = "Sriram Karri") => {
      img.src = src; img.removeAttribute("srcset"); img.removeAttribute("sizes"); img.alt = alt; img.loading = "lazy";
      img.closest(".video-stream")?.removeAttribute("data-stream-url");
    };
    const imageSections = [document.querySelector(".is-otot-home"), document.querySelector(".is-otot-end"), document.querySelector(".is-lando-exe"), document.querySelector(".is-home-collabs"), document.querySelector(".is-callout-socials")].filter(Boolean);
    imageSections.forEach((section) => section.querySelectorAll("img").forEach((img) => img.remove()));

    if (horizontal) {
      const captions = ["The first sketch", "A clearer direction", "Testing the structure", "Thinking in systems", "Details matter", "Ideas into form", "Finding a new angle", "Making it useful", "Build, refine, repeat", "Room to experiment", "From concept to craft", "Always in progress", "The next idea"];
      horizontal.querySelectorAll(".text-eyebrow").forEach((el, i) => el.textContent = captions[i % captions.length]);
      const stories = ["Every strong result starts with a question worth exploring.", "I keep learning, making and refining until an idea feels right."];
      horizontal.querySelectorAll(".horizontal-item-text").forEach((el, i) => el.textContent = stories[i % stories.length]);
    }
    const marquee = document.querySelector(".home-marquee");
    if (marquee) {
      marquee.querySelectorAll("img").forEach((img, i) => replaceImage(img, workImages[i], "Sriram Karri — building ideas into reality"));
      marquee.querySelectorAll("[data-hero-anim='msg']").forEach((el) => el.textContent = "Ideas take shape.");
      marquee.querySelectorAll(".text-eyebrow").forEach((el) => el.textContent = "IDEAS / IN MOTION");
    }

    const split = document.querySelector(".is-otot-home");
    if (split) {
      const headings = split.querySelectorAll("h2");
      ["IDEAS", "IN MOTION", "TECH", "+ DESIGN"].forEach((label, i) => { if (headings[i]) headings[i].textContent = label; });
      const ps = split.querySelectorAll("p");
      ["Experiments, concepts and things I’m building.", "Technology, design and the work between them."].forEach((label, i) => { if (ps[i]) ps[i].textContent = label; });
      split.querySelectorAll("a").forEach((a, i) => { a.href = i ? "#selected-work" : "#projects"; a.title = i ? "View selected work" : "Explore ideas in motion"; });
    }
    // Keep every visible photo unique across the full page: five timeline scenes and two gallery scenes.
    if (horizontal) {
      const scenes = [...horizontal.querySelectorAll(".horizontal-item-img-w img")];
      scenes.forEach((img, i) => {
        if (i >= 5) { img.remove(); return; }
        replaceImage(img, workImages[i], `Sriram Karri — idea in motion ${i + 1}`);
        img.classList.add("sriram-unique-photo");
      });
      horizontal.querySelectorAll(".horizontal-item-w").forEach((item) => {
        const scene = item.querySelector(".horizontal-item-img-w img");
        if (scene && !scene.classList.contains("sriram-unique-photo")) item.classList.add("sriram-hidden-duplicate-photo");
      });
    }

    if (gallery) {
      const headings = gallery.querySelectorAll(".title-headline-w h2");
      if (headings[0]) headings[0].textContent = "Selected";
      if (headings[1]) headings[1].textContent = "Work";
      const description = gallery.querySelector(".title-para-w p"); if (description) description.textContent = "A growing collection of explorations across technology, design and AI.";
      const cards = [...gallery.querySelectorAll(".helmet-grid-item-w.w-dyn-item")];
      const titles = ["Studio practice", "Prototype study", "Ideas on the board", "Quiet focus", "Form & function"];
      cards.forEach((card, i) => {
        card.querySelectorAll("img").forEach((img, layer) => {
          if (layer > 0 || i >= 2) img.remove();
          else { replaceImage(img, workImages[5 + i], `Sriram Karri — ${titles[i % titles.length]}`); img.classList.add("sriram-unique-photo"); }
        });
        const title = card.querySelector("h3"); if (title) title.textContent = titles[i % titles.length];
        const date = card.querySelector(".date"); if (date) date.textContent = "2026";
        if (i >= 2) card.classList.add("sriram-extra-work-card");
      });
    }
    const callout = [...document.querySelectorAll("main section.s")].find((section) => section.querySelector(".c.is-callout"));
    if (callout) {
      const text = callout.querySelector(".callout-layout");
      if (text) { text.querySelectorAll(".text-eyebrow").forEach((el) => el.textContent = "A little about me"); text.querySelectorAll(".text-impact-lg-mona, .text-impact-sm-mona, .text-body-reg-mona").forEach((el) => el.textContent = "Building ideas into reality, one thoughtful detail at a time."); }
      callout.querySelectorAll(".text-cta-short-intro").forEach((el) => el.textContent = "Explore the work taking shape.");
      callout.querySelectorAll(".btn-text").forEach((el) => { if (/track/i.test(el.textContent)) el.textContent = "Explore selected work"; });
      callout.querySelectorAll("a").forEach((a) => a.href = "#selected-work");
    }

    const exe = document.querySelector(".is-lando-exe");
    if (exe) {
      const eyebrow = exe.querySelector(".text-eyebrow.large"); if (eyebrow) eyebrow.textContent = "IN PROGRESS";
      const headline = exe.querySelector("h2"); if (headline) headline.textContent = "Curiosity meets craft.";
      const paragraph = exe.querySelector("p"); if (paragraph) paragraph.textContent = "I’m exploring ideas across technology, design and AI, learning by building and making each version better.";
      const cta = exe.querySelector("a"); if (cta) { cta.href = "#contact"; const label = cta.querySelector(".btn-text"); if (label) label.textContent = "Get in touch"; }
    }
    const collabs = document.querySelector(".is-home-collabs");
    if (collabs) {
      const hs = collabs.querySelectorAll(".title-headline-w h2"); if (hs[0]) hs[0].textContent = "What I"; if (hs[1]) hs[1].textContent = "explore";
      const p = collabs.querySelector(".title-para-w p"); if (p) p.textContent = "A few directions I’m interested in: thoughtful software, clear design, useful AI and new ways to make ideas real.";
      collabs.querySelectorAll(".marquee-advanced__item").forEach((item) => { item.textContent = "IDEAS · DESIGN · TECHNOLOGY · AI"; item.classList.add("sriram-text-marquee"); });
      collabs.querySelectorAll("img").forEach((img) => img.remove());
      collabs.querySelectorAll("a").forEach((a) => { a.href = "#projects"; const label = a.querySelector(".btn-text"); if (label) label.textContent = "Explore projects"; });
    }

    const socials = document.querySelector(".is-callout-socials");
    if (socials) {
      const title = socials.querySelector("h2"); if (title) title.innerHTML = "<span>what I’m</span><span class=\"span-font-brier\">building</span>";
      const intro = socials.querySelector(".callout-socials-intro-w .text-cta-short-intro"); if (intro) intro.textContent = "Find me around the web";
      const socialTargets = [["Instagram", "https://www.instagram.com/sriramkarri/"], ["GitHub", "https://github.com/sriramkarri"], ["LinkedIn", "https://www.linkedin.com/in/sriramkarri/"]];
      socials.querySelectorAll(".callout-socials-links-layout a").forEach((a, i) => { const [label, url] = socialTargets[i % socialTargets.length]; a.href = url; a.target = "_blank"; a.rel = "noopener noreferrer"; const t = a.querySelector(".btn-text"); if (t) t.textContent = label; });
      socials.querySelectorAll("[data-stream-url]").forEach((el) => el.removeAttribute("data-stream-url"));
    }

    if (contact) {
      const columns = contact.querySelectorAll(".footer-links-col");
      if (columns[0]) {
        const label = columns[0].querySelector(".text-eyebrow"); if (label) label.textContent = "Explore";
        const anchors = columns[0].querySelectorAll(".footer-links-layout a");
        [["Home", "#home"], ["About", "#about"], ["Projects", "#projects"], ["Contact", "#contact"]].forEach(([text, href], i) => { if (!anchors[i]) return; anchors[i].href = href; const t = anchors[i].querySelector(".btn-text"); if (t) t.textContent = text; });
        anchors.forEach((a, i) => { if (i > 3) a.remove(); });
        columns[0].querySelectorAll("a.c-lime").forEach((a) => a.remove());
      }
      if (columns[1]) {
        const label = columns[1].querySelector(".text-eyebrow"); if (label) label.textContent = "Find me";
        const anchors = columns[1].querySelectorAll(".footer-links-layout a");
        [["Instagram", "https://www.instagram.com/sriramkarri/"], ["GitHub", "https://github.com/sriramkarri"], ["LinkedIn", "https://www.linkedin.com/in/sriramkarri/"]].forEach(([text, href], i) => { if (!anchors[i]) return; anchors[i].href = href; anchors[i].target = "_blank"; anchors[i].rel = "noopener noreferrer"; const t = anchors[i].querySelector(".btn-text"); if (t) t.textContent = text; });
        anchors.forEach((a, i) => { if (i > 2) a.remove(); });
      }
      const footerHeading = contact.querySelector(".footer-statement-w h2"); if (footerHeading) footerHeading.textContent = "Ideas into reality.";
      const emailCta = contact.querySelector(".footer-bg-bottom-btn-w a"); if (emailCta) { emailCta.href = "mailto:hello@sriramkarri.com"; const t = emailCta.querySelector(".btn-text"); if (t) t.textContent = "Start a conversation"; }
      const copyright = contact.querySelector(".footer-legal-links-col .text-title-small-label"); if (copyright) copyright.textContent = "© 2026 Sriram Karri. All rights reserved.";
      contact.querySelectorAll("[data-signup-trigger],a[href*='/legal/']").forEach((a) => a.remove());
      contact.querySelectorAll(".footer-marquee-logo-w").forEach((logo) => logo.remove());
      contact.querySelectorAll(".footer-bg-helmet-w img").forEach((img) => img.remove());
    }
    document.querySelectorAll("a[href*='landonorris'],a[href*='lando'],a[href^='/on-track'],a[href^='/off-track'],a[href^='/partnerships'],a[href^='/calendar'],a[href^='/legal/']").forEach((a) => a.href = "#projects");
    document.querySelectorAll("img[src*='landonorris'],img[src*='website-files']").forEach((img) => img.remove());
    document.querySelectorAll("[data-stream-url]").forEach((el) => el.removeAttribute("data-stream-url"));
    document.querySelectorAll("main section.s img:not(.sriram-unique-photo)").forEach((img) => img.remove());
  }
})();
