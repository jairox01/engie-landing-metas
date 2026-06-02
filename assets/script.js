const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyB5b3hr3FcHat3g6-amK6-qkR-hguWC-rF5YLFcPgAWWkjoPNAVrpS2dDNYN3iZVgHsQ/exec';
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

  const payload = { nombre, area };

  fetch(APPS_SCRIPT_URL, {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  })
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
