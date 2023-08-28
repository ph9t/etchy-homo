const style = getComputedStyle(document.body)
const etchGrid = document.getElementById('etch-grid')
const modeList = document.querySelectorAll('ul li')

let currentMode = 'classic'

window.addEventListener('load', createGrid)

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

function createGrid() {
  let width = Number(style.getPropertyValue('--square-number'))

  const gridBorder =
    '<img id="grid-border" src="./images/picture-frame.png" alt="A picture frame">'
  if (etchGrid.innerHTML !== gridBorder) etchGrid.innerHTML = gridBorder

  let x = 1,
    y = 1

  for (let i = 0; i < width ** 2; i++) {
    if (y === width + 1) {
      x += 1
      y = 1
    }

    const square = document.createElement('div')
    square.setAttribute('id', `${x}-${y}`)

    square.addEventListener('mouseover', function () {
      if (currentMode === 'classic') this.style['background-color'] = 'black'
      else if (currentMode === 'rainbow') {
        this.style['background-color'] = randomColor()
      } else {
        const bgColor = this.style['background-color']

        if (!bgColor) {
          this.style['background-color'] = 'rgb(0, 0, 0, 0.1)'
        } else {
          this.style['background-color'] = adjustIntensity(bgColor, 0.1)
        }
      }
    })

    etchGrid.appendChild(square)
    y += 1
  }
}

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
