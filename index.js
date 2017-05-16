const personForm = document.querySelector('form')

const renderColor = (colorName) => {
  const colorRendered = document.createElement('LI')
  colorRendered.style.backgroundColor = colorName
  colorRendered.style.height = '50px'
  colorRendered.style.width = '100px'
  return colorRendered
}

const renderText = (text, name) => {
  const textRendered = document.createElement('LI')
  textRendered.textContent = text
  return textRendered
}

const handleSubmit = (ev) => {
  ev.preventDefault()
  const form = ev.target
  const details = document.querySelector('.details')

  const elements = document.getElementsByTagName("input")
  details.appendChild(document.createTextNode("___Person___"))
  for(let i = 0; i < elements.length; i++) {
    let node = ""
    if(elements[i].type === "color") {
      node = renderColor(elements[i].value)
    } else {
      node = renderText(elements[i].value, elements[i].name)
    }
    details.appendChild(node)
  }
}

personForm.addEventListener('submit', handleSubmit)
