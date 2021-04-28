export const projects = [
  {
    id: 2,
    title: 'Mafia Go',
    image:
      'https://raw.githubusercontent.com/harpalassi/personal-portfolio/master/src/images/car-mate.jpg',
    description: ` Mafia Go is a smartphone app 
    that combines gaming with the real world. 
    The game uses location tracking and mapping
    technology to create an 'augmented reality' where players have to capture and 
    defence mafia buildings in real locations. Unity 3D engine is used to create the game. 
    Google Firebase Real-time Database is a cloud-hosted NoSQL database that has been used to store and sync between our users in real-time.`,
    environment: ` CSharp, Firebase, Unity, REST`,
  },
  {
    id: 3,
    title: 'All My Books',
    image:
      'https://raw.githubusercontent.com/harpalassi/personal-portfolio/master/src/images/allmybooks.jpg',
    description: ` A full-stack app that allows users to quickly search for, save, and discard books of interest. Books are dynamically displayed with their respective titles, authors, description, and thumbnail via the Google Books API, and saved to a MongoDB database.`,
    environment: ` React, React Router, MongoDB, Express, Node.js, Flexbox, Mongoose`,
    codelink: `https://www.github.com/harpalassi/all-my-books`,
    demolink: `https://all-my-books.herokuapp.com`,
  },
  {
    id: 4,
    title: 'Mixmag News Scraper',
    image: `https://raw.githubusercontent.com/harpalassi/personal-portfolio/master/src/images/mixmag-scraper.jpg`,
    description: ` A full-stack app which scrapes the latest news from mixmag.net, stores them in a database, and presents them in a clean layout. Users may also add and delete comments on each article via a pop-up modal. The total number of comments are shown on each article.`,
    environment: ` JavaScript, Node.js, jQuery, MongoDB, Mongoose, Express, Axios, Cheerio, Materialize, Handlebars`,
    codelink: `https://github.com/harpalassi/mixmag-news-scraper`,
    demolink: `https://mixmag-news-scraper.herokuapp.com`,
  },
  {
    id: 6,
    title: 'Twitter Data Analyser',
    image: `https://raw.githubusercontent.com/harpalassi/personal-portfolio/master/src/images/twitter-analyser.jpg`,
    description: ` A web app which analyses and displays Donald Trump's tweets into a word bubble and a bar graph. These show his most frequently used words and the time of day they were posted. His tweets are juxtaposed by the latest headlines from Fox News.`,
    environment: ` JavaScript, jQuery, Materialize, Firebase, jQCloud, Chart.js`,
    codelink: `https://github.com/harpalassi/twitter-data-analyser`,
    demolink: `https://harpalassi.github.io/twitter-data-analyser`,
  },
];

export const contactLinks = [
  {
    id: 1,
    link: `https://www.linkedin.com/in/maxklein1992/`,
    name: `LinkedIn`,
    icon: `fab fa-linkedin`
  },
  {
    id: 2,
    link: `mailto:mcklein1992@gmail.com`,
    name: `E-mail`,
    icon: `far fa-envelope`
  },
  {
    id: 3,
    link: `https://github.com/maxklein1992`,
    name: `GitHub`,
    icon: `fab fa-github-square`
  },
];
