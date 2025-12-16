const table = document.querySelector('table');
const tbody = table.querySelector('tbody');
const tr = tbody.querySelectorAll('tr');

var cellsValue =
  [
    [ 1, 0, 0, 1, 1, 0, 1, 0, 0, 0 ],
    [ 1, 1, 1, 1, 0, 1, 1, 1, 1, 1 ],
    [ 0, 0, 1, 1, 1, 1, 0, 0, 0, 1 ],
    [ 1, 1, 0, 1, 0, 0, 1, 1, 1, 0 ],
    [ 1, 1, 1, 0, 0, 1, 1, 0, 1, 1 ],
    [ 0, 1, 0, 1, 0, 1, 0, 1, 1, 1 ],
    [ 0, 0, 1, 1, 1, 1, 1, 0, 1, 0 ],
    [ 0, 1, 1, 1, 0, 1, 1, 0, 0, 1 ],
    [ 1, 1, 1, 1, 1, 1, 0, 1, 1, 1 ],
    [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ]
  ];

// import exampleJsonFile from './data/table.json';
//   const fs = require('fs');
// const readFile = fs.readFileSync('table.json', 'utf8');
// console.log(readFile);
// fetch('table.json')
// // .then(response => response.json())
//  .then(jsonData => console.log(jsonData));
// console.log(jsonData);

// var cellsValue =

  let swHeader = new Swiper(".header-slider-inner", {
  
  slidesPerView: 1,
  loop: true,
  spaceBetween:  400,
   direction: "vertical",
      pagination: {
        el: ".header-slide-cont",
        clickable: true,
      },

      // autoplay: { delay: 2000, 
      // disableOnInteraction: true, 
      // reverseDirection: true,
      // }, 
      speed: 2000,

 });
  
 let swGallery = new Swiper(".gallery-slider", {
  // observer: true,
  //           observeParents: true,

  slidesPerView: 1,
  loop: false,
  spaceBetween:  100,


  navigation: {
        nextEl: ".gallery-r",
        prevEl: ".gallery-l",
      },

  pagination: {
      el: ".gallery-pag",
      clickable: true,
      },

  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },

breakpoints: {
    320: {
    slidesPerView: 0.5,

    freeMode: {
    enabled: true,},

    loop: true,   
    },

     600: {
      slidesPerView: 0.8,
    },

    700: {  slidesPerView: 1,
     freeMode: {
    enabled: false,},
      loop: false,
    },
  },




 });

 let swPatners = new Swiper(".partners-slider", {

    slidesPerView: 1,
  loop: false,
  spaceBetween:  300,
  navigation: {
        nextEl: ".partners-slider .gallery-r",
        prevEl: ".partners-slider .gallery-l",
      },

  pagination: {
      el: ".partners-slider .gallery-pag",
      clickable: true,
      },

  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },

  breakpoints: {
    320: {
    freeMode: {
    enabled: true,},
     },
  800: {
    freeMode: {
    enabled: false,},
     },
     },

 });

var swTostore = new Swiper(".tostore-slider", {

  slidesPerView: 1,
  loop: false,
  spaceBetween:  300,
  
 effect: 'flip',
  flipEffect: {
    slideShadows: false,
  },

  pagination: {
    el: ".tostore-number-sw",
    type: "fraction",
  
  renderFraction: function (currentClass, totalClass) 
  { return '<span class="tostore-curent-num">' + '0' + '</span>' +
   '<span class=" tostore-curent-num ' + currentClass + '"></span><br>' +
   '<span class=" tostore-all-num">' + '/0' + '</span>' +
   '<span class=" tostore-all-num ' + totalClass + '">' + '</span>'; }, 
  },

  navigation: {
        nextEl: ".tostore-slider .gallery-r",
        prevEl: ".tostore-slider .gallery-l",
      },

   keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },

 });

const cyrclesTostore = document.querySelectorAll('.tostore-cyr');

swTostore.on('slideChange', function () {
const slideItostore = swTostore.realIndex;
// console.log(slideItostore);
cyrclesTostore.forEach((item, index) => 
  { cyrclesTostore[index].classList.remove("cyrcle-act");  
   });
 cyrclesTostore[slideItostore].classList.add("cyrcle-act");
});

const fermsAll = document.getElementById('ferms-all');
const fermHide = document.querySelectorAll('.ferm-hide');
const textfermsAll = fermsAll.innerHTML;

fermsAll.addEventListener('click', (event) => {

fermsAll.classList.toggle("butt-act");

fermHide.forEach((item, index) => 
   {  

  if (fermsAll.classList.contains("butt-act")) {
        fermHide[index].classList.add("f-show");
        fermsAll.innerHTML = " &nbsp  &nbsp Свернуть";
   } else{
      fermHide[index].classList.remove("f-show");
        fermsAll.innerHTML = textfermsAll;
   }
   });

}); 



const anothAll = document.getElementById('anoth-all');
const anothHide = document.querySelectorAll('.anoth-hide');
const textanothAll =anothAll.innerHTML;

