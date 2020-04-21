import AbstractComponent from '../abstract-component';
import './table.css';

const createTableTemplate = () => {
  return (
    `<section class="table-users">
        <div class="table-users__head">
          <span class="table-users__td table-users__td_type_id">ID</span>
          <span class="table-users__td table-users__td_type_balance">Balance</span>
          <span class="table-users__td">Name</span>
          <span class="table-users__td">Email</span>
          <span class="table-users__td table-users__td_type_active">isActive</span>
        </div>
        <div class="table-users__body">

        </div>
     </section>`
  );
};

export default class TableComponent extends AbstractComponent {
  getTemplate() {
    return createTableTemplate();
  }
}
