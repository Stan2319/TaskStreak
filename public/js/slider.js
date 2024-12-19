document.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector(".slider");
    const tweets = document.querySelectorAll(".tweet");
    
    // Clone each tweet and append it to the slider
    tweets.forEach(tweet => {
      const clone = tweet.cloneNode(true);
      slider.appendChild(clone);
    });
  
    let currentPosition = 0; // Track the current scroll position
  
    // Function to move the slider
    function moveSlider() {
      currentPosition -= .4; // Move left by .5px
      slider.style.transform = `translateX(${currentPosition}px)`;

      const firstTweetWidth = tweets[0].offsetWidth;
      if (Math.abs(currentPosition) >= (firstTweetWidth + 40) * tweets.length) {
        currentPosition = 0; // Reset position when half of the slider has scrolled
      }

      requestAnimationFrame(moveSlider); // Keep moving the slider
    }
  
    moveSlider(); // Start the scrolling
  });