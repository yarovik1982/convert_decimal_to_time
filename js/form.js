export function create(formContainer, type, html){
   const form = document.createElement('form')
   form.className = 'form'
   form.id = type
   formContainer.innerHTML = ''
   form.insertAdjacentHTML('beforeend', html)
   formContainer.append(form)
}