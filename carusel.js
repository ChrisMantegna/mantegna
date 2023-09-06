<script>
  // JavaScript code for auto-scrolling carousel
  let currentIndex = 0;
  const images = document.querySelectorAll('.carousel img');
  
  function nextImage() {
    images[currentIndex].style.display = 'none';
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].style.display = 'inline-block';
  }

  // Automatically scroll every 3 seconds (adjust as needed)
  setInterval(nextImage, 3000);
</script>
