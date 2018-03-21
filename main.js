// Get modal element
var modal = document.getElementById('simpleModal');
//Get open modal button
var modalBtn = document.getElementById('modalBtn');
//Get close button
var closeBtn = document.getElementById('closeBtn');

//Listen for click
modalBtn.addEventListener('click', openModal);
//Function to open modal
function openModal(){
    modal.style.display = 'block';
}

//Listen for close
closeBtn.addEventListener('click', closeModal);
//Function to close modal
function closeModal(){
    modal.style.display = 'none';
}


//Listan for outside click
window.addEventListener('click', clickOutside);
function clickOutside(e){
    if(e.target == modal){
        modal.style.display = 'none';
    }
}

