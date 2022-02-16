let checkbox = document.querySelector('input[name="theme"]');
let htmlElement = document.documentElement;

checkbox.addEventListener('change', () => {
  if(checkbox.checked) {
    smoothTransition();
    htmlElement.setAttribute('data-theme', 'light');
  } else {
    smoothTransition();
    htmlElement.setAttribute('data-theme', 'dark');
  }
});

let smoothTransition = () => {
  htmlElement.classList.add('transition');

  window.setTimeout(() => {
    htmlElement.classList.remove('transition');
  }, 1000);
}