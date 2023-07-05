
// JavaScript code to toggle mobile menu
document.getElementById('mobile-menu-toggle').addEventListener('click', function () {
  document.getElementById('mobile-menu').classList.toggle('hidden');
});
const scrollElement = document.querySelector('.scroll-element');




// line width increaser
window.addEventListener('scroll', function () {
  const scrollPosition = window.scrollY;

  // Calculate the new width based on the scroll position
  const newWidth = Math.max(0, 25 + scrollPosition * 0.1) + '%';

  // Apply the new width to the scroll element
  scrollElement.style.width = newWidth;
});


// text animation
const textElement = document.getElementById('animated-text');
const text = "IEEE CIS LPU";
let charIndex = 0;

function displayText() {
  if (charIndex < text.length) {
    textElement.textContent += text.charAt(charIndex);
    charIndex++;
    setTimeout(displayText, 100); // Delay between characters (in milliseconds)
  } else {
    setTimeout(resetText, 2000); // Delay before resetting (in milliseconds)
  }
}
function resetText() {
  textElement.textContent = "";
  charIndex = 0;
  displayText();
}
displayText();




// announcement section

// Get the toggle button element
const toggleButton = document.querySelector('[data-drawer-target="drawer-example"]');
// Get the drawer element
const drawer = document.getElementById('drawer-example');
// Function to show the drawer
function showDrawer() {
  drawer.classList.add('translate-x-0');
}
// Function to hide the drawer
function hideDrawer() {
  drawer.classList.remove('translate-x-0');
}

// Add event listener to the toggle button
toggleButton.addEventListener('click', () => {
  const drawerShow = toggleButton.getAttribute('data-drawer-show');
  const drawerHide = toggleButton.getAttribute('data-drawer-hide');

  if (drawer.classList.contains('translate-x-0')) {
    // If the drawer is already shown, hide it
    hideDrawer();
    toggleButton.setAttribute('data-drawer-show', drawerHide);
  } else {
    // If the drawer is hidden, show it
    showDrawer();
    toggleButton.setAttribute('data-drawer-show', drawerShow);
  }
});

// Add event listener to the close button inside the drawer
const closeButton = drawer.querySelector('[data-drawer-hide="drawer-example"]');
closeButton.addEventListener('click', hideDrawer);



