import { users } from "./data/users";

const getUsers = uid => {
    return users.filter(u => u.id === uid)
  }

  export default {getUsers};