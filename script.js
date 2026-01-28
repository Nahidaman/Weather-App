const apiKey = "4ac5c294195d8b12d74066e7f84aefb6";


const inptt = document.querySelector('.inpt');
const btnn = document.querySelector('.btn');
const img = document.querySelector('.img');


async function Checkweather(loc){
    const responce = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${loc}&units=metric&appid=${apiKey}`)
    var data = await responce.json();

    console.log(data);

    document.querySelector('.location').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector('.hum').innerHTML = data.main.humidity +"%";
    document.querySelector('.win').innerHTML = data.wind.speed +" km/h";
    const date = new Date (data.dt *1000);
    document.querySelector('.date').innerHTML = date.toDateString();

    if (data.weather[0].main == "Clear"){
        img.src = "images/clear.png";
        document.body.style.backgroundImage = 'url("images/bg-clear.png")';
    }

    else if (data.weather[0].main == "Clouds"){
        img.src = "images/clouds.png";
        document.body.style.backgroundImage = 'url("images/bg-cloudy.jpg")';
    }

    else if (data.weather[0].main == "Drizzle"){
        img.src = "images/drizzle.png";
        document.body.style.backgroundImage = 'url("images/bg-drizzle.jpg")';
    }

    else if (data.weather[0].main == "Mist"){
        img.src = "images/mist.png";
        document.body.style.backgroundImage = 'url("images/bg-mist.jpg")';
    }

    else if (data.weather[0].main == "Rain"){
        img.src = "images/rain.png";
        document.body.style.backgroundImage = 'url("images/bg-rain.jpg")';
    }

    else if (data.weather[0].main == "Snow"){
        img.src = "images/snow.png";
        document.body.style.backgroundImage = 'url("images/bg-snow.jpg")';
    }

    //forecast
    //--------



}

Checkweather("kerala");

btnn.addEventListener("click",()=>{
    Checkweather(inptt.value);  
})

inptt.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        Checkweather(inptt.value);
    }
});
