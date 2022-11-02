import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";

const ClassTable = () => {
  return (
    <Table aria-label="class table">
      <TableHead>
        <TableRow>
          <TableCell align="right">ردیف</TableCell>
          <TableCell align="right">شماره کلاس</TableCell>
          <TableCell align="right">نام کلاس</TableCell>
          <TableCell align="right">زمان ثبت</TableCell>
          <TableCell align="right">ساعت</TableCell>
          <TableCell align="right">مشاهده</TableCell>
        </TableRow>
      </TableHead>
      <TableBody></TableBody>
    </Table>
  );
};

export default ClassTable;
