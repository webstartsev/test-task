import {remove, render} from '../utils/render';
import LoaderComponent from '../components/loader/loader';
import TableComponent from '../components/table/table';
import UserController from './user';
import FilterController from './filter';

export default class PageController {
  constructor(container, usersModel) {
    this._container = container;
    this._usersModel = usersModel;
    this._users = [];
    this._usersListContainer = null;
    this._userControllers = [];

    this._loaderComponent = new LoaderComponent();
    this._tableComponent = new TableComponent();
    this._filterController = new FilterController(this._container, this._usersModel);

    this._onFilterChange = this._onFilterChange.bind(this);

    this._usersModel.setFilterChangeHandler(this._onFilterChange);
  }

  render(isLoadingData = false) {
    this._users = this._usersModel.prepearUsers(this._usersModel.getUsers());
    if (isLoadingData) {
      render(this._container, this._loaderComponent);
      return;
    } else {
      remove(this._loaderComponent);
    }

    this._filterController.render();
    render(this._container, this._tableComponent);

    this._usersListContainer = this._tableComponent.getElement().querySelector('.table-users__body');
    this._renderUsers(this._usersListContainer, this._users);
  }

  _onFilterChange() {
    this._updateUsers();
  }

  _updateUsers() {
    const users = this._usersModel.prepearUsers(this._usersModel.getUsers());
    this._removeUsers();
    this._renderUsers(this._usersListContainer, users);
  }

  _removeUsers() {
    this._userControllers.forEach(userController => userController.destroy());
    this._userControllers = [];
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
