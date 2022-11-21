import { DataGrid, GridCellEditCommitParams, GridValueGetterParams } from "@mui/x-data-grid";
import { Button } from 'react-bootstrap';
import { useState } from "react";
import SomethingPersonModel from "./somethingPersonModel";
import { useAppSelector, useAppDispatch } from "../hooks";
import { addPerson, removePerson } from "./somethingSlice";

const columns = [
  { field: "id", headerName: "ID", width: 70, },
  {
    field: "firstName",
    headerName: "First name",
    width: 130,
    editable: true,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 130,
    editable: true,
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90,
    editable: true,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 200,
    valueGetter: (params: GridValueGetterParams): string => `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];

export default function Something() {
  const people = useAppSelector((state) => state.something.people);

  const dispatch = useAppDispatch();

  const [rows, setRows] = useState<SomethingPersonModel[]>(people);

  const addRow = () => {
    const person = new SomethingPersonModel(rows.length + 1,
      "John",
      "Doe",
      Math.floor(Math.random() * 100));

    setRows([
      ...rows,
      person,
    ]);

    dispatch(addPerson(person));
  };

  const updateRow = (params: GridCellEditCommitParams) => {
    console.log("updateRow", params);
    const person = rows.find((row) => row.id === params.id)!;

    if (person) {
      switch (params.field) {
        case "firstName":
          person.firstName = params.value as string;
          break;
        case "lastName":
          person.lastName = params.value as string;
          break;
        case "age":
          person.age = params.value as number;
          break;
      }

      setRows([
        ...rows,
      ]);

      dispatch(removePerson(person));
      dispatch(addPerson(person));
    }
  };

  return (
    <div>
      <Button variant="primary" onClick={addRow}>Add Row</Button>
      <DataGrid rows={rows} columns={columns}
      autoHeight
      onCellEditCommit={(params: GridCellEditCommitParams) => {
        updateRow(params);
      }} />
      <p>There are {rows.length} {rows.length === 1 ? "person" : "people"} in the table.</p>
    </div >
  );
};
