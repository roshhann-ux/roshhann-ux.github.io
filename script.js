const title = document.getElementById("animated-title");
const text = title.textContent;
title.textContent = "";

[...text].forEach((char, i) => {
  const span = document.createElement("span");
  span.textContent = char;
  span.style.animationDelay = `${i * 0.2}s`; // Delay between letters
  title.appendChild(span);
});

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