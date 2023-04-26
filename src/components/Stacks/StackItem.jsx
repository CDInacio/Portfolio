"use client";

import { useState } from "react";

import Icon from "../Icon";
import Modal from "../Utils/Modal";

export default function StackItem({ stackName, description, color }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  return (
    <>
      <div
        onClick={handleOpen}
        className={`h-40 shadow-md dark:bg-panelDark bg-background duration-500  rounded-lg  hover:shadow-none  flex items-center justify-center cursor-pointer`}
      >
        <Icon stl="text-neutral-800" name={stackName} />
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        stackName={stackName}
        description={description}
      />
    </>
  );
}
