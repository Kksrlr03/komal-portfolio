(() => {
  const loader=document.getElementById('site-loader');
  if(!loader)return;
  const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
  const started=performance.now(),minimum=reduced?400:2400;
  const canvas=loader.querySelector('canvas'),scene=loader.querySelector('.loader-scene');
  const percent=loader.querySelector('.loader-percent');
  let progress=0,target=0,done=false,finished=false,frame=0,render=null;
  const page=[...document.querySelectorAll('header,main')];page.forEach(el=>el.inert=true);
  const fallback=()=>{scene.classList.add('is-fallback');canvas.style.opacity='0';};
  try {
    const gl=canvas.getContext('webgl',{alpha:true,antialias:true,premultipliedAlpha:false});
    if(!gl)throw new Error('WebGL unavailable');
    const shader=(type,source)=>{const s=gl.createShader(type);gl.shaderSource(s,source);gl.compileShader(s);if(!gl.getShaderParameter(s,gl.COMPILE_STATUS))throw new Error(gl.getShaderInfoLog(s));return s;};
    const program=gl.createProgram();
    gl.attachShader(program,shader(gl.VERTEX_SHADER,`
      attribute vec3 position;attribute vec2 texcoord;uniform float angle;uniform float tilt;uniform float aspect;varying vec2 uv;varying float depth;varying vec3 normal;
      void main(){vec3 p=position;float c=cos(angle),s=sin(angle);p=vec3(c*p.x+s*p.z,p.y,-s*p.x+c*p.z);c=cos(tilt);s=sin(tilt);p=vec3(p.x,c*p.y-s*p.z,s*p.y+c*p.z);float perspective=2.8/(2.8-p.z);gl_Position=vec4(p.x*perspective/aspect,p.y*perspective,p.z*.15,1.0);uv=texcoord;depth=position.z;normal=normalize(vec3(position.x*.55+sin(angle)*.7,position.y*.35,1.));}
    `));
    gl.attachShader(program,shader(gl.FRAGMENT_SHADER,`
      precision mediump float;uniform sampler2D portrait;uniform float time;varying vec2 uv;varying float depth;varying vec3 normal;
      void main(){vec4 color=texture2D(portrait,uv);float mono=dot(color.rgb,vec3(.299,.587,.114));float sheen=.09*max(0.,1.-abs(uv.x-.52-.18*sin(time*2.))*10.);float light=.72+.35*max(0.,dot(normalize(normal),normalize(vec3(sin(time*1.4),.3,1.))));gl_FragColor=vec4(vec3(mono*light+sheen),color.a);}
    `));
    gl.linkProgram(program);if(!gl.getProgramParameter(program,gl.LINK_STATUS))throw new Error('Loader program failed');gl.useProgram(program);
    const vertices=[],indices=[],n=84;
    for(let y=0;y<=n;y++)for(let x=0;x<=n;x++){
      const u=x/n,v=y/n,px=(u-.5)*1.55,py=(.5-v)*1.65;
      const dome=.24*Math.max(0,1-((u-.5)/.44)**2-((v-.46)/.49)**2);
      const nose=.055*Math.exp(-(((u-.55)/.065)**2)-((v-.55)/.16)**2);
      vertices.push(px,py,dome+nose,u,1.-v);
      if(x<n&&y<n){const a=y*(n+1)+x;indices.push(a,a+1,a+n+1,a+1,a+n+2,a+n+1);}
    }
    const buffer=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,buffer);gl.bufferData(gl.ARRAY_BUFFER,new Float32Array(vertices),gl.STATIC_DRAW);
    const pos=gl.getAttribLocation(program,'position'),uv=gl.getAttribLocation(program,'texcoord');gl.enableVertexAttribArray(pos);gl.vertexAttribPointer(pos,3,gl.FLOAT,false,20,0);gl.enableVertexAttribArray(uv);gl.vertexAttribPointer(uv,2,gl.FLOAT,false,20,12);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,gl.createBuffer());gl.bufferData(gl.ELEMENT_ARRAY_BUFFER,new Uint16Array(indices),gl.STATIC_DRAW);
    const texture=gl.createTexture();gl.bindTexture(gl.TEXTURE_2D,texture);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.LINEAR);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.LINEAR);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE);
    gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,1,1,0,gl.RGBA,gl.UNSIGNED_BYTE,new Uint8Array([0,0,0,0]));
    const image=new Image();image.onload=()=>{try{gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL,true);gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,gl.RGBA,gl.UNSIGNED_BYTE,image);}catch{fallback();}};image.onerror=fallback;image.src='assets/sriram-loader-cartoon.png';
    gl.enable(gl.BLEND);gl.blendFunc(gl.SRC_ALPHA,gl.ONE_MINUS_SRC_ALPHA);
    const angle=gl.getUniformLocation(program,'angle'),tilt=gl.getUniformLocation(program,'tilt'),aspect=gl.getUniformLocation(program,'aspect'),time=gl.getUniformLocation(program,'time');
    render=(now)=>{const size=Math.round(Math.min(innerWidth*.8,innerHeight*.64,640)*Math.min(devicePixelRatio||1,1.75));if(canvas.width!==size){canvas.width=canvas.height=size;gl.viewport(0,0,size,size);}gl.clear(gl.COLOR_BUFFER_BIT);gl.uniform1f(angle,reduced?0:Math.sin((now-started)*.0028)*.09);gl.uniform1f(tilt,reduced?0:Math.sin((now-started)*.0021)*.045);gl.uniform1f(aspect,1);gl.uniform1f(time,now*.001);gl.drawElements(gl.TRIANGLES,indices.length,gl.UNSIGNED_SHORT,0);};
    loader.addEventListener('transitionend',()=>{gl.getExtension('WEBGL_lose_context')?.loseContext();},{once:true});
  } catch { fallback(); }
  const finish=()=>{if(finished)return;finished=true;document.documentElement.classList.remove('is-loading');page.forEach(el=>el.inert=false);loader.classList.add('is-complete');cancelAnimationFrame(frame);setTimeout(()=>loader.remove(),750);};
  const draw=now=>{progress+=(target-progress)*.09;const elapsed=now-started;if(done&&elapsed>=minimum){target=100;if(progress>99){progress=100;percent.textContent='100%';loader.style.setProperty('--load-progress','1');finish();return;}}percent.textContent=Math.floor(progress)+'%';loader.style.setProperty('--load-progress',String(progress/100));render?.(now);frame=requestAnimationFrame(draw);};
  const assets=['sriram-loader-cartoon.png','sriram-with-glasses-cutout.png','sriram-smoke-floor.png','sriram-workbench.png','sriram-prototype-presentation.png','sriram-blueprint-focused.png','sriram-ipad.png'];
  let loaded=0;
  Promise.allSettled(assets.map(name=>new Promise(resolve=>{const image=new Image();image.onload=image.onerror=()=>{target=++loaded/assets.length*95;resolve();};image.src='assets/'+name;}))).then(()=>{done=true;});
  setTimeout(()=>{done=true;target=100;},4000);
  setTimeout(finish,5500);
  frame=requestAnimationFrame(draw);
})();
