const darkBtn = document.getElementById('dark-mode');
const lightBtn = document.getElementById('light-mode');

darkBtn.addEventListener('click', () => {
  document.getElementById('style').href = 'darkStyle.css';
});

lightBtn.addEventListener('click', () => {
  document.getElementById('style').href = 'lightStyle.css';
});