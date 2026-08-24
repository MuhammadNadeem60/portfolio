const email="cybersafenetworked@gmail.com";

document.addEventListener("mousemove",e=>{
 const g=document.querySelector(".cursor-glow"); if(g){g.style.left=e.clientX+"px";g.style.top=e.clientY+"px";}
});

const menu=document.getElementById("menuToggle"), nav=document.getElementById("navbar");
menu.addEventListener("click",()=>nav.classList.toggle("open"));
document.querySelectorAll(".nav-link").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));

const reveal=new IntersectionObserver(entries=>{
 entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")});
},{threshold:.1});
document.querySelectorAll(".reveal").forEach(x=>reveal.observe(x));

const skillObs=new IntersectionObserver(entries=>{
 entries.forEach(e=>{
  if(e.isIntersecting){
   e.target.querySelectorAll(".bar").forEach((bar,i)=>{
    bar.style.setProperty("--value",(bar.dataset.value||0)+"%");
    setTimeout(()=>bar.classList.add("animate"),i*120);
   });
   skillObs.unobserve(e.target);
  }
 });
},{threshold:.2});
const skills=document.getElementById("skills"); if(skills)skillObs.observe(skills);

const letters={
 recognition:{title:"Certificate of Recognition",sub:"Outstanding Contribution & Achievement",text:"This recognition is presented to Muhammad Faheem for dedication, contribution and demonstrated interest in cybersecurity, ethical hacking and secure technology."},
 appreciation:{title:"Certificate of Appreciation",sub:"For Valuable Effort & Commitment",text:"This certificate appreciates Muhammad Faheem for valuable effort, professionalism, continuous learning and commitment to cybersecurity and software engineering."},
 recommendation:{title:"Letter of Recommendation",sub:"Professional Recommendation",text:"Muhammad Faheem is recommended for cybersecurity, security analysis, penetration testing and related professional opportunities based on his learning, practical work and dedication."}
};

function openLetter(type){
 const d=letters[type];
 document.getElementById("modalContent").innerHTML=`<div class="certificate"><div class="cert-title">${d.title}</div><div class="cert-sub">${d.sub}</div><div class="cert-name">Muhammad Faheem</div><p>${d.text}</p><div class="seal">★</div></div>`;
 document.getElementById("letterModal").classList.add("show");
}
function closeLetter(){document.getElementById("letterModal").classList.remove("show")}
document.getElementById("letterModal").addEventListener("click",e=>{if(e.target.id==="letterModal")closeLetter()});
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeLetter()});

function downloadLetter(type){
 const d=letters[type];
 const text=`${d.title}\n\nMuhammad Nadeem\n\n${d.sub}\n\n${d.text}\n\nCybersecurity Portfolio`;
 const blob=new Blob([text],{type:"text/plain"}),url=URL.createObjectURL(blob),a=document.createElement("a");
 a.href=url;a.download=`Muhammad_Nadeem_${type}_letter.txt`;a.click();URL.revokeObjectURL(url);
}

document.getElementById("contactForm").addEventListener("submit",e=>{
 e.preventDefault();
 const n=document.getElementById("name").value.trim(), em=document.getElementById("email").value.trim(), s=document.getElementById("subject").value.trim(), m=document.getElementById("message").value.trim();
 const body=`Hello Muhammad Nadeem,\n\nMy name is ${n}.\nMy email: ${em}\n\n${m}\n\nRegards,\n${n}`;
 const gmailUrl=`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(s)}&body=${encodeURIComponent(body)}`;
 window.open(gmailUrl,"_blank","noopener,noreferrer");
});

const sections=document.querySelectorAll("section[id]"),links=document.querySelectorAll(".nav-link");
const activeObs=new IntersectionObserver(entries=>{
 entries.forEach(e=>{
  if(e.isIntersecting)links.forEach(l=>l.classList.toggle("active",l.getAttribute("href")==="#"+e.target.id));
 });
},{rootMargin:"-30% 0px -60% 0px"});
sections.forEach(s=>activeObs.observe(s));
