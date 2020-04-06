// Get modal element

// Get close modalbutton
var closeBtn = document.getElementsByClassName('closeBtn')[0];

// Listen for outside click
closeBtn.addEventListener('click', closeModal);
// Listen for close click
startBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);



// Function to close modal
function closeModal(){
  modal.style.display = 'none';
}

// Function to close modal if outside click
function outsideClick(e){
  if(e.target == modal){
  modal.style.display = 'none';
  }

}
