const personForm = document.querySelector('form')

const renderColor = (colorName) => {
  const colorRendered = document.createElement('div')
  colorRendered.style.backgroundColor = colorName
  colorRendered.style.height = '50px'
  colorRendered.style.width = '100px'
  return colorRendered
}

const renderItem = (name, value) => {
  const itemRendered = document.createElement('li')
  itemRendered.innerHTML = `${name}: ${value}`
  return itemRendered
}

const renderList = (person) => {
  const listRendered = document.createElement('ul')
  Object.keys(person).map((key, _i, _keys) => {
    const li = renderItem(key, person[key])
    listRendered.appendChild(li)
  })
  return listRendered
}

const handleSubmit = (ev) => {
  ev.preventDefault()
  const form = ev.target
  const details = document.querySelector('.details')

  const person = {
    personName: form.personName.value,
    hairColor: renderColor(form.hairColor.value).outerHTML,
    age: form.age.value,
    birthplace: form.birthplace.value,
  }

  const list = renderList(person)
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
}

personForm.addEventListener('submit', handleSubmit)
