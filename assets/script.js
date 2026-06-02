const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyF7fxe_4O2dPa9ik279QzztyqxtvFtq7IyTZpBYkSjrc_9tW86IOnfn-xbu3g_qXyvFw/exec';

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

  fetch(url, { method: 'GET', mode: 'no-cors' })
  .then(() => {
    document.getElementById('form-view').classList.add('hidden');
    document.getElementById('success-view').classList.remove('hidden');
  })
  .catch(() => {
    btnText.textContent = 'Registrar Avance';
    btnSpinner.classList.add('hidden');
    btnSubmit.disabled = false;
    errorMsg.textContent = 'Hubo un error. Por favor intenta de nuevo.';
    errorMsg.classList.remove('hidden');
  });
}
