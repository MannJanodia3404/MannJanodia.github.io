/* ============================================================
   modal.js — Opens / closes project & skill detail modals
   ============================================================ */

(function () {
  /* Hide all modal contents on page load */
  document.querySelectorAll('.modal-content').forEach(m => (m.style.display = 'none'));

  window.openModal = function (id) {
    document.querySelectorAll('.modal-content').forEach(m => (m.style.display = 'none'));
    const m = document.getElementById(id);
    if (!m) return;
    m.style.display = 'block';
    document.getElementById('overlay').classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  window.closeModal = function () {
    document.getElementById('overlay').classList.remove('open');
    document.body.style.overflow = '';
  };

  window.handleOverlayClick = function (e) {
    if (e.target === document.getElementById('overlay')) closeModal();
  };

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });
})();
