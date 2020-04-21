import FilterComponent from '../components/filter/filter';
import {render, RenderPosition} from '../utils/render';
import {FilterType} from '../const';

export default class FilterController {
  constructor(container, userModel) {
    this._container = container;
    this._userModel = userModel;
    this._filterComponent = null;
  }

  render() {
    this._filterComponent = new FilterComponent();

    this._filterComponent.onChangeHandler((evt) => {
      let filter = FilterType.ALL;
      if (evt.target.checked) {
        filter = FilterType.IS_ACTIVE;
      }

      this._userModel.setFilter(filter);
    });
    render(this._container, this._filterComponent, RenderPosition.AFTERBEGIN);
  }

}
