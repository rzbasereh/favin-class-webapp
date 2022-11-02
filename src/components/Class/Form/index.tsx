import { Grid } from "@material-ui/core";
import React from "react";
import Input from "../../ui/Input/Input";
import TextArea from "../../ui/Input/TextArea";

const ClassForm = () => {
  return (
    <Grid container>
      <Grid item xs={6}>
        <Input label="نام کلاس" />
      </Grid>

      <Grid item xs={6}>
        <Input label="شماره کلاس" />
      </Grid>

      <Grid item xs={12}>
        <TextArea />
      </Grid>
    </Grid>
  );
};

export default ClassForm;
