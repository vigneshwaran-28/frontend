let root = document.getElementsByClassName("background-box")[0];

let demo = document.getElementsByClassName("side-bar")[0];

root.addEventListener("mouseover",()=>{
    demo.style.left="88px";
});
root.addEventListener("mouseleave",()=>{
    demo.style.left="-320px";
});
// console.log("hi da ",root);

