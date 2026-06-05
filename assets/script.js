const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxWJHrbICicAC3bzczXNV_CqhirukfZFvvA8QqLKCuzSiHSzEiEIdU-3ljJCJnsnOG-dQ/exec';

// Captura el teléfono del parámetro de la URL al cargar
const urlParams = new URLSearchParams(window.location.search);
const phoneParam = urlParams.get('phone') || '';

// Si viene con teléfono, registra la visita automáticamente
if (phoneParam) {
  fetch(`${APPS_SCRIPT_URL}?tipo=visita&telefono=${encodeURIComponent(phoneParam)}`, {
    method: 'GET',
    credentials: 'omit',
    mode: 'no-cors'
  });
}

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

  const url = `${APPS_SCRIPT_URL}?tipo=formulario&nombre=${encodeURIComponent(nombre)}&area=${encodeURIComponent(area)}&telefono=${encodeURIComponent(phoneParam)}`;

  fetch(url, { method: 'GET', credentials: 'omit', mode: 'no-cors' })
    .finally(function () {
      // Ocultar toda la sección del formulario y el hero
      document.querySelector('.header').classList.add('hidden');
      document.querySelector('.hero').classList.add('hidden');
      document.querySelector('.urgency-bar').classList.add('hidden');
      document.getElementById('form-view').classList.add('hidden');
      // Mostrar confirmación
      document.getElementById('success-view').classList.remove('hidden');
      // Scroll al inicio
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}
