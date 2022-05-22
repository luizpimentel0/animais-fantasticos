export default function initTabNav() {
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
  const tabContent = document.querySelectorAll('[data-tab="content"] section');
  tabContent[0].classList.add('active');

  function activeTab(index) {
    tabContent.forEach((section) => {
      section.classList.remove('active');
    });
    const direction = tabContent[index].dataset.anime;
    tabContent[index].classList.add('active', direction);
  }

  if (tabMenu.length && tabContent.length) {
    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        activeTab(index);
      });
    });
  }
}
