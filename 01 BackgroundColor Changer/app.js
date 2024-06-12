console.log(`this is not an Error`)

const button = document.querySelectorAll('.button')
const body = document.querySelector('body')
console.log(button)

button.forEach((btn)=>{
btn.addEventListener("click", (e)=>{
  console.log(e)
  console.log(e.target)
  if (e.target.id === 'black'){
    body.style.backgroundColor = '#010b13'
  }
  if (e.target.id === 'green'){
    body.style.backgroundColor = '#102f3b'
  }
  if (e.target.id === 'red'){
    body.style.backgroundColor = '#96071f'
  }
  if (e.target.id === 'orange'){
    body.style.backgroundColor = '#522920'
  }

})
})