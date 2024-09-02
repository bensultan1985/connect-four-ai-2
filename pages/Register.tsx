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
import Link from "next/link";
import { useState } from "react";
import Auth from "../components/Auth";
import styles from "../styles/Home.module.css";
import { brandConfig } from "../config";

//future usage
const emailValidityBasic = /^\S+@\S+$/;
const emailValidityComprehensive =
  /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

export default function Register() {
  const [checked, setChecked] = useState(false);
  const form = useForm({
    initialValues: {
      email: "",
      termsOfService: false,
      firstName: "",
      lastName: "",
      password: "",
      passwordRe: "",
    },

    validate: {
      email: (value) =>
        emailValidityBasic.test(value) ? null : "Invalid email address.",
      termsOfService: (value: any) =>
        value == true ? null : "Must agree to terms of service.",
      firstName: (value) =>
        value.length > 2 && value.length < 100 ? null : "Invalid first name.",
      lastName: (value) =>
        value.length > 2 && value.length < 100 ? null : "Invalid last name.",
      password: (value) =>
        value.length >= 4 && value.length <= 16
          ? null
          : "Password must be between 4-16 characters.",
      passwordRe: (value) => {
        if (value == form.getInputProps("password").value) {
          return null;
        } else {
          return "Passwords do not match.";
        }
      },
    },
  });

  return (
    <>
      <main className={styles.main}>
        <Title>Register</Title>

        <Auth labelText="register"></Auth>

        <Box sx={{ maxWidth: 300 }} mx="auto">
          <form
            onSubmit={form.onSubmit((values) => {
              fetch("/api/user", {
                method: "POST",
                body: JSON.stringify({
                  name: values.firstName + " " + values.lastName,
                  email: values.email,
                  type: "auth",
                  password: values.password,
                  id: 1,
                }),
              });
            })}
          >
            <TextInput
              withAsterisk
              label="Email"
              placeholder="your@email.com"
              {...form.getInputProps("email")}
            />
            <TextInput
              withAsterisk
              label="First Name"
              placeholder="John"
              {...form.getInputProps("firstName")}
            />
            <TextInput
              withAsterisk
              label="Last Name"
              placeholder="Smith"
              {...form.getInputProps("lastName")}
            />
            <PasswordInput
              withAsterisk
              label="Password"
              {...form.getInputProps("password")}
            />
            <PasswordInput
              withAsterisk
              label="Re-Enter Password"
              {...form.getInputProps("passwordRe")}
            />

            <Checkbox
              mt="md"
              // color="violet"
              color={brandConfig.primaryComponentBackgroundColor}
              checked={checked}
              onClick={() => {
                setChecked(!checked);
              }}
              label={
                <span>
                  I agree to the <Link href="/legal">Terms of Service</Link>
                </span>
              }
              {...form.getInputProps("termsOfService", { type: "checkbox" })}
            />

            <Group position="right" mt="md">
              <Button
                // color="violet"
                sx={{
                  color: brandConfig.primaryComponentTextColor,
                  backgroundColor: brandConfig.primaryComponentBackgroundColor,
                }}
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
