import PageController from './controller/page';
import './main.css';

const mainElement = document.querySelector(`.main`);

const pageController = new PageController(mainElement);
pageController.render(true);
