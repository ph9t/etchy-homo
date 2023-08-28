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
function clearGrid() {
  const etchGridSquare = document.querySelectorAll('#etch-grid div')

  etchGridSquare.forEach(square => {
    square.setAttribute('style', '')
  })
}
