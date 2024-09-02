import { Container } from "@mantine/core";
import { getSession, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import ToDo from "./ToDo";
interface ToDoListProps {
  toDos: Array<{ header: string; complete: boolean }>;
}

export function ToDoList() {
  const [todos, setTodos] = useState([]);
  const { data: session, status } = useSession();

  async function getTodos() {
    const test = await getSession();
    console.log(test);
    // fetch(
    //   "/api/user" +
    //     new URLSearchParams({
    //       user: session.user.,
    //       bar: 2,
    //     })
    // );
  }

  getTodos();

  useEffect(() => {}, [todos]);

  return (
    <>
      <Container>
        {status != "loading" &&
          todos.map((todo) => (
            <ToDo header={todo.header} complete={todo.complete} />
          ))}
      </Container>
    </>
  );
}
