const modeList = document.querySelectorAll('ul li')

let currentMode = 'classic'

/* allows for changing current mode */
modeList.forEach(mode => {
  mode.addEventListener(
    'click',
    e => {
      currentMode = e.currentTarget.id

      if (currentMode === 'intuitive') {
        clearGrid()
      }
    },
    { capture: true }
  )
})

function randomColor() {
  const red = Math.floor(Math.random() * 255) + 1
  const green = Math.floor(Math.random() * 255) + 1
  const blue = Math.floor(Math.random() * 255) + 1

  return `rgb(${red}, ${green}, ${blue})`
}

function adjustIntensity(color, adjustment) {
  let alpha = Number(color.replace(/rgba?\(0, 0, 0, ([0-9.]+)\)/, '$1'))

  if (alpha < 1) {
    alpha += adjustment
  }

  return alpha === NaN ? 'rgb(0, 0, 0)' : `rgba(0, 0, 0, ${alpha})`
}

function clearGrid() {
  const etchGridSquare = document.querySelectorAll('#etch-grid div')

  etchGridSquare.forEach(square => {
    square.setAttribute('style', '')
  })
}
