import { Checkbox, SimpleGrid } from "@mantine/core";
import { Box } from "@mantine/core";
import { getStyles } from "../styles/ToDo";
import { useState } from "react";
import { IconTrash } from "@tabler/icons";

interface ToDoProps {
  header: string;
  complete: boolean;
}

export default function ToDo(props: ToDoProps) {
  const { header, complete } = props;
  const [checked, setChecked] = useState(complete); //Todo

  const styledHeader = checked ? (
    <span style={{ textDecoration: "line-through" }}>{header}</span>
  ) : (
    header
  );

  return (
    <>
      <Box m="md" sx={(theme) => getStyles(theme)}>
        <SimpleGrid cols={2}>
          <div onClick={() => setChecked(!checked)}>
            <Checkbox
              label={styledHeader}
              checked={checked}
              // color="violet"
            ></Checkbox>
          </div>
          <div style={{ textAlign: "right" }}>
            <IconTrash
              height={20}
              style={{
                //   width: "100%",
                textAlign: "right",
                display: "inline-block",
              }}
              //   sx={(theme) => ({
              //     backgroundColor: "gray",
              //     // backgroundColor: "#D6336C",
              //     //violet alt
              //   })}
              color="gray"
            ></IconTrash>
          </div>
        </SimpleGrid>
      </Box>
    </>
  );
}
