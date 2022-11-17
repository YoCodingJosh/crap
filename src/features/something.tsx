import { DataGrid, GridValueGetterParams } from "@mui/x-data-grid";
import { Button } from 'react-bootstrap';

const columns = [
  { field: "id", headerName: "ID", width: 70 },
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
    width: 160,
    valueGetter: (params: GridValueGetterParams): string => `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];

let rows = [
  { id: 1, lastName: "Squarepants", firstName: "Spongebob", age: 35 },
  { id: 2, lastName: "Tentacles", firstName: "Squidward", age: 42 },
  { id: 3, lastName: "Krabs", firstName: "Eugene", age: 58 },
];

export default function Something() {
  const addRow = () => {
    rows.push({ id: rows.length + 1, lastName: "Snow", firstName: "Jon", age: 35 });
  };

  return (
    <div>
      {/* <Button variant="primary" onClick={addRow}>Add Row</Button> */}
      <DataGrid rows={rows} columns={columns} experimentalFeatures={{ newEditingApi: true }} autoHeight />
    </div>
  );
};
