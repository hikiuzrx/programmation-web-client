document.addEventListener('DOMContentLoaded', function() {
     // Slider functionality
     const slider = document.querySelector('.slider');
     const slides = document.querySelectorAll('.slide');
     const prevBtn = document.querySelector('.prev');
     const nextBtn = document.querySelector('.next');
     let currentSlide = 0;
 
     function updateSlider() {
         slider.style.transform = `translateX(-${currentSlide * 100}%)`;
     }
 
     prevBtn.addEventListener('click', () => {
         currentSlide = (currentSlide - 1 + slides.length) % slides.length;
         updateSlider();
     });
 
     nextBtn.addEventListener('click', () => {
         currentSlide = (currentSlide + 1) % slides.length;
         updateSlider();
     });
 
     // Auto slide
     setInterval(() => {
         currentSlide = (currentSlide + 1) % slides.length;
         updateSlider();
     }, 5000);
 
     // Service items interaction
     const serviceItems = document.querySelectorAll('.service-item');
     
     serviceItems.forEach(item => {
         item.addEventListener('click', () => {
             serviceItems.forEach(i => i.classList.remove('active'));
             item.classList.add('active');
         });
     });
 
     // Mobile menu toggle (you'll need to add the hamburger button in HTML)
    /*  const hamburger = document.createElement('button');
     hamburger.classList.add('hamburger');
     hamburger.innerHTML = '☰';
     document.querySelector('.main-header').prepend(hamburger);
 
     hamburger.addEventListener('click', () => {
         document.querySelector('.main-nav').classList.toggle('show');
     }); */
 });