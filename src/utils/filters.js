import {FilterType} from '../const';

export const getUsersByFilters = (users, filterType) => {
  switch (filterType) {
    case FilterType.IS_ACTIVE:
      return users.filter(user => user.isActive);
    default:
      return users;
  }
};
