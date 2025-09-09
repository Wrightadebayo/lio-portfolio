const bars = document.getElementById('bars')
const navigation= document.getElementById('navigation')
const close = document.getElementById('close')
const header = document.querySelector('.header');

bars.addEventListener('click',()=>{
  navigation.classList.add('active')
})

close.addEventListener('click',()=>{
  navigation.classList.remove('active')
})

  // ✅ Header background change on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 1) {  
      header.style.background = '#000'; // solid black when scrolling
    } else {
      header.style.background = 'transparent'; // back to transparent at top
    }
  });