import { Footer, Text, Anchor } from "@mantine/core";
import { masterConfig } from "../config";
import { brandConfig } from "../config";

export function AppFooter() {
  const websiteData = masterConfig.global.appConfig.websiteData;
  return (
    <Footer
      sx={(theme) => ({
        // backgroundColor: theme?.colors?.violet[5],
        backgroundColor: brandConfig.primaryComponentBackgroundColor,
        color: brandConfig.primaryComponentTextColor,
      })}
      height="auto"
      fixed
    >
      <Text m={4} mx={20} align="center">
        <span style={{ marginRight: "20px" }}>
          Copyright 2022 Boredom Sucks LLC
        </span>
        {websiteData.optional.footerBusinessLinks.map((link, i) => (
          <Anchor mx={20} href={link.link} key={i} style={{ color: "white" }}>
            {link.label}
          </Anchor>
        ))}
      </Text>
    </Footer>
  );
}
