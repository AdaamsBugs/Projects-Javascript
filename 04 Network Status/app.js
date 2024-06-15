console.log(`this is not an error`);

const updateStatus =()=>{
    const TextElement = document.getElementById('text')
    const ImgElement = document.getElementById('icon')
    if(navigator.onLine){

        TextElement.textContent = 'Online'
        document.getElementById('online-icon').style.display = "inline-block";
        document.getElementById('offline-icon').style.display = "none";
    }
    else{
        TextElement.textContent = 'Offline'
        document.getElementById('online-icon').style.display = "none";
        document.getElementById('offline-icon').style.display = "inline-block";
    }
}
updateStatus()






setInterval(()=>{
    location.reload()
},5000)