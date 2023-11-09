// let boxElement;
// window.addEventListener(
//   "load",
//   (event) => {
//     boxElement = document.querySelector("#obs");

//     createObserver();
//   },
//   false
// );

// function createObserver() {
//   let observer;

let options = {
  rootMargin: "-100px",
};

//   observer = new IntersectionObserver(handleIntersect, options);
//   observer.observe(boxElement);
// }

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log("hit", entry);
    const intersecting = entry.isIntersecting;
    entry.target.classList.add(intersecting ? "visible-content" : "");
    if (entry.isIntersecting) observer.unobserve(entry.target);
  });
}, options);

let node = document.querySelectorAll("#obs");
node.forEach((n) => {
  observer.observe(n);
});
