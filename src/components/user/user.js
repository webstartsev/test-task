import AbstractComponent from '../abstract-component';
import './user.css';

const createUserTemplate = ({id, balance, name, email, isActive, children}) => {
    const classes = ['user'];
    if (children && children.length) {
      classes.push('user_parent');
    }

    return (
      `<div class="${classes.join(' ')}" data-id="${id}">
        <span class="user__param user__param_type_id">${id}</span>
        <span class="user__param user__param_type_balance">${balance}</span>
        <span class="user__param">${name}</span>
        <span class="user__param">${email}</span>
        <span class="user__param user__param_type_active">${isActive}</span>
      </div>`
    );
  }
;

export default class UserComponent extends AbstractComponent {
  constructor(user) {
    super();

    this._user = user;
  }

  getTemplate() {
    return createUserTemplate(this._user);
  }
}
