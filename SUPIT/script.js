HesGallery.setOptions({
    wrapAround: true,
    showImageCount: false
});

$('nav a').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top
      },
      800,
      function() {
        window.location.hash = hash;
      }
    );
  }
});

const nav = document.querySelector('nav');
const video = document.querySelector('.video-wrapper');

$(document).ready(function(){
    $(window).scroll(function(){
        if ($(window).scrollTop() > 400){
        	
            $('nav').css({'animation':'navAnimation 1.2s forwards'});
        } else if ($(window).scrollTop() <= 100) {
        	
        	$('nav').css('animation','none');

        }
    });
});
      	
fetch('http://www.fulek.com/VUA/SUPIT/GetCategoriesAndFoods').then(response => {
  return response.json();
}).then(data => {
  // Work with JSON data here
  console.log(data);
}).catch(err => {
  // Do something for an error here
});
   