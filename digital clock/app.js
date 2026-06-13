let hours = document.querySelector(".hours")
let minutes = document.querySelector(".minute")
let second = document.querySelector(".seconds")


let currentTime = new Date()
hours.innerText = String (currentTime.getHours()).padStart (2,0)+ ":" ;
minutes.innerText = String (currentTime.getMinutes()).padStart (2,0)+ ":"; 
second.innerText = String (currentTime.getSeconds()).padStart (2,0);

setInterval (()=>{    
let currentTime = new Date()
hours.innerText = String (currentTime.getHours()).padStart (2,0)+ ":" ;
minutes.innerText = String (currentTime.getMinutes()).padStart (2,0)+ ":"; 
second.innerText = String (currentTime.getSeconds()).padStart (2,0);
},1000)





