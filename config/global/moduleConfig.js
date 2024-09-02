export const moduleConfig = {
  moduleOrder: ["todos"],
  modules: {
    //do not add authorization to moduleOrder
    authorization: {
      enabled: true,
      options: {},
    },
    todos: {
      enabled: true,
      options: {},
    },
  },
};
