const PHONE = "6281216849109";
const dictionary = {
en:{
navServices:"Services",navWork:"Portfolio",navAbout:"About",navPrice:"Pricing",navArticles:"Insights",navContact:"Let's talk ↗",
heroTitle:'Build your digital <span>presence.</span>',heroText:"Modern websites that help businesses look professional, present their services, and reach more customers.",heroCta:"Discuss your project ↗",heroMore:"Explore services ↓",heroNote:"Start with a simple idea. Grow in the digital world.",
introTitle:'Good ideas deserve the right <span>digital home.</span>',introText:"AZTRA helps businesses and individuals take their digital first steps with clear, functional websites designed around their goals.",
servicesTitle:'Services for your next<br><span>digital step.</span>',servicesText:"Choose a solution that fits your needs and stage of growth.",
s1:"Company Profile Website",sd1:"Present your business, services, and company information through a professional website.",s2:"Small Business Website",sd2:"Build an online presence for shops, local businesses, and growing brands.",s3:"Promotional Landing Page",sd3:"A focused page for product promotions, campaigns, events, or lead generation.",s4:"Online Store Website",sd4:"A digital product catalogue with a simpler ordering flow.",s5:"Portfolio Website",sd5:"Showcase your work, skills, and experience clearly.",s6:"UI/UX & Dashboard",sd6:"Interface designs and early prototypes to map the user experience.",discuss:"Discuss this service ↗",serviceFine:"Complex features, backends, databases, and custom integrations may require separate budgets and timelines.",
workTitle:'Concepts designed<br><span>for the real world.</span>',workText:"AZTRA's portfolio will grow as projects are completed and skills develop.",concept:"Practice concept — not a client project",portfolioNote:"These are demonstration design concepts, not client projects. Real work will be added as projects are completed.",
aboutTitle:'A small studio.<br><span>Big ambitions.</span>',aboutText1:"AZTRA is a digital brand built on learning, creativity, and a desire to help businesses build a better online presence.",aboutText2:"Founded by an Information Technology student in Surabaya, AZTRA develops website solutions step by step, starting with clear requirements and room to grow.",v1:"Understand needs",v2:"Design experience",v3:"Build solutions",
priceTitle:'Start with what <span>you need.</span>',priceText:"Suggested introductory rates; final pricing depends on project scope.",starterDesc:"For a personal profile or simple business website.",businessDesc:"For small businesses that need a more complete presence.",customDesc:"For custom needs that should be discussed first.",perProject:"Starting price / project",quote:"Let's discuss",quoteBased:"Quote based on scope",choose:"Choose package ↗",requestQuote:"Request a quote ↗",p1a:"One-page website",p1b:"Basic responsive design",p1c:"Information and contact",p1d:"WhatsApp button",p2a:"More complete one-page site",p2b:"Services and profile sections",p2c:"Gallery or portfolio",p2d:"Simple contact form",p3a:"Promotional landing page",p3b:"Simple product catalogue",p3c:"UI/UX prototype",p3d:"Agreed project scope",priceFine:"Prices exclude domain, hosting, third-party services, and custom backend features. Agree on timelines, revisions, and scope in writing before work begins.",
articleTitle:'Notes on the<br><span>digital world.</span>',soon:"FIRST ARTICLES COMING SOON",a1title:"When does a small business need its own website?",a1text:"An introduction to the benefits of websites for local businesses.",a2title:"Elements that make a website feel professional.",a2text:"Explore layout, typography, colour, and user experience.",a3title:"Preparing to build your first website.",a3text:"Content and information business owners should prepare.",planned:"Planned article",
faqTitle:'Questions we <span>often hear.</span>',faqIntro:"Still have questions? Contact AZTRA to discuss them.",q1:"Does AZTRA work with small businesses? +",ans1:"Yes. AZTRA initially focuses on small businesses, local businesses, individuals, and organisations with website needs that fit the agreed project scope.",q2:"Are domain and hosting included? +",ans2:"No. Domain, hosting, and paid third-party services are discussed separately before the project begins.",q3:"How long does a website take? +",ans3:"Timing depends on page count, content readiness, and features. A timeline is agreed after requirements are understood.",q4:"Can I request custom features? +",ans4:"We can discuss it. Login systems, databases, complex dashboards, payments, and custom integrations require separate scope and cost assessment.",
contactTitle:'Have an idea?<br><span>Let’s build it.</span>',contactText:"Describe your needs in the form. AZTRA will prepare a consultation message you can send through WhatsApp.",fName:"Your name",fBusiness:"Business / organisation name",fService:"Service needed",chooseService:"Select a service",fBudget:"Estimated budget",chooseBudget:"Select a budget",fDetails:"Tell us about your project",send:"Prepare WhatsApp message ↗",formHint:"This form opens WhatsApp with a prepared message. Your data is not sent to a website server.",backTop:"Back to top ↑",footerText:"Built through learning and creativity."
},
id:{}
};
const langSelect=document.querySelector("#lang");
function setLanguage(lang){
 document.documentElement.lang=lang;
 document.querySelectorAll("[data-i18n]").forEach(el=>{
  const key=el.dataset.i18n;
  if(!el.dataset.original)el.dataset.original=el.innerHTML;
  el.innerHTML=lang==="en"?(dictionary.en[key]??el.dataset.original):el.dataset.original;
 });
 const name=document.querySelector("#name"),business=document.querySelector("#business"),details=document.querySelector("#details");
 if(lang==="en"){name.placeholder="Full name";business.placeholder="Business name (optional)";details.placeholder="Website goals, features, or references...";}
 else{name.placeholder="Nama lengkap";business.placeholder="Nama bisnis (opsional)";details.placeholder="Tujuan website, fitur, atau referensi...";}
}
langSelect.addEventListener("change",e=>setLanguage(e.target.value));
document.querySelector(".menu").addEventListener("click",e=>{const links=document.querySelector(".links");const open=links.classList.toggle("open");e.currentTarget.setAttribute("aria-expanded",String(open));});
document.querySelectorAll(".links a").forEach(a=>a.addEventListener("click",()=>document.querySelector(".links").classList.remove("open")));
document.querySelectorAll("[data-service]").forEach(a=>a.addEventListener("click",()=>{const s=document.querySelector("#service");const match=[...s.options].find(o=>o.text.toLowerCase().includes(a.dataset.service.toLowerCase()));if(match)s.value=match.value;}));
document.querySelectorAll("[data-package]").forEach(a=>a.addEventListener("click",()=>{document.querySelector("#details").value=`Saya tertarik dengan paket ${a.dataset.package}. Mohon informasi lebih lanjut.`;}));
document.querySelector("#contact-form").addEventListener("submit",e=>{
 e.preventDefault();const d=new FormData(e.currentTarget);
 const msg=["Halo AZTRA, saya ingin konsultasi website.","",`Nama: ${d.get("name")}`,`Bisnis/organisasi: ${d.get("business")||"-"}`,`Layanan: ${d.get("service")}`,`Anggaran: ${d.get("budget")}`,`Kebutuhan: ${d.get("details")}`,"","Mohon informasi langkah selanjutnya. Terima kasih."].join("\n");
 document.querySelector("#status").textContent=document.documentElement.lang==="en"?"Opening WhatsApp with your prepared message…":"Membuka WhatsApp dengan pesan yang sudah disiapkan…";
 window.open(`https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`,"_blank","noopener,noreferrer");
});
const observer=("IntersectionObserver" in window)?new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("show");observer.unobserve(e.target)}}),{threshold:.1}):null;
document.querySelectorAll(".section,.service,.projects article,.price-card,.articles article").forEach(el=>{el.classList.add("reveal");if(observer)observer.observe(el);else el.classList.add("show")});
document.querySelector("#year").textContent=new Date().getFullYear();

// Portfolio request: fill the inquiry form with the selected concept.
document.querySelectorAll(".portfolio-request[data-request]").forEach((button) => {
  button.addEventListener("click", () => {
    const service = document.querySelector("#service");
    const details = document.querySelector("#details");
    const concept = button.dataset.request || "konsep website";

    if (service) {
      const customOption = Array.from(service.options).find((option) =>
        option.textContent.trim().toLowerCase() === "permintaan khusus / custom project"
      );
      service.value = customOption
        ? (customOption.value || customOption.textContent)
        : "Lainnya / konsultasi";
    }

    if (details) {
      details.value = `Saya tertarik dengan konsep ${concept}. Saya ingin konsultasi mengenai desain, fitur, dan harga website.`;
    }

    document.querySelector("#contact")?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
    document.querySelector("#name")?.focus({ preventScroll: true });
  });
});
