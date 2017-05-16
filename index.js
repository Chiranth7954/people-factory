const App = {

  init() {
    const personForm = document.querySelector('form')
    personForm.addEventListener('submit', this.handleSubmit.bind(this))
  },

  renderColor(colorName) {
    const colorRendered = document.createElement('div')
    colorRendered.style.backgroundColor = colorName
    colorRendered.style.height = '50px'
    colorRendered.style.width = '100px'
    return colorRendered
  },

  renderItem(name, value) {
    const itemRendered = document.createElement('li')
    itemRendered.innerHTML = `${name}: ${value}`
    return itemRendered
  },

  renderList(person) {
    const listRendered = document.createElement('ul')
    Array.from(person).map((input, _i, _formElements) => {
      if(input.value) {
        let value = input.value
        if(input.type === "color") {
          value = this.renderColor(value).outerHTML
        }
        const li = this.renderItem(input.name, value)
        listRendered.appendChild(li)
      }
    })
    return listRendered
  },

  handleSubmit(ev) {
    ev.preventDefault()
    const form = ev.target
    const details = document.querySelector('.details')

    const list = this.renderList(form.elements)
    details.appendChild(list)

    /*const elements = document.getElementsByTagName("input")
    details.appendChild(document.createTextNode("___Person___"))
    for(let i = 0; i < elements.length; i++) {
      let node = ""
      if(elements[i].type === "color") {
        node = renderColor(elements[i].value)
      } else {
        node = renderText(elements[i].value)
      }
      details.appendChild(node)
    }*/
  },
}

App.init()
