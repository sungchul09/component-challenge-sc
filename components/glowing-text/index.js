{
  const wrapper = document.querySelector('.wrapper')
  const text = 'SEONGCHEOL'

  for(let i=0; i<text.length; i++){
    if (i !== text.length){
      const child = `<span class="text" data-value=${i}">${text.substring(i, i+1)}</span>`
      wrapper.innerHTML += child
    }
  }
  const data = wrapper.childNodes
  let count = 1
  const interval = setInterval(() => {
    if(count > text.length){
      data[count - 1].className = data[count - 1].className.replace(' highlight', '')
      count = 1
    }
    data[count].className += ' highlight'
    if (count > 1){
      data[count - 1].className = data[count - 1].className.replace(' highlight', '')
    }
    count++;
  }, 100)
}