export default class User {
  constructor(data) {
    this.id = data.id;
    this.parentId = data.parentId;
    this.isActive = data.isActive;
    this.balance = data.balance;
    this.name = data.name;
    this.email = data.email;
  }

  static parseUser(data) {
    return new User(data);
  }

  static parseUsers(data) {
    return data.map(User.parseUser);
  }
}
