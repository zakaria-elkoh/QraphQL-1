import { users } from "../dummyData/data.js";

const userResolver = {
  Query: {
    users: () => {
      return users;
    },
    user: (userId) => {
      const user = users.find((user) => user.id === userId);
      return user || null;
    },
  },
  Mutation: {},
};

export default userResolver;
