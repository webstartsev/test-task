import {remove, render} from '../utils/render';
import LoaderComponent from '../components/loader/loader';

export default class PageController {
  constructor(container) {
    this._container = container;

    this._loaderComponent = new LoaderComponent();
  }

  render(isLoadingData = false) {
    if (isLoadingData) {
      render(this._container, this._loaderComponent);
      return;
    } else {
      remove(this._loaderComponent);
    }
  }
}
