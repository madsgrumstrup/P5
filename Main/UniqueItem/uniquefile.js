const openModalButton = document.querySelectorAll('[data-modal-target]')
const closeButton = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')
const openHestButton = document.querySelectorAll('[data-hest-target]')
var antal = 1;
var antalEl = document.getElementById('antal');


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


openHestButton.forEach(button => {
  button.addEventListener('click',() => {
    const hest = document.querySelector(button.dataset.hestTarget)
    openHest(hest)
  })
})

overlay.addEventListener('click', () => {
  const hest = document.querySelectorAll('.hest.aktiv')
  hest.forEach(hest => {
    closeHest(hest)
  })
})

function openHest(hest) {
  if (hest == null) return
  hest.classList.add('aktiv')
  overlay.classList.add('aktiv')
}

function closeHest(hest) {
  if (hest == null) return
  hest.classList.remove('aktiv')
  overlay.classList.remove('aktiv')
}


function plus() {
  antal++;
  antalEl.value = antal;
}

function minus() {
  if (antal > 1)
  antal--;
  antalEl.value = antal;
}
