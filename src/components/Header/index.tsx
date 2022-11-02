import { Box, Container, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import Title from "../ui/Title";

const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
    minHeight: 115,
    backgroundColor: "#fff",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.06);",
  },
  conatiner: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

interface IProps {
  title: string;
}

const PageHeader: React.FC<IProps> = ({ title }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Container className={classes.conatiner}>
        <Typography variant="body2" color="primary">
          ترم اول - سال 1401
        </Typography>

        <Title text="لیست کلاس‌ها " />
      </Container>
    </Box>
  );
};

export default PageHeader;
