console.log('Adaam this side')

const inp = document.getElementById('inp')
const btn = document.getElementById('btn')


const City = document.getElementById('City')
const Region = document.getElementById('Region')
const Country = document.getElementById('Country')
const Temperature = document.getElementById('Temp')
const Latitude = document.getElementById('Lat')
const Time = document.getElementById('Time')

async function getData(val) {
    const Data = await 
    fetch(`http://api.weatherapi.com/v1/current.json?key=0a1bf6b7820a4030929204406241411&q=${val}&aqi=no`)
    return await Data.json()
}

btn.addEventListener('click',async()=>{
    const value = inp.value
    const result = await getData(value)


    City.innerText =`${result.location.name}`
    Region.innerText =`${result.location.region}`
    Country.innerText =`${result.location.country}`
    Temperature.innerText =`${result.current.temp_c}`
    Latitude.innerText =`${result.location.lat}`
    Time.innerText =`${result.location.localtime}`


})