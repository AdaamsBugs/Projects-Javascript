console.log('This is not an Error')

const button = document.getElementById('btn')

function getLocation(position){

}
function failedToGet (){
    console.log('There was an Error to get Location')
}
button.addEventListener('click',async ()=>{
     navigator.geolocation.getCurrentPosition(getLocation,failedToGet)
})