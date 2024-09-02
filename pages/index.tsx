import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Anchor, Container, Text, Title, Image } from "@mantine/core";
import { UserDashboard } from "../components/UserDashboard";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { theme } from "../styles/mantineGlobalTheme";
import { ConnectFour } from "../components/ConnectFour";

const Home: NextPage = (props) => {
  const { data: session } = useSession();
  // console.log(theme);
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {session?.user?.name ? (
          <Container>
            <UserDashboard user={session.user.name}></UserDashboard>
          </Container>
        ) : (
          <Container>
            <Title>Welcome</Title>
            <ConnectFour></ConnectFour>
            {/* <Image
              my="xl"
              src="http://localhost:3000/images/logos/heroimage.jpeg"
              height={200}
            ></Image>
            <Text my="xl">
              CheckLyst is a free, lightweight, and addictive to-do list
              application. To unlock the power of CheckLyst,{" "}
              <Link href="/Register">
                <Anchor variant="gradient">Sign up</Anchor>
              </Link>{" "}
              today!
            </Text> */}
          </Container>
        )}
      </main>
    </div>
  );
};

export default Home;
