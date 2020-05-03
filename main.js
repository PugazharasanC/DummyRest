async function myFunc(){
    var responce = await fetch('https://restcountries.eu/rest/v2/all');
    if(responce.ok){
        var myData = await responce.json();
        var flexDiv = document.createElement('div');
        flexDiv.className = 'flex-container';
        for(var ind = 0 ; ind < myData.length;ind++)
        {
            var newDiv = document.createElement('div');
            var flagImg = document.createElement('img');
            var newP = document.createElement('p');
            newP.innerHTML = myData[ind].name;
            flagImg.src = myData[ind].flag;
            flagImg.alt = myData[ind].name + ' flag';
            newDiv.appendChild(flagImg);
            newDiv.appendChild(newP);
            newDiv.setAttribute('onclick','getWeather(\''+(myData[ind].capital).replace(/'/g,'%27')+'\',\''+myData[ind].alpha2Code+'\')')
            flexDiv.appendChild(newDiv);
        }
        document.getElementsByTagName('body')[0].append(flexDiv);
    }
}
async function getWeather(city,code){
    var responce = await fetch('https://api.openweathermap.org/data/2.5/weather?q='+city+','+code+'&appid=00113f369758fba0ae4ee18b5c4f35ea');
    if(responce.ok){
        var weatherData = await responce.json();
        alert(weatherData.main.temp +'°C,'+weatherData.weather[0].description+','+weatherData.weather[0].main);
    }
}
window.onload = myFunc;
