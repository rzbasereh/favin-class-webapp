import React, { InputHTMLAttributes } from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row-reverse",
    alignItems: "center",
  },
  label: {
    marginLeft: 30,
  },
  input: {
    ...theme.typography.body2,
    backgroundColor: "white",
    border: "none",
    padding: 10,
    direction: "rtl",
    borderRadius: 5,
  },
}));

type IProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

const Input: React.FC<IProps> = ({ label, className, ...props }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      {!!label && (
        <Typography variant="body2" className={classes.label}>
          {label}
        </Typography>
      )}

      <input
        className={`${classes.input} ${className ? className : ""}`}
        {...props}
      />
    </Box>
  );
};

export default Input;
