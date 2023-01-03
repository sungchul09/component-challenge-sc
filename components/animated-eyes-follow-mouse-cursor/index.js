const leftPupil = document.querySelector('.eyes__left-pupil')
const rightPupil = document.querySelector('.eyes__right-pupil')
const coordinateX = document.clientX
const coordinateY = document.clientY
const clientWidth = document.documentElement.clientWidth / 2

document.addEventListener('mousemove', (e) => {
  this.clientWidth = document.documentElement.clientWidth / 2
  this.coordinateX = e.clientX
  this.coordinateY = e.clientY
  if (this.clientWidth < this.coordinateX) {
    leftPupil.style.background = 'red'
    rightPupil.style.background = 'red'
    leftPupil.left = 0;
    rightPupil.left = 0;
  } else if (this.clientWidth > this.coordinateX) {
    leftPupil.style.background = 'black'
    rightPupil.style.background = 'black'
    leftPupil.left = 0;
    rightPupil.left = 0;
  }
})

