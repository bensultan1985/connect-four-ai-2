import { Prisma, PrismaClient } from "@prisma/client";
export const prisma = new PrismaClient();

export const createUser = async (user: any) => {
  const data = JSON.parse(user);
  const newUser: Prisma.UserCreateInput = {
    name: data.name ?? data.name,
    email: data.email ?? data.email,
    image: data.image ?? data.image,
    accounts: data.accounts ?? data.accounts,
    sessions: data.sessions ?? data.sessions,
    type: data.type ?? data.type,
    password: data.password ?? data.password,
  };
  const createdUser = await prisma.user.create({ data: newUser });
  await prisma.$disconnect();
};

// export const createTodo = async (todo: any) => {
//   const data = JSON.parse(todo);
//   const createTodo: Prisma.TodoCreateInput = {
//     content: todo.content,
//     completed: false,
//     userId: todo.userId,
//   };
//   const createdTodo = await prisma.todo.create({ data: createTodo });
//   await prisma.$disconnect();
// };

// export const getTodos = async (user: any) => {
//   const data = JSON.parse(user);
//   const todos = await prisma.todo.findMany({
//     where: {
//       userId: data,
//     },
//   });
//   await prisma.$disconnect();
//   return todos;
// };

export const createSession = async (session: any) => {
  const data = JSON.parse(session);
  const newSession = await prisma.session.create(data);
  await prisma.$disconnect();
};

const userService = {
  createUser,
};

// const todosService = {
//   getTodos,
// };

const sessionService = {
  createSession,
};

export { userService, sessionService };
