document.addEventListener("readystatechange", ()=>{
    const ratings=document.querySelectorAll(".ratings");
    ratings.forEach(el=>{
    const img = el.children[1];
    const pb = el.children[0];
    pb.style.width = (parseFloat(pb.dataset.rating) * img.clientWidth / 5 - 1) + "px";
})});