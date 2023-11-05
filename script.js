// var text = document.querySelector("#page6>h3");
//         var clutter = "";
//         text.textContent.split("").forEach(function(elem){
//             clutter += `<span>${elem}</span>`;
//         })
//         text.innerHTML = clutter;
//         document.querySelectorAll("#page6>h3 span").forEach
//         (function(value, index){
//             value.style.transform = `rotate(${index*18}deg)`;
//         })

//Example
// gsap.to("#center #arrow",{
//     y:20,
//     yoyo:"true",
//     repeat: "-1"
// })

//Example
// gsap.from("#abcd",{
//     onStart:function(){
//         $('#abcd').textillate({
//             in:{
//                 effect:'fadeInUp',
//                 callback:function(){
//                     $('#abcd').textillate('out')
//                 }
//             },
//             out:{effect:'fadeOutUp'}
//         });
//     }
//     // onUpdate:function(){

//     // }
// })

// gsap.from("#one",{
//     opacity: 0,
//     duration: 2,
//     // left
// })

// gsap.from("#two",{
//     opacity: 0,
//     scale: 1.2,
//     duration: 2,
//     delay:1
// })

var tl = gsap.timeline();

tl
  .from("#nav",{
    opacity:0,
    y:-30,
    duration: 2
  })

  .from("#text1>h1",{
    opacity:0,
    x:-80,
    duration: 1
  })

  .from("#text2>h1",{
    opacity:0,
    x:-80,
    duration: 1
  })
    
  .from(["#oval1","#oval2"],{
    opacity:0,
    duration: 3,
    scale:1.2
  })
   .to(["#one","#two"],{
    opacity:1,
    duration:1 
  }) 
   .from("#div1",{
    opacity:0,
    duration:1, 
    left:"0"
   })
   .from("#div2",{
    opacity:0,
    duration:1, 
    left:"0"
   })
   .from("#div3",{
    opacity:0,
    duration:1, 
    right:"0",
    delay:"-2"
   })
   .from("#div4",{
    opacity:0,
    duration:1, 
    right:"0",
    delay:"-1"
   })

gsap.from("#page2text",{
    opacity:0,
    duration:3,
    left:"0",
    // onStart:function(){
    //     $('#page2text>h1').textillate({
    //         in:{
    //             effect:'fadeInUp',
    //             callback:function(){
    //                 $('#page2text>h1').textillate('out')
    //             }
    //         },
    //         out:{effect:'fadeOutUp'}
    //     });
    // },

    scrollTrigger:{
        trigger:"#page2text",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end:"top 30%",
        scrub:5,
    }
})

gsap.from("#page2 .box1",{
  opacity:0,
  duration:2,
  top: "0",
  left: "0",

  scrollTrigger:{
      trigger:"#page2 .box1",
      scroller:"body",
      // markers:true,
      start:"top 60%",
      end:"top 40%",
      scrub:5,
  }
})

gsap.from("#page2 .box2",{
  opacity:0,
  duration:2,
  bottom: "20%",
  right: "0",

  scrollTrigger:{
      trigger:"#page2 .box2",
      scroller:"body",
      // markers:true,
      start:"top 90%",
      end:"top 60%",
      scrub:5,
  }
})

gsap.from("#page3>h1",{
  opacity:0,
  duration:2,
  onStart:function(){
      $('#page3>h1').textillate({
          in:{
              effect:'fadeInUp',
            }})
          },

  scrollTrigger:{
      trigger:"#page3>h1",
      scroller:"body",
      // markers:true,
      start:"top 80%",
      end:"top 60%",
      scrub:5,
  }
})

gsap.from(["#excel",".box3"],{
  opacity:0,
  duration:2,

  scrollTrigger:{
      trigger:"#page3>h1",
      scroller:"body",
      // markers:true,
      start:"top 10%",
      end:"top 0%",
      scrub:3,
  }
})

gsap.from("#page4text>h1",{
  opacity:0,
  duration:1,
  y:-80,

  scrollTrigger:{
      trigger:"#page4text>h1",
      scroller:"body",
      // markers:true,
      start:"top 80%",
      end:"top 20%",
      scrub:3,
  }
})

gsap.from("#page4 .hbox",{
  opacity:0,
  duration:1,

  scrollTrigger:{
      trigger:"#page4 .hbox",
      scroller:"body",
      // markers:true,
      start:"top 60%",
      end:"top 30%",
      scrub:3,
  },
  stagger:0.5
})

gsap.from("#page5text",{
  opacity:0,
  duration:3,
  left:"0",

  scrollTrigger:{
      trigger:"#page5text",
      scroller:"body",
      // markers:true,
      start:"top 80%",
      end:"top 30%",
      scrub:5,
  }
})

gsap.from([".box1111",".box1112"],{
  opacity:0,
  duration:2,

  scrollTrigger:{
      trigger:[".box1111","box1112"],
      scroller:"body",
      // markers:true,
      start:"top 85%",
      end:"top 40%",
      scrub:5,
  }
})

gsap.from("#center h1",{
  opacity:0,
  duration:2,
  left:"0",
  scrollTrigger:{
      trigger:"#center h1",
      scroller:"body",
      // markers:true,
      start:"top 85%",
      end:"top 40%",
      scrub:5,
  }
})

gsap.from("#center h2",{
  opacity:0,
  duration:2,
  left:"50%",
  scrollTrigger:{
      trigger:"#center h2",
      scroller:"body",
      // markers:true,
      start:"top 85%",
      end:"top 40%",
      scrub:5,
  }
})

gsap.from("#center p",{
  opacity:0,
  duration:2,

  scrollTrigger:{
      trigger:"#center p",
      scroller:"body",
      // markers:true,
      start:"top 85%",
      end:"top 40%",
      scrub:5,
  }
})

gsap.from("#p7center",{
  opacity:0,
  duration:2,
  scrollTrigger:{
      trigger:"#p7center",
      scroller:"body",
      // markers:true,
      start:"top 60%",
      end:"top 40%",
      scrub:5,
  }
})

gsap.from("#page7>h1",{
  opacity:0,
  duration:2,
  scrollTrigger:{
      trigger:"#page7>h1",
      scroller:"body",
      // markers:true,
      start:"top 50%",
      end:"top 20%",
      scrub:5,
  }
})

gsap.from("#p8left",{
  opacity:0,
  duration:1,
  x:-60,
  scrollTrigger:{
      trigger:"#p8left",
      scroller:"body",
      // markers:true,
      start:"top 100%",
      end:"top 70%",
      scrub:5,
  }
})

gsap.from("#p8right",{
  opacity:0,
  duration:1,
  x:60,
  scrollTrigger:{
      trigger:"#p8right",
      scroller:"body",
      // markers:true,
      start:"top 100%",
      end:"top 70%",
      scrub:5,
  }
})

// gsap.from(".p6text h5",{
//   opacity:0,
//   duration:1,
//   x:120,
//   scrollTrigger:{
//       trigger:".p6text h5",
//       scroller:"body",
//       // markers:true,
//       start:"top 30%",
//       end:"top 10%",
//       scrub:5,
//   }
// })


var a = document.querySelector("#center1 h3").textContent.split("");
var clutter = "";
a.forEach(function(elem){
  clutter += `<span>${elem}</span>`
})

document.querySelector("#center1 h3").innerHTML = clutter;

document.querySelectorAll("h3>span").forEach(function(elem,index){
  elem.style.transform = `rotate(${index * 18}deg)`;
})