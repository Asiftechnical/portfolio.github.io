

// scroll navbab
let navbar=document.querySelector(".Navbar");
let light=document.querySelector(".light");
let logo=document.querySelector(".logo");
window.addEventListener("scroll",function(){
	let scroll=window.scrollY;
	if(scroll >= 2){
      navbar.classList.add('active_1');
      light.classList.add('none');
      logo.classList.add('bnone');
	}
    else{
      navbar.classList.remove('active_1');
       light.classList.remove('none');
       logo.classList.remove('bnone');
    }
  })
//higlighted menu
let section=document.querySelectorAll("section[id]");
window.addEventListener("scroll", () => {
    const pageY=scroll.pageYOffset;
    section.forEach((current) =>{
      const sectionHeight=current.offsetHeight;
      const sectionTop=current.offsetTop-200;
      const sectionId=current.getAttribute('id');
      if(scrollY > sectionTop && scrollY < sectionTop + sectionHeight){
        document.querySelector('li a[href*="' + sectionId + '"]').classList.add('green');
      }
      else{
        document.querySelector('li a[href*="' + sectionId + '"]').classList.remove('green');
      }
    })
})

//typed
var typed = new Typed('.typed', {
    strings: ['Designer', 'Photographer',],
    typeSpeed: 50,
    backSpeed: 50,
    cursorChar: '',
    loop: true
  });
//counterUp

	$('.counter').counterUp({
    delay: 10,
    time: 1000
});
  //filter gallery
   //cursore
   $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:true,
    responsive:{
        0:{
            items:1
        },
        700:{
            items:1
        },
        1000:{
            items:2
        }
    }
})
//lightbox


let container=document.querySelector('.portfolio-filter'),
filterbtn=container.children,
totalfilterbtn=filterbtn.length,
portfolioitem=document.querySelectorAll('.content-inner'),
totalportfolioItem=portfolioitem.length;


  for(let i=0; i<totalfilterbtn; i++){
    filterbtn[i].addEventListener('click',function(){
      container.querySelector('.active2').classList.remove('active2');
      this.classList.add('active2');

      let filtervalue=this.getAttribute('data-filter');
      for(let k=0; k<totalportfolioItem; k++){
        if(filtervalue === portfolioitem[k].getAttribute('data-category')){
            portfolioitem[k].classList.remove('hide');
            portfolioitem[k].classList.add('show');
        }
        else{
            portfolioitem[k].classList.remove('show');
            portfolioitem[k].classList.add('hide');

        }
        if(filtervalue ==="all"){
           portfolioitem[k].classList.remove('hide');
            portfolioitem[k].classList.add('show');
        }
      }
    })
  }
    const lightbox=document.querySelector('.lightbox'),
          lightboximg=lightbox.querySelector('.lightbox-content img'),
          lightboxclose=lightbox.querySelector('.lightbox-close');
    let itemIndex=0;
    for(let i=0; i<totalportfolioItem; i++){
       portfolioitem[i].addEventListener('click',function(){
        itemIndex=i;
        changeItem();
        toggle();
       })
    }
    function nextitem(){
      if(itemIndex === totalportfolioItem-1){
        itemIndex=0;
      }
      else{
         itemIndex++;
      }
      changeItem()
      
    }
   function preitem(){
      if(itemIndex === 0){
        itemIndex = totalportfolioItem-1
      }
      else{
         itemIndex--;
      }
      changeItem()
      
    }
    function toggle(){
      lightbox.classList.toggle('open');
    }
    function changeItem(){
      imgsrc=portfolioitem[itemIndex].querySelector('.single-content img').getAttribute('src');
      lightboximg.src=imgsrc;     
    }
   lightboxclose.addEventListener('click',function(){
   lightbox.classList.toggle('open');

   })
   lightbox.addEventListener('click',function(event){
    event.target.classList.toggle('open')
   })
    const navtoggle=document.querySelector('.nav-toggle');
  const nav=document.querySelector(".nav"),
        nave=nav.querySelector("ul").children,
        navggation=nave.length;
        console.log(navggation);

        for(let i=0; i<navggation; i++){
          nave[i].addEventListener("click",function(){
              fun()
          })
        }




  
  navtoggle.addEventListener("click",fun);
  function fun(){
 navtoggle.classList.toggle("active_4");
   nav.classList.toggle("open");
   if(nav.classList.contains("open")){
    nav.style.maxHeight=nav.scrollHeight +"px";
   }
   else{
    nav.removeAttribute("style");
   }};

  
