// Get modal element
var modal = document.getElementById('simplemModal');
// Get open modalbutton
var modalBtn = document.getElementById('modalBtn');
// Get close modalbutton
var closeBtn = document.getElementById('closeBtn');

// Listen for click
modalBtn.addEventListener('click', openModal);

//Function to open modal
function openModal(){
  modal.style.display = 'block';
}
