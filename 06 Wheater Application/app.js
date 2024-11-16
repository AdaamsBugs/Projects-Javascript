console.log('Adaam this side')

const inp = document.getElementById('inp')
const btn = document.getElementById('btn')

// Innertext
const country = document.getElementById('country')
const name = document.getElementById('name')
const region = document.getElementById('region')
const latitude = document.getElementById('latitude')
const longitude = document.getElementById('longitude')
const condition = document.getElementById('condition')

// WheaterApi

const getData = async(val)=>{
  const Api = await 
  fetch(`http://api.weatherapi.com/v1/current.json?key=0a1bf6b7820a4030929204406241411&q=${val}`)
  return await Api.json()
}

// Getting Data from Api
btn.addEventListener('click',async()=>{
  const value = inp.value
  const result = await getData(value)

  country.innerText = `${result.location.country}`
  name.innerText = `${result.location.name}`
  region.innerText = `${result.location.region}`
  longitude.innerText = `${result.location.lon}`
  latitude.innerText = `${result.location.lat}`
  condition.innerText = `${result.current.condition.text}`

})

