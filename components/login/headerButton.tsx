import { Button } from "@mantine/core";
import { IconUser } from "@tabler/icons";

export const LoginButton = () => {
  return (
    <Button
      color="red"
      variant="outline"
      style={{
        // maxWidth: "160px",
        // alignSelf: "right",
        // color: "white",
        // borderColor: "black",
        // background: "red",
        marginLeft: "10px",
      }}
    >
      {/* <a href="auth/login"> */}
      <span style={{ marginRight: "10px" }}>Login</span>
      <IconUser size={14}></IconUser>
      {/* </a> */}
    </Button>
  );
};
