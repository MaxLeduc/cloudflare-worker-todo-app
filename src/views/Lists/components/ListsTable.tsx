import { useContext } from 'react'
import { DataGrid, GridColDef, GridRowParams } from '@mui/x-data-grid'
import { NavigateFunction, useNavigate } from 'react-router-dom'

import { ListContext } from '@app/providers'

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID' },
  { field: 'name', headerName: 'Name' },
]

const onRowClickHandler = (
  e: GridRowParams<any>,
  navigate: NavigateFunction,
) => {
  navigate(`/lists/${e.id}`)
}

export default function ListsTable() {
  const navigate = useNavigate()
  const listValues = useContext(ListContext)

  if (!listValues) {
    return null
  }

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <DataGrid
        rows={listValues.lists}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        onRowClick={e => onRowClickHandler(e, navigate)}
      />
    </div>
  )
}
