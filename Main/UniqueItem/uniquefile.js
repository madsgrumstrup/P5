const openModalButton = document.querySelectorAll('[data-modal-target]')
const closeModalButton = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButton.forEach(button => {
  button.addEventListener('click',() => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.aktiv')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('aktiv')
  overlay.classList.add('aktiv')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('aktiv')
  overlay.classList.remove('aktiv')
}