anothAll.addEventListener('click', (event) => {

anothAll.classList.toggle("anoth-b-act");

anothHide.forEach((item, index) => 
   {  

  if (anothAll.classList.contains("anoth-b-act")) {
        anothHide[index].classList.add("anoth-show");
        anothAll.innerHTML = " &nbsp  &nbsp Свернуть";
   } else{
      anothHide[index].classList.remove("anoth-show");
        anothAll.innerHTML = textanothAll;
   }
   });

}); 

const newsAll = document.getElementById('news-all');
const newsHide = document.querySelectorAll('.news-hide');
const textnewsAll =newsAll.innerHTML;

newsAll.addEventListener('click', (event) => {

newsAll.classList.toggle("news-b-act");

newsHide.forEach((item, index) => 
   {  

  if (newsAll.classList.contains("news-b-act")) {
        newsHide[index].classList.add("news-show");
        newsAll.innerHTML = " &nbsp  &nbsp Свернуть";
   } else{
      newsHide[index].classList.remove("news-show");
        newsAll.innerHTML = textnewsAll;
   }
   });

}); 


const charityAll = document.getElementById('charity-all');
const charityHide = document.querySelectorAll('.charity-hide');
const textcharityAll =charityAll.innerHTML;

charityAll.addEventListener('click', (event) => {

charityAll.classList.toggle("charity-b-act");

charityHide.forEach((item, index) => 
   {  

  if (charityAll.classList.contains("charity-b-act")) {
        charityHide[index].classList.add("charity-show");
        charityAll.innerHTML = " &nbsp  &nbsp Свернуть";
   } else{
      charityHide[index].classList.remove("charity-show");
        charityAll.innerHTML = textcharityAll;
   }
   });

});

const butMenuHeader = document.querySelector(".header-menu-cyr"); 
const span1 = document.querySelector('.span-1');
const span2 = document.querySelector('.span-2');
const span3 = document.querySelector('.span-3');
const hMenuPopup = document.getElementById('h-menu-popup');

butMenuHeader.addEventListener('click', (event) => {

if (!span1.classList.contains("span-1-anim")) {
hMenuPopup.show(); 
hMenuPopup.classList.add("h-popup-anim");
document.body.style.overflow = 'hidden';
}else{hMenuPopup.close();
hMenuPopup.classList.remove("h-popup-anim");
document.body.style.overflow = '';}

span1.classList.toggle("span-1-anim");
span2.classList.toggle("span-2-anim");
span3.classList.toggle("span-3-anim");
}); 


const menuItem = document.querySelectorAll('.header-menu-it');

menuItem.forEach((item, index) => {

let statItem = 1;
const trianItem = menuItem[index].querySelector(".triangle");

const subMenuItem  = menuItem[index].querySelector('.header-ul-submenu');

item.addEventListener('click', ()=>{ 
if (statItem==1) {
 
if (subMenuItem) {
   item.style.color = 'var(--green)';
  subMenuItem.style.display = 'block';}


  if (trianItem) {
  trianItem.style.transform = 'rotate(135deg)';
  trianItem.style.background = 'var(--green)';}
statItem--; }
else{
  
  if (subMenuItem) {
  item.style.color = '';
  subMenuItem.style.display = '';}

if (trianItem) {
  trianItem.style.transform = '';
  trianItem.style.background = '';}
statItem++;};

});

});


const cyr1 = document.getElementById('cyr-1');
const cyr2 = document.getElementById('cyr-2');
const cyr3 = document.getElementById('cyr-3');
const cyr4 = document.getElementById('cyr-4');
const cyr5 = document.getElementById('cyr-5');
const partCircle = document.querySelector('.part-cyrcle');


function someFunc() {
  var w = window.innerWidth;
  if (w < 1000) {
cyr1.setAttribute('cx', '91'); 
cyr1.setAttribute('cy', '930');
cyr2.setAttribute('cy', '782'); 
cyr3.setAttribute('cx', '2'); 
cyr3.setAttribute('cy', '588');
cyr4.setAttribute('cx', '28'); 
cyr4.setAttribute('cy', '407'); 
cyr5.setAttribute('cx', '91'); 
cyr5.setAttribute('cy', '259');

if (w < 500){
partCircle.setAttribute('viewBox', '-100 0 1100 1200'); 
partCircle.setAttribute('height', '105%'); 
}else {
partCircle.setAttribute('viewBox', '-100 0 724 1200'); 
partCircle.setAttribute('height', '1200'); 
}

  }
  else {
cyr1.setAttribute('cx', '2'); 
cyr1.setAttribute('cy', '568');
cyr2.setAttribute('cy', '407'); 
cyr3.setAttribute('cx', '91'); 
cyr3.setAttribute('cy', '259');
cyr4.setAttribute('cx', '190'); 
cyr4.setAttribute('cy', '130'); 
cyr5.setAttribute('cx', '301'); 
cyr5.setAttribute('cy', '33');
}
}

window.onload = someFunc();

window.addEventListener('resize', function() {
  someFunc();
});

/* for (let i = 0; i < tr.length; i++) {
  for (let j = 0; j < tr[i].children.length; j++) {
  	if (cellsValue[i][j]==false){
  		tr[i].children[j+1].classList.toggle('tool');
  	}
   }
 }*/


