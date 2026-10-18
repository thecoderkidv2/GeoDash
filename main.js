document.addEventListener("contextmenu",(e)=>e.preventDefault());
document.addEventListener("dragstart",(t)=>"IMG"===t.target.tagName&&t.preventDefault());
const transition = document.getElementById("e87921");

document.getElementById("b00193").addEventListener("click",()=>{
    transition.style.opacity = "1";
    setTimeout(()=>{
        document.getElementById("s723691").className = "hidden";
        document.getElementById("s012883").className = "";
        transition.style.opacity = "0";
    },600);
});

setTimeout(()=>transition.style="opacity:0",5);
