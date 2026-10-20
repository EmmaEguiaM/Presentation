/* Ford interview presentation. Vanilla JS, no dependencies. */
(() => {
  'use strict';

  // Speaker notes, one entry per slide (about 130 words per minute). Target seconds live in each slide's data-time.
  const NOTES = [
    "Hello, my name is José Emmanuel Eguía Muñetón, and I'm studying Mechatronics Engineering. During my studies, I developed a strong interest in manufacturing and mechanical design. That is why I decided to complement my engineering education with a specialization in Project Management. My goal is to combine technical knowledge with planning and organization, so I can build a more complete professional profile.",
    "One reason I'm very interested in this position is that I have already worked with ideas close to Bill of Materials and prototype development. At university, I took part in an engineering project developed entirely in SolidWorks. We designed the prototype digitally, identified its components, and estimated the cost to manufacture it. Because it was an academic project, budget control was very important. We had to think not only about whether the design would work, but also whether it could be produced within our budget. This taught me why it matters to organize component information and keep costs in mind. I also started a small 3D printing business, where materials, production costs, and pricing are part of my daily decisions. I believe these experiences give me a good foundation to learn BOM management in the automotive industry.",
    "Ford has been part of my family story for many years. My grandfather was passionate about Ford vehicles. Two of his favorites were a 1939 Ford and a Grand Marquis, both with V8 engines. He loved sharing stories about his cars, and listening to him slowly sparked my interest in the automotive industry. Over time, that interest became one of the reasons I chose engineering. Today, my motivation goes beyond that family connection. I see Ford as a place where I can apply my knowledge, learn from experienced professionals, and keep growing. My family story introduced me to Ford, but my professional goals motivate me to become part of it.",
    "Outside university, I enjoy activities that let me be creative and take a break from my routine. One is 3D printing. With my 3D modeling experience, I can turn digital ideas into physical objects, and I really enjoy that. Another hobby is cycling. I don't practice it competitively, but I like spending time outdoors, exploring new places, and seeing the world from a different perspective. Both are an important part of my personal life.",
    "I believe I can bring a mix of technical knowledge, organization, and teamwork. In my academic projects, I learned how important it is to keep technical information clear, structured, and easy to understand. Traceability matters too, because knowing where information comes from helps teams make better decisions. I developed teamwork through university projects and previous jobs, and I value different perspectives because they help us understand a problem before solving it. I'm excited to bring these strengths to Ford while I keep learning and growing. Thank you for your time."
  ];

  const $ = id => document.getElementById(id);
  const stage = $('stage'), count = $('count'), bar = $('bar'), prev = $('prev'), next = $('next'),
        fs = $('fs'), notes = $('notes'), nmeta = $('nmeta'), ntext = $('ntext');
  const slides = Array.from(document.querySelectorAll('.slide'));
  const pad = n => String(n).padStart(2, '0');
  let cur = 0;

  // Scale the 1920x1080 canvas to fit the window while keeping 16:9
  function fit() {
    const s = Math.min(window.innerWidth / 1920, window.innerHeight / 1080);
    stage.style.transform = 'translate(-50%,-50%) scale(' + s + ')';
  }

  function show(n) {
    cur = Math.max(0, Math.min(slides.length - 1, n));
    slides.forEach((el, i) => {
      el.classList.toggle('active', i === cur);
      el.classList.toggle('past', i < cur);
      el.setAttribute('aria-hidden', String(i !== cur));
    });
    stage.dataset.theme = slides[cur].classList.contains('light') ? 'light' : 'dark';
    count.textContent = pad(cur + 1) + ' / ' + pad(slides.length);
    bar.style.width = ((cur + 1) / slides.length * 100) + '%';
    prev.disabled = cur === 0;
    next.disabled = cur === slides.length - 1;
    nmeta.textContent = 'Slide ' + (cur + 1) + ' | target ' + slides[cur].dataset.time + ' s';
    ntext.textContent = NOTES[cur];
  }

  function toggleFullscreen() {
    if (document.fullscreenElement) document.exitFullscreen();
    else if (document.documentElement.requestFullscreen) document.documentElement.requestFullscreen().catch(() => {});
  }

  document.addEventListener('keydown', e => {
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    const k = e.key;
    let handled = true;
    if (k === 'ArrowRight' || k === ' ' || k === 'PageDown') show(cur + 1);
    else if (k === 'ArrowLeft' || k === 'PageUp') show(cur - 1);
    else if (k === 'Home') show(0);
    else if (k === 'End') show(slides.length - 1);
    else if (k === 'f' || k === 'F') toggleFullscreen();
    else if (k === 'n' || k === 'N') notes.hidden = !notes.hidden;
    else if (k === 'Escape') { handled = false; if (document.fullscreenElement) document.exitFullscreen(); }
    else handled = false;
    if (handled) e.preventDefault();
  });

  prev.addEventListener('click', e => { show(cur - 1); e.currentTarget.blur(); });
  next.addEventListener('click', e => { show(cur + 1); e.currentTarget.blur(); });
  fs.addEventListener('click', e => { toggleFullscreen(); e.currentTarget.blur(); });
  window.addEventListener('resize', fit);

  // Images: show the placeholder until the file exists; never show a broken-image icon
  document.querySelectorAll('.ph').forEach(box => {
    const img = box.querySelector('img');
    if (!img) return;
    const ok = () => box.classList.add('loaded');
    const bad = () => box.classList.remove('loaded');
    img.addEventListener('load', ok);
    img.addEventListener('error', bad);
    if (img.complete) (img.naturalWidth ? ok : bad)();
  });

  fit();
  show(0);
})();
