let i = 0;
var txt = 'blogger   ';
var speed = 300;
let doc=document.querySelector('#demo');
let c=0;
function typeWriter()

 {
  
  if (i < txt.length) {
    
   doc.innerHTML+= txt.charAt(i);
    i++;
    c+=1;

    setTimeout(typeWriter, speed);
    if(doc.innerHTML.length==10){
      doc.innerHTML='';
      i=0
      txt=`developer  `;
    }
  
    if(c==41){
      i=11
      doc.innerHTML='full stack web developer ';
      
    }
    
  }
  
  
}






typeWriter();







let rowcol1=document.querySelector('#row2');

rowcol1.addEventListener('mouseover',()=>{
  rowcol1.style.backgroundColor='rgb(151, 129, 129)';
  rowcol1.style.color='white';

})

rowcol1.addEventListener('mouseout',()=>{
  rowcol1.style.backgroundColor='white';
  rowcol1.style.color='black';

})


let about=document.querySelector('#about');

// aos animation on scroll
        AOS.init();
    //