const theme = 'theme';
const dataTheme = 'data-theme';
const themeTab = '.theme-tab';
const switcherBtn = '.switcher-btn';
const dark = 'dark';
const light = 'light';
const open = 'open';
const active = 'active';

const modalOpen = '[data-open]';
const modalClose = '[data-close]';
const isVisible = 'is-visible';

const dataFilter = '[data-filter]';
const portfolioData = '[data-item]';

const root = document.documentElement;

/* Theme */
const toggleTheme = document.querySelector(themeTab);
const switcher = document.querySelectorAll(switcherBtn);
const currentTheme = localStorage.getItem(theme); 

/* Portfolio */

const filterLink = document.querySelectorAll(dataFilter);
const portfolioItems = document.querySelectorAll(portfolioData);
const portfolioGrid = document.querySelector('.portfolio-grid');
const searchBox = document.querySelector('#search');

/* Modal */
const openModal = document.querySelectorAll(modalOpen);
const closeModal = document.querySelectorAll(modalClose);

const setActive = (elm, selector) => {
  if (document.querySelector(`${selector}.${active}`) !== null) {
    document.querySelector(`${selector}.${active}`).classList.remove(active);
  } 
  elm.classList.add(active); 
};

const setTheme = (val) => {
  if (val === dark) {
    root.setAttribute(dataTheme, dark);
    localStorage.setItem(theme, dark);
  } else {
    root.setAttribute(dataTheme, light);
    localStorage.setItem(theme, light);
  }
};

if (currentTheme) {
  root.setAttribute(dataTheme, currentTheme)
  switcher.forEach((btn) => {
    btn.classList.remove(active);
  });

  if (currentTheme === dark) {
    switcher[1].classList.add(active);
  } else {
    switcher[0].classList.add(active);
  }
}

function createCard() {
  const cardData = [
    {image: "./assets/images/portfolio-1.jpg", header: 'Web Development', title: 'Food Website', dataItem: "web"},
    {image: "./assets/images/portfolio-2.jpg", header: 'Web Development', title: 'Skate Website', dataItem: "web"},
    {image: "./assets/images/portfolio-3.jpg", header: 'Web Development', title: 'Eating Website', dataItem: "web"},
    {image: "./assets/images/portfolio-4.jpg", header: 'UI Design', title: 'Cool Design', dataItem: "ui"},
    {image: "./assets/images/portfolio-5.jpg", header: 'App Development', title: 'Game App', dataItem: "app"},
    {image: "./assets/images/portfolio-6.jpg", header: 'App Development', title: 'Gambling App', dataItem: "app"},
    {image: "./assets/images/portfolio-7.jpg", header: 'App Development', title: 'Money App', dataItem: "app"},
    {image: "./assets/images/portfolio-8.jpg", header: 'UI Design', type: 'Fantastic Design', dataItem: "ui"}
  ];

  cardData.forEach((dataObject) => {

    const card = document.createElement('div');
    card.className = 'portfolio-card';
    card.setAttribute("data-item", dataObject.dataItem);
    portfolioGrid.appendChild(card);

    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';
    card.appendChild(cardBody);

    const image = document.createElement('img');
    image.setAttribute("src", dataObject.image);
    image.setAttribute("alt", "portfolio code-icon")
    cardBody.appendChild(image);

    const anchor = document.createElement('a');
    anchor.setAttribute("href", "#");
    anchor.className = 'card-popup-box';
    cardBody.appendChild(anchor);

    const title = document.createElement('div');
    title.innerHTML = dataObject.title;
    anchor.appendChild(title);

    const header = document.createElement('h3');
    header.innerHTML = dataObject.header;
    anchor.appendChild(header);
  }
)}
createCard();

toggleTheme.addEventListener('click', function() {
  const tab = this.parentElement.parentElement;
  if (!tab.className.includes(open)) {
    tab.classList.add(open);
  } else {
    tab.classList.remove(open);
  }
});

for (const elm of switcher) {
  elm.addEventListener('click', function() {
    const toggle = this.dataset.toggle;
    setActive(elm, switcherBtn);
    setTheme(toggle);
  });
}

searchBox.addEventListener('keyup', (e) => {
  const searchInput = e.target.value.toLowerCase().trim();

  portfolioItems.forEach((card) => {
    if (card.dataset.item.includes(searchInput)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  }) 
});

for (const link of filterLink) {
  link.addEventListener('click', function() {
    setActive(link, '.filter-link')
    const filter = this.dataset.filter;
    portfolioItems.forEach((card) => {
      if (filter === 'all') {
        card.style.display = 'block';
      } else if (card.dataset.item === filter) {
        card.style.display = 'block'; 
      } else {
        card.style.display = 'none';
      }
    })
  })
}



// Full Site Modal "open buttons"
for (const element of openModal) {
  element.addEventListener('click', function() {
     const modalId = this.dataset.open;
     document.getElementById(modalId).classList.add(isVisible);
  })
}

for (const element of closeModal) {
  element.addEventListener('click', function() {
    this.parentElement.parentElement.classList.remove(isVisible)
  })
}