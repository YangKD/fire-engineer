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
  const lines=[
    '楊先生您好，我想詢問案件：',
    '身份：'+role,
    '服務需求：'+service
  ];
  if(location) lines.push('案件所在地：'+location);
  if(note) lines.push('案件簡述：'+note);
  lines.push('後續我可以再補圖面或現場照片，謝謝。');
  const text=lines.join('\n');
  const lineUrl='https://line.me/ti/p/~jonny100102111';
  window.open(lineUrl,'_blank','noopener');
  if(navigator.clipboard&&navigator.clipboard.writeText){
    navigator.clipboard.writeText(text)
      .then(()=>showToast('案件需求已複製，開啟 LINE 後貼上即可。'))
      .catch(()=>showToast('LINE 已開啟，可直接傳送案件資料。'));
  }else{
    showToast('LINE 已開啟，可直接傳送案件資料。');
  }
  return false;
}