import AbstractComponent from '../abstract-component';
import './user.css';

const createUserTemplate = ({id, balance, name, email, isActive, children}) => {
    const classes = ['user'];
    if (children && children.length) {
      classes.push('user_parent');
    }

    return (
      `<div class="wrap">
      <div class="${classes.join(' ')}" data-id="${id}">
        <span class="user__param user__param_type_id">${id}</span>
        <span class="user__param user__param_type_balance">${balance}</span>
        <span class="user__param">${name}</span>
        <span class="user__param">${email}</span>
        <span class="user__param user__param_type_active">${isActive}</span>
      </div>
      ${children && children.length ?
        `<div class="user__children" data-parent="${id}">
           ${children.map(child => createUserTemplate(child)).join('')}
        </div>` : ``}
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

  setClickParentHandler() {
    const usersParent = this.getElement().querySelectorAll('.user_parent');

    usersParent.forEach(user => {
      user.addEventListener('click', () => {
        const parentId = user.dataset.id;
        const children = this.getElement().querySelector(
          `[data-parent="${parentId}"]`
        );

        user.classList.toggle('user_parent_open');
        children.classList.toggle('user__children_open');
      });
    });
  }
}
