import { Card, Button, Title, Text, Image, CardSection } from "@mantine/core";
import { useRouter } from "next/router";

interface ToDoProps {
  header: string;
  complete: boolean;
}

export const GameSummaryCard = ({
  title,
  summary,
  image,
  availability = "",
  ai,
  link = "",
  flex = 1,
  isMobile = false,
}: {
  title?: any;
  summary?: any;
  image?: any;
  availability?: any;
  ai?: any;
  link?: any;
  flex?: any;
  isMobile?: any;
}) => {
  const router = useRouter();
  return (
    <Card
      style={{
        border: "solid",
        borderWidth: "4px",
        borderRadius: "15px",
        flex: flex,
        display: "grid",
        width: isMobile ? "100%" : "260px",
        maxWidth: isMobile ? "100%" : "270px",
        minWidth: isMobile ? "100%" : "270px",
      }}
    >
      <CardSection style={{ padding: "10px" }}>
        <Title size={"h3"}>{title}</Title>
        <div style={{ textAlign: "center", width: "100%" }}>
          <a href={link}>
            <Image
              style={{ margin: "12px auto" }}
              className="mt-5"
              my="xl"
              src={image}
              width={200}
              height={200}
            ></Image>
          </a>
        </div>
        <a href={link}>
          <Text style={{ marginBottom: "10px" }}>
            {ai ? (
              <div style={{ marginBottom: "10px" }}>
                <span
                  style={{
                    fontWeight: 600,
                    color: "#c3ffe1",
                    border: "solid",
                    borderRadius: "25px",
                    padding: "1px 8px",
                    borderWidth: "2px",
                    borderColor: "#c3ffe1",
                    background: "#2a74b6",
                  }}
                >
                  Powered by Artie
                </span>
              </div>
            ) : (
              ""
            )}
            {summary ? summary : ""}
          </Text>
        </a>
      </CardSection>
      <CardSection
        style={{ padding: "10px", textAlign: "center", marginTop: "auto" }}
      >
        {availability == "unreleased" ? (
          <div style={{ fontWeight: 600 }}>Coming Soon</div>
        ) : (
          <Button
            color="red"
            onClick={() => {
              router.push(link);
            }}
          >
            Play Now
          </Button>
        )}
      </CardSection>
    </Card>
  );
};
