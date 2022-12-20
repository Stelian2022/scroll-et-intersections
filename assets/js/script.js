console.log(document.documentElement.scrollTop);
const h1 = document.querySelector("h1");
window.addEventListener("scroll", () => {
  //  if(document.documentElement.scrollTop>"8000"){
  //  document.querySelector("div").style.backgroundColor=("black");

  //  }else {
  //      document.querySelector("div").style.backgroundColor=("white");
  //  }
  if (document.documentElement.scrollTop > h1.offsetTop) {
    console.log("touchdown");
    console.dir(h1);
    h1.style.fontsize = "20rem";
  } else {
    h1.style.fontsize = "2rem";
  }
});

//window.addEventListener("scroll",function(){
//})

//intersections
const h2 = document.querySelector("h2");
let observer = new IntersectionObserver(
  (entries) => {
    // element is fully enter in viewport

    if (entries[0].isIntersecting === true) {
      //stop scrolling get wheeling
      h2.style.backgroundColor = "green";
    } else {
      h2.style.backgroundColor = "white";
    }
  },
  { threshold: [1] }
);
observer.observe(h2);
