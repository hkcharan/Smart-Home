let time = document.getElementById('current-time');

setInterval(() => {
    let d = new Date();
    time.innerHTML = d.toLocaleTimeString();
},1000);


let today = new Date();
let day = today.getDay();
let month = today.getMonth();
let date = today.getDate();
let year = today.getFullYear();

let dayList = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let monthList = ["January","February","March","April","May","June","July","August","September","October","November","December"]

document.getElementById('dayname').innerHTML = dayList[day];
document.getElementById('date').innerHTML = " " +date + " " +monthList[month] + " , " +  " " +year;
document.getElementById('year').innerHTML = " " +year;

const Sapta_Sagaradaache_Ello = new Audio('music/Sapta_Sagaradaache_Ello.mp3');
const Nee_Parichaya = new Audio('music/Nee_Parichaya.mp3');
const Neenu_Bagehariyada = new Audio('music/Neenu_Bagehariyada.mp3');
const Ondu_Munjane = new Audio('music/Ondu_Munjane.mp3');
const Saaluthillave = new Audio('music/Saaluthillave.mp3');


