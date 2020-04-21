import AbstractComponent from '../abstract-component';
import './filter.css';

const createFilterTemplate = () => {
  return (
    `<form class="filter">
        <input type="checkbox" name="filter" class="filter__input" id="filter">
        <label for="filter" class="filter__label">Только активные</label>
     </form>`
  );
};

export default class FilterComponent extends AbstractComponent {
  getTemplate() {
    return createFilterTemplate();
  }

  onChangeHandler(handler) {
    this.getElement().querySelector('#filter').addEventListener('click', handler);
  }
}
