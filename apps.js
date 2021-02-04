const jsHeader = document.querySelector('header');
const jsNavlink_02 = document.querySelector('.nav__link-02');
const jsLa2_li = document.querySelectorAll('dd_nav-link');
const jsBotBr = document.querySelector('.nav')


let mediaQuery  = window.matchMedia('(min-width:680px)');
function handleTabletChange(e) {
  // Check if the media query is true
  if (e.matches) {
    if (jsNavlink_02.classList.contains('show') || jsHeader.classList.contains('expand')){
      jsNavlink_02.classList.remove('show');
      jsHeader.classList.remove('expand');
      jsBotBr.classList.remove('botbr')
    }
    // console.log("jsHeader.classList.remove('open')");
  }
}
// Register event listener
mediaQuery.addEventListener('change',handleTabletChange)
// Initial check
handleTabletChange(mediaQuery)


const jsHamburger = document.querySelector('.nav__hamburger');
jsHamburger.addEventListener('click',()=>{ //< this function run when the hamburger is clicked
  jsHeader.classList.toggle('expand'); //< just auto height
  jsNavlink_02.classList.toggle('show'); //< add the linkArea2 with links
  // jsNavCon.classList.toggle("open"); //< this remove the bottom border radius
  jsBotBr.classList.toggle('botbr');
})
