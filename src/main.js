import PageController from './controller/page';
import UsersModel from './model/users';
import './main.css';

const mainElement = document.querySelector(`.main`);

const usersModel = new UsersModel();

const pageController = new PageController(mainElement, usersModel);
pageController.render();
