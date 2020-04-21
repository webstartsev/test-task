import {remove, render} from '../utils/render';
import UserComponent from '../components/user/user';

export default class UserController {
  constructor(container) {
    this._container = container;

    this._userComponent = null;
  }

  render(user) {
    this._userComponent = new UserComponent(user);
    render(this._container, this._userComponent);

    this._userComponent.setClickParentHandler();
  }

  destroy() {
    remove(this._userComponent);
  }
}
