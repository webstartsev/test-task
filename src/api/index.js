import User from '../model/user';
import users from '../mock/users.json';

export default class Api {
  getUsers() {
    return new Promise((resolve, reject) => {
      // Эмуляция загрузки данных
      setTimeout(() => {
        resolve(User.parseUsers(users));
      }, 500);
    });
  }
}
