// Moving the box at left in the home section
let box = document.getElementById('box')
box.addEventListener('mousemove' , (e)=>{
    let rect = box.getBoundingClientRect()
    console.log(rect)
    console.log(e)
    const x = e.clientX - rect.left;
const y = e.clientY - rect.top;
const centerX = rect.width / 2;
const centerY = rect.height / 2;

  const rotateX = -(y - centerY) / 10;
  const rotateY = (x - centerX) / 10;
    box.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
})

box.addEventListener('mouseleave', () => {
  box.style.transform = `rotateX(0deg) rotateY(0deg)`
})


// Scroll bar in second part in about section

window.onscroll = function() {
  let position = window.scrollY;
  let progress = (position - 1100) / 500;
  if (progress < 0) progress = 0;
  if (progress > 1) progress = 1;
  document.getElementById("myBar").style.transform = "scaleY(" + progress + ")";
};



