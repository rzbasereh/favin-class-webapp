import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Typography,
  makeStyles,
  Dialog,
} from "@material-ui/core";
import ClassForm from "../../components/Class/Form";
import ClassTable from "../../components/Class/Table";
import PageHeader from "../../components/Header";
import RefreshButton from "../../components/ui/Button/Refresh";
import ADD_ICON from "../../assets/icons/add.png";

const useStyles = makeStyles({
  conainer: {
    marginTop: 130,
    marginBottom: 100,
  },
  actionButtonsWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  addBtn: {
    display: "flex",
    alignItems: "center",

    "& *:first-child": {
      marginRight: 10,
    },
  },
});

const ClassPage = () => {
  const classes = useStyles();
  const [openDialog, setOpenDialog] = useState(false);

  const triggerOpenDialog = (open?: boolean) => () => {
    setOpenDialog(!!open);
  };

  return (
    <Box>
      <PageHeader title="class" />

      <Container className={classes.conainer}>
        <Box className={classes.actionButtonsWrapper}>
          <RefreshButton />

          <Button
            variant="contained"
            color="primary"
            className={classes.addBtn}
            onClick={triggerOpenDialog(true)}
          >
            <Typography variant="button">اضافه کردن کلاس</Typography>
            <img src={ADD_ICON} alt="add-icon" />
          </Button>
        </Box>

        <Box>
          <ClassTable />
        </Box>
      </Container>

      <Dialog open={openDialog} onClose={triggerOpenDialog()}>
        <Box style={{ backgroundColor: "#F5F5F5" }}>
          <ClassForm />
        </Box>
      </Dialog>
    </Box>
  );
};

export default ClassPage;
