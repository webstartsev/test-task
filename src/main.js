import PageController from './controller/page';
import UsersModel from './model/users';
import Api from './api/index';
import './main.css';

const api = new Api();

const mainElement = document.querySelector(`.main`);

const usersModel = new UsersModel();

const pageController = new PageController(mainElement, usersModel);
pageController.render(true);

api.getUsers()
  .then(users => {
    usersModel.setUsers(users);
  });
