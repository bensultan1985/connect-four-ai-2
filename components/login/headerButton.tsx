import { Button } from "@mantine/core";
import { IconUser } from "@tabler/icons";
import Link from "next/link";

export const LoginButton = () => {
  return (
    <>
      <Link href={"/Register"}>
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
          <>
            <span style={{ marginRight: "10px" }}>Register</span>
            <IconUser size={14}></IconUser>
          </>
        </Button>
      </Link>
      <Link href={"/SignIn"}>
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
          <>
            <span style={{ marginRight: "10px" }}>Login</span>
            <IconUser size={14}></IconUser>
          </>

          {/* </a> */}
        </Button>
      </Link>
    </>
  );
};
