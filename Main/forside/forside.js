// Get modal element
var modal = document.getElementById('simpleModal');

// Get close modalbutton
var closeBtn = document.getElementsByClassName('closeBtn')[0];


// Listen for close click
startBtn.addEventListener('click', closeModal);


// Listen for outside click
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
