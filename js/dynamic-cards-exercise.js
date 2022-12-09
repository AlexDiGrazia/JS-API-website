


const Card = () => {
  
  const cardData = [
    {image: "./assets/images/portfolio-1", header: 'Web Development', type: 'Food Website'},
    {image: "./assets/images/portfolio-2", header: 'Web Development', type: 'Skate Website'},
    {image: "./assets/images/portfolio-3", header: 'Web Development', type: 'Eating Website'},
    {image: "./assets/images/portfolio-4", header: 'UI Design', type: 'Cool Design'},
    {image: "./assets/images/portfolio-5", header: 'App Development', type: 'Game App'},
    {image: "./assets/images/portfolio-6", header: 'App Development', type: 'Gambling App'},
    {image: "./assets/images/portfolio-7", header: 'App Development', type: 'Money App'},
    {image: "./assets/images/portfolio-8", header: 'UI Design', type: 'Fantastic Design'}
  ];

  
  <div class="portfolio-card" data-item="web">
          <div class="card-body">
            <img src="./assets/images/portfolio-2.jpg" alt="portfolio code-icon"></img> 
            <a href="#" class="card-popup-box">
              <div>Web Development</div>
              <h3>Skate Website</h3>
            </a>
          </div>
        </div>

  createCards();
}

const card = document.createElement('div');
card.classList.add('portfolio-card');
card.setAttribute("data-item", "web");
card.innerHTML('Here is my div Bitches');

document.body.appendChild(card);










{/* <div cla ss="portfolio-card" data-item="web">
          <div class="card-body">
            <img src="./assets/images/portfolio-1.jpg" alt="portfolio code-icon">
            <a href="#" class="card-popup-box">
              <div>Web Development</div>
              <h3>Food Website</h3>
            </a>
          </div>
        </div>
        <div class="portfolio-card" data-item="web">
          <div class="card-body">
            <img src="./assets/images/portfolio-2.jpg" alt="portfolio code-icon">
            <a href="#" class="card-popup-box">
              <div>Web Development</div>
              <h3>Skate Website</h3>
            </a>
          </div>
        </div>
        <div class="portfolio-card" data-item="web">
          <div class="card-body">
            <img src="./assets/images/portfolio-3.jpg" alt="portfolio code-icon">
            <a href="#" class="card-popup-box">
              <div>Web Development</div>
              <h3>Eating Website</h3>
            </a>
          </div>
        </div>
        <div class="portfolio-card" data-item="ui">
          <div class="card-body">
            <img src="./assets/images/portfolio-4.jpg" alt="portfolio code-icon">
            <a href="#" class="card-popup-box">
              <div>UI Design</div>
              <h3>Cool Design</h3>
            </a>
          </div>
        </div>
        <div class="portfolio-card" data-item="app">
          <div class="card-body">
            <img src="./assets/images/portfolio-5.jpg" alt="portfolio code-icon">
            <a href="#" class="card-popup-box">
              <div>App Development</div>
              <h3>Game App</h3>
            </a>
          </div>
        </div>
        <div class="portfolio-card" data-item="app">
          <div class="card-body">
            <img src="./assets/images/portfolio-6.jpg" alt="portfolio code-icon">
            <a href="#" class="card-popup-box">
              <div>App Development</div>
              <h3>Gambling App</h3>
            </a>
          </div>
        </div>
        <div class="portfolio-card" data-item="app">
          <div class="card-body">
            <img src="./assets/images/portfolio-7.jpg" alt="portfolio code-icon">
            <a href="#" class="card-popup-box">
              <div>App Development</div>
              <h3>Money App</h3>
            </a>
          </div>
        </div>
        <div class="portfolio-card" data-item="ui">
          <div class="card-body">
            <img src="./assets/images/portfolio-8.jpg" alt="portfolio code-icon">
            <a href="#" class="card-popup-box">
              <div>UI Design</div>
              <h3>Fantastic Design</h3>
            </a>
          </div>
        </div> */}