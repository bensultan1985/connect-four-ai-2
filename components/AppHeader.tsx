import { Anchor, Header, SimpleGrid, Title } from "@mantine/core";
import Link from "next/link";
import LoginSection from "./LoginSection";
import { masterConfig } from "../config";
import { brandConfig } from "../config";

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
          <LoginSection></LoginSection>
        </SimpleGrid>
      </Header>
    </Anchor>
  );
}
