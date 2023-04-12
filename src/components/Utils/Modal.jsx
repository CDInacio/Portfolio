import React from "react";

import { Box, Modal as MD, Typography } from "@mui/material";

import styles from "./styles.module.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "#fff",
  boxShadow: 24,
  p: 4,
};

const Modal = ({ open, onClose, stackName, description }) => {
  return (
    <MD
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className={styles.box} sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {stackName}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {description}
        </Typography>
      </Box>
    </MD>
  );
};

export default Modal;
