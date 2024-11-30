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
}: {
  title?: any;
  summary?: any;
  image?: any;
  availability?: any;
  ai?: any;
  link?: any;
}) => {
  const router = useRouter();
  return (
    <Card
      style={{
        border: "solid",
        borderWidth: "4px",
        borderRadius: "15px",
        flex: "1fr",
        display: "grid",
        width: "100%",
      }}
    >
      <CardSection style={{ padding: "10px" }}>
        <Title size={"h3"}>{title}</Title>
        <Image
          className="mt-5"
          my="xl"
          src={image}
          width={200}
          height={200}
        ></Image>
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
