import {remove, render} from '../utils/render';
import LoaderComponent from '../components/loader/loader';
import TableComponent from '../components/table/table';
import UserController from './user';
import users from '../mock/users.json';

export default class PageController {
  constructor(container, usersModel) {
    this._container = container;
    this._usersModel = usersModel;
    this._users = [];
    this._usersListContainer = null;
    this._userControllers = [];

    this._loaderComponent = new LoaderComponent();
    this._tableComponent = new TableComponent();
  }

  render(isLoadingData = false) {
    this._users = users;
    if (isLoadingData) {
      render(this._container, this._loaderComponent);
      return;
    } else {
      remove(this._loaderComponent);
    }

    render(this._container, this._tableComponent);

    this._usersListContainer = this._tableComponent.getElement().querySelector('.table-users__body');
    this._renderUsers(this._usersListContainer, this._users);
  }

  _renderUsers(container, users) {
    const newUsers = users.map(user => {
      const userController = new UserController(container);
      userController.render(user);

      return userController;
    });

    this._userControllers = [...newUsers];
  }
}
