/* eslint-disable */

import { userService } from "../../../middleware/services";

export default handler;

function handler(req: any, res: any) {
  switch (req.method) {
    case "GET":
      return res.status(201);
    //   return getUser();
    case "POST":
      return create();
    default:
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  //   async function getUser() {
  //     const users = await userService.getAllUsers();
  //     return res.status(200).json(users);
  //   }

  async function create() {
    const createdUser = await userService.createUser(req.body);
    return res.status(200).json(createdUser);
  }
}
