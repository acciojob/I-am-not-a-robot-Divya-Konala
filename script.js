//your code here
// --------------creating elements---------------
h3Ele=document.createElement("h3");
h3Ele.textContent="Please click on the identical tiles to verify that you are not a robot.";
h3Ele.setAttribute("id","h");
document.querySelector("body").append(h3Ele);

resetBtn=document.createElement("button");
resetBtn.textContent="reset";
resetBtn.setAttribute("id","reset");
resetBtn.style.display="none";
document.querySelector("body").append(resetBtn);

verifyBtn=document.createElement("button");
verifyBtn.textContent="Verify";
verifyBtn.setAttribute("id","verify");
verifyBtn.style.display="none";
document.querySelector("body").append(verifyBtn);

msg=document.createElement("p");
msg.setAttribute("id","para");
document.querySelector("body").append(msg);

// ------------shuffling images-----------------
let imgArr=["img1","img2","img3","img4","img5"];
let shuffledArr=[];
let randImgNum=Math.floor(Math.random()*imgArr.length);
imgArr.push(imgArr[randImgNum]);

let imgElements=document.querySelectorAll("img");

while(imgArr.length!=0){
    let image=imgArr.pop();
    while (true) {
        let randNum=shuffleImages();
        if(shuffledArr[randNum]==undefined){
            shuffledArr[randNum]=image;
            imgElements[randNum].setAttribute("class",image);
            break;
        }   
    }
}
function shuffleImages(){ 
    let randNum=Math.floor(Math.random()*imgElements.length);
    return randNum;
}
// -----------
let clickedImgsIndexNum=[];
let numOfClicks=0;
for(let i=0;i<imgElements.length;i++){
    imgElements[i].addEventListener("click",()=>{
        numOfClicks++;
        clickedImgsIndexNum.push(i);
        if(numOfClicks==1) {
            resetBtn.style.display="inLine";
        }else if(numOfClicks==2){
            verifyBtn.style.display="inLine";
        }else{
            verifyBtn.style.display="none";
        }
    });
}

document.querySelector("#verify").addEventListener("click",()=>{
    let img1=imgElements[clickedImgsIndexNum[0]].getAttribute("class");
    let img2=imgElements[clickedImgsIndexNum[1]].getAttribute("class");
    if(clickedImgsIndexNum[0]!=clickedImgsIndexNum[1] && img1==img2){
        document.querySelector("#para").textContent="You are a human. Congratulations!";
        document.querySelector("#para").style.color="green";
    }else{
        document.querySelector("#para").textContent="We can't verify you as a human. You selected the non-identical tiles.";
        document.querySelector("#para").style.color="red";
    }
})

document.querySelector("#reset").addEventListener("click",()=>{
    clickedImgsIndexNum=[];
    numOfClicks=0;
    resetBtn.style.display="none";
    verifyBtn.style.display="none";
})