import { Button } from "@mantine/core";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { useMantineTheme } from "@mantine/core";
export default function LoginSection() {
  const { data: session } = useSession();
  const theme = useMantineTheme();
  // console.log(theme);
  if (session) {
    return (
      <span style={{ textAlign: "right" }}>
        Signed in as {session?.user?.email}
        <Button variant="filled" onClick={() => signOut()}>
          Sign out{" "}
        </Button>
      </span>
    );
  }
  return (
    <></>
    // <span
    //   style={{ width: "100%", textAlign: "right", display: "inline-block" }}
    // >
    //   <Link href={"/Register"}>
    //     <Button>Register</Button>
    //   </Link>
    //   <Link href={"/SignIn"}>
    //     <Button>Sign in</Button>
    //   </Link>
    // </span>
  );
}
