navigator.getBattery().then(result=>{
    if(result.level<=0.20){
        alert('low battery warning ! please charge your device');
    }
      if(result.level>0.50){
        alert('your battery half charged');
    }

    alert(`Your battery  has ${result.level*100}% charging `);
});


let i = 0;

document.addEventListener("contextmenu", function (e)

{ 
  e. preventDefault(); 
  alert("sorry!, right click is disabled")
}, false);

const emailSuccess = document.getElementById("email-success");
var txt = "blogger   ";
var speed = 300;
let doc = document.querySelector("#demo");
let c = 0;
function typeWriter() {
  if (i < txt.length) {
    doc.innerHTML += txt.charAt(i);
    i++;
    c += 1;

    setTimeout(typeWriter, speed);
    if (doc.innerHTML.length == 10) {
      doc.innerHTML = "";
      i = 0;
      txt = `developer  `;
    }

    if (c == 41) {
      i = 11;
      doc.innerHTML = "full stack web developer ";
    }
  }
}

typeWriter();
let dataprocess=document.querySelector('#dataprocess');


let rowcol1 = document.querySelector("#row2");

rowcol1.addEventListener("mouseover", () => {
  rowcol1.style.backgroundColor = "rgb(151, 129, 129)";
  rowcol1.style.color = "white";
});

rowcol1.addEventListener("mouseout", () => {
  rowcol1.style.backgroundColor = "white";
  rowcol1.style.color = "black";
});

let about = document.querySelector("#about");

// aos animation on scroll
AOS.init();
//
let insertContact = (payload) => {
  var myHeaders = new Headers();
  myHeaders.append(
    "sec-ch-ua",
    '" Not A;Brand";v="99", "Chromium";v="101", "Google Chrome";v="101"'
  );
  myHeaders.append("Referer", "http://127.0.0.1:5500/");
  myHeaders.append("sec-ch-ua-mobile", "?0");
  myHeaders.append(
    "User-Agent",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.64 Safari/537.36"
  );
  myHeaders.append("sec-ch-ua-platform", '"macOS"');
  myHeaders.append("content-type", "application/json");

  var raw = JSON.stringify(payload);
 

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };
  var form = document.getElementById("form");

  fetch("https://form-9j34.onrender.com/v1/contactus", requestOptions)
    .then((response) => response.text())
    .then((result) => {
    console.log(result);
      
      form.reset();
          dataprocess.style.display='none';


      emailSuccess.style.display = "block";
      setTimeout(() => {
      emailSuccess.style.display = "none";
        
      }, 10000);
    })
    .catch((error) => console.log("error", error));
};

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const formData = new FormData(form);
  const formDataSerialized = Object.fromEntries(formData);
  
    dataprocess.innerHTML=' Please wait! submitting data. it may take upto 5 seconds on first attempt '


  console.log(formDataSerialized);
  let apiPayload = {
    name: formDataSerialized.txtName,
    phoneNumber: formDataSerialized.txtPhone,
    email: formDataSerialized.txtEmail,
    message: formDataSerialized.txtMsg,
  };

  insertContact(apiPayload);
});
