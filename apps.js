const jsHeader = document.querySelector('header');
const jsNavlink_02 = document.querySelector('.nav__link-02');
const jsLa2_li = document.querySelectorAll('dd_nav-link');
const jsBotBr = document.querySelector('.nav');
const jsBotBr__linkText = document.getElementsByClassName('nav__li--01');

let mediaQuery01  = window.matchMedia('(min-width:680px)');
function handleTabletChange(e) {
  // Check if the media query is true
  if (e.matches) {
    if (jsNavlink_02.classList.contains('show') || jsHeader.classList.contains('expand')){
      jsNavlink_02.classList.remove('show');
      jsHeader.classList.remove('expand');
      jsBotBr.classList.remove('botbr');
    }
    // console.log("jsHeader.classList.remove('open')");
      jsBotBr.style.backgroundColor = "transparent";
  }
}
// Register event listener
mediaQuery01.addEventListener('change',handleTabletChange)
// Initial check
handleTabletChange(mediaQuery01)
const jsHamburger = document.querySelector('.nav__hamburger');
jsHamburger.addEventListener('click',()=>{ //< this function run when the hamburger is clicked
  jsHeader.classList.toggle('expand'); //< just auto height
  jsNavlink_02.classList.toggle('show'); //< add the linkArea2 with links
  // jsNavCon.classList.toggle("open"); //< this remove the bottom border radius
  jsBotBr.classList.toggle('botbr');
})


let changeFontColorToWhite =  function(){
  for(let i = 0; i < jsBotBr__linkText.length; i++){
      jsBotBr__linkText[i].style.color = "white";
      // console.log(jsBotBr__linkText);
    }
};
let changeFontColorToBlack =  function(){
  for(let i = 0; i < jsBotBr__linkText.length; i++){
      jsBotBr__linkText[i].style.color = "black";
      // console.log(jsBotBr__linkText);
    }
};

// transparent to colored nav
let mediaQuery02 = window.matchMedia('(min-width: 800px)');
mediaQuery02.addEventListener('onscroll',myFunction)
window.onscroll = function() {myFunction(mediaQuery02)};
function myFunction(windowSize) {
    if(windowSize.matches){
      if (document.documentElement.scrollTop > 20) {
        jsBotBr.style.backgroundColor = "rgb(20, 40, 80)";
        changeFontColorToWhite();
      } else if(document.documentElement.scrollTop <= 20) {
        jsBotBr.style.backgroundColor = "transparent";
        changeFontColorToBlack();
      }
        
    }else {jsBotBr.style.backgroundColor = "transparent";}
  }

