import { Collapse, Container, TextInput, Text, Button } from "@mantine/core";
import { IconPlus, IconX } from "@tabler/icons";
import { useState } from "react";
import { getStyles } from "../styles/ToDo";

export function CreateToDo() {
  const [isCreateToDoExpanded, setIsCreateToDoExpanded] = useState(false);
  function toggleCreateToDo() {
    setIsCreateToDoExpanded(!isCreateToDoExpanded);
  }
  return (
    <>
      <Container
        // size={200}
        // sx={(theme) => getStyles(theme)}
        m={2}
        p={2}
        mt={20}
      >
        {isCreateToDoExpanded ? (
          <Text
            onClick={toggleCreateToDo}
            p={0}
            sx={(theme) => getStyles(theme)}
          >
            <IconX size={14}></IconX> cancel
          </Text>
        ) : (
          <Text
            onClick={toggleCreateToDo}
            p={0}
            sx={(theme) => getStyles(theme)}
          >
            <IconPlus size={14}></IconPlus> add item
          </Text>
        )}
        <Collapse in={isCreateToDoExpanded}>
          <Container>
            <TextInput label="Description"></TextInput>
            <Container mt={20}>
              <Button variant="outline">Create Item</Button>
            </Container>
          </Container>
        </Collapse>
      </Container>
    </>
  );
}
