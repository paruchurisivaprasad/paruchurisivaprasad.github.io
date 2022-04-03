let buta=document.querySelector('#but1');
let butb=document.querySelector('#but2');
let butc=document.querySelector('#but3');
let imge1=document.querySelector('#img1');
let imge2=document.querySelector('#img2');
let imge3=document.querySelector('#img3');

let dropd1=document.querySelector('#klu2');
let dropd2=document.querySelector('.inside22');
let dropd3=document.querySelector('#klu3');
let logoq1=document.querySelector('#logo');

dropd3.addEventListener('mouseover',()=>{
logoq1.style.background='green';
logoq1.style.color='whitesmoke';

});
dropd3.addEventListener('mouseout',()=>{
    logoq1.style.background='linear-gradient(to right,orange,white,green)';
    logoq1.style.color='red';
    
    });


setInterval(() => {
    imge1.src='2.jpg'
    
    buta.style.background='linear-gradient(to right,orangered,whitesmoke,green)';
butb.style.background='whitesmoke';
butc.style.background='whitesmoke';

}, 5000);

setInterval(() => {
    imge1.src='nat_img3.jpg'
    
    buta.style.background='white';
butb.style.background='linear-gradient(to right,orangered,whitesmoke,green)';
butc.style.background='whitesmoke';

}, 3000);

setInterval(() => {
    imge1.src='nat_img5.jpg'
    
    buta.style.background='white';
butb.style.background='whitesmoke';
butc.style.background='linear-gradient(to right,orangered,whitesmoke,green)';

}, 7500);



setInterval(() => {
    let matter1=document.querySelector('#matter');

    let matter3='"The world is a book and those who do not travel read only one page.” <br>~ Saint Augustine';
    matter1.innerHTML=matter3;
    matter1.style.padding="11px";

}, 5000);


setInterval(() => {
    let matter12=document.querySelector('#matter');

    let matter2="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam ipsum veniam sequi qui perspiciatis! ";
    matter12.innerHTML=matter2;
    matter12.style.padding="20px";
}, 12000);


















/*
buta.addEventListener('click',()=>{

imge1.style.borderRadius="5px";
imge2.style.display='none';
imge1.style.display='block';
imge3.style.display='none';
buta.style.background='linear-gradient(to right,orangered,whitesmoke,green)';
butb.style.background='whitesmoke';
butc.style.background='whitesmoke';

    
});

butb.addEventListener('click',()=>{

    imge2.style.borderRadius="5px";
    imge2.style.display='block';
    imge1.style.display='none';
    imge3.style.display='none';
    buta.style.background='whitesmoke';
    butb.style.background='linear-gradient(to right,orangered,whitesmoke,green)';
    butc.style.background='whitesmoke';

    
    });
    
    butc.addEventListener('click',()=>{

        imge3.style.borderRadius="5px";
        imge2.style.display='none';
        imge1.style.display='none';
        imge3.style.display='block';
        buta.style.background='whitesmoke';
        butb.style.background='whitesmoke';
        butc.style.background='linear-gradient(to right,orangered,whitesmoke,green)';

    
        
        });
        
*/
