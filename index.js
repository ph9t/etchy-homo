function clearGrid() {
  const etchGridSquare = document.querySelectorAll('#etch-grid div')

  etchGridSquare.forEach(square => {
    square.setAttribute('style', '')
  })
}
