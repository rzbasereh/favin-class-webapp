import React from "react";
import { Box, makeStyles } from "@material-ui/core";
import REFRESH_ICON from "../../../assets/icons/arrows-refresh.png";

const useStyles = makeStyles({
  root: {
    display: "inline-flex",
    padding: 13,
    height: "fit-content",
    backgroundColor: "white",
    borderRadius: 5,
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.1);",
  },
  icon: {
    width: 18,
    height: 18,
  },
});

const RefreshButton = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <img src={REFRESH_ICON} alt="status icon" className={classes.icon} />
    </Box>
  );
};

export default RefreshButton;
