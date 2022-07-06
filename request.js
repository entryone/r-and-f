import { fromJS } from 'immutable'

export const getRnF = data => {
  return data.get('rnf')
}

export const getColumns = (data) => {
  return data.get('columns')
}

export const getRows = (data) => {
  return data.get('rows')
}

export const getData = (data) => {
  return data.get('quantity')
}

export const getColumnName = (column) => {
  const name = column.get('name')
  return name.get(name.get('mode'))
}

export const getCostsName = (column) => {
  const name = column.get('costs')
  return name.get(name.get('mode'))
}

const HEADER_COLUMN_UID = 'header'
const HEADER_COLUMN_NAME = 'Vehicles'
const COSTS_COLUMN_UID = 'costs'
const COSTS_COLUMN_NAME = 'costs'

export const getColumnsDef = (data) => {
  let columns = getColumns(data)
  columns = columns.unshift(fromJS({
    uid: COSTS_COLUMN_UID,
    name: { mode: 'auto', auto: COSTS_COLUMN_NAME },
  }))

  columns = columns.unshift(fromJS({
    uid: HEADER_COLUMN_UID,
    name: { mode: 'auto', auto: HEADER_COLUMN_NAME },
  }))

  return columns.map((column) => {
    return {
      field: column.get('uid'),
      colId: column.get('uid'),
      headerName: getColumnName(column),
    }
  })
}

export const getRowData = (data) => {
  const sectionData = getData(data)
  const columns = getColumns(data)
  const rows = getRows(data)

  return rows.map((row) => {
    let _row = fromJS({})
    _row = _row.set(HEADER_COLUMN_UID, getColumnName(row));
    _row = _row.set(COSTS_COLUMN_UID, getCostsName(row));
    columns.map((column, columnIndex) => {
      _row = _row.set(column.get('uid'), sectionData.getIn([row.get('uid'), column.get('uid')], ''))
    });
    return _row
  }).toJS()
}
