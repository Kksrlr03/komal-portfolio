(() => {
  const applyContent = () => {
    const data = window.komalPortfolioContent;
    if (!data || document.documentElement.dataset.komalContentReady) return;
    document.documentElement.dataset.komalContentReady = 'true';
    const set = (selector, text, scope = document) => { const el = scope.querySelector(selector); if (el) el.textContent = text; };
    const links = {
      linkedin: 'https://www.linkedin.com/in/komal-sriram-lakshman-reddy-karri/',
      whatsapp: 'https://wa.me/918019480893?text=Hi%20Komal%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect.',
      resume: './assets/docs/resume.pdf'
    };
    document.title = 'Komal Sriram — AI Engineer in Progress';
    document.querySelectorAll('meta[name="description"],meta[property="og:description"],meta[name="twitter:description"]').forEach(el => el.content = 'Karri Komal Sriram Lakshman Reddy. M.Sc. Data Science & Artificial Intelligence candidate at BITS Pilani Digital. Projects, experience and a journey toward AI engineering.');
    document.querySelectorAll('meta[property="og:title"],meta[name="twitter:title"]').forEach(el => el.content = document.title);
    set('.home-title-w h1','Karri Komal Sriram Lakshman Reddy');
    set('.home-title-w h2','AI Engineer in Progress');
    set('.hero-next-reveal > span','AI ENGINEER IN PROGRESS');
    const heroTitle = document.querySelector('.hero-next-reveal strong');
    if(heroTitle) { heroTitle.innerHTML='BUILDING<br>TOMORROW.'; heroTitle.classList.add('portfolio-hero-title'); }
    set('.hero-next-reveal > span:last-child','DATA SCIENCE · ARTIFICIAL INTELLIGENCE');
    set('.hero-stage-index span','01 — KOMAL SRIRAM / AI IN PROGRESS');
    set('#about .text-eyebrow','M.Sc. DATA SCIENCE & AI / BITS PILANI DIGITAL');
    set('#about .text-impact-lg-mona','Building tomorrow through artificial intelligence.');

    const timeline = document.querySelector('.is-horizontal-track');
    const milestones = ['B.Sc. · Mathematics, Electronics & Computer Science','IELTS Academic · Overall Band 7','BITS Pilani Digital · M.Sc. Data Science & AI','Python · Current focus','Machine Learning · Building the foundation','Deep Learning · Planned','Computer Vision · Planned','LLMs & RAG · Planned','AI Agents · Planned','Open Source · Planned','Research & Knowledge Sharing · Planned','M.Sc. Graduation · Goal','AI Engineering · Career vision'];
    timeline?.querySelectorAll('.text-eyebrow').forEach((el,i)=>el.textContent = milestones[i % milestones.length]);
    timeline?.querySelectorAll('.horizontal-item-text').forEach((el,i)=>el.textContent = i ? 'A deliberate path from strong fundamentals to intelligent systems that solve real problems.' : 'My foundation in mathematics, electronics and computer science now leads into Data Science & AI at BITS Pilani Digital.');

    const split = document.querySelector('.is-otot-home');
    split?.querySelectorAll('h2').forEach((el,i)=>el.textContent = ['LEARN','BY BUILDING','AI','WITH PURPOSE'][i] || el.textContent);
    split?.querySelectorAll('p').forEach((el,i)=>el.textContent = i ? 'A clear foundation in Python, mathematics and machine learning. A long-term focus on useful intelligent systems.' : 'From local product discovery to automated content pipelines, I learn by solving practical problems.');

    const gallery = document.querySelector('.home-helmets');
    set('.title-para-w p','Two completed projects. Practical problems, thoughtful software and lessons that shape the next build.',gallery || document);
    const projects = [
      {title:'ProdLoca', stack:'REACT / FIREBASE / MAPBOX GL', description:'A location-aware application that connects people with products in nearby stores. An intuitive map turns local inventory into something easier to discover.', detail:'I built ProdLoca to reduce the need to visit multiple stores or rely on online marketplaces for local availability. The project developed my skills in frontend engineering, geolocation, real-time databases and user-focused design.'},
      {title:'Quote Terminals', stack:'OPENAI / HUGGING FACE / IFTTT', description:'An AI-powered workflow for generating, filtering and publishing motivational content. A repeatable pipeline that reduces the work behind consistent social posting.', detail:'This completed project explored prompt engineering, sentiment filtering, API integrations and automated publishing. It gave me practical experience with AI-assisted generation and autonomous content workflows.'}
    ];
    gallery?.querySelectorAll('.helmet-grid-item-w.w-dyn-item').forEach((card,i)=>{
      if (!projects[i]) return;
      const p = projects[i];
      set('h3',p.title,card); set('.date','COMPLETED',card);
      card.querySelector('img')?.setAttribute('alt',`Komal Sriram — ${p.title} project portrait`);
      const copy = document.createElement('div'); copy.className='portfolio-project-copy';
      const tag = document.createElement('span'); tag.className='portfolio-kicker'; tag.textContent=p.stack;
      const summary=document.createElement('p'); summary.textContent=p.description;
      const detail=document.createElement('p'); detail.className='portfolio-project-detail'; detail.textContent=p.detail;
      copy.append(tag,summary,detail); card.append(copy);
    });
    set('.is-lando-exe .text-eyebrow.large','THE PERSON BEHIND THE WORK');
    set('.is-lando-exe h2','Curiosity. Consistency. Purpose.');
    set('.is-lando-exe p','I’m Karri Komal Sriram Lakshman Reddy, an M.Sc. Data Science & Artificial Intelligence candidate at BITS Pilani Digital. My path spans mathematics, electronics, software, automation and customer experience. Today, I’m building the foundation to become an AI engineer who creates useful, responsible systems.');
    const collabs=document.querySelector('.is-home-collabs');
    const hs=collabs?.querySelectorAll('.title-headline-w h2'); if(hs?.[0])hs[0].textContent='Engineering'; if(hs?.[1])hs[1].textContent='Toolkit';
    set('.title-para-w p','Hands-on experience today. Stronger AI foundations in progress. A clear roadmap for what comes next.',collabs || document);
    collabs?.querySelectorAll('.marquee-advanced__item').forEach(el=>el.textContent='PYTHON · REACT · JAVASCRIPT · FIREBASE · GIT');
    set('.is-callout-socials h2','Let’s build something meaningful.');
    set('.callout-socials-intro-w .text-cta-short-intro','Open to internships, research, software engineering and AI conversations.');
    set('.footer-statement-w h2','The future is something we build.');
    set('.footer-legal-links-col .text-title-small-label','© 2026 Komal Sriram. All rights reserved.');
    const contactCTA=document.querySelector('.footer-bg-bottom-btn-w a'); if(contactCTA){contactCTA.href=links.whatsapp;set('.btn-text','Start a conversation',contactCTA);}
    const destinations=[['LinkedIn',links.linkedin],['WhatsApp',links.whatsapp],['View resume',links.resume]];
    const replaceLinks=(anchors)=>anchors.forEach((a,i)=>{if(i>=destinations.length){a.remove();return;}const[label,url]=destinations[i];a.href=url;a.target='_blank';a.rel='noopener noreferrer';a.setAttribute('aria-label',label);set('.btn-text',label,a);});
    replaceLinks([...document.querySelectorAll('.callout-socials-links-layout a')]);
    const footerCols=document.querySelectorAll('.footer-links-col'); if(footerCols[1])replaceLinks([...footerCols[1].querySelectorAll('.footer-links-layout a')]);
    document.querySelectorAll('a[href*="instagram.com/sriramkarri"],a[href*="github.com/sriramkarri"],a[href*="linkedin.com/in/sriramkarri"],a[href="mailto:hello@sriramkarri.com"]').forEach(a=>{a.href=links.linkedin;a.setAttribute('aria-label','LinkedIn');set('.btn-text','LinkedIn',a);});

    // Keep existing animated section wrappers, tracks and media untouched.
    // Expandable editorial content carries the complete source portfolio.
    const addCollection=(host,title,ids)=>{
      if(!host)return;
      const collection=document.createElement('div');collection.className='portfolio-content-collection';
      const heading=document.createElement('h3');heading.className='portfolio-collection-title';heading.textContent=title;collection.append(heading);
      ids.forEach(([id,label])=>{
        const source=data[id];if(!source)return;
        const details=document.createElement('details');details.className='portfolio-chapter';details.id=`portfolio-${id}`;
        const summary=document.createElement('summary');summary.textContent=label;details.append(summary);
        const body=document.createElement('div');body.className='portfolio-chapter-body';
        source.blocks.forEach((block,i)=>{if(i===0&&block.tag==='h3')return;const el=document.createElement(block.tag);el.textContent=block.text;body.append(el);});
        if(source.documents.length){const docs=document.createElement('div');docs.className='portfolio-document-links';source.documents.forEach(doc=>{const a=document.createElement('a');a.href=doc.url;a.textContent=doc.label+' ↗';a.target='_blank';a.rel='noopener noreferrer';docs.append(a);});body.append(docs);}
        details.append(body);collection.append(details);
      });host.append(collection);
    };
    addCollection(document.querySelector('.is-lando-exe > .c'),'Profile & perspective', [['about','My journey'],['philosophy','Working philosophy'],['career-vision','Career vision'],['why-hire-me','Core strengths'],['experience','Professional experience'],['languages','Languages']]);
    addCollection(gallery?.querySelector('.c'),'Inside the projects',[['projects','Project notes & future work']]);
    addCollection(collabs?.querySelector('.c'),'The foundation & the next step',[['tech-stack','Skills & technology'],['current-focus','Current focus'],['journey-tracker','Learning roadmap'],['goals','Long-term aspirations']]);
    addCollection(document.querySelector('.is-callout-socials > .c'),'Education & recognition',[['academic-docs','Academic records & transcripts'],['ielts','IELTS Academic'],['course-certs','Professional certifications'],['extra-curricular','Leadership & activities'],['contact','Opportunities & collaboration']]);
    document.querySelectorAll('.portfolio-chapter').forEach(detail=>detail.addEventListener('toggle',()=>window.ScrollTrigger?.refresh?.()));
  };
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',applyContent,{once:true});else applyContent();
})();
