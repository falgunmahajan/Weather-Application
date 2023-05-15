const url = `https://api.openweathermap.org/data/2.5/weather`;
const apiKey ="d42251a0a9d8f7e6b274dd1ecf3c1edc";
const searchBtn = document.querySelector("#btn");

function getData(data)
{
    document.querySelector(".error").style.display="none";
    document.querySelector(".info").style.display="block";
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=data.main.temp+"°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".Windspeed").innerHTML=data.wind.speed+" km/h";
}
function getError(err)
{
    document.querySelector(".error").style.display="block";

    document.querySelector(".error").innerHTML=err;
    document.querySelector(".info").style.display="none"
    
}
function getCity(city)
{
    const promise = new Promise((resolve,reject)=>{
    const data = fetch(`${url}?q=${city}&appid=${apiKey}&units=metric`)
    .then((data)=>{
        if(data.status===200)
        {
            resolve(data);
        }
        reject("City not found");
    })
    })
    promise.then((data)=>data.json()).then((data)=>getData(data)).catch((err)=>getError(err))
}
searchBtn.addEventListener("click", ()=>
{
    const city = document.querySelector("#text").value;
    getCity(city)
}
);
getCity("jammu");
