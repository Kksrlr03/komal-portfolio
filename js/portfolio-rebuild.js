(() => {
  function rebuild() {
    const hero = document.querySelector('.sticky-track.home-hero');
    if (!hero || document.querySelector('.portfolio-rebuilt')) return;
    const parent = hero.parentElement;
    [...parent.children].forEach(el => {
      if (el === hero || el.matches('.home-title-w,.gl-wrap,.gl-background')) return;
      el.classList.add('portfolio-legacy');
      el.querySelectorAll('[id]').forEach(node => node.removeAttribute('id'));
      el.removeAttribute('id');
    });
    const site = document.createElement('div');
    site.className = 'portfolio-rebuilt';
    const resume = './assets/docs/resume.pdf';
    const linkedin = 'https://www.linkedin.com/in/komal-sriram-lakshman-reddy-karri/';
    const whatsapp = 'https://wa.me/918019480893?text=Hi%20Komal%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect.';
    const arrow = '<span aria-hidden="true">↗</span>';
    site.innerHTML = `
      <section class="pr-section pr-about pr-light" id="about">
        <div class="pr-wrap">
          <div class="pr-section-label pr-reveal"><span>02 / THE PERSON</span><span>CURIOUS BY NATURE. BUILDER BY CHOICE.</span></div>
          <h2 class="pr-display pr-reveal">A curious mind.<br>A clear <em>purpose.</em></h2>
          <div class="pr-about-grid">
            <figure class="pr-photo pr-reveal"><img src="./assets/sriram-workbench.png" alt="Komal Sriram exploring a physical prototype at his workbench" loading="lazy"><figcaption>FROM A QUESTION TO SOMETHING REAL.</figcaption></figure>
            <div class="pr-about-copy pr-reveal"><span class="pr-kicker">KARRI KOMAL SRIRAM LAKSHMAN REDDY</span><p class="pr-lead">I’m building the foundations to turn artificial intelligence into useful, thoughtful products.</p><p>My path began with mathematics, electronics and computer science. It took me through web development, automation and customer experience—and brought me to the problems I want to solve next.</p><p>As an M.Sc. Data Science & Artificial Intelligence candidate at BITS Pilani Digital, I’m learning deliberately and building along the way.</p><div class="pr-actions"><button class="pr-link" data-profile="about">The full story ${arrow}</button><a class="pr-link" href="${resume}" target="_blank" rel="noopener noreferrer">View résumé ${arrow}</a></div>
            <div class="pr-facts"><div><strong>B.Sc.</strong><span>MATHEMATICS · ELECTRONICS · CS</span></div><div><strong>M.Sc.</strong><span>DATA SCIENCE & AI / BITS PILANI DIGITAL</span></div><div><strong>7.0</strong><span>IELTS ACADEMIC / OVERALL BAND</span></div></div></div>
          </div>
          <div class="pr-principles"><button data-profile="philosophy"><span>01</span><h3>Stay curious.</h3><p>Understand the why.<br>Then build the how.</p>${arrow}</button><button data-profile="why-hire-me"><span>02</span><h3>Build with purpose.</h3><p>Practical problems.<br>Considered solutions.</p>${arrow}</button><button data-profile="career-vision"><span>03</span><h3>Keep getting better.</h3><p>Learn. Experiment.<br>Refine. Repeat.</p>${arrow}</button></div>
        </div>
      </section>
      <section class="pr-section pr-work pr-dark" id="projects">
        <div class="pr-wrap">
          <div class="pr-section-label pr-reveal"><span>03 / SELECTED WORK</span><span>BUILT TO SOLVE SOMETHING.</span></div>
          <div class="pr-heading-row"><h2 class="pr-display pr-reveal">Less theory.<br>More <em>making.</em></h2><p class="pr-reveal">Two completed projects.<br>Real questions. Practical software.<br>A foundation for what comes next.</p></div>
          <article class="pr-project pr-reveal" id="selected-work"><div class="pr-project-media"><img src="./assets/sriram-prototype-presentation.png" alt="Komal Sriram presenting a prototype" loading="lazy"><div class="pr-project-video"><span class="pr-video-label">PRODLOCA / PRODUCT WALKTHROUGH</span><video controls muted loop playsinline preload="metadata" aria-label="ProdLoca product demonstration"><source src="./assets/prodloca.mp4" type="video/mp4">Your browser cannot play this video. <a href="./assets/prodloca.mp4">Open the ProdLoca video</a>.</video></div><span class="pr-project-number">01</span></div><div class="pr-project-info"><div><span class="pr-kicker">LOCATION-AWARE WEB APPLICATION / COMPLETED</span><h3>ProdLoca</h3><p>Find what you need, closer to home. A map-based application that helps people discover products in nearby stores.</p></div><div class="pr-project-meta"><span>REACT / FIREBASE / MAPBOX GL</span><button class="pr-link" data-project="0">Explore the project ${arrow}</button></div></div></article>
          <article class="pr-project pr-reveal"><div class="pr-project-media"><img src="./assets/sriram-blueprint-focused.png" alt="Komal Sriram focused on drawing on the technical board" loading="lazy"><div class="pr-flow-art" aria-hidden="true"><span>01 / GENERATE</span><i>→</i><span>02 / FILTER</span><i>→</i><span>03 / PUBLISH</span><b>Ideas. In circulation.</b></div><span class="pr-project-number">02</span></div><div class="pr-project-info"><div><span class="pr-kicker">AI CONTENT AUTOMATION / COMPLETED</span><h3>Quote Terminals</h3><p>From a prompt to a published post. An automated pipeline for generating, filtering and sharing motivational content.</p></div><div class="pr-project-meta"><span>OPENAI / HUGGING FACE / IFTTT</span><button class="pr-link" data-project="1">Explore the project ${arrow}</button></div></div></article>
          <div class="pr-work-note pr-reveal"><span class="pr-status-dot"></span><p>Next: machine learning, computer vision and intelligent applications.</p><button class="pr-link" data-profile="projects">Project notes & future work ${arrow}</button></div>
        </div>
      </section>
      <section class="pr-section pr-skills pr-light" id="toolkit"><div class="pr-wrap">
        <div class="pr-section-label pr-reveal"><span>04 / THE TOOLKIT</span><span>STRONG FOUNDATIONS. OPEN POSSIBILITIES.</span></div>
        <h2 class="pr-display pr-reveal">What I use.<br>What I’m <em>learning.</em></h2>
        <div class="pr-skill-grid"><article class="pr-reveal"><span class="pr-kicker">01 / HANDS-ON EXPERIENCE</span><h3>Build.</h3><p>Tools I’ve used in academic work and personal projects.</p><div class="pr-tags">${['Python','Java','HTML & CSS','JavaScript','React','Firebase','Git & GitHub'].map(x=>`<span>${x}</span>`).join('')}</div></article><article class="pr-reveal"><span class="pr-kicker">02 / CURRENT FOCUS</span><h3>Deepen.</h3><p>Programming, mathematics and the fundamentals of machine learning.</p><div class="pr-tags">${['Machine Learning','NumPy','Pandas','Scikit-learn','Linear Algebra','Probability & Statistics','Calculus'].map(x=>`<span>${x}</span>`).join('')}</div></article><article class="pr-reveal"><span class="pr-kicker">03 / THE ROAD AHEAD</span><h3>Explore.</h3><p>Areas I plan to develop through my Master’s journey.</p><div class="pr-tags">${['Deep Learning','PyTorch','TensorFlow','Computer Vision','LLMs','RAG Systems','AI Agents'].map(x=>`<span>${x}</span>`).join('')}</div></article></div>
        <div class="pr-actions pr-reveal"><button class="pr-link" data-profile="tech-stack">Full engineering toolkit ${arrow}</button><button class="pr-link" data-profile="current-focus">My current focus ${arrow}</button></div>
      </div></section>
      <section class="pr-section pr-journey pr-dark" id="journey"><div class="pr-wrap pr-journey-grid">
        <div class="pr-journey-intro"><span class="pr-kicker">05 / A WORK IN PROGRESS</span><h2 class="pr-display">The next<br><em>chapter.</em></h2><p>A deliberate path toward AI engineering. Each step builds on the last.</p><figure class="pr-photo"><img src="./assets/sriram-prototype-portrait.png" alt="Komal Sriram with a prototype" loading="lazy"></figure><button class="pr-link" data-profile="journey-tracker">The complete roadmap ${arrow}</button></div>
        <div class="pr-timeline"><div class="pr-timeline-line" aria-hidden="true"></div>${[
          ['COMPLETED','The foundation','B.Sc. in Mathematics, Electronics & Computer Science. A foundation in programming and analytical problem solving.'],
          ['COMPLETED','A wider horizon','IELTS Academic, overall band 7.0. Professional English for academic and collaborative environments.'],
          ['ADMITTED','The next academic step','M.Sc. Data Science & Artificial Intelligence at BITS Pilani Digital.'],
          ['CURRENT FOCUS','Fundamentals first','Python, mathematics and machine learning. Building projects and documenting each lesson.'],
          ['PLANNED','Intelligent systems','Deep learning, computer vision, LLMs, RAG and AI agents. Progressing from fundamentals to practical applications.'],
          ['LONG-TERM VISION','Work that matters','Complete my M.Sc., contribute to open source, share research and build AI products that solve meaningful problems.']
        ].map((x,i)=>`<article class="pr-timeline-item pr-reveal"><span class="pr-timeline-dot"></span><span class="pr-kicker">${String(i+1).padStart(2,'0')} / ${x[0]}</span><h3>${x[1]}</h3><p>${x[2]}</p></article>`).join('')}<button class="pr-link" data-profile="goals">Long-term aspirations ${arrow}</button></div>
      </div></section>
      <section class="pr-section pr-experience pr-light"><div class="pr-wrap">
        <div class="pr-section-label pr-reveal"><span>06 / EXPERIENCE</span><span>GOOD ENGINEERING STARTS WITH PEOPLE.</span></div>
        <div class="pr-experience-grid"><div class="pr-reveal"><h2 class="pr-display">Listen.<br>Solve.<br><em>Learn.</em></h2><p class="pr-lead">Working with people sharpened the way I approach problems.</p><div class="pr-role"><span class="pr-kicker">20 APRIL — 30 MAY 2026</span><h3>Customer Delight Associate</h3><span>Eternal Ltd. / Zomato</span><p>Live customer support in a fast-paced environment. Clear communication, thoughtful decisions and accuracy under pressure.</p><button class="pr-link" data-profile="experience">Experience & career transition ${arrow}</button></div></div><figure class="pr-photo pr-reveal"><img src="./assets/sriram-ipad.png" alt="Komal Sriram reviewing work on an iPad" loading="lazy"><figcaption>CLARITY COMES FROM UNDERSTANDING.</figcaption></figure></div>
        <div class="pr-language-bar pr-reveal"><span class="pr-kicker">COMMUNICATION</span><span>Telugu <small>Native</small></span><span>English <small>Professional / IELTS 7</small></span><span>Hindi <small>Conversational</small></span><span>French <small>Learning</small></span><button class="pr-link" data-profile="languages">Details ${arrow}</button></div>
      </div></section>
      <section class="pr-section pr-credentials pr-light" id="credentials"><div class="pr-wrap">
        <div class="pr-section-label pr-reveal"><span>07 / EDUCATION & RECOGNITION</span><span>THE WORK BEHIND THE PROGRESS.</span></div>
        <div class="pr-heading-row"><h2 class="pr-display pr-reveal">Earned.<br><em>Not assumed.</em></h2><p class="pr-reveal">Academic records, professional training<br>and experiences that shaped my approach.</p></div>
        <div class="pr-credential-grid">${[
          ['academic-docs','01','Academic records','B.Sc. degree, school certificates, semester marks and official transcripts.'],
          ['ielts','02','IELTS Academic','Overall 7.0 / Listening 8.0 / Reading 7.0 / Writing 6.0 / Speaking 6.0.'],
          ['course-certs','03','Professional training','Wadhwani Employability Skills and Java & Python Fundamentals.'],
          ['extra-curricular','04','Beyond the classroom','IEEE UI/UX Hackathon, English Eclat and a blockchain poster presentation.']
        ].map(x=>`<button class="pr-credential pr-reveal" data-profile="${x[0]}"><span class="pr-kicker">${x[1]} / VIEW RECORDS</span><h3>${x[2]}</h3><p>${x[3]}</p>${arrow}</button>`).join('')}</div>
        <div class="pr-credential-foot pr-reveal"><p>Every qualification is a starting point.<br>The learning continues.</p><a class="pr-link" href="${resume}" target="_blank" rel="noopener noreferrer">Download résumé ${arrow}</a></div>
      </div></section>
      <section class="pr-section pr-contact pr-dark" id="contact"><div class="pr-wrap">
        <div class="pr-section-label pr-reveal"><span>08 / SAY HELLO</span><span>OPEN TO WHAT’S NEXT.</span></div>
        <h2 class="pr-display pr-reveal">Let’s build<br>something<br><em>meaningful.</em></h2>
        <div class="pr-contact-grid"><p class="pr-lead pr-reveal">An internship. A research idea. A software project. Or a good conversation about AI.</p><div class="pr-contact-links pr-reveal"><a href="${whatsapp}" target="_blank" rel="noopener noreferrer"><span class="pr-contact-label"><svg class="pr-contact-icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="1.6" d="M20.5 11.7a8.5 8.5 0 0 1-12.6 7.5L3 20.5l1.3-4.7a8.5 8.5 0 1 1 16.2-4.1Z"/><path fill="currentColor" d="M8.4 7.1c-.4 0-1.3.7-1.3 1.8 0 2.5 3.8 6.2 6.5 6.3 1.2.1 2-.8 2.1-1.4.1-.4-.1-.5-.4-.7l-1.8-.8c-.3-.1-.4 0-.6.3l-.5.6c-.2.2-.4.2-.7 0-1-.4-2.4-1.6-2.8-2.5-.2-.3-.1-.5.1-.7l.4-.5c.2-.2.2-.4.1-.7l-.7-1.5c-.1-.3-.2-.3-.5-.3Z"/></svg>Start a conversation</span> ${arrow}</a><a href="${linkedin}" target="_blank" rel="noopener noreferrer"><span class="pr-contact-label"><svg class="pr-contact-icon" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2" fill="currentColor"/><path fill="#111112" d="M6.7 9.6h2.2v8H6.7zm1.1-3.7a1.3 1.3 0 1 0 0 2.6 1.3 1.3 0 0 0 0-2.6zm3 3.7h2.1v1.1c.5-.8 1.3-1.3 2.3-1.3 2.3 0 2.8 1.5 2.8 3.5v4.7h-2.2v-4.2c0-1.1 0-2-1.3-2s-1.5 1-1.5 2v4.2h-2.2Z"/></svg>Connect on LinkedIn</span> ${arrow}</a><a href="${resume}" target="_blank" rel="noopener noreferrer">View my résumé ${arrow}</a><button data-profile="contact">Opportunities & collaboration ${arrow}</button></div></div>
        <footer class="pr-footer"><a href="#home">SRIRAM KARRI ↑</a><span>© 2026 KOMAL SRIRAM</span><span>THE FUTURE IS SOMETHING WE BUILD.</span></footer>
      </div></section>
      <dialog class="pr-dialog" aria-labelledby="pr-dialog-title"><div class="pr-dialog-header"><span class="pr-kicker">KOMAL SRIRAM / PORTFOLIO NOTES</span><button class="pr-dialog-close" aria-label="Close details">✕</button></div><div class="pr-dialog-content"></div></dialog>`;
    hero.after(site);
    // A single wheel interpolation owns scrolling when the original Lenis
    // runtime is unavailable; avoid stacking two scroll engines.
    if(!matchMedia('(prefers-reduced-motion: reduce)').matches) {
      let wheelFrame=0, targetY=scrollY, previous=0;
      const stopWheel=()=>{if(wheelFrame)cancelAnimationFrame(wheelFrame);wheelFrame=0;previous=0;targetY=scrollY;};
      const glide=time=>{
        if(window.lenis){stopWheel();return;}
        const dt=previous?Math.min(32,time-previous):16;previous=time;
        const y=scrollY+(targetY-scrollY)*(1-Math.exp(-dt/85));
        window.scrollTo({top:Math.abs(targetY-y)<.6?targetY:y,behavior:'instant'});
        if(Math.abs(targetY-scrollY)>.6)wheelFrame=requestAnimationFrame(glide);else{wheelFrame=0;previous=0;}
      };
      window.addEventListener('wheel',event=>{
        if(window.lenis||event.ctrlKey||event.metaKey||event.target.closest?.('dialog,video,iframe')||Math.abs(event.deltaX)>Math.abs(event.deltaY))return;
        if(!wheelFrame)targetY=scrollY;
        const delta=event.deltaY*(event.deltaMode===1?16:event.deltaMode===2?innerHeight:1);
        targetY=Math.max(0,Math.min(document.documentElement.scrollHeight-innerHeight,targetY+delta));
        event.preventDefault();if(!wheelFrame)wheelFrame=requestAnimationFrame(glide);
      },{passive:false});
      window.addEventListener('pointerdown',stopWheel,{passive:true});window.addEventListener('keydown',stopWheel,{passive:true});
    }
    const agency=document.createElement('div');agency.className='pr-agency';agency.id='agency';
    const demos=[
      ['01','Veyrquar Mining','Mining & exploration','agency-veyrquar.png','demos/veyrquar-mining/index.html'],
      ['02','Forma Interiors','Interiors & architecture','agency-forma.png','demos/forma-interiors/index.html'],
      ['03','Denta','Dental care & healthcare','agency-denta.png','demos/dental-atelier/index.html'],
      ['05','Nocturne Protocol','Games & interactive entertainment','agency-nocturne.png','demos/nocturne/index.html']
    ];
    agency.innerHTML=`<div class="pr-section-label pr-reveal"><span>STUDIO SHOWCASE / WEB DESIGNSS</span><span>BUILT TOGETHER. MADE TO STAND OUT.</span></div><div class="pr-heading-row"><h2 class="pr-display pr-reveal">Our studio.<br>Our <em>craft.</em></h2><p class="pr-reveal">Web Designss is the web design agency I run with a friend. We create distinctive websites, considered identities and interactive digital experiences.</p></div><div class="pr-agency-layout"><a class="pr-agency-main pr-reveal" href="https://webdesignss.com/" target="_blank" rel="noopener noreferrer" aria-label="Visit the Web Designss agency website"><div class="pr-browser-bar"><i></i><i></i><i></i><span>webdesignss.com</span></div><img src="./assets/webdesignss-preview.png" alt="The Web Designss agency website with its forest, bird and butterfly hero" loading="lazy"><div class="pr-agency-main-copy"><span class="pr-kicker">OUR AGENCY / WEB DESIGNSS</span><h3>Design.<br>Develop.<br><em>Inspire.</em></h3><span class="pr-agency-open">Explore the studio <b aria-hidden="true">↗</b></span></div></a><div class="pr-agency-grid">${demos.map(d=>`<a class="pr-agency-demo pr-reveal" href="https://webdesignss.com/${d[4]}" target="_blank" rel="noopener noreferrer" aria-label="Open ${d[1]} concept website"><div class="pr-agency-demo-image"><img src="./assets/${d[3]}" alt="${d[1]} website preview" loading="lazy"></div><div class="pr-agency-demo-caption"><span class="pr-kicker">${d[0]} / CONCEPT WEBSITE</span><h3>${d[1]}</h3><p>${d[2]}</p><span aria-hidden="true">↗</span></div></a>`).join('')}</div></div><div class="pr-agency-end"><span>FOUR DIRECTIONS. ONE STUDIO.</span><a class="pr-link" href="https://webdesignss.com/" target="_blank" rel="noopener noreferrer">Visit Web Designss ${arrow}</a></div>`;
    site.querySelector('.pr-work .pr-wrap').append(agency);
    document.addEventListener('click', event => {
      const a = event.target.closest('.sriram-top-links a[href^="#"],.sriram-top-brand,.portfolio-rebuilt a[href^="#"]');
      if (!a) return;
      const target = document.getElementById(a.hash.slice(1));
      if (!target) return;
      event.preventDefault(); event.stopImmediatePropagation();
      history.replaceState(null,'',a.hash);
      if(window.lenis?.scrollTo) window.lenis.scrollTo(target,{duration:1.25,offset:-70});
      else window.scrollTo({top:Math.max(0,scrollY+target.getBoundingClientRect().top-(a.hash==='#home'?0:70)),behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});
    },true);
    const dialog = site.querySelector('dialog');
    dialog.setAttribute('data-lenis-prevent','');
    dialog.addEventListener('wheel',event=>event.stopPropagation(),{passive:true});
    const content = dialog.querySelector('.pr-dialog-content');
    let returnFocus = null;
    const openNotes = (id,trigger) => {
      let record = window.komalPortfolioContent?.[id];
      if (!record) return;
      if(trigger.hasAttribute('data-project')) {
        const index=Number(trigger.dataset.project);
        const starts=record.blocks.map((block,i)=>block.tag==='h3' && /ProdLoca|Quote Terminals/.test(block.text)?i:-1).filter(i=>i>=0);
        const end=index===0?starts[1]:record.blocks.findIndex((block,i)=>i>starts[index] && block.tag==='h3' && /Coming Soon/.test(block.text));
        record={blocks:record.blocks.slice(starts[index],end>0?end:undefined),documents:[]};
      }
      content.replaceChildren();
      const title = document.createElement('h2'); title.id='pr-dialog-title'; title.textContent=trigger.querySelector('h3')?.textContent || trigger.textContent.replace('↗','').trim(); content.append(title);
      if(!record.documents.length) record.blocks.forEach((block,i)=> { if(i===0 && block.tag==='h3')return;const el=document.createElement(block.tag);el.textContent=block.text;content.append(el); });
      if(record.documents.length){const docs=document.createElement('div');docs.className='pr-documents';record.documents.filter(doc=>!doc.url.includes("pdf_thumb")).forEach(doc=>{const a=document.createElement('a');a.href=doc.url;a.textContent=doc.label+' ↗';a.target='_blank';a.rel='noopener noreferrer';docs.append(a);});content.append(docs);}
      returnFocus=trigger;dialog.showModal(); dialog.scrollTop=0; window.lenis?.stop?.();
    };
    site.querySelectorAll('[data-profile]').forEach(button=>button.addEventListener('click',()=>openNotes(button.dataset.profile,button)));
    site.querySelectorAll('[data-project]').forEach(button=>button.addEventListener('click',()=>openNotes('projects',button)));
    dialog.querySelector('.pr-dialog-close').addEventListener('click',()=>dialog.close());
    dialog.addEventListener('click',event=> { if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();} });
    dialog.addEventListener('close',()=>{window.lenis?.start?.();returnFocus?.focus({preventScroll:true});});
    const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
    const videoObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(!entry.isIntersecting)entry.target.pause();}),{threshold:.15});
    site.querySelectorAll('video').forEach(video=>{
      video.poster='./assets/prodloca-cover.svg';
      videoObserver.observe(video);
      const play=document.createElement('button');play.className='pr-video-play';play.setAttribute('aria-label','Play ProdLoca product walkthrough');play.innerHTML='<span aria-hidden="true">▶</span><span>WATCH DEMO</span>';
      video.parentElement.append(play);
      play.addEventListener('click',()=>video.play().catch(()=>{play.textContent='Press play in the video controls';}));
      video.addEventListener('playing',()=>play.hidden=true);
      video.addEventListener('ended',()=>{video.currentTime=0;play.hidden=false;});
    });
    const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('pr-visible');observer.unobserve(entry.target);}}),{threshold:.12,rootMargin:'0px 0px -30px 0px'});
    site.querySelectorAll('.pr-principles button,.pr-journey-intro > *, .pr-footer').forEach(el=>el.classList.add('pr-reveal'));
    site.querySelectorAll('.pr-reveal').forEach((el,i)=>{el.style.setProperty('--reveal-delay',`${i%3*.07}s`);if(reduced)el.classList.add('pr-visible');else observer.observe(el);});
    const projects=[...site.querySelectorAll('.pr-project')];
    projects.forEach(card=>card.addEventListener('pointermove',event=>{if(reduced||event.pointerType==='touch')return;const r=card.getBoundingClientRect();card.style.setProperty('--card-x',`${(event.clientX-r.left)/r.width*100}%`);card.style.setProperty('--card-y',`${(event.clientY-r.top)/r.height*100}%`);}));
    let raf=0;
    const paint=()=>{raf=0;const journey=site.querySelector('.pr-journey');const r=journey.getBoundingClientRect();journey.style.setProperty('--journey-progress',Math.max(0,Math.min(1,(innerHeight*.6-r.top)/(r.height-innerHeight*.3))));document.body.classList.toggle('pr-light-view',[...site.querySelectorAll('.pr-light')].some(section=>{const b=section.getBoundingClientRect();return b.top<65&&b.bottom>65;}));if(!reduced)site.querySelectorAll('.pr-photo img,.pr-project-media > img').forEach(img=>{const rect=img.parentElement.getBoundingClientRect();if(rect.bottom<0||rect.top>innerHeight)return;const offset=Math.max(-18,Math.min(18,(innerHeight/2-rect.top-rect.height/2)*.045));img.style.setProperty('--photo-shift',`${offset}px`);});};
    const schedule=()=>{if(!raf)raf=requestAnimationFrame(paint);};window.addEventListener('scroll',schedule,{passive:true});window.addEventListener('resize',schedule,{passive:true});schedule();
    // Recalculate the original hero's scroll handoff against the new section.
    window.ScrollTrigger?.refresh?.();
    requestAnimationFrame(()=>{window.ScrollTrigger?.refresh?.();window.dispatchEvent(new Event('resize'));});
    const showInitialSection = () => {
      const id=location.hash.slice(1);
      if(!id || id==='home')return;
      const target=site.querySelector(`#${CSS.escape(id)}`);
      if(target){if(window.lenis?.scrollTo)window.lenis.scrollTo(target,{immediate:true,offset:-75});else window.scrollTo({top:scrollY+target.getBoundingClientRect().top-75,behavior:'instant'});}
    };
    requestAnimationFrame(showInitialSection);
    window.addEventListener('hashchange',showInitialSection);
    if(document.readyState==='complete')requestAnimationFrame(showInitialSection);
    else window.addEventListener('load',()=>requestAnimationFrame(showInitialSection),{once:true});
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',rebuild,{once:true});else rebuild();
})();

