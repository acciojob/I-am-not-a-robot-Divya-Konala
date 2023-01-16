//your code here
let images= document.getElementsByClassName("given_img");
let img=[];
let reset_btn=document.getElementById("reset");
reset_btn.disabled=true;
let verify_btn=document.getElementById("verify");
verify_btn.disabled=true;
let img_btns=document.getElementsByClassName("img_btn");
let noOfImgsSelected=0;
let image1_url;
let image2_url;
let img1_id;
let img2_id;
for(let i=0;i<images.length;i++){
    img[i]=(window.getComputedStyle(images[i]).content).slice(5,-2);
}

function randomImage(){
   let x= Math.floor(Math.random()*images.length);
//    document.querySelector(".img6").src=img[x];
   document.querySelector(".img6").style.content='url("'+img[x]+'")';
}
randomImage();

for(let i=0;i<img_btns.length;i++){
    img_btns[i].addEventListener("click",()=>{verify_img(i)});
}
 
function verify_img(btn_id) {
    noOfImgsSelected++;
    if(btn_id<img_btns.length-1){
        image1_url=img[btn_id];
    }else if(btn_id===img_btns.length-1){
        // image2_url=document.querySelector(".img6").src;
        image2_url=(window.getComputedStyle(document.querySelector(".img6")).content).slice(5,-2);
    }
    if(noOfImgsSelected===1){
        img1_id=btn_id;
        reset_btn.disabled=false;
    }else if(noOfImgsSelected===2){
        if(img1_id===btn_id){
            noOfImgsSelected--;
        }else{
            img2_id=btn_id;
            verify_btn.disabled=false;
        }
    }else if(noOfImgsSelected>2){
        verify_btn.disabled=true;
    }
}


function reset(){
    image1_url="";
    image2_url="";
    noOfImgsSelected=0;
    reset_btn.disabled=true;
    verify_btn.disabled=true;
    document.getElementById("para").innerText="";
}

function verify(){
    let msg;
    if(image1_url==image2_url)
        msg="Congratulations!";
    else{
        msg="We can't verify you as a human. You selected the non-identical tiles.";
    }
    document.getElementById("para").innerText=msg;
    reset_btn.disabled=true;
    verify_btn.disabled=true;
}