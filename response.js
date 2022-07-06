import { fromJS } from 'immutable';

export const response = fromJS({
  rows: [
    { uid: '12abcd56', name: { mode: 'auto', auto: 'rows.1' } },
    { uid: '23abcd57', name: { mode: 'auto', auto: 'rows.2' } },
    { uid: '34abcd58', name: { mode: 'auto', auto: 'rows.3' } },
  ],
  columns: [
    { uid: '5060', name: { mode: 'auto', auto: 'Shed.1' } },
    { uid: '6070', name: { mode: 'auto', auto: 'Shed.2' } },
    { uid: '6071', name: { mode: 'auto', auto: 'Shed.3' } },
    { uid: '6072', name: { mode: 'auto', auto: 'Shed.4' } },
  ],
  sections: [
    {
      data: [
        [{ v: 10 }, { v: 20 }, { v: 30 }, { v: 40, c: 'lb' }],
        [{ v: 100 }, { v: 200 }, { v: 300 }, { v: 401 }],
        [{ v: 10.8 }, { v: 20.9 }, { v: 30.3 }, { v: 40.1 }],
      ],
    },
  ],
});

export const getColumns = (data) => {
  return data.get('columns');
};

export const getRows = (data) => {
  return data.get('rows');
};

export const getData = (data, sectionIndex) => {
  return data.getIn(['sections', sectionIndex, 'data']);
};

export const getColumnName = (column) => {
  const name = column.get('name');
  return name.get(name.get('mode'));
};

const HEADER_COLUMN_UID = 'header'
const HEADER_COLUMN_NAME = 'Vehicles'

export const getColumnsDef = (data) => {
  let columns = getColumns(data);
  columns = columns.unshift(fromJS({
    uid: HEADER_COLUMN_UID,
    name: {mode: 'auto', auto: HEADER_COLUMN_NAME}
  }))
  return columns.map((column) => {
    return fromJS({
      field: column.get('uid'),
      colId: column.get('uid'),
      headerName: getColumnName(column),
    });
  }).toJS();
};

export const getRowData = data => {
  const sectionData = getData(data, 0)
  const columns = getColumns(data);
  const rows = getRows(data);
  
  return sectionData.map((dataRow, rowIndex) => {
    let row = fromJS({})
    row = row.set(HEADER_COLUMN_UID, getColumnName(rows.get(rowIndex)))
    columns.map((column, columnIndex) => {
        row = row.set(column.get('uid'), dataRow.getIn([columnIndex, 'v'], ''))
    })
    return row
  }).toJS()
};
