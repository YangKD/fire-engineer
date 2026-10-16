(function(){
  const MEASUREMENT_ID='G-K3ZCRFM4BM';

  window.dataLayer=window.dataLayer||[];
  window.gtag=window.gtag||function(){window.dataLayer.push(arguments);};
  window.gtag('js',new Date());
  window.gtag('config',MEASUREMENT_ID,{send_page_view:true});

  const tag=document.createElement('script');
  tag.async=true;
  tag.src='https://www.googletagmanager.com/gtag/js?id='+encodeURIComponent(MEASUREMENT_ID);
  document.head.appendChild(tag);

  function send(name,params){
    window.gtag('event',name,Object.assign({page_path:location.pathname},params||{}));
  }

  function placement(el){
    if(el.closest('header'))return 'header';
    if(el.closest('footer'))return 'footer';
    if(el.closest('.cta-box,.service-cta,.actions,.profile-hero-actions,.profile-final-cta'))return 'cta';
    if(el.closest('.contact,.contact-list,.profile-contact-grid,.profile-contact-section'))return 'contact_section';
    return 'page';
  }

  document.addEventListener('click',function(event){
    const a=event.target.closest('a[href]');
    if(!a)return;
    const href=(a.getAttribute('href')||'').trim();
    const where=placement(a);

    if(href.startsWith('tel:')){
      send('contact_click',{contact_method:'phone',placement:where});
      return;
    }
    if(href.startsWith('mailto:')){
      send('contact_click',{contact_method:'email',placement:where});
      return;
    }
    if(/line\.me\//i.test(href)){
      send('contact_click',{contact_method:'line',placement:where});
      return;
    }
    if(/profile\/card\.html/i.test(href)){
      send('business_card_click',{placement:where});
      return;
    }
    if(/linkedin\.com\//i.test(href)){
      send('outbound_profile_click',{network:'linkedin',placement:where});
    }
  },true);

  document.addEventListener('submit',function(event){
    const form=event.target;
    if(!form.matches||!form.matches('.consult-form'))return;
    const role=document.getElementById('consultRole')?.value||'not_selected';
    const service=document.getElementById('consultService')?.value||'not_selected';
    const locationProvided=Boolean(document.getElementById('consultLocation')?.value.trim());
    const noteProvided=Boolean(document.getElementById('consultNote')?.value.trim());
    send('generate_lead',{
      lead_source:'quick_consult',
      user_role:role,
      service_interest:service,
      location_provided:locationProvided,
      note_provided:noteProvided
    });
  },true);

  window.addEventListener('DOMContentLoaded',function(){
    const path=location.pathname;
    if(path.includes('/articles/')){
      send('article_view',{article_slug:path.split('/').pop()||''});
    }else if(path.includes('/services/')){
      send('service_view',{service_slug:path.split('/').pop()||''});
    }else if(path.endsWith('/profile/card.html')){
      send('business_card_view');
    }else if(path.endsWith('/profile/yang-kaidi.html')){
      send('profile_view');
    }
  });
})();
