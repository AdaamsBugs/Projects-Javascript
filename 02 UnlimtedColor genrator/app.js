console.log(`this is not an error`)

// Genertaor a random color

const RandomColor = ()=>{
    const hex = `0123456789ABCDEF`
    let color = '#'
    for (let i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color

}
 let inter;
const startColorChanging = function(){
    if (!inter){
         inter =  setInterval(()=>{
      document.body.style.backgroundColor = RandomColor()   
    },1000)
    }
   

}
const stopColorChanging = function(){
    clearInterval(inter)
    inter = null
   
 }

document.getElementById('start').addEventListener('click',startColorChanging)
document.getElementById('stop').addEventListener('click',stopColorChanging)
