import { ReactElement } from "react";

import classNames from "classnames";

import { AppLayout } from "@/layout/app";

import styles from "./index.module.less";

const Page = () => {
  return <section className={classNames(styles.page)}></section>;
};

Page.getLayout = (page: ReactElement) => {
  return <AppLayout>{page}</AppLayout>;
};

export default Page;
