let count = 0

const value = document.getElementById('value')
const btns = document.querySelectorAll('.btn')

btns.forEach((btn)=> {
    //console.log(btn)
    btn.addEventListener('click',(e)=> {
       //alert('oi')
       const style = e.currentTarget.classList
      // console.log(style)
      if(style.contains('decrease')){
        count-- 
      }else if(style.contains('increase')){
        count++
      } else {
        count = 0
      }

      //cores
      if(count > 0){
        //blue
        value.style.color = 'blue'
      }else if(count < 0){
        //red
        value.style.color = 'red'
      }else if(count === 0){
        //hsl(209,61%,16%)
        value.style.color = 'hsl(209,61%,16%)'
      }

      value.textContent = count
    

    })
})