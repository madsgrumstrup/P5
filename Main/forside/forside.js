// Get modal element
var modal = document.getElementById('simpleModal');
// Get open modalbutton
var modalBtn = document.getElementById('slutBtn');
// Get close modalbutton
var closeBtn = document.getElementsByClassName('closeBtn')[0];

// Listen for open click
slutBtn.addEventListener('click', openModal);
// Listen for close click
closeBtn.addEventListener('click', closeModal);
// Listen for outside click
startBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

// Function to open modal
function openModal(){
  modal.style.display = 'block';
}

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
