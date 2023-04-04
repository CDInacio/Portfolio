"use client";

import styles from "../style.module.css";
import Icon from "../Icon";

export default function StackItem({ stackName }) {
  return (
    <div
      className={`h-40 shadow-md dark:bg-panelDark bg-panel duration-500  rounded-lg  hover:shadow-none hover:bg-background flex items-center justify-center cursor-pointer`}
    >
      <Icon name={stackName} />
    </div>
  );
}
