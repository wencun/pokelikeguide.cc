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

const appendAdScript = (src, options = {}) => {
  if (document.querySelector(`script[src="${src}"]`)) return;

  const script = document.createElement('script');
  script.src = src;
  script.async = options.async ?? false;
  if (options.cfAsync === false) script.dataset.cfasync = 'false';
  (options.parent || document.body).append(script);
};

const mountAnswerAd = (answerBody) => {
  const containerId = 'container-b87b668a48c79cbabf012f126c397ec0';
  if (document.getElementById(containerId)) return;

  const container = document.createElement('div');
  container.id = containerId;
  container.className = 'answer-ad';
  answerBody.append(container);

  appendAdScript(
    'https://pl31325133.profitableratecpmnetwork.com/b87b668a48c79cbabf012f126c397ec0/invoke.js',
    { async: true, cfAsync: false, parent: answerBody },
  );
};

const answerBody = document.querySelector('.answer-body');
if (answerBody) {
  const reveal = answerBody.closest('details');
  if (reveal && !reveal.open) {
    reveal.addEventListener('toggle', () => {
      if (reveal.open) mountAnswerAd(answerBody);
    }, { once: true });
  } else {
    mountAnswerAd(answerBody);
  }
}

appendAdScript('https://pl31325131.profitableratecpmnetwork.com/cf/d1/a6/cfd1a6892f5f97772342d8e6891161e1.js');
appendAdScript('https://pl31325134.profitableratecpmnetwork.com/df/53/23/df5323aa1e62585a69e5b0b0c2ae0903.js');
