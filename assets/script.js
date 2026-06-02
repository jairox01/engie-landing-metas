const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbx4z7K0FpF4XVVcd6r11CigwM2hAi0MjrWe61eN7XHUMYvGH2vJ55tnfX6ZBLQ8EQWHaA/exec';

function registrar() {
  const nombre = document.getElementById('nombre').value.trim();
  const area = document.getElementById('area').value.trim();
  const errorMsg = document.getElementById('error-msg');
  const btnText = document.getElementById('btn-text');
  const btnSpinner = document.getElementById('btn-spinner');
  const btnSubmit = document.getElementById('btn-submit');

  errorMsg.classList.add('hidden');

  if (!nombre || !area) {
    errorMsg.classList.remove('hidden');
    return;
  }

  btnText.textContent = 'Enviando...';
  btnSpinner.classList.remove('hidden');
  btnSubmit.disabled = true;

  const url = `${APPS_SCRIPT_URL}?nombre=${encodeURIComponent(nombre)}&area=${encodeURIComponent(area)}`;

  fetch(url, { method: 'GET', credentials: 'omit', mode: 'no-cors' })
    .finally(function() {
      document.getElementById('form-view').classList.add('hidden');
      document.getElementById('success-view').classList.remove('hidden');
    });
}
