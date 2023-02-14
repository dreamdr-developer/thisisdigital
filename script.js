function locoAndScrollInitialize() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
    tablet: { smooth: true },
    smartphone: { smooth: true }
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight
      };
    }
  });


  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}

locoAndScrollInitialize()

gsap.from("#img1",{
    opacity:0,
    duration:1.5,
    delay:0.4,
    y:60
})
gsap.from("#img2",{
    opacity:0,
    duration:1.5,
    delay:0.4,
    x:60
})
gsap.from("#img3",{
    opacity:0,
    duration:1.5,
    delay:0.4,
    y:-60
})
gsap.from("h1",{
    delay:0.4,
    y:2,
    opacity:0,
    duration:1,
})
gsap.from("h4",{
    // delay:0.1,
    opacity:0,
    duration:1,
})
gsap.from("#section h3,#section p,#section #about-us", {
  opacity:0,
  // duration:1,
stagger:0.6,
  scrollTrigger:{
    trigger:"#section h3",
    start:"top 70%",
    scroller:"#main",
    // markers:true
  }
})


function swiper(){
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2000,
      repeat:-1,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    grabCursor:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}
swiper();

gsap.from("#section >h3",{
  // y:2,
  // duration:2,
  // opacity:0,
  duration:1,
  opacity:0,
  scrollTigger:{
    trigger:"#section >h3",
    scroller:"main",
    start:"top 60%",
markers:true    

  }

})


