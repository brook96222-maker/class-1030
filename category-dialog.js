export function setupCategoryDialog(createCategory) {
  const backdrop = document.querySelector('#categoryModal');
  const form = document.querySelector('#categoryForm');
  const input = document.querySelector('#categoryName');
  const error = document.querySelector('#categoryError');
  const openButton = document.querySelector('#addCat');
  const closeButton = document.querySelector('#closeCategoryModal');
  const cancelButton = document.querySelector('#cancelCategory');
  if (!backdrop || !form || !input || !openButton) return;

  let returnFocus = null;
  function close() {
    backdrop.classList.remove('open');
    backdrop.setAttribute('aria-hidden', 'true');
    form.reset();
    error.hidden = true;
    error.textContent = '';
    returnFocus?.focus();
  }

  openButton.addEventListener('click', () => {
    returnFocus = document.activeElement;
    form.reset();
    error.hidden = true;
    error.textContent = '';
    backdrop.classList.add('open');
    backdrop.setAttribute('aria-hidden', 'false');
    input.focus();
  });

  closeButton?.addEventListener('click', close);
  cancelButton?.addEventListener('click', close);
  backdrop.addEventListener('click', event => {
    if (event.target === backdrop) close();
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && backdrop.classList.contains('open')) close();
  });

  form.addEventListener('submit', event => {
    event.preventDefault();
    const name = input.value.trim();
    if (!name) {
      input.focus();
      return;
    }
    if (!createCategory(name)) {
      error.textContent = '這個分類已經存在，請換一個名稱。';
      error.hidden = false;
      input.focus();
      input.select();
      return;
    }
    close();
  });
}
