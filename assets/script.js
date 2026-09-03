const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxWJHrbICicAC3bzczXNV_CqhirukfZFvvA8QqLKCuzSiHSzEiEIdU-3ljJCJnsnOG-dQ/exec';

function registrar(e) {
  e.preventDefault();

  const nombre = document.getElementById('nombre').value.trim();
  const area   = document.getElementById('area').value.trim();
  const correo = document.getElementById('correo').value.trim();
  const errorMsg  = document.getElementById('error-msg');
  const btnSubmit = document.getElementById('btn-submit');
  const btnImg    = document.getElementById('btn-img');
  const spinner   = document.getElementById('btn-spinner');

  errorMsg.classList.add('hidden');

  if (!nombre || !area || !correo) {
    errorMsg.classList.remove('hidden');
    return;
  }

  btnImg.classList.add('hidden');
  spinner.classList.remove('hidden');
  btnSubmit.disabled = true;

  const url = `${APPS_SCRIPT_URL}?tipo=formulario&nombre=${encodeURIComponent(nombre)}&area=${encodeURIComponent(area)}&telefono=${encodeURIComponent(correo)}`;

  fetch(url, { method: 'GET', credentials: 'omit', mode: 'no-cors' })
    .finally(() => {
      document.getElementById('success-view').classList.remove('hidden');
      document.getElementById('success-view').scrollTop = 0;
    });
}
