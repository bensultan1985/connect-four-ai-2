import { Anchor, Header, SimpleGrid, Title } from "@mantine/core";
import Link from "next/link";
import LoginSection from "./LoginSection";
import { masterConfig } from "../config";
import { brandConfig } from "../config";
import { Menu, Button, Text } from "@mantine/core";
import { IconMenu2 } from "@tabler/icons";

export function AppHeader() {
  return (
    <Anchor>
      <Header
        height="auto"
        fixed
        px="xl"
        sx={(theme) => ({
          // backgroundColor: theme?.colors?.violet[5],
          backgroundColor: brandConfig.primaryComponentBackgroundColor,
          color: brandConfig.primaryComponentTextColor,
        })}
      >
        <SimpleGrid cols={2}>
          <div>
            <Link href={"/"}>
              <Title style={{ display: "inline-block" }}>
                {masterConfig.global.appConfig.websiteData.suggested.title}
              </Title>
            </Link>
          </div>
          {/* <div></div> */}
          <LoginSection></LoginSection>

          <div style={{ textAlign: "right", marginTop: "4px" }}>
            <Menu shadow="md" width={200}>
              <Menu.Target>
                <Button style={{ maxWidth: "160px", alignSelf: "right" }}>
                  <span style={{ marginRight: "10px" }}>Browse Games</span>{" "}
                  <IconMenu2 size={14}></IconMenu2>
                </Button>
              </Menu.Target>

              <Menu.Dropdown style={{ textAlign: "left" }}>
                <Menu.Label>Games</Menu.Label>
                <Menu.Item>Connect Four</Menu.Item>
                <Menu.Divider />
              </Menu.Dropdown>
            </Menu>
          </div>
        </SimpleGrid>
      </Header>
    </Anchor>
  );
}
