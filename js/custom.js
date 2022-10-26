(function() {

  $(window).on('load', function() {
    // fades out when the page is fully loaded
    $('.loader').delay(2000).fadeOut(500);
  });

  // typewriter animation
  function typeWriter() {
    var i = 0;
    var txt = 'a junior web & graphic designer';
    var speed = 150;

    function typeWriterEffect() {
      if (i < txt.length) {
        document.getElementById('tagline').innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriterEffect, speed);
      }
    }
    typeWriterEffect();
  }
  typeWriter();
  // typewriter animation ends

}());
