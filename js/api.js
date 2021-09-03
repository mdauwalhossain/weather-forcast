const API_KEY = `167d1e6fed912f3f6ce7660db01ce29d`;
const searchTemparature = () => {
    const city = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    // console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemparature(data));
}
const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}

const displayTemparature = temparature => {
    setInnerText('city', temparature.name);
    setInnerText('temperature', temparature.main.temp);
    setInnerText('condition', temparature.weather[0].main);
    // console.log(temparature);
    const url = `http://openweathermap.org/img/wn/${temparature.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById('weather-icon');
    imgIcon.setAttribute('src', url);
}

