const promise = fetch(`https://api.openweathermap.org/data/2.5/weather?q=Jammu&appid=d42251a0a9d8f7e6b274dd1ecf3c1edc&units=metric`);
promise.then((data)=>data.json()).then((data)=>{
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=data.main.temp+"°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".Windspeed").innerHTML=data.wind.speed+" km/h";
});
let searchBtn = document.querySelector("#btn");
searchBtn.addEventListener("click", ()=>
{
    let city = document.querySelector("#text").value;
    const promise = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d42251a0a9d8f7e6b274dd1ecf3c1edc&units=metric`);
promise.then((data)=>data.json()).then((data)=>{
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=data.main.temp+" <sup>o</sup>C";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".Windspeed").innerHTML=data.wind.speed+" km/h";
});

})
