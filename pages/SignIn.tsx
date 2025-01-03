import {
  TextInput,
  Checkbox,
  Button,
  Group,
  Box,
  PasswordInput,
  Title,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { signIn } from "next-auth/react";
import { getLocationOrigin } from "next/dist/shared/lib/utils";
import Link from "next/link";
import { useState } from "react";
import Auth from "../components/Auth";
import styles from "../styles/Home.module.css";
import { brandConfig } from "../config";
import { theme } from "../styles/mantineGlobalTheme";
const emailValidityBasic = /^\S+@\S+$/;
const emailValidityComprehensive =
  /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
export default function SignIn() {
  // const theme = useMantineTheme();
  const [checked, setChecked] = useState(false);
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },

    validate: {
      email: (value) =>
        emailValidityBasic.test(value) ? null : "Invalid email address.",
      password: (value) =>
        value.length >= 4 && value.length <= 16
          ? null
          : "Password is 4-16 characters.",
    },
  });
  return (
    <>
      <main className={styles.main}>
        <Title>Sign In</Title>

        <Auth labelText="sign in"></Auth>

        <Box sx={{ maxWidth: 300 }} mx="auto">
          <form
            onSubmit={form.onSubmit((values) =>
              signIn("credentials", {
                username: values.email,
                password: values.password,
                callbackUrl: getLocationOrigin(),
              })
            )}
          >
            <TextInput
              withAsterisk
              label="Email"
              placeholder="your@email.com"
              {...form.getInputProps("email")}
            />
            <PasswordInput
              withAsterisk
              label="Password"
              {...form.getInputProps("password")}
            />
            <Group position="right" mt="md">
              <Button
                // color="violet"
                color="primaryBackgroundColor"
                type="submit"
              >
                Submit
              </Button>
            </Group>
          </form>
        </Box>
      </main>
    </>
  );
}
