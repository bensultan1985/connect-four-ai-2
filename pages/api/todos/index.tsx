/* eslint-disable */

import { todosService } from "../../../middleware/services";
export default handler;

function handler(req: any, res: any) {
  switch (req.method) {
    case "GET":
      return;
    // return getTodos(req?.parameter);
    case "POST":
      //   return create();
      return res.status(201);
    default:
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  async function getTodos() {
    // const users = await todosService.getTodos();
    // return res.status(200).json(users);
  }

  //   async function createTodo() {
  //     console.log(req.body);
  //     const createdUser = await userService.createTodo(req.body);
  //     return res.status(200).json(createdUser);
  //   }
}
