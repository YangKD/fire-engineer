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
  if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(id).then(()=>showToast('LINE ID 已複製：'+id));}
  else{showToast('LINE ID：'+id);}
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
  window.open('https://line.me/ti/p/~jonny100102111','_blank','noopener');
  if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(text).then(()=>showToast('案件需求已複製，開啟 LINE 後貼上即可。')).catch(()=>showToast('LINE 已開啟，可直接傳送案件資料。'));}
  else{showToast('LINE 已開啟，可直接傳送案件資料。');}
  return false;
}

(function restoreKnowledgeLayout(){
  const section=document.getElementById('knowledge');
  if(!section)return;
  section.className='cases knowledge knowledge-classic';
  section.innerHTML=`<div class="wrap">
    <div class="heading"><div><p class="section-no">KNOWLEDGE</p><h2>消防知識分享</h2></div><p>用實務角度整理消防、公安與室內裝修常見問題，讓業主、設計師與工程夥伴更快掌握案件重點。</p></div>
    <div class="case-grid knowledge-grid">
      <a class="case knowledge-card c1" href="articles/interior-fire-checklist.html">
        <div class="case-art"><span>消防 × 室裝</span><b>室內裝修前，<br>消防要先確認什麼？</b></div>
        <div class="case-info"><small>FIRE × INTERIOR</small><h3>裝修前的消防檢查重點</h3><p>先確認用途、圖面、設備與現場條件，降低後續修改與工期風險。</p><strong>閱讀文章 →</strong></div>
      </a>
      <a class="case knowledge-card c2" href="articles/fire-vs-public-safety.html">
        <div class="case-art"><span>消防 × 公安</span><b>消防檢修申報<br>與公安申報差在哪？</b></div>
        <div class="case-info"><small>FIRE & BUILDING SAFETY</small><h3>一次看懂兩種申報</h3><p>從檢查目的、對象與實務情境，快速掌握兩者差異與配合重點。</p><strong>閱讀文章 →</strong></div>
      </a>
      <a class="case knowledge-card c3" href="articles/fire-inspection-frequency.html">
        <div class="case-art"><span>消防檢修申報</span><b>各類場所消防安全<br>檢修申報時間與頻率</b></div>
        <div class="case-info"><small>FIRE INSPECTION</small><h3>申報期限一次看懂</h3><p>依場所用途分類整理半年一次或每年一次的檢修頻率，以及各類場所申報月份。</p><strong>閱讀文章 →</strong></div>
      </a>
    </div>
  </div>`;
  if(!document.getElementById('knowledge-classic-style')){
    const s=document.createElement('style');
    s.id='knowledge-classic-style';
    s.textContent=`
      #knowledge.knowledge-classic{padding:88px 0;background:#f6f4ef}
      #knowledge .case-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}
      #knowledge .knowledge-card{display:block;background:#fff;color:#1d2221;text-decoration:none;border-radius:18px;overflow:hidden;box-shadow:0 8px 24px rgba(16,22,18,.05);transition:.22s}
      #knowledge .knowledge-card:hover{transform:translateY(-4px);box-shadow:0 18px 38px rgba(16,22,18,.10)}
      #knowledge .case-art{height:290px;padding:26px;position:relative;overflow:hidden;background:#d9ddd8}
      #knowledge .case-art:before,#knowledge .case-art:after{content:"";position:absolute;border:1px solid rgba(29,34,33,.35);border-radius:50%;width:260px;height:260px;right:-60px;bottom:-60px}
      #knowledge .case-art:after{width:160px;height:160px;right:-10px;bottom:-10px}
      #knowledge .case-art span{font-size:9px;letter-spacing:2px}
      #knowledge .case-art b{position:absolute;left:26px;bottom:28px;font-size:28px;line-height:1.4;z-index:2}
      #knowledge .c2 .case-art{background:#c4d84a}
      #knowledge .c3 .case-art{background:#2a302e;color:#fff}
      #knowledge .case-info{padding:24px;text-align:center}
      #knowledge .case-info small{color:#8e9e12;font-weight:800;letter-spacing:1px}
      #knowledge .case-info h3{margin:6px 0 8px}
      #knowledge .case-info p{font-size:12px;color:#747a75;margin:0}
      #knowledge .case-info strong{display:block;margin-top:16px;font-size:12px}
      @media(max-width:820px){#knowledge .case-grid{grid-template-columns:1fr}#knowledge .case-art{height:260px}}
    `;
    document.head.appendChild(s);
  }
})();