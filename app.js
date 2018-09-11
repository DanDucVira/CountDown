let countDate = new Date("august, 2021 8:00:00").getTime();
let day = document.querySelector("#days");
let hour = document.querySelector("#hours");
let minute = document.querySelector("#minutes");
let second = document.querySelector("#seconds");



let countLimit = new Date().getTime();

//test
console.log(countLimit);


let x = setInterval(function () {

    let present = new Date().getTime();


    let distance = countDate - present;


    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    day.textContent = days + "D";
    hour.textContent = hours + "H";
    minute.textContent = minutes + "M";
    second.textContent = seconds + "S";


}, 1000);