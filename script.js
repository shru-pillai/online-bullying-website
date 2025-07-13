// Form submission
function handleSubmit(event) {
  event.preventDefault();
  const name = document.getElementById('name').value.trim();
  const message = document.getElementById('message').value.trim();
  if (name && message) {
    document.getElementById('response').innerText = `Thanks, ${name}, for sharing your opinion!`;
    document.getElementById('name').value = '';
    document.getElementById('message').value = '';
  }
}

// Toggle Light/Dark Mode
document.getElementById('themeToggle').addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
});
