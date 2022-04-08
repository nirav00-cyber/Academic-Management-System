import React,{useState,useEffect} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';

import { useAuth } from '../../lib/AuthContext';


export default function DataGridDemo(props)
{

  const [rows, setRows] = useState([]);
  useEffect(() =>
  {
    console.log(props.courseData.enrollmentReqs);
    setRows(props.courseData.enrollmentReqs);
  }, [props]);
  const {removeEnrollReq} = useAuth();
  const deleteRow = (rowId) =>
  {
    console.log(rowId);
    setRows((rows) => rows.filter((row) => row.id !== rowId));
    props.alterCounter();
  }
  const columns = [
  { field: 'id', headerName: 'ID', width: 200 },
  {
    field: 'name',
    headerName: 'Name',
    width: 140,
    editable: true,
  },
  {
    field: 'email',
    headerName: 'Email',
    sortable: true,
    width: 180
  },
  {
    field: 'contactNumber',
    headerName: 'Contact Number',
    type: 'number',
    width: 130,
    editable: true,
  },
  {
    field: "Print",
    width:150,
  renderCell: (cellValues) => {
    return (
      <Button
        variant="contained"
        color="primary"
        onClick={(event) =>
        {
          // console.log(props.courseData);
                    const data = {
            courseId: props.courseData._id,
            rowData: cellValues.row,
          }
          removeEnrollReq(data);

          deleteRow(cellValues.row.id);
        }}
      >
        Approve
      </Button>
    );
  }
}

];
  
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        C
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
