const title = document.getElementById("animated-title");
const text = title.textContent;
title.textContent = "";

[...text].forEach((char, i) => {
    const span = document.createElement("span");
    span.textContent = char;
    span.style.animationDelay = `${i * 0.2}s`; // Delay between letters
    title.appendChild(span);
});

const hero = document.getElementById('hero');
const heroContent = document.getElementById('heroContent');

const observer = new IntersectionObserver(
    ([entry]) => {
        if (!entry.isIntersecting) {
            heroContent.classList.add('splash'); // Trigger splash
        } else {
            heroContent.classList.remove('splash'); // Reset when going back up
        }
    },
    { threshold: 0.3 } // Trigger when 30% is out of view
);
//    menubutton 
  const toggleBtn = document.getElementById('menu-toggle');
  const sideMenu = document.getElementById('side-menu');

  toggleBtn.addEventListener('click', () => {
    sideMenu.classList.toggle('active');
  });

  // Optional: Close menu when link is clicked
  document.querySelectorAll('#side-menu a').forEach(link => {
    link.addEventListener('click', () => {
      sideMenu.classList.remove('active');
    });
  });
//   menubutton