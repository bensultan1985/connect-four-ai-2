import { Box, Container, Text } from "@mantine/core";
import { CreateToDo } from "./CreateToDo";
import { ToDoList } from "./ToDoList";

export function UserDashboard(props: any) {
  const { user } = props;
  return (
    <Container size="lg">
      <Box m="md" p="sm">
        <Text>{user}&apos;s Lyst</Text>
        <CreateToDo></CreateToDo>
      </Box>
      <ToDoList
      //placeholder data
      ></ToDoList>
    </Container>
  );
}
