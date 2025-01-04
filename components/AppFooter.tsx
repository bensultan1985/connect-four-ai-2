import { Footer, Text, Anchor } from "@mantine/core";
import { masterConfig } from "../config";
import { brandConfig } from "../config";
import { useMediaQuery } from "../utilities/responsiveness";

export function AppFooter() {
  const websiteData = masterConfig.global.appConfig.websiteData;
  const isMobile = useMediaQuery("(max-width: 800px)");
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
        <span style={{ marginRight: "20px" }}>&#169; 2025 BS Games</span>
        {websiteData.optional.footerBusinessLinks.map((link, i) => {
          if (isMobile) {
            return (
              <Anchor
                mx={10}
                href={link.link}
                key={i}
                style={{ color: "white" }}
              >
                {link.label}
              </Anchor>
            );
          } else {
            return (
              <Anchor
                mx={20}
                href={link.link}
                key={i}
                style={{ color: "white" }}
              >
                {link.label}
              </Anchor>
            );
          }
        })}
      </Text>
    </Footer>
  );
}
