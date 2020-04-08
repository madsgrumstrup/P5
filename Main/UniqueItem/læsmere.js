const openHestButton = document.querySelectorAll('[data-hest-target]')
const closeHestButton = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openHestButton.forEach(button => {
  button.addEventListener('click',() => {
    const hest = document.querySelector(button.dataset.hestTarget)
    openModal(hest)
  })
})

overlay.addEventListener('click', () => {
  const hest = document.querySelectorAll('.hest.aktiv')
  hest.forEach(hest => {
    closeModal(hest)
  })
})

function openModal(hest) {
  if (hest == null) return
  hest.classList.add('aktiv')
  overlay.classList.add('aktiv')
}

function closeModal(hest) {
  if (hest == null) return
  hest.classList.remove('aktiv')
  overlay.classList.remove('aktiv')
}
