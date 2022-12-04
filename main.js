// let Textcontent='I’m mahmoud';
// let Text=document.getElementById('text-write');
// let i=0;
// let control=setInterval(()=>{
//     Text.textContent+=Textcontent[i];
//     i++;
//     if(i>=Textcontent.length){
//       clearInterval(control);  
//     }
// },250)

let section=document.querySelector('.skill-1')
let Allinput=document.querySelectorAll('.persentage .per-1')

window.onscroll=()=>{
  if(window.scrollY >= section.offsetTop){
    Allinput.forEach((el)=>{
      el.style.width=el.dataset.width;
    })
  }
}

let Allimages=document.querySelectorAll('.small-box .image');
let MainImage=document.getElementById('image-1')
Allimages.forEach((e)=>{
  e.addEventListener('click',(el)=>{
    MainImage.src=el.currentTarget.children[0].src;
  })
})

let scroll_up = document.getElementById("scroll-up");
window.onscroll= ()=>{
      if (window.scrollY >= 480) {
        scroll_up.style.display = "block";
      } else {
        scroll_up.style.display = "none";
      }
}
scroll_up.addEventListener("click", () => {
  window.scroll(0, 0);
})


const moonIcon=document.getElementById('moon-icon');
moonIcon.addEventListener("click", function () {
  document.body.classList.toggle('dark-mode');
});

let bar_icon=document.getElementById('bar-icon');
let menue=document.getElementById('menue');
bar_icon.onclick = ()=>{
  menue.classList.toggle('show-menue')
}
// for swiper
let swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup:1,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
  el: ".swiper-pagination",
  clickable: true,
  },
  navigation: {
  nextEl: ".swiper-button-next",
  prevEl: ".swiper-button-prev",
  },
});
