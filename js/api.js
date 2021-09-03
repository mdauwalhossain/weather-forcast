const API_KEY = `167d1e6fed912f3f6ce7660db01ce29d`;
const searchTemparature = () => {
    const city = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
    // console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemparature(data));
}
const displayTemparature = temparature => {
    console.log(temparature);
}

