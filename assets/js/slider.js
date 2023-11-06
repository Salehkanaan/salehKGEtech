const nextE = document.querySelector(".next");
const prevE = document.querySelector(".prev");
const imgsE1=document.querySelectorAll("img");
const imagecontainerE = document.querySelector(".image-container");
let currentImg=1;
let timeout;
console.log(imgsE1);
nextE.addEventListener("click",()=>{
  currentImg++;
  clearTimeout(timeout);
  upadteImg();
})
prevE.addEventListener("click",()=>{
    currentImg--;
    clearTimeout(timeout);
    upadteImg();
  });
  upadteImg();
function upadteImg(){
    if(currentImg > imgsE1.length){
        currentImg=1;
    }
    else if(currentImg<1){
        currentImg=imgsE1.length;
    }
    imagecontainerE.style.transform=`translateX(-${(currentImg-1)*500}px)`;
  timeout=setTimeout(()=>{currentImg++
upadteImg()},3000)  
    
}