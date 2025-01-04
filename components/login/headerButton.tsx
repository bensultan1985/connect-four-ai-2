import { Button } from "@mantine/core";
import { IconUser } from "@tabler/icons";
import Link from "next/link";
import { IconUsers } from "@tabler/icons";

export const LoginButton = ({ isMobile }: { isMobile: boolean }) => {
  console.log(isMobile);
  return (
    <>
      {/* <Link href={"/Register"}>
        {isMobile ? (
          <Button
            color="red"
            variant="outline"
            style={{
              marginLeft: "10px",
              padding: "8px",
            }}
          >
            <IconUsers size={14}></IconUsers>
          </Button>
        ) : (
          <Button
            color="red"
            variant="outline"
            style={{
              marginLeft: "10px",
            }}
          >
            <span>Join</span>
          </Button>
        )}
      </Link> */}
      <Link href={"/SignIn"}>
        {isMobile ? (
          <Button
            color="red"
            variant="outline"
            style={{ padding: "8px", marginLeft: "10px" }}
          >
            <IconUser size={14}></IconUser>
          </Button>
        ) : (
          <Button
            color="red"
            variant="outline"
            style={{
              marginLeft: "10px",
            }}
          >
            <span style={{ marginRight: "10px" }}>Login</span>
            <IconUser size={14}></IconUser>
          </Button>
        )}
      </Link>
    </>
  );
};
