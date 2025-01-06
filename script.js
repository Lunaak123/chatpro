// Select elements
const maleNameInput = document.getElementById('maleName');
const femaleNameInput = document.getElementById('femaleName');
const nextButton = document.getElementById('nextToStep2');
const loveYesButton = document.getElementById('loveYes');
const loveNoButton = document.getElementById('loveNo');
const result = document.getElementById('result');
const heartContainer = document.querySelector('.heart-container');
const resultText = document.getElementById('resultText');
const steps = document.querySelectorAll('.step');

function showStep(stepIndex) {
  steps.forEach((step, index) => {
    step.classList.toggle('active', index === stepIndex);
  });
}

nextButton.addEventListener('click', () => {
  if (maleNameInput.value && femaleNameInput.value) {
    showStep(1);
  } else {
    alert('Please enter both names.');
  }
});

loveYesButton.addEventListener('click', () => {
  resultText.textContent = `${maleNameInput.value} ❤️ ${femaleNameInput.value}`;
  heartContainer.classList.add('heart-join');
  showStep(2);
});

loveNoButton.addEventListener('click', () => {
  resultText.textContent = `${maleNameInput.value} 💔 ${femaleNameInput.value}`;
  heartContainer.classList.add('heart-broken');
  showStep(2);
});
