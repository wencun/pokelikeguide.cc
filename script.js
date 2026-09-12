const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.site-header nav');
const dialog = document.querySelector('.search-dialog');
const toast = document.querySelector('.toast');

menuButton.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', isOpen);
});

document.querySelectorAll('[data-search-open]').forEach((button) => button.addEventListener('click', () => dialog.showModal()));
document.querySelector('.close-search').addEventListener('click', () => dialog.close());
document.addEventListener('keydown', (event) => {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
    event.preventDefault();
    dialog.showModal();
    document.querySelector('#site-search').focus();
  }
});

document.querySelectorAll('.filter-pills button').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelector('.filter-pills .active').classList.remove('active');
    button.classList.add('active');
    document.querySelectorAll('.game-card').forEach((card) => {
      card.classList.toggle('hidden', button.dataset.filter !== 'all' && !card.dataset.platform.includes(button.dataset.filter));
    });
  });
});

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  window.setTimeout(() => toast.classList.remove('show'), 2800);
}

document.querySelector('.hero-search').addEventListener('submit', (event) => {
  event.preventDefault();
  const query = event.currentTarget.querySelector('input').value.trim();
  showToast(query ? `Searching the field guide for “${query}”…` : 'Type something to start exploring.');
});

document.querySelector('.newsletter form').addEventListener('submit', (event) => {
  event.preventDefault();
  showToast('Welcome to the field notes! Check your inbox.');
  event.currentTarget.reset();
});
