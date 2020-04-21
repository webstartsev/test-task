import AbstractComponent from '../abstract-component';
import './loader.css';

const createLoaderTemplate = () => {
  return (
    `<div class="loader">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>`
  );
};

export default class LoaderComponent extends AbstractComponent {
  getTemplate() {
    return createLoaderTemplate();
  }
}
