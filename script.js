

// const hero = document.getElementById('hero');
// const heroContent = document.getElementById('heroContent');

// const observer = new IntersectionObserver(
//   ([entry]) => {
//     if (!entry.isIntersecting) {
//       heroContent.classList.add('splash'); // Trigger splash
//     } else {
//       heroContent.classList.remove('splash'); // Reset when going back up
//     }
//   },
//   { threshold: 0.3 } // Trigger when 30% is out of view
// );





//    menubutton 
   const toggleButton = document.getElementById('menu-toggle');
  const sideMenu = document.getElementById('side-menu');

  toggleButton.addEventListener('click', () => {
    sideMenu.classList.toggle('active');
  });
//   menubutton





// project section 

 document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const slider = document.querySelector('.slider');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          slides.forEach((slide, index) => {
            setTimeout(() => {
              slide.classList.add('animate-in');
            }, index * 500);
          });
        } else {
          // Remove class so animation can replay
          slides.forEach(slide => {
            slide.classList.remove('animate-in');
          });
        }
      });
    }, {
      threshold: 0.1
    });

    if (slider) {
      observer.observe(slider);
    }
  });

// project section 







// toool 


 document.addEventListener("DOMContentLoaded", () => {
    const icons = document.querySelectorAll(".tool-icon");
    const toolSection = document.querySelector("#tool");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          icons.forEach((icon, index) => {
            setTimeout(() => {
              icon.classList.add("animate");
            }, index * 150);
          });
        } else {
          icons.forEach(icon => {
            icon.classList.remove("animate");
          });
        }
      });
    }, {
      threshold: 0.4
    });

    if (toolSection) {
      observer.observe(toolSection);
    }
  });

// footer contact 

 const scrollElements = document.querySelectorAll('[data-scroll]');

  const elementInView = (el, offset = 100) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
      elementTop <= (window.innerHeight || document.documentElement.clientHeight) - offset
    );
  };

  const displayScrollElement = (element) => {
    element.classList.add('in-view');
  };

  const hideScrollElement = (element) => {
    element.classList.remove('in-view');
  };

  const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
      if (elementInView(el)) {
        displayScrollElement(el);
      } else {
        hideScrollElement(el); // remove this line if you want animation only once
      }
    });
  };

  window.addEventListener('scroll', () => {
    window.requestAnimationFrame(handleScrollAnimation);
  });

  window.addEventListener('load', handleScrollAnimation);







   const title = document.getElementById("animated-title");

    const staticText = "Ui/Ux ";
    const firstWord = "Designer";
    const secondWord = "Developer";
    const typingSpeed = 200;
    const erasingSpeed = 150;
    const delayBetween = 1050;

    const fullText = staticText + firstWord;

    // Step 1: Animate full "Ui/Ux Designer" using riseUp only once
    fullText.split("").forEach((char, i) => {
      const span = document.createElement("span");
      span.textContent = char;
      span.classList.add("rise"); // Apply rise only here
      span.style.animationDelay = `${i * 0.2}s`;
      title.appendChild(span);
    });

    // Step 2: After riseUp ends, start typewriter effect (without riseUp)
    setTimeout(() => {
      const spans = title.querySelectorAll("span");
      const staticSpans = [...spans].slice(0, staticText.length);

      const dynamic = document.createElement("span");
      dynamic.classList.add("dynamic-text");

      title.innerHTML = ""; // Clear all
      staticSpans.forEach(s => {
        s.style.animation = "none"; // Clear any leftover animation
        s.style.opacity = "1";
        s.style.transform = "none";
        title.appendChild(s);
      });

      title.appendChild(dynamic);

      const words = [firstWord, secondWord];
      let wordIndex = 1; // Start with second word
      let charIndex = 0;
      let isDeleting = false;

      function typeLoop() {
        const word = words[wordIndex];
        if (isDeleting) {
          dynamic.textContent = word.substring(0, charIndex--);
          if (charIndex < 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(typeLoop, typingSpeed);
          } else {
            setTimeout(typeLoop, erasingSpeed);
          }
        } else {
          dynamic.textContent = word.substring(0, charIndex++);
          if (charIndex > word.length) {
            isDeleting = true;
            setTimeout(typeLoop, delayBetween);
          } else {
            setTimeout(typeLoop, typingSpeed);
          }
        }
      }

      typeLoop();
    }, (fullText.length * 200) + 600); // Wait for riseUp to finish



    function openPopup(imageSrc) {
  document.getElementById('popup-image').src = imageSrc;
  document.getElementById('popup-overlay').style.display = 'flex';
}

function closePopup() {
  document.getElementById('popup-overlay').style.display = 'none';
}

// Optional: close popup when clicking outside
window.onclick = function(event) {
  const popup = document.getElementById('popup-overlay');
  if (event.target === popup) {
    popup.style.display = 'none';
  }
}