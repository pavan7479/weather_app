const button=document.getElementById("search-button");
const city=document.getElementById("input-city");

const cityname=document.getElementById("city-name");
const citytime=document.getElementById("city-time");
const citytemp=document.getElementById("city-temp");
const cityutime=document.getElementById("city-utime");
async function getdata(cityname){
    const promise=await fetch(`https://api.weatherapi.com/v1/current.json?key=171b3c614f5040009bb65642241312&q=${cityname}&aqi=yes`);
    return await promise.json();
}

button.addEventListener('click', async ()=>{
    const value=city.value;
    const res= await getdata(value);
    cityname.innerText=(`${res.location.name},${res.location.region},${res.location.country}`);
    citytime.innerText=(`${res.location.localtime}`);
    citytemp.innerText=(`${res.current.temp_c}`);
    cityutime.innerText=(`${res.current.last_updated}`);
    
})



