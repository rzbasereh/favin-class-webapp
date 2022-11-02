import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import CHEVRON from "../../../assets/icons/chevron-left.png";

const useStyle = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
    padding: 10,
  },
  icon: {
    marginLeft: 16,
    height: 17,
  },
});

interface IProps {
  text: string;
}

const Title: React.FC<IProps> = ({ text }) => {
  const classes = useStyle();

  return (
    <Box className={classes.root}>
      <Typography variant="body2">{text}</Typography>
      <img src={CHEVRON} alt="chevron" className={classes.icon} />
    </Box>
  );
};

export default Title;
