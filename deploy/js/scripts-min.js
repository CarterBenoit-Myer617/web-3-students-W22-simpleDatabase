!function(){"use strict";let e=[{title:"Turtles",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sagittis maximus arcu mattis fringilla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam interdum eleifend commodo. Morbi pretium egestas tincidunt. Nunc porta risus vitae nunc facilisis consequat. Integer justo ipsum, lacinia non vestibulum vel, tincidunt ut augue. Nullam elementum nunc a ultricies viverra. Duis malesuada massa eros, a euismod mauris bibendum non. Curabitur tellus erat, posuere ac leo ac, pellentesque consectetur turpis. Mauris in blandit nibh, sit amet condimentum eros. Mauris ultrices orci a ipsum hendrerit efficitur. Nunc tempor nulla dui, nec cursus urna dictum at.",images:["./img/projects/turtles/turtle-1.jpg","./img/projects/turtles/turtle-2.jpg"]},{title:"Cows",description:"Ut id dui sed sapien sagittis commodo. Ut semper facilisis arcu eu pretium. Vivamus sit amet pharetra erat. Curabitur a sem sed dui accumsan tincidunt. Aliquam felis mi, eleifend at urna vel, laoreet malesuada risus. Morbi pellentesque fringilla purus eu rutrum. Nullam convallis aliquam risus. Donec ex augue, semper et felis vel, tempor posuere erat.",images:["./img/projects/cows/duke.png","./img/projects/cows/art.png"]},{title:"Zoo Animals",description:"Duis ultricies feugiat erat eget tempor. Vestibulum bibendum est eu posuere suscipit. Pellentesque tincidunt sapien vitae elit vulputate vestibulum. Proin vel molestie ex. Ut vehicula nibh eu laoreet commodo. Aenean volutpat, nibh in faucibus semper, ipsum est feugiat ex, in volutpat sapien lacus ac massa. Vivamus vel nisi et sapien ullamcorper luctus sit amet sed magna. Sed porttitor sem id eros rhoncus aliquam. Phasellus dapibus, purus a consequat venenatis, nunc diam aliquam tellus, eget congue ante risus a augue. Morbi ut massa ut turpis consequat tincidunt.",images:["./img/projects/zoo/zoo-1.jpg","./img/projects/zoo/zoo-2.jpg"]}];window.addEventListener("load",(function(){document.querySelectorAll("#gallery li").forEach(((t,i)=>{t.style.backgroundImage="url("+e[i].images[0]+")"})),document.querySelectorAll("#gallery a").forEach(((t,i)=>{t.addEventListener("click",(()=>{localStorage.setItem("indexValue",i),t.href="detail.html?="+e[i].title}))})),gsap.registerPlugin(ScrollTrigger);let t=gsap.utils.toArray(".stage"),i=document.querySelector("#hscroll"),s=document.getElementById("navmenu").getElementsByTagName("a");document.querySelector("#btncontact"),ScrollTrigger.matchMedia({"(min-width: 992px)":function(){let e=gsap.to(t,{xPercent:-100*(t.length-1),ease:"none"}),a=ScrollTrigger.create({animation:e,trigger:i,pin:!0,scrub:1,end:()=>"+="+i.offsetWidth});var u=i.offsetWidth/(window.innerWidth*(t.length-1));Draggable.create(".proxy",{trigger:i,type:"x",onPress(){this.startScroll=a.scroll()},onDrag(){a.scroll(this.startScroll-(this.x-this.startX)*u)}})[0];for(var r=0;r<s.length;r++){!function(e){e.addEventListener("click",(function(t){t.preventDefault();var s=e.getAttribute("href").split("#")[1],a=document.getElementById(s).offsetLeft*(i.offsetWidth/(i.offsetWidth-window.innerWidth));gsap.to(window,{scrollTo:a+100,duration:2})}))}(s[r])}},all:function(){}});const a=window.matchMedia("(min-width: 992px)");document.querySelectorAll("#navmenu a").forEach((e=>{e.addEventListener("click",(function(e){e.preventDefault();const s=this.getAttribute("href").split("#")[1],u=document.getElementById(s),r=document.getElementById("masthead");a.matches?gsap.to(window,{scrollTo:(u.offsetLeft+r.offsetWidth*t.indexOf(u))*(i.offsetWidth/(i.offsetWidth-u.offsetWidth)),duration:2}):gsap.to(window,{scrollTo:u,duration:2})}))}))}))}();