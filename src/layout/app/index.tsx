import React from "react";

import { ChakraProvider } from "@chakra-ui/react";

import "@rainbow-me/rainbowkit/styles.css";
import styles from "./index.module.less";

interface IAppLayout {
  children?: React.ReactNode;
}
export const AppLayout: React.FC<IAppLayout> = ({ children }) => {
  return (
    <ChakraProvider>
      <section className={styles.content}>
        <section>{children}</section>
      </section>
    </ChakraProvider>
  );
};
