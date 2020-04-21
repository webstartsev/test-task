import {remove, render} from '../utils/render';
import LoaderComponent from '../components/loader/loader';
import TableComponent from '../components/table/table';

export default class PageController {
  constructor(container) {
    this._container = container;
    this._usersListContainer = null;

    this._loaderComponent = new LoaderComponent();
    this._tableComponent = new TableComponent();
  }

  render(isLoadingData = false) {
    if (isLoadingData) {
      render(this._container, this._loaderComponent);
      return;
    } else {
      remove(this._loaderComponent);
    }

    render(this._container, this._tableComponent);

    this._usersListContainer = this._tableComponent.getElement().querySelector('.table-users__body');
  }
}
