const m=document.querySelector('.menu'),links=document.querySelector('.links');
if(m&&links){
  m.addEventListener('click',()=>links.classList.toggle('open'));
  document.querySelectorAll('.links a').forEach(a=>a.addEventListener('click',()=>links.classList.remove('open')));
}
function showToast(message){
  const t=document.getElementById('toast');
  if(!t)return;
  if(message)t.textContent=message;
  t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'),2200);
}
function copyLine(){
  const id='jonny100102111';
  if(navigator.clipboard&&navigator.clipboard.writeText){
    navigator.clipboard.writeText(id).then(()=>showToast('LINE ID 已複製：'+id));
  }else{
    showToast('LINE ID：'+id);
  }
}
function submitConsult(event){
  event.preventDefault();
  const role=document.getElementById('consultRole')?.value||'';
  const service=document.getElementById('consultService')?.value||'';
  const location=document.getElementById('consultLocation')?.value.trim()||'';
  const note=document.getElementById('consultNote')?.value.trim()||'';
  const lines=['楊先生您好，我想詢問案件：','身份：'+role,'服務需求：'+service];
  if(location) lines.push('案件所在地：'+location);
  if(note) lines.push('案件簡述：'+note);
  lines.push('後續我可以再補圖面或現場照片，謝謝。');
  const text=lines.join('\n');
  const lineUrl='https://line.me/ti/p/~jonny100102111';
  window.open(lineUrl,'_blank','noopener');
  if(navigator.clipboard&&navigator.clipboard.writeText){
    navigator.clipboard.writeText(text).then(()=>showToast('案件需求已複製，開啟 LINE 後貼上即可。')).catch(()=>showToast('LINE 已開啟，可直接傳送案件資料。'));
  }else{showToast('LINE 已開啟，可直接傳送案件資料。');}
  return false;
}

// Real project showcase: kept compact so the homepage stays focused.
(function addProjectShowcase(){
  const process=document.getElementById('process');
  if(!process||document.getElementById('projects'))return;
  if(!document.querySelector('link[href*="cases.css"]')){
    const css=document.createElement('link');css.rel='stylesheet';css.href='assets/cases.css?v=20261005';document.head.appendChild(css);
  }
  const section=document.createElement('section');
  section.className='homepage-projects';section.id='projects';
  section.innerHTML=`<div class="wrap"><div class="heading"><div><p class="section-no">REAL PROJECTS</p><h2>實際案例</h2></div><p>以實際案件照片呈現消防會勘、設備確認與現場測試；公開內容以場所類型匿名呈現。</p></div><div class="project-grid"><a class="project-card" href="cases/residential-emergency-light.html"><img src="assets/cases/residential-emergency-light.webp" alt="住宅場所緊急照明照度測試" loading="lazy"><div class="body"><small>住宅場所</small><h3>緊急照明照度測試</h3><p>消防會勘現場量測。</p></div></a><a class="project-card" href="cases/massage-detector.html"><img src="assets/cases/massage-detector-wiring.webp" alt="按摩場所探測器配線確認" loading="lazy"><div class="body"><small>按摩場所</small><h3>探測器外觀及配線確認</h3><p>設備與配線現況確認。</p></div></a><a class="project-card" href="cases/factory-fire-alarm.html"><img src="assets/cases/factory-fire-alarm-panel.webp" alt="特登工廠火警受信總機內部確認" loading="lazy"><div class="body"><small>特登工廠</small><h3>火警受信總機內部確認</h3><p>盤內設備與配線確認。</p></div></a><a class="project-card" href="cases/clinic-fire-inspection.html"><img src="assets/cases/clinic-pull-test.webp" alt="診所緩降機拉拔試驗" loading="lazy"><div class="body"><small>診所</small><h3>緩降機與排煙設備測試</h3><p>避難與排煙設備現場測試。</p></div></a></div><div class="projects-more"><a href="cases/">查看全部實際案例 →</a></div></div>`;
  process.insertAdjacentElement('afterend',section);
  const nav=document.querySelector('.links');
  const knowledge=nav?.querySelector('a[href="#knowledge"]');
  if(nav&&knowledge&&!nav.querySelector('a[href="#projects"]')){
    const a=document.createElement('a');a.href='#projects';a.textContent='實際案例';nav.insertBefore(a,knowledge);
    a.addEventListener('click',()=>nav.classList.remove('open'));
  }
})();