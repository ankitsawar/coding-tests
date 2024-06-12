document.addEventListener("DOMContentLoaded", (event) => {
   // Gets the Mobile Nav icon by its ID
   let bars = document.getElementById('bars');

   // Gets the Mobile Nav container
   let mobileMenu = document.getElementById('mobileMenu');

   // Displays the Mobile Nav when clicked 
   bars.addEventListener('click', function () {
      mobileMenu.classList.toggle('hidden');
   });

   // For page load performance
   const intersectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
         if (entry.isIntersecting) {
            entry.target.classList.add('show');
            intersectionObserver.unobserve(entry.target);
         }
      });
   });

   document.querySelectorAll('.default-hide').forEach(element => {
      intersectionObserver.observe(element);
   });

});
