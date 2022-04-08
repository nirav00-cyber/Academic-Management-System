import React,{useState,useEffect} from 'react';
import { DataGrid } from '@mui/x-data-grid';



export default function DataGridDemo(props)
{
  const [rows, setRows] = useState([]);
  useEffect(() =>
  {
    console.log(props.studentsData);
    setRows(props.studentsData);
  }, [props]);


  const columns = [

  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'name',
    headerName: 'Name',
    width: 150,
    editable: true,
  },
  {
    field: 'email',
    headerName: 'Email',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'contactNumber',
    headerName: 'Contact Number',
    sortable: true,
    width: 160
  },
];


  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        getRowId={(row) => row._id}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
