const bars = document.getElementById('bars')
const navigation= document.getElementById('navigation')
const close = document.getElementById('close')

bars.addEventListener('click',()=>{
  navigation.classList.add('active')
})

close.addEventListener('click',()=>{
  navigation.classList.remove('active')
})