import { Title } from "@mantine/core";
import styles from "../styles/Home.module.css";
export default function Terms() {
  return (
    <main className={styles.main}>
      <div>
        <Title>Terms of Service</Title>
        <p>
          By using this website, you agree to the following terms of service:
        </p>
        <ul>
          <li>Will not engage in illegal activity</li>
          <li>Will not engage in inappropriate activity</li>
        </ul>
        <p>
          Simple, right? Now, go have fun and stop reading so many boring legal
          documents!
        </p>
      </div>
    </main>
  );
}
