const menu = document.querySelector('.menu');
const navigation = document.querySelector('header nav');

menu?.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('open');
  menu.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('header nav a').forEach((link) => {
  link.addEventListener('click', () => {
    navigation.classList.remove('open');
    menu?.setAttribute('aria-expanded', 'false');
  });
});
