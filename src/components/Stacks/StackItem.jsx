"use client";

import styles from "../style.module.css";
import Icon from "../Icon";

export default function StackItem({ stackName }) {
  return (
    <div
      className={`h-40 hover:bg-neutral-100 duration-500  rounded-lg ${styles.shadow} shadow-zinc-500 hover:shadow-none flex items-center justify-center cursor-pointer`}
    >
      <Icon name={stackName} />
    </div>
  );
}
