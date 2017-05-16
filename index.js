const personForm = document.querySelector('form')

const renderName = (personName) => {
  const em = document.createElement('em')
  em.textContent = personName
  return em
}

const renderColor = (hairColor) => {
  const colorDiv = document.createElement('div')
  colorDiv.style.backgroundColor = hairColor
  colorDiv.style.height = '50px'
  colorDiv.style.width = '100px'
  return colorDiv
}

const handleSubmit = (ev) => {
  ev.preventDefault()
  const form = ev.target
  const details = document.querySelector('.details')

  const personName = form.personName.value
  const hairColor = form.hairColor.value
  const age = form.age.value
  const birthplace = form.birthplace.value


  const nameDiv = renderName(personName)
  const colorDiv = renderColor(hairColor)

  details.innerHTML = `
    <ul>
      <li>Name: ${personName}</li>
      <li>Hair Color: ${colorDiv.outerHTML}</li>
      <li>Age: ${age}</li>
      <li>Birthplace: ${birthplace}</li>
    </ul>
  `

  details.appendChild(nameDiv)
}

personForm.addEventListener('submit', handleSubmit)
