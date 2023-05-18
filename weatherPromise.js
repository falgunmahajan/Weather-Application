const url = `https://api.openweathermap.org/data/2.5/weather`;
const apiKey = "d42251a0a9d8f7e6b274dd1ecf3c1edc";
const searchBtn = document.querySelector("#btn");

function getData(data) {
    if (data.name == undefined) {
        getError(data.message)
    }
    else {
        document.querySelector(".error").style.display = "none";
        document.querySelector(".info").style.display = "block";
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = data.main.temp + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".Windspeed").innerHTML = data.wind.speed + " km/h";
    }
}
function getError(err) {
    document.querySelector(".error").style.display = "block";

    document.querySelector(".error").innerHTML = err;
    document.querySelector(".info").style.display = "none"

}
async function getCity(city) {
    const weatherDetails = await fetch(`${url}?q=${city}&appid=${apiKey}&units=metric`);
    const data = await weatherDetails.json();
    getData(data);
}
searchBtn.addEventListener("click", () => {
    const city = document.querySelector("#text").value;
    getCity(city)
}
);
getCity("jammu");
