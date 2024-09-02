import React, { useState } from "react";
import { Title, TextInput, Button, PasswordInput } from "@mantine/core";
import styles from "../styles/Home.module.css";
import Auth from "../components/Auth";

export default function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRe, setPasswordRe] = useState("");
  const [email, setEmail] = useState("");

  function validForm() {
    if (!firstName || !lastName || !password || !passwordRe || !email)
      return false;
    if (password != passwordRe) return false;
    var re =
      /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    if (!re.test(email)) return false;
    return true;
  }

  return (
    <>
      <main className={styles.main}>
        <Title>Register</Title>

        <Auth labelText="register"></Auth>

        <TextInput
          label="Email"
          placeholder="jhon@doe.com"
          onChange={(e: any) => setEmail(e.target.value)}
        />
        <TextInput
          label="First Name"
          onChange={(e: any) => setFirstName(e.target.value)}
        />
        <TextInput
          label="Last Name"
          onChange={(e: any) => setLastName(e.target.value)}
        />
        <PasswordInput
          label="Password"
          onChange={(e: any) => setPassword(e.target.value)}
        />
        <PasswordInput
          label="Re-Enter Password"
          onChange={(e: any) => setPasswordRe(e.target.value)}
        />

        <Button
          variant="outline"
          onClick={() => {
            if (validForm()) {
              fetch("/api/user", {
                method: "POST",
                body: JSON.stringify({
                  name: firstName + " " + lastName,
                  email: email,
                  type: "auth",
                  password: password,
                  id: 1,
                }),
              });
            } else {
              console.log("error");
            }
          }}
        >
          Register
        </Button>
      </main>
    </>
  );
}
