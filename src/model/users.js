import {FilterType} from '../const';
import {getUsersByFilters} from '../utils/filters';
import users from '../mock/users.json';

export default class UsersModel {
  constructor() {
    this._users = users;
    this._activeFilterType = FilterType.ALL;

    this._filterChangeHandlers = [];
    this._dataChangeHandler = [];
  }

  getAllUsers() {
    return this._users;
  }

  getUsers() {
    return getUsersByFilters(this._users, this._activeFilterType);
  }

  setFilter(filterType) {
    this._activeFilterType = filterType;
    this._callHandlers(this._filterChangeHandlers);
  }

  setUsers(users) {
    this._users = Array.from(users);
    this._callHandlers(this._dataChangeHandler);
  }

  setFilterChangeHandler(handler) {
    this._filterChangeHandlers.push(handler);
  }

  setDataChangeHandler(handler) {
    this._dataChangeHandler.push(handler);
  }

  _callHandlers(handlers) {
    handlers.forEach(handler => handler());
  }
}
