
 // Modal functionality
 const openModalButton = document.getElementById('openModalButton');
 const closeModalButton = document.getElementById('closeModalButton');
 const modal = document.getElementById('modal');
 
 // Open the modal
 openModalButton.addEventListener('click', () => {
   modal.style.display = 'flex'; // Show the modal
 });
 
 // Close the modal
 closeModalButton.addEventListener('click', () => {
   modal.style.display = 'none'; // Hide the modal
 });
 
 // Close the modal when clicking outside
 window.addEventListener('click', (event) => {
   if (event.target === modal) {
     modal.style.display = 'none';
   }
 });
 